// Shared audio / TTS utility — used by flashcards, word list, hoeren, speaking
//
// Voice selection strategy (best → fallback) to match exam-style neutral Hochdeutsch:
//   1. Google Deutsch (de-DE) — highest quality, closest to broadcast German
//   2. Microsoft German voice (de-DE) — also high quality
//   3. Any de-DE voice
//   4. Any de-* voice as last resort

function pickVoice(voices) {
  // Prefer de-DE voices; within those prefer Google > Microsoft > anything else
  const de = voices.filter(v => v.lang === 'de-DE');
  const deAny = voices.filter(v => v.lang.startsWith('de'));
  const pool = de.length ? de : deAny;
  return (
    pool.find(v => /google/i.test(v.name)) ||
    pool.find(v => /microsoft/i.test(v.name)) ||
    pool[0] ||
    null
  );
}

let _activeBtn = null;
let _activeAudio = null;

function clearActiveBtn() {
  if (_activeAudio) {
    _activeAudio.pause();
    _activeAudio.currentTime = 0;
    _activeAudio = null;
  }
  if (_activeBtn) {
    _activeBtn.classList.remove('speaking');
    _activeBtn = null;
  }
}

export function speak(text, btn = null) {
  if (!window.speechSynthesis) return;
  // Toggle: tapping the already-playing button again stops playback
  if (btn && btn === _activeBtn) {
    clearActiveBtn();
    speechSynthesis.cancel();
    return;
  }
  clearActiveBtn();
  speechSynthesis.cancel();
  const trySpeak = () => {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'de-DE';
    u.rate = 0.9;   // natural exam pace — clear but not artificially slow
    u.pitch = 1.0;  // neutral, no artificial inflection
    const voice = pickVoice(speechSynthesis.getVoices());
    if (voice) u.voice = voice;
    if (btn) {
      btn.classList.add('speaking');
      _activeBtn = btn;
    }
    u.onend = clearActiveBtn;
    u.onerror = clearActiveBtn;
    speechSynthesis.speak(u);
  };
  if (speechSynthesis.getVoices().length) trySpeak();
  else speechSynthesis.addEventListener('voiceschanged', trySpeak, { once: true });
}

// Play a real audio file (e.g. exam-style recording). Falls back to speak() if url is falsy.
export function playAudio(url, btn = null) {
  if (!url) return;
  // Toggle: tapping the already-playing button again stops playback
  if (btn && btn === _activeBtn) {
    clearActiveBtn();
    return;
  }
  clearActiveBtn();
  speechSynthesis && speechSynthesis.cancel();
  const audio = new Audio(url);
  _activeAudio = audio;
  if (btn) {
    btn.classList.add('speaking');
    _activeBtn = btn;
  }
  // Only clean up if this audio element is still the active one
  const cleanup = () => { if (_activeAudio === audio) clearActiveBtn(); };
  audio.onended = cleanup;
  audio.onerror = cleanup;
  audio.play().catch(err => {
    console.error('[audio] playback failed:', err);
    cleanup();
  });
}

// Preload TTS voices and warm up the audio pipeline so the first tap has no delay.
export function prewarmTTS() {
  if (!window.speechSynthesis) return;
  const warmup = () => {
    const u = new SpeechSynthesisUtterance('\u200b'); // zero-width space — silent utterance
    u.volume = 0;
    u.lang = 'de-DE';
    const voice = pickVoice(speechSynthesis.getVoices());
    if (voice) u.voice = voice;
    speechSynthesis.speak(u);
  };
  // Trigger async voice loading; warm up once voices are ready
  if (speechSynthesis.getVoices().length) {
    warmup();
  } else {
    speechSynthesis.addEventListener('voiceschanged', warmup, { once: true });
    speechSynthesis.getVoices(); // kick off async load on browsers that need it
  }
}

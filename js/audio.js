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

function clearActiveBtn() {
  if (_activeBtn) {
    _activeBtn.classList.remove('speaking');
    _activeBtn = null;
  }
}

export function speak(text, btn = null) {
  if (!window.speechSynthesis) return;
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

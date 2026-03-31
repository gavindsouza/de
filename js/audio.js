// Shared audio / TTS utility — used by flashcards, word list, hoeren, speaking

export function speak(text) {
  if (!window.speechSynthesis) return;
  speechSynthesis.cancel();
  const trySpeak = () => {
    const voices = speechSynthesis.getVoices();
    const deVoice = voices.find(v => v.lang.startsWith('de')) || null;
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'de-DE';
    u.rate = 0.82;
    if (deVoice) u.voice = deVoice;
    speechSynthesis.speak(u);
  };
  if (speechSynthesis.getVoices().length) trySpeak();
  else speechSynthesis.addEventListener('voiceschanged', trySpeak, { once: true });
}

// Speaking simulator module

import { words } from './data.js';

const nouns = words.filter(w => w.a);

export function newSpeak() {
  const w = nouns[Math.random() * nouns.length | 0];
  document.getElementById('spkArt').textContent = w.a;
  document.getElementById('spkWd').textContent = w.w;
  const acc = w.a === 'der' ? 'einen' : w.a === 'die' ? 'eine' : 'ein';
  document.getElementById('spkSugs').innerHTML = [
    { d: `Wo ist ${w.a} ${w.w}?`, e: `Where is the ${w.w}?` },
    { d: `Haben Sie ${acc} ${w.w}?`, e: `Do you have a ${w.w}?` },
    { d: `Ich möchte ${acc} ${w.w}, bitte.`, e: `I'd like a ${w.w}, please.` },
    { d: `Was kostet ${w.a} ${w.w}?`, e: `How much is the ${w.w}?` },
  ].map(s => `<div class="spk-sug"><div class="de">${s.d}</div><div class="en">${s.e}</div></div>`).join('');
}

// Self-introduction practice module

import { S, save } from './state.js';

export function saveIntro() {
  S.intro = {
    n: document.getElementById('iName').value,
    a: document.getElementById('iAge').value,
    c: document.getElementById('iCountry').value,
    j: document.getElementById('iJob').value,
    l: document.getElementById('iLangs').value,
  };
  save();
  updPreview();
}

export function loadIntro() {
  const d = S.intro;
  if (d.n) document.getElementById('iName').value = d.n;
  if (d.a) document.getElementById('iAge').value = d.a;
  if (d.c) document.getElementById('iCountry').value = d.c;
  if (d.j) document.getElementById('iJob').value = d.j;
  if (d.l) document.getElementById('iLangs').value = d.l;
  updPreview();
}

export function updPreview() {
  const d = S.intro;
  document.getElementById('introPreview').innerHTML = [
    `Mein Name ist ${d.n || '___'}.`,
    `Ich bin ${d.a || '___'} Jahre alt.`,
    `Ich komme aus ${d.c || '___'}.`,
    `Ich bin ${d.j || '___'} von Beruf.`,
    `Ich spreche ${d.l || '___'} und ein bisschen Deutsch.`,
  ].map(l => `<div>${l}</div>`).join('');
}

export function incPractice() {
  S.pCount = Math.min(S.pCount + 1, 20);
  document.getElementById('pCount').textContent = S.pCount;
  document.getElementById('pProg').style.width = S.pCount / 20 * 100 + '%';
  save();
}

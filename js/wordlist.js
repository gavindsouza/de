// Word list filtering and display

import { words } from './data/words.js';
import { S } from './state.js';
import { buildFilters } from './flashcards.js';

export function setWF(c) {
  S.wlFilter = c;
  buildFilters();
  filterWL(document.getElementById('wlSearch').value);
}

export function filterWL(q) {
  q = q.toLowerCase();
  let f = S.wlFilter === 'Alle' ? words : words.filter(w => w.c === S.wlFilter);
  if (q) f = f.filter(w => w.w.toLowerCase().includes(q) || w.e.toLowerCase().includes(q));
  document.getElementById('wlCount').textContent = f.length + ' words';
  document.getElementById('wlList').innerHTML = f.map(w =>
    `<div class="wl-item"><div class="w">${w.a ? '<span class="art">' + w.a + '</span> ' : ''}${w.w}</div><div class="ex">${w.e}</div></div>`
  ).join('');
}

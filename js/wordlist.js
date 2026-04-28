// Word list filtering and display

import { words } from './data/words.js';
import { S } from './state.js';
import { buildFilters } from './flashcards.js';
import { speak } from './audio.js';
import { SPEAKER_SVG } from './utils.js';

export function setWF(c) {
  S.wlFilter = c;
  buildFilters();
  filterWL(document.getElementById('wlSearch').value);
}

export function filterWL(q) {
  q = q.toLowerCase();
  let f = S.wlFilter === 'Alle' ? words : words.filter(w => w.c === S.wlFilter);
  if (q) f = f.filter(w => w.w.toLowerCase().includes(q) || w.e.toLowerCase().includes(q) || w.t.toLowerCase().includes(q));
  document.getElementById('wlCount').textContent = f.length + ' words';
  document.getElementById('wlList').innerHTML = f.map(w => {
    const status = S.known.has(w.w) ? 'known' : S.shaky.has(w.w) ? 'shaky' : S.unknown.has(w.w) ? 'again' : 'unseen';
    const safeWord = w.w.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
    return `<div class="wl-item">
      <div class="wl-item-top">
        <div class="w">${w.a ? `<span class="art art-${w.a}">${w.a}</span> ` : ''}<span class="wl-dot wl-dot-${status}" title="${status}"></span>${w.w}</div>
        <button class="wl-speak-btn" data-de="${w.w}" onclick="wlSpeak(this.dataset.de, this)" title="Hear pronunciation">${SPEAKER_SVG}</button>
      </div>
      <div class="ex">${w.e}</div>
      <div class="wl-trans">${w.t}</div>
    </div>`;
  }).join('');
}

export function wlSpeak(text, btn) {
  speak(text, btn);
}

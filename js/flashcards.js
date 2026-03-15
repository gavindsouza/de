// Flashcard logic: deck building, display, swipe, keyboard

import { words } from './data.js';
import { S, save } from './state.js';

export function cats() {
  return ['Alle', ...new Set(words.map(w => w.c))];
}

export function buildFilters() {
  const c = cats();
  document.getElementById('catFilters').innerHTML = c.map(x =>
    `<button class="chip ${S.filter === x ? 'active' : ''}" onclick="setF('${x}')">${x}</button>`
  ).join('');
  document.getElementById('wlFilters').innerHTML = c.map(x =>
    `<button class="chip ${S.wlFilter === x ? 'active' : ''}" onclick="setWF('${x}')">${x}</button>`
  ).join('');
}

export function setF(c) {
  S.filter = c;
  S.idx = 0;
  S.flipped = false;
  buildDeck();
  buildFilters();
  showCard();
}

export function buildDeck() {
  S.deck = S.filter === 'Alle' ? [...words] : words.filter(w => w.c === S.filter);
  for (let i = S.deck.length - 1; i > 0; i--) {
    const j = Math.random() * i | 0;
    [S.deck[i], S.deck[j]] = [S.deck[j], S.deck[i]];
  }
}

export function showCard() {
  if (!S.deck.length) return;
  const w = S.deck[S.idx % S.deck.length];
  document.getElementById('fcArt').textContent = w.a || '';
  document.getElementById('fcWord').textContent = w.w;
  document.getElementById('fcCat').textContent = w.c;
  document.getElementById('fcWordB').textContent = (w.a ? w.a + ' ' : '') + w.w;
  document.getElementById('fcEx').textContent = w.e;
  document.getElementById('flashcard').classList.remove('flipped');
  S.flipped = false;
  updStats();
}

export function flip() {
  S.flipped = !S.flipped;
  document.getElementById('flashcard').classList.toggle('flipped');
}

export function mark(k) {
  const w = S.deck[S.idx % S.deck.length];
  if (k) { S.known.add(w.w); S.unknown.delete(w.w); }
  else { S.unknown.add(w.w); S.known.delete(w.w); }
  S.idx++;
  save();
  showCard();
}

function updStats() {
  const t = S.deck.length;
  const k = S.deck.filter(w => S.known.has(w.w)).length;
  const u = S.deck.filter(w => S.unknown.has(w.w)).length;
  document.getElementById('fcStats').innerHTML = `
    <div class="fc-stat green"><div class="n">${k}</div><div class="l">Known</div></div>
    <div class="fc-stat red"><div class="n">${u}</div><div class="l">Learning</div></div>
    <div class="fc-stat"><div class="n">${t - k - u}</div><div class="l">Unseen</div></div>`;
  document.getElementById('fcProg').style.width = `${k / t * 100}%`;
  document.getElementById('fcCounter').textContent = `${S.idx % t + 1} / ${t}`;
}

export function initSwipe() {
  let tx = 0, swiping = false;
  const ca = document.getElementById('cardArea');
  ca.addEventListener('touchstart', e => { tx = e.touches[0].clientX; swiping = false; }, { passive: true });
  ca.addEventListener('touchmove', e => { if (Math.abs(e.touches[0].clientX - tx) > 15) swiping = true; }, { passive: true });
  ca.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - tx;
    if (swiping && Math.abs(dx) > 60) { dx > 0 ? mark(true) : mark(false); }
    else if (!swiping) flip();
  });
}

export function initKeyboard() {
  document.addEventListener('keydown', e => {
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) return;
    if (e.key === ' ' || e.key === 'f') { e.preventDefault(); flip(); }
    if (e.key === 'ArrowRight' || e.key === 'k') mark(true);
    if (e.key === 'ArrowLeft' || e.key === 'j') mark(false);
  });
}

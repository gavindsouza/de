// Flashcard logic: deck building, display, swipe, keyboard

import { words } from './data/words.js';
import { S, save } from './state.js';

export function cats() {
  return ['Alle', ...new Set(words.map(w => w.c))];
}

export function buildFilters() {
  const c = cats();
  const lc = S.unknown.size;
  document.getElementById('catFilters').innerHTML =
    `<button class="chip chip-learning ${S.filter === 'Learning' ? 'active' : ''}" onclick="setF('Learning')">🔴 Learning${lc ? ' ' + lc : ''}</button>` +
    c.map(x =>
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
  if (S.filter === 'Learning') {
    S.deck = words.filter(w => S.unknown.has(w.w));
  } else {
    S.deck = S.filter === 'Alle' ? [...words] : words.filter(w => w.c === S.filter);
  }
  for (let i = S.deck.length - 1; i > 0; i--) {
    const j = Math.random() * i | 0;
    [S.deck[i], S.deck[j]] = [S.deck[j], S.deck[i]];
  }
}

export function showCard() {
  if (!S.deck.length) {
    const artEl = document.getElementById('fcArt');
    artEl.textContent = S.filter === 'Learning' ? '🎉' : '';
    artEl.className = 'article';
    document.getElementById('fcWord').textContent = S.filter === 'Learning' ? 'All clear!' : '—';
    document.getElementById('fcCat').textContent = '';
    document.getElementById('fcWordB').textContent = '';
    document.getElementById('fcTrans').textContent = S.filter === 'Learning' ? `Mark words "Don't Know" to add them here.` : '';
    document.getElementById('fcEx').textContent = '';
    document.getElementById('flashcard').classList.remove('flipped');
    S.flipped = false;
    updStats();
    return;
  }
  const w = S.deck[S.idx % S.deck.length];
  const artEl = document.getElementById('fcArt');
  artEl.textContent = w.a || '';
  artEl.className = 'article' + (w.a ? ' art-' + w.a : '');
  document.getElementById('fcWord').textContent = w.w;
  document.getElementById('fcCat').textContent = w.c;
  const wbEl = document.getElementById('fcWordB');
  if (w.a) {
    wbEl.innerHTML = `<span class="art-${w.a}">${w.a}</span> ${w.w}`;
  } else {
    wbEl.textContent = w.w;
  }
  document.getElementById('fcTrans').textContent = w.t || '';
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
  if (S.filter === 'Learning') buildDeck();
  buildFilters();
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
  document.getElementById('fcProg').style.width = t ? `${k / t * 100}%` : '0%';
  document.getElementById('fcCounter').textContent = t ? `${S.idx % t + 1} / ${t}` : '0 / 0';
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

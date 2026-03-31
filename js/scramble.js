// Sentence Scramble — tap words in the correct order to practise the V2 rule

import { scrambleData } from './data/scramble.js';
import { S, save } from './state.js';

let current = null; // { item, shuffled, placed }

export function newScramble() {
  const item = scrambleData[Math.random() * scrambleData.length | 0];
  // Shuffle the words array
  const shuffled = [...item.words].sort(() => Math.random() - .5);
  // If after shuffle the answer accidentally matches, re-shuffle once
  if (shuffled.join(' ') === item.answer.join(' ') && item.words.length > 1) {
    shuffled.sort(() => Math.random() - .5);
  }
  current = { item, shuffled, placed: [] };
  renderScramble();
}

function renderScramble() {
  const { item, shuffled, placed } = current;
  const placedSet = new Set(placed);
  const available = shuffled
    .map((w, i) => ({ w, i }))
    .filter(x => !placedSet.has(x.i));

  const builtHtml = placed.length
    ? placed.map(i =>
        `<span class="scr-chip scr-placed" onclick="scrRemove(${i})">${shuffled[i]}</span>`
      ).join('')
    : '<span class="scr-empty">Tap words below…</span>';

  const chipsHtml = available.map(x =>
    `<span class="scr-chip" onclick="scrPlace(${x.i})">${x.w}</span>`
  ).join('');

  const allPlaced = placed.length === shuffled.length;

  document.getElementById('scrambleQuiz').innerHTML =
    `<div class="scr-prompt">${item.t}</div>
    <div class="scr-built" id="scrBuilt">${builtHtml}</div>
    <div class="scr-chips" id="scrChips">${chipsHtml}</div>
    <div class="scr-feedback" id="scrFB"></div>
    <div class="scr-actions">
      <button class="scr-undo-btn" onclick="scrUndo()">↩ Undo</button>
      <button class="btn-full scr-check-btn" onclick="scrCheck()" ${allPlaced ? '' : 'disabled'}>Check ✓</button>
    </div>`;
  updScrStats();
}

export function scrPlace(i) {
  if (!current) return;
  current.placed.push(i);
  renderScramble();
}

export function scrRemove(i) {
  if (!current) return;
  const idx = current.placed.lastIndexOf(i);
  if (idx !== -1) current.placed.splice(idx, 1);
  renderScramble();
}

export function scrUndo() {
  if (!current || !current.placed.length) return;
  current.placed.pop();
  renderScramble();
}

export function scrCheck() {
  if (!current) return;
  const { item, shuffled, placed } = current;
  const built = placed.map(i => shuffled[i]);
  const ok = built.join(' ') === item.answer.join(' ');

  S.scrT++;
  if (ok) S.scrS++;
  save();
  updScrStats();

  document.getElementById('scrFB').innerHTML = ok
    ? `<div class="scr-fb-ok">✓ Richtig! <em>${item.answer.join(' ')}</em></div>`
    : `<div class="scr-fb-no">✗ Falsch — Richtig: <strong>${item.answer.join(' ')}</strong></div>`;

  // Highlight built chips green/red
  document.querySelectorAll('.scr-placed').forEach((el, idx) => {
    el.classList.add(built[idx] === item.answer[idx] ? 'scr-correct' : 'scr-wrong');
  });

  // Disable check button, show next
  document.querySelector('.scr-check-btn').disabled = true;
  document.querySelector('.scr-undo-btn').style.display = 'none';
  document.getElementById('scrambleQuiz').insertAdjacentHTML('beforeend',
    `<button class="btn-full" style="margin-top:8px" onclick="newScramble()">Next Sentence →</button>`
  );
}

function updScrStats() {
  document.getElementById('scrS').textContent = S.scrS;
  document.getElementById('scrT').textContent = S.scrT;
}

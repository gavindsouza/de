// Der / die / das article quiz

import { words } from './data/words.js';
import { S, save } from './state.js';

const articleWords = words.filter(w => w.a === 'der' || w.a === 'die' || w.a === 'das');

export function newArt() {
  const w = articleWords[Math.random() * articleWords.length | 0];
  document.getElementById('artQuiz').innerHTML =
    `<div class="quiz-box">
      <div class="art-q-word">${w.w}<div class="art-q-trans">${w.t}</div></div>
      <div class="quiz-opts">
        ${['der', 'die', 'das'].map(a =>
          `<button class="quiz-opt art-btn-${a}" onclick="chkArt(this,'${a}','${w.a}')">${a}</button>`
        ).join('')}
      </div>
    </div>`;
  updArtStats();
}

export function chkArt(el, ch, ans) {
  el.parentElement.querySelectorAll('.quiz-opt').forEach(o => {
    o.classList.add('disabled');
    if (o.textContent === ans) o.classList.add('correct');
    if (o === el && ch !== ans) o.classList.add('wrong');
  });
  S.artT++;
  if (ch === ans) S.artS++;
  save();
  updArtStats();
  setTimeout(newArt, 1200);
}

function updArtStats() {
  document.getElementById('artS').textContent = S.artS;
  document.getElementById('artT').textContent = S.artT;
}

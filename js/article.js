// Der / die / das article quiz

import { S, save } from './state.js';
import { rand, markOpts, updStatPair } from './utils.js';
import { getWords } from './level.js';

export function newArt() {
  const articleWords = getWords().filter(w => w.a === 'der' || w.a === 'die' || w.a === 'das');
  const w = rand(articleWords);
  document.getElementById('artQuiz').innerHTML =
    `<div class="quiz-box">
      <div class="art-q-word">${w.w}<div class="art-q-trans">${w.t}</div></div>
      <div class="quiz-opts">
        ${['der', 'die', 'das'].map(a =>
          `<button class="quiz-opt art-btn-${a}" onclick="chkArt(this,'${a}','${w.a}')">${a}</button>`
        ).join('')}
      </div>
    </div>`;
  updStatPair('artS', 'artT', S.artS, S.artT);
}

export function chkArt(el, ch, ans) {
  markOpts(el.parentElement, el, o => o.textContent === ans);
  S.artT++;
  if (ch === ans) S.artS++;
  save();
  updStatPair('artS', 'artT', S.artS, S.artT);
  setTimeout(newArt, 1200);
}

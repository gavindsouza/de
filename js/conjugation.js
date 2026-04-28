// Verb Conjugation Drill
// Shows: pronoun + infinitive (+ meaning) → pick the correct conjugated form

import { conjugationData } from './data/conjugation.js';
import { S, save } from './state.js';
import { rand, markOpts, updStatPair } from './utils.js';

export function newConj() {
  const entry = rand(conjugationData);
  const pronouns = Object.keys(entry.forms);
  const pronoun = rand(pronouns);
  const correct = entry.forms[pronoun];

  // Distractors: other unique forms of the same verb, excluding the correct one
  const others = pronouns
    .filter(p => p !== pronoun)
    .map(p => entry.forms[p])
    .filter((f, i, arr) => arr.indexOf(f) === i && f !== correct);
  const distractors = others.sort(() => Math.random() - .5).slice(0, 3);
  const opts = [...distractors, correct].sort(() => Math.random() - .5);

  document.getElementById('conjQuiz').innerHTML =
    `<div class="conj-card">
      <div class="conj-pronoun">${pronoun}</div>
      <div class="conj-verb">${entry.verb} <span class="conj-meaning">(${entry.meaning})</span></div>
    </div>
    <div class="quiz-box" data-ans="${correct}">
      <div class="quiz-opts">
        ${opts.map(o => `<button class="quiz-opt" onclick="chkConj(this)">${o}</button>`).join('')}
      </div>
    </div>`;
  updStatPair('conjS', 'conjT', S.conjS, S.conjT);
}

export function chkConj(el) {
  const box = el.closest('.quiz-box');
  const correct = box.dataset.ans;
  markOpts(box, el, o => o.textContent.trim() === correct);
  S.conjT++;
  if (el.textContent.trim() === correct) S.conjS++;
  save();
  updStatPair('conjS', 'conjT', S.conjS, S.conjT);
  setTimeout(newConj, 1200);
}

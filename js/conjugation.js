// Verb Conjugation Drill
// Shows: pronoun + infinitive (+ meaning) → pick the correct conjugated form

import { conjugationData } from './data/conjugation.js';
import { S, save } from './state.js';

export function newConj() {
  const entry = conjugationData[Math.random() * conjugationData.length | 0];
  const pronouns = Object.keys(entry.forms);
  const pronoun = pronouns[Math.random() * pronouns.length | 0];
  const correct = entry.forms[pronoun];

  // Distractors: other unique forms of the same verb, excluding the correct one
  const others = pronouns
    .filter(p => p !== pronoun)
    .map(p => entry.forms[p])
    .filter((f, i, arr) => arr.indexOf(f) === i && f !== correct);
  const distractors = others.sort(() => Math.random() - .5).slice(0, 3);
  const opts = [...distractors, correct].sort(() => Math.random() - .5);

  document.getElementById('conjQuiz').innerHTML =
    `<div class="quiz-box" data-ans="${correct}">
      <div class="conj-pronoun">${pronoun}</div>
      <div class="conj-verb">${entry.verb} <span class="conj-meaning">(${entry.meaning})</span></div>
      <div class="quiz-opts">
        ${opts.map(o => `<button class="quiz-opt" onclick="chkConj(this)">${o}</button>`).join('')}
      </div>
    </div>`;
  updConjStats();
}

export function chkConj(el) {
  const box = el.closest('.quiz-box');
  const correct = box.dataset.ans;
  const chosen = el.textContent.trim();
  box.querySelectorAll('.quiz-opt').forEach(o => {
    o.classList.add('disabled');
    if (o.textContent.trim() === correct) o.classList.add('correct');
    if (o === el && chosen !== correct) o.classList.add('wrong');
  });
  S.conjT++;
  if (chosen === correct) S.conjS++;
  save();
  updConjStats();
  setTimeout(newConj, 1200);
}

function updConjStats() {
  document.getElementById('conjS').textContent = S.conjS;
  document.getElementById('conjT').textContent = S.conjT;
}

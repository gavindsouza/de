// Case Transformation Quiz
// Shows a sentence with a blank; learner picks the correct article form.
// Tests accusative, dative, possessives, and kein-negation.

import { casesData } from './data/cases.js';
import { S, save } from './state.js';
import { rand, markOpts, updStatPair } from './utils.js';

export function newCase() {
  const item = rand(casesData);
  const opts = [...item.opts].sort(() => Math.random() - .5);

  document.getElementById('casesQuiz').innerHTML =
    `<div class="quiz-box" data-ans="${item.a}">
      <div class="cases-sentence">${item.s.replace('___', '<span class="cases-blank">___</span>')}</div>
      <div class="cases-hint">${item.hint}</div>
      <div class="quiz-opts">
        ${opts.map(o => `<button class="quiz-opt" onclick="chkCase(this)">${o}</button>`).join('')}
      </div>
    </div>`;
  updCaseStats();
}

export function chkCase(el) {
  const box = el.closest('.quiz-box');
  const correct = box.dataset.ans;
  markOpts(box, el, o => o.textContent.trim() === correct);
  S.casT++;
  if (el.textContent.trim() === correct) S.casS++;
  save();
  updStatPair('casS', 'casT', S.casS, S.casT);
  setTimeout(newCase, 1200);
}

function updCaseStats() {
  updStatPair('casS', 'casT', S.casS, S.casT);
}

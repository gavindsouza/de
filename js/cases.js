// Case Transformation Quiz
// Shows a sentence with a blank; learner picks the correct article form.
// Tests accusative, dative, possessives, and kein-negation.

import { casesData } from './data/cases.js';
import { S, save } from './state.js';

export function newCase() {
  const item = casesData[Math.random() * casesData.length | 0];
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
  const chosen = el.textContent.trim();
  box.querySelectorAll('.quiz-opt').forEach(o => {
    o.classList.add('disabled');
    if (o.textContent.trim() === correct) o.classList.add('correct');
    if (o === el && chosen !== correct) o.classList.add('wrong');
  });
  S.casT++;
  if (chosen === correct) S.casS++;
  save();
  updCaseStats();
  setTimeout(newCase, 1200);
}

function updCaseStats() {
  document.getElementById('casS').textContent = S.casS;
  document.getElementById('casT').textContent = S.casT;
}

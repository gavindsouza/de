// W-Fragen quiz module

import { wfQuestions } from './data/wf-questions.js';
import { S, save } from './state.js';

export function newWF() {
  const q = wfQuestions[Math.random() * wfQuestions.length | 0];
  const sh = [...q.o].sort(() => Math.random() - .5);
  document.getElementById('wfQuiz').innerHTML =
    `<div class="quiz-box"><div class="quiz-q"><span style="color:var(--yellow);font-weight:800">______</span> ${q.q.substring(4)}</div><div class="quiz-opts">${sh.map(o =>
      `<button class="quiz-opt" onclick="chkWF(this,'${o}','${q.a}')">${o}</button>`
    ).join('')}</div></div>`;
}

export function chkWF(el, ch, ans) {
  el.parentElement.querySelectorAll('.quiz-opt').forEach(o => {
    o.classList.add('disabled');
    if (o.textContent === ans) o.classList.add('correct');
    if (o === el && ch !== ans) o.classList.add('wrong');
  });
  S.wfT++;
  if (ch === ans) S.wfS++;
  document.getElementById('wfS').textContent = S.wfS;
  document.getElementById('wfT').textContent = S.wfT;
  save();
}

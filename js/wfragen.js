// W-Fragen quiz module

import { wfQuestions } from './data/wf-questions.js';
import { S, save } from './state.js';
import { rand, markOpts, updStatPair } from './utils.js';

export function newWF() {
  const q = rand(wfQuestions);
  const sh = [...q.o].sort(() => Math.random() - .5);
  document.getElementById('wfQuiz').innerHTML =
    `<div class="quiz-box"><div class="quiz-q"><span style="color:var(--yellow);font-weight:800">______</span> ${q.q.substring(4)}</div><div class="quiz-opts">${sh.map(o =>
      `<button class="quiz-opt" onclick="chkWF(this,'${o}','${q.a}')">${o}</button>`
    ).join('')}</div></div>`;
}

export function chkWF(el, ch, ans) {
  markOpts(el.parentElement, el, o => o.textContent === ans);
  S.wfT++;
  if (ch === ans) S.wfS++;
  updStatPair('wfS', 'wfT', S.wfS, S.wfT);
  save();
}

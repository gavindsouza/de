// 14-day schedule module

import { schedule } from './data/schedule.js';
import { S, save } from './state.js';

export function buildSched() {
  document.getElementById('schedCards').innerHTML = schedule.map(s =>
    `<div class="day-card ${S.days.has(s.d) ? 'done' : ''}">
      <div class="day-num" onclick="togDay(${s.d})">${s.d}</div>
      <div class="day-info" onclick="togDay(${s.d})">
        <div class="day-focus">${s.f}</div>
        <div class="day-task">${s.t}</div>
      </div>
      <div class="day-card-right">
        ${s.go ? `<button class="day-go-btn" onclick="go('${s.go}')${s.go === 'mockexam' ? ';startExam()' : ''}">→</button>` : ''}
        <div class="day-check" onclick="togDay(${s.d})">${S.days.has(s.d) ? '&#x2713;' : ''}</div>
      </div>
    </div>`
  ).join('');
}

export function togDay(d) {
  if (S.days.has(d)) S.days.delete(d);
  else S.days.add(d);
  save();
  buildSched();
}

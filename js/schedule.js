// 14-day schedule module

import { schedule } from './data/schedule.js';
import { S, save } from './state.js';

export function buildSched() {
  document.getElementById('schedCards').innerHTML = schedule.map(s =>
    `<div class="day-card ${S.days.has(s.d) ? 'done' : ''}" onclick="togDay(${s.d})"><div class="day-num">${s.d}</div><div class="day-info"><div class="day-focus">${s.f}</div><div class="day-task">${s.t}</div></div><div class="day-check">${S.days.has(s.d) ? '&#x2713;' : ''}</div></div>`
  ).join('');
}

export function togDay(d) {
  if (S.days.has(d)) S.days.delete(d);
  else S.days.add(d);
  save();
  buildSched();
}

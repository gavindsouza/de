// App state and localStorage persistence

import { words } from './data/words.js';

export const S = {
  idx: 0,
  known: new Set(),
  unknown: new Set(),
  flipped: false,
  deck: [],
  filter: 'Alle',
  wlFilter: 'Alle',
  wfS: 0,
  wfT: 0,
  artS: 0,
  artT: 0,
  pCount: 0,
  days: new Set(),
  intro: {},
  examDone: 0,
};

// Load from localStorage
try {
  const d = JSON.parse(localStorage.getItem('a1s') || '{}');
  if (d.k) S.known = new Set(d.k);
  if (d.u) S.unknown = new Set(d.u);
  if (d.ws) S.wfS = d.ws;
  if (d.wt) S.wfT = d.wt;
  if (d.as) S.artS = d.as;
  if (d.at) S.artT = d.at;
  if (d.pc) S.pCount = d.pc;
  if (d.ds) S.days = new Set(d.ds);
  if (d.i) S.intro = d.i;
  if (d.ed) S.examDone = d.ed;
} catch (e) { /* ignore corrupt data */ }

export function save() {
  localStorage.setItem('a1s', JSON.stringify({
    k: [...S.known],
    u: [...S.unknown],
    ws: S.wfS,
    wt: S.wfT,
    as: S.artS,
    at: S.artT,
    pc: S.pCount,
    ds: [...S.days],
    i: S.intro,
    ed: S.examDone,
  }));
}

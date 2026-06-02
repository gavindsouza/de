// App state and localStorage persistence

export const S = {
  idx: 0,
  known: new Set(),
  unknown: new Set(),
  shaky: new Set(),    // 3rd SRS tier — needs more review
  flipped: false,
  deck: [],
  filter: 'Alle',
  wlFilter: 'Alle',
  vocabView: 'cards',
  vocabSearch: '',
  levelUI: {},
  wfS: 0,
  wfT: 0,
  artS: 0,
  artT: 0,
  conjS: 0,
  conjT: 0,
  casS: 0,
  casT: 0,
  scrS: 0,
  scrT: 0,
  pCount: 0,
  days: new Set(),
  intro: {},
  examDone: 0,
  level: 'a1',   // target level: 'a1' | 'a2' | 'b1'
};

function defaultLevelUI() {
  return {
    filter: 'Alle',
    wlFilter: 'Alle',
    vocabView: 'cards',
    vocabSearch: '',
  };
}

function normalizeLevelUI(levelUI) {
  const base = { a1: defaultLevelUI(), a2: defaultLevelUI(), b1: defaultLevelUI() };
  Object.entries(levelUI || {}).forEach(([level, value]) => {
    base[level] = { ...defaultLevelUI(), ...(value || {}) };
  });
  return base;
}

function ensureLevelUI(level = S.level) {
  if (!S.levelUI[level]) S.levelUI[level] = defaultLevelUI();
  return S.levelUI[level];
}

// Load from localStorage
try {
  const d = JSON.parse(localStorage.getItem('a1s') || '{}');
  if (d.k) S.known = new Set(d.k);
  if (d.u) S.unknown = new Set(d.u);
  if (d.sh) S.shaky = new Set(d.sh);
  if (d.ws) S.wfS = d.ws;
  if (d.wt) S.wfT = d.wt;
  if (d.as) S.artS = d.as;
  if (d.at) S.artT = d.at;
  if (d.cjs) S.conjS = d.cjs;
  if (d.cjt) S.conjT = d.cjt;
  if (d.css) S.casS = d.css;
  if (d.cst) S.casT = d.cst;
  if (d.scs) S.scrS = d.scs;
  if (d.sct) S.scrT = d.sct;
  if (d.pc) S.pCount = d.pc;
  if (d.ds) S.days = new Set(d.ds);
  if (d.i) S.intro = d.i;
  if (d.ed) S.examDone = d.ed;
  if (d.lv) S.level = d.lv;
  S.levelUI = normalizeLevelUI(d.lui);
} catch (e) { /* ignore corrupt data */ }

export function syncLevelUI(level = S.level) {
  const ui = ensureLevelUI(level);
  ui.filter = S.filter;
  ui.wlFilter = S.wlFilter;
  ui.vocabView = S.vocabView;
  ui.vocabSearch = S.vocabSearch;
}

export function restoreLevelUI(level = S.level) {
  const ui = ensureLevelUI(level);
  S.filter = ui.filter;
  S.wlFilter = ui.wlFilter;
  S.vocabView = ui.vocabView;
  S.vocabSearch = ui.vocabSearch;
}

restoreLevelUI(S.level);

export function save() {
  syncLevelUI();
  localStorage.setItem('a1s', JSON.stringify({
    k: [...S.known],
    u: [...S.unknown],
    sh: [...S.shaky],
    ws: S.wfS,
    wt: S.wfT,
    as: S.artS,
    at: S.artT,
    cjs: S.conjS,
    cjt: S.conjT,
    css: S.casS,
    cst: S.casT,
    scs: S.scrS,
    sct: S.scrT,
    pc: S.pCount,
    ds: [...S.days],
    i: S.intro,
    ed: S.examDone,
    lv: S.level,
    lui: S.levelUI,
  }));
}

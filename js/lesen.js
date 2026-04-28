// Lesen (Reading) practice module
// Three exercise types matching the real Goethe A1 Lesen exam:
//   Teil 1 — Match people to ads
//   Teil 2 — Read a text, answer Richtig/Falsch
//   Teil 3 — Read an info text, fill in a form

import { lesenData } from './data/lesen.js';
import { markOpts } from './utils.js';

let lPart = 1;
let lSet = 0;    // which data set (0, 1, 2)
let l1Selected = {};   // person → chosen ad label
let l3Answers = {};    // field label → typed value

export function buildLesen() {
  const el = document.getElementById('lesenContent');
  if (!el) return;
  const tabs = ['Teil 1', 'Teil 2', 'Teil 3'];
  el.innerHTML = `
    <div class="h-tabs">
      ${tabs.map((t, i) => `<button class="h-tab ${lPart === i + 1 ? 'active' : ''}" onclick="switchLPart(${i + 1})">${t}</button>`).join('')}
    </div>
    <div class="ls-set-row">
      <span style="color:var(--muted);font-size:.82rem">Übungsset:</span>
      ${lesenData.map((_, i) => `<button class="chip ${lSet === i ? 'active' : ''}" onclick="switchLSet(${i})">${i + 1}</button>`).join('')}
    </div>
    <div id="lesenExercise"></div>`;
  renderLTeil();
}

export function switchLPart(p) {
  lPart = p;
  l1Selected = {};
  l3Answers = {};
  buildLesen();
}

export function switchLSet(s) {
  lSet = s;
  l1Selected = {};
  l3Answers = {};
  buildLesen();
}

function renderLTeil() {
  if (lPart === 1) renderL1();
  else if (lPart === 2) renderL2();
  else renderL3();
}

// ----- Teil 1: Match people → ads -----
function renderL1() {
  const { people, ads } = lesenData[lSet].teil1;
  const adsHtml = ads.map(a => `
    <div class="ls-ad">
      <span class="ls-ad-label">${a.label}</span>
      <div><strong>${a.title}</strong><br><span style="font-size:.85rem;color:var(--muted)">${a.text}</span></div>
    </div>`).join('');

  const peopleHtml = people.map(p => `
    <div class="ls-person-row">
      <div class="ls-person-info"><strong>${p.name}:</strong> ${p.need}</div>
      <select class="ls-select" onchange="l1Pick('${p.name}',this.value)">
        <option value="">—</option>
        ${ads.map(a => `<option value="${a.label}" ${l1Selected[p.name] === a.label ? 'selected' : ''}>${a.label} — ${a.title}</option>`).join('')}
      </select>
    </div>`).join('');

  document.getElementById('lesenExercise').innerHTML = `
    <div class="ls-intro">Lesen Sie die Anzeigen A–${ads[ads.length - 1].label}. Welche Anzeige passt zu welcher Person? Zwei Anzeigen passen nicht.</div>
    <div class="ls-ads">${adsHtml}</div>
    <h4 class="sub-heading">Personen</h4>
    ${peopleHtml}
    <button class="btn-full" onclick="l1Check()" style="margin-top:14px">Auswerten</button>
    <div id="l1FB" style="margin-top:12px"></div>`;
}

export function l1Pick(name, val) {
  l1Selected[name] = val;
}

export function l1Check() {
  const { people, answers } = lesenData[lSet].teil1;
  let correct = 0;
  const lines = people.map(p => {
    const chosen = l1Selected[p.name] || '—';
    const ok = chosen === answers[p.name];
    if (ok) correct++;
    return `<div style="margin-bottom:4px">${ok ? '✓' : '✗'} <strong>${p.name}:</strong> ${chosen} ${ok ? '' : `(richtig: <strong>${answers[p.name]}</strong>)`}</div>`;
  });
  const pct = Math.round(correct / people.length * 100);
  document.getElementById('l1FB').innerHTML = `
    <div class="h-result">
      <div style="font-size:1.1rem;font-weight:700;margin-bottom:8px;color:${pct >= 60 ? 'var(--green)' : 'var(--red)'}">
        ${correct} / ${people.length} richtig (${pct}%)
      </div>
      ${lines.join('')}
    </div>`;
}

// ----- Teil 2: Richtig oder Falsch? -----
function renderL2() {
  const { text, statements } = lesenData[lSet].teil2;
  const stmHtml = statements.map((s, i) => `
    <div class="ls-stmt" id="lstmt${i}">
      <div style="font-size:.95rem;margin-bottom:6px">${i + 1}. ${s.text}</div>
      <div class="quiz-tf">
        <button class="quiz-opt" onclick="l2Ans(${i}, true, ${s.answer}, this)">✓ Richtig</button>
        <button class="quiz-opt" onclick="l2Ans(${i}, false, ${s.answer}, this)">✗ Falsch</button>
      </div>
    </div>`).join('');

  document.getElementById('lesenExercise').innerHTML = `
    <div class="ls-intro">Lesen Sie den Text und kreuzen Sie an: Richtig oder Falsch?</div>
    <div class="ls-text">${text.replace(/\n/g, '<br>')}</div>
    <h4 class="sub-heading">Aussagen</h4>
    ${stmHtml}
    <div id="l2Score" style="margin-top:14px;font-weight:700"></div>
    <button class="btn-full" onclick="switchLSet(${(lSet + 1) % lesenData.length});switchLPart(2)" style="margin-top:10px">Nächster Text →</button>`;
}

let l2Score = { c: 0, t: 0 };

export function l2Ans(idx, chosen, correct, el) {
  markOpts(el.parentElement, el, (_, i) => correct ? i === 0 : i === 1);
  l2Score.t++;
  if (chosen === correct) l2Score.c++;
  document.getElementById('l2Score').textContent = `${l2Score.c} / ${l2Score.t} richtig`;
}

// ----- Teil 3: Read info text → fill in form -----
function renderL3() {
  const { text, instruction, fields } = lesenData[lSet].teil3;
  const fieldsHtml = fields.map((f, i) => `
    <div class="ls-field-row">
      <label class="ls-field-label">${f.label}</label>
      <input class="h-input" id="l3f${i}" placeholder="..." type="text">
    </div>`).join('');

  document.getElementById('lesenExercise').innerHTML = `
    <div class="ls-intro">${instruction}</div>
    <div class="ls-text">${text.replace(/\n/g, '<br>')}</div>
    <h4 class="sub-heading">Formular</h4>
    ${fieldsHtml}
    <button class="btn-full" onclick="l3Check()" style="margin-top:14px">Auswerten</button>
    <div id="l3FB" style="margin-top:12px"></div>`;
}

export function l3Check() {
  const { fields } = lesenData[lSet].teil3;
  let correct = 0;
  const lines = fields.map((f, i) => {
    const userVal = (document.getElementById(`l3f${i}`).value || '').trim().toLowerCase();
    const expected = f.answer.toLowerCase();
    // Accept if expected is a substring of user's answer or vice-versa
    const ok = userVal.length > 0 && (expected.includes(userVal) || userVal.includes(expected));
    if (ok) correct++;
    return `<div style="margin-bottom:4px">${ok ? '✓' : '✗'} <strong>${f.label}:</strong> ${ok ? f.answer : `(richtig: <strong>${f.answer}</strong>)`}</div>`;
  });
  const pct = Math.round(correct / fields.length * 100);
  document.getElementById('l3FB').innerHTML = `
    <div class="h-result">
      <div style="font-size:1.1rem;font-weight:700;margin-bottom:8px;color:${pct >= 60 ? 'var(--green)' : 'var(--red)'}">
        ${correct} / ${fields.length} richtig (${pct}%)
      </div>
      ${lines.join('')}
    </div>`;
}

export function initLesen() {
  lPart = 1;
  lSet = 0;
  l1Selected = {};
  l3Answers = {};
  l2Score = { c: 0, t: 0 };
  buildLesen();
}

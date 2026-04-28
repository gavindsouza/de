// Full Mock Exam (Prüfungssimulation) module
// Walks through all 4 Goethe A1 exam parts in the real sequence:
//   Hören → Lesen → Schreiben → Sprechen

import { hoerenData } from './data/hoeren.js';
import { lesenData } from './data/lesen.js';
import { formData } from './data/form.js';
import { sprechenData } from './data/sprechen.js';
import { S, save } from './state.js';
import { speak, playAudio } from './audio.js';
import { markOpts, SPEAKER_SVG } from './utils.js';

const TOTAL_STEPS = 16;
// step 0  = welcome
// steps 1-3   = Hören Teil 1 (questions 1-5, rendered per-question)
// steps 4-6   = Hören Teil 2
// steps 7-9   = Hören Teil 3
// step 10 = Lesen Teil 1 (matching)
// step 11 = Lesen Teil 2 (T/F)
// step 12 = Lesen Teil 3 (form read)
// step 13 = Schreiben Teil 1 (email)
// step 14 = Schreiben Teil 2 (form fill)
// step 15 = Sprechen
// step 16 = Results

const SET = 0; // default lesen set
let ex = {};

export function startExam() {
  ex = {
    step: 0,
    h1: { idx: 0, correct: 0, total: 0, done: false },
    h2: { idx: 0, answered: 0, done: false },
    h3: { idx: 0, correct: 0, total: 0, done: false },
    l1: { selected: {}, done: false },
    l2: { correct: 0, total: 0, done: false },
    l3: { done: false },
    s1: { done: false },
    s2: { done: false },
    sp1: { done: false },
    sp2: { idx: 0, done: false },
    sp3: { idx: 0, done: false },
  };
  renderExamStep();
}

function renderExamStep() {
  const el = document.getElementById('examContent');
  if (!el) return;
  const s = ex.step;
  if (s === 0) renderWelcome(el);
  else if (s >= 1 && s <= 3) renderH1(el);
  else if (s >= 4 && s <= 6) renderH2(el);
  else if (s >= 7 && s <= 9) renderH3(el);
  else if (s === 10) renderL1(el);
  else if (s === 11) renderL2(el);
  else if (s === 12) renderL3(el);
  else if (s === 13) renderS1(el);
  else if (s === 14) renderS2(el);
  else if (s === 15) renderSp(el);
  else renderResults(el);
}

function progressBar() {
  const pct = Math.round(ex.step / TOTAL_STEPS * 100);
  return `<div class="exam-prog"><div class="exam-prog-fill" style="width:${pct}%"></div></div>`;
}

function nextBtn(label, fn) {
  return `<button class="btn-full exam-next" onclick="${fn}">${label || 'Weiter →'}</button>`;
}

// ===== WELCOME =====
function renderWelcome(el) {
  el.innerHTML = `
    ${progressBar()}
    <div class="exam-hero">
      <div style="font-size:2.5rem">📋</div>
      <h3 style="color:var(--accent2);margin:12px 0 8px">Prüfungssimulation A1</h3>
      <p style="color:var(--muted);font-size:.9rem;line-height:1.6">Diese Simulation folgt dem genauen Ablauf der Goethe-Zertifikat A1 Prüfung. Du durchläufst alle vier Teile:</p>
    </div>
    <div class="exam-parts-list">
      <div class="exam-part-item"><span class="exam-part-ico">🎧</span><div><strong>Hören</strong><br><span style="color:var(--muted);font-size:.82rem">3 Teile · 15 Aufgaben</span></div></div>
      <div class="exam-part-item"><span class="exam-part-ico">📖</span><div><strong>Lesen</strong><br><span style="color:var(--muted);font-size:.82rem">3 Teile · Texte & Formulare</span></div></div>
      <div class="exam-part-item"><span class="exam-part-ico">✍️</span><div><strong>Schreiben</strong><br><span style="color:var(--muted);font-size:.82rem">E-Mail · Formular</span></div></div>
      <div class="exam-part-item"><span class="exam-part-ico">🗣️</span><div><strong>Sprechen</strong><br><span style="color:var(--muted);font-size:.82rem">Vorstellung · Karten · Bitten</span></div></div>
    </div>
    <div class="g-card" style="margin:16px 0"><p style="color:var(--muted);font-size:.85rem;line-height:1.6">💡 Tipp: Tippe auf den Hören-Button, um den Text mit der Browser-Stimme vorzulesen. Bei der echten Prüfung hörst du eine Aufnahme — hier siehst du den Text zusätzlich als Lernhilfe.</p></div>
    ${nextBtn('Prüfung starten →', 'examNext()')}`;
}

// ===== HÖREN TEIL 1 =====
function renderH1(el) {
  const data = hoerenData.teil1;
  const q = ex.h1.idx;
  if (q >= data.length) { ex.step = 4; renderExamStep(); return; }
  const item = data[q];
  const dlg = item.script.map(l => `<div class="h-line"><span class="h-speaker">${l.s}:</span> ${l.t}</div>`).join('');
  el.innerHTML = `
    ${progressBar()}
    <div class="exam-part-label">🎧 Hören — Teil 1 &nbsp;<span style="color:var(--muted)">Gespräche</span></div>
    <div class="exam-q-counter">Frage ${q + 1} / ${data.length}</div>
    <div class="h-script">${dlg}</div>
    <button class="h-play-btn" onclick="examSpeak(${JSON.stringify(item.script.map(l => l.s + ': ' + l.t).join('  '))}, this, ${JSON.stringify(item.audioUrl || null)})">
      ${SPEAKER_SVG} Hören
    </button>
    <div class="h-question">${item.question}</div>
    <div class="quiz-opts" id="examH1Opts">
      ${item.options.map((o, i) => `<button class="quiz-opt" onclick="examH1Check(this,${i},${item.answer})">${o}</button>`).join('')}
    </div>
    <div id="examH1Next" style="display:none;margin-top:12px">
      ${q + 1 < data.length ? nextBtn('Nächste Frage →', 'examH1Advance()') : nextBtn('Weiter zu Teil 2 →', 'examH1Advance()')}
    </div>`;
}

export function examH1Check(el, chosen, correct) {
  markOpts(el.closest('.quiz-opts'), el, (_, i) => i === correct);
  ex.h1.total++;
  if (chosen === correct) ex.h1.correct++;
  document.getElementById('examH1Next').style.display = 'block';
}

export function examH1Advance() {
  speechSynthesis && speechSynthesis.cancel();
  ex.h1.idx++;
  if (ex.h1.idx >= hoerenData.teil1.length) { ex.step = 4; }
  renderExamStep();
}

// ===== HÖREN TEIL 2 =====
function renderH2(el) {
  const data = hoerenData.teil2;
  const q = ex.h2.idx;
  if (q >= data.length) { ex.step = 7; renderExamStep(); return; }
  const item = data[q];
  el.innerHTML = `
    ${progressBar()}
    <div class="exam-part-label">🎧 Hören — Teil 2 &nbsp;<span style="color:var(--muted)">Kurze Nachrichten</span></div>
    <div class="exam-q-counter">Frage ${q + 1} / ${data.length}</div>
    <div class="h-script">${item.script}</div>
    <button class="h-play-btn" onclick="examSpeak(${JSON.stringify(item.script)}, this, ${JSON.stringify(item.audioUrl || null)})">${SPEAKER_SVG} Hören</button>
    <div class="h-question">${item.question}</div>
    <p style="font-size:.8rem;color:var(--muted);margin-bottom:8px">Hinweis: ${item.hint}</p>
    <input id="examH2Ans" class="h-input" placeholder="Ihre Antwort..." type="text">
    <button class="btn-full" onclick="examH2Check()" style="margin-top:8px">Überprüfen</button>
    <div id="examH2FB" style="margin-top:10px"></div>
    <div id="examH2Next" style="display:none;margin-top:12px">
      ${q + 1 < data.length ? nextBtn('Nächste Frage →', 'examH2Advance()') : nextBtn('Weiter zu Teil 3 →', 'examH2Advance()')}
    </div>`;
}

export function examH2Check() {
  const item = hoerenData.teil2[ex.h2.idx];
  const userAns = (document.getElementById('examH2Ans').value || '').trim().toLowerCase();
  const correct = item.answer.toLowerCase();
  const tokens = correct.split(/[\s\/]+/);
  const ok = tokens.some(tok => userAns.includes(tok));
  ex.h2.answered++;
  document.getElementById('examH2Ans').disabled = true;
  document.getElementById('examH2FB').innerHTML = ok
    ? `<span class="txt-ok">✓ Richtig! Antwort: <strong>${item.answer}</strong></span>`
    : `<span class="txt-err">✗ Richtige Antwort: <strong>${item.answer}</strong></span>`;
  document.getElementById('examH2Next').style.display = 'block';
}

export function examH2Advance() {
  speechSynthesis && speechSynthesis.cancel();
  ex.h2.idx++;
  if (ex.h2.idx >= hoerenData.teil2.length) { ex.step = 7; }
  renderExamStep();
}

// ===== HÖREN TEIL 3 =====
function renderH3(el) {
  const data = hoerenData.teil3;
  const q = ex.h3.idx;
  if (q >= data.length) { ex.step = 10; renderExamStep(); return; }
  const item = data[q];
  el.innerHTML = `
    ${progressBar()}
    <div class="exam-part-label">🎧 Hören — Teil 3 &nbsp;<span style="color:var(--muted)">Durchsagen</span></div>
    <div class="exam-q-counter">Frage ${q + 1} / ${data.length}</div>
    <div class="h-script">${item.script}</div>
    <button class="h-play-btn" onclick="examSpeak(${JSON.stringify(item.script)}, this, ${JSON.stringify(item.audioUrl || null)})">${SPEAKER_SVG} Hören</button>
    <div class="h-question">Aussage: <em>${item.statement}</em></div>
    <div class="quiz-tf">
      <button class="quiz-opt" id="examH3R" onclick="examH3Check(this,true,${item.answer})">✓ Richtig</button>
      <button class="quiz-opt" id="examH3F" onclick="examH3Check(this,false,${item.answer})">✗ Falsch</button>
    </div>
    <div id="examH3Next" style="display:none;margin-top:12px">
      ${q + 1 < data.length ? nextBtn('Nächste Frage →', 'examH3Advance()') : nextBtn('Weiter zu Lesen →', 'examH3Advance()')}
    </div>`;
}

export function examH3Check(el, chosen, correct) {
  markOpts(el.parentElement, el, (_, i) => correct ? i === 0 : i === 1);
  ex.h3.total++;
  if (chosen === correct) ex.h3.correct++;
  document.getElementById('examH3Next').style.display = 'block';
}

export function examH3Advance() {
  speechSynthesis && speechSynthesis.cancel();
  ex.h3.idx++;
  if (ex.h3.idx >= hoerenData.teil3.length) { ex.step = 10; }
  renderExamStep();
}

// ===== LESEN TEIL 1 =====
function renderL1(el) {
  const { people, ads } = lesenData[SET].teil1;
  const adsHtml = ads.map(a => `
    <div class="ls-ad">
      <span class="ls-ad-label">${a.label}</span>
      <div><strong>${a.title}</strong><br><span style="font-size:.82rem;color:var(--muted)">${a.text}</span></div>
    </div>`).join('');
  const peopleHtml = people.map(p => `
    <div class="ls-person-row">
      <div class="ls-person-info"><strong>${p.name}:</strong> ${p.need}</div>
      <select class="ls-select" onchange="examL1Pick('${p.name}',this.value)">
        <option value="">—</option>
        ${ads.map(a => `<option value="${a.label}" ${ex.l1.selected[p.name] === a.label ? 'selected' : ''}>${a.label}</option>`).join('')}
      </select>
    </div>`).join('');

  el.innerHTML = `
    ${progressBar()}
    <div class="exam-part-label">📖 Lesen — Teil 1 &nbsp;<span style="color:var(--muted)">Anzeigen zuordnen</span></div>
    <div class="ls-intro">Lesen Sie die Anzeigen A–${ads[ads.length - 1].label}. Welche Anzeige passt zu welcher Person?</div>
    <div class="ls-ads">${adsHtml}</div>
    <h4 class="sub-heading">Personen</h4>
    ${peopleHtml}
    <button class="btn-full" onclick="examL1Submit()" style="margin-top:14px">Auswerten & Weiter →</button>
    <div id="examL1FB" style="margin-top:12px"></div>`;
}

export function examL1Pick(name, val) {
  ex.l1.selected[name] = val;
}

export function examL1Submit() {
  const { people, answers } = lesenData[SET].teil1;
  let correct = 0;
  people.forEach(p => { if (ex.l1.selected[p.name] === answers[p.name]) correct++; });
  ex.l1.score = { correct, total: people.length };
  ex.l1.done = true;
  const lines = people.map(p => {
    const chosen = ex.l1.selected[p.name] || '—';
    const ok = chosen === answers[p.name];
    return `<div style="margin-bottom:3px">${ok ? '✓' : '✗'} <strong>${p.name}:</strong> ${chosen} ${ok ? '' : `(richtig: ${answers[p.name]})`}</div>`;
  });
  document.getElementById('examL1FB').innerHTML = `<div class="h-result"><div style="font-weight:700;margin-bottom:8px">${correct}/${people.length} richtig</div>${lines.join('')}</div>`;
  setTimeout(() => { ex.step = 11; renderExamStep(); }, 2200);
}

// ===== LESEN TEIL 2 =====
function renderL2(el) {
  const { text, statements } = lesenData[SET].teil2;
  const stmHtml = statements.map((s, i) => `
    <div class="ls-stmt" id="exlstmt${i}">
      <div style="font-size:.9rem;margin-bottom:6px">${i + 1}. ${s.text}</div>
      <div class="quiz-tf">
        <button class="quiz-opt" onclick="examL2Ans(${i},true,${s.answer},this)">✓ Richtig</button>
        <button class="quiz-opt" onclick="examL2Ans(${i},false,${s.answer},this)">✗ Falsch</button>
      </div>
    </div>`).join('');
  el.innerHTML = `
    ${progressBar()}
    <div class="exam-part-label">📖 Lesen — Teil 2 &nbsp;<span style="color:var(--muted)">Richtig oder Falsch?</span></div>
    <div class="ls-intro">Lesen Sie den Text und kreuzen Sie an.</div>
    <div class="ls-text">${text.replace(/\n/g, '<br>')}</div>
    <h4 class="sub-heading">Aussagen</h4>
    ${stmHtml}
    <div id="examL2Score" style="margin-top:10px;font-weight:700"></div>
    <div id="examL2Next" style="display:none;margin-top:12px">${nextBtn('Weiter →', 'examL2Advance()')}</div>`;
}

export function examL2Ans(idx, chosen, correct, el) {
  markOpts(el.parentElement, el, (_, i) => correct ? i === 0 : i === 1);
  ex.l2.total++;
  if (chosen === correct) ex.l2.correct++;
  document.getElementById('examL2Score').textContent = `${ex.l2.correct} / ${ex.l2.total} richtig`;
  if (ex.l2.total >= lesenData[SET].teil2.statements.length) {
    document.getElementById('examL2Next').style.display = 'block';
  }
}

export function examL2Advance() {
  ex.step = 12;
  renderExamStep();
}

// ===== LESEN TEIL 3 =====
function renderL3(el) {
  const { text, instruction, fields } = lesenData[SET].teil3;
  const fieldsHtml = fields.map((f, i) => `
    <div class="ls-field-row">
      <label class="ls-field-label">${f.label}</label>
      <input class="h-input" id="exl3f${i}" placeholder="..." type="text">
    </div>`).join('');
  el.innerHTML = `
    ${progressBar()}
    <div class="exam-part-label">📖 Lesen — Teil 3 &nbsp;<span style="color:var(--muted)">Formular ausfüllen</span></div>
    <div class="ls-intro">${instruction}</div>
    <div class="ls-text">${text.replace(/\n/g, '<br>')}</div>
    <h4 class="sub-heading">Formular</h4>
    ${fieldsHtml}
    <button class="btn-full" onclick="examL3Submit()" style="margin-top:14px">Auswerten & Weiter →</button>
    <div id="examL3FB" style="margin-top:12px"></div>`;
}

export function examL3Submit() {
  const { fields } = lesenData[SET].teil3;
  let correct = 0;
  const lines = fields.map((f, i) => {
    const userVal = (document.getElementById(`exl3f${i}`).value || '').trim().toLowerCase();
    const expected = f.answer.toLowerCase();
    const ok = userVal.length > 0 && (expected.includes(userVal) || userVal.includes(expected));
    if (ok) correct++;
    return `<div style="margin-bottom:3px">${ok ? '✓' : '✗'} <strong>${f.label}:</strong> ${ok ? f.answer : `(richtig: ${f.answer})`}</div>`;
  });
  ex.l3.score = { correct, total: fields.length };
  ex.l3.done = true;
  document.getElementById('examL3FB').innerHTML = `<div class="h-result"><div style="font-weight:700;margin-bottom:8px">${correct}/${fields.length} richtig</div>${lines.join('')}</div>`;
  setTimeout(() => { ex.step = 13; renderExamStep(); }, 2200);
}

// ===== SCHREIBEN TEIL 1 — E-Mail =====
function renderS1(el) {
  el.innerHTML = `
    ${progressBar()}
    <div class="exam-part-label">✍️ Schreiben — Teil 1 &nbsp;<span style="color:var(--muted)">E-Mail schreiben</span></div>
    <div class="ls-intro">Schreiben Sie eine E-Mail (20–30 Wörter) zu drei Punkten: Problem nennen, um Hilfe bitten, Termin vorschlagen.</div>
    <div class="email-prompt-box">
      <strong>Situation:</strong> Ihre Heizung ist kaputt. Es ist sehr kalt in Ihrer Wohnung.<br>
      <strong>Schreiben Sie Ihrem Vermieter:</strong>
      <ul style="margin:8px 0 0 18px;font-size:.9rem">
        <li>Welches Problem haben Sie?</li>
        <li>Seit wann ist die Heizung kaputt?</li>
        <li>Bitten Sie um schnelle Hilfe.</li>
      </ul>
    </div>
    <div class="field">
      <label>Anrede</label>
      <select id="exEmGreet">
        <option>Sehr geehrte Damen und Herren,</option>
        <option>Lieber Herr [Name],</option>
      </select>
    </div>
    <div class="field">
      <label>Ihre E-Mail <span style="color:var(--muted)">(20–30 Wörter)</span></label>
      <textarea id="exEmBody" placeholder="Ich schreibe, weil..." oninput="examS1Count()"></textarea>
      <div class="wc" id="exEmWC">0 / 20-30 Wörter</div>
    </div>
    <div class="field">
      <label>Gruß</label>
      <select id="exEmClose">
        <option>Mit freundlichen Grüßen</option>
        <option>Viele Grüße</option>
      </select>
    </div>
    <button class="btn-full" onclick="examS1Done()" style="margin-top:8px">Fertig & Weiter →</button>`;
}

export function examS1Count() {
  const t = (document.getElementById('exEmBody').value || '').trim();
  const n = t ? t.split(/\s+/).length : 0;
  const el = document.getElementById('exEmWC');
  el.textContent = `${n} / 20-30 Wörter`;
  el.className = 'wc' + (n >= 20 && n <= 30 ? ' good' : n > 30 ? ' over' : '');
}

export function examS1Done() {
  ex.s1.body = document.getElementById('exEmBody').value;
  ex.s1.done = true;
  ex.step = 14;
  renderExamStep();
}

// ===== SCHREIBEN TEIL 2 — Formular =====
function renderS2(el) {
  const form = formData[0];
  const fieldsHtml = form.fields.map((f, i) => `
    <div class="ls-field-row">
      <label class="ls-field-label">${f.label}</label>
      <input class="h-input" id="exS2f${i}" placeholder="${f.placeholder}" type="text">
    </div>`).join('');
  el.innerHTML = `
    ${progressBar()}
    <div class="exam-part-label">✍️ Schreiben — Teil 2 &nbsp;<span style="color:var(--muted)">Formular ausfüllen</span></div>
    <div class="ls-intro">${form.scenario}</div>
    <div class="ls-text" style="font-size:.9rem"><strong>${form.title}</strong></div>
    ${fieldsHtml}
    <p style="color:var(--muted);font-size:.8rem;margin-top:12px">Fülle alle Felder mit deinen eigenen Angaben aus. In der echten Prüfung werden deine Angaben bewertet.</p>
    ${nextBtn('Fertig & Weiter zu Sprechen →', 'examS2Done()')}`;
}

export function examS2Done() {
  ex.s2.done = true;
  ex.step = 15;
  renderExamStep();
}

// ===== SPRECHEN =====
function renderSp(el) {
  const { intro } = S;
  const introLines = [
    `Mein Name ist ${intro.n || '___'}.`,
    `Ich bin ${intro.a || '___'} Jahre alt.`,
    `Ich komme aus ${intro.c || '___'}.`,
    `Ich bin ${intro.j || '___'} von Beruf.`,
    `Ich spreche ${intro.l || '___'} und ein bisschen Deutsch.`,
  ];

  const sp2 = sprechenData.teil2;
  const sp3Idx = ex.sp3.idx % sprechenData.teil3.length;
  const sp3 = sprechenData.teil3[sp3Idx];

  el.innerHTML = `
    ${progressBar()}
    <div class="exam-part-label">🗣️ Sprechen — alle drei Teile</div>

    <div class="g-card" style="margin-bottom:14px">
      <h4>Teil 1 — Vorstellung</h4>
      <p style="color:var(--muted);font-size:.82rem;margin-bottom:10px">Stelle dich vor. Sprich die Sätze laut.</p>
      ${introLines.map(l => `<div class="sp-intro-line">${l}</div>`).join('')}
      <button class="h-play-btn" style="margin-top:10px" onclick="examSpeak(${JSON.stringify(introLines.join(' '))}, this)">${SPEAKER_SVG} Vorlesen</button>
      ${intro.n ? '' : '<p style="color:var(--yellow);font-size:.8rem;margin-top:8px">⚠️ Fülle zuerst die Vorstellung unter "Sprechen" aus!</p>'}
    </div>

    <div class="g-card" style="margin-bottom:14px">
      <h4>Teil 2 — Objekt benennen</h4>
      <p style="color:var(--muted);font-size:.82rem;margin-bottom:10px">Was siehst du auf dem Bild? Benenne das Objekt.</p>
      <div id="sp2Card">
        ${renderSp2Card(sp2[ex.sp2.idx % sp2.length])}
      </div>
      <button class="btn-full" onclick="examSp2Next()" style="margin-top:8px">Nächste Karte →</button>
    </div>

    <div class="g-card" style="margin-bottom:14px">
      <h4>Teil 3 — Bitte / Frage</h4>
      <p style="color:var(--muted);font-size:.82rem;margin-bottom:4px">${sp3.picture}</p>
      <p style="color:var(--text);font-size:.9rem;margin-bottom:10px">${sp3.situation}</p>
      <div class="sp-templates">
        ${sp3.templates.map(t => `<div class="sp-template">💬 ${t}</div>`).join('')}
      </div>
      <button class="btn-full" onclick="examSp3Next()" style="margin-top:8px">Nächste Situation →</button>
    </div>

    ${nextBtn('Prüfung abschließen →', 'examFinish()')}`;
}

function renderSp2Card(item) {
  return `<div style="text-align:center;padding:12px">
    <div class="cat-badge" style="display:inline-block;margin-bottom:8px">${item.a}</div>
    <div style="font-size:2rem;font-weight:800">${item.w}</div>
    <div style="color:var(--muted);font-size:.85rem;margin-top:8px">${item.hint}</div>
  </div>`;
}

export function examSp2Next() {
  ex.sp2.idx++;
  const sp2 = sprechenData.teil2;
  document.getElementById('sp2Card').innerHTML = renderSp2Card(sp2[ex.sp2.idx % sp2.length]);
}

export function examSp3Next() {
  ex.sp3.idx++;
  renderExamStep(); // re-render the whole speaking section
}

export function examFinish() {
  ex.step = 16;
  S.examDone = (S.examDone || 0) + 1;
  save();
  renderExamStep();
}

// ===== RESULTS =====
function renderResults(el) {
  const h1pct = ex.h1.total ? Math.round(ex.h1.correct / ex.h1.total * 100) : 0;
  const h3pct = ex.h3.total ? Math.round(ex.h3.correct / ex.h3.total * 100) : 0;
  const l1pct = ex.l1.score ? Math.round(ex.l1.score.correct / ex.l1.score.total * 100) : 0;
  const l2pct = ex.l2.total ? Math.round(ex.l2.correct / ex.l2.total * 100) : 0;
  const l3pct = ex.l3.score ? Math.round(ex.l3.score.correct / ex.l3.score.total * 100) : 0;

  function scoreRow(icon, label, pct) {
    const col = pct >= 60 ? 'var(--green)' : pct >= 40 ? 'var(--yellow)' : 'var(--red)';
    return `<div class="exam-result-row">
      <span>${icon} ${label}</span>
      <span style="font-weight:700;color:${col}">${pct}%</span>
    </div>`;
  }

  el.innerHTML = `
    ${progressBar()}
    <div class="exam-hero">
      <div style="font-size:2.5rem">🎉</div>
      <h3 style="color:var(--accent2);margin:12px 0 4px">Prüfung abgeschlossen!</h3>
      <p style="color:var(--muted);font-size:.85rem">Prüfung Nr. ${S.examDone}</p>
    </div>
    <div class="g-card" style="margin-bottom:14px">
      <h4 style="margin-bottom:12px">🎧 Hören</h4>
      ${scoreRow('', 'Teil 1 — Gespräche', h1pct)}
      <div class="exam-result-row"><span>Teil 2 — Nachrichten</span><span style="color:var(--muted)">${ex.h2.answered} beantwortet</span></div>
      ${scoreRow('', 'Teil 3 — Durchsagen', h3pct)}
    </div>
    <div class="g-card" style="margin-bottom:14px">
      <h4 style="margin-bottom:12px">📖 Lesen</h4>
      ${scoreRow('', 'Teil 1 — Anzeigen', l1pct)}
      ${scoreRow('', 'Teil 2 — Richtig/Falsch', l2pct)}
      ${scoreRow('', 'Teil 3 — Formular lesen', l3pct)}
    </div>
    <div class="g-card" style="margin-bottom:14px">
      <h4>✍️ Schreiben &amp; 🗣️ Sprechen</h4>
      <p style="color:var(--muted);font-size:.85rem;margin-top:8px">Diese Teile werden von einem Prüfer bewertet. Wiederhole sie regelmäßig!</p>
    </div>
    <button class="btn-full" onclick="startExam()">Nochmal starten 🔄</button>
    <button class="btn-full" style="margin-top:10px;background:var(--card);color:var(--text)" onclick="go('overview')">Zurück zur Übersicht</button>`;
}

// Shared audio helper exposed to window
export function examSpeak(text, btn, audioUrl = null) {
  if (audioUrl) { playAudio(audioUrl, btn); return; }
  speak(text, btn);
}

export function examNext() {
  ex.step++;
  renderExamStep();
}

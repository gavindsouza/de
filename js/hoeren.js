// Hören (Listening) practice module
// Uses Web Speech API (TTS) so users can hear authentic German pronunciation.

import { hoerenData } from './data.js';

let hPart = 1;          // current Teil shown (1/2/3)
let hIdx = 0;           // index within current Teil
let hScore = { p1c: 0, p1t: 0, p2t: 0, p3c: 0, p3t: 0 };

// Speak German text using the browser TTS
function speak(text) {
  if (!window.speechSynthesis) return;
  speechSynthesis.cancel();
  const voices = speechSynthesis.getVoices();
  const deVoice = voices.find(v => v.lang.startsWith('de')) || null;
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'de-DE';
  u.rate = 0.82;
  if (deVoice) u.voice = deVoice;
  speechSynthesis.speak(u);
}

// Build the full Hören section UI
export function buildHoeren() {
  const el = document.getElementById('hoerenContent');
  if (!el) return;
  const tabs = ['Teil 1', 'Teil 2', 'Teil 3'];
  el.innerHTML = `
    <div class="h-tabs">
      ${tabs.map((t, i) => `<button class="h-tab ${hPart === i + 1 ? 'active' : ''}" onclick="switchHPart(${i + 1})">${t}</button>`).join('')}
    </div>
    <div id="hoerenExercise"></div>`;
  renderHTeil();
}

export function switchHPart(p) {
  hPart = p;
  hIdx = 0;
  buildHoeren();
}

function renderHTeil() {
  if (hPart === 1) renderH1();
  else if (hPart === 2) renderH2();
  else renderH3();
}

// ----- Teil 1: Dialogue → MCQ -----
function renderH1() {
  const data = hoerenData.teil1;
  const item = data[hIdx % data.length];
  const dialogText = item.script.map(l => `<div class="h-line"><span class="h-speaker">${l.s}:</span> <span>${l.t}</span></div>`).join('');
  document.getElementById('hoerenExercise').innerHTML = `
    <div class="h-counter">Frage ${(hIdx % data.length) + 1} / ${data.length}</div>
    <div class="h-score-row">Richtig: <strong>${hScore.p1c}</strong> / ${hScore.p1t}</div>
    <div class="h-script" id="hScript1">${dialogText}</div>
    <button class="h-play-btn" onclick="hPlayT1()">▶ Hören (TTS)</button>
    <div class="h-question">${item.question}</div>
    <div class="quiz-opts" id="h1Opts">
      ${item.options.map((o, i) => `<button class="quiz-opt" onclick="hCheckT1(this,${i},${item.answer})">${o}</button>`).join('')}
    </div>
    <button class="btn-full" onclick="hNext1()" style="margin-top:12px">Nächste Frage →</button>`;
}

export function hPlayT1() {
  const item = hoerenData.teil1[hIdx % hoerenData.teil1.length];
  const fullText = item.script.map(l => `${l.s}: ${l.t}`).join('  ');
  speak(fullText);
}

export function hCheckT1(el, chosen, correct) {
  el.closest('.quiz-opts').querySelectorAll('.quiz-opt').forEach((o, i) => {
    o.classList.add('disabled');
    if (i === correct) o.classList.add('correct');
    if (o === el && chosen !== correct) o.classList.add('wrong');
  });
  hScore.p1t++;
  if (chosen === correct) hScore.p1c++;
  document.querySelector('.h-score-row').innerHTML = `Richtig: <strong>${hScore.p1c}</strong> / ${hScore.p1t}`;
}

export function hNext1() {
  speechSynthesis && speechSynthesis.cancel();
  hIdx++;
  renderH1();
}

// ----- Teil 2: Short message → Write the answer -----
function renderH2() {
  const data = hoerenData.teil2;
  const item = data[hIdx % data.length];
  document.getElementById('hoerenExercise').innerHTML = `
    <div class="h-counter">Frage ${(hIdx % data.length) + 1} / ${data.length}</div>
    <div class="h-score-row">Beantwortet: ${hScore.p2t} / ${hoerenData.teil2.length}</div>
    <div class="h-script" id="hScript2">${item.script}</div>
    <button class="h-play-btn" onclick="hPlayT2()">▶ Hören (TTS)</button>
    <div class="h-question">${item.question}</div>
    <p style="font-size:.8rem;color:var(--muted);margin-bottom:8px">Hinweis: ${item.hint}</p>
    <input id="h2Ans" class="h-input" placeholder="Ihre Antwort..." type="text">
    <button class="btn-full" onclick="hCheckT2()" style="margin-top:8px">Überprüfen</button>
    <div id="h2FB" style="margin-top:10px"></div>
    <button class="btn-full" onclick="hNext2()" style="margin-top:10px">Nächste Frage →</button>`;
}

export function hPlayT2() {
  const item = hoerenData.teil2[hIdx % hoerenData.teil2.length];
  speak(item.script);
}

export function hCheckT2() {
  const item = hoerenData.teil2[hIdx % hoerenData.teil2.length];
  const userAns = document.getElementById('h2Ans').value.trim().toLowerCase();
  const correct = item.answer.toLowerCase();
  // Accept if user's answer contains a key token from the answer
  const tokens = correct.split(/[\s\/]+/);
  const ok = tokens.some(tok => userAns.includes(tok));
  hScore.p2t++;
  document.getElementById('h2FB').innerHTML = ok
    ? `<span style="color:var(--green)">✓ Gut! Richtige Antwort: <strong>${item.answer}</strong></span>`
    : `<span style="color:var(--red)">✗ Richtige Antwort: <strong>${item.answer}</strong></span>`;
  document.getElementById('h2Ans').disabled = true;
  document.querySelector('.h-score-row').innerHTML = `Beantwortet: ${hScore.p2t} / ${hoerenData.teil2.length}`;
}

export function hNext2() {
  speechSynthesis && speechSynthesis.cancel();
  hIdx++;
  renderH2();
}

// ----- Teil 3: Announcement → Richtig oder Falsch? -----
function renderH3() {
  const data = hoerenData.teil3;
  const item = data[hIdx % data.length];
  document.getElementById('hoerenExercise').innerHTML = `
    <div class="h-counter">Frage ${(hIdx % data.length) + 1} / ${data.length}</div>
    <div class="h-score-row">Richtig: <strong>${hScore.p3c}</strong> / ${hScore.p3t}</div>
    <div class="h-script">${item.script}</div>
    <button class="h-play-btn" onclick="hPlayT3()">▶ Hören (TTS)</button>
    <div class="h-question">Aussage: <em>${item.statement}</em></div>
    <div style="display:flex;gap:10px;margin-top:8px">
      <button class="quiz-opt" style="flex:1" onclick="hCheckT3(this,true,${item.answer})">✓ Richtig</button>
      <button class="quiz-opt" style="flex:1" onclick="hCheckT3(this,false,${item.answer})">✗ Falsch</button>
    </div>
    <button class="btn-full" onclick="hNext3()" style="margin-top:12px">Nächste Frage →</button>`;
}

export function hPlayT3() {
  const item = hoerenData.teil3[hIdx % hoerenData.teil3.length];
  speak(item.script);
}

export function hCheckT3(el, chosen, correct) {
  el.parentElement.querySelectorAll('.quiz-opt').forEach(o => {
    o.classList.add('disabled');
  });
  // Highlight the correct answer button
  const btns = el.parentElement.querySelectorAll('.quiz-opt');
  btns[correct ? 0 : 1].classList.add('correct');
  if ((chosen && !correct) || (!chosen && correct)) el.classList.add('wrong');
  hScore.p3t++;
  if (chosen === correct) hScore.p3c++;
  document.querySelector('.h-score-row').innerHTML = `Richtig: <strong>${hScore.p3c}</strong> / ${hScore.p3t}`;
}

export function hNext3() {
  speechSynthesis && speechSynthesis.cancel();
  hIdx++;
  renderH3();
}

export function initHoeren() {
  hIdx = 0;
  hPart = 1;
  buildHoeren();
}

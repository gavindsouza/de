// Email practice module

import { writingDataByLevel } from './data/email-prompts.js';
import { S } from './state.js';
import { getLevelConfig } from './level-config.js';
import { rand } from './utils.js';

function currentWriting() {
  return writingDataByLevel[S.level] || writingDataByLevel.a1;
}

export function renderWritingSection() {
  const cfg = currentWriting();
  const uiCfg = getLevelConfig(S.level).writing;
  document.getElementById('emailTitle').textContent = uiCfg.title;
  document.getElementById('emailDesc').textContent = uiCfg.desc;
  document.getElementById('writingFormatHint').innerHTML = cfg.formatLines.join('<br>');
  document.getElementById('emBodyLabel').textContent = cfg.bodyLabel;
  document.getElementById('emBody').placeholder = cfg.textareaPlaceholder;
  document.getElementById('emCheckBtn').textContent = cfg.checkLabel;
  document.getElementById('emailExamplesTitle').textContent = `${uiCfg.title} examples`;
  document.getElementById('emGreet').innerHTML = cfg.greetings.map(v => `<option>${v}</option>`).join('');
  document.getElementById('emClose').innerHTML = cfg.closings.map(v => `<option>${v}</option>`).join('');
  document.getElementById('emailExamples').innerHTML = cfg.examples.map(ex =>
    `<div class="email-ex"><strong>${ex.title}</strong><br><br>${ex.lines.join('<br>')}</div>`
  ).join('');
  document.getElementById('emBody').value = '';
  document.getElementById('emFB').innerHTML = '';
  countWords();
}

export function newPrompt() {
  const cfg = currentWriting();
  const p = rand(cfg.prompts);
  document.getElementById('emailPrompt').innerHTML =
    `<div style="margin-bottom:8px">${p.scenario}</div>
     <div style="font-weight:600;margin-bottom:6px">${p.instruction}</div>
     <ul style="margin:0 0 8px;padding-left:20px">
       ${p.points.map(pt => `<li>${pt}</li>`).join('')}
     </ul>
     <span style="font-size:.78rem;color:var(--muted)">${cfg.promptHint}</span>`;
}

export function countWords() {
  const cfg = currentWriting();
  const t = document.getElementById('emBody').value.trim();
  const n = t ? t.split(/\s+/).length : 0;
  const el = document.getElementById('emWC');
  const [min, max] = cfg.wordRange;
  el.textContent = `${n} / ${min}-${max} words`;
  el.className = 'wc' + (n >= min && n <= max ? ' good' : n > max ? ' over' : '');
}

export function checkEmail() {
  const cfg = currentWriting();
  const b = document.getElementById('emBody').value.trim();
  const n = b ? b.split(/\s+/).length : 0;
  const normalized = b.toLowerCase();
  const [min, max] = cfg.wordRange;
  let fb = [];
  if (!b) {
    fb.push('<span class="txt-err">Write something first!</span>');
  } else {
    if (n < min) fb.push(`<span class="txt-warn">Too short (${n}). Aim for ${min}-${max}.</span>`);
    else if (n > cfg.softMax) fb.push(`<span class="txt-warn">A bit long (${n}). Keep to about ${min}-${max}.</span>`);
    else fb.push(`<span class="txt-ok">Good length (${n} words)!</span>`);
    if (cfg.connectors.some(conn => normalized.includes(conn))) fb.push('<span class="txt-ok">Nice linking phrase!</span>');
    else fb.push('<span class="txt-warn">Add a connector or reason to sound more natural.</span>');
    if (/[.!?]$/.test(b)) fb.push('<span class="txt-ok">Good punctuation.</span>');
    else fb.push('<span class="txt-warn">Add punctuation at the end.</span>');
  }
  const full = `${document.getElementById('emGreet').value}\n\n${b}\n\n${document.getElementById('emClose').value}`;
  fb.push(`<div class="email-preview-box">${full}</div>`);
  document.getElementById('emFB').innerHTML = fb.join('<br>');
}

// Email practice module

import { emailPrompts } from './data/email-prompts.js';
import { rand } from './utils.js';

export function newPrompt() {
  const p = rand(emailPrompts);
  document.getElementById('emailPrompt').innerHTML =
    `<div style="margin-bottom:8px">${p.scenario}</div>
     <div style="font-weight:600;margin-bottom:6px">${p.instruction}</div>
     <ul style="margin:0 0 8px;padding-left:20px">
       ${p.points.map(pt => `<li>${pt}</li>`).join('')}
     </ul>
     <span style="font-size:.78rem;color:var(--muted)">Antippen für neue Aufgabe</span>`;
}

export function countWords() {
  const t = document.getElementById('emBody').value.trim();
  const n = t ? t.split(/\s+/).length : 0;
  const el = document.getElementById('emWC');
  el.textContent = `${n} / 20-30 words`;
  el.className = 'wc' + (n >= 20 && n <= 30 ? ' good' : n > 30 ? ' over' : '');
}

export function checkEmail() {
  const b = document.getElementById('emBody').value.trim();
  const n = b ? b.split(/\s+/).length : 0;
  let fb = [];
  if (!b) {
    fb.push('<span class="txt-err">Write something first!</span>');
  } else {
    if (n < 20) fb.push(`<span class="txt-warn">Too short (${n}). Aim for 20-30.</span>`);
    else if (n > 35) fb.push(`<span class="txt-warn">A bit long (${n}). Keep to 20-30.</span>`);
    else fb.push(`<span class="txt-ok">Good length (${n} words)!</span>`);
    if (b.includes('weil') || b.includes('schreibe')) fb.push('<span class="txt-ok">Nice connecting phrase!</span>');
    if (/[.!?]$/.test(b)) fb.push('<span class="txt-ok">Good punctuation.</span>');
    else fb.push('<span class="txt-warn">Add punctuation at the end.</span>');
  }
  const full = `${document.getElementById('emGreet').value}\n\n${b}\n\n${document.getElementById('emClose').value}`;
  fb.push(`<div class="email-preview-box">${full}</div>`);
  document.getElementById('emFB').innerHTML = fb.join('<br>');
}

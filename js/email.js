// Email practice module

import { emailPrompts } from './data.js';

export function newPrompt() {
  const p = emailPrompts[Math.random() * emailPrompts.length | 0];
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
    fb.push('<span style="color:var(--red)">Write something first!</span>');
  } else {
    if (n < 20) fb.push(`<span style="color:var(--yellow)">Too short (${n}). Aim for 20-30.</span>`);
    else if (n > 35) fb.push(`<span style="color:var(--yellow)">A bit long (${n}). Keep to 20-30.</span>`);
    else fb.push(`<span style="color:var(--green)">Good length (${n} words)!</span>`);
    if (b.includes('weil') || b.includes('schreibe')) fb.push('<span style="color:var(--green)">Nice connecting phrase!</span>');
    if (/[.!?]$/.test(b)) fb.push('<span style="color:var(--green)">Good punctuation.</span>');
    else fb.push('<span style="color:var(--yellow)">Add punctuation at the end.</span>');
  }
  const full = `${document.getElementById('emGreet').value}\n\n${b}\n\n${document.getElementById('emClose').value}`;
  fb.push(`<div style="background:var(--surface);padding:12px;border-radius:12px;margin-top:8px;white-space:pre-line;font-size:.9rem">${full}</div>`);
  document.getElementById('emFB').innerHTML = fb.join('<br>');
}

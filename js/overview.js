// Overview dashboard and reset

import { words } from './data/words.js';
import { S, save } from './state.js';
import { buildDeck, showCard, buildFilters } from './flashcards.js';
import { filterWL } from './wordlist.js';
import { updPreview } from './intro.js';
import { newWF } from './wfragen.js';
import { newArt } from './article.js';
import { buildSched } from './schedule.js';

export function updOverview() {
  const total = words.length, known = S.known.size, unknown = S.unknown.size, unseen = total - known - unknown;
  const pct = total ? Math.round(known / total * 100) : 0;
  const circ = 327;
  document.getElementById('ovRingCircle').setAttribute('stroke-dashoffset', circ - (circ * pct / 100));
  document.getElementById('ovRingPct').textContent = pct + '%';

  document.getElementById('ovHero').innerHTML = `
    <div class="ov-hero-card"><div class="n" style="color:var(--green)">${known}</div><div class="l">Words Known</div></div>
    <div class="ov-hero-card"><div class="n" style="color:var(--red)">${unknown}</div><div class="l">Learning</div></div>
    <div class="ov-hero-card"><div class="n" style="color:var(--muted)">${unseen}</div><div class="l">Unseen</div></div>
    <div class="ov-hero-card"><div class="n" style="color:var(--accent2)">${total}</div><div class="l">Total Words</div></div>
  `;
  document.getElementById('ovFcSub').textContent = `${unknown + unseen} words to review`;
  document.getElementById('ovWfSub').textContent = `${S.wfS} / ${S.wfT} correct`;
  document.getElementById('ovArtSub').textContent = `${S.artS} / ${S.artT} correct`;
  document.getElementById('ovIntroSub').textContent = `${S.pCount} / 20 practices`;
  document.getElementById('ovWlSub').textContent = `${words.length} words`;
  document.getElementById('ovSchedSub').textContent = `${S.days.size} / 14 days done`;
  document.getElementById('ovExamSub').textContent = `${S.examDone} Prüfung${S.examDone === 1 ? '' : 'en'} gemacht`;
  document.getElementById('ovHoerenSub').textContent = 'Hören & Aussagen üben';
  document.getElementById('ovLesenSub').textContent = 'Texte & Formulare lesen';
}

export function resetProgress() {
  const overlay = document.createElement('div');
  overlay.className = 'ov-modal-overlay';
  overlay.onclick = e => { if (e.target === overlay) overlay.remove(); };
  overlay.innerHTML = `
    <div class="ov-modal">
      <h3>Reset All Progress?</h3>
      <p>This will clear everything: flashcard progress, quiz scores, practice counter, schedule checkmarks, and your self-intro fields. This cannot be undone.</p>
      <div class="ov-modal-actions">
        <button style="background:var(--card);color:var(--text);border:1px solid var(--border)" onclick="this.closest('.ov-modal-overlay').remove()">Cancel</button>
        <button style="background:var(--red);color:#fff" onclick="confirmReset()">Reset</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
}

export function confirmReset() {
  localStorage.removeItem('a1s');
  S.known.clear(); S.unknown.clear(); S.wfS = 0; S.wfT = 0; S.artS = 0; S.artT = 0; S.pCount = 0; S.days.clear(); S.intro = {}; S.idx = 0;
  buildDeck(); showCard(); buildFilters(); filterWL('');
  document.getElementById('wfS').textContent = '0';
  document.getElementById('wfT').textContent = '0';
  document.getElementById('artS').textContent = '0';
  document.getElementById('artT').textContent = '0';
  document.getElementById('pCount').textContent = '0';
  document.getElementById('pProg').style.width = '0%';
  ['iName', 'iAge', 'iCountry', 'iJob', 'iLangs'].forEach(id => { document.getElementById(id).value = ''; });
  updPreview(); newWF(); newArt(); buildSched();
  document.querySelector('.ov-modal-overlay').remove();
  updOverview();
}

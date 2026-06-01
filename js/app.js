// Main entry point - wires up modules and exposes handlers to window

import { S, save } from './state.js';
import { go, initNav } from './nav.js';
import { buildFilters, buildDeck, showCard, flip, mark, setF, initSwipe, initKeyboard, fcSpeak } from './flashcards.js';
import { prewarmTTS } from './audio.js';
import { setWF, filterWL, wlSpeak } from './wordlist.js';
import { newPrompt, countWords, checkEmail } from './email.js';
import { newSpeak, spkPlay } from './speaking.js';
import { saveIntro, loadIntro, incPractice } from './intro.js';
import { newWF, chkWF } from './wfragen.js';
import { newArt, chkArt } from './article.js';
import { newConj, chkConj } from './conjugation.js';
import { newCase, chkCase } from './cases.js';
import { newScramble, scrPlace, scrRemove, scrUndo, scrCheck } from './scramble.js';
import { buildSched, togDay } from './schedule.js';
import { updOverview, resetProgress, confirmReset } from './overview.js';
import { initHoeren, buildHoeren, switchHPart, hPlayT1, hCheckT1, hNext1, hPlayT2, hCheckT2, hNext2, hPlayT3, hCheckT3, hNext3 } from './hoeren.js';
import { initLesen, buildLesen, switchLPart, switchLSet, l1Pick, l1Check, l2Ans, l3Check } from './lesen.js';
import { startExam, examNext, examSpeak, examH1Check, examH1Advance, examH2Check, examH2Advance, examH3Check, examH3Advance, examL1Pick, examL1Submit, examL2Ans, examL2Advance, examL3Submit, examS1Count, examS1Done, examS2Done, examSp2Next, examSp3Next, examFinish } from './mockexam.js';

function rebuildForLevel() {
  S.filter = 'Alle';
  S.wlFilter = 'Alle';
  buildFilters();
  buildDeck();
  showCard();
  filterWL('');
  document.getElementById('wlSearch').value = '';
  newArt();
  newSpeak();
  updOverview();
  // update level pill buttons
  document.querySelectorAll('.level-pill').forEach(b => {
    b.classList.toggle('active', b.dataset.lv === S.level);
  });
  // show/hide A2-only grammar cards
  document.querySelectorAll('[data-level]').forEach(el => {
    el.hidden = el.dataset.level !== S.level;
  });
}

export function setLevel(lv) {
  if (lv === 'b1') {
    // Show a brief "coming soon" toast
    let toast = document.getElementById('levelToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'levelToast';
      toast.className = 'level-toast';
      document.body.appendChild(toast);
    }
    toast.textContent = 'B1 — Coming Soon! 🚀';
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
    return;
  }
  S.level = lv;
  save();
  rebuildForLevel();
}

// Expose to window for onclick handlers in HTML
Object.assign(window, {
  go, setF, setWF, filterWL, flip, mark, fcSpeak,
  wlSpeak,
  newPrompt, countWords, checkEmail,
  newSpeak, spkPlay, saveIntro, incPractice,
  newWF, chkWF, newArt, chkArt, togDay,
  newConj, chkConj,
  newCase, chkCase,
  newScramble, scrPlace, scrRemove, scrUndo, scrCheck,
  resetProgress, confirmReset,
  setLevel,
  // Hören
  buildHoeren, switchHPart,
  hPlayT1, hCheckT1, hNext1,
  hPlayT2, hCheckT2, hNext2,
  hPlayT3, hCheckT3, hNext3,
  // Lesen
  buildLesen, switchLPart, switchLSet,
  l1Pick, l1Check, l2Ans, l3Check,
  // Mock Exam
  startExam, examNext, examSpeak,
  examH1Check, examH1Advance,
  examH2Check, examH2Advance,
  examH3Check, examH3Advance,
  examL1Pick, examL1Submit,
  examL2Ans, examL2Advance,
  examL3Submit,
  examS1Count, examS1Done, examS2Done,
  examSp2Next, examSp3Next, examFinish,
});

// Init
buildFilters();
buildDeck();
showCard();
filterWL('');
newPrompt();
newSpeak();
loadIntro();
document.getElementById('pCount').textContent = S.pCount;
document.getElementById('pProg').style.width = S.pCount / 20 * 100 + '%';
document.getElementById('wfS').textContent = S.wfS;
document.getElementById('wfT').textContent = S.wfT;
newWF();
newArt();
newConj();
newCase();
newScramble();
buildSched();
updOverview();
initSwipe();
initKeyboard();
initHoeren();
initLesen();
initNav();
// Apply initial level state (pill buttons + grammar cards)
document.querySelectorAll('.level-pill').forEach(b => {
  b.classList.toggle('active', b.dataset.lv === S.level);
});
document.querySelectorAll('[data-level]').forEach(el => {
  el.hidden = el.dataset.level !== S.level;
});
go(location.hash.slice(1) || 'flashcards');
prewarmTTS();

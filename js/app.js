// Main entry point - wires up modules and exposes handlers to window

import { S } from './state.js';
import { go } from './nav.js';
import { buildFilters, buildDeck, showCard, flip, mark, setF, initSwipe, initKeyboard } from './flashcards.js';
import { setWF, filterWL } from './wordlist.js';
import { newPrompt, countWords, checkEmail } from './email.js';
import { newSpeak } from './speaking.js';
import { saveIntro, loadIntro, incPractice } from './intro.js';
import { newWF, chkWF } from './wfragen.js';
import { newArt, chkArt } from './article.js';
import { buildSched, togDay } from './schedule.js';
import { updOverview, resetProgress, confirmReset } from './overview.js';
import { initHoeren, buildHoeren, switchHPart, hPlayT1, hCheckT1, hNext1, hPlayT2, hCheckT2, hNext2, hPlayT3, hCheckT3, hNext3 } from './hoeren.js';
import { initLesen, buildLesen, switchLPart, switchLSet, l1Pick, l1Check, l2Ans, l3Check } from './lesen.js';
import { startExam, examNext, examSpeak, examH1Check, examH1Advance, examH2Check, examH2Advance, examH3Check, examH3Advance, examL1Pick, examL1Submit, examL2Ans, examL2Advance, examL3Submit, examS1Count, examS1Done, examS2Done, examSp2Next, examSp3Next, examFinish } from './mockexam.js';

// Expose to window for onclick handlers in HTML
Object.assign(window, {
  go, setF, setWF, filterWL, flip, mark,
  newPrompt, countWords, checkEmail,
  newSpeak, saveIntro, incPractice,
  newWF, chkWF, newArt, chkArt, togDay,
  resetProgress, confirmReset,
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
buildSched();
updOverview();
initSwipe();
initKeyboard();
initHoeren();
initLesen();

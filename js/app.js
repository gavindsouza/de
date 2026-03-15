// Main entry point - wires up modules and exposes handlers to window

import { S } from './state.js';
import { go } from './nav.js';
import { buildFilters, buildDeck, showCard, flip, mark, setF, initSwipe, initKeyboard } from './flashcards.js';
import { setWF, filterWL } from './wordlist.js';
import { newPrompt, countWords, checkEmail } from './email.js';
import { newSpeak } from './speaking.js';
import { saveIntro, loadIntro, incPractice } from './intro.js';
import { newWF, chkWF } from './wfragen.js';
import { buildSched, togDay } from './schedule.js';
import { updOverview, resetProgress, confirmReset } from './overview.js';

// Expose to window for onclick handlers in HTML
Object.assign(window, {
  go, setF, setWF, filterWL, flip, mark,
  newPrompt, countWords, checkEmail,
  newSpeak, saveIntro, incPractice,
  newWF, chkWF, togDay,
  resetProgress, confirmReset,
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
buildSched();
updOverview();
initSwipe();
initKeyboard();

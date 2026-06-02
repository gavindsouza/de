// Main entry point - wires up modules and exposes handlers to window

import { S, save, restoreLevelUI, syncLevelUI } from './state.js';
import { go, initNav } from './nav.js';
import { buildFilters, buildDeck, showCard, flip, mark, setF, initSwipe, initKeyboard, fcSpeak } from './flashcards.js';
import { prewarmTTS } from './audio.js';
import { setWF, filterWL, wlSpeak } from './wordlist.js';
import { newPrompt, countWords, checkEmail, renderWritingSection } from './email.js';
import { newSpeak, spkPlay, renderSpeakingSection } from './speaking.js';
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
import { getLevelConfig, matchesDataLevel, isSectionEnabled } from './level-config.js';

function applyLevelSections() {
  document.querySelectorAll('[data-level]').forEach(el => {
    el.hidden = !matchesDataLevel(el.dataset.level, S.level);
  });
  document.querySelectorAll('[data-section]').forEach(el => {
    el.hidden = !isSectionEnabled(S.level, el.dataset.section);
  });
}

function applyLevelChrome() {
  const cfg = getLevelConfig(S.level);
  document.getElementById('navVocabLabel').textContent = 'Vocab';
  document.getElementById('navGrammarLabel').textContent = 'Grammar';
  document.getElementById('navWriteLabel').textContent = 'Write';
  document.getElementById('navSpeakLabel').textContent = 'Speak';
  document.getElementById('navHomeLabel').textContent = 'Home';

  const vocabKicker = document.getElementById('vocabLevelKicker');
  vocabKicker.textContent = cfg.vocab.kicker || '';
  vocabKicker.hidden = !cfg.vocab.kicker;
  document.getElementById('flashcardsTitle').textContent = cfg.vocab.title;
  const vocabDesc = document.getElementById('flashcardsDesc');
  vocabDesc.textContent = cfg.vocab.desc || '';
  vocabDesc.hidden = !cfg.vocab.desc;
  document.getElementById('wlSearch').placeholder = cfg.vocab.searchPlaceholder;

  document.getElementById('grammarLevelKicker').textContent = cfg.grammar.kicker;
  document.getElementById('grammarTitle').textContent = cfg.grammar.title;
  document.getElementById('grammarDesc').textContent = cfg.grammar.desc;
  document.getElementById('grammarFocusNote').textContent = cfg.grammar.focus;

  document.getElementById('emailLevelKicker').textContent = cfg.writing.kicker;
  document.getElementById('speakingLevelKicker').textContent = cfg.speaking.kicker;
}

function applyVocabView() {
  const listView = S.vocabView === 'list';
  document.getElementById('vocabCardsView').hidden = listView;
  document.getElementById('vocabListView').hidden = !listView;
  document.getElementById('vocabCardsTab').classList.toggle('active', !listView);
  document.getElementById('vocabListTab').classList.toggle('active', listView);
}

export function setVocabView(view) {
  S.vocabView = view;
  save();
  applyVocabView();
  if (view === 'list') filterWL(S.vocabSearch);
  else showCard();
}

export function toggleVocabView() {
  setVocabView(S.vocabView === 'cards' ? 'list' : 'cards');
}

function rebuildForLevel() {
  restoreLevelUI();
  applyLevelChrome();
  applyLevelSections();
  buildFilters();
  buildDeck();
  showCard();
  document.getElementById('wlSearch').value = S.vocabSearch;
  filterWL(S.vocabSearch);
  applyVocabView();
  renderWritingSection();
  newPrompt();
  newArt();
  newConj();
  newCase();
  newScramble();
  renderSpeakingSection();
  newSpeak();
  updOverview();
  document.querySelectorAll('.level-pill').forEach(b => {
    b.classList.toggle('active', b.dataset.lv === S.level);
  });
}

export function setLevel(lv) {
  syncLevelUI();
  S.level = lv;
  restoreLevelUI(lv);
  save();
  rebuildForLevel();
  if (!isSectionEnabled(S.level, location.hash.slice(1) || 'overview')) go('overview');
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
  setLevel, setVocabView, toggleVocabView,
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
applyLevelChrome();
applyLevelSections();
document.getElementById('wlSearch').value = S.vocabSearch;
filterWL(S.vocabSearch);
applyVocabView();
renderWritingSection();
newPrompt();
renderSpeakingSection();
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
document.querySelectorAll('.level-pill').forEach(b => {
  b.classList.toggle('active', b.dataset.lv === S.level);
});
go(location.hash.slice(1) || 'overview');
prewarmTTS();

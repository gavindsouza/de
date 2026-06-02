// Navigation between sections

import { S } from './state.js';
import { updOverview } from './overview.js';
import { isSectionEnabled } from './level-config.js';

const VALID_SECTIONS = new Set([
  'flashcards', 'wordlist', 'grammar', 'derarticle', 'conjugation', 'cases', 'scramble',
  'speaking', 'email', 'overview', 'intro', 'wfragen', 'schedule', 'hoeren', 'lesen', 'mockexam',
]);

export function go(id) {
  if (id === 'wordlist') {
    id = 'flashcards';
    window.setVocabView && window.setVocabView('list');
  }
  if (!VALID_SECTIONS.has(id)) id = 'flashcards';
  if (!isSectionEnabled(S.level, id)) id = 'overview';
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  const grammarSubs = ['derarticle', 'conjugation', 'cases', 'scramble'];
  const overviewSubs = ['intro', 'wfragen', 'schedule', 'hoeren', 'lesen', 'mockexam'];
  document.querySelectorAll('#bottomNav button').forEach(b => {
    b.classList.toggle('active',
      b.dataset.s === id ||
      (overviewSubs.includes(id) && b.dataset.s === 'overview') ||
      (grammarSubs.includes(id) && b.dataset.s === 'grammar')
    );
  });
  if (id === 'overview') updOverview();
  if (id === 'hoeren') window.buildHoeren && window.buildHoeren();
  if (id === 'lesen') window.buildLesen && window.buildLesen();
  window.scrollTo(0, 0);
  if (location.hash.slice(1) !== id) history.replaceState(null, '', '#' + id);
}

export function initNav() {
  window.addEventListener('hashchange', () => {
    go(location.hash.slice(1) || 'flashcards');
  });
}

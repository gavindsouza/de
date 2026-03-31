// Navigation between sections

import { updOverview } from './overview.js';

export function go(id) {
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
}

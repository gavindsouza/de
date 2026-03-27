// Navigation between sections

import { updOverview } from './overview.js';

export function go(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelectorAll('#bottomNav button').forEach(b => {
    b.classList.toggle('active',
      b.dataset.s === id ||
      (id === 'intro' || id === 'wfragen' || id === 'schedule' || id === 'hoeren' || id === 'lesen' || id === 'mockexam') && b.dataset.s === 'overview'
    );
  });
  if (id === 'overview') updOverview();
  if (id === 'hoeren') window.buildHoeren && window.buildHoeren();
  if (id === 'lesen') window.buildLesen && window.buildLesen();
  window.scrollTo(0, 0);
}

// Navigation between sections

import { updOverview } from './overview.js';

export function go(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelectorAll('#bottomNav button').forEach(b => {
    b.classList.toggle('active',
      b.dataset.s === id ||
      (id === 'intro' || id === 'wfragen' || id === 'schedule') && b.dataset.s === 'overview'
    );
  });
  if (id === 'overview') updOverview();
  window.scrollTo(0, 0);
}

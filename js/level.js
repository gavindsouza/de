// Level-aware word list helper

import { words as a1Words } from './data/words.js';
import { words as a2Words } from './data/words-a2.js';
import { S } from './state.js';

/**
 * Returns the vocabulary set for the current target level.
 * A2 is cumulative: it includes all A1 words plus A2-specific words.
 */
export function getWords() {
  if (S.level === 'a2') return [...a1Words, ...a2Words];
  // a1 (default) — A1 only
  return a1Words;
}

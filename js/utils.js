// Shared utility functions used across quiz and display modules

// Pick a random element from an array
export function rand(arr) {
  return arr[Math.random() * arr.length | 0];
}

// Disable all .quiz-opt buttons inside container, mark correct/wrong.
// correctFn(option, index) returns true if the option is the correct answer.
export function markOpts(container, chosen, correctFn) {
  container.querySelectorAll('.quiz-opt').forEach((o, i) => {
    const isCorrect = correctFn(o, i);
    o.classList.add('disabled');
    if (isCorrect) o.classList.add('correct');
    if (o === chosen && !isCorrect) o.classList.add('wrong');
  });
}

// Set a score/total textContent pair by element ID
export function updStatPair(sId, tId, s, t) {
  document.getElementById(sId).textContent = s;
  document.getElementById(tId).textContent = t;
}

export const SPEAKER_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>`;

// Sentence scramble data — practice the V2 word-order rule
// words: array of tokens to show as chips (shuffled at runtime)
// answer: correct order
// t: English translation shown as the prompt

export const scrambleData = [
  // ── Simple statements (Subject first) ──
  {
    words: ['wohne', 'in', 'Berlin', 'Ich'],
    answer: ['Ich', 'wohne', 'in', 'Berlin'],
    t: 'I live in Berlin.',
  },
  {
    words: ['lerne', 'Deutsch', 'Ich'],
    answer: ['Ich', 'lerne', 'Deutsch'],
    t: 'I am learning German.',
  },
  {
    words: ['gern', 'koche', 'Ich'],
    answer: ['Ich', 'koche', 'gern'],
    t: 'I like cooking.',
  },
  {
    words: ['komme', 'aus', 'Spanien', 'Ich'],
    answer: ['Ich', 'komme', 'aus', 'Spanien'],
    t: 'I come from Spain.',
  },
  {
    words: ['ein', 'Deutsch', 'bisschen', 'spreche', 'Ich'],
    answer: ['Ich', 'spreche', 'ein', 'bisschen', 'Deutsch'],
    t: 'I speak a little German.',
  },

  // ── Inverted statements (Adverb/Time at front → Verb 2nd, Subject 3rd) ──
  {
    words: ['fahre', 'nach', 'Hamburg', 'Morgen', 'ich'],
    answer: ['Morgen', 'fahre', 'ich', 'nach', 'Hamburg'],
    t: 'Tomorrow I travel to Hamburg.',
  },
  {
    words: ['kommt', 'Am', 'er', 'nicht', 'Montag'],
    answer: ['Am', 'Montag', 'kommt', 'er', 'nicht'],
    t: 'On Monday he is not coming.',
  },
  {
    words: ['lerne', 'Ich', 'jeden', 'Deutsch', 'Tag'],
    answer: ['Ich', 'lerne', 'jeden', 'Tag', 'Deutsch'],
    t: 'I learn German every day.',
  },
  {
    words: ['bin', 'Am', 'frei', 'ich', 'Wochenende'],
    answer: ['Am', 'Wochenende', 'bin', 'ich', 'frei'],
    t: 'I am free on the weekend.',
  },

  // ── Questions ──
  {
    words: ['du', 'Wo', 'wohnst'],
    answer: ['Wo', 'wohnst', 'du'],
    t: 'Where do you live?',
  },
  {
    words: ['Sie', 'Wie', 'heißen'],
    answer: ['Wie', 'heißen', 'Sie'],
    t: 'What is your name?',
  },
  {
    words: ['Sie', 'Woher', 'kommen'],
    answer: ['Woher', 'kommen', 'Sie'],
    t: 'Where do you come from?',
  },
  {
    words: ['beginnt', 'Wann', 'Kurs', 'der'],
    answer: ['Wann', 'beginnt', 'der', 'Kurs'],
    t: 'When does the course start?',
  },

  // ── Modal verbs (modal is 2nd, infinitive goes to END) ──
  {
    words: ['heute', 'kann', 'nicht', 'Ich', 'kommen'],
    answer: ['Ich', 'kann', 'heute', 'nicht', 'kommen'],
    t: 'I cannot come today.',
  },
  {
    words: ['Kaffee', 'Ich', 'möchte', 'einen'],
    answer: ['Ich', 'möchte', 'einen', 'Kaffee'],
    t: 'I would like a coffee.',
  },
  {
    words: ['zum', 'muss', 'Sie', 'Arzt'],
    answer: ['Sie', 'muss', 'zum', 'Arzt'],
    t: 'She has to go to the doctor.',
  },
  {
    words: ['Deutsch', 'ich', 'Warum', 'lerne'],
    answer: ['Warum', 'lerne', 'ich', 'Deutsch'],
    t: 'Why do I learn German?',
  },
  {
    words: ['sprichst', 'du', 'Wie', 'Deutsch', 'viel'],
    answer: ['Wie', 'viel', 'Deutsch', 'sprichst', 'du'],
    t: 'How much German do you speak?',
  },
];

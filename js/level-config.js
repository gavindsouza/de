export const LEVEL_CONFIG = {
  a1: {
    label: 'A1',
    enabledSections: ['flashcards', 'grammar', 'email', 'speaking', 'overview', 'intro', 'wfragen', 'schedule', 'hoeren', 'lesen', 'mockexam', 'derarticle', 'conjugation', 'cases', 'scramble'],
    vocab: {
      kicker: 'A1 vocabulary track',
      title: 'Vocabulary',
      desc: 'Train the Goethe A1 word bank with cards by default, then switch to the full list when you need it.',
      searchPlaceholder: 'Search A1 words...',
    },
    grammar: {
      kicker: 'A1 exam grammar',
      title: 'Grammar',
      desc: 'Core A1 grammar for Start Deutsch 1 with quick drills and cheat sheets.',
      focus: 'Focus now: articles, present tense, accusative/dative patterns, and simple word order.',
    },
    writing: {
      kicker: 'A1 writing track',
      title: 'Schreiben — A1',
      desc: 'Practice short A1 emails and messages in about 20-30 words.',
    },
    speaking: {
      kicker: 'A1 oral track',
      title: 'Sprechen — A1',
      desc: 'Use cue words to form simple questions and polite requests.',
      helperTitle: 'A1 speaking patterns',
      helperRows: [
        ['Wo ist der/die/das...?', 'Wo ist der Bahnhof?'],
        ['Haben Sie...?', 'Haben Sie Äpfel?'],
        ['Ich möchte... bitte.', 'Ich möchte ein Brot, bitte.'],
        ['Was kostet...?', 'Was kostet der Kaffee?'],
        ['Kann ich... haben?', 'Kann ich die Karte haben?'],
      ],
    },
    overview: {
      title: 'A1 Home',
      note: 'A1 mode keeps the full mock exam, listening, reading, and starter exam tools visible.',
      learningLabel: 'A1 exam prep',
      toolsLabel: 'Extra tools',
    },
  },
  a2: {
    label: 'A2',
    enabledSections: ['flashcards', 'grammar', 'email', 'speaking', 'overview', 'wfragen', 'derarticle', 'conjugation', 'cases', 'scramble'],
    vocab: {
      kicker: 'A2 vocabulary track',
      title: 'Vocabulary',
      desc: 'A2 mode blends A1 foundations with the A2 bank, so you can revise by cards or open the full list in one place.',
      searchPlaceholder: 'Search A1 + A2 words...',
    },
    grammar: {
      kicker: 'A2 exam grammar',
      title: 'Grammar',
      desc: 'A2 grammar keeps the basics visible and layers on the structures that matter for the next exam.',
      focus: 'Focus now: Perfekt, comparatives, reflexive verbs, subordinate clauses, and separable verbs.',
    },
    writing: {
      kicker: 'A2 writing track',
      title: 'Schreiben — A2',
      desc: 'Practice A2 emails and messages that explain reasons, plans, alternatives, and follow-up questions.',
    },
    speaking: {
      kicker: 'A2 oral track',
      title: 'Sprechen — A2',
      desc: 'Work with everyday situations where you must explain, react, and keep the conversation moving.',
      helperTitle: 'A2 speaking moves',
      helperRows: [
        ['Ich kann leider nicht..., weil...', 'Ich kann leider nicht kommen, weil ich arbeiten muss.'],
        ['Können wir stattdessen...?', 'Können wir uns stattdessen morgen treffen?'],
        ['Ich habe ein Problem mit...', 'Ich habe ein Problem mit meiner Heizung.'],
        ['Was meinen Sie dazu?', 'Was meinen Sie dazu?'],
        ['Ich würde gern wissen, ob...', 'Ich würde gern wissen, ob noch Plätze frei sind.'],
      ],
    },
    overview: {
      title: 'A2 Home',
      note: 'A2 mode now centers vocabulary, grammar, writing, and speaking. A1-only reading, listening, and mock-exam modules are hidden until they match the A2 format.',
      learningLabel: 'A2 exam prep',
      toolsLabel: 'Shared drills',
    },
  },
  b1: {
    label: 'B1',
    enabledSections: ['flashcards', 'grammar', 'email', 'speaking', 'overview', 'derarticle', 'conjugation', 'cases', 'scramble'],
    vocab: {
      kicker: 'B1 vocabulary bridge',
      title: 'Vocabulary',
      desc: 'B1 mode uses the current A1/A2 vocabulary bank as a bridge while the dedicated B1 list is being built.',
      searchPlaceholder: 'Search the current B1 bridge vocabulary...',
    },
    grammar: {
      kicker: 'B1 exam grammar',
      title: 'Grammar',
      desc: 'B1 mode keeps earlier grammar close by and adds higher-level structures for opinions, arguments, and polite requests.',
      focus: 'Focus now: Konjunktiv II for polite speech, relative clauses, and connectors for longer answers.',
    },
    writing: {
      kicker: 'B1 writing track',
      title: 'Schreiben — B1',
      desc: 'Practice longer B1 emails that justify opinions, make requests, and structure arguments clearly.',
    },
    speaking: {
      kicker: 'B1 oral track',
      title: 'Sprechen — B1',
      desc: 'Train for B1 discussion cards with opinions, reasons, examples, and follow-up questions.',
      helperTitle: 'B1 discussion moves',
      helperRows: [
        ['Ich bin der Meinung, dass...', 'Ich bin der Meinung, dass flexible Arbeitszeiten sinnvoll sind.'],
        ['Einerseits..., andererseits...', 'Einerseits spart man Geld, andererseits dauert es länger.'],
        ['Ein gutes Beispiel dafür ist...', 'Ein gutes Beispiel dafür ist mein letzter Sprachkurs.'],
        ['Wie sehen Sie das?', 'Wie sehen Sie das?'],
        ['Zusammenfassend würde ich sagen...', 'Zusammenfassend würde ich sagen, dass ...'],
      ],
    },
    overview: {
      title: 'B1 Home',
      note: 'B1 mode already specializes writing, speaking, and grammar. Dedicated B1 vocabulary, listening, reading, and mock exam modules are still in progress.',
      learningLabel: 'B1 exam prep',
      toolsLabel: 'Foundation drills',
    },
  },
};

export function getLevelConfig(level) {
  return LEVEL_CONFIG[level] || LEVEL_CONFIG.a1;
}

export function isSectionEnabled(level, id) {
  const section = id === 'wordlist' ? 'flashcards' : id;
  return getLevelConfig(level).enabledSections.includes(section);
}

export function matchesDataLevel(value, level) {
  return String(value || '')
    .split(/[,\s]+/)
    .filter(Boolean)
    .includes(level);
}

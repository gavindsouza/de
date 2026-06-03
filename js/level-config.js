export const LEVEL_CONFIG = {
  a1: {
    label: 'A1',
    enabledSections: ['flashcards', 'grammar', 'email', 'speaking', 'overview', 'intro', 'wfragen', 'schedule', 'hoeren', 'lesen', 'mockexam', 'derarticle', 'conjugation', 'cases', 'scramble'],
    vocab: {
      kicker: '',
      title: 'Vocab',
      desc: '',
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
      kicker: '',
      title: 'Vocab',
      desc: '',
      searchPlaceholder: 'Search A1 + A2 words...',
      examBrief: {
        kicker: 'A2 exam map',
        desc: 'Vocabulary still matters, but A2 also checks whether you can extract key details, write short practical messages, and react naturally in daily situations.',
        items: [
          { label: 'Lesen', focus: 'scan', text: 'Find key information quickly in notices, short messages, and simple forms.' },
          { label: 'Hören', focus: 'catch', text: 'Catch times, places, plans, and everyday problems on the first listen.' },
          { label: 'Schreiben', focus: '30-40 Wörter', text: 'State your reason, explain your plan, and end with a clear question.' },
          { label: 'Sprechen', focus: 'react', text: 'Handle common situations by explaining, suggesting alternatives, and confirming details.' },
        ],
      },
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
      desc: 'Practice everyday situations where you explain problems, suggest options, and keep the conversation moving.',
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
      note: 'A2 mode focuses on vocabulary, grammar, writing, and speaking with exam-style tasks and language support.',
      learningLabel: 'A2 exam prep',
      toolsLabel: 'Shared drills',
    },
  },
  b1: {
    label: 'B1',
    enabledSections: ['flashcards', 'grammar', 'email', 'speaking', 'overview', 'derarticle', 'conjugation', 'cases', 'scramble'],
    vocab: {
      kicker: '',
      title: 'Vocab',
      desc: '',
      searchPlaceholder: 'Search the current B1 bridge vocabulary...',
      examBrief: {
        kicker: 'B1 exam map',
        desc: 'At B1, you are judged less on isolated words and more on how clearly you can explain, justify, and react in connected language.',
        items: [
          { label: 'Lesen', focus: 'interpret', text: 'Identify key arguments, purpose, and relevant details in longer everyday texts.' },
          { label: 'Hören', focus: 'follow', text: 'Track main points and opinions in short interviews, announcements, and discussions.' },
          { label: 'Schreiben', focus: '80-100 Wörter', text: 'Structure your message with a clear position, reasons, and a concrete request or proposal.' },
          { label: 'Sprechen', focus: 'argue', text: 'State opinions, support them with examples, and respond directly to your partner.' },
        ],
      },
    },
    grammar: {
      kicker: 'B1 exam grammar',
      title: 'Grammar',
      desc: 'B1 grammar builds on A1/A2 and helps you connect ideas, justify opinions, and communicate more precisely.',
      focus: 'Focus now: Konjunktiv II, relative clauses, connectors for argumentation, and secure tense control in longer answers.',
    },
    writing: {
      kicker: 'B1 writing track',
      title: 'Schreiben — B1',
      desc: 'Practice exam-style B1 emails and statements with clear structure, reasons, examples, and action points.',
    },
    speaking: {
      kicker: 'B1 oral track',
      title: 'Sprechen — B1',
      desc: 'Train for B1 discussions: give your view, support it, react to counterpoints, and reach practical outcomes.',
      helperTitle: 'B1 discussion moves',
      helperRows: [
        ['Ich bin der Meinung, dass...', 'Ich bin der Meinung, dass flexible Arbeitszeiten sinnvoll sind.'],
        ['Einerseits..., andererseits...', 'Einerseits spart man Zeit, andererseits fehlt manchmal der direkte Austausch.'],
        ['Ein gutes Beispiel dafür ist...', 'Ein gutes Beispiel dafür ist mein letzter Sprachkurs.'],
        ['Allerdings sollte man auch bedenken, dass...', 'Allerdings sollte man auch bedenken, dass nicht alle davon profitieren.'],
        ['Wie sehen Sie das?', 'Wie sehen Sie das?'],
        ['Zusammenfassend würde ich sagen...', 'Zusammenfassend würde ich sagen, dass eine gemischte Lösung sinnvoll ist.'],
      ],
    },
    overview: {
      title: 'B1 Home',
      note: 'B1 mode focuses on productive exam skills with deeper writing and speaking support, while dedicated B1 reading/listening modules continue to expand.',
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

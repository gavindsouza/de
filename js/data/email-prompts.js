export const writingDataByLevel = {
  a1: {
    wordRange: [20, 30],
    softMax: 35,
    promptHint: 'Tap for a new A1 task',
    bodyLabel: 'Your message (20-30 words)',
    textareaPlaceholder: 'Ich schreibe, weil...',
    checkLabel: 'Check my A1 writing',
    formatLines: [
      '<span class="hl">Liebe/r [Name],</span> or <span class="hl">Sehr geehrte Damen und Herren,</span>',
      '<span class="hl">Ich schreibe, weil...</span>',
      '[1-2 short sentences]',
      '<span class="hl">Mit freundlichen Grüßen</span> / <span class="hl">Viele Grüße</span>',
    ],
    greetings: ['Liebe Maria,', 'Lieber Hans,', 'Sehr geehrte Damen und Herren,'],
    closings: ['Mit freundlichen Grüßen', 'Viele Grüße', 'Herzliche Grüße'],
    connectors: ['weil', 'schreibe', 'möchte'],
    prompts: [
      {
        scenario: 'Ihr Freund Thomas lädt Sie per E-Mail zu seiner Geburtstagsparty ein.',
        instruction: 'Schreiben Sie Thomas eine Antwort. Schreiben Sie zu drei Punkten:',
        points: ['Dank für die Einladung', 'kommen Sie? (wann?)', 'was bringen Sie mit?'],
      },
      {
        scenario: 'Sie haben einen Arzttermin am Montag um 10 Uhr, können aber nicht kommen.',
        instruction: 'Schreiben Sie dem Arzt eine E-Mail. Schreiben Sie zu drei Punkten:',
        points: ['Entschuldigung — warum können Sie nicht kommen?', 'bitten Sie um einen neuen Termin', 'wann haben Sie Zeit?'],
      },
      {
        scenario: 'Sie möchten einen Deutschkurs machen. Sie haben die Webseite einer Sprachschule gefunden.',
        instruction: 'Schreiben Sie der Sprachschule eine E-Mail. Schreiben Sie zu drei Punkten:',
        points: ['Wann beginnt der Kurs?', 'wie viel kostet er?', 'gibt es noch freie Plätze?'],
      },
      {
        scenario: 'In Ihrer Wohnung ist die Heizung kaputt. Es ist sehr kalt.',
        instruction: 'Schreiben Sie Ihrem Vermieter eine E-Mail. Schreiben Sie zu drei Punkten:',
        points: ['Problem beschreiben', 'seit wann ist die Heizung kaputt?', 'bitten Sie um schnelle Hilfe'],
      },
      {
        scenario: 'Sie möchten ein Hotelzimmer für Ihren Urlaub buchen.',
        instruction: 'Schreiben Sie dem Hotel eine E-Mail. Schreiben Sie zu drei Punkten:',
        points: ['wann möchten Sie kommen? (wie viele Nächte?)', 'Einzel- oder Doppelzimmer?', 'was kostet das Zimmer? (mit Frühstück?)'],
      },
    ],
    examples: [
      {
        title: 'Invite to a party',
        lines: ['Liebe Anna,', '', 'Ich schreibe, weil ich am Samstag eine Party mache. Kommst du? Die Party beginnt um 19 Uhr. Bitte bring Musik mit.', '', 'Viele Grüße'],
      },
      {
        title: 'Cancel appointment',
        lines: ['Sehr geehrte Damen und Herren,', '', 'Ich schreibe, weil ich meinen Termin am Montag nicht kommen kann. Kann ich einen neuen Termin bekommen?', '', 'Mit freundlichen Grüßen'],
      },
      {
        title: 'Ask about a course',
        lines: ['Sehr geehrte Damen und Herren,', '', 'Ich schreibe, weil ich einen Deutschkurs suche. Wann beginnt der nächste Kurs? Was kostet er?', '', 'Mit freundlichen Grüßen'],
      },
    ],
  },
  a2: {
    wordRange: [30, 40],
    softMax: 48,
    promptHint: 'Tap for a new A2 task',
    bodyLabel: 'Your message (30-40 words)',
    textareaPlaceholder: 'Ich schreibe Ihnen, weil...',
    checkLabel: 'Check my A2 writing',
    formatLines: [
      '<span class="hl">Betreff / Anrede</span> passend zur Situation wählen',
      '<span class="hl">Grund nennen</span> + eine Erklärung oder Alternative geben',
      '[2-3 linked sentences]',
      '<span class="hl">Abschlussfrage</span> oder Bitte um Antwort',
    ],
    greetings: ['Hallo Lara,', 'Guten Tag Frau Becker,', 'Sehr geehrte Damen und Herren,'],
    closings: ['Viele Grüße', 'Mit freundlichen Grüßen', 'Freundliche Grüße'],
    connectors: ['weil', 'deshalb', 'könnten', 'würde', 'leider'],
    prompts: [
      {
        scenario: 'Sie haben sich für einen Sprachkurs angemeldet, aber der Termin passt doch nicht.',
        instruction: 'Schreiben Sie der Sprachschule. Schreiben Sie zu drei Punkten:',
        points: ['warum passt der Termin nicht?', 'welcher Termin wäre besser?', 'bitten Sie um eine Antwort'],
      },
      {
        scenario: 'Ihre Nachbarin hat Ihre Pakete angenommen. Sie möchten sich bedanken und einen Termin zum Abholen vereinbaren.',
        instruction: 'Schreiben Sie Ihrer Nachbarin eine Nachricht. Schreiben Sie zu drei Punkten:',
        points: ['Dank', 'wann holen Sie das Paket ab?', 'bitten Sie um Bestätigung'],
      },
      {
        scenario: 'Im Hotel war das Zimmer anders als beschrieben.',
        instruction: 'Schreiben Sie dem Hotel eine Beschwerde. Schreiben Sie zu drei Punkten:',
        points: ['welches Problem gab es?', 'was erwarten Sie jetzt?', 'wann möchten Sie eine Antwort bekommen?'],
      },
      {
        scenario: 'Ihre Kollegin möchte mit Ihnen am Wochenende lernen, aber Sie haben schon Pläne.',
        instruction: 'Schreiben Sie Ihrer Kollegin. Schreiben Sie zu drei Punkten:',
        points: ['warum geht es nicht?', 'schlagen Sie einen anderen Termin vor', 'was möchten Sie zusammen lernen?'],
      },
      {
        scenario: 'Sie möchten in einem Sportverein Mitglied werden und brauchen Informationen.',
        instruction: 'Schreiben Sie dem Verein. Schreiben Sie zu drei Punkten:',
        points: ['welcher Kurs interessiert Sie?', 'wann können Sie kommen?', 'fragen Sie nach den Kosten'],
      },
    ],
    examples: [
      {
        title: 'Reschedule a course',
        lines: ['Sehr geehrte Damen und Herren,', '', 'Ich habe mich für den Abendkurs angemeldet, kann aber am Montag nicht kommen, weil ich Spätschicht habe. Könnte ich stattdessen in den Mittwochkurs wechseln? Bitte antworten Sie mir kurz.', '', 'Mit freundlichen Grüßen'],
      },
      {
        title: 'Thank a neighbour',
        lines: ['Hallo Nina,', '', 'Vielen Dank, dass du mein Paket angenommen hast. Ich bin heute bis 18 Uhr bei der Arbeit, könnte es aber am Abend abholen. Passt dir 19 Uhr?', '', 'Viele Grüße'],
      },
    ],
  },
  b1: {
    wordRange: [80, 100],
    softMax: 120,
    promptHint: 'Tap for a new B1 task',
    bodyLabel: 'Your message (80-100 words)',
    textareaPlaceholder: 'Ich möchte mich zu folgendem Thema äußern...',
    checkLabel: 'Check my B1 writing',
    formatLines: [
      '<span class="hl">Einleitung</span> mit Anlass oder Bezug',
      '<span class="hl">Meinung + Begründung</span> klar formulieren',
      '<span class="hl">Beispiel / Vorschlag / Bitte</span> ergänzen',
      '<span class="hl">Schluss</span> mit Ausblick oder Erwartung',
    ],
    greetings: ['Sehr geehrte Frau Sommer,', 'Liebes Team,', 'Hallo Jonas,'],
    closings: ['Mit freundlichen Grüßen', 'Viele Grüße', 'Beste Grüße'],
    connectors: ['meiner meinung', 'außerdem', 'deshalb', 'einerseits', 'andererseits', 'zusammenfassend'],
    prompts: [
      {
        scenario: 'Ihre Firma plant einen Teamtag. Sie möchten einen eigenen Vorschlag machen.',
        instruction: 'Schreiben Sie an Ihre Vorgesetzte. Schreiben Sie zu drei Punkten:',
        points: ['welche Idee haben Sie?', 'warum ist sie sinnvoll?', 'wie könnte der Tag konkret aussehen?'],
      },
      {
        scenario: 'In Ihrer Stadt soll ein altes Kino geschlossen werden.',
        instruction: 'Schreiben Sie an die Lokalzeitung. Schreiben Sie zu drei Punkten:',
        points: ['Ihre Meinung zur Schließung', 'welche Folgen hätte das?', 'welchen Vorschlag haben Sie?'],
      },
      {
        scenario: 'Sie möchten an einem beruflichen Seminar teilnehmen und brauchen Unterstützung von Ihrem Arbeitgeber.',
        instruction: 'Schreiben Sie eine formelle E-Mail. Schreiben Sie zu drei Punkten:',
        points: ['welches Seminar möchten Sie besuchen?', 'welchen Nutzen hat es für Ihre Arbeit?', 'worum bitten Sie konkret?'],
      },
    ],
    examples: [
      {
        title: 'Suggest a team day',
        lines: ['Sehr geehrte Frau Sommer,', '', 'ich habe gelesen, dass wir im Herbst einen Teamtag planen. Ich würde gern vorschlagen, einen gemeinsamen Workshop mit anschließendem Kochkurs zu organisieren. Einerseits könnten wir neue Ideen für unsere Projekte sammeln, andererseits hätten wir mehr Zeit, uns besser kennenzulernen. Ein solcher Tag wäre meiner Meinung nach motivierend und praktisch zugleich. Ich würde mich freuen, wenn Sie meinen Vorschlag prüfen könnten.', '', 'Mit freundlichen Grüßen'],
      },
    ],
  },
};

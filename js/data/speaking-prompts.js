export const speakingPromptsByLevel = {
  a2: [
    {
      badge: 'A2 Situation',
      title: 'Termin verschieben',
      task: 'Sie können heute nicht zum Deutschkurs kommen. Erklären Sie kurz warum und schlagen Sie einen neuen Termin vor.',
      suggestions: [
        { d: 'Es tut mir leid, aber ich kann heute nicht kommen, weil ich länger arbeiten muss.', e: 'Sorry, but I cannot come today because I have to work longer.' },
        { d: 'Können wir den Termin auf morgen Abend verschieben?', e: 'Can we move the appointment to tomorrow evening?' },
        { d: 'Passt es Ihnen um 18 Uhr?', e: 'Would 6 p.m. work for you?' },
      ],
    },
    {
      badge: 'A2 Situation',
      title: 'Wohnungsproblem melden',
      task: 'Ihre Heizung funktioniert nicht. Beschreiben Sie das Problem, sagen Sie seit wann es so ist, und bitten Sie um schnelle Hilfe.',
      suggestions: [
        { d: 'Guten Tag, ich habe ein Problem mit meiner Heizung.', e: 'Hello, I have a problem with my heating.' },
        { d: 'Seit gestern Abend ist es in der Wohnung sehr kalt.', e: 'Since yesterday evening it has been very cold in the flat.' },
        { d: 'Könnten Sie bitte so schnell wie möglich jemanden schicken?', e: 'Could you please send someone as soon as possible?' },
      ],
    },
    {
      badge: 'A2 Situation',
      title: 'Freund einladen',
      task: 'Laden Sie einen Freund zu einem Ausflug ein. Nennen Sie Ort, Zeit und einen Grund, warum es schön wird.',
      suggestions: [
        { d: 'Hast du am Samstag Zeit für einen Ausflug an den See?', e: 'Do you have time on Saturday for a trip to the lake?' },
        { d: 'Wir könnten uns um zehn Uhr am Bahnhof treffen.', e: 'We could meet at 10 o’clock at the station.' },
        { d: 'Das Wetter soll schön werden, deshalb wäre es perfekt.', e: 'The weather is supposed to be nice, so it would be perfect.' },
      ],
    },
    {
      badge: 'A2 Situation',
      title: 'Im Hotel nachfragen',
      task: 'Sie möchten im Hotel ein ruhigeres Zimmer. Beschreiben Sie das Problem und fragen Sie höflich nach einer Lösung.',
      suggestions: [
        { d: 'Entschuldigung, mein Zimmer ist leider sehr laut.', e: 'Sorry, my room is unfortunately very noisy.' },
        { d: 'Nebenan läuft die ganze Nacht Musik.', e: 'There is music playing next door all night.' },
        { d: 'Haben Sie vielleicht ein anderes Zimmer für mich?', e: 'Do you perhaps have another room for me?' },
      ],
    },
  ],
  b1: [
    {
      badge: 'B1 Discussion',
      title: 'Homeoffice oder Büro?',
      task: 'Sagen Sie Ihre Meinung, nennen Sie zwei Gründe und fragen Sie Ihren Partner nach seiner Erfahrung.',
      suggestions: [
        { d: 'Ich bin der Meinung, dass Homeoffice viele Vorteile hat.', e: 'I think working from home has many advantages.' },
        { d: 'Man spart Zeit, weil man nicht pendeln muss, und oft arbeitet man konzentrierter.', e: 'You save time because you do not have to commute, and you often work with more focus.' },
        { d: 'Wie sind Ihre Erfahrungen mit Homeoffice?', e: 'What have your experiences with working from home been like?' },
      ],
    },
    {
      badge: 'B1 Discussion',
      title: 'Sollten Städte autofrei werden?',
      task: 'Reagieren Sie auf die Frage, geben Sie ein Beispiel, und nennen Sie auch einen möglichen Nachteil.',
      suggestions: [
        { d: 'Teilweise autofreie Innenstädte finde ich sinnvoll.', e: 'I think partially car-free city centres make sense.' },
        { d: 'Ein gutes Beispiel ist, dass die Luft sauberer wird und Menschen sicherer Rad fahren können.', e: 'A good example is that the air gets cleaner and people can cycle more safely.' },
        { d: 'Andererseits muss der öffentliche Verkehr dann wirklich gut funktionieren.', e: 'On the other hand, public transport then has to work really well.' },
      ],
    },
    {
      badge: 'B1 Discussion',
      title: 'Sprachen online lernen',
      task: 'Bewerten Sie Online-Lernen, vergleichen Sie es mit Präsenzkursen, und ziehen Sie ein kurzes Fazit.',
      suggestions: [
        { d: 'Online-Lernen ist praktisch, weil man flexibel bleibt.', e: 'Learning online is practical because you stay flexible.' },
        { d: 'Im Vergleich zu Präsenzkursen fehlt manchmal der direkte Kontakt.', e: 'Compared with in-person courses, direct contact is sometimes missing.' },
        { d: 'Zusammenfassend würde ich sagen, dass eine Mischung aus beidem am besten ist.', e: 'In summary, I would say a mix of both is best.' },
      ],
    },
  ],
};

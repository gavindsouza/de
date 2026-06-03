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
      task: 'Sagen Sie Ihre Meinung, nennen Sie zwei Gründe, gehen Sie auf einen Gegenpunkt ein und fragen Sie Ihren Partner nach seiner Erfahrung.',
      suggestions: [
        { d: 'Ich bin der Meinung, dass Homeoffice viele Vorteile hat.', e: 'I think working from home has many advantages.' },
        { d: 'Man spart Zeit, weil man nicht pendeln muss, und oft arbeitet man konzentrierter.', e: 'You save time because you do not have to commute, and you often work with more focus.' },
        { d: 'Allerdings fehlt manchmal der direkte Austausch im Team.', e: 'However, direct exchange in the team is sometimes missing.' },
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
        { d: 'Welche Lösung halten Sie für realistisch?', e: 'Which solution do you consider realistic?' },
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
        { d: 'Wie haben Sie selbst am effektivsten gelernt?', e: 'How have you learned most effectively yourself?' },
      ],
    },
    {
      badge: 'B1 Discussion',
      title: 'Vier-Tage-Woche im Betrieb',
      task: 'Nehmen Sie Stellung zur Vier-Tage-Woche, nennen Sie Vorteile und Risiken und schlagen Sie eine praktikable Testphase vor.',
      suggestions: [
        { d: 'Ich finde die Idee interessant, weil viele Mitarbeitende so motivierter arbeiten könnten.', e: 'I find the idea interesting because many employees could work more motivated this way.' },
        { d: 'Ein Vorteil wäre mehr Erholung, aber ein Risiko ist eine höhere Belastung an den Arbeitstagen.', e: 'One advantage would be more recovery time, but one risk is higher workload on working days.' },
        { d: 'Man könnte das Modell zuerst für drei Monate in einem Team testen.', e: 'One could first test the model for three months in one team.' },
        { d: 'Würden Sie so einen Versuch unterstützen?', e: 'Would you support such a trial?' },
      ],
    },
    {
      badge: 'B1 Discussion',
      title: 'Handyverbot in Schulen',
      task: 'Diskutieren Sie, ob Handys in der Schule verboten werden sollten, und entwickeln Sie am Ende einen Kompromiss.',
      suggestions: [
        { d: 'Meiner Meinung nach lenken Handys im Unterricht oft zu stark ab.', e: 'In my opinion, mobile phones often distract too much in class.' },
        { d: 'Andererseits können sie für Recherche und Lern-Apps auch nützlich sein.', e: 'On the other hand, they can also be useful for research and learning apps.' },
        { d: 'Ein Kompromiss wäre, Handys nur in bestimmten Phasen zu erlauben.', e: 'A compromise would be to allow phones only during specific phases.' },
        { d: 'Welche Regel fänden Sie fair für alle?', e: 'Which rule would you find fair for everyone?' },
      ],
    },
    {
      badge: 'B1 Discussion',
      title: 'Ehrenamt in der Freizeit',
      task: 'Sprechen Sie über freiwilliges Engagement, begründen Sie Ihre Haltung und nennen Sie ein konkretes Beispiel aus dem Alltag.',
      suggestions: [
        { d: 'Ich halte Ehrenamt für wichtig, weil es den Zusammenhalt in der Gesellschaft stärkt.', e: 'I consider volunteering important because it strengthens social cohesion.' },
        { d: 'Zum Beispiel könnte man einmal pro Woche bei den Hausaufgaben von Kindern helfen.', e: 'For example, one could help children with homework once a week.' },
        { d: 'Natürlich braucht man dafür Zeit und eine gute Organisation.', e: 'Of course, you need time and good organisation for that.' },
        { d: 'Wie könnte man mehr Menschen dafür motivieren?', e: 'How could more people be motivated to do this?' },
      ],
    },
    {
      badge: 'B1 Discussion',
      title: 'Urlaub nachhaltig planen',
      task: 'Erklären Sie, wie man nachhaltiger reisen kann, vergleichen Sie Optionen und geben Sie eine Empfehlung.',
      suggestions: [
        { d: 'Wenn möglich, reise ich lieber mit dem Zug als mit dem Flugzeug.', e: 'If possible, I prefer travelling by train rather than by plane.' },
        { d: 'Einerseits dauert die Fahrt länger, andererseits ist sie oft umweltfreundlicher.', e: 'On the one hand, the trip takes longer; on the other hand, it is often more environmentally friendly.' },
        { d: 'Außerdem kann man Unterkünfte wählen, die lokale Angebote unterstützen.', e: 'In addition, one can choose accommodation that supports local offers.' },
        { d: 'Welche Priorität hat Nachhaltigkeit bei Ihren Reisen?', e: 'How high a priority is sustainability in your travels?' },
      ],
    },
  ],
};

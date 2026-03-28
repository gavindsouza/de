// Lesen practice data for Goethe A1
// Each set has three parts matching the real exam:
//   teil1 — people-to-ads matching
//   teil2 — read a text, answer Richtig/Falsch
//   teil3 — read an info text, fill in a form
export const lesenData = [
  {
    teil1: {
      people: [
        { name: "Lena", need: "sucht eine günstige Sprachschule mit Abendkursen." },
        { name: "Max", need: "möchte ein Fahrrad kaufen — möglichst neu und günstig." },
        { name: "Sara", need: "sucht eine Wohnung mit zwei Zimmern in der Stadtmitte." },
        { name: "Paul", need: "sucht einen Babysitter für samstags." },
        { name: "Yuki", need: "sucht einen Sportkurs für Anfänger am Wochenende." },
      ],
      ads: [
        { label: "A", title: "Sprachschule Berliner Mitte", text: "Deutschkurse A1–C1, montags bis freitags, 18–20 Uhr. Günstige Monatsgebühren ab 89 €." },
        { label: "B", title: "Fahrrad zu verkaufen", text: "Neues Stadtrad, 28 Zoll, blau, 280 €. Tel: 0176 123456." },
        { label: "C", title: "2-Zimmer-Wohnung – Zentrum", text: "Helle Wohnung, 55 m², Küche, Bad, Balkon. Miete 750 € + NK. Sofort frei." },
        { label: "D", title: "Yogakurs für Anfänger", text: "Jeden Samstag, 10–11 Uhr. Keine Vorkenntnisse nötig. Stadthalle Raum 3." },
        { label: "E", title: "Babysitter gesucht", text: "Wir suchen eine zuverlässige Person für Samstagnachmittag, 13–18 Uhr, für zwei Kinder (4 und 7 Jahre). Gute Bezahlung." },
        { label: "F", title: "Gebrauchtes Fahrrad", text: "Damenrad, 26 Zoll, leicht gebraucht, 95 €. Abholung in Schöneberg." },
        { label: "G", title: "Volkshochschule – Sprachkurse", text: "Englisch, Spanisch, Französisch. Kursbeginn September. Kein Deutsch." },
      ],
      answers: { Lena: "A", Max: "B", Sara: "C", Paul: "E", Yuki: "D" },
    },
    teil2: {
      text: `Anna kommt aus Polen und wohnt seit einem Jahr in Berlin. Sie arbeitet als Krankenschwester in einem Krankenhaus. Ihre Arbeitszeit beginnt um sieben Uhr morgens. Nach der Arbeit lernt sie Deutsch an der Volkshochschule. Der Kurs ist dienstags und donnerstags von 18 bis 20 Uhr. Am Wochenende kocht Anna gern polnisches Essen für ihre Freunde.`,
      statements: [
        { text: "Anna kommt aus Deutschland.", answer: false },
        { text: "Anna arbeitet als Krankenschwester.", answer: true },
        { text: "Annas Arbeit beginnt um acht Uhr.", answer: false },
        { text: "Der Deutschkurs ist zweimal pro Woche.", answer: true },
        { text: "Am Wochenende kocht Anna gern.", answer: true },
      ],
    },
    teil3: {
      instruction: "Lesen Sie die Anzeige. Füllen Sie das Formular aus.",
      text: `Sprachschule Sonnenschein — Anmeldung Deutschkurs A1\nKursname: Deutsch für Anfänger A1\nKursbeginn: 5. Oktober\nKurstage: Montag und Mittwoch\nKurszeit: 18:00 – 20:00 Uhr\nKursgebühr: 120 Euro pro Monat\nKursort: Hauptstraße 12, 3. Etage, Raum 301\nAnmeldung: per E-Mail an info@sonnenschein-sprachen.de`,
      fields: [
        { label: "Kursname", answer: "Deutsch für Anfänger A1" },
        { label: "Kursbeginn", answer: "5. Oktober" },
        { label: "Kurszeit", answer: "18:00 – 20:00 Uhr" },
        { label: "Kursgebühr", answer: "120 Euro" },
        { label: "Raum", answer: "301" },
      ],
    },
  },
  {
    teil1: {
      people: [
        { name: "Kim", need: "sucht eine Wohnung mit Garten, ruhige Lage, außerhalb der Stadt." },
        { name: "Leon", need: "sucht einen Kochkurs am Wochenende." },
        { name: "Mia", need: "möchte einen gebrauchten Laptop kaufen, Budget max. 300 €." },
        { name: "Tom", need: "sucht einen Kinderarzt in der Nähe des Stadtzentrums." },
        { name: "Eva", need: "sucht eine Reinigungskraft für ihre Wohnung, einmal pro Woche." },
      ],
      ads: [
        { label: "A", title: "Haus mit Garten zu vermieten", text: "4-Zimmer-Haus, großer Garten, ruhige Lage in Potsdam. Miete 1.100 €. Frei ab sofort." },
        { label: "B", title: "Kochkurs – Italienische Küche", text: "Jeden Samstag, 14–17 Uhr, Kochstudio Mitte. Für Anfänger und Fortgeschrittene. 35 € pro Kurs." },
        { label: "C", title: "Laptop zu verkaufen", text: "Dell Laptop, 2 Jahre alt, sehr guter Zustand. 290 €. Abholung oder Versand möglich." },
        { label: "D", title: "Kinderarztpraxis Dr. Weber", text: "Praxis in der Stadtmitte, Lindenstraße 5. Sprechzeiten: Mo–Fr, 8–12 und 14–18 Uhr." },
        { label: "E", title: "Haushaltshilfe", text: "Zuverlässige Reinigungskraft sucht Arbeit. Einmal pro Woche. Gute Referenzen. Tel: 0151 987654." },
        { label: "F", title: "Kochkurs – Asiatische Küche", text: "Nur dienstags, 19–21 Uhr. Nicht am Wochenende." },
        { label: "G", title: "Gebrauchter Desktop-PC", text: "Tower-PC, 450 €. Kein Laptop." },
      ],
      answers: { Kim: "A", Leon: "B", Mia: "C", Tom: "D", Eva: "E" },
    },
    teil2: {
      text: `Das Stadtfest in Neuburg findet dieses Jahr am 20. Juli statt. Es beginnt um 11 Uhr morgens und endet um 22 Uhr. Auf dem Marktplatz gibt es Musik, Tanz und viele Stände mit Essen und Getränken. Der Eintritt ist frei. Kinder können an einem Malwettbewerb teilnehmen. Der Gewinner bekommt einen Gutschein für das Schwimmbad.`,
      statements: [
        { text: "Das Stadtfest ist am 20. Juli.", answer: true },
        { text: "Das Fest beginnt um 10 Uhr.", answer: false },
        { text: "Der Eintritt kostet Geld.", answer: false },
        { text: "Kinder können malen und einen Preis gewinnen.", answer: true },
        { text: "Der Gewinner bekommt einen Gutschein fürs Kino.", answer: false },
      ],
    },
    teil3: {
      instruction: "Lesen Sie die Anzeige und füllen Sie das Formular aus.",
      text: `Fitnessstudio FitLife — Mitgliedschaft\nStudioname: FitLife Fitness\nAdresse: Parkstraße 22, 10115 Berlin\nÖffnungszeiten: Montag bis Freitag 6–22 Uhr, Samstag und Sonntag 8–20 Uhr\nMonatsbeitrag: 39 Euro\nAnmeldegebühr: 20 Euro (einmalig)\nKurse inklusive: Yoga, Zumba, Spinning\nKontakt: info@fitlife-berlin.de oder Tel. 030 445566`,
      fields: [
        { label: "Studioname", answer: "FitLife Fitness" },
        { label: "Adresse", answer: "Parkstraße 22, 10115 Berlin" },
        { label: "Monatsbeitrag", answer: "39 Euro" },
        { label: "Anmeldegebühr", answer: "20 Euro" },
        { label: "Kurse inklusive", answer: "Yoga, Zumba, Spinning" },
      ],
    },
  },
];

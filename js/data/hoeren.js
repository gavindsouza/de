export const hoerenData = {
  teil1: [
    {
      script: [
        { s: 'Kunde', t: 'Guten Morgen! Ich möchte gerne einen Termin beim Zahnarzt.' },
        { s: 'Rezeption', t: 'Natürlich. Wann passt Ihnen der Termin?' },
        { s: 'Kunde', t: 'Am Dienstag, wenn möglich.' },
        { s: 'Rezeption', t: 'Dienstag um zehn Uhr ist noch frei.' },
      ],
      question: 'Was möchte der Kunde?',
      options: ['Einen Termin beim Zahnarzt', 'Eine Fahrkarte kaufen', 'Ein Hotelzimmer buchen'],
      answer: 0,
    },
    {
      script: [
        { s: 'Anna', t: 'Entschuldigung, ich suche die Bibliothek. Können Sie mir helfen?' },
        { s: 'Mann', t: 'Ja, gerne. Gehen Sie hier geradeaus und dann links.' },
        { s: 'Anna', t: 'Und wie weit ist das?' },
        { s: 'Mann', t: 'Ungefähr fünf Minuten zu Fuß.' },
      ],
      question: 'Wohin möchte Anna?',
      options: ['Zum Supermarkt', 'Zur Bibliothek', 'Zum Bahnhof'],
      answer: 1,
    },
    {
      script: [
        { s: 'Tom', t: 'Ich möchte ein Kilo Äpfel und zwei Liter Milch, bitte.' },
        { s: 'Verkäuferin', t: 'Hier bitte. Das macht zusammen drei Euro fünfzig.' },
        { s: 'Tom', t: 'Haben Sie auch Bananen heute?' },
        { s: 'Verkäuferin', t: 'Nein, die haben wir heute leider nicht.' },
      ],
      question: 'Was kauft Tom?',
      options: ['Äpfel und Bananen', 'Äpfel und Milch', 'Milch und Bananen'],
      answer: 1,
    },
    {
      script: [
        { s: 'Mia', t: 'Wann fährt der nächste Zug nach Frankfurt?' },
        { s: 'Information', t: 'Der nächste Zug fährt um vierzehn Uhr dreißig von Gleis drei.' },
        { s: 'Mia', t: 'Und wie lange dauert die Fahrt?' },
        { s: 'Information', t: 'Ungefähr zwei Stunden.' },
      ],
      question: 'Wann fährt der Zug?',
      options: ['Um 13:30', 'Um 14:30', 'Um 15:30'],
      answer: 1,
    },
    {
      script: [
        { s: 'Kellner', t: 'Guten Abend! Was darf es sein?' },
        { s: 'Gast', t: 'Ich hätte gerne eine Suppe und ein Glas Wasser, bitte.' },
        { s: 'Kellner', t: 'Die Suppe des Tages ist Tomatensuppe. Ist das okay?' },
        { s: 'Gast', t: 'Ja, perfekt. Danke.' },
      ],
      question: 'Was bestellt der Gast?',
      options: ['Suppe und Brot', 'Suppe und Wasser', 'Salat und Wasser'],
      answer: 1,
    },
    {
      script: [
        { s: 'Frau', t: 'Entschuldigung, wo kann ich hier parken?' },
        { s: 'Mann', t: 'Es gibt einen Parkplatz hinter dem Supermarkt.' },
        { s: 'Frau', t: 'Ist der Parkplatz kostenlos?' },
        { s: 'Mann', t: 'Ja, die ersten zwei Stunden sind kostenlos.' },
      ],
      question: 'Wo ist der Parkplatz?',
      options: ['Vor dem Supermarkt', 'Hinter dem Supermarkt', 'Neben der Bank'],
      answer: 1,
    },
    {
      script: [
        { s: 'Arzt', t: 'Guten Tag, Frau Müller. Was kann ich für Sie tun?' },
        { s: 'Patientin', t: 'Ich habe seit drei Tagen Kopfschmerzen.' },
        { s: 'Arzt', t: 'Haben Sie auch Fieber?' },
        { s: 'Patientin', t: 'Ja, ein bisschen. 38 Grad.' },
      ],
      question: 'Was ist das Problem?',
      options: ['Bauchschmerzen', 'Kopfschmerzen', 'Rückenschmerzen'],
      answer: 1,
    },
    {
      script: [
        { s: 'Verkäufer', t: 'Kann ich Ihnen helfen?' },
        { s: 'Kundin', t: 'Ja, ich suche einen Pullover in Größe M.' },
        { s: 'Verkäufer', t: 'Die Pullover finden Sie dort hinten rechts.' },
        { s: 'Kundin', t: 'Haben Sie den auch in Blau?' },
      ],
      question: 'Was sucht die Kundin?',
      options: ['Eine Jacke', 'Einen Pullover', 'Ein T-Shirt'],
      answer: 1,
    },
  ],
  teil2: [
    {
      script: [
        { s: 'Ansage', t: 'Hallo, hier ist die Praxis Dr. Schmidt. Ihr nächster Termin ist am Donnerstag, den fünfzehnten Mai, um neun Uhr dreißig. Bitte bringen Sie Ihre Versicherungskarte mit.' },
      ],
      question: 'Wann ist der Termin?',
      answer: 'Donnerstag, 15. Mai, 9:30',
    },
    {
      script: [
        { s: 'Ansage', t: 'Hallo, hier spricht Frau Bauer vom Reisebüro. Ihr Flug nach Barcelona geht am Samstag um sieben Uhr fünfundvierzig. Bitte seien Sie zwei Stunden vorher am Flughafen.' },
      ],
      question: 'Wann geht der Flug?',
      answer: 'Samstag, 7:45',
    },
    {
      script: [
        { s: 'Ansage', t: 'Guten Tag, hier ist Möbelhaus Schmidt. Ihre Lieferung kommt am Mittwoch zwischen vierzehn und achtzehn Uhr. Bitte seien Sie zu Hause.' },
      ],
      question: 'Wann kommt die Lieferung?',
      answer: 'Mittwoch, 14-18 Uhr',
    },
    {
      script: [
        { s: 'Ansage', t: 'Hallo, hier ist die Sprachschule. Der Deutschkurs A1 beginnt am ersten September. Der Unterricht ist montags und mittwochs von achtzehn bis zwanzig Uhr.' },
      ],
      question: 'Wann beginnt der Kurs?',
      answer: '1. September',
    },
    {
      script: [
        { s: 'Ansage', t: 'Guten Tag, hier ist die Autowerkstatt Müller. Ihr Auto ist fertig. Sie können es morgen zwischen acht und siebzehn Uhr abholen. Die Rechnung ist einhundertfünfzig Euro.' },
      ],
      question: 'Wie viel kostet die Reparatur?',
      answer: '150 Euro',
    },
  ],
  teil3: [
    {
      script: [
        { s: 'Ansage', t: 'Achtung, eine Durchsage am Bahnhof Berlin Hauptbahnhof. Der ICE 578 nach München hat heute fünfzehn Minuten Verspätung. Abfahrt ist jetzt um zwölf Uhr fünfzehn auf Gleis acht.' },
      ],
      statement: 'Der Zug nach München fährt pünktlich.',
      answer: false,
    },
    {
      script: [
        { s: 'Ansage', t: 'Willkommen im Kaufhaus Schmidt. Heute haben wir ein Sonderangebot: Alle Jacken sind fünfzig Prozent reduziert. Das Angebot gilt nur heute.' },
      ],
      statement: 'Das Angebot für Jacken gilt nur heute.',
      answer: true,
    },
    {
      script: [
        { s: 'Ansage', t: 'Liebe Fluggäste, Flug LH 234 nach London ist jetzt zum Einsteigen bereit. Bitte gehen Sie zu Gate B7. Das Boarding endet um vierzehn Uhr.' },
      ],
      statement: 'Der Flug geht nach Paris.',
      answer: false,
    },
    {
      script: [
        { s: 'Ansage', t: 'Achtung, das Museum ist heute bis zwanzig Uhr geöffnet. Der Eintritt ist für Kinder unter sechs Jahren kostenlos.' },
      ],
      statement: 'Kinder unter sechs Jahren zahlen keinen Eintritt.',
      answer: true,
    },
    {
      script: [
        { s: 'Ansage', t: 'Liebe Kunden, unser Supermarkt schließt in zehn Minuten. Bitte gehen Sie jetzt zur Kasse. Vielen Dank für Ihren Einkauf.' },
      ],
      statement: 'Der Supermarkt ist noch lange offen.',
      answer: false,
    },
    {
      script: [
        { s: 'Ansage', t: 'Achtung: Am Samstag findet auf dem Marktplatz ein Straßenfest statt. Es beginnt um vierzehn Uhr. Alle Bürger sind herzlich eingeladen.' },
      ],
      statement: 'Das Straßenfest ist am Samstag.',
      answer: true,
    },
  ],
};

// Sprechen data for Goethe A1
// teil2 — word cards for Teil 2 (make a request using the word shown)
//   Each entry: { a: article, w: word, hint: polite request hint }
// teil3 — situation cards for Teil 3 (react to a picture/situation)
//   Each entry: { picture: description, situation: prompt, templates: example phrases }
export const sprechenData = {
  teil2: [
    { a: "das", w: "Wasser", hint: "Bitte um ein Glas Wasser." },
    { a: "die", w: "Rechnung", hint: "Bitte um die Rechnung im Restaurant." },
    { a: "der", w: "Stift", hint: "Bitte um einen Stift zum Schreiben." },
    { a: "das", w: "Salz", hint: "Bitte um das Salz am Tisch." },
    { a: "die", w: "Speisekarte", hint: "Bitte um die Speisekarte." },
    { a: "das", w: "Ticket", hint: "Bitte um ein Ticket für den Bus." },
    { a: "die", w: "Quittung", hint: "Bitte um eine Quittung nach dem Einkauf." },
    { a: "der", w: "Schlüssel", hint: "Bitte um den Schlüssel im Hotel." },
    { a: "das", w: "Formular", hint: "Bitte um ein Formular im Amt." },
    { a: "die", w: "Hilfe", hint: "Bitte um Hilfe beim Tragen." },
    { a: "der", w: "Kugelschreiber", hint: "Bitte um einen Kugelschreiber." },
    { a: "das", w: "Wechselgeld", hint: "Bitte um das Wechselgeld an der Kasse." },
  ],
  teil3: [
    {
      picture: "🛒 Supermarkt",
      situation: "Sie sind im Supermarkt. Sie suchen die Milch, finden sie aber nicht. Fragen Sie einen Mitarbeiter.",
      templates: [
        "Entschuldigung, wo finde ich die Milch?",
        "Können Sie mir helfen? Ich suche …",
        "In welchem Regal ist …?",
      ],
    },
    {
      picture: "🚌 Bushaltestelle",
      situation: "Sie stehen an der Bushaltestelle. Sie wissen nicht, wann der nächste Bus kommt. Fragen Sie jemanden.",
      templates: [
        "Entschuldigung, wann kommt der nächste Bus?",
        "Fährt der Bus Nummer … auch hier?",
        "Wie lange dauert die Fahrt bis …?",
      ],
    },
    {
      picture: "🏥 Arztpraxis",
      situation: "Sie sind krank und rufen die Arztpraxis an. Sie möchten einen Termin für diese Woche.",
      templates: [
        "Guten Tag, ich möchte gern einen Termin.",
        "Ich habe Kopfschmerzen seit zwei Tagen.",
        "Wann haben Sie einen Termin frei?",
      ],
    },
    {
      picture: "🏨 Hotelrezeption",
      situation: "Sie sind im Hotel. Ihr Zimmer ist zu laut. Bitten Sie an der Rezeption um ein anderes Zimmer.",
      templates: [
        "Entschuldigung, mein Zimmer ist sehr laut.",
        "Kann ich ein anderes Zimmer bekommen?",
        "Gibt es ein ruhigeres Zimmer?",
      ],
    },
    {
      picture: "📬 Postamt",
      situation: "Sie möchten ein Paket nach Hause schicken. Fragen Sie am Schalter, wie viel das kostet.",
      templates: [
        "Ich möchte dieses Paket verschicken.",
        "Was kostet das nach …?",
        "Wie lange dauert die Lieferung?",
      ],
    },
    {
      picture: "🍽️ Restaurant",
      situation: "Sie sind im Restaurant. Das Essen ist kalt. Sprechen Sie mit dem Kellner.",
      templates: [
        "Entschuldigung, das Essen ist leider kalt.",
        "Können Sie das bitte neu bringen?",
        "Ich hätte es gern warm, bitte.",
      ],
    },
  ],
};

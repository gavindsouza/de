// Schreiben Teil 2 — form-filling exercises for Goethe A1
// Each entry: { scenario, title, fields: [{ label, placeholder }] }
export const formData = [
  {
    scenario: "Sie möchten Mitglied in einem Sportverein werden. Füllen Sie das Anmeldeformular aus.",
    title: "Anmeldeformular — Sportverein Blau-Weiß",
    fields: [
      { label: "Vorname", placeholder: "z. B. Maria" },
      { label: "Nachname", placeholder: "z. B. Müller" },
      { label: "Geburtsdatum", placeholder: "z. B. 15.03.1990" },
      { label: "Adresse", placeholder: "z. B. Hauptstraße 5, 10115 Berlin" },
      { label: "Telefon", placeholder: "z. B. 0176 123456" },
      { label: "E-Mail", placeholder: "z. B. maria@beispiel.de" },
      { label: "Gewünschte Sportart", placeholder: "z. B. Schwimmen" },
    ],
  },
  {
    scenario: "Sie möchten einen Deutschkurs besuchen. Füllen Sie das Anmeldeformular der Sprachschule aus.",
    title: "Anmeldeformular — Sprachschule Sonnenschein",
    fields: [
      { label: "Vorname", placeholder: "z. B. Jonas" },
      { label: "Nachname", placeholder: "z. B. Schneider" },
      { label: "Nationalität", placeholder: "z. B. polnisch" },
      { label: "Muttersprache", placeholder: "z. B. Polnisch" },
      { label: "Deutschkenntnisse", placeholder: "z. B. keine / Anfänger" },
      { label: "Gewünschter Kurs", placeholder: "z. B. A1" },
      { label: "Telefon", placeholder: "z. B. 0151 654321" },
    ],
  },
];

// Case transformation quiz data
// Tests: accusative definite, accusative ein-word, dative prepositions,
//        possessives (nom/acc), kein-negation

export const casesData = [
  // ── Accusative – definite masculine (der → den) ──
  { s: 'Ich sehe ___ Mann.', hint: 'Accusative masculine → der becomes…', opts: ['der', 'den', 'dem', 'die'], a: 'den' },
  { s: 'Sie kauft ___ Kaffee.', hint: 'Accusative masculine', opts: ['der', 'den', 'dem', 'ein'], a: 'den' },
  { s: 'Ich nehme ___ Zug.', hint: 'Accusative masculine', opts: ['den', 'der', 'dem', 'das'], a: 'den' },
  { s: 'Er hat ___ Schlüssel.', hint: 'Accusative masculine', opts: ['den', 'der', 'dem', 'die'], a: 'den' },

  // ── Accusative – definite feminine (die → die, no change) ──
  { s: 'Er liest ___ Zeitung.', hint: 'Accusative feminine → die stays the same', opts: ['die', 'der', 'dem', 'das'], a: 'die' },
  { s: 'Ich rufe ___ Polizei.', hint: 'Accusative feminine', opts: ['die', 'der', 'dem', 'den'], a: 'die' },

  // ── Accusative – definite neuter (das → das, no change) ──
  { s: 'Ich esse ___ Brot.', hint: 'Accusative neuter → das stays the same', opts: ['das', 'den', 'dem', 'die'], a: 'das' },
  { s: 'Er trinkt ___ Wasser.', hint: 'Accusative neuter', opts: ['das', 'den', 'dem', 'die'], a: 'das' },

  // ── Accusative – indefinite masculine (ein → einen) ──
  { s: 'Ich habe ___ Bruder.', hint: 'Accusative: ein-word, masculine', opts: ['ein', 'einen', 'einem', 'eine'], a: 'einen' },
  { s: 'Ich brauche ___ Stift.', hint: 'Accusative: ein-word, masculine', opts: ['ein', 'einen', 'einem', 'eine'], a: 'einen' },
  { s: 'Sie sucht ___ Job.', hint: 'Accusative: ein-word, masculine', opts: ['ein', 'einen', 'einem', 'eine'], a: 'einen' },

  // ── Accusative – indefinite feminine (eine → eine, no change) ──
  { s: 'Ich habe ___ Frage.', hint: 'Accusative: ein-word, feminine – no change', opts: ['ein', 'einen', 'eine', 'einer'], a: 'eine' },
  { s: 'Er sucht ___ Wohnung.', hint: 'Accusative: ein-word, feminine', opts: ['ein', 'einen', 'eine', 'einer'], a: 'eine' },

  // ── Dative – mit ──
  { s: 'Ich fahre mit ___ Zug.', hint: 'Dative (mit) – masculine', opts: ['der', 'dem', 'den', 'das'], a: 'dem' },
  { s: 'Ich fahre mit ___ U-Bahn.', hint: 'Dative (mit) – feminine', opts: ['die', 'dem', 'der', 'den'], a: 'der' },
  { s: 'Ich fahre mit ___ Auto.', hint: 'Dative (mit) – neuter', opts: ['das', 'dem', 'den', 'der'], a: 'dem' },

  // ── Dative – in (location) ──
  { s: 'Das Buch liegt in ___ Tasche.', hint: 'Dative location (in) – feminine', opts: ['die', 'dem', 'der', 'den'], a: 'der' },
  { s: 'Das Geld ist in ___ Schrank.', hint: 'Dative location (in) – masculine', opts: ['der', 'dem', 'den', 'das'], a: 'dem' },
  { s: 'Das Kind schläft in ___ Bett.', hint: 'Dative location (in) – neuter', opts: ['das', 'dem', 'den', 'der'], a: 'dem' },

  // ── zu + dative contraction ──
  { s: 'Ich gehe ___ Arzt.', hint: 'zu + dem → zum (masculine)', opts: ['zum', 'zur', 'zu dem', 'zu der'], a: 'zum' },
  { s: 'Ich gehe ___ Schule.', hint: 'zu + der → zur (feminine)', opts: ['zum', 'zur', 'zu dem', 'zu der'], a: 'zur' },
  { s: 'Sie geht ___ Supermarkt.', hint: 'zu + dem → zum (masculine)', opts: ['zum', 'zur', 'zu dem', 'zu der'], a: 'zum' },

  // ── Possessive nominative ──
  { s: '___ Vater ist Arzt.', hint: 'Possessive nominative – masculine noun', opts: ['Mein', 'Meine', 'Meinen', 'Meinem'], a: 'Mein' },
  { s: '___ Mutter ist sehr nett.', hint: 'Possessive nominative – feminine noun', opts: ['Mein', 'Meine', 'Meinen', 'Meiner'], a: 'Meine' },
  { s: '___ Kind schläft gerade.', hint: 'Possessive nominative – neuter noun', opts: ['Mein', 'Meine', 'Meinen', 'Meiner'], a: 'Mein' },

  // ── Possessive accusative masculine ──
  { s: 'Ich besuche ___ Bruder.', hint: 'Possessive accusative – masculine noun', opts: ['mein', 'meine', 'meinen', 'meinem'], a: 'meinen' },
  { s: 'Ich sehe ___ Kollegen nicht.', hint: 'Possessive accusative – masculine noun', opts: ['mein', 'meine', 'meinen', 'meinem'], a: 'meinen' },

  // ── Negation: kein ──
  { s: 'Ich habe ___ Hunger.', hint: 'Negation of masculine noun (Accusative)', opts: ['kein', 'keine', 'keinen', 'keinem'], a: 'keinen' },
  { s: 'Ich habe ___ Zeit.', hint: 'Negation of feminine noun (Accusative)', opts: ['kein', 'keine', 'keinen', 'keiner'], a: 'keine' },
  { s: 'Er hat ___ Auto.', hint: 'Negation of neuter noun (Accusative)', opts: ['kein', 'keine', 'keinen', 'keinem'], a: 'kein' },
  { s: 'Sie hat ___ Kinder.', hint: 'Negation of plural noun', opts: ['kein', 'keine', 'keinen', 'keinem'], a: 'keine' },
];

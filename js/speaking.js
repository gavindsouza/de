// Speaking simulator module

import { words } from './data.js';

const nouns = words.filter(w => w.a);

function getSentences(w) {
  const acc = w.a === 'der' ? 'einen' : w.a === 'die' ? 'eine' : 'ein';
  const nom = w.a === 'die' ? 'eine' : 'ein';
  const dat = w.a === 'die' ? 'der' : 'dem';
  const datIndef = w.a === 'die' ? 'einer' : 'einem';
  const poss = w.a === 'die' ? 'meine' : 'mein';
  const possAcc = w.a === 'der' ? 'meinen' : w.a === 'die' ? 'meine' : 'mein';
  const neg = w.a === 'der' ? 'keinen' : w.a === 'die' ? 'keine' : 'kein';
  const toPlace = w.a === 'die' ? 'zur' : 'zum';
  const cats = {
    Zeit: [
      { d: `Wie lange dauert ${nom} ${w.w}?`, e: `How long is one ${w.w.toLowerCase()}?` },
      { d: `Bitte warte ${acc} ${w.w}.`, e: `Please wait one ${w.w.toLowerCase()}.` },
      { d: `In ${datIndef} ${w.w} bin ich zurück.`, e: `I'll be back in one ${w.w.toLowerCase()}.` },
      { d: `${w.a} ${w.w} vergeht sehr schnell.`, e: `A ${w.w.toLowerCase()} goes by very quickly.` },
    ],
    Wochentage: [
      { d: `Am ${w.w} habe ich Deutschkurs.`, e: `I have German class on ${w.w}.` },
      { d: `Was machst du am ${w.w}?`, e: `What are you doing on ${w.w}?` },
      { d: `Kannst du am ${w.w} kommen?`, e: `Can you come on ${w.w}?` },
      { d: `Am ${w.w} bin ich leider beschäftigt.`, e: `I'm busy on ${w.w}, unfortunately.` },
    ],
    Monate: [
      { d: `Im ${w.w} fahre ich in den Urlaub.`, e: `I'm going on holiday in ${w.w}.` },
      { d: `${poss} Geburtstag ist im ${w.w}.`, e: `My birthday is in ${w.w}.` },
      { d: `Im ${w.w} beginnt der neue Kurs.`, e: `The new course starts in ${w.w}.` },
      { d: `Im ${w.w} ist das Wetter sehr schön.`, e: `The weather is very nice in ${w.w}.` },
    ],
    Person: [
      { d: `${poss} ${w.w} heißt Maria.`, e: `My ${w.w.toLowerCase()}'s name is Maria.` },
      { d: `Ich besuche ${possAcc} ${w.w} am Wochenende.`, e: `I visit my ${w.w.toLowerCase()} on the weekend.` },
      { d: `Wie alt ist dein ${w.w}?`, e: `How old is your ${w.w.toLowerCase()}?` },
      { d: `${poss} ${w.w} wohnt in Berlin.`, e: `My ${w.w.toLowerCase()} lives in Berlin.` },
    ],
    Wohnen: [
      { d: `In meiner Wohnung gibt es ${acc} ${w.w}.`, e: `My apartment has a ${w.w.toLowerCase()}.` },
      { d: `${w.a} ${w.w} ist sehr groß.`, e: `The ${w.w.toLowerCase()} is very big.` },
      { d: `Ich suche eine Wohnung mit ${datIndef} ${w.w}.`, e: `I'm looking for a flat with a ${w.w.toLowerCase()}.` },
      { d: `Haben Sie ${acc} ${w.w} frei?`, e: `Do you have a ${w.w.toLowerCase()} available?` },
    ],
    Essen: [
      { d: `Ich nehme ${acc} ${w.w}, bitte.`, e: `I'll have the ${w.w.toLowerCase()}, please.` },
      { d: `Haben Sie noch ${acc} ${w.w}?`, e: `Do you still have ${w.w.toLowerCase()}?` },
      { d: `Wie schmeckt ${w.a} ${w.w}?`, e: `How is the ${w.w.toLowerCase()}?` },
      { d: `Ich möchte ${acc} ${w.w}, bitte.`, e: `I'd like the ${w.w.toLowerCase()}, please.` },
    ],
    Einkaufen: [
      { d: `Wo ist ${w.a} ${w.w}?`, e: `Where is the ${w.w.toLowerCase()}?` },
      { d: `Ich gehe heute in ${acc} ${w.w}.`, e: `I'm going to the ${w.w.toLowerCase()} today.` },
      { d: `Haben Sie ${acc} ${w.w}?`, e: `Do you have a ${w.w.toLowerCase()}?` },
      { d: `Was kostet das hier im ${w.w}?`, e: `How much does that cost at the ${w.w.toLowerCase()}?` },
    ],
    Reisen: [
      { d: `Ich fahre mit ${dat} ${w.w} nach Berlin.`, e: `I'm going to Berlin by ${w.w.toLowerCase()}.` },
      { d: `Wann kommt ${w.a} ${w.w} an?`, e: `When does the ${w.w.toLowerCase()} arrive?` },
      { d: `Wo ist ${w.a} ${w.w}, bitte?`, e: `Where is the ${w.w.toLowerCase()}, please?` },
      { d: `Ich nehme ${acc} ${w.w}.`, e: `I'll take the ${w.w.toLowerCase()}.` },
    ],
    Arbeit: [
      { d: `${poss} ${w.w} ist sehr nett.`, e: `My ${w.w.toLowerCase()} is very nice.` },
      { d: `Ich habe heute ${acc} ${w.w}.`, e: `I have a ${w.w.toLowerCase()} today.` },
      { d: `${w.a} ${w.w} gefällt mir sehr gut.`, e: `I really like the ${w.w.toLowerCase()}.` },
      { d: `Ich mag ${possAcc} ${w.w} sehr.`, e: `I like my ${w.w.toLowerCase()} a lot.` },
    ],
    Lernen: [
      { d: `${w.a} ${w.w} beginnt um neun Uhr.`, e: `The ${w.w.toLowerCase()} starts at nine o'clock.` },
      { d: `Wie lange dauert ${w.a} ${w.w}?`, e: `How long does the ${w.w.toLowerCase()} last?` },
      { d: `Ich lerne für ${acc} ${w.w}.`, e: `I'm studying for the ${w.w.toLowerCase()}.` },
      { d: `${w.a} ${w.w} macht mir viel Spaß.`, e: `The ${w.w.toLowerCase()} is a lot of fun.` },
    ],
    Gesundheit: [
      { d: `Mein ${w.w} tut sehr weh.`, e: `My ${w.w.toLowerCase()} hurts a lot.` },
      { d: `Ich habe Probleme mit ${dat} ${w.w}.`, e: `I have trouble with my ${w.w.toLowerCase()}.` },
      { d: `Seit wann tut ${w.a} ${w.w} weh?`, e: `Since when has your ${w.w.toLowerCase()} been hurting?` },
      { d: `Bitte zeigen Sie mir ${w.a} ${w.w}.`, e: `Please show me the ${w.w.toLowerCase()}.` },
    ],
    Orte: [
      { d: `Wo ist ${w.a} ${w.w} hier?`, e: `Where is the ${w.w.toLowerCase()} here?` },
      { d: `${w.a} ${w.w} ist nicht weit von hier.`, e: `The ${w.w.toLowerCase()} is not far from here.` },
      { d: `Am Samstag gehe ich ${toPlace} ${w.w}.`, e: `I'm going to the ${w.w.toLowerCase()} on Saturday.` },
      { d: `Gibt es hier ${acc} ${w.w}?`, e: `Is there a ${w.w.toLowerCase()} nearby?` },
    ],
    Kommunikation: [
      { d: `Ich schreibe ${acc} ${w.w}.`, e: `I'm writing a ${w.w.toLowerCase()}.` },
      { d: `Hast du ${poss} ${w.w} bekommen?`, e: `Did you get my ${w.w.toLowerCase()}?` },
      { d: `Schick mir bitte ${acc} ${w.w}.`, e: `Please send me a ${w.w.toLowerCase()}.` },
      { d: `${poss} ${w.w} funktioniert nicht.`, e: `My ${w.w.toLowerCase()} is not working.` },
    ],
    Kleidung: [
      { d: `Ich suche ${acc} ${w.w}.`, e: `I'm looking for a ${w.w.toLowerCase()}.` },
      { d: `Wie viel kostet ${w.a} ${w.w}?`, e: `How much does the ${w.w.toLowerCase()} cost?` },
      { d: `${w.a} ${w.w} ist sehr schön.`, e: `The ${w.w.toLowerCase()} is very nice.` },
      { d: `Haben Sie ${acc} ${w.w} in Größe 38?`, e: `Do you have the ${w.w.toLowerCase()} in size 38?` },
    ],
    Technik: [
      { d: `${poss} ${w.w} funktioniert nicht.`, e: `My ${w.w.toLowerCase()} isn't working.` },
      { d: `Ich brauche ${acc} ${w.w}.`, e: `I need a ${w.w.toLowerCase()}.` },
      { d: `Wie viel kostet ${w.a} ${w.w}?`, e: `How much does the ${w.w.toLowerCase()} cost?` },
      { d: `Wo kann ich ${acc} ${w.w} kaufen?`, e: `Where can I buy a ${w.w.toLowerCase()}?` },
    ],
    Wetter: [
      { d: `Heute gibt es ${acc} ${w.w}.`, e: `There is ${w.w.toLowerCase()} today.` },
      { d: `Bei ${dat} ${w.w} bleibe ich zu Hause.`, e: `I stay at home when there is ${w.w.toLowerCase()}.` },
      { d: `Ich mag ${neg} ${w.w}.`, e: `I don't like ${w.w.toLowerCase()}.` },
      { d: `Mit ${dat} ${w.w} macht der Ausflug keinen Spaß.`, e: `An outing is no fun in ${w.w.toLowerCase()}.` },
    ],
  };
  return cats[w.c] || [
    { d: `Wo ist ${w.a} ${w.w}?`, e: `Where is the ${w.w.toLowerCase()}?` },
    { d: `Haben Sie ${acc} ${w.w}?`, e: `Do you have a ${w.w.toLowerCase()}?` },
    { d: `Ich brauche ${acc} ${w.w}.`, e: `I need a ${w.w.toLowerCase()}.` },
    { d: `Was kostet ${w.a} ${w.w}?`, e: `How much is the ${w.w.toLowerCase()}?` },
  ];
}

export function newSpeak() {
  const w = nouns[Math.random() * nouns.length | 0];
  document.getElementById('spkArt').textContent = w.a;
  document.getElementById('spkWd').textContent = w.w;
  document.getElementById('spkSugs').innerHTML = getSentences(w)
    .map(s => `<div class="spk-sug"><div class="de">${s.d}</div><div class="en">${s.e}</div></div>`)
    .join('');
}

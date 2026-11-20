/* Unit 10 · Grammar · Relative Clauses · Quiz 2 (out of 20). "Relative Clauses Master Challenge"
   Points are in hundredths (50 = 0.5 point); the total must be 2000. Every item lists k = the skills it tests (RS_TAGS).
   In choice and err items the first option is the correct one; the app shuffles (q.show = fixed display order).
   All items are new: no Quiz 1 sentence or national-exam item is reused. The Final Boss keeps its order (exam: 1) so it gets harder. */
window.RS_TAGS = [
  ['CB', 'Using relative clauses', 'Combining two sentences (no repeated he / she / it / there)'],
  ['OM', 'Using relative clauses', 'Leaving out the pronoun: only when it is the object of a defining clause'],
  ['PR', 'Using relative clauses', 'Preposition + whom / which (to whom, in which); never preposition + who / that'],
  ['RD', 'Using relative clauses', 'Reduced clauses: the girl sitting by the window'],
  ['DN', 'Defining and non-defining', 'Defining = no commas; non-defining = extra information between commas'],
  ['TH', 'Defining and non-defining', 'No “that” in non-defining clauses or after a preposition'],
  ['ME', 'Defining and non-defining', 'How commas change the meaning'],
  ['CH', 'Choosing the pronoun', 'who, whom, whose, which, where, when in harder contexts']
];

(function () {
  function G() { return { a: [].slice.call(arguments) }; }
  function X(t) { return { t: t, x: 1 }; }
  /* Pronoun or No Pronoun?: the same four answers, always in the same order; c = index of the right one */
  var L = ['Yes: it is the object of a defining clause.', 'No: it is the subject of the clause.', 'No: the clause is non-defining (commas).', 'No: “whose” can never be left out.'];
  function OMIT(p, c, k, e) {
    var o = [L[c]].concat(L.filter(function (_, i) { return i !== c; }));
    return { t: 'choice', p: p, ask: 'Can the word in brackets be left out?', o: o, show: L.map(function (x) { return o.indexOf(x); }), k: k, e: e };
  }

  window.RS_QUIZ = {
    title: 'Relative Clauses · Quiz 2',
    games: [
      { key: 'fusion', name: 'Sentence Fusion', pts: 50, how: 'Choose the best way to join the two sentences.', qs: [
        { t: 'choice', p: 'I met a woman. She speaks five languages.', o: ['I met a woman who speaks five languages.', 'I met a woman which speaks five languages.', 'I met a woman who she speaks five languages.', 'I met a woman whose speaks five languages.'], k: ['CB', 'CH'], e: 'A person, subject → who. Don’t repeat “she”.' },
        { t: 'choice', p: 'This is the laptop. My father gave it to me.', o: ['This is the laptop which my father gave to me.', 'This is the laptop which my father gave it to me.', 'This is the laptop who my father gave to me.', 'This is the laptop where my father gave to me.'], k: ['CB'], e: '“which” replaces “it”, so “it” disappears.' },
        { t: 'choice', p: 'Rabat is the capital of Morocco. It has a famous tower.', o: ['Rabat, which has a famous tower, is the capital of Morocco.', 'Rabat that has a famous tower is the capital of Morocco.', 'Rabat, that has a famous tower, is the capital of Morocco.', 'Rabat, where has a famous tower, is the capital of Morocco.'], k: ['CB', 'DN', 'TH'], e: 'Extra information about a named city → non-defining: , which … , (never that).' },
        { t: 'choice', p: 'That is the student. His project won first prize.', o: ['That is the student whose project won first prize.', 'That is the student who his project won first prize.', 'That is the student whose his project won first prize.', 'That is the student which project won first prize.'], k: ['CB', 'CH'], e: '“his project” → whose project. whose replaces “his”.' },
        { t: 'choice', p: 'We visited the village. My mother grew up there.', o: ['We visited the village where my mother grew up.', 'We visited the village which my mother grew up.', 'We visited the village where my mother grew up there.', 'We visited the village who my mother grew up in.'], k: ['CB', 'CH'], e: '“there” → where, and “there” disappears.' },
        { t: 'choice', p: 'I remember the year. We moved to Tangier that year.', o: ['I remember the year when we moved to Tangier.', 'I remember the year where we moved to Tangier.', 'I remember the year whose we moved to Tangier.', 'I remember the year when we moved to Tangier that year.'], k: ['CB', 'CH'], e: '“that year” → when (time).' },
        { t: 'choice', p: 'The doctor was very kind. I spoke to her yesterday.', o: ['The doctor whom I spoke to yesterday was very kind.', 'The doctor which I spoke to yesterday was very kind.', 'The doctor whom I spoke to her yesterday was very kind.', 'The doctor whose I spoke to yesterday was very kind.'], k: ['CB', 'PR'], e: '“her” is the object → whom, and “her” disappears.' },
        { t: 'choice', p: 'My mother is a nurse. She works in Agadir.', o: ['My mother, who is a nurse, works in Agadir.', 'My mother who is a nurse works in Agadir.', 'My mother, that is a nurse, works in Agadir.', 'My mother, who she is a nurse, works in Agadir.'], k: ['CB', 'DN', 'TH'], e: 'You have only one mother, so the clause is extra information → commas + who.' }
      ] },
      { key: 'omit', name: 'Pronoun or No Pronoun?', pts: 50, how: 'Decide, and choose the reason.', qs: [
        OMIT('The book (which) I borrowed was interesting.', 0, ['OM'], 'I borrowed the book: “which” is the object → The book I borrowed was interesting.'),
        OMIT('The student (who) won the prize is my friend.', 1, ['OM'], '“who” is the subject of “won”, so it must stay.'),
        OMIT('The film (that) we watched last night was boring.', 0, ['OM'], 'We watched the film: “that” is the object → The film we watched last night was boring.'),
        OMIT('My uncle, (whom) you met at the wedding, is a pilot.', 2, ['OM', 'DN'], 'It is the object, but the clause is non-defining (commas), so it must stay.'),
        OMIT('The girl (whose) phone was stolen called the police.', 3, ['OM'], 'whose shows possession: The girl phone was stolen… is impossible.'),
        OMIT('The man (whom) we met in Fes was a tour guide.', 0, ['OM'], 'We met the man: “whom” is the object → The man we met in Fes was a tour guide.')
      ] },
      { key: 'prep', name: 'Preposition Detective', pts: 50, how: 'Choose the correct formal construction.', qs: [
        { t: 'choice', p: 'The person ____ I spoke was very helpful.', o: ['to whom', 'to who', 'whom to', 'to which'], k: ['PR'], e: 'I spoke to the person → to whom. After a preposition: whom, never who.' },
        { t: 'choice', p: 'The colleague ____ she works is Moroccan.', o: ['with whom', 'with who', 'with which', 'whom with'], k: ['PR'], e: 'She works with the colleague → with whom.' },
        { t: 'choice', p: 'The subject ____ we talked was interesting.', o: ['about which', 'about whom', 'about that', 'which about'], k: ['PR', 'TH'], e: 'A thing → about which. “that” never follows a preposition.' },
        { t: 'choice', p: 'The house ____ they live is very old.', o: ['in which', 'in that', 'in where', 'in whom'], k: ['PR', 'TH'], e: 'They live in the house → in which (= where).' },
        { t: 'choice', p: 'The teacher to whom I gave my essay was impressed.', ask: 'Who is the object of “to”?', o: ['the teacher (“whom”)', 'my essay', 'I', 'nobody'], k: ['PR'], e: 'I gave my essay to the teacher: “whom” stands for the teacher.' },
        { t: 'choice', p: 'Which sentence is correct and formal?', o: ['The company for which she works is in Casablanca.', 'The company for that she works is in Casablanca.', 'The company which she works for it is in Casablanca.', 'The company for who she works is in Casablanca.'], k: ['PR', 'TH'], e: 'Formal: preposition + which. (Informal: the company she works for.)' }
      ] },
      { key: 'comma', name: 'Comma Challenge', pts: 50, how: 'Defining or non-defining? Look at the commas.', qs: [
        { t: 'choice', p: 'My brother who lives in Rabat is a doctor.', ask: 'No commas: what does this suggest?', o: ['I have more than one brother.', 'I have only one brother.', 'My brother is not a doctor.', 'The clause is extra information.'], k: ['ME', 'DN'], e: 'Defining (no commas): it tells us WHICH brother, so there are others.' },
        { t: 'choice', p: 'My brother, who lives in Rabat, is a doctor.', ask: 'With commas: what does this suggest?', o: ['I have only one brother; the clause is extra information.', 'I have several brothers; the clause tells us which one.', 'The commas are a mistake.'], k: ['ME', 'DN'], e: 'Non-defining (commas): just extra information about my only brother.' },
        { t: 'choice', p: 'Ifrane __ is called the Switzerland of Morocco __ is very cold in winter.', ask: 'Choose the correct sentence.', o: ['Ifrane, which is called the Switzerland of Morocco, is very cold in winter.', 'Ifrane which is called the Switzerland of Morocco is very cold in winter.', 'Ifrane, that is called the Switzerland of Morocco, is very cold in winter.', 'Ifrane, which is called the Switzerland of Morocco is very cold in winter.'], k: ['DN', 'TH'], e: 'A named place + extra information → two commas and which (not that).' },
        { t: 'choice', p: 'Which sentence must NOT have commas?', o: ['The students who failed the test must take it again.', 'Toubkal, which is the highest mountain in Morocco, attracts climbers.', 'My father, who is an engineer, travels a lot.', 'Casablanca, which is a busy city, has a big port.'], k: ['DN'], e: 'Only the students who failed: the clause defines which students → no commas.' },
        { t: 'choice', p: 'The phone that I bought online never arrived.', ask: 'This clause is …', o: ['defining: it tells us which phone', 'non-defining: it adds extra information', 'non-defining because it uses “that”'], k: ['DN'], e: 'It identifies the phone, and “that” is only used in defining clauses.' },
        { t: 'choice', p: 'The students, who had revised, passed the exam.', ask: 'What does this sentence mean?', o: ['All the students had revised, and they all passed.', 'Only the students who had revised passed.', 'None of the students revised.'], k: ['ME', 'DN'], e: 'Commas = extra information about all the students. Without commas: only those who revised passed.' }
      ] },
      { key: 'repair', name: 'Relative Clause Repair Shop', pts: 50, how: 'Tap what is wrong. Then choose the repaired sentence.', qs: [
        { t: 'err', fr: 'Find the mistake:', w: ['This', 'is', 'the', 'book', 'which', 'I', 'bought', X('it'), 'yesterday', '.'],
          o: ['This is the book which I bought yesterday.', 'This is the book which I bought it yesterday.', 'This is the book who I bought yesterday.'], k: ['CB'], e: 'Unnecessary pronoun: “which” already means “it”.' },
        { t: 'err', fr: 'Find the mistake:', w: ['The', 'city', X('on'), 'which', 'I', 'live', 'is', 'very', 'clean', '.'],
          o: ['The city in which I live is very clean.', 'The city on which I live is very clean.', 'The city in where I live is very clean.'], k: ['PR'], e: 'Wrong preposition: you live IN a city → in which.' },
        { t: 'err', fr: 'Find the mistake:', w: ['The', 'topic', 'about', X('that'), 'we', 'argued', 'was', 'politics', '.'],
          o: ['The topic about which we argued was politics.', 'The topic about that we argued was politics.', 'The topic about whom we argued was politics.'], k: ['PR', 'TH'], e: 'After a preposition: which, never that.' },
        { t: 'err', fr: 'Tap the 2 wrong commas:', w: ['People', X(','), 'who', 'smoke', X(','), 'damage', 'their', 'health', '.'],
          o: ['People who smoke damage their health.', 'People, who smoke, damage their health.', 'People, that smoke, damage their health.'], k: ['DN', 'ME'], e: 'Not all people smoke: the clause defines which people → no commas.' },
        { t: 'err', fr: 'Find the mistake:', w: ['Fes', X('that'), 'is', 'an', 'old', 'city', 'attracts', 'many', 'tourists', '.'],
          o: ['Fes, which is an old city, attracts many tourists.', 'Fes that is an old city attracts many tourists.', 'Fes, that is an old city, attracts many tourists.'], k: ['TH', 'DN'], e: 'Extra information about Fes → , which … , (commas, never that).' },
        { t: 'err', fr: 'Find the mistake:', w: ['The', 'engineers', 'who', X('they'), 'built', 'the', 'bridge', 'were', 'Moroccan', '.'],
          o: ['The engineers who built the bridge were Moroccan.', 'The engineers who they built the bridge were Moroccan.', 'The engineers which built the bridge were Moroccan.'], k: ['CB'], e: 'Unnecessary pronoun: “who” is already the subject.' }
      ] },
      { key: 'boss', name: 'Relative Clauses Final Boss', pts: 50, exam: 1, how: 'Final challenge: it gets harder each time.', qs: [
        { t: 'choice', round: 'Level 1 · Choose', p: 'The writer ____ novels I read last summer is coming to Rabat.', o: ['whose', 'who', 'whom', 'which'], k: ['CH'], e: 'her novels → whose novels.' },
        { t: 'choice', round: 'Level 2 · Choose', p: 'This is the café ____ we first met.', o: ['where', 'which', 'that', 'whose'], k: ['CH'], e: 'We met there → where (or “at which”).' },
        { t: 'choice', round: 'Level 3 · Identify', p: 'Tangier, which faces Spain, is a busy port.', ask: 'The clause is …', o: ['non-defining: extra information', 'defining: it tells us which Tangier', 'not a relative clause'], k: ['DN'], e: 'There is only one Tangier: the commas add extra information.' },
        { t: 'gapt', round: 'Level 4 · Rewrite', d: 'The film that we saw was amazing.', fr: 'Leave out the relative pronoun:', s: ['The film ', G('we saw'), ' was amazing.'], k: ['OM'], e: '“that” is the object → The film we saw was amazing.' },
        { t: 'gapt', round: 'Level 5 · Rewrite', d: 'The man who I spoke to was a lawyer.', fr: 'Make it formal (preposition + whom):', s: ['The man ', G('to whom I spoke'), ' was a lawyer.'], k: ['PR'], e: 'Move the preposition before whom: to whom I spoke.' },
        { t: 'gapt', round: 'Level 6 · Replace', d: 'The girl who is sitting by the window is my cousin.', fr: 'Replace “who is sitting” with one word:', s: ['The girl ', G('sitting'), ' by the window is my cousin.'], k: ['RD'], e: 'who is sitting → sitting (a reduced relative clause).' },
        { t: 'gapt', round: 'Level 7 · Combine', d: 'I have a friend. Her sister is a famous singer.', fr: 'Join the sentences:', s: ['I have a friend ', G('whose sister is a famous singer'), '.'], k: ['CB', 'CH'], e: 'Her sister → whose sister.' },
        { t: 'choice', round: 'Level 8 · Expert', p: 'Which sentence is NOT correct?', o: ['The hotel, that we stayed in, was wonderful.', 'The hotel we stayed in was wonderful.', 'The hotel in which we stayed was wonderful.', 'The hotel where we stayed was wonderful.'], k: ['TH', 'OM', 'PR'], e: '“that” cannot be used in a non-defining clause (after a comma). The other three are all correct.' }
      ] }
    ]
  };
})();
/* Page text and storage key (read by app.js, which is the same file in every Unit 10 Grammar quiz).
   missionHtml and rulesHtml may use <b>; everything else is plain text. Keep storeKey unchanged, or saved attempts are lost. */
window.RS_COPY = {
  storeKey: 'levelup-2bac-u10-relative-clauses-q2-v1',
  heroKicker: 'LEVEL UP 2BAC · GRAMMAR · UNIT 10',
  heroTitle: 'RELATIVE CLAUSES',
  heroQuiz: 'QUIZ 2',
  heroSub: 'Relative Clauses Master Challenge · 20 points',
  missionHtml: 'Now <b>use</b> relative clauses: join sentences, leave out pronouns, put prepositions before <b>whom</b> / <b>which</b>, and use commas correctly. Commas can change the meaning!',
  formula: 'defining: no commas · non-defining: , who / which ,',
  cats: ['➕ Combine', '🫥 Leave out', '📌 to whom', '✏️ Commas', '🔧 Repair', '🏆 Final Boss'],
  rulesHtml: [
    'Play the 6 games in order. You have <b>one try</b> for each question.',
    'Game 6, the <b>Final Boss</b>, gets harder question by question, and you type some answers yourself.',
    'You see the correct answer and an explanation straight away, and you can review your mistakes at the end.'
  ],
  beforeBoss: 'Next: the Final Boss. The questions get harder, and you type some answers.',
  fullMarks: '🏆 Achievement unlocked: Relative Clauses Master! You can join, cut, punctuate and repair relative clauses like a pro.'
};

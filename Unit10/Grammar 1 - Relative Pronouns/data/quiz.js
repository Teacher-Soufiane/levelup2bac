/* Unit 10 · Grammar · Relative Pronouns · Quiz 1 (out of 20). "The Relative Pronouns Challenge"
   Points are in hundredths (50 = 0.5 point); the total must be 2000. Every item lists k = the skills it tests (RS_TAGS).
   In choice and err items the first option is the correct one; the app shuffles.
   NATIONAL-EXAM ITEMS (teacher's screenshots, typed by the teacher in the brief) keep their original wording and their
   original option order (q.show = display order as indices into q.o):
     Game 3 = Screenshot 1 Section A (1–5) + Screenshot 2 Section I (1–5), in order (g.exam keeps the order);
     Game 5 = Screenshot 3 Section C (1–2) + 4 new items; Game 6 = Screenshot 1 Section B (1–3) + 3 new items.
   In every exam item exactly one of the three listed options is correct, so no alternative needs accepting.
   Everything not labelled "Previous National Exams" is new practice. */
window.RS_TAGS = [
  ['WO', 'Choosing the pronoun', 'who / whom / that: people (subject or object)'],
  ['WS', 'Choosing the pronoun', 'whose: possession (whose + noun)'],
  ['WI', 'Choosing the pronoun', 'which / that: things and animals'],
  ['WE', 'Choosing the pronoun', 'where: places (= in / at which)'],
  ['WN', 'Choosing the pronoun', 'when: time'],
  ['DN', 'Clauses', 'Defining vs non-defining clauses: commas, and no “that” in non-defining clauses'],
  ['OM', 'Clauses', 'Subject or object: the object pronoun can be left out in a defining clause']
];

(function () {
  function X(t) { return { t: t, x: 1 }; }   /* the wrong word in Grammar Detective and the Boss */
  var NA = 'Previous National Exams · Section A', NI = 'Previous National Exams · Section I',
      NB = 'Previous National Exams · Section B', NC = 'Previous National Exams · Section C';

  window.RS_QUIZ = {
    title: 'Relative Pronouns · Quiz 1',
    games: [
      { key: 'choose', name: 'Who, Which or Where?', pts: 50, how: 'Choose the correct relative pronoun.', qs: [
        { t: 'choice', p: 'The girl ____ won the competition is my sister.', o: ['who', 'which', 'where'], k: ['WO'], e: '“The girl” is a person and the subject of “won” → who (or that).' },
        { t: 'choice', p: 'This is the village ____ my grandparents were born.', o: ['where', 'which', 'who'], k: ['WE'], e: 'A place + a full clause (my grandparents were born) → where.' },
        { t: 'choice', p: 'I will never forget the day ____ I passed my driving test.', o: ['when', 'where', 'which'], k: ['WN'], e: '“the day” is a time → when.' },
        { t: 'choice', p: 'The phone ____ I bought last week has stopped working.', o: ['which', 'who', 'where'], k: ['WI'], e: 'A thing → which (or that). who is only for people.' },
        { t: 'choice', p: 'The teacher ____ we met yesterday comes from Agadir.', o: ['whom', 'whose', 'where'], k: ['WO', 'OM'], e: '“we met the teacher”: the teacher is the object → whom (who / that also possible).' },
        { t: 'choice', p: 'In which sentence can you leave out the relative pronoun?', o: ['The book that I borrowed was very good.', 'The man who lives next door is a pilot.', 'My sister, who lives in Fes, is a nurse.', 'The girl whose bag was lost is crying.'], k: ['OM', 'DN'], e: '“that” is the object of “borrowed” in a defining clause → The book I borrowed was very good.' }
      ] },
      { key: 'match', name: 'Relative Pronoun Match-Up', pts: 50, how: 'Match each pronoun with its use.', qs: [
        { t: 'match', round: 'Round 1 of 2', pairs: [
          ['who', 'people (subject)', ['WO']],
          ['whom', 'people (object)', ['WO', 'OM']],
          ['whose', 'possession', ['WS']]] },
        { t: 'match', round: 'Round 2 of 2', pairs: [
          ['which', 'things and animals', ['WI']],
          ['where', 'places', ['WE']],
          ['when', 'time', ['WN']]] }
      ] },
      { key: 'exam', name: 'National Exam Practice', pts: 50, exam: 1, how: 'Fill in the gap with the right word from the list.', qs: [
        { t: 'choice', round: NA + ' · 1', p: 'I know a good restaurant ______ we can try Mexican food.', o: ['where', 'that', 'who'], show: [1, 2, 0], k: ['WE'], e: 'A place + a full clause (we can try Mexican food there) → where.' },
        { t: 'choice', round: NA + ' · 2', p: 'Kate is the girl ______ father has just been elected president of the city council.', o: ['whose', 'where', 'who'], show: [1, 2, 0], k: ['WS'], e: 'her father → whose father (possession: whose + noun).' },
        { t: 'choice', round: NA + ' · 3', p: 'The company ______ he works is based in Germany.', o: ['where', 'which', 'whose'], show: [0, 1, 2], k: ['WE'], e: 'He works there (in the company) → where. “which” would need “in”: the company in which he works.' },
        { t: 'choice', round: NA + ' · 4', p: 'Local authorities should give priority to areas ______ suffer from poverty and crime.', o: ['which', 'whose', 'whom'], show: [1, 0, 2], k: ['WI'], e: '“areas” are things and the subject of “suffer” → which (or that).' },
        { t: 'choice', round: NA + ' · 5', p: 'Ouarzazate, ______ Gladiator was filmed, is attracting more and more film directors.', o: ['where', 'which', 'whose'], show: [1, 2, 0], k: ['WE', 'DN'], e: 'Gladiator was filmed there → where. The commas show a non-defining clause (extra information).' },
        { t: 'choice', round: NI + ' · 1', p: 'The electric cars ______ Morocco will produce are environmentally friendly.', o: ['which', 'where', 'whose'], show: [1, 0, 2], k: ['WI', 'OM'], e: 'Things, object of “produce” → which (that, or nothing, is also possible here).' },
        { t: 'choice', round: NI + ' · 2', p: 'The road, ______ crosses our city, is always crowded.', o: ['which', 'whose', 'who'], show: [1, 0, 2], k: ['WI', 'DN'], e: 'A thing in a non-defining clause (commas) → which. “that” is not used after a comma.' },
        { t: 'choice', round: NI + ' · 3', p: 'More responsibilities should be given to young people ______ show leadership skills.', o: ['who', 'whose', 'which'], show: [1, 2, 0], k: ['WO'], e: '“young people” are people and the subject of “show” → who.' },
        { t: 'choice', round: NI + ' · 4', p: 'The hotel ______ we stayed is a real piece of art.', o: ['where', 'which', 'who'], show: [1, 2, 0], k: ['WE'], e: 'We stayed there (in the hotel) → where.' },
        { t: 'choice', round: NI + ' · 5', p: 'The room ______ the party was held is usually used for official meetings.', o: ['where', 'which', 'whose'], show: [0, 1, 2], k: ['WE'], e: 'The party was held there → where.' }
      ] },
      { key: 'build', name: 'Build the Relative Clause', pts: 60, how: 'Build the sentence. One tile is extra.', qs: [
        { t: 'build', d: 'a woman works here · she is a doctor', key: ['The woman', 'who', 'works', 'here', 'is', 'a doctor'], extra: ['which'], k: ['WO'], e: 'A person, subject → who: The woman who works here is a doctor.' },
        { t: 'build', d: 'I bought a phone yesterday · it is broken', key: ['The phone', 'which', 'I', 'bought', 'yesterday', 'is', 'broken'], extra: ['who'], k: ['WI', 'OM'], e: 'A thing → which. You could also leave it out: The phone I bought yesterday is broken.' },
        { t: 'build', d: 'my brother lives in Rabat (extra information) · he is an engineer', key: ['My brother,', 'who', 'lives', 'in Rabat,', 'is', 'an engineer'], extra: ['that'], k: ['DN', 'WO'], e: 'Non-defining clause between commas → who, never that.' },
        { t: 'build', d: 'the boy’s father is a pilot', key: ['That is', 'the boy', 'whose', 'father', 'is', 'a pilot'], extra: ['who'], k: ['WS'], e: 'Possession → whose + noun: the boy whose father is a pilot.' },
        { t: 'build', d: 'I studied English at this school', key: ['This is', 'the school', 'where', 'I', 'studied', 'English'], extra: ['which'], k: ['WE'], e: 'A place + full clause → where.' }
      ] },
      { key: 'detect', name: 'Grammar Detective', pts: 50, how: 'Tap the wrong word. Then choose the correction.', qs: [
        { t: 'err', round: NC + ' · 1', fr: 'Find the mistake:', w: ['The', 'person', 'with', X('who'), 'I', 'am', 'working', 'on', 'the', 'project', 'is', 'very', 'serious', '.'],
          o: ['The person with whom I am working on the project is very serious.', 'The person with which I am working on the project is very serious.', 'The person with whose I am working on the project is very serious.'], k: ['WO'], e: 'After a preposition (with), a person → whom: with whom.' },
        { t: 'err', round: NC + ' · 2', fr: 'Find the mistake:', w: ['The', 'vaccine', X('whose'), 'our', 'laboratory', 'has', 'developed', 'is', 'effective', '.'],
          o: ['The vaccine which our laboratory has developed is effective.', 'The vaccine who our laboratory has developed is effective.', 'The vaccine where our laboratory has developed is effective.'], k: ['WI', 'WS', 'OM'], e: 'A thing, object of “developed” → which (or that). whose needs a noun after it.' },
        { t: 'err', fr: 'Find the mistake:', w: ['My', 'father', ',', X('that'), 'is', 'a', 'doctor', ',', 'works', 'in', 'Rabat', '.'],
          o: ['My father, who is a doctor, works in Rabat.', 'My father, which is a doctor, works in Rabat.', 'My father, whom is a doctor, works in Rabat.'], k: ['DN', 'WO'], e: 'Non-defining clause (commas) → who. “that” cannot follow a comma.' },
        { t: 'err', fr: 'Find the mistake:', w: ['This', 'is', 'the', 'house', X('which'), 'I', 'was', 'born', '.'],
          o: ['This is the house where I was born.', 'This is the house whose I was born.', 'This is the house when I was born.'], k: ['WE'], e: 'I was born there → where (or “which I was born in”).' },
        { t: 'err', fr: 'Find the mistake:', w: ['The', 'man', X('who'), 'car', 'was', 'stolen', 'called', 'the', 'police', '.'],
          o: ['The man whose car was stolen called the police.', 'The man which car was stolen called the police.', 'The man whom car was stolen called the police.'], k: ['WS'], e: 'his car → whose car (possession).' },
        { t: 'err', fr: 'Find the mistake:', w: ['I', 'remember', 'the', 'summer', X('where'), 'we', 'went', 'to', 'Essaouira', '.'],
          o: ['I remember the summer when we went to Essaouira.', 'I remember the summer whose we went to Essaouira.', 'I remember the summer who we went to Essaouira.'], k: ['WN'], e: '“the summer” is a time → when.' }
      ] },
      { key: 'boss', name: 'National Exam Boss Challenge', pts: 50, how: 'Final challenge: exam questions and more.', qs: [
        { t: 'choice', round: NB + ' · 1', p: 'Scientists are experimenting with a new medicine ______ may cure many types of influenza.', o: ['which', 'who', 'whose'], show: [1, 2, 0], k: ['WI'], e: 'A thing, subject of “may cure” → which (or that).' },
        { t: 'choice', round: NB + ' · 2', p: 'The bag ______ we bought Diana for her birthday is handmade.', o: ['which', 'who', 'whose'], show: [1, 0, 2], k: ['WI', 'OM'], e: 'A thing, object of “bought” → which (that, or nothing, is also possible).' },
        { t: 'choice', round: NB + ' · 3', p: 'The Glass Room, ______ the party was held, is usually used for wedding ceremonies.', o: ['where', 'which', 'when'], show: [0, 1, 2], k: ['WE', 'DN'], e: 'The party was held there → where (non-defining: between commas).' },
        { t: 'choice', round: 'Function', p: 'The student whose essay won the prize is from Tetouan.', ask: 'What does “whose” show here?', o: ['possession', 'a place', 'a time', 'a thing'], k: ['WS'], e: 'whose essay = his / her essay → possession.' },
        { t: 'choice', round: 'Defining or non-defining?', p: 'Which sentence is punctuated correctly?', o: ['Marrakech, which is a famous city, attracts many tourists.', 'Marrakech which is a famous city attracts many tourists.', 'Marrakech, that is a famous city, attracts many tourists.', 'Marrakech, which is a famous city attracts many tourists.'], k: ['DN'], e: 'Extra information about a named place → non-defining clause between two commas, with which (not that).' },
        { t: 'err', round: 'Error correction', fr: 'Find the mistake:', w: ['The', 'girl', X('which'), 'sits', 'next', 'to', 'me', 'is', 'from', 'Safi', '.'],
          o: ['The girl who sits next to me is from Safi.', 'The girl whose sits next to me is from Safi.', 'The girl where sits next to me is from Safi.'], k: ['WO'], e: 'A person → who (or that), not which.' }
      ] }
    ]
  };
})();
/* Page text and storage key (read by app.js, which is the same file in every Unit 10 Grammar quiz).
   missionHtml and rulesHtml may use <b>; everything else is plain text. Keep storeKey unchanged, or saved attempts are lost. */
window.RS_COPY = {
  storeKey: 'levelup-2bac-u10-relative-pronouns-q1-v1',
  heroKicker: 'LEVEL UP 2BAC · GRAMMAR · UNIT 10',
  heroTitle: 'RELATIVE PRONOUNS',
  heroQuiz: 'QUIZ 1',
  heroSub: 'The Relative Pronouns Challenge · 20 points',
  missionHtml: 'A <b>relative pronoun</b> joins two ideas and points back to a noun. Before you choose one, ask: is the noun a <b>person</b>, a <b>thing</b>, a <b>place</b> or a <b>time</b>, or does it show <b>possession</b>?',
  formula: 'who · whom · whose · which · that · where · when',
  cats: ['👤 who / whom', '🔑 whose', '📦 which', '🔗 that', '📍 where', '🕒 when'],
  rulesHtml: [
    'Play the 6 games in order. You have <b>one try</b> for each question.',
    'Games 3, 5 and 6 include <b>real questions from previous national exams</b>, with their original options.',
    'You see the correct answer and an explanation straight away, and you can review your mistakes at the end.'
  ],
  beforeBoss: 'Next: the National Exam Boss Challenge.',
  fullMarks: '🏆 Achievement unlocked: Relative Pronoun Champion! You are the student who is ready for the national exam.'
};

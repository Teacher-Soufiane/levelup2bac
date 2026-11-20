/* Unit 7 · Reported Speech · Part 1: Changes · Grammar Quiz 1 (out of 20).
   2026-11-19: moved to the Unit 10 page (shared engine). The teacher's change table and items are kept; the typed
   answers (Missing Change 7–12) are now choices, and Change Detective step 2 is one choice of the reported sentence.
   Points are in hundredths (20 = 0.2 point). Every item lists k = the table rows it tests (RS_TAGS).
   In choice and error items the first option is the correct one; the app shuffles. */
window.RS_TAGS = [
  ['T1', 'Tenses', 'present simple → past simple'],
  ['T2', 'Tenses', 'present continuous → past continuous'],
  ['T3', 'Tenses', 'present perfect → past perfect'],
  ['T4', 'Tenses', 'past simple → past perfect'],
  ['T5', 'Tenses', 'past perfect → no change'],
  ['T6', 'Tenses', 'past continuous → past perfect continuous'],
  ['M1', 'Modals', "can / can't → could / couldn't"],
  ['M2', 'Modals', "could / couldn't → no change"],
  ['M3', 'Modals', "should / shouldn't → no change"],
  ['M4', 'Modals', "will / won't → would / wouldn't"],
  ['M5', 'Modals', 'have to → had to'],
  ['M6', 'Modals', 'must → had to'],
  ['M7', 'Modals', "mustn't → no change"],
  ['X1', 'Time', 'yesterday → the day before'],
  ['X2', 'Time', 'today → that day'],
  ['X3', 'Time', 'tomorrow → the following day'],
  ['X4', 'Time', 'tonight → that night'],
  ['X5', 'Time', 'last night → the night before'],
  ['X6', 'Time', 'next year → the following year'],
  ['X7', 'Time', 'now → then'],
  ['X8', 'Time', 'ago → earlier'],
  ['O1', 'Pronouns and other words', 'I / we / you / me / my → he, she / they / him, her / his, her'],
  ['O2', 'Pronouns and other words', 'our → their'],
  ['O3', 'Pronouns and other words', 'this / these → that / those'],
  ['O4', 'Pronouns and other words', 'here → there']
];

(function () {
  function X(t) { return { t: t, x: 1 }; }                       /* a word that must change (Change Detective) */
  function G(o) { return { a: [o[0]], o: o.slice() }; }          /* a boss gap: its own short list, o[0] is right */
  function C(p, o, k, e) { return { t: 'choice', p: p, o: o, k: k, e: e }; }

  window.RS_QUIZ = {
    title: 'Reported Speech · Part 1: Changes',
    games: [
      { key: 'match', name: 'Change Match-Up', pts: 17, how: 'Tap or drag to match.', qs: [
        { t: 'match', round: 'Round 1 · Tenses (1 of 2)', pairs: [['present simple', 'past simple', ['T1']], ['present continuous', 'past continuous', ['T2']], ['present perfect', 'past perfect', ['T3']]] },
        { t: 'match', round: 'Round 1 · Tenses (2 of 2)', pairs: [['past continuous', 'past perfect continuous', ['T6']], ['past perfect', 'no change', ['T5']]] },
        { t: 'match', round: 'Round 2 · Modal verbs (1 of 2)', pairs: [['can', 'could', ['M1']], ['will', 'would', ['M4']], ["won't", "wouldn't", ['M4']]] },
        { t: 'match', round: 'Round 2 · Modal verbs (2 of 2)', pairs: [['have to', 'had to', ['M5']], ['should', 'no change', ['M3']]] },
        { t: 'match', round: 'Round 3 · Time (1 of 2)', pairs: [['yesterday', 'the day before', ['X1']], ['today', 'that day', ['X2']], ['tomorrow', 'the following day', ['X3']]] },
        { t: 'match', round: 'Round 3 · Time (2 of 2)', pairs: [['tonight', 'that night', ['X4']], ['last night', 'the night before', ['X5']], ['next year', 'the following year', ['X6']]] },
        { t: 'match', round: 'Round 4 · Pronouns and other words', pairs: [['our', 'their', ['O2']], ['this', 'that', ['O3']], ['these', 'those', ['O3']], ['here', 'there', ['O4']]] }
      ] },
      { key: 'choose', name: 'Choose the Correct Change', pts: 20, how: 'Choose the reported form.', qs: [
        C('Direct speech: **can**', ['could', 'would', 'had to', 'should'], ['M1'], 'can → could.'),
        C('Direct speech: **must**', ['had to', 'must have', 'would', 'should'], ['M6'], 'must → had to.'),
        C("Direct speech: **mustn't**", ["mustn't (no change)", "hadn't to (it changes)", "wouldn't (it changes)", "couldn't (it changes)"], ['M7'], "mustn't does not change."),
        C('Direct speech: **could**', ['could (no change)', 'would (it changes)', 'can (it changes)', 'had to (it changes)'], ['M2'], 'could does not change.'),
        C('Direct speech: **should**', ['should (no change)', 'would (it changes)', 'had to (it changes)', 'shall (it changes)'], ['M3'], 'should does not change.'),
        C('Direct speech: the **past simple** (I played)', ['past perfect (he had played)', 'past continuous (he was playing)', 'present perfect (he has played)', 'no change (he played)'], ['T4'], 'past simple → past perfect.'),
        C('Direct speech: the **present perfect** (I have eaten)', ['past perfect (she had eaten)', 'past simple (she ate)', 'past continuous (she was eating)', 'no change (she has eaten)'], ['T3'], 'present perfect → past perfect.'),
        C('Direct speech: **now**', ['then', 'that day', 'there', 'the day before'], ['X7'], 'now → then.'),
        C('Direct speech: two days **ago**', ['two days earlier', 'two days later', 'two days ago (no change)', 'the following two days'], ['X8'], 'ago → earlier.'),
        C('Ahmed said, “**My** phone is broken.”<br>→ Ahmed said that ___ phone was broken.', ['his', 'my', 'her', 'their'], ['O1'], 'my → his: Ahmed is speaking about his own phone.'),
        C('Salma and Hiba said, “**We** are tired.”<br>→ Salma and Hiba said that ___ were tired.', ['they', 'we', 'she', 'you'], ['O1'], 'we → they: the speakers are two other people.'),
        C('Karim said, “The teacher asked **me** a question.”<br>→ Karim said that the teacher had asked ___ a question.', ['him', 'me', 'her', 'them'], ['O1'], 'me → him: “me” is Karim.')
      ] },
      { key: 'sort', name: 'Sort the Changes', pts: 20, per: 'word', bucket: true, how: 'Tap a word, then its box.',
        cats: ['Tense', 'Modal', 'Time', 'Pronoun / other', 'No change'], qs: [
        { t: 'sort', round: 'Round 1', cards: [['has finished', 0, 'T3'], ['can', 1, 'M1'], ['tomorrow', 2, 'X3'], ['our', 3, 'O2'], ['should', 4, 'M3'], ["couldn't", 4, 'M2']] },
        { t: 'sort', round: 'Round 2', cards: [['is raining', 0, 'T2'], ['will', 1, 'M4'], ['now', 2, 'X7'], ['these', 3, 'O3'], ["mustn't", 4, 'M7'], ['had left', 4, 'T5']] }
      ] },
      { key: 'missing', name: 'The Missing Change', pts: 20, how: 'Choose the missing form.', qs: [
        C('present perfect → ___', ['past perfect', 'past simple', 'past continuous', 'present perfect continuous'], ['T3'], 'present perfect → past perfect.'),
        C('tomorrow → ___', ['the following day', 'the day before', 'that day', 'the previous evening'], ['X3'], 'tomorrow → the following day.'),
        C('must → ___', ['had to', 'must have', 'would', 'should have'], ['M6'], 'must → had to.'),
        C('my → ___', ['his / her', 'their / our', 'your', 'him / them'], ['O1'], 'my → his or her, depending on who is speaking.'),
        C('present continuous → ___', ['past continuous', 'past simple', 'past perfect continuous', 'present simple'], ['T2'], 'present continuous → past continuous.'),
        C('today → ___', ['that day', 'the day before', 'this day', 'the following day'], ['X2'], 'today → that day.'),
        C('will → ___', ['would', 'will (no change)', 'should', 'had to'], ['M4'], 'will → would.'),
        C('here → ___', ['there', 'here (no change)', 'then', 'where'], ['O4'], 'here → there.'),
        C('tonight → ___', ['that night', 'the night before', 'last night', 'the following night'], ['X4'], 'tonight → that night.'),
        C("can't → ___", ["couldn't", "can't (no change)", "wouldn't", "hadn't to"], ['M1'], "can't → couldn't."),
        C('this → ___', ['that', 'those', 'these', 'this (no change)'], ['O3'], 'this → that.'),
        C('yesterday → ___', ['the day before', 'the following day', 'that day', 'the day after'], ['X1'], 'yesterday → the day before.')
      ] },
      { key: 'detect', name: 'Change Detective', pts: 50, how: 'Tap the words that change.',
        found: 'You found every word', step2: 'choose the reported sentence.', wordsAre: 'the words to change were', qs: [
        { t: 'err', fr: 'Yassine said to his friend Adam:', w: [X('I'), X('will'), 'visit', X('you'), X('tomorrow'), '.'],
          o: ['Yassine said to Adam that he would visit him the following day.', 'Yassine said to Adam that he will visit him the following day.', 'Yassine said to Adam that he would visit you on the following day.'],
          k: ['O1', 'M4', 'X3'], e: 'I → he; will → would; you → him (Adam); tomorrow → the following day.' },
        { t: 'err', fr: 'Salma said:', w: [X('I'), X("can't"), 'find', X('my'), 'keys', X('now'), '.'],
          o: ["Salma said that she couldn't find her keys then.", "Salma said that she can't find her keys then.", "Salma said that she couldn't find her keys there."],
          k: ['O1', 'M1', 'X7'], e: "I → she; can't → couldn't; my → her; now → then." },
        { t: 'err', fr: 'The students said:', w: [X('We'), X('have finished'), X('our'), 'project', '.'],
          o: ['The students said that they had finished their project.', 'The students said that they have finished their project.', 'The students said that we had finished our project.'],
          k: ['O1', 'T3', 'O2'], e: 'We → they; have finished → had finished; our → their.' },
        { t: 'err', fr: 'Mr Alami said to our class:', w: [X('You'), X('must'), 'hand', 'in', X('this'), 'essay', '.'],
          o: ['Mr Alami said to us that we had to hand in that essay.', 'Mr Alami said to us that we must hand in that essay.', 'Mr Alami said to us that you had to hand in this essay.'],
          k: ['O1', 'M6', 'O3'], e: 'You → we (our class); must → had to; this → that.' },
        { t: 'err', fr: 'Hiba said:', w: [X('I'), X('saw'), X('this'), 'film', X('yesterday'), '.'],
          o: ['Hiba said that she had seen that film the day before.', 'Hiba said that she saw that film the day before.', 'Hiba said that she had seen that film the following day.'],
          k: ['O1', 'T4', 'O3', 'X1'], e: 'I → she; saw → had seen; this → that; yesterday → the day before.' },
        { t: 'err', fr: 'Omar said to his sister Lina:', w: [X('You'), 'should', 'study', X('here'), X('tonight'), '.'],
          o: ['Omar said to Lina that she should study there that night.', 'Omar said to Lina that she had to study there that night.', 'Omar said to Lina that she should study there the night before.'],
          k: ['O1', 'M3', 'O4', 'X4'], e: 'You → she (Lina); should does not change; here → there; tonight → that night.' },
        { t: 'err', fr: 'Nadia said:', w: [X('We'), "mustn't", 'use', X('our'), 'phones', 'in', 'class', '.'],
          o: ["Nadia said that they mustn't use their phones in class.", "Nadia said that they hadn't to use their phones in class.", "Nadia said that we mustn't use our phones in class."],
          k: ['O1', 'M7', 'O2'], e: "We → they; mustn't does not change; our → their." },
        { t: 'err', fr: 'Karim said:', w: [X('I'), X('am working'), 'on', X('my'), 'computer', X('now'), '.'],
          o: ['Karim said that he was working on his computer then.', 'Karim said that he had worked on his computer then.', 'Karim said that he was working on his computer there.'],
          k: ['O1', 'T2', 'X7'], e: 'I → he; am working → was working; my → his; now → then.' }
      ] },
      { key: 'boss', name: 'The Reported Speech Boss', pts: 20, how: 'Choose the right forms.', qs: [
        { t: 'gapt', d: 'Amine said, “I had already eaten.”', s: ['Amine said that ', G(['he', 'I', 'she']), ' ', G(['had already eaten', 'has already eaten', 'already ate']), '.'], k: ['O1', 'T5'], e: 'I → he; the past perfect does not change.' },
        { t: 'gapt', d: 'The teacher said to us, “You shouldn’t copy your friends’ answers.”', s: ['The teacher said to us that ', G(['we', 'you', 'they']), ' ', G(["shouldn't", "wouldn't", "hadn't to"]), ' copy ', G(['our', 'your', 'their']), ' friends’ answers.'], k: ['O1', 'M3'], e: "You → we; shouldn't does not change; your → our (the teacher was speaking to us)." },
        { t: 'gapt', d: 'Mehdi said, “We are moving to Agadir next year.”', s: ['Mehdi said that ', G(['they', 'we', 'he']), ' ', G(['were moving', 'are moving', 'had moved']), ' to Agadir ', G(['the following year', 'next year', 'the year before']), '.'], k: ['O1', 'T2', 'X6'], e: 'We → they; are moving → were moving; next year → the following year.' },
        { t: 'gapt', d: 'My father said, “I have to work late tonight.”', s: ['My father said that ', G(['he', 'I', 'she']), ' ', G(['had to', 'has to', 'must']), ' work late ', G(['that night', 'tonight', 'the night before']), '.'], k: ['O1', 'M5', 'X4'], e: 'I → he; have to → had to; tonight → that night.' },
        { t: 'gapt', d: 'Rania said, “I met these students last night.”', s: ['Rania said that ', G(['she', 'I', 'he']), ' ', G(['had met', 'met', 'has met']), ' ', G(['those', 'these', 'them']), ' students ', G(['the night before', 'last night', 'that night']), '.'], k: ['O1', 'T4', 'O3', 'X5'], e: 'I → she; met → had met; these → those; last night → the night before.' },
        { t: 'gapt', d: 'Adil said, “I was working in this shop two years ago.”', s: ['Adil said that ', G(['he', 'I', 'she']), ' ', G(['had been working', 'was working', 'has been working']), ' in ', G(['that', 'this', 'those']), ' shop two years ', G(['earlier', 'ago', 'later']), '.'], k: ['O1', 'T6', 'O3', 'X8'], e: 'I → he; was working → had been working; this → that; ago → earlier.' },
        { t: 'gapt', d: 'Our grandmother said, “I can’t find my glasses now.”', s: ['Our grandmother said that ', G(['she', 'I', 'he']), ' ', G(["couldn't", "can't", "wouldn't"]), ' find ', G(['her', 'my', 'his']), ' glasses ', G(['then', 'now', 'there']), '.'], k: ['O1', 'M1', 'X7'], e: "I → she; can't → couldn't; my → her; now → then." },
        { t: 'gapt', d: 'Youssef said, “We will finish our homework tomorrow.”', s: ['Youssef said that ', G(['they', 'we', 'he']), ' ', G(['would', 'will', 'had to']), ' finish ', G(['their', 'our', 'his']), ' homework ', G(['the following day', 'tomorrow', 'the day before']), '.'], k: ['O1', 'M4', 'O2', 'X3'], e: 'We → they; will → would; our → their; tomorrow → the following day.' }
      ] }
    ]
  };
})();

window.RS_COPY = {
  storeKey: 'levelup-2bac-u7-reported-changes-q1-v2',
  heroKicker: 'LEVEL UP 2BAC · GRAMMAR · UNIT 7',
  heroTitle: 'REPORTED SPEECH',
  heroQuiz: 'CHANGES',
  heroSub: 'The change table · Quiz 1 · 20 points',
  missionHtml: 'Learn <b>what changes</b> from direct to reported speech: tenses, modals, time words and pronouns, then use every change in <b>full sentences</b>.',
  formula: 'one step back in time + new pronouns + new time and place words',
  cats: ['⏱ Tenses', '🔧 Modal verbs', '📅 Time words', '👤 Pronouns and other words'],
  rulesHtml: [
    'Play the 6 games in order. You have <b>one try</b> for each question.',
    'Games 1–5 teach the change table; game 6, the Boss, puts every change into full sentences.',
    'You see the correct answer and an explanation straight away, and you can review your mistakes at the end.'
  ],
  beforeBoss: 'Next: the Reported Speech Boss.',
  fullMarks: '🏆 Perfect! You know every change in the table.'
};

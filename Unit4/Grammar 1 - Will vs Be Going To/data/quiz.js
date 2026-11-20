/* Unit 4 · Grammar · Will vs Be Going To · Quiz 1 (out of 20). On the Unit 10 Grammar page (2026-11-19), like Units 1–3.
   Points are in hundredths (100 = 1 point); the total must be 2000. Every item lists k = the skills it tests (RS_TAGS).
   In choice items the first option is the correct one; the app shuffles, and the right answer changes place on
   every new attempt. The teacher's 20 questions are kept word for word (her 6 levels = the 6 games).
   Only change: in nine "be going to" items the full form was always the longest option, so one wrong option became
   "be going to + -ing" (is going to raining), which is longer and still wrong. "\n" starts a new line. */
window.RS_TAGS = [
  ['FO', 'Form', 'will / won’t + base verb · am / is / are going to + base verb'],
  ['WD', 'Use of will', 'a decision, an offer or a promise made now'],
  ['WP', 'Use of will', 'a prediction based on opinion (I think…)'],
  ['GP', 'Use of be going to', 'a plan or intention decided before'],
  ['GE', 'Use of be going to', 'a prediction based on what we can see now']
];

(function () {
  window.RS_QUIZ = {
    title: 'Will vs Be Going To · Quiz 1',
    games: [
      { key: 'form', name: 'Form Basics', pts: 100, how: 'Choose the correct form.', qs: [
        { t: 'choice', p: 'I ______ my grandparents tomorrow.', o: ['will visit', 'will visited', 'will visiting', 'will to visit'], k: ['FO'], e: "After 'will' we use the base form of the verb: 'will visit'." },
        { t: 'choice', p: 'I ______ you later because I am very busy.', o: ["won't help", "won't helped", "don't will help", "won't helping"], k: ['FO'], e: "The negative of 'will' is 'won't' + base verb: 'won't help'." },
        { t: 'choice', p: '______ you call me later?', o: ['Will', 'Do', 'Are', 'Did'], k: ['FO'], e: "A future question with the base verb 'call' starts with 'Will' + subject + base verb." },
        { t: 'choice', p: 'Talking about travel plans for next month.', o: ['We will travel next month.', 'We will traveled next month.', 'We will traveling next month.', 'We will to travel next month.'], k: ['FO'], e: "'Will' is followed directly by the base verb: no 'to', no -ed, no -ing." }
      ] },
      { key: 'will', name: 'Will: Decisions & Promises', pts: 100, how: 'Choose the best future form.', qs: [
        { t: 'choice', p: 'The phone is ringing. You decide to act immediately:\n“I ______ it.”', o: ['will answer', 'am going to answer', 'will answered', 'am answer'], k: ['WD'], e: 'A decision made at the moment of speaking takes \'will\' + base verb.' },
        { t: 'choice', p: '“Don’t worry. I ______ your secret.”', ask: 'Choose the best sentence for a promise:', o: ['will keep', 'am going to keeping', 'will kept', 'am keep'], k: ['WD'], e: "Promises use 'will' + base verb: 'will keep'." },
        { t: 'choice', p: '“I think our team ______ the match.”', o: ['will win', 'is going to winning', 'will won', 'is win'], k: ['WP'], e: "An opinion-based prediction ('I think') uses 'will' + base verb." }
      ] },
      { key: 'going', name: 'Be Going To: Plans & Evidence', pts: 100, how: 'Choose the best future form.', qs: [
        { t: 'choice', p: 'Sara has already decided to study tonight.', ask: 'Which sentence best expresses her plan?', o: ['She is going to revise tonight.', 'She will revised tonight.', 'She is going to revising tonight.', 'She going to revise tonight.'], k: ['GP'], e: "An already-decided plan uses 'be going to' with the full structure: is going to + base verb." },
        { t: 'choice', p: 'The students have already made a plan for their presentation. They ______ it carefully tonight.', o: ['are going to prepare', 'will prepared', 'are going to preparing', 'going to prepare'], k: ['GP'], e: "A plan made earlier takes 'be going to' + base verb: 'are going to prepare'." },
        { t: 'choice', p: 'Look at those dark clouds! It ______ soon.', o: ['is going to rain', 'will raining', 'is going to raining', 'will rained'], k: ['GE'], e: "Present evidence (dark clouds) points to a prediction with 'be going to': 'is going to rain'." },
        { t: 'choice', p: 'Meryem has already saved enough money and chosen a laptop. She ______ it next week.', o: ['is going to buy', 'will bought', 'is going to buying', 'going to buy'], k: ['GP'], e: "An existing plan takes 'be going to' + base verb: 'is going to buy'." }
      ] },
      { key: 'mixed', name: 'Will vs Be Going To', pts: 100, how: 'Choose the best future form.', qs: [
        { t: 'choice', p: 'Your friend is carrying several heavy boxes. You offer to help immediately:\n“I ______ these boxes for you.”', o: ['will carry', 'am going to carry', 'will carried', 'am carry'], k: ['WD'], e: "An offer made on the spot takes 'will' + base verb: 'will carry'." },
        { t: 'choice', p: '“I think technology ______ even more important in education.”', o: ['will become', 'is going becoming', 'will became', 'is become'], k: ['WP'], e: "A prediction based on opinion takes 'will' + base verb: 'will become'." },
        { t: 'choice', p: 'The school has already planned an environmental campaign. The students ______ it next month.', o: ['are going to organize', 'will organized', 'are going to organizing', 'going to organize'], k: ['GP'], e: "A planned action takes 'be going to' + base verb: 'are going to organize'." },
        { t: 'choice', p: 'Look at the sky and the very dark clouds. It ______ tonight.', o: ['is going to snow', 'will snowing', 'is going to snowing', 'will snowed'], k: ['GE'], e: "Visible evidence leads to a prediction with 'be going to': 'is going to snow'." }
      ] },
      { key: 'correct', name: 'Correct & Transform', pts: 100, how: 'Choose the correct version.', qs: [
        { t: 'choice', p: '❌ She will goes to university next year.', ask: 'Find the correct version:', o: ['She will go to university next year.', 'She will went to university next year.', 'She will going to university next year.', 'She will to go to university next year.'], k: ['FO'], e: "After 'will' we always use the base form: 'will go', not 'will goes'." },
        { t: 'choice', p: '“I intend to apply for the scholarship next year.”', ask: 'Choose the best transformation:', o: ['I am going to apply for the scholarship next year.', 'I will applied for the scholarship next year.', 'I am going to applying for the scholarship next year.', 'I going to apply for the scholarship next year.'], k: ['GP'], e: "An intention is a plan, so it becomes 'be going to' + base verb: 'am going to apply'." }
      ] },
      { key: 'boss', name: 'Final Challenge: Real-Life Situations', pts: 100, how: 'Complete the situation.', qs: [
        { t: 'choice', p: 'A: The phone is ringing.\nB: “Don’t worry. I ______ it.”', ask: 'Complete the dialogue:', o: ['will pick', 'am going picking', 'will picked', 'am pick'], k: ['WD'], e: "A decision made at the moment of speaking takes 'will' + base verb: 'will pick'." },
        { t: 'choice', p: 'They have already booked a hotel in Agadir for the summer. They ______ there for a week.', o: ['are going to stay', 'will stayed', 'are going to staying', 'going to stay'], k: ['GP'], e: "An existing plan (hotel already booked) takes 'be going to' + base verb: 'are going to stay'." },
        { t: 'choice', p: 'Look at that cyclist! He is losing his balance. He ______.', o: ['is going to fall', 'will fell', 'is going to falling', 'will falling'], k: ['GE'], e: "Present evidence (losing his balance) points to a prediction with 'be going to': 'is going to fall'." }
      ] }
    ]
  };
})();
/* Page text and storage key (read by app.js). missionHtml and rulesHtml may use <b>; everything else is plain text.
   Keep storeKey unchanged, or saved attempts are lost. */
window.RS_COPY = {
  storeKey: 'levelup-2bac-u4-will-going-to-q1-v1',
  heroKicker: 'LEVEL UP 2BAC · GRAMMAR · UNIT 4',
  heroTitle: 'WILL vs BE GOING TO',
  heroQuiz: 'QUIZ 1',
  heroSub: 'The Future Forms Challenge · 20 points',
  missionHtml: 'Use <b>will</b> for a decision you make <b>now</b>, an offer, a promise, or an opinion about the future (<b>I think…</b>). Use <b>be going to</b> for a <b>plan</b> you made before, or a prediction from what you can <b>see</b> now (dark clouds). Both are followed by the <b>base verb</b>. Before you choose, ask: <b>decided now or decided before?</b>',
  formula: 'will + base verb · am / is / are going to + base verb',
  cats: ['⚡ decision', '🤝 promise', '💭 I think…', '📅 plan', '☁️ evidence', '✏️ base verb'],
  rulesHtml: [
    'Play the 6 games in order. You have <b>one try</b> for each question.',
    'There are <b>20 questions</b>, and each one is worth <b>1 point</b>.',
    'You see the correct answer and an explanation straight away, and you can review your mistakes at the end.'
  ],
  beforeBoss: 'Next: the Final Challenge.',
  fullMarks: '🏆 Achievement unlocked: Future Forms Champion! You are going to do very well in the national exam.'
};

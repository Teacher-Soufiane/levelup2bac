/* Unit 4 · Grammar · Future Simple vs Future Perfect · Quiz 3 (out of 20). On the Unit 10 Grammar page (2026-11-19), like Units 1–3.
   (The old page said "GRAMMAR QUIZ 4"; it is the third Unit 4 Grammar quiz, so it is QUIZ 3 here.)
   Points are in hundredths (100 = 1 point); the total must be 2000. Every item lists k = the skills it tests (RS_TAGS).
   In choice items the first option is the correct one; the app shuffles, and the right answer changes place on
   every new attempt. The teacher's 20 questions are kept word for word (levels 1–8 grouped into 6 games).
   Only change: "will have + past participle" was always the longest option, so in thirteen items the wrong option
   "will have + base verb" became "will have + -ing" (will have opening): still wrong, and a little longer.
   "\n" starts a new line. */
window.RS_TAGS = [
  ['FS', 'Tense', 'Future Simple: will + base verb (an event, a prediction, no deadline)'],
  ['FP', 'Tense', 'Future Perfect Simple: will have + past participle (finished by a future time)'],
  ['TE', 'Time words', 'by…, by the time…, in + a period of time · next…, in the future'],
  ['FO', 'Form', 'will have + past participle, never will has / will have + base verb']
];

(function () {
  window.RS_QUIZ = {
    title: 'Future Simple vs Future Perfect · Quiz 3',
    games: [
      { key: 'warmup', name: 'Future Form Warm-Up', pts: 100, how: 'Choose the correct form.', qs: [
        { t: 'choice', p: 'I think people ______ more electric cars in the future.', o: ['will use', 'will have used', 'will has used', 'will using'], k: ['FS'], e: "An opinion about the future ('I think... in the future') uses the Future Simple: 'will use'." },
        { t: 'choice', p: 'By the end of this year, our school ______ a new computer lab.', o: ['will have opened', 'will open', 'will has opened', 'will have opening'], k: ['FP', 'TE'], e: "'By the end of this year' is a deadline, so the action will be completed by then: 'will have opened'." },
        { t: 'choice', p: 'My brother ______ university next September.', o: ['will start', 'will have started', 'will has started', 'will have start'], k: ['FS'], e: "'Next September' is a single future event with no deadline, so we use the Future Simple: 'will start'." }
      ] },
      { key: 'time', name: 'Time-Expression Detector', pts: 100, how: 'Choose the correct answer.', qs: [
        { t: 'choice', p: 'By 2030, many countries ______ their use of renewable energy.', o: ['will have increased', 'will increase', 'will has increased', 'will have increasing'], k: ['FP', 'TE'], e: "'By 2030' is a future point by which the increase will be completed: 'will have increased'." },
        { t: 'choice', p: 'I think technology ______ education in the future.', o: ['will transform', 'will have transformed', 'will has transformed', 'will have transform'], k: ['FS'], e: 'This is a general prediction with no deadline, so the Future Simple is used: \'will transform\'.' },
        { t: 'choice', p: 'In ten years, scientists ______ new solutions to many environmental problems.', o: ['will have developed', 'will develop', 'will has developed', 'will have developing'], k: ['FP', 'TE'], e: "'In + a period of time' is a Future Perfect indicator: by then, the solutions will already be developed: 'will have developed'." }
      ] },
      { key: 'timeline', name: 'Future Timeline Challenge', pts: 100, how: 'Read and choose the correct form.', qs: [
        { t: 'choice', p: 'The students will begin the project in September. They expect to finish it before December.\nBy December, the students ______ the project.', o: ['will have completed', 'will complete', 'will has completed', 'will have completing'], k: ['FP', 'TE'], e: "'By December' is the deadline, and the project will be finished before it: 'will have completed'." },
        { t: 'choice', p: 'The university will open a new library next year.\nThe new library ______ next year.', o: ['will open', 'will have opened', 'will opening', 'will has opened'], k: ['FS'], e: 'The opening is a single future event with no deadline: Future Simple \'will open\'.' },
        { t: 'choice', p: 'The workers will start building the bridge in January. The bridge is expected to be ready by June.\nBy June, the workers ______ the bridge.', o: ['will have built', 'will have builded', 'will build', 'will has built'], k: ['FP', 'FO'], e: "'By June' is the deadline and 'build' is irregular: build – built – built, so 'will have built'." }
      ] },
      { key: 'period', name: 'In + Period of Time', pts: 100, how: 'Choose the correct form.', qs: [
        { t: 'choice', p: 'In two years, the company ______ over a thousand new jobs.', o: ['will have created', 'will create', 'will has created', 'will have creating'], k: ['FP', 'TE'], e: "'In + a period of time' is a Future Perfect indicator: by then, the jobs will already be created: 'will have created'." },
        { t: 'choice', p: 'Sara is currently in her final year at university. In three years, she ______ her university studies.', o: ['will have completed', 'will complete', 'will has completed', 'will have completing'], k: ['FP', 'TE'], e: "'In three years' is a Future Perfect indicator: by then, her studies will already be completed: 'will have completed'." },
        { t: 'choice', p: 'In ten years, many families ______ their petrol cars with electric ones.', o: ['will have replaced', 'will replace', 'will has replaced', 'will have replacing'], k: ['FP', 'TE'], e: "'In + a period of time' is a Future Perfect indicator: by then, the replacement will already be completed: 'will have replaced'." },
        { t: 'choice', p: 'The environmental programme starts this year and will continue for ten years. In ten years, it ______ thousands of trees.', o: ['will have planted', 'will plant', 'will has planted', 'will have planting'], k: ['FP', 'TE'], e: "After ten years of the programme, the planting will already be completed: 'will have planted'." }
      ] },
      { key: 'detective', name: 'Future Detective & Traps', pts: 100, how: 'Read and choose the correct form.', qs: [
        { t: 'choice', p: 'The school has planned a large environmental campaign for next month. The campaign will begin next month.\nThe students ______ the campaign next month.', o: ['will launch', 'will have launched', 'will has launched', 'will have launch'], k: ['FS'], e: "'Next month' is a single future event with no deadline: Future Simple 'will launch'." },
        { t: 'choice', p: 'The environmental campaign will begin next month and will include several activities. The students expect to complete all the activities before the end of the school year.\nBy the end of the school year, the students ______ all the activities.', o: ['will have organized', 'will organize', 'will has organized', 'will have organizing'], k: ['FP', 'TE'], e: "'By the end of the school year' is the deadline, so the activities will be completed by then: 'will have organized'." },
        { t: 'choice', p: 'A prediction about clean energy sources by 2035.', o: ['By 2035, scientists will have discovered new sources of clean energy.', 'By 2035, scientists will have discovering new sources of clean energy.', 'By 2035, scientists will has discovered new sources of clean energy.', 'By 2035, scientists will discovered new sources of clean energy.'], k: ['FO'], e: "After 'will have' we need the past participle: 'will have discovered'." },
        { t: 'choice', p: 'By the time the guests arrive, we ______ the food.', o: ['will have prepared', 'will have preparing', 'will has prepared', 'will prepared'], k: ['FP', 'TE'], e: "'By the time' + a future event means the action is completed first: 'will have prepared'." }
      ] },
      { key: 'boss', name: 'BAC Final Challenge', pts: 100, how: 'Choose the correct answer.', qs: [
        { t: 'choice', p: 'The workers will finish the construction before the end of the year.', ask: 'Choose the sentence with the same meaning:', o: ['By the end of the year, the workers will have finished the construction.', 'By the end of the year, the workers will have finishing the construction.', 'By the end of the year, the workers will has finished the construction.', 'By the end of the year, the workers will finished the construction.'], k: ['FP', 'FO'], e: "'Before the end of the year' becomes 'By the end of the year' + 'will have' + past participle." },
        { t: 'choice', p: 'Morocco is investing in renewable energy. Several new solar projects are planned for the coming years.', o: ['Morocco will build several solar projects next year.', 'Morocco will have build several solar projects next year.', 'Morocco will has built several solar projects next year.', 'Morocco will have built several solar projects next year.'], k: ['FS'], e: "'Next year' marks a future event with no completion deadline: Future Simple 'will build'." },
        { t: 'choice', p: 'A city is planning a major sustainable-development project. Construction will begin in 2027 and is expected to finish before 2030.', o: ['By 2030, the city will have completed the project.', 'By 2030, the city will complete the project.', 'By 2030, the city will has completed the project.', 'By 2030, the city will have completing the project.'], k: ['FP', 'TE'], e: "'By 2030' is the deadline and the project will be finished before it: 'will have completed'." }
      ] }
    ]
  };
})();
/* Page text and storage key (read by app.js). missionHtml and rulesHtml may use <b>; everything else is plain text.
   Keep storeKey unchanged, or saved attempts are lost. */
window.RS_COPY = {
  storeKey: 'levelup-2bac-u4-future-simple-vs-perfect-q3-v1',
  heroKicker: 'LEVEL UP 2BAC · GRAMMAR · UNIT 4',
  heroTitle: 'FUTURE SIMPLE vs FUTURE PERFECT',
  heroQuiz: 'QUIZ 3',
  heroSub: 'The Future Timeline Challenge · 20 points',
  missionHtml: 'Use the <b>Future Simple</b> (<b>will + base verb</b>) for an event or a prediction: <b>next year</b>, <b>in the future</b>, <b>I think…</b> Use the <b>Future Perfect Simple</b> (<b>will have + past participle</b>) for an action that will be <b>finished before</b> a deadline: <b>by 2030</b>, <b>by the time…</b>, <b>in ten years</b>. Before you choose, ask: <b>is there a deadline?</b>',
  formula: 'will + base verb · will have + past participle',
  cats: ['🔮 will + verb', '✅ will have + V3', '⏰ by 2030', '⌛ by the time', '📆 in ten years', '📅 next year'],
  rulesHtml: [
    'Play the 6 games in order. You have <b>one try</b> for each question.',
    'There are <b>20 questions</b>, and each one is worth <b>1 point</b>.',
    'You see the correct answer and an explanation straight away, and you can review your mistakes at the end.'
  ],
  beforeBoss: 'Next: the BAC Final Challenge.',
  fullMarks: '🏆 Achievement unlocked: Future Timeline Master! You will do great in the exam, and by then you will have mastered both tenses.'
};

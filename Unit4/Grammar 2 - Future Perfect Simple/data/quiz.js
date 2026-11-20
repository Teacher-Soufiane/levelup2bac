/* Unit 4 · Grammar · Future Perfect Simple · Quiz 2 (out of 20). On the Unit 10 Grammar page (2026-11-19), like Units 1–3.
   Points are in hundredths (100 = 1 point); the total must be 2000. Every item lists k = the skills it tests (RS_TAGS).
   In choice items the first option is the correct one; the app shuffles, and the right answer changes place on
   every new attempt. The teacher's 20 questions are kept word for word (levels 1–8 grouped into 6 games).
   Only change: "will have + past participle" was often the longest option, so in eight items one wrong option became
   "will have + -ing" (will have finishing), which is longer and still wrong; in two meaning items a wrong option
   was lengthened. "\n" starts a new line. */
window.RS_TAGS = [
  ['FO', 'Form', 'will have / won’t have + past participle'],
  ['PP', 'Form', 'past participles: regular -ed, irregular (built, written, left, broken)'],
  ['BY', 'Use', 'completed before a future time: by 8 p.m., by June, by the time…'],
  ['QW', 'Form', 'questions: Will + subject + have + past participle?']
];

(function () {
  window.RS_QUIZ = {
    title: 'Future Perfect Simple · Quiz 2',
    games: [
      { key: 'form', name: 'Form Detective', pts: 100, how: 'Choose the correct Future Perfect Simple form.', qs: [
        { t: 'choice', p: 'By 8 p.m., I ______ my homework.', o: ['will have finished', 'will has finished', 'will have finish', 'will have finishing'], k: ['FO'], e: "The Future Perfect Simple is 'will have' + past participle: 'will have finished'." },
        { t: 'choice', p: "By June, Sara ______ her master's degree.", o: ['will have obtained', 'will have obtain', 'will has obtained', 'will have obtaining'], k: ['FO'], e: "'Will have' is followed by the past participle: 'will have obtained'." },
        { t: 'choice', p: 'By the end of the week, we ______ the project.', o: ["won't have completed", "won't have complete", "won't has completed", "won't have completing"], k: ['FO'], e: "The negative is 'won't have' + past participle: 'won't have completed'." }
      ] },
      { key: 'participle', name: 'Past Participle Traps', pts: 100, how: 'Complete the sentence.', qs: [
        { t: 'choice', p: 'By this time next year, Morocco ______ its second surveillance satellite.', o: ['will have launched', 'will have launch', 'will has launched', 'will have launcheded'], k: ['PP'], e: "Regular verbs take a single -ed: 'will have launched'." },
        { t: 'choice', p: 'By the end of this century, machines ______ many workers in some jobs.', o: ['will have replaced', 'will have replace', 'will has replaced', 'will have replaceded'], k: ['PP'], e: "'Replace' is regular, so the participle is 'replaced' after 'will have'." },
        { t: 'choice', p: 'By 2030, many cities ______ new green spaces.', o: ['will have built', 'will have builded', 'will has built', 'have built'], k: ['PP'], e: "'Build' is irregular: build – built – built." },
        { t: 'choice', p: 'By next summer, thousands of students ______ from university.', o: ['will have graduated', 'will have graduate', 'will has graduated', 'will have graduaded'], k: ['PP'], e: "'Graduate' is regular and takes -d: 'graduated'." }
      ] },
      { key: 'by', name: 'By + Future Time', pts: 100, how: 'Complete the sentence.', qs: [
        { t: 'choice', p: 'By the end of the school year, Sara ______ her academic goals.', o: ['will have achieved', 'will have achieve', 'will has achieved', 'will have achieving'], k: ['BY'], e: "'By the end of...' signals completion before a future point: 'will have achieved'." },
        { t: 'choice', p: 'By 6 p.m., the mechanic ______ the car.', o: ['will have repaired', 'will have repair', 'will has repaired', 'will have repairred'], k: ['PP', 'BY'], e: "'Repair' is regular and does not double its final letter: 'repaired'." },
        { t: 'choice', p: 'By Friday, the secretary ______ the formal letter.', o: ['will have written', 'will have wrote', 'will has written', 'will have writing'], k: ['PP', 'BY'], e: "'Write' is irregular: write – wrote – written. After 'will have' we need the past participle." }
      ] },
      { key: 'bythetime', name: 'By the Time', pts: 100, how: 'Complete the sentence.', qs: [
        { t: 'choice', p: 'By the time the train arrives, the passengers ______ the station.', o: ['will have left', 'will have leaved', 'will has left', 'will left'], k: ['PP', 'BY'], e: "'Leave' is irregular: leave – left – left." },
        { t: 'choice', p: 'By the time the environmental campaign begins, the students ______ several activities.', o: ['will have organized', 'will have organize', 'will has organized', 'will have organizeded'], k: ['BY'], e: "'By the time' + a future event means the action is completed first: 'will have organized'." },
        { t: 'choice', p: 'By the time the volunteers finish their work, they ______ thousands of trees.', o: ['will have planted', 'will have plant', 'will has planted', 'will have planting'], k: ['BY'], e: "The planting is completed before the volunteers finish, so: 'will have planted'." }
      ] },
      { key: 'timeline', name: 'Timeline & Errors', pts: 100, how: 'Choose the correct answer.', qs: [
        { t: 'choice', p: '“By 10 p.m., Nadia will have read the whole book.”', ask: 'What does this sentence mean?', o: ['Nadia will finish reading the book by 10 p.m.', 'Nadia will start reading the book at 10 p.m.', 'Nadia finished reading the whole book yesterday evening.', 'Nadia is reading the book now.'], k: ['BY'], e: "The Future Perfect with 'by 10 p.m.' means the reading will be completed at or before 10 p.m." },
        { t: 'choice', p: 'An action completed before another future event.', o: ['By the time the teacher arrives, the students will have solved the problem.', 'The students solve the problem when the teacher arrives.', 'The students will be solving the problem when the teacher finally arrives in the classroom.', 'The students solved the problem yesterday.'], k: ['BY'], e: "'By the time the teacher arrives' + 'will have solved' shows completion before another future event." },
        { t: 'choice', p: 'A scientific discovery expected before next month.', o: ['By next month, the scientists will have discovered the cause.', 'By next month, the scientists will have discover the cause.', 'By next month, the scientists will has discovered the cause.', 'By next month, the scientists have will discovered the cause.'], k: ['FO'], e: "The correct structure is 'will have' + past participle: 'will have discovered'." },
        { t: 'choice', p: 'A question about a record being broken by Friday.', o: ['Will they have broken the record by Friday?', 'Will they have breaked the record by Friday?', 'Will have they broken the record by Friday?', 'Will they has broken the record by Friday?'], k: ['QW', 'PP'], e: "In questions, 'will' comes first, then the subject, then 'have' + past participle: 'Will they have broken...?'" }
      ] },
      { key: 'boss', name: 'BAC Challenge', pts: 100, how: 'Choose the correct answer.', qs: [
        { t: 'choice', p: 'The students are expected to submit their assignments before Friday.', ask: 'Choose the sentence with the same meaning:', o: ['By Friday, the students will have submitted their assignments.', 'By Friday, the students will have submit their assignments.', 'By Friday, the students will submitted their assignments.', 'By Friday, the students have will submitted their assignments.'], k: ['BY', 'FO'], e: "'Before Friday' becomes 'By Friday' + 'will have' + past participle: 'will have submitted'." },
        { t: 'choice', p: 'A new environmental programme will start in January. The organisers expect to reduce pollution significantly within two years.\nBy January 2029, the programme ______ pollution significantly.', o: ['will have reduced', 'will have reduce', 'will has reduced', 'will have reducing'], k: ['BY', 'FO'], e: "'By January 2029' is the future deadline, so we need 'will have' + past participle: 'will have reduced'." },
        { t: 'choice', p: 'A Moroccan university is preparing a new research programme. The programme will begin in September 2027. The researchers expect to finish their work before the end of 2030.', o: ['By the end of 2030, the researchers will have finished their work.', 'By the end of 2030, the researchers will have finish their work.', 'By the end of 2030, the researchers will has finished their work.', 'By the end of 2030, the researchers will have finishing their work.'], k: ['BY', 'FO'], e: "'By the end of 2030' needs 'will have' + past participle: 'will have finished'." }
      ] }
    ]
  };
})();
/* Page text and storage key (read by app.js). missionHtml and rulesHtml may use <b>; everything else is plain text.
   Keep storeKey unchanged, or saved attempts are lost. */
window.RS_COPY = {
  storeKey: 'levelup-2bac-u4-future-perfect-q2-v1',
  heroKicker: 'LEVEL UP 2BAC · GRAMMAR · UNIT 4',
  heroTitle: 'FUTURE PERFECT SIMPLE',
  heroQuiz: 'QUIZ 2',
  heroSub: 'The Future Perfect Challenge · 20 points',
  missionHtml: 'The <b>Future Perfect Simple</b> (<b>will have + past participle</b>) shows an action that will be <b>finished before</b> a time in the future. Look for <b>by 8 p.m.</b>, <b>by June</b>, <b>by the time…</b> Watch the <b>past participle</b>: finished, built, written, left. Before you choose, ask: will it be <b>done by then</b>?',
  formula: 'will have + past participle · by + future time',
  cats: ['✅ will have + V3', '🔧 built', '✍️ written', '⏰ by June', '⌛ by the time', '❓ Will they have…?'],
  rulesHtml: [
    'Play the 6 games in order. You have <b>one try</b> for each question.',
    'There are <b>20 questions</b>, and each one is worth <b>1 point</b>.',
    'You see the correct answer and an explanation straight away, and you can review your mistakes at the end.'
  ],
  beforeBoss: 'Next: the BAC Challenge.',
  fullMarks: '🏆 Achievement unlocked: Future Perfect Champion! By the national exam, you will have mastered this tense.'
};

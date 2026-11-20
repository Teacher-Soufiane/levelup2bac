/* Unit 2 · Grammar · Modal Verbs · Quiz 1 (out of 20). On the Unit 10 Grammar page (2026-11-19), like Unit 1.
   Points are in hundredths (100 = 1 point); the total must be 2000. Every item lists k = the skills it tests (RS_TAGS).
   In choice items the first option is the correct one; the app shuffles, and the right answer changes place on
   every new attempt. The teacher's 20 questions are kept word for word (levels 1–8 grouped into 6 games).
   Only change: in four items one wrong option was lengthened so the right answer is not always the longest. */
window.RS_TAGS = [
  ['OB', 'Meaning of the modal', 'obligation and necessity: must, have to, needn’t'],
  ['AD', 'Meaning of the modal', 'advice: should, ought to, had better'],
  ['AB', 'Meaning of the modal', 'ability: can, could'],
  ['PO', 'Meaning of the modal', 'possibility and certainty: might, may, could, must be'],
  ['PE', 'Meaning of the modal', 'permission and prohibition: may, mustn’t'],
  ['HB', 'Meaning of the modal', 'past habit: would'],
  ['FO', 'Form', 'modal + base verb (no “to”, no -ing)']
];

(function () {
  window.RS_QUIZ = {
    title: 'Modal Verbs · Quiz 1',
    games: [
      { key: 'form', name: 'Choose the Correct Modal', pts: 100, how: 'Choose the correct modal.', qs: [
        { t: 'choice', p: 'Students ______ respect their teachers and classmates.', o: ['must', 'might', 'could', 'would'], k: ['OB'], e: "'Must' expresses strong obligation. The sentence says that respecting teachers and classmates is required." },
        { t: 'choice', p: 'When I was six, I ______ swim very well.', o: ['could', 'must', 'may', 'should'], k: ['AB'], e: "'Could' expresses ability in the past." },
        { t: 'choice', p: 'You ______ see a doctor if you continue feeling sick.', o: ['should', 'might', 'can', 'would'], k: ['AD'], e: "'Should' is used to give advice or make a recommendation." },
        { t: 'choice', p: 'The school gates are locked, and nobody is allowed to enter after 8:30. Students ______ arrive before 8:30.', o: ['have to', 'may', 'could', 'might'], k: ['OB'], e: "'Have to' expresses a necessary requirement imposed by a rule or situation." },
        { t: 'choice', p: 'You ______ use my laptop if you need to finish your project.', o: ['may', 'must', 'ought to', 'have to'], k: ['PE'], e: "'May' can be used to give formal permission." },
        { t: 'choice', p: 'Take an umbrella. It ______ rain this afternoon.', o: ['might', 'must', 'has to', 'ought to'], k: ['PO'], e: "'Might' expresses a possibility. The speaker is not certain that it will rain." }
      ] },
      { key: 'function', name: 'Know the Function', pts: 100, how: 'What does this modal express?', qs: [
        { t: 'choice', p: 'My younger brother can speak three languages.', ask: 'What does "can" express in this sentence?', o: ['Ability', 'Obligation', 'Certainty', 'Prohibition'], k: ['AB'], e: "'Can' expresses the ability to do something." },
        { t: 'choice', p: 'She must be at home. Her car is outside and the lights are on.', ask: 'What does "must" express in this sentence?', o: ['Certainty', 'Permission', 'Past ability', 'Advice'], k: ['PO'], e: "'Must' expresses strong certainty based on the information available." },
        { t: 'choice', p: 'When we were children, our grandfather would tell us stories every evening.', ask: 'What does "would" express in this sentence?', o: ['A repeated past action', 'A present obligation', 'A future possibility', 'Permission to do something'], k: ['HB'], e: "'Would' can describe a repeated or habitual action in the past." }
      ] },
      { key: 'error', name: 'Spot and Correct the Error', pts: 100, how: 'Choose the correct sentence.', qs: [
        { t: 'choice', p: '❌ You must to finish your homework tonight.', o: ['You must finish your homework tonight.', 'You must finishing your homework tonight.', 'You must finished your homework tonight.', 'You must to finishing your homework tonight.'], k: ['FO'], e: "A modal verb such as 'must' is followed directly by the base form of the verb." },
        { t: 'choice', p: '❌ You should to revise before the exam.', o: ['You should revise before the exam.', 'You should revising before the exam.', 'You should revised before the exam.', 'You should to revising before the exam.'], k: ['FO'], e: "'Should' is followed directly by the base form of the verb, without 'to'." }
      ] },
      { key: 'meaning', name: 'Understand the Meaning', pts: 100, how: 'Choose the correct meaning.', qs: [
        { t: 'choice', p: "Students mustn't use their phones during the exam.", ask: 'What does "mustn\'t" express in this sentence?', o: ['Prohibition', 'Advice', 'Possibility', 'Ability'], k: ['PE'], e: "'Mustn't' means that something is not allowed." },
        { t: 'choice', p: "You needn't bring your laptop tomorrow; the school will provide computers.", ask: 'What does "needn\'t" mean in this sentence?', o: ['It is not necessary to bring your laptop.', 'You are not allowed to bring your laptop.', 'You are unable to bring your laptop.', 'You are required to bring your laptop.'], k: ['OB'], e: "'Needn't' means that something is unnecessary." },
        { t: 'choice', p: 'We could go to the library after class if you want.', ask: 'What does "could" express in this sentence?', o: ['A possible suggestion', 'A strict obligation', 'A prohibition', 'A habit in the distant past'], k: ['PO'], e: "'Could' can be used to suggest a possible course of action." }
      ] },
      { key: 'context', name: 'Same Meaning & Context', pts: 100, how: 'Same meaning, or complete the context.', qs: [
        { t: 'choice', p: 'It is necessary for all students to wear their school uniforms.', ask: 'Choose the sentence with the same meaning:', o: ['All students must wear their school uniforms.', 'All students might wear their school uniforms.', 'All students could wear their school uniforms.', 'All students would wear their school uniforms.'], k: ['OB'], e: "'Must' expresses necessity or strong obligation, so it preserves the meaning of 'It is necessary'." },
        { t: 'choice', p: 'It is advisable for you to save some money for university.', ask: 'Choose the sentence with the same meaning:', o: ['You ought to save some money for university.', 'You may save some money for university if you like.', 'You can save some money for university.', "You mustn't save any money for university."], k: ['AD'], e: "'Ought to' expresses advice or recommendation and therefore matches 'It is advisable'." },
        { t: 'choice', p: 'Yassine has an important BAC exam tomorrow. He has studied all week and feels confident. "I ______ probably finish the exam on time," he says.', o: ['should', "mustn't", "needn't", 'may not'], k: ['PO'], e: "'Should' can express an expectation about what is likely to happen." },
        { t: 'choice', p: 'The students are planning a school trip. Their teacher says: "You ______ bring some water with you because the journey is long."', o: ['had better', 'might', 'can', "mustn't"], k: ['AD'], e: "'Had better' gives strong advice, often because there may be a negative consequence if the advice is ignored." }
      ] },
      { key: 'boss', name: 'Final Challenge: Mixed Modals', pts: 100, how: 'Choose the best answer.', qs: [
        { t: 'choice', p: 'A student has forgotten his school ID card. The school rules say that students are not allowed to enter without it.', ask: 'What is the best sentence?', o: ["You mustn't enter without your ID card.", 'You might enter without your ID card.', 'You could enter without your ID card.', 'You ought to enter without your ID card.'], k: ['PE'], e: "'Mustn't' expresses prohibition, which matches the school rule." },
        { t: 'choice', p: 'Nadia has been studying for several hours. She looks exhausted, but she still has another hour of work to finish. Her friend says: "You ______ take a short break before continuing."', o: ['should', 'may not', "mustn't", 'cannot'], k: ['AD'], e: "'Should' is appropriate because the friend is giving advice." }
      ] }
    ]
  };
})();
/* Page text and storage key (read by app.js). missionHtml and rulesHtml may use <b>; everything else is plain text.
   Keep storeKey unchanged, or saved attempts are lost. */
window.RS_COPY = {
  storeKey: 'levelup-2bac-u2-modal-verbs-q1-v1',
  heroKicker: 'LEVEL UP 2BAC · GRAMMAR · UNIT 2',
  heroTitle: 'MODAL VERBS',
  heroQuiz: 'QUIZ 1',
  heroSub: 'The Modal Verbs Challenge · 20 points',
  missionHtml: 'A <b>modal verb</b> adds a meaning to the main verb: <b>obligation</b>, <b>advice</b>, <b>ability</b>, <b>possibility</b> or <b>permission</b>. It is always followed by the <b>base form</b> of the verb, with no “to”. Before you choose, ask: what does the speaker <b>mean</b>?',
  formula: 'modal + base verb · must · should · can · might · may',
  cats: ['📌 must', '💡 should', '💪 can', '🌦️ might', '🚫 mustn’t', '🕰️ would'],
  rulesHtml: [
    'Play the 6 games in order. You have <b>one try</b> for each question.',
    'There are <b>20 questions</b>, and each one is worth <b>1 point</b>.',
    'You see the correct answer and an explanation straight away, and you can review your mistakes at the end.'
  ],
  beforeBoss: 'Next: the Final Challenge.',
  fullMarks: '🏆 Achievement unlocked: Modal Verbs Champion! You must be ready for the national exam.'
};

/* Unit 3 · Grammar · Past Perfect Simple · Quiz 2 (out of 20). On the Unit 10 Grammar page (2026-11-19), like Units 1 and 2.
   Points are in hundredths (100 = 1 point); the total must be 2000. Every item lists k = the skills it tests (RS_TAGS).
   In choice items the first option is the correct one; the app shuffles, and the right answer changes place on
   every new attempt. The teacher's 20 questions are kept word for word (levels 1–8 grouped into 6 games).
   No option was changed: the right answer is never the only longest one. */
window.RS_TAGS = [
  ['SQ', 'Use', 'the earlier action → had + past participle; the later action → past simple'],
  ['BT', 'Use', 'time words: before, after, by the time, as soon as, already'],
  ['FO', 'Form', 'had + past participle (had given, had taken)'],
  ['NQ', 'Form', 'negatives and questions: had not + V3 · Had + subject + V3?']
];

(function () {
  window.RS_QUIZ = {
    title: 'Past Perfect Simple · Quiz 2',
    games: [
      { key: 'sequence', name: 'Recognize the Sequence', pts: 100, how: 'Choose the correct sentence or form.', qs: [
        { t: 'choice', p: 'Look at the timeline: The train left the station → Sara arrived at the station.', ask: 'Which sentence correctly describes these two past events?', o: ['When Sara arrived, the train had left.', 'When Sara arrived, the train has left.', 'When Sara had arrived, the train left.', 'When Sara arrives, the train had left.'], k: ['SQ'], e: "The train left FIRST, so that earlier action takes the Past Perfect ('had left'); Sara's arrival, the later action, takes the Past Simple ('arrived')." },
        { t: 'choice', p: 'Bill joined the gym last summer. His diet had begun four months earlier.', ask: 'Choose the correct sentence.', o: ['Bill had started his diet four months before he joined the gym.', 'Bill starts his diet four months before he joined the gym.', 'Bill has started his diet four months before he joined the gym.', 'Bill was start his diet four months before he joined the gym.'], k: ['SQ'], e: "The diet started BEFORE Bill joined the gym, so the earlier action needs the Past Perfect: 'had started'." },
        { t: 'choice', p: "Choose the correct sentence using the booklet's train context.", o: ['When she got to the station, the train had already left.', 'When she got to the station, the train has already left.', 'When she had got to the station, the train already left.', 'When she gets to the station, the train had already left.'], k: ['SQ', 'BT'], e: "The train's departure happened before she got to the station, so it takes the Past Perfect ('had already left'), while her arrival takes the Past Simple ('got')." },
        { t: 'choice', p: 'They lost the documents that he ______ them before. (give)', o: ['had given', 'giving', 'gives', 'has given'], k: ['FO', 'SQ'], e: "The giving happened before the losing, so the earlier action needs the Past Perfect: 'had given'." },
        { t: 'choice', p: 'After Laura ______ the pills, she felt better. (take)', o: ['had taken', 'will take', 'takes', 'has taken'], k: ['FO', 'BT'], e: "Taking the pills happened before feeling better, so the earlier action needs the Past Perfect: 'had taken'." },
        { t: 'choice', p: 'Ahlam went to bed after she ______ her favourite TV programme. (watch)', o: ['had watched', 'has watched', 'watches', 'will watch'], k: ['FO', 'BT'], e: "Watching the programme happened before going to bed, so the earlier action needs the Past Perfect: 'had watched'." }
      ] },
      { key: 'apply', name: 'Apply in Context', pts: 100, how: 'Complete the sentence.', qs: [
        { t: 'choice', p: 'James did not take the exam last Monday because he ______ sick. (be)', o: ['had been', 'will be', 'is', 'has been'], k: ['SQ'], e: "Being sick happened before (and caused) missing the exam, so the earlier action needs the Past Perfect: 'had been'." },
        { t: 'choice', p: 'Susan was very upset because Tom ______ her emails and phone calls. (not/answer)', o: ['had not answered', 'does not answer', 'has not answered', 'will not answer'], k: ['NQ', 'SQ'], e: "Tom's silence happened before Susan's upset feeling, so the earlier action needs the Past Perfect negative: 'had not answered'." },
        { t: 'choice', p: 'Rachid was pleased because he ______ from university before he applied for the job. (graduate)', o: ['had graduated', 'graduates', 'will graduate', 'has graduated'], k: ['SQ', 'BT'], e: "Graduating happened before applying for the job, so the earlier action needs the Past Perfect: 'had graduated'." }
      ] },
      { key: 'structure', name: 'Choose the Correct Structure', pts: 100, how: 'Choose the correct sentence.', qs: [
        { t: 'choice', p: '', ask: 'Choose the sentence with the correct Past Perfect structure.', o: ['The teacher had explained the lesson before the students started the exercise.', 'The teacher had explains the lesson before the students started the exercise.', 'The teacher had explaining the lesson before the students started the exercise.', 'The teacher had explain the lesson before the students started the exercise.'], k: ['FO'], e: "The Past Perfect is formed with 'had' + the past participle — 'had explained', not 'had explains', 'had explaining', or 'had explain'." },
        { t: 'choice', p: '', o: ['Helen had broken her leg twice before she turned twenty.', 'Helen has broken her leg twice before she turned twenty.', 'Helen breaks her leg twice before she turned twenty.', 'Helen will break her leg twice before she turned twenty.'], k: ['SQ', 'BT'], e: "Breaking her leg happened before turning twenty (a past reference point), so the earlier action needs the Past Perfect: 'had broken'." }
      ] },
      { key: 'complete', name: 'Complete with the Past Perfect', pts: 100, how: 'Choose the correct completion.', qs: [
        { t: 'choice', p: 'The students could not use the classroom because another group ______ it. (not/vacate)', ask: 'Choose the correct negative form:', o: ['had not vacated', 'not had vacated', 'did not vacated', 'has not vacated'], k: ['NQ'], e: "The other group's not having vacated the room happened before the students being unable to use it, so it needs the Past Perfect negative: 'had not vacated'." },
        { t: 'choice', p: 'By the time the firemen arrived, the fire ______ the roof. (reach)', o: ['had reached', 'will reach', 'reaches', 'has reached'], k: ['BT'], e: "The fire reaching the roof happened before the firemen arrived, so the earlier action needs the Past Perfect: 'had reached'." },
        { t: 'choice', p: 'By the time the students entered the examination room, the invigilator ______ the instructions. (explain)', o: ['had explained', 'explains', 'will explain', 'has explained'], k: ['BT'], e: "Explaining the instructions happened before the students entered, so the earlier action needs the Past Perfect: 'had explained'." }
      ] },
      { key: 'context', name: 'Transform & Context', pts: 100, how: 'Choose the correct question, sentence or word.', qs: [
        { t: 'choice', p: 'Jack revised all his lessons before he left for school.', ask: 'Choose the correct question:', o: ['Had Jack revised all his lessons before he left for school?', 'Did Jack had revised all his lessons before he left for school?', 'Jack had revised all his lessons before did he leave for school?', 'Has Jack revised all his lessons before he left for school?'], k: ['NQ'], e: "To form a Past Perfect question, 'had' moves before the subject: 'Had Jack revised...?', not 'Did Jack had...?'." },
        { t: 'choice', p: 'The lesson finished before the teacher arrived.', ask: 'Rewrite the sentence using the Past Perfect:', o: ['The lesson had finished before the teacher arrived.', 'The lesson finished had before the teacher arrived.', 'The lesson has finished before the teacher arrived.', 'The lesson had finish before the teacher arrived.'], k: ['FO', 'BT'], e: "The lesson finishing happened before the teacher arrived, so the earlier action takes the Past Perfect: 'had finished'." },
        { t: 'choice', p: 'As soon as the students ______ the assignment, they submitted it to the teacher. (complete)', o: ['had completed', 'complete', 'have completed', 'will complete'], k: ['BT'], e: "Completing the assignment happened before submitting it, so the earlier action needs the Past Perfect: 'had completed'." },
        { t: 'choice', p: 'Last night, I arrived home late. My family had already eaten dinner, so I ______ something for myself.', ask: 'Choose the best sentence to complete the mini-story:', o: ['prepared', 'prepare', 'had prepared', 'have prepared'], k: ['SQ'], e: "Preparing dinner for yourself happens AFTER the family had already eaten, so this later action stays in the Past Simple: 'prepared'." }
      ] },
      { key: 'boss', name: 'Final Challenge: Mixed Grammar', pts: 100, how: 'Choose the correct answer.', qs: [
        { t: 'choice', p: 'When we moved to this place in 2015, I ______ my new job. (already/start)', o: ['had already started', 'already start', 'already starting', 'have already started'], k: ['BT', 'FO'], e: "Starting the new job happened before moving to this place, so the earlier action needs the Past Perfect: 'had already started'." },
        { t: 'choice', p: '', ask: 'Choose the sentence that correctly uses the Past Perfect Simple to show the complete sequence of events.', o: ['When the conference began, the organizers had prepared everything.', 'When the conference begins, the organizers had prepared everything.', 'When the conference began, the organizers have prepared everything.', 'When the conference had began, the organizers prepared everything.'], k: ['SQ', 'FO'], e: "The organizers' preparation happened before the conference began, so the earlier action needs the Past Perfect ('had prepared'), while the conference beginning stays in the Past Simple ('began')." }
      ] }
    ]
  };
})();
/* Page text and storage key (read by app.js). missionHtml and rulesHtml may use <b>; everything else is plain text.
   Keep storeKey unchanged, or saved attempts are lost. */
window.RS_COPY = {
  storeKey: 'levelup-2bac-u3-past-perfect-simple-q2-v1',
  heroKicker: 'LEVEL UP 2BAC · GRAMMAR · UNIT 3',
  heroTitle: 'PAST PERFECT SIMPLE',
  heroQuiz: 'QUIZ 2',
  heroSub: 'The Past Perfect Challenge · 20 points',
  missionHtml: 'When two actions happened in the past, the <b>earlier</b> one takes the <b>Past Perfect</b> (<b>had + past participle</b>) and the <b>later</b> one takes the <b>Past Simple</b>. Words like <b>before</b>, <b>after</b>, <b>by the time</b> and <b>already</b> help you. Before you choose, ask: which action happened <b>first</b>?',
  formula: 'had + past participle · earlier action → had left',
  cats: ['⏪ had + V3', '1️⃣ first', '2️⃣ then', '⏰ by the time', '❓ Had you…?', '🚫 had not'],
  rulesHtml: [
    'Play the 6 games in order. You have <b>one try</b> for each question.',
    'There are <b>20 questions</b>, and each one is worth <b>1 point</b>.',
    'You see the correct answer and an explanation straight away, and you can review your mistakes at the end.'
  ],
  beforeBoss: 'Next: the Final Challenge.',
  fullMarks: '🏆 Achievement unlocked: Past Perfect Champion! You had answered everything correctly before the quiz ended.'
};

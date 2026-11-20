/* Unit 3 · Grammar · 3-Tense Mastery · Quiz 4 (out of 20). On the Unit 10 Grammar page (2026-11-19), like Units 1 and 2.
   Points are in hundredths (100 = 1 point); the total must be 2000. Every item lists k = the skills it tests (RS_TAGS).
   In choice items the first option is the correct one; the app shuffles, and the right answer changes place on
   every new attempt. The teacher's 20 questions and answers are kept word for word (levels 1–4 = games 1–4,
   levels 5–6 = game 5, levels 7–8 = game 6). Changes:
   - in six items one wrong option became a Present Perfect (Continuous) form, so "had been + -ing" is not always the
     longest option;
   - the story's long explanation was shortened to one line (same five reasons), and its last wrong option ends in
     "traveled" instead of "had been traveling", so the screen fits a laptop;
   - eight explanations quoted clues that are not in the question ("for twenty minutes", "since early morning",
     "already", "by the time the bell rang"...). They were rewritten to use the clues that ARE in the question. */
window.RS_TAGS = [
  ['PS', 'Tense', 'Past Simple: one finished past action / the later action'],
  ['PP', 'Tense', 'Past Perfect Simple: an earlier, completed action or result (had + V3)'],
  ['PC', 'Tense', 'Past Perfect Continuous: an earlier activity that went on for some time (had been + -ing)'],
  ['FO', 'Form', 'correct structure: had + V3 · had been + -ing']
];

(function () {
  window.RS_QUIZ = {
    title: '3-Tense Mastery · Quiz 4',
    games: [
      { key: 'timeline', name: 'Identify the Timeline', pts: 100, how: 'Which form correctly describes the timeline?', qs: [
        { t: 'choice', p: 'The meeting began at 8:00. Sara arrived at 8:30. When Sara arrived, the meeting ______. (begin)', o: ['had begun', 'began', 'had been beginning', 'has begun'], k: ['PP'], e: "The meeting began FIRST, so that earlier action takes the Past Perfect Simple ('had begun'); Sara's arrival, the later action, takes the Past Simple ('arrived')." },
        { t: 'choice', p: 'The plane landed at noon. We reached the airport at 12:15. When we reached the airport, the plane ______. (land)', o: ['had landed', 'landed', 'had been landing', 'has landed'], k: ['PP'], e: "The plane landed FIRST, so that earlier action takes the Past Perfect Simple ('had landed'); reaching the airport, the later action, takes the Past Simple ('reached')." },
        { t: 'choice', p: 'The bell rang at 9:00. The students sat down at 9:05. When the students sat down, the bell ______. (ring)', o: ['had rung', 'rang', 'had been ringing', 'has rung'], k: ['PP'], e: "The bell rang FIRST, so that earlier action takes the Past Perfect Simple ('had rung'); sitting down, the later action, takes the Past Simple ('sat down')." }
      ] },
      { key: 'completed', name: 'Earlier Completed Action', pts: 100, how: 'Choose the correct tense.', qs: [
        { t: 'choice', p: 'By the time the police arrived, the thief ______ three houses. (rob)', o: ['had robbed', 'robbed', 'had been robbing', 'was robbing'], k: ['PP'], e: "'Three houses' is a specific, quantified result completed before the police arrived, so it needs the Past Perfect Simple: 'had robbed'." },
        { t: 'choice', p: 'When the teacher collected the notebooks, Nadia ______ every exercise. (complete)', o: ['had completed', 'completed', 'had been completing', 'was completing'], k: ['PP'], e: "A completed result ('every exercise') before a past moment (when the teacher collected the notebooks) needs the Past Perfect Simple: 'had completed'." },
        { t: 'choice', p: 'When the taxi arrived, Hamid ______ his suitcase before leaving home. (pack)', o: ['had packed', 'packed', 'had been packing', 'was packing'], k: ['PP'], e: "The packing was finished before the taxi arrived (a completed action before a past moment), so it needs the Past Perfect Simple: 'had packed'." }
      ] },
      { key: 'continuing', name: 'Earlier Continuing Action', pts: 100, how: 'Choose the correct tense.', qs: [
        { t: 'choice', p: 'The teacher entered the classroom, and the students stopped their discussion. They ______ about the project. (discuss)', o: ['had been discussing', 'discussed', 'had discussed', 'have been discussing'], k: ['PC'], e: "The discussion was still going on when the teacher entered, and then it stopped: 'had been discussing'." },
        { t: 'choice', p: 'The roads were icy, and the fields were covered in fresh snow. It ______ heavily overnight. (snow)', o: ['had been snowing', 'snowed', 'had snowed', 'has been snowing'], k: ['PC'], e: "'Heavily overnight' shows an activity that went on for hours and caused the icy roads: 'had been snowing'." },
        { t: 'choice', p: 'When I arrived, they were both upset and had raised voices. They ______ before I came in. (argue)', o: ['had been arguing', 'argued', 'had argued', 'have been arguing'], k: ['PC'], e: "Their raised voices are the result of an activity that went on before I came in: 'had been arguing'." }
      ] },
      { key: 'result', name: 'Result vs Completion', pts: 100, how: 'Choose the correct tense.', qs: [
        { t: 'choice', p: "Karim's clothes were dirty because he ______ football in the rain. (play)", o: ['had been playing', 'played', 'had played', 'has been playing'], k: ['PC'], e: "The focus is on the activity (playing in the rain) that caused the result, with no quantified completion, so it needs the Past Perfect Continuous: 'had been playing'." },
        { t: 'choice', p: 'When the police arrived, the thief was exhausted and out of breath because he ______ through the woods. (run)', o: ['had been running', 'ran', 'had run', 'has been running'], k: ['PC'], e: "Being exhausted and out of breath is the result of an activity that went on for some time, so it needs the Past Perfect Continuous: 'had been running'." },
        { t: 'choice', p: 'The kitchen was a mess because Salma ______ three cakes that afternoon, using every bowl in the house. (bake)', o: ['had baked', 'baked', 'had been baking', 'was baking'], k: ['PP'], e: "'Three cakes' is a specific, quantified completed result, so this one needs the Past Perfect Simple: 'had baked'." }
      ] },
      { key: 'mixed', name: 'Mixed Tenses & Errors', pts: 100, how: 'Choose the correct tense or correction.', qs: [
        { t: 'choice', p: 'I ______ the bus yesterday, so I had to walk to school. (miss)', o: ['missed', 'had missed', 'had been missing', 'miss'], k: ['PS'], e: "This is a single completed past action with no earlier reference point, so it needs the simple Past Simple: 'missed'." },
        { t: 'choice', p: 'The computer worked perfectly because a technician ______ it the day before. (fix)', o: ['had fixed', 'had been fixing', 'fixed', 'fixes'], k: ['PP'], e: "The technician's action happened before the computer worked perfectly, with no duration clue, so it needs the Past Perfect Simple: 'had fixed'." },
        { t: 'choice', p: 'When the bus finally came, we ______ in the rain. (wait)', o: ['had been waiting', 'waited', 'had waited', 'have been waiting'], k: ['PC'], e: "'Finally' shows that the waiting went on for some time before the bus came, so it needs the Past Perfect Continuous: 'had been waiting'." },
        { t: 'choice', p: '❌ When I arrived home, my brother had been tidied his room.', o: ['When I arrived home, my brother had tidied his room.', 'When I arrived home, my brother tidied his room.', 'When I arrived home, my brother had been tidy his room.', 'When I arrived home, my brother has tidied his room.'], k: ['FO', 'PP'], e: "The room-tidying happened before arriving home, with a completed result, so it needs the Past Perfect Simple: 'had tidied', not the incorrect mix 'had been tidied'." },
        { t: 'choice', p: '❌ The students had been solved the puzzle before the teacher gave them a hint.', o: ['The students had solved the puzzle before the teacher gave them a hint.', 'The students solved the puzzle before the teacher gave them a hint.', 'The students had been solve the puzzle before the teacher gave them a hint.', 'The students has solved the puzzle before the teacher gave them a hint.'], k: ['FO', 'PP'], e: "Solving the puzzle happened before the teacher gave a hint, with a completed result, so it needs the Past Perfect Simple: 'had solved', not the incorrect mix 'had been solved'." }
      ] },
      { key: 'boss', name: 'BAC Final Challenge', pts: 100, how: 'Choose the best answer.', qs: [
        { t: 'choice', p: 'The workers started building the bridge in 2015. They completed it in 2020.', ask: 'Choose the sentence that correctly combines these ideas.', o: ['The workers had been building the bridge since 2015 before they completed it in 2020.', 'The workers built the bridge since 2015 before they completed it in 2020.', 'The workers had built the bridge since 2015 before they completed it in 2020.', 'The workers have been building the bridge since 2015 before they completed it in 2020.'], k: ['PC'], e: "'Since 2015' shows an activity continuing up to the later past event (completing it), so it needs the Past Perfect Continuous: 'had been building'." },
        { t: 'choice', p: 'Grandma knitted the sweater for three months before she finished it.', ask: 'Which sentence emphasizes the continuing activity rather than just the finished fact?', o: ['Grandma had been knitting the sweater for three months before she finished it.', 'Grandma knitted the sweater for three months before she finished it.', 'Grandma had knitted the sweater for three months before she finished it.', 'Grandma has been knitting the sweater for three months before she finished it.'], k: ['PC'], e: "The Past Perfect Continuous ('had been knitting') is the form that specifically emphasizes the ongoing activity and its duration, not just the completed fact." },
        { t: 'choice', p: 'Last Saturday, Sara ______ early because she had an important exam. She was nervous because she ______ enough during the week. When she arrived at school, some students ______ the examination room before the bell rang. She realized that she ______ her ID card at home. She was exhausted because she ______ on the journey to school.', o: ['woke up / had not revised / had already entered / had forgotten / had been traveling', 'had woken up / had not revised / had already entered / had forgotten / traveled', 'woke up / did not revise / had already entered / forgot / had been traveling', 'was waking up / had not revised / had already been entering / had forgotten / traveled'], k: ['PS', 'PP', 'PC'], e: "Main past event: woke up · earlier and finished: had not revised, had already entered, had forgotten · earlier and going on: had been traveling." }
      ] }
    ]
  };
})();
/* Page text and storage key (read by app.js). missionHtml and rulesHtml may use <b>; everything else is plain text.
   Keep storeKey unchanged, or saved attempts are lost. */
window.RS_COPY = {
  storeKey: 'levelup-2bac-u3-three-tense-mastery-q4-v1',
  heroKicker: 'LEVEL UP 2BAC · GRAMMAR · UNIT 3',
  heroTitle: '3-TENSE MASTERY',
  heroQuiz: 'QUIZ 4',
  heroSub: 'The 3-Tense Mastery Challenge · 20 points',
  missionHtml: 'Three past tenses, three jobs. <b>Past Simple</b>: the main or later action. <b>Past Perfect Simple</b> (<b>had + V3</b>): an earlier action that was <b>finished</b>, often with a number (three houses). <b>Past Perfect Continuous</b> (<b>had been + -ing</b>): an earlier activity that <b>went on</b> for some time and explains a result. Before you choose, ask: <b>first or later? finished or going on?</b>',
  formula: 'Past Simple · had + V3 · had been + verb-ing',
  cats: ['📍 Past Simple', '✅ had + V3', '⏳ had been + ‑ing', '🔢 three cakes', '❌ errors', '📖 story'],
  rulesHtml: [
    'Play the 6 games in order. You have <b>one try</b> for each question.',
    'There are <b>20 questions</b>, and each one is worth <b>1 point</b>.',
    'You see the correct answer and an explanation straight away, and you can review your mistakes at the end.'
  ],
  beforeBoss: 'Next: the BAC Final Challenge.',
  fullMarks: '🏆 Achievement unlocked: 3-Tense Master! You had been practising, and now you have mastered all three past tenses.'
};

/* Unit 3 · Grammar · Past Perfect Continuous · Quiz 3 (out of 20). On the Unit 10 Grammar page (2026-11-19), like Units 1 and 2.
   Points are in hundredths (100 = 1 point); the total must be 2000. Every item lists k = the skills it tests (RS_TAGS).
   In choice items the first option is the correct one; the app shuffles, and the right answer changes place on
   every new attempt. The teacher's 20 questions are kept word for word (levels 1–5 = games 1–5, levels 6–8 = game 6).
   Only change: in the old quiz "had been + -ing" was always the longest option, so one wrong option per item became a
   Present Perfect Continuous form (has/have been + -ing), which is wrong in a past story. In item 5 it is
   "would be attending" instead, because "has been attending" could also be right with "since". */
window.RS_TAGS = [
  ['FO', 'Form', 'had been + verb-ing'],
  ['DU', 'Use', 'duration before a past moment: for, since, all night, by the time'],
  ['RE', 'Use', 'an earlier activity that explains a past result (tired, muddy, exhausted)'],
  ['NQ', 'Form', 'negatives and questions: had not been + -ing · Had you been + -ing?']
];

(function () {
  window.RS_QUIZ = {
    title: 'Past Perfect Continuous · Quiz 3',
    games: [
      { key: 'form', name: 'Form Detective', pts: 100, how: 'Choose the correct form.', qs: [
        { t: 'choice', p: 'The pavement was muddy because it ______ all night. (rain)', o: ['had been raining', 'rained', 'has been raining', 'is raining'], k: ['FO', 'RE'], e: "'Had been raining' shows an activity that continued for a period (all night) before the past result (the muddy pavement)." },
        { t: 'choice', p: 'She felt dizzy because she ______ on the phone for so long. (talk)', o: ['had been talking', 'talked', 'has been talking', 'was talk'], k: ['FO', 'RE'], e: "'Had been talking' emphasizes the activity and its duration before she felt dizzy." },
        { t: 'choice', p: 'He ______ here for years before he found another job. (work)', o: ['had been working', 'worked', 'has been working', 'was working'], k: ['FO', 'DU'], e: "'Had been working' shows an activity continuing for years before another past event (finding a new job)." }
      ] },
      { key: 'clues', name: 'Context Clues', pts: 100, how: 'Choose the correct form.', qs: [
        { t: 'choice', p: 'He ______ anything for many days before this job offer came. (not / do)', o: ['had not been doing', 'did not do', 'has not been doing', 'was not doing'], k: ['NQ', 'DU'], e: "The negative Past Perfect Continuous is 'had not been + verb-ing': the activity continued for many days before the job offer came." },
        { t: 'choice', p: 'She ______ the advanced maths class since the beginning of the school year. (attend)', o: ['had been attending', 'attended', 'would be attending', 'was attending'], k: ['DU'], e: "'Since' marks the starting point of a continuing activity before a past reference point, so we need 'had been attending'." },
        { t: 'choice', p: 'Before Jim finally decided to go to Thailand, he ______ about it for months. (think)', o: ['had been thinking', 'thought', 'has been thinking', 'was thinking'], k: ['DU'], e: "'For months' shows duration before another past event, so we need 'had been thinking'." }
      ] },
      { key: 'duration', name: 'Duration Detective', pts: 100, how: 'Choose the correct form.', qs: [
        { t: 'choice', p: 'I ______ for three hours before the exam started. (study)', o: ['had been studying', 'studied', 'have been studying', 'was studying'], k: ['DU'], e: "'For three hours... before' shows duration before another past event, so we need 'had been studying'." },
        { t: 'choice', p: 'Had you ______ long before the bus arrived? (wait)', o: ['been waiting', 'waited', 'waiting', 'wait'], k: ['NQ'], e: "The question form is 'Had + subject + been + verb-ing?', so after 'Had you', we need 'been waiting'." },
        { t: 'choice', p: 'The players were tired because they ______ for two hours. (practice)', o: ['had been practicing', 'practiced', 'have been practicing', 'were practicing'], k: ['RE', 'DU'], e: "'Had been practicing' shows the continuing activity that caused the past result (being tired)." }
      ] },
      { key: 'result', name: 'Result Detective', pts: 100, how: 'Choose the correct form.', qs: [
        { t: 'choice', p: 'Before they reached the village, they ______ for six hours. (travel)', o: ['had been traveling', 'traveled', 'have been traveling', 'were traveling'], k: ['DU'], e: "'For six hours... before' shows duration before another past event, so we need 'had been traveling'." },
        { t: 'choice', p: 'The mechanic was exhausted because he ______ the engine all morning. (repair)', o: ['had been repairing', 'repaired', 'has been repairing', 'was repairing'], k: ['RE'], e: "'Had been repairing' shows the continuing activity that caused the past result (exhaustion)." },
        { t: 'choice', p: 'By noon, the scientists ______ for evidence for several hours. (search)', o: ['had been searching', 'searched', 'have been searching', 'were searching'], k: ['DU'], e: "'Had been searching' shows an activity continuing for several hours before a past reference point." }
      ] },
      { key: 'context', name: 'Past Perfect Continuous in Context', pts: 100, how: 'Complete the sentence.', qs: [
        { t: 'choice', p: 'By the time the teacher arrived, the students ______ the problem for twenty minutes. (discuss)', o: ['had been discussing', 'discussed', 'have been discussing', 'were discussing'], k: ['DU'], e: "'By the time... for twenty minutes' shows duration before a past reference point, so we need 'had been discussing'." },
        { t: 'choice', p: 'When the family moved, they ______ in that house since 2012. (live)', o: ['had been living', 'lived', 'have been living', 'were living'], k: ['DU'], e: "'Since 2012' marks the starting point of a continuing activity before a past reference point, so we need 'had been living'." },
        { t: 'choice', p: '“The athlete started training in January. The competition took place in June.”', ask: 'Choose the sentence that correctly combines these ideas using the Past Perfect Continuous:', o: ['The athlete had been training since January before the competition took place.', 'The athlete trained since January before the competition took place.', 'The athlete has been training since January before the competition took place.', 'The athlete was training since January before the competition took place.'], k: ['DU', 'FO'], e: "The training continued from January up to the later past event, so it needs the Past Perfect Continuous: 'had been training'." }
      ] },
      { key: 'boss', name: 'BAC Final Challenge', pts: 100, how: 'Choose the correct form.', qs: [
        { t: 'choice', p: 'The kitchen smelled wonderful because the chef ______ for hours. (cook)', o: ['had been cooking', 'cooked', 'has been cooking', 'was cooking'], k: ['RE'], e: "'Had been cooking' shows the continuing activity that caused the past result (the wonderful smell)." },
        { t: 'choice', p: 'When I entered the library, Nadia ______ for two hours. (read)', o: ['had been reading', 'read', 'has been reading', 'was reading'], k: ['DU'], e: "'For two hours' shows duration before another past event, so we need 'had been reading'." },
        { t: 'choice', p: 'The classroom looked spotless because the students ______ it all morning before the inspection. (clean)', o: ['had been cleaning', 'cleaned', 'have been cleaning', 'were cleaning'], k: ['RE', 'DU'], e: "'All morning... before the inspection' shows duration before a past reference point, so we need 'had been cleaning'." },
        { t: 'choice', p: 'He was exhausted when he arrived because he ______ for five hours. (drive)', o: ['had been driving', 'drove', 'has been driving', 'was driving'], k: ['RE'], e: "'Had been driving' shows the continuing activity that caused the past result (exhaustion on arrival)." },
        { t: 'choice', p: 'By the time the guests arrived, we ______ the meal for three hours. (prepare)', o: ['had been preparing', 'prepared', 'have been preparing', 'were preparing'], k: ['DU'], e: "'By the time... for three hours' shows duration before a past reference point, so we need 'had been preparing'." }
      ] }
    ]
  };
})();
/* Page text and storage key (read by app.js). missionHtml and rulesHtml may use <b>; everything else is plain text.
   Keep storeKey unchanged, or saved attempts are lost. */
window.RS_COPY = {
  storeKey: 'levelup-2bac-u3-past-perfect-continuous-q3-v1',
  heroKicker: 'LEVEL UP 2BAC · GRAMMAR · UNIT 3',
  heroTitle: 'PAST PERFECT CONTINUOUS',
  heroQuiz: 'QUIZ 3',
  heroSub: 'The Past Perfect Continuous Challenge · 20 points',
  missionHtml: 'The <b>Past Perfect Continuous</b> (<b>had been + verb-ing</b>) shows an activity that <b>continued for some time</b> before another moment in the past. It often explains a <b>past result</b>: she was tired because she <b>had been running</b>. Look for <b>for</b>, <b>since</b>, <b>all morning</b> and <b>by the time</b>. Before you choose, ask: how <b>long</b> did it go on?',
  formula: 'had been + verb-ing · for / since · before a past moment',
  cats: ['⏳ had been + ‑ing', '⏱️ for', '📅 since', '💧 result', '❓ Had you been…?', '🚫 had not been'],
  rulesHtml: [
    'Play the 6 games in order. You have <b>one try</b> for each question.',
    'There are <b>20 questions</b>, and each one is worth <b>1 point</b>.',
    'You see the correct answer and an explanation straight away, and you can review your mistakes at the end.'
  ],
  beforeBoss: 'Next: the BAC Final Challenge.',
  fullMarks: '🏆 Achievement unlocked: Past Perfect Continuous Champion! You had been working hard, and it shows.'
};

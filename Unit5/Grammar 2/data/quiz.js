/* Unit 5 · Grammar · The Passive Voice · Quiz 2 (out of 20). On the Unit 10 Grammar page (2026-11-19), like Units 1–4.
   The teacher's quiz is "Build the sentence": put the word groups in order. It stays that way here (build items:
   tap the groups in order, then Check). The teacher's 20 sentences, her word groups and her accepted second orders
   (alt) are kept exactly. Her hint for each level is shown above the tiles; her rule is the explanation.
   Every item is worth 1 point (100 hundredths); the total must be 2000. The tiles start in a new order on every
   attempt and never already in the right order (BORDER-2026-11-19 in app.js). Levels 1–8 → 6 games. */
window.RS_TAGS = [
  ['PS', 'Tense', 'present / past simple passive: am/is/are · was/were + past participle'],
  ['PC', 'Tense', 'continuous passive: is being / was being + past participle'],
  ['PF', 'Tense', 'perfect passive: has/have been · had been + past participle'],
  ['MO', 'Tense', 'future and modal passive: will / must + be · will / should + have been'],
  ['AG', 'Form', 'by + subject (the doer) at the end']
];

(function () {
  var H = {
    1: 'Think: subject + am/is/are + past participle.',
    2: 'Think: subject + was/were + past participle.',
    3: 'Think: subject + am/is/are + being + past participle.',
    4: 'Think: subject + was/were + being + past participle.',
    5: 'Think: subject + has/have + been + past participle.',
    6: 'Think: subject + had + been + past participle.',
    7: 'Think: subject + will/modal + be + past participle.',
    8: 'Think: a modal verb + have + been + past participle, with the doer introduced by ‘by’.'
  };
  var R = {
    1: 'Present simple passive = subject + am/is/are + past participle (+ by + subject (the doer)).',
    2: 'Past simple passive = subject + was/were + past participle (+ by + subject (the doer)).',
    3: 'Present continuous passive = subject + am/is/are + being + past participle (+ by + subject (the doer)).',
    4: 'Past continuous passive = subject + was/were + being + past participle (+ by + subject (the doer)).',
    5: 'Present perfect passive = subject + has/have + been + past participle (+ by + subject (the doer)).',
    6: 'Past perfect passive = subject + had + been + past participle (+ by + subject (the doer)).',
    7: 'Future/modal passive = subject + will/modal + be + past participle (+ by + subject (the doer)).',
    8: 'Modal perfect passive = subject + will/should + have + been + past participle (+ by + subject (the doer)).'
  };
  var TAG = { 1: ['PS'], 2: ['PS', 'AG'], 3: ['PC', 'AG'], 4: ['PC', 'AG'], 5: ['PF', 'AG'], 6: ['PF', 'AG'], 7: ['MO'], 8: ['MO'] };
  function B(level, key, alt) { var q = { t: 'build', d: H[level], key: key, extra: [], e: R[level], k: TAG[level] }; if (alt) q.alt = alt; return q; }

  window.RS_QUIZ = {
    title: 'The Passive Voice · Quiz 2',
    games: [
      { key: 'simple', name: 'Present & Past Simple Passive', pts: 100, how: 'Build the sentence — simple passive.', qs: [
        B(1, ['Argan oil', 'is', 'produced', 'in Morocco']),
        B(1, ['The samples', 'are', 'carefully', 'examined', 'by', 'the laboratory team'], [['The samples', 'are', 'examined', 'carefully', 'by', 'the laboratory team']]),
        B(1, ['English', 'is', 'spoken', 'in several countries']),
        B(2, ["Tutankhamun's tomb", 'was', 'discovered', 'by', 'archaeologists']),
        B(2, ['A new song', 'was', 'composed', 'by', 'the young musician'])
      ] },
      { key: 'prescont', name: 'Present Continuous Passive', pts: 100, how: 'Build the sentence — present continuous passive.', qs: [
        B(3, ['The new medicine', 'is', 'being', 'tested', 'by', 'researchers']),
        B(3, ['The rare bird', 'is', 'being', 'photographed', 'by', 'a wildlife expert']),
        B(3, ['The old documents', 'are', 'being', 'examined', 'by', 'the archivist'])
      ] },
      { key: 'pastcont', name: 'Past Continuous Passive', pts: 100, how: 'Build the sentence — past continuous passive.', qs: [
        B(4, ['The main road', 'was', 'being', 'widened', 'by', 'the construction team']),
        B(4, ['The stage', 'was', 'being', 'prepared', 'by', 'the technicians'])
      ] },
      { key: 'presperf', name: 'Present Perfect Passive', pts: 100, how: 'Build the sentence — present perfect passive.', qs: [
        B(5, ['The data', 'has', 'been', 'stored', 'by', 'the research team']),
        B(5, ['The invitations', 'have', 'been', 'printed', 'by', 'the school secretary'])
      ] },
      { key: 'pastperf', name: 'Past Perfect Passive', pts: 100, how: 'Build the sentence — past perfect passive.', qs: [
        B(6, ['The map', 'had', 'been', 'checked', 'by', 'the expedition leader']),
        B(6, ['The equipment', 'had', 'been', 'packed', 'by', 'the volunteers']),
        B(6, ['The laboratory', 'had', 'been', 'cleaned', 'by', 'the staff']),
        B(6, ['The documents', 'had', 'been', 'translated', 'by', 'the interpreter'])
      ] },
      { key: 'boss', name: 'BAC Final Challenge', pts: 100, how: 'Build the sentence — future and modal passive.', qs: [
        B(7, ['The new policy', 'will', 'be', 'announced', 'by the school board', 'next month'], [['The new policy', 'will', 'be', 'announced', 'next month', 'by the school board']]),
        B(7, ['Personal information', 'must', 'be', 'protected', 'online']),
        B(8, ['The final report', 'will', 'have', 'been', 'completed', 'by the research team']),
        B(8, ['The password', 'should', 'have', 'been', 'changed', 'immediately'], [['The password', 'should', 'immediately', 'have', 'been', 'changed']])
      ] }
    ]
  };
})();
/* Page text and storage key (read by app.js). missionHtml and rulesHtml may use <b>; everything else is plain text.
   Keep storeKey unchanged, or saved attempts are lost. */
window.RS_COPY = {
  storeKey: 'levelup-2bac-u5-passive-voice-q2-v1',
  heroKicker: 'LEVEL UP 2BAC · GRAMMAR · UNIT 5',
  heroTitle: 'THE PASSIVE VOICE',
  heroQuiz: 'QUIZ 2',
  heroSub: 'The Sentence Builder Challenge · 20 points',
  missionHtml: 'Build each passive sentence <b>word group by word group</b>. Start with the <b>subject</b>, then the auxiliaries in the right order (<b>is being</b>, <b>has been</b>, <b>had been</b>, <b>will be</b>, <b>should have been</b>), then the <b>past participle</b>, and finish with <b>by + the doer</b>. Tap the groups in order, then press <b>Check</b>.',
  formula: 'subject + be (being / been) + past participle (+ by + subject (the doer))',
  cats: ['🔁 is · was', '⏳ is being', '🕰️ was being', '✅ has been', '⏪ had been', '🔮 will be'],
  rulesHtml: [
    'Play the 6 games in order. Tap the word groups in order, then press <b>Check</b>. You have <b>one try</b> for each sentence.',
    'There are <b>20 sentences</b>, and each one is worth <b>1 point</b>.',
    'You see the correct sentence and the rule straight away, and you can review your mistakes at the end.'
  ],
  beforeBoss: 'Next: the BAC Final Challenge.',
  fullMarks: '🏆 Achievement unlocked: Sentence Builder Champion! Every passive sentence was built correctly.'
};

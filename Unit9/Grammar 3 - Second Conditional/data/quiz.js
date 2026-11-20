/* Unit 9 · Grammar · Second Conditional · Quiz 3 (out of 20). "What If? The Second Conditional Challenge"
   2026-11-19: moved to the Unit 10 page (shared engine). The teacher's items and keys are kept; typed answers are now
   short drop-down lists (L), the boss "If I had a car" rewrite is a sentence builder, and some distractors were
   lengthened so the key is not always the longest option.
   Points are in hundredths (50 = 0.5 point); the total must be 2000. Every item lists k = the skills it tests (RS_TAGS).
   In choice and err items the first option is the correct one; the app shuffles.
   Zero and first conditional forms appear as distractors; the Boss game is a conditional battle (zero / first / second).
   "If I was you" is avoided as an option where it could be defended; "were" is taught as the standard form for advice. */
window.RS_TAGS = [
  ['IM', 'Meaning', 'Imaginary or unlikely situations and their imagined results'],
  ['CT', 'Meaning', 'Zero, first or second? Choosing the right conditional'],
  ['PS', 'Form', 'If-clause: past simple, including irregular verbs (had, knew, spoke, bought…)'],
  ['WD', 'Form', 'Result: would / wouldn’t + infinitive (no would after if)'],
  ['WR', 'Form', 'If I were you… (were for imaginary advice)'],
  ['MD', 'Form', 'could / might in the result; questions with would'],
  ['NG', 'Form', 'Negatives: didn’t + infinitive, wouldn’t + infinitive'],
  ['UN', 'Form', 'unless = if … not'],
  ['OR', 'Form', 'Clause order: If-clause first + comma, or result first with no comma']
];

(function () {
  function L(o) { return { a: [o[0]], o: o.slice() }; }      /* a gap with its own short list, o[0] is right */
  function X(t) { return { t: t, x: 1 }; }                   /* the wrong words in the Boss error item */

  window.RS_QUIZ = {
    title: 'Second Conditional · Quiz 3',
    games: [
      { key: 'would', name: 'What Would You Do?', pts: 50, how: 'Choose the best result.', qs: [
        { t: 'choice', p: 'If you could travel anywhere in the world, …', o: ['I would visit Japan.', 'I will visit Japan.', 'I visited Japan.', 'I visit Japan every year.'], k: ['IM', 'WD'], e: 'An imaginary situation → would + infinitive. “will” is for real future possibilities (first conditional).' },
        { t: 'choice', p: 'If you won a national scholarship, …', o: ['you would study at a top university.', 'you will study at a top university.', 'you studied at a top university.', 'you would studied at a top university.'], k: ['IM', 'WD'], e: 'would + infinitive (would study), never would + past.' },
        { t: 'choice', p: 'If I were the headteacher, …', o: ['I would open the library every evening.', 'I will open the library every evening.', 'I am opening the library every evening.', 'I opened the library every evening.'], k: ['IM', 'WR', 'WD'], e: 'I am not the headteacher: an imaginary situation → I would open.' },
        { t: 'choice', p: 'If we lived in a world without the Internet, …', o: ['we would write more letters.', 'we will write more letters.', 'we write more letters.', 'we wrote more letters to friends.'], k: ['IM', 'CT'], e: 'We do have the Internet: imaginary → would write. “we write” would be the zero conditional (a general truth).' },
        { t: 'choice', p: 'If I had a million dirhams, I would build a school.', ask: 'What does this sentence tell us?', o: ['The speaker doesn’t have a million dirhams.', 'The speaker has a million dirhams.', 'The speaker will get a million dirhams soon.', 'The speaker had a million dirhams in the past.'], k: ['IM'], e: 'The past simple “had” does not mean the past here: it shows an imaginary present situation.' },
        { t: 'choice', p: 'Your friend is always tired because he goes to bed very late.', ask: 'Choose the best advice.', o: ['If I were you, I would go to bed earlier.', 'If I am you, I will go to bed earlier.', 'If I were you, I go to bed earlier.', 'If I would be you, I would go to bed earlier.'], k: ['WR', 'WD'], e: 'Advice: If I were you, I would + infinitive. No would after if.' }
      ] },
      { key: 'match', name: 'Match the Impossible', pts: 25, how: 'Tap or drag to match.', qs: [
        { t: 'match', round: 'Round 1 of 4', pairs: [
          ['If I were the school principal,', 'I would improve the library.', ['IM', 'WR']],
          ['If I had more free time,', 'I would learn another language.', ['IM']],
          ['If people stopped wasting water,', 'they would protect our resources.', ['IM']]] },
        { t: 'match', round: 'Round 2 of 4', pairs: [
          ['If I could invent something,', 'I would invent a beach-cleaning robot.', ['IM']],
          ['If I could change one thing in Morocco,', 'I would build hospitals in villages.', ['IM']],
          ['If I studied abroad,', 'I would miss my family.', ['IM']]] },
        { t: 'match', round: 'Round 3 of 4', pairs: [
          ['If my phone didn’t work,', 'I couldn’t call my friends.', ['IM', 'NG', 'MD']],
          ['If I could help homeless children,', 'I would give them a safe home.', ['IM']],
          ['If I were you,', 'I wouldn’t waste time online.', ['WR', 'NG']]] },
        { t: 'match', round: 'Round 4 of 4', pairs: [
          ['If animals could talk,', 'they would tell us their secrets.', ['IM']],
          ['If there were no cars,', 'the air would be cleaner.', ['IM']],
          ['If I didn’t have homework,', 'I might go to the cinema.', ['NG', 'MD']]] }
      ] },
      { key: 'form', name: 'Choose the Correct Form', pts: 50, how: 'Choose the correct forms.', qs: [
        { t: 'choice', p: 'If I ____ the president, I ____ more schools.', o: ['were / would build', 'am / will be building', 'was / will build', 'would be / built'], k: ['WR', 'WD'], e: 'Imaginary: If + were, would + infinitive (would build).' },
        { t: 'choice', p: 'If he ____ so hard, he would feel better.', o: ['didn’t work', 'doesn’t work', 'wouldn’t work', 'won’t work'], k: ['NG', 'PS'], e: 'Negative if-clause in the past simple: didn’t + infinitive. No would after if.' },
        { t: 'choice', p: 'If I were rich, I ____ my money on useless things.', o: ['wouldn’t waste', 'won’t be wasting', 'didn’t waste', 'don’t waste'], k: ['NG', 'WD'], e: 'Negative result: wouldn’t + infinitive.' },
        { t: 'choice', p: 'What ____ if you won a scholarship?', o: ['would you do', 'will you do', 'did you do', 'you would do'], k: ['MD', 'WD'], e: 'A question: What would you do …? (would before the subject).' },
        { t: 'choice', p: 'If she ____ a car, she could visit her grandparents.', o: ['had', 'has', 'would have', 'haves'], k: ['PS', 'MD'], e: 'have → had (past simple). could = would be able to.' },
        { t: 'choice', p: 'They might create more jobs if they ____ more in the region.', o: ['invested', 'invest', 'would invest', 'will invest'], k: ['OR', 'PS', 'MD'], e: 'Result first, no comma. The if-clause keeps the past simple: invested. might = perhaps would.' },
        { t: 'choice', p: 'If my family ____ in Agadir, I ____ to the beach every day.', o: ['lived / would go', 'lives / would go', 'lived / will go', 'would live / went'], k: ['PS', 'WD'], e: 'We don’t live there: imaginary → lived / would go.' },
        { t: 'choice', p: 'We don’t know the answer. If we ____ it, we would tell you.', o: ['knew', 'know', 'knowed', 'would know'], k: ['PS', 'IM'], e: 'know → knew (irregular past). We don’t know it, so it is imaginary.' }
      ] },
      { key: 'build', name: 'Build the Dream Sentence', pts: 80, how: 'Build it. One is extra.', qs: [
        { t: 'build', d: 'rich → help poor families', key: ['If', 'I', 'were', 'rich,', 'I', 'would', 'help', 'poor', 'families'], extra: ['will'], k: ['WR', 'WD'], e: 'If I were rich, I would help poor families. Comma after the if-clause.' },
        { t: 'build', d: 'travel abroad ← enough money (result first)', key: ['I', 'would', 'travel', 'abroad', 'if', 'I', 'had', 'enough', 'money'], extra: ['have'], k: ['OR', 'PS'], e: 'Result first, no comma. If-clause: had (past), not have.' },
        { t: 'build', d: 'no homework → go out', key: ['If', 'we', 'didn’t', 'have', 'homework,', 'we', 'would', 'go', 'out'], extra: ['don’t'], k: ['NG', 'PS'], e: 'Negative if-clause: didn’t + infinitive (didn’t have).' },
        { t: 'build', d: 'advice: if I were you → not waste my time', key: ['If', 'I', 'were', 'you,', 'I', 'wouldn’t', 'waste', 'my', 'time'], extra: ['won’t'], k: ['WR', 'NG'], e: 'Imaginary advice: If I were you, I wouldn’t + infinitive.' },
        { t: 'build', d: 'question: win a scholarship → what / do?', key: ['What', 'would', 'you', 'do', 'if', 'you', 'won', 'a', 'scholarship?'], extra: ['will'], k: ['MD', 'PS'], e: 'Question: What would you do if you won …? win → won (irregular past).' }
      ] },
      { key: 'complete', name: 'Complete the Imagination', pts: 30, how: 'Choose the verb forms.', qs: [
        { t: 'gapt', s: ['If I ', L(['had', 'have', 'would have']), ' (have) more money, I would travel.'], k: ['PS'], e: 'have → had (past simple in the if-clause).' },
        { t: 'gapt', s: ['If she were more confident, she ', L(['would apply', 'will apply', 'would applied']), ' (apply) for the job.'], k: ['WD'], e: 'Result: would + infinitive.' },
        { t: 'gapt', s: ['If I were you, I ', L(['wouldn’t waste', 'won’t waste', 'wouldn’t to waste']), ' (not / waste) my time.'], k: ['WR', 'NG'], e: 'Negative advice: wouldn’t + infinitive.' },
        { t: 'gapt', s: ['If people ', L(['cared', 'care', 'would care']), ' (care) more about nature, the world ', L(['would be', 'will be', 'would been']), ' (be) cleaner.'], k: ['PS', 'WD'], e: 'cared (past simple) · would be.' },
        { t: 'gapt', s: ['If Yassine ', L(['spoke', 'speaks', 'would speak']), ' (speak) English fluently, he ', L(['could work', 'can work', 'could worked']), ' (can / work) abroad.'], k: ['PS', 'MD'], e: 'speak → spoke (irregular). can → could in the second conditional.' },
        { t: 'gapt', s: ['If I ', L(['didn’t have', 'don’t have', 'wouldn’t have']), ' (not / have) a phone, I ', L(['would read', 'will read', 'would reads']), ' (read) more books.'], k: ['NG', 'WD'], e: 'didn’t have · would read.' },
        { t: 'gapt', s: ['If the school ', L(['bought', 'buyed', 'would buy']), ' (buy) new computers, students would learn faster.'], k: ['PS'], e: 'buy → bought (irregular past).' }
      ] },
      { key: 'boss', name: 'Conditional Battle: Boss Challenge', pts: 50, how: 'Zero, first or second?', qs: [
        { t: 'choice', round: 'Which conditional?', p: 'If I had wings, I would fly to school.', ask: 'Which conditional is this?', o: ['Second: an imaginary situation', 'First: a real future possibility', 'Zero: a general truth'], k: ['CT'], e: 'People don’t have wings: imaginary → If + past simple, would + infinitive.' },
        { t: 'err', round: 'Error correction', fr: 'Tap the wrong words:', w: ['If', 'I', 'had', 'more', 'time', ',', 'I', X('will learn'), 'Chinese', '.'],
          o: ['If I had more time, I would learn Chinese.', 'If I have more time, I would learn Chinese.', 'If I had more time, I learned Chinese.'], k: ['WD', 'CT'], e: 'had (imaginary) goes with would learn. Don’t mix the second conditional with will.' },
        { t: 'build', round: 'Sentence transformation', d: 'I don’t have a car, so I don’t visit my grandparents often. → Second conditional:', key: ['If', 'I', 'had', 'a car,', 'I', 'would visit', 'my grandparents', 'more often'], extra: ['have'], k: ['PS', 'IM'], e: 'I don’t have a car → If I had a car, I would visit my grandparents more often (imaginary).' },
        { t: 'choice', round: 'If or unless', p: 'If he didn’t study, he wouldn’t pass.', ask: 'Which sentence means the same?', o: ['Unless he studied, he wouldn’t pass.', 'Unless he didn’t study, he wouldn’t pass.', 'Unless he studies, he won’t pass.', 'Unless he studied, he would pass.'], k: ['UN'], e: 'unless = if … not, so the verb after unless is positive: Unless he studied.' },
        { t: 'choice', round: 'Were for advice', p: 'Your cousin is not sure about a scholarship in Canada.', ask: 'Choose the correct advice.', o: ['If I were you, I would accept it.', 'If I am you, I would accept it.', 'If I was you, I will accept it.', 'If I would be you, I would accept it.'], k: ['WR'], e: 'Imaginary advice: If I were you, I would …' },
        { t: 'choice', round: 'Would, could or might?', p: 'If she had a car, she ____ visit her grandparents every weekend. (= she would be able to)', o: ['could', 'can', 'will', 'should'], k: ['MD'], e: 'would be able to = could. can and will belong to real situations.' }
      ] }
    ]
  };
})();

window.RS_COPY = {
  storeKey: 'levelup-2bac-u9-second-conditional-q3-v2',
  heroKicker: 'LEVEL UP 2BAC · GRAMMAR · UNIT 9',
  heroTitle: 'SECOND CONDITIONAL',
  heroQuiz: 'QUIZ 3',
  heroSub: 'What If? The Second Conditional Challenge · 20 points',
  missionHtml: 'We use the <b>second conditional</b> for <b>imaginary or unlikely</b> situations in the present or future, and their imagined results. Remember: <b>no would after if</b>, and <b>If I were you…</b> for advice.',
  formula: 'If + past simple, would + infinitive',
  cats: ['🎓 Scholarships', '🏫 School', '🗺️ Morocco', '🌍 Environment', '💡 Inventions', '🤝 Helping others'],
  rulesHtml: [
    'Play the 6 games in order. You have <b>one try</b> for each question.',
    'Games 1–5 prepare you for game 6, the <b>Boss Challenge</b>: zero, first or second conditional?',
    'You see the correct answer and an explanation straight away, and you can review your mistakes at the end.'
  ],
  beforeBoss: 'Next: the Conditional Battle.',
  fullMarks: '🏆 Perfect! If you were a conditional, you would be the second one: imaginative and flawless!'
};

/* Unit 9 · Grammar · First Conditional · Quiz 2 (out of 10). "First Conditional Challenge: What Will Happen?"
   2026-11-19: moved to the Unit 10 page (shared engine, RS_COPY.max = 1000 keeps the teacher's 10-point total).
   The teacher's items and keys are kept; typed answers are now short drop-down lists (L), and the boss "unless"
   rewrite is a sentence builder.
   Points are in hundredths (25 = 0.25 point); the total must be 1000. Every item lists k = the skills it tests (RS_TAGS).
   In choice and err items the first option is the correct one; the app shuffles.
   Recurring challenge: zero (always true) vs first (a possible future event). "would" (second conditional) appears only as a wrong form. */
window.RS_TAGS = [
  ['FU', 'Meaning', 'A possible future situation and its likely result'],
  ['ZF', 'Meaning', 'Zero or first? A general fact vs one possible future event'],
  ['IF', 'Form', 'If-clause: present simple (no will after if)'],
  ['WL', 'Form', 'Result: will / won’t + infinitive'],
  ['SV', 'Form', 'Subject–verb agreement: he / she / it + -s'],
  ['UN', 'Form', 'unless = if … not'],
  ['MD', 'Form', 'Other results: can / may, imperatives, questions'],
  ['OR', 'Form', 'Clause order: If-clause first + comma, or result first with no comma']
];

(function () {
  function L(o) { return { a: [o[0]], o: o.slice() }; }      /* a gap with its own short list, o[0] is right */
  function X(t) { return { t: t, x: 1 }; }                   /* the wrong words in the Boss error item */

  window.RS_QUIZ = {
    title: 'First Conditional · Quiz 2',
    games: [
      { key: 'happen', name: 'What Will Happen?', pts: 25, how: 'Choose the likely result.', qs: [
        { t: 'choice', p: 'If you don’t set your alarm tonight, …', o: ['you will wake up late.', 'you woke up late.', 'you wake up late yesterday.', 'you would woke up late.'], k: ['FU', 'WL'], e: 'Tonight is a possible future situation → the result uses will + infinitive.' },
        { t: 'choice', p: 'If Morocco invests more in renewable energy, …', o: ['it will reduce its dependence on fossil fuels.', 'it reduced its dependence on fossil fuels.', 'it would reduced its dependence on fossil fuels.'], k: ['FU', 'WL'], e: 'A real plan for the future → will reduce.' },
        { t: 'choice', p: 'If it rains on Saturday, …', o: ['we won’t play the match.', 'we didn’t play the match.', 'we don’t played the match.'], k: ['FU', 'WL'], e: 'Negative result → won’t (will not) + infinitive.' },
        { t: 'choice', p: 'If you see Ms Bennani at school, …', o: ['tell her I’m ill.', 'you told her I’m ill.', 'you tells her I’m ill.'], k: ['MD'], e: 'The result can be an imperative (an instruction): tell her.' },
        { t: 'choice', p: 'Which sentence is about a possible event in the future?', o: ['If the temperature rises tomorrow, the ice will melt.', 'If you heat ice, it melts.', 'If the temperature will rise tomorrow, the ice melts.'], k: ['ZF', 'IF'], e: '“tomorrow” = one possible future event → first conditional. “If you heat ice, it melts” is a general fact (zero conditional).' },
        { t: 'choice', p: 'If you finish your test early, …', o: ['you can leave the room.', 'you can left the room.', 'you will can leave the room.'], k: ['MD'], e: 'can + infinitive also works in the result: you can leave (never will can).' }
      ] },
      { key: 'match', name: 'Match the Condition and Result', pts: 25, how: 'Tap or drag to match.', qs: [
        { t: 'match', round: 'Round 1 of 2', pairs: [
          ['If you revise regularly,', 'you will improve your marks.', ['FU']],
          ['If we waste water,', 'we will face shortages.', ['FU']],
          ['If she misses the bus,', 'she will arrive late.', ['FU', 'SV']]] },
        { t: 'match', round: 'Round 2 of 2', pairs: [
          ['If drivers ignore red lights,', 'they may cause an accident.', ['FU', 'MD']],
          ['If you eat fast food every day,', 'you will put on weight.', ['FU']],
          ['If AI does all our homework,', 'we won’t learn anything.', ['FU', 'WL']]] }
      ] },
      { key: 'form', name: 'Choose the Correct Verb Form', pts: 25, how: 'Choose the correct forms.', qs: [
        { t: 'choice', p: 'If students ____ regularly, they ____ better results.', o: ['practise / will get', 'will practise / get', 'practised / will get', 'practise / got'], k: ['IF', 'WL'], e: 'If + present simple (practise), will + infinitive (will get). No will after if.' },
        { t: 'choice', p: 'If he ____, he will miss the bus.', o: ['doesn’t hurry', 'won’t hurry', 'don’t hurry', 'wouldn’t hurry'], k: ['IF', 'SV'], e: 'he → doesn’t hurry: present simple negative in the if-clause, not won’t.' },
        { t: 'choice', p: 'We ____ at home if it ____ tomorrow.', o: ['will stay / rains', 'stay / will rain', 'will stay / will rain', 'would stay / rains'], k: ['OR', 'IF', 'SV'], e: 'Result first: will stay; the if-clause keeps the present simple: it rains.' },
        { t: 'choice', p: 'What ____ if you fail the exam?', o: ['will you do', 'you will do', 'do you will', 'would you did'], k: ['MD', 'WL'], e: 'A question in the result: What will you do …? (will before the subject).' },
        { t: 'choice', p: 'Unless you ____, you ____ improve.', o: ['practise / won’t', 'don’t practise / won’t', 'practise / will', 'will practise / won’t'], k: ['UN'], e: 'unless = if … not, so the verb after unless is positive: Unless you practise = If you don’t practise.' },
        { t: 'choice', p: 'If my brother ____ his driving test, my father ____ him a car.', o: ['passes / will buy', 'pass / will buy', 'will pass / buys', 'passed / will buy'], k: ['SV', 'IF'], e: 'my brother (he) → passes; result → will buy.' },
        { t: 'choice', p: 'Look at those clouds! If it ____ this afternoon, the match ____ cancelled.', o: ['rains / will be', 'will rain / is', 'rained / would be', 'rains / is'], k: ['ZF', 'WL'], e: '“this afternoon” is one possible future event → first conditional: rains / will be. Not a general fact.' },
        { t: 'choice', p: 'If you ____ your homework early, you ____ watch the film with us.', o: ['finish / can', 'will finish / can', 'finished / can', 'finish / will can'], k: ['MD', 'IF'], e: 'If + present simple; the result can use can + infinitive.' }
      ] },
      { key: 'build', name: 'Build the Future Condition', pts: 40, how: 'Build it. One is extra.', qs: [
        { t: 'build', d: 'study hard → pass the exam', key: ['If', 'you', 'study', 'hard,', 'you', 'will', 'pass', 'the', 'exam'], extra: ['would'], k: ['IF', 'WL'], e: 'If + present simple, will + infinitive: If you study hard, you will pass the exam.' },
        { t: 'build', d: 'not hurry → miss the train (result first)', key: ['She', 'will', 'miss', 'the', 'train', 'if', 'she', 'doesn’t', 'hurry'], extra: ['won’t'], k: ['OR', 'IF', 'SV'], e: 'Result first, no comma. After if: doesn’t hurry (not won’t).' },
        { t: 'build', d: 'rain → no football', key: ['If', 'it', 'rains,', 'we', 'won’t', 'play', 'football'], extra: ['will'], k: ['WL', 'IF'], e: 'Negative result: won’t + infinitive. After if: rains, not will rain.' },
        { t: 'build', d: 'unless + practise → not improve', key: ['Unless', 'you', 'practise,', 'you', 'won’t', 'improve'], extra: ['don’t'], k: ['UN', 'WL'], e: 'Unless you practise = If you don’t practise. No “don’t” after unless.' },
        { t: 'build', d: 'finish early → leave (can)', key: ['If', 'you', 'finish', 'early,', 'you', 'can', 'leave'], extra: ['will'], k: ['MD'], e: 'can + infinitive in the result: you can leave (not will can).' }
      ] },
      { key: 'complete', name: 'Complete the Future', pts: 25, how: 'Choose the verb forms.', qs: [
        { t: 'gapt', s: ['If I see Ahmed, I ', L(['will tell', 'tell', 'would tell']), ' (tell) him.'], k: ['WL'], e: 'Result → will + infinitive: I will tell him.' },
        { t: 'gapt', s: ['She will miss the train if she ', L(['doesn’t hurry', 'won’t hurry', 'don’t hurry']), ' (not hurry).'], k: ['IF', 'SV', 'OR'], e: 'After if: present simple, she → doesn’t hurry.' },
        { t: 'gapt', s: ['Unless you study, you ', L(['won’t pass', 'don’t pass', 'wouldn’t pass']), ' (not pass) the exam.'], k: ['UN', 'WL'], e: 'Negative result → won’t pass. Unless you study = If you don’t study.' },
        { t: 'gapt', s: ['If the government ', L(['builds', 'will build', 'build']), ' (build) more schools in rural areas, fewer children ', L(['will leave', 'leave', 'would leave']), ' (leave) school early.'], k: ['IF', 'SV', 'WL'], e: 'the government (it) → builds; result → will leave.' },
        { t: 'gapt', s: ['If a driver ', L(['uses', 'will use', 'use']), ' (use) his phone while driving, he may cause an accident.'], k: ['IF', 'SV', 'MD'], e: 'a driver (he) → uses. The result here uses may.' }
      ] },
      { key: 'boss', name: 'First Conditional Boss Challenge', pts: 30, how: 'The final challenge.', qs: [
        { t: 'err', round: 'Error correction', fr: 'Tap the wrong words:', w: ['If', 'it', X('will rain'), 'tomorrow', ',', 'we', 'will', 'stay', 'at', 'home', '.'],
          o: ['If it rains tomorrow, we will stay at home.', 'If it rained tomorrow, we will stay at home.', 'If it rain tomorrow, we will stay at home.'], k: ['IF', 'SV'], e: 'No will after if: If it rains tomorrow (it → rains).' },
        { t: 'build', round: 'Sentence transformation', d: 'If you don’t leave now, you will miss the bus. → Rewrite with unless.', key: ['Unless', 'you', 'leave', 'now,', 'you', 'will', 'miss', 'the', 'bus'], extra: ['don’t'], k: ['UN'], e: 'If you don’t leave = Unless you leave (positive verb after unless).' },
        { t: 'gapt', round: 'Complete the prediction', s: ['If temperatures keep rising, Morocco ', L(['will face', 'faces', 'would face']), ' (face) more droughts.'], k: ['WL', 'FU'], e: 'A prediction about the future → will face.' },
        { t: 'choice', round: 'Choose the right sentence', p: 'Your team plays the final tomorrow. What do you say?', o: ['If we win tomorrow, we will celebrate.', 'If we will win tomorrow, we celebrate.', 'If we won tomorrow, we will celebrate.', 'If we win tomorrow, we celebrated.'], k: ['FU', 'IF', 'ZF'], e: 'One possible future event → If + present simple, will + infinitive.' },
        { t: 'build', round: 'Sentence construction', d: 'catch a cold ← unless you wear a coat (result first)', key: ['You', 'will', 'catch', 'a', 'cold', 'unless', 'you', 'wear', 'a', 'coat'], extra: ['don’t'], k: ['UN', 'OR'], e: 'Result first, no comma: You will catch a cold unless you wear a coat.' }
      ] }
    ]
  };
})();

window.RS_COPY = {
  max: 1000,
  storeKey: 'levelup-2bac-u9-first-conditional-q2-v2',
  heroKicker: 'LEVEL UP 2BAC · GRAMMAR · UNIT 9',
  heroTitle: 'FIRST CONDITIONAL',
  heroQuiz: 'QUIZ 2',
  heroSub: 'First Conditional Challenge: What Will Happen? · 10 points',
  missionHtml: 'We use the <b>first conditional</b> for a <b>possible situation in the future</b> and its likely result: predictions, warnings, promises. Remember: <b>no will after if</b>.',
  formula: 'If + present simple, will + infinitive',
  cats: ['📝 Exams', '🌍 Environment', '🤖 Technology', '💪 Health', '🚦 Road safety', '💼 Jobs'],
  rulesHtml: [
    'Play the 6 games in order. You have <b>one try</b> for each question.',
    'Games 1–5 prepare you for game 6, the <b>Boss Challenge</b>: you correct, complete and rebuild sentences.',
    'You see the correct answer and an explanation straight away, and you can review your mistakes at the end.'
  ],
  beforeBoss: 'Next: the Boss Challenge.',
  fullMarks: '🏆 Perfect! If you keep working like this, you will ace the national exam!'
};

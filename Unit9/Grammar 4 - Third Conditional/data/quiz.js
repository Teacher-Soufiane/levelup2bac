/* Unit 9 · Grammar · Third Conditional · Quiz 4 (out of 20). "The Third Conditional Challenge: What Would Have Happened?"
   2026-11-19: moved to the Unit 10 page (shared engine). The teacher's items and keys are kept; typed answers are now
   short drop-down lists (L), and some distractors were lengthened so the key is not always the longest option.
   Points are in hundredths (50 = 0.5 point); the total must be 2000. Every item lists k = the skills it tests (RS_TAGS).
   In choice and err items the first option is the correct one; the app shuffles.
   Second-conditional forms are distractors; the Boss distinguishes second (imaginary present) from third (imaginary past).
   Grammar Race stays untimed. */
window.RS_TAGS = [
  ['IP', 'Meaning', 'Imaginary past: what really happened vs what did not happen'],
  ['ST', 'Meaning', 'Second or third? Imaginary present vs imaginary past'],
  ['PP', 'Form', 'If-clause: had + past participle (no would have after if)'],
  ['WH', 'Form', 'Result: would have + past participle'],
  ['IR', 'Form', 'Irregular past participles: gone, seen, written, taken, known…'],
  ['NG', 'Form', 'Negatives and contractions: hadn’t, wouldn’t have'],
  ['QN', 'Form', 'Questions: What would you have done if …?'],
  ['OR', 'Form', 'Clause order: If-clause first + comma, or result first with no comma']
];

(function () {
  function L(o) { return { a: [o[0]], o: o.slice() }; }      /* a gap with its own short list, o[0] is right */
  function X(t) { return { t: t, x: 1 }; }                   /* the wrong words in the Boss error item */

  window.RS_QUIZ = {
    title: 'Third Conditional · Quiz 4',
    games: [
      { key: 'detect', name: 'Past or Impossible?', pts: 50, how: 'What does it really mean?', qs: [
        { t: 'choice', p: 'If Sara had left earlier, she would have caught the bus.', ask: 'What really happened?', o: ['Sara left late and missed the bus.', 'Sara left early and caught the bus.', 'Sara will leave early tomorrow.', 'Sara usually catches the bus.'], k: ['IP'], e: 'The third conditional imagines the opposite of the past: she did NOT leave early, so she missed the bus.' },
        { t: 'choice', p: 'If Karim hadn’t forgotten his calculator, he would have finished the maths exam.', ask: 'What really happened?', o: ['Karim forgot his calculator and didn’t finish.', 'Karim had his calculator and finished.', 'Karim will forget his calculator next time.', 'Karim never uses a calculator in his maths exams.'], k: ['IP', 'NG'], e: 'hadn’t forgotten = in reality he forgot it, so he didn’t finish.' },
        { t: 'choice', p: 'Which sentence describes an imaginary past?', o: ['If we had planted more trees, our school would have won the prize.', 'We planted lots of trees, and so our school won the national prize.', 'If we plant more trees, our school will win the prize.', 'If we planted more trees, our school would win the prize.'], k: ['IP', 'ST'], e: 'had planted / would have won = something that did not happen in the past (third conditional).' },
        { t: 'choice', p: 'If I had known about the scholarship, I would have applied.', ask: 'Why didn’t the speaker apply?', o: ['The speaker didn’t know about it.', 'The speaker wasn’t interested in it.', 'The speaker applied too late.', 'The speaker will apply next year.'], k: ['IP', 'IR'], e: 'had known = in reality the speaker did not know (know → known).' },
        { t: 'choice', p: 'If my parents had let me, I would have studied in Canada.', ask: 'What is true?', o: ['The speaker didn’t study in Canada.', 'The speaker studied in Canada.', 'The speaker is studying in Canada now.', 'The parents let the speaker go.'], k: ['IP'], e: 'The parents did not let the speaker go, so the speaker did not study in Canada.' },
        { t: 'choice', p: 'If I had a car, I would drive to school.', ask: 'Is this about the present or the past?', o: ['An imaginary present (second conditional)', 'An imaginary past (third conditional)', 'A real future possibility (first conditional)'], k: ['ST'], e: 'had (past simple) + would drive = imaginary now. The past would be: If I had had a car, I would have driven.' }
      ] },
      { key: 'match', name: 'Match the Past', pts: 25, how: 'Tap or drag to match.', qs: [
        { t: 'match', round: 'Round 1 of 4', pairs: [
          ['If Ali had set his alarm,', 'he wouldn’t have arrived late.', ['IP', 'NG']],
          ['If we had taken a taxi,', 'we would have caught the train.', ['IP', 'IR']],
          ['If she had revised more,', 'she would have passed the exam.', ['IP']]] },
        { t: 'match', round: 'Round 2 of 4', pairs: [
          ['If they had saved more water,', 'the crops wouldn’t have died.', ['IP', 'NG']],
          ['If I had seen you,', 'I would have said hello.', ['IP', 'IR']],
          ['If he hadn’t lost his ticket,', 'he would have seen the concert.', ['IP', 'NG']]] },
        { t: 'match', round: 'Round 3 of 4', pairs: [
          ['If you had told me,', 'I would have helped you.', ['IP']],
          ['If Hind had applied in time,', 'she would have got the scholarship.', ['IP']],
          ['If it hadn’t rained,', 'we would have gone to the beach.', ['IP', 'IR']]] },
        { t: 'match', round: 'Round 4 of 4', pairs: [
          ['If my father had taken the job,', 'we would have moved to Rabat.', ['IP', 'IR']],
          ['If they had checked the weather,', 'they wouldn’t have gone hiking.', ['IP', 'NG']],
          ['If I had known the answer,', 'I would have raised my hand.', ['IP', 'IR']]] }
      ] },
      { key: 'race', name: 'Grammar Race', pts: 50, how: 'Choose the correct forms.', qs: [
        { t: 'choice', p: 'If they ____ earlier, they ____ the train.', o: ['had left / would have caught', 'left / would catch', 'have left / will catch', 'would have left / had caught'], k: ['PP', 'WH'], e: 'Imaginary past: If + had left, would have caught.' },
        { t: 'choice', p: 'If she ____ her keys, she wouldn’t have been locked out.', o: ['hadn’t forgotten', 'didn’t forget', 'wouldn’t have forgotten', 'hasn’t forgotten'], k: ['NG', 'PP'], e: 'Negative if-clause: hadn’t + past participle. Never would have after if.' },
        { t: 'choice', p: 'What ____ if you had won the competition?', o: ['would you have done', 'would you do', 'will you have done', 'would have you done'], k: ['QN', 'WH'], e: 'Question: What would you have done … ? (would + subject + have + participle).' },
        { t: 'choice', p: 'If I had studied harder, I ____ the exam.', o: ['would have passed', 'would passed', 'will have passed', 'would have been passed'], k: ['WH'], e: 'Result: would have + past participle (would have passed).' },
        { t: 'choice', p: 'We ____ the film if we had arrived on time.', o: ['would have seen', 'would have saw', 'would see', 'would have been seen'], k: ['IR', 'OR', 'WH'], e: 'see → saw → seen: would have seen. Result first, no comma.' },
        { t: 'choice', p: 'If he ____ the truth, he would have told us.', o: ['had known', 'had knew', 'would have known', 'has known'], k: ['IR', 'PP'], e: 'know → knew → known: had known.' },
        { t: 'choice', p: 'If they ____ the bus, they wouldn’t have walked home.', o: ['had taken', 'had took', 'took', 'would have taken'], k: ['IR', 'PP'], e: 'take → took → taken: had taken.' },
        { t: 'choice', p: 'If you ____ me, I would have helped you.', o: ['had asked', 'would have asked', 'asked', 'have asked'], k: ['PP'], e: 'If + had + past participle: had asked.' }
      ] },
      { key: 'build', name: 'Build the Regret', pts: 80, how: 'Build it. One is extra.', qs: [
        { t: 'build', d: 'practise → win the competition', key: ['If', 'she', 'had practised,', 'she', 'would have', 'won', 'the competition'], extra: ['would practise'], k: ['PP', 'WH'], e: 'If she had practised, she would have won the competition.' },
        { t: 'build', d: 'pass ← study harder (result first)', key: ['I', 'would have', 'passed', 'if', 'I', 'had studied', 'harder'], extra: ['would have studied'], k: ['OR', 'PP'], e: 'Result first, no comma. No would have after if.' },
        { t: 'build', d: 'not forget the keys → not locked out', key: ['If', 'she', 'hadn’t forgotten', 'her keys,', 'she', 'wouldn’t have', 'been', 'locked out'], extra: ['didn’t forget'], k: ['NG', 'IR'], e: 'hadn’t forgotten · wouldn’t have been (be → been).' },
        { t: 'build', d: 'question: win the scholarship → what / do?', key: ['What', 'would you have', 'done', 'if', 'you', 'had won', 'the scholarship?'], extra: ['would have won'], k: ['QN', 'IR'], e: 'What would you have done if you had won …? (do → done).' },
        { t: 'build', d: 'not miss the bus ← leave earlier (result first)', key: ['We', 'wouldn’t have', 'missed', 'the bus', 'if', 'we', 'had left', 'earlier'], extra: ['would leave'], k: ['OR', 'NG'], e: 'Result first: We wouldn’t have missed the bus if we had left earlier.' }
      ] },
      { key: 'complete', name: 'Complete the Missed Opportunity', pts: 30, how: 'Choose the verb forms.', qs: [
        { t: 'gapt', s: ['If we ', L(['had left', 'left', 'would have left']), ' (leave) home earlier, we ', L(['wouldn’t have missed', 'wouldn’t miss', 'wouldn’t have been missed']), ' (not miss) the match.'], k: ['PP', 'NG'], e: 'had left · wouldn’t have missed.' },
        { t: 'gapt', s: ['If I ', L(['had known', 'had knew', 'would have known']), ' (know) about the competition, I ', L(['would have taken', 'would have took', 'would take']), ' (take) part.'], k: ['IR', 'WH'], e: 'know → known; take → taken.' },
        { t: 'gapt', s: ['If Yasmine ', L(['had gone', 'had went', 'would have gone']), ' (go) to bed earlier, she wouldn’t have felt tired.'], k: ['IR', 'PP'], e: 'go → went → gone: had gone.' },
        { t: 'gapt', s: ['The teacher ', L(['would have seen', 'would have saw', 'would see']), ' (see) the mistake if she ', L(['had read', 'would have read', 'have read']), ' (read) the essay carefully.'], k: ['IR', 'OR'], e: 'Result first: would have seen · had read (read → read → read).' },
        { t: 'gapt', s: ['If he ', L(['hadn’t eaten', 'hadn’t ate', 'wouldn’t have eaten']), ' (not eat) so much, he wouldn’t have been ill.'], k: ['NG', 'IR'], e: 'eat → ate → eaten: hadn’t eaten.' },
        { t: 'gapt', s: ['If they ', L(['had written', 'had wrote', 'would have written']), ' (write) to the university, they ', L(['would have got', 'would get', 'would have getting']), ' (get) a reply.'], k: ['IR', 'WH'], e: 'write → written · would have got.' }
      ] },
      { key: 'boss', name: 'Third Conditional Boss: The Final Challenge', pts: 50, how: 'Imaginary past or present?', qs: [
        { t: 'err', round: 'Error correction', fr: 'Tap the wrong words:', w: ['If', 'I', X('would have studied'), 'harder', ',', 'I', 'would', 'have', 'passed', '.'],
          o: ['If I had studied harder, I would have passed.', 'If I studied harder, I would have passed.', 'If I had studied harder, I would passed.'], k: ['PP'], e: 'Never would have in the if-clause: If I had studied …' },
        { t: 'gapt', round: 'Sentence transformation', d: 'I didn’t revise, so I failed the test.', fr: 'Complete the third conditional:', s: ['If I ', L(['had revised', 'revised', 'would have revised']), ', I ', L(['wouldn’t have failed', 'wouldn’t fail', 'wouldn’t have been failed']), ' the test.'], k: ['PP', 'NG', 'IP'], e: 'didn’t revise → had revised; failed → wouldn’t have failed.' },
        { t: 'gapt', round: 'Regret', d: 'I didn’t take my umbrella, and I got wet.', s: ['If I ', L(['had taken', 'had took', 'would have taken']), ' my umbrella, I wouldn’t have got wet.'], k: ['IR', 'IP'], e: 'take → taken: If I had taken my umbrella …' },
        { t: 'choice', round: 'Second or third?', p: 'Last summer I didn’t have a job. ____ a job, I would have saved some money.', o: ['If I had had', 'If I had', 'If I would have had', 'If I have'], k: ['ST', 'PP'], e: 'Past (last summer) → had + had: If I had had a job. “If I had” = imaginary present.' },
        { t: 'choice', round: 'Second or third?', p: 'Which sentence is about the past?', o: ['If she had worked harder, she would have got the job.', 'If she worked harder, she would get the job.', 'If she works much harder next year, she will get the job.'], k: ['ST'], e: 'had worked + would have got = imaginary past. worked + would get = imaginary present.' }
      ] }
    ]
  };
})();

window.RS_COPY = {
  storeKey: 'levelup-2bac-u9-third-conditional-q4-v2',
  heroKicker: 'LEVEL UP 2BAC · GRAMMAR · UNIT 9',
  heroTitle: 'THIRD CONDITIONAL',
  heroQuiz: 'QUIZ 4',
  heroSub: 'The Third Conditional Challenge: What Would Have Happened? · 20 points',
  missionHtml: 'We use the <b>third conditional</b> for an <b>imaginary past</b>: things that did not happen, missed opportunities, regrets and their imagined results. Remember: <b>no would have after if</b>.',
  formula: 'If + past perfect, would have + past participle',
  cats: ['📝 Exams', '🚌 Missed buses', '🏆 Competitions', '🎓 Scholarships', '🌱 Projects', '👪 Family'],
  rulesHtml: [
    'Play the 6 games in order. You have <b>one try</b> for each question.',
    'Games 1–5 prepare you for game 6, the <b>Boss Challenge</b>: imaginary past or imaginary present?',
    'You see the correct answer and an explanation straight away, and you can review your mistakes at the end.'
  ],
  beforeBoss: 'Next: the Boss Challenge.',
  fullMarks: '🏆 Bonus achievement unlocked: Perfect score! If you hadn’t worked so hard, you wouldn’t have made it!'
};

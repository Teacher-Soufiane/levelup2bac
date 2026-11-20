/* Unit 1 · Grammar · Gerund and Infinitive · Quiz 1 (out of 20). On the Unit 10 Grammar page (2026-11-19).
   Points are in hundredths (100 = 1 point); the total must be 2000. Every item lists k = the skills it tests (RS_TAGS).
   In choice items the first option is the correct one; the app shuffles.
   The teacher's 20 questions are kept word for word (levels 1–8 grouped into 6 games). Only change: in the three
   "Understand Meaning" items one wrong option was lengthened so the right answer is not always the longest. */
window.RS_TAGS = [
  ['GE', 'Verb patterns', 'verb + -ing (enjoy, consider, suggest, mind, admit…)'],
  ['IN', 'Verb patterns', 'verb + to + verb (decide, promise, manage, refuse…)'],
  ['PR', 'Verb patterns', 'preposition + -ing (without, before…)'],
  ['MN', 'Meaning', 'meaning changes: stop / remember / try + -ing or to'],
  ['SM', 'Meaning', 'same meaning with another verb pattern']
];

(function () {
  window.RS_QUIZ = {
    title: 'Gerund & Infinitive · Quiz 1',
    games: [
      { key: 'form', name: 'Choose the Correct Form', pts: 100, how: 'Choose the correct form.', qs: [
        { t: 'choice', p: 'My brother enjoys ______ chess with his grandfather every weekend.', o: ['playing', 'play', 'to play', 'played'], k: ['GE'], e: "'Enjoy' is always followed by a gerund (verb + -ing)." },
        { t: 'choice', p: 'After the meeting, the manager decided ______ a new marketing strategy.', o: ['to launch', 'launching', 'launch', 'launched'], k: ['IN'], e: "'Decide' is always followed by an infinitive (to + verb)." },
        { t: 'choice', p: 'Many 2BAC students consider ______ abroad after finishing high school.', o: ['studying', 'study', 'to study', 'studied'], k: ['GE'], e: "'Consider' is always followed by a gerund (verb + -ing)." },
        { t: 'choice', p: 'The company promised ______ the salaries of its employees next year.', o: ['to raise', 'raising', 'raise', 'raised'], k: ['IN'], e: "'Promise' is always followed by an infinitive (to + verb)." },
        { t: 'choice', p: 'The teacher suggested ______ the essay carefully before submitting it.', o: ['revising', 'revise', 'to revise', 'revised'], k: ['GE'], e: "'Suggest' is always followed by a gerund (verb + -ing)." },
        { t: 'choice', p: 'Despite the heavy traffic, she managed ______ at the airport on time.', o: ['to arrive', 'arriving', 'arrive', 'arrived'], k: ['IN'], e: "'Manage' is always followed by an infinitive (to + verb)." }
      ] },
      { key: 'pattern', name: 'Know the Pattern', pts: 100, how: 'Which pattern follows this verb?', qs: [
        { t: 'choice', p: 'Which pattern follows the verb "admit"?', o: ['admit + verb-ing', 'admit + to + verb', 'admit + verb', 'admit + past participle'], k: ['GE'], e: "'Admit' takes the gerund pattern: admit + verb-ing." },
        { t: 'choice', p: 'Which pattern follows the verb "refuse"?', o: ['refuse + to + verb', 'refuse + verb-ing', 'refuse + verb', 'refuse + past participle'], k: ['IN'], e: "'Refuse' takes the infinitive pattern: refuse + to + verb." },
        { t: 'choice', p: 'Which pattern follows the verb "postpone"?', o: ['postpone + verb-ing', 'postpone + to + verb', 'postpone + verb', 'postpone + infinitive without to'], k: ['GE'], e: "'Postpone' takes the gerund pattern: postpone + verb-ing." }
      ] },
      { key: 'error', name: 'Find and Correct the Error', pts: 100, how: 'Choose the correct version.', qs: [
        { t: 'choice', p: '❌ Do you mind to open the window, please?', o: ['Do you mind opening the window, please?', 'Do you mind open the window, please?', 'Do you mind to opening the window, please?', 'Do you mind opened the window, please?'], k: ['GE'], e: "'Mind' must be followed by a gerund, not an infinitive — 'mind opening', not 'mind to open'." },
        { t: 'choice', p: '❌ He expects passing the exam without much preparation.', o: ['He expects to pass the exam without much preparation.', 'He expects pass the exam without much preparation.', 'He expects to passing the exam without much preparation.', 'He expects passed the exam without much preparation.'], k: ['IN'], e: "'Expect' must be followed by an infinitive, not a gerund — 'expects to pass', not 'expects passing'." }
      ] },
      { key: 'meaning', name: 'Understand Meaning', pts: 100, how: 'Choose the correct meaning.', qs: [
        { t: 'choice', p: 'On the way home, he stopped to buy some bread.', ask: 'What does this sentence mean?', o: ['He paused another activity in order to buy bread.', 'He gave up the habit of buying bread on his way home.', 'He forgot to buy bread.', 'He never buys bread anymore.'], k: ['MN'], e: "'Stop + infinitive' means pausing one activity in order to do another — here, stopping in order to buy bread." },
        { t: 'choice', p: 'I remember meeting your sister at the wedding.', ask: 'What does this sentence mean?', o: ['I have a memory of meeting her in the past.', 'I must not forget to meet her at the wedding next week.', 'I plan to meet her soon.', 'I have never met her.'], k: ['MN'], e: "'Remember + gerund' refers to recalling something that already happened." },
        { t: 'choice', p: 'She tried restarting the computer to fix the problem.', ask: 'What does this sentence mean?', o: ['She experimented with restarting the computer as a possible solution.', 'She made a very great effort to restart the computer, but it was too difficult.', 'She refused to restart the computer.', 'She forgot how to restart the computer.'], k: ['MN'], e: "'Try + gerund' means experimenting with a possible method to solve a problem." }
      ] },
      { key: 'context', name: 'Same Meaning & Context', pts: 100, how: 'Same meaning, or complete the situation.', qs: [
        { t: 'choice', p: 'He trained every day so as not to lose the match.', ask: 'Choose the sentence with the same meaning:', o: ['He trained every day to avoid losing the match.', 'He refused to train every day for the match.', 'He denied training every day for the match.', 'He risked losing the match by training every day.'], k: ['SM', 'GE'], e: "'So as not to do X' and 'to avoid doing X' both express the purpose of preventing something, using the gerund after 'avoid'." },
        { t: 'choice', p: 'He proposed helping us move house next weekend.', ask: 'Choose the sentence with the same meaning:', o: ['He offered to help us move house next weekend.', 'He suggested to help us move house next weekend.', 'He denied helping us move house next weekend.', 'He avoided helping us move house next weekend.'], k: ['SM', 'IN'], e: "'Propose helping' and 'offer to help' both express a genuine offer of assistance, using the infinitive after 'offer'." },
        { t: 'choice', p: 'Yasmine wants to improve her pronunciation before the oral exam. She intends ______ with a language app every night.', o: ['to practise', 'practising', 'practise', 'practised'], k: ['IN'], e: "'Intend' is always followed by an infinitive (to + verb)." },
        { t: 'choice', p: 'Karim was in a hurry to catch the last bus home, so he left the classroom without ______ goodbye to his classmates.', o: ['saying', 'say', 'to say', 'said'], k: ['PR'], e: "A preposition (here, 'without') is always followed by a gerund, never an infinitive — 'without saying', not 'without to say'." }
      ] },
      { key: 'boss', name: 'Final Challenge: Mixed Grammar', pts: 100, how: 'Choose the correct sentence.', qs: [
        { t: 'choice', p: '', o: ['He denied stealing the money but agreed to pay for the damage.', 'He denied to steal the money but agreed paying for the damage.', 'He denied stealing the money but agreed paying for the damage.', 'He denied to steal the money but agreed to pay for the damage.'], k: ['GE', 'IN'], e: "'Deny' takes the gerund ('denied stealing') and 'agree' takes the infinitive ('agreed to pay')." },
        { t: 'choice', p: '', o: ["She risked losing her job by arriving late every day, but she couldn't afford to complain.", "She risked to lose her job by arriving late every day, but she couldn't afford complaining.", "She risked losing her job by arriving late every day, but she couldn't afford complaining.", "She risked to lose her job by arriving late every day, but she couldn't afford to complain."], k: ['GE', 'IN'], e: "'Risk' takes the gerund ('risked losing') and 'afford' takes the infinitive ('afford to complain')." }
      ] }
    ]
  };
})();
/* Page text and storage key (read by app.js, the same file as in every Unit 10 Grammar quiz).
   missionHtml and rulesHtml may use <b>; everything else is plain text. Keep storeKey unchanged, or saved attempts are lost. */
window.RS_COPY = {
  storeKey: 'levelup-2bac-u1-gerund-infinitive-q1-v1',
  heroKicker: 'LEVEL UP 2BAC · GRAMMAR · UNIT 1',
  heroTitle: 'GERUND & INFINITIVE',
  heroQuiz: 'QUIZ 1',
  heroSub: 'The Gerund & Infinitive Challenge · 20 points',
  missionHtml: 'Some verbs are followed by a <b>gerund</b> (verb + -ing), others by an <b>infinitive</b> (to + verb). After a <b>preposition</b> we always use -ing, and some verbs change their <b>meaning</b>. Before you choose, ask: which <b>pattern</b> does this verb take?',
  formula: 'verb + ‑ing · verb + to + verb · preposition + ‑ing',
  cats: ['🔁 verb + ‑ing', '🎯 verb + to', '📍 prep + ‑ing', '🛑 stop', '🧠 remember', '🔧 try'],
  rulesHtml: [
    'Play the 6 games in order. You have <b>one try</b> for each question.',
    'There are <b>20 questions</b>, and each one is worth <b>1 point</b>.',
    'You see the correct answer and an explanation straight away, and you can review your mistakes at the end.'
  ],
  beforeBoss: 'Next: the Final Challenge.',
  fullMarks: '🏆 Achievement unlocked: Gerund & Infinitive Champion! You are ready for the national exam.'
};

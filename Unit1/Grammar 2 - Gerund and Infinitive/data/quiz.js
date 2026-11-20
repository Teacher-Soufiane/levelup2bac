/* Unit 1 · Grammar · Gerund and Infinitive · Quiz 2 (out of 20). On the Unit 10 Grammar page (2026-11-19).
   Points are in hundredths (100 = 1 point); the total must be 2000. Every item lists k = the skills it tests (RS_TAGS).
   In choice items the first option is the correct one; the app shuffles.
   The teacher's 20 questions are kept word for word (levels 1–8 grouped into 6 games). Only change: in two items
   (Youssef, Ali) one wrong option was lengthened so the right answer is not always the longest. */
window.RS_TAGS = [
  ['GE', 'Verb patterns', 'verb + -ing (appreciate, discuss, finish, keep, miss…)'],
  ['IN', 'Verb patterns', 'verb + to + verb (want, pretend, hope, arrange…)'],
  ['BI', 'Verb patterns', 'bare infinitive: after make and modal verbs'],
  ['PR', 'Verb patterns', 'preposition + -ing (before, look forward to…)'],
  ['MN', 'Meaning', 'expressions and meaning: never forget, can’t help, look forward to'],
  ['SM', 'Meaning', 'same meaning with another verb pattern']
];

(function () {
  window.RS_QUIZ = {
    title: 'Gerund & Infinitive · Quiz 2',
    games: [
      { key: 'form', name: 'Choose the Correct Form', pts: 100, how: 'Choose the correct form.', qs: [
        { t: 'choice', p: 'The committee appreciated ______ so much effort into organizing the charity event.', o: ['putting', 'put', 'to put', 'puts'], k: ['GE'], e: "'Appreciate' is always followed by a gerund (verb + -ing)." },
        { t: 'choice', p: 'The new student wants ______ friends quickly at his new school.', o: ['to make', 'making', 'make', 'made'], k: ['IN'], e: "'Want' is always followed by an infinitive (to + verb)." },
        { t: 'choice', p: 'The two ministers discussed ______ the new education reform at the press conference.', o: ['announcing', 'announce', 'to announce', 'announced'], k: ['GE'], e: "'Discuss' is always followed by a gerund (verb + -ing)." },
        { t: 'choice', p: 'The young actor pretended ______ surprised when he won the award, although he already knew.', o: ['to be', 'being', 'be', 'been'], k: ['IN'], e: "'Pretend' is always followed by an infinitive (to + verb)." },
        { t: 'choice', p: 'The workers finally finished ______ the new bridge after eighteen months of construction.', o: ['building', 'build', 'to build', 'built'], k: ['GE'], e: "'Finish' is always followed by a gerund (verb + -ing)." },
        { t: 'choice', p: 'Moroccan universities hope ______ more international students in the coming years.', o: ['to attract', 'attracting', 'attract', 'attracted'], k: ['IN'], e: "'Hope' is always followed by an infinitive (to + verb)." }
      ] },
      { key: 'pattern', name: 'Know the Pattern', pts: 100, how: 'Which pattern follows this verb?', qs: [
        { t: 'choice', p: 'Which pattern follows the verb "keep"?', o: ['keep + verb-ing', 'keep + to + verb', 'keep + verb', 'keep + past participle'], k: ['GE'], e: "'Keep' takes the gerund pattern: keep + verb-ing." },
        { t: 'choice', p: 'Which pattern follows the verb "arrange"?', o: ['arrange + to + verb', 'arrange + verb-ing', 'arrange + verb', 'arrange + past participle'], k: ['IN'], e: "'Arrange' takes the infinitive pattern: arrange + to + verb." },
        { t: 'choice', p: 'Which pattern follows the verb "imagine"?', o: ['imagine + verb-ing', 'imagine + to + verb', 'imagine + verb', 'imagine + bare infinitive'], k: ['GE'], e: "'Imagine' takes the gerund pattern: imagine + verb-ing." }
      ] },
      { key: 'error', name: 'Find and Correct the Error', pts: 100, how: 'Choose the correct version.', qs: [
        { t: 'choice', p: '❌ She misses to travel with her family during the summer holidays.', o: ['She misses travelling with her family during the summer holidays.', 'She misses travel with her family during the summer holidays.', 'She misses to travelling with her family during the summer holidays.', 'She misses travelled with her family during the summer holidays.'], k: ['GE'], e: "'Miss' must be followed by a gerund, not an infinitive." },
        { t: 'choice', p: '❌ The teacher made us to clean the classroom after the football match.', o: ['The teacher made us clean the classroom after the football match.', 'The teacher made us cleaning the classroom after the football match.', 'The teacher made us to cleaning the classroom after the football match.', 'The teacher made us cleaned the classroom after the football match.'], k: ['BI'], e: "'Make' is followed by the bare infinitive: 'made us clean'." }
      ] },
      { key: 'meaning', name: 'Understand Meaning', pts: 100, how: 'Choose the correct meaning.', qs: [
        { t: 'choice', p: "I'll never forget visiting the Sahara Desert with my family.", ask: 'What does this sentence mean?', o: ['I will always have that memory.', 'I need a reminder to visit the Sahara Desert.', 'I have never been to the Sahara Desert.', 'I am planning to visit the Sahara Desert soon.'], k: ['MN'], e: "'Never forget + gerund' refers to a lasting memory." },
        { t: 'choice', p: "I can't help laughing whenever he tells that joke.", ask: 'What does this sentence mean?', o: ['I am unable to stop myself from laughing.', 'I refuse to laugh at that joke.', 'I need assistance to understand the joke.', 'I never laugh at that joke.'], k: ['MN'], e: "'Can't help + gerund' means being unable to control a reaction." },
        { t: 'choice', p: 'Youssef is looking forward to starting university next semester.', ask: 'What does this sentence mean?', o: ['Youssef is excited and eager about starting university.', 'Youssef is dreading the start of university.', 'Youssef has already started university.', 'Youssef has decided not to attend university next semester after all.'], k: ['MN', 'PR'], e: "'Look forward to + gerund' expresses eagerness about the future." }
      ] },
      { key: 'context', name: 'Same Meaning & Context', pts: 100, how: 'Same meaning, or complete the situation.', qs: [
        { t: 'choice', p: "I don't want to go out tonight; I'd rather stay home.", ask: 'Choose the sentence with the same meaning:', o: ['I feel like staying home tonight.', 'I pretend to stay home tonight.', 'I arranged to stay home tonight.', 'I finished staying home tonight.'], k: ['SM', 'GE'], e: "'Would rather' and 'feel like' both express a present preference." },
        { t: 'choice', p: 'Ali said he would help with the charity event without being asked.', ask: 'Choose the sentence with the same meaning:', o: ['Ali volunteered to help with the charity event.', 'Ali begged to help with the charity event.', 'Ali swore to help with the charity event because his friends asked him.', 'Ali imagined helping with the charity event.'], k: ['SM', 'IN'], e: "'Volunteer + infinitive' means offering to do something unasked." },
        { t: 'choice', p: 'Aicha wants to boost her listening skills before the National Exam. She practises ______ podcasts in English every day.', o: ['listening', 'listen', 'to listen', 'listened'], k: ['GE'], e: "'Practise' is always followed by a gerund." },
        { t: 'choice', p: 'Nadia always checks her answer sheet twice before ______ it to the exam supervisor.', o: ['handing', 'hand', 'to hand', 'handed'], k: ['PR'], e: "A preposition such as 'before' is followed by a gerund." }
      ] },
      { key: 'boss', name: 'Final Challenge: Mixed Grammar', pts: 100, how: 'Choose the correct sentence.', qs: [
        { t: 'choice', p: '', o: ['He swore to tell the truth in court, and the lawyer begged to speak with the witness privately.', 'He swore telling the truth in court, and the lawyer begged speaking with the witness privately.', 'He swore to tell the truth in court, and the lawyer begged speaking with the witness privately.', 'He swore telling the truth in court, and the lawyer begged to speak with the witness privately.'], k: ['IN'], e: "'Swear' and 'beg' are followed by infinitives." },
        { t: 'choice', p: '', o: ['Every candidate must switch off their phone before the exam starts, and they should arrive at least twenty minutes early.', 'Every candidate must switching off their phone before the exam starts, and they should to arrive at least twenty minutes early.', 'Every candidate must to switch off their phone before the exam starts, and they should arriving at least twenty minutes early.', 'Every candidate must switching off their phone before the exam starts, and they should arriving at least twenty minutes early.'], k: ['BI'], e: "Modal verbs take the bare infinitive: 'must switch' and 'should arrive'." }
      ] }
    ]
  };
})();
/* Page text and storage key (read by app.js, the same file as in every Unit 10 Grammar quiz).
   missionHtml and rulesHtml may use <b>; everything else is plain text. Keep storeKey unchanged, or saved attempts are lost. */
window.RS_COPY = {
  storeKey: 'levelup-2bac-u1-gerund-infinitive-q2-v1',
  heroKicker: 'LEVEL UP 2BAC · GRAMMAR · UNIT 1',
  heroTitle: 'GERUND & INFINITIVE',
  heroQuiz: 'QUIZ 2',
  heroSub: 'The Gerund & Infinitive Challenge · 20 points',
  missionHtml: 'Some verbs are followed by a <b>gerund</b> (verb + -ing), others by an <b>infinitive</b> (to + verb). After <b>make</b> and <b>modal verbs</b> we use the bare infinitive, and after a <b>preposition</b> we always use -ing. Before you choose, ask: which <b>pattern</b> does this verb take?',
  formula: 'verb + ‑ing · verb + to + verb · make / must + verb',
  cats: ['🔁 verb + ‑ing', '🎯 verb + to', '📍 prep + ‑ing', '🛠️ make + verb', '⚖️ must + verb', '💡 can’t help'],
  rulesHtml: [
    'Play the 6 games in order. You have <b>one try</b> for each question.',
    'There are <b>20 questions</b>, and each one is worth <b>1 point</b>.',
    'You see the correct answer and an explanation straight away, and you can review your mistakes at the end.'
  ],
  beforeBoss: 'Next: the Final Challenge.',
  fullMarks: '🏆 Achievement unlocked: Gerund & Infinitive Champion! You are ready for the national exam.'
};

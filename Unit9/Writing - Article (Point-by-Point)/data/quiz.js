/* Unit 9 · Writing · Article · Quiz 1 (out of 20). "Unit 9 – Writing: Article – Interactive Practice"
   The Young Generation vs Their Parents' Generation · 2024 National Exam writing task · Point-by-Point Method (the Block Method is Unit 10: not used here).
   Points are in hundredths; the total must be 2000. Teacher's split: 3 / 4 / 4 / 3 / 3 / 3.
   In choice items o[0] is the correct answer (the teacher's key letter is in each comment); the app shuffles every option list
   on every attempt and every load, and marks by permanent index. Matching, sorting and ordering are marked by item id. */
window.RS_TAGS = [
  ['TK', 'The exam task', 'Decoding the task: topic, purpose (an online article), suggested aspects'],
  ['LI', 'The four aspects', 'Lifestyle: daily routines, habits, ways of living'],
  ['OP', 'The four aspects', 'Opinions: attitudes, beliefs, views'],
  ['IN', 'The four aspects', 'Interests: hobbies, music, entertainment, activities'],
  ['AP', 'The four aspects', 'Appearances: clothing, fashion, personal appearance'],
  ['PB', 'Point-by-Point Method', 'Introduction → one aspect per body paragraph, both generations in each → conclusion'],
  ['CC', 'Comparison language', 'Contrast: while, whereas, unlike, in contrast, however · Similarity: both … and, similarly, likewise']
];

(function () {
  var PROMPT = '“There are significant differences between the young generation and their parents’ generation.\nWrite an article to be published online discussing these differences.\n(You may consider aspects such as lifestyle, opinions, interests, and appearances.)”';
  function Q(n, p, ask, o, k, e) { return { t: 'choice', round: 'Question ' + n + ' of 3', p: p, ask: ask, o: o, k: k, e: e, small: 1 }; }
  /* Find the Perfect Match: one challenge per aspect; the four parents' ideas are the options, the right one shares the aspect */
  var PAR = ['Some parents prefer visiting physical shops.', 'Some parents place greater emphasis on job security.', 'Some parents prefer traditional games and outdoor activities.', 'Some parents prefer more traditional styles of clothing.'], ASP = ['LI', 'OP', 'IN', 'AP'];
  function MATCH(n, young, c, e) { return { t: 'choice', round: 'Challenge ' + n + ' of 4', p: young, ask: 'Which parents’ idea matches it?', o: [PAR[c]].concat(PAR.filter(function (_, i) { return i !== c; })), k: [ASP[c], 'PB'], e: e + ' Both ideas compare the two generations on the same aspect.', small: 1 }; }

  window.RS_QUIZ = {
    title: 'Article · Quiz 1',
    games: [
      { key: 'decode', name: 'Decode the Exam Task', pts: 100, exam: 1, how: 'Choose the best answer.',
        end: 'Excellent! You have decoded the writing task. Before writing an article, always identify the topic, purpose, audience and suggested aspects.', qs: [
        /* key B */
        Q(1, PROMPT, 'What is the main topic of the examination task?', ['Differences between the young generation and their parents’ generation.', 'The relationship between teachers and students.', 'The importance of technology in modern education.', 'Differences between rural and urban lifestyles.'], ['TK'], 'The first sentence of the task gives the topic.'),
        /* key C */
        Q(2, PROMPT, 'What are students required to do?', ['Write an online article discussing generational differences.', 'Write a formal letter to their parents.', 'Write a story about two generations.', 'Write a report about modern technology.'], ['TK'], 'The task asks for an online article that discusses differences.'),
        /* key B */
        Q(3, PROMPT, 'Which group contains all four aspects suggested in the examination prompt?', ['Lifestyle, opinions, interests and appearances.', 'Education, employment, technology and health.', 'Family, education, sports and travelling.', 'Fashion, environment, communication and employment.'], ['TK'], 'They are in the brackets: your four body paragraphs.')
      ] },
      { key: 'ideas', name: 'Generation Gap: Idea Detective', pts: 50, cats: ['Lifestyle', 'Opinions', 'Interests', 'Appearances'],
        how: 'Tap the aspect.', tip: 'These ideas are about some people, not everyone.', qs: [
        { t: 'sort', round: 'Round 1 of 4', cards: [
          ['Some young people prefer using digital services for everyday tasks.', 0, ['LI']],
          ['Some parents place greater value on job stability.', 1, ['OP']]] },
        { t: 'sort', round: 'Round 2 of 4', cards: [
          ['Some young people enjoy online gaming and digital entertainment.', 2, ['IN']],
          ['Some parents prefer more traditional styles of clothing.', 3, ['AP']]] },
        { t: 'sort', round: 'Round 3 of 4', cards: [
          ['Some young people prefer contemporary fashion trends.', 3, ['AP']],
          ['Some parents prefer traditional ways of managing daily activities.', 0, ['LI']]] },
        { t: 'sort', round: 'Round 4 of 4', cards: [
          ['Some young people support more flexible working arrangements.', 1, ['OP']],
          ['Some parents prefer traditional hobbies and outdoor activities.', 2, ['IN']]] }
      ] },
      { key: 'match', name: 'Find the Perfect Match', pts: 100, exam: 1, how: 'Match the SAME aspect.', qs: [
        MATCH(1, 'Some young people prefer shopping online.', 0, 'Lifestyle: how people shop in daily life.'),
        MATCH(2, 'Some young people support flexible working arrangements.', 1, 'Opinions: views about work.'),
        MATCH(3, 'Some young people enjoy digital games and online entertainment.', 2, 'Interests: games and entertainment.'),
        MATCH(4, 'Some young people prefer following modern fashion trends.', 3, 'Appearances: fashion and clothing.')
      ] },
      { key: 'architect', name: 'Point-by-Point Article Architect', pts: 300, how: 'Order the paragraphs.', qs: [
        { t: 'build', long: 1, pos: 1, fr: 'The body of your article:', bh: 'Tap P1, then P2, P3 and P4',
          key: ['Lifestyle: daily routines, habits and ways of living', 'Opinions: attitudes, beliefs and views about life', 'Interests: hobbies, entertainment, music and leisure', 'Appearances: fashion, clothing and personal appearance'], extra: [],
          k: ['PB', 'LI', 'OP', 'IN', 'AP'], e: 'Each paragraph focuses on ONE aspect and compares BOTH generations, in the order of the exam task.' }
      ] },
      { key: 'language', name: 'Comparison Language Challenge', pts: 100, exam: 1, how: 'Choose the expression.', qs: [
        /* key B */
        Q(1, 'Some young people prefer communicating online, ______ some parents prefer face-to-face conversations.', 'Choose the best expression.', ['whereas', 'because', 'therefore', 'for example'], ['CC'], '“whereas” joins two contrasting ideas in one sentence (like “while”). “because” gives a reason, “therefore” a result.'),
        /* key C */
        Q(2, '______ their parents, some young people enjoy spending more of their free time playing online games.', 'Choose the best expression.', ['Unlike', 'Similarly', 'Therefore', 'Moreover'], ['CC'], '“Unlike” + a noun (their parents) shows a contrast. Similarly, Therefore and Moreover start a new sentence and are not followed by a noun.'),
        /* key A */
        Q(3, '______ generations value family relationships, although they may express their values differently.', 'Choose the best expression.', ['Both', 'Unlike', 'However', 'Whereas'], ['CC'], '“Both generations” shows a similarity: the two generations share the same value.')
      ] },
      { key: 'exam', name: 'The National Exam Challenge', pts: 300, how: 'Order the six sections.',
        win: 'Excellent work! You have constructed a complete article using the Point-by-Point Method. You are now better prepared to answer this type of National Examination writing task.',
        lose: 'Not quite! Remember to introduce the topic first, discuss one comparison aspect in each body paragraph, and finish with a conclusion.', qs: [
        { t: 'build', long: 1, pos: 1, d: PROMPT, fr: 'Your article (first words of each section):', bh: 'Tap the sections in order',
          key: ['Each generation has its own way of living.', 'To begin with, lifestyles differ.', 'Another difference concerns opinions.', 'Regarding interests, tastes differ too.', 'Finally, their appearance may differ.', 'To sum up, the two generations differ.'], extra: [],
          k: ['PB', 'LI', 'OP', 'IN', 'AP'], e: 'Intro → Lifestyle → Opinions → Interests → Appearances → End.' }
      ] }
    ]
  };
})();

/* 2026-11-20: the quiz texts moved here from app.js (shared Writing engine, word for word). */
window.RS_COPY = {
  storeKey: 'levelup-2bac-u9-writing-article-q1-v1',
  heroKicker: 'LEVEL UP 2BAC · WRITING · UNIT 9',
  heroTitle: 'ARTICLE',
  heroQuiz: 'QUIZ 1',
  heroSub: 'The Young Generation vs Their Parents\' Generation · 20 points',
  missionHtml: 'Prepare the 2024 National Exam article: <i>“There are significant differences between the young generation and their parents’ generation.”</i> Use the <b>Point-by-Point Method</b>: each body paragraph discusses <b>one aspect</b> and compares <b>both generations</b>.',
  formula: 'Introduction → Lifestyle → Opinions → Interests → Appearances → Conclusion',
  cats: ['🎯 Decode the task', '🔎 Sort the ideas', '🤝 Match the pairs', '🏗️ Plan the body', '🔗 Compare & contrast', '📰 Build the article'],
  rulesHtml: [
    'Play the 6 activities in order. You have <b>one try</b> for each question: tap <b>Check</b> to see if you are right.',
    'Activity 6, the <b>National Exam Challenge</b>: build the whole article.',
    'You see the correct answer and an explanation straight away, and you can review your mistakes at the end.'
  ],
  beforeLast: 'Next: the National Exam Challenge. Build the whole article!',
  msgs: [
    'Outstanding! You are ready for the exam article.',
    'Well done! Review the activities where you lost points, then try again.',
    'You passed. Practise the Point-by-Point plan again.',
    'Keep going! Re-read the rules, then try again.'
  ],
  fullMarks: '🏆 Exam ready! You can plan the whole article with the Point-by-Point Method.'
};
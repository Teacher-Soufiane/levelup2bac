/* Unit 10 · Writing · Article · Block Method · Quiz 1 (out of 20). "Unit 10 – Writing: Article – Block Method – Interactive Practice"
   Same topic and four aspects as Unit 9 (Point-by-Point); here the article is organised in two blocks:
   Introduction → Block 1: ALL four aspects of the young generation → Block 2: the SAME four aspects for the parents' generation → Conclusion.
   Points are in hundredths; the total must be 2000. Split (the brief gives only the total): 3 / 3 / 4 / 3 / 3 / 4.
   In choice items o[0] is the correct answer; the app shuffles options (q.show = fixed display order) on every attempt and every load. */
window.RS_TAGS = [
  ['ME', 'The two methods', 'Block Method: all of one generation, then all of the other · Point-by-Point: one aspect at a time, both generations'],
  ['YG', 'The two blocks', 'Block 1: the young generation (lifestyle, opinions, interests, appearances)'],
  ['PG', 'The two blocks', 'Block 2: the parents’ generation (the same four aspects)'],
  ['AS', 'The two blocks', 'Inside each block: lifestyle → opinions → interests → appearances'],
  ['ST', 'Article structure', 'Introduction → Block 1 → Block 2 → Conclusion'],
  ['TR', 'Transitions', 'Regarding the young generation… / When it comes to… / As for their parents… / Unlike… / In contrast… / Similarly…']
];

(function () {
  var PROMPT = '“There are significant differences between the young generation and their parents’ generation.\nWrite an article to be published online discussing these differences.\n(You may consider aspects such as lifestyle, opinions, interests, and appearances.)”';
  var TASK = 'Exam task: an online article on the differences between the young generation and their parents’ generation.';
  /* Point-by-Point or Block Method?: the two answers always show in the same order */
  function METHOD(p, block, e) {
    return { t: 'choice', p: p, ask: 'Which method is this?', o: block ? ['Block Method', 'Point-by-Point Method'] : ['Point-by-Point Method', 'Block Method'], show: block ? [1, 0] : [0, 1], k: ['ME'], e: e };
  }
  function MC(p, o, k, e) { return { t: 'choice', p: p, ask: 'Choose the best answer.', o: o, k: k, e: e, small: 1 }; }
  function TR(p, o, e) { return { t: 'choice', p: p, ask: 'Choose the best transition.', o: o, k: ['TR'], e: e }; }
  function STEP(n, p, ask, o, k, e) { return { t: 'choice', round: 'Step ' + n + ' of 4', p: p, ask: ask, o: o, k: k, e: e, emails: 1 }; }

  window.RS_QUIZ = {
    title: 'Article · Block Method · Quiz 1',
    games: [
      { key: 'method', name: 'Point-by-Point or Block Method?', pts: 50, how: 'Which method is it?',
        end: 'Remember: Block Method = everything about young people first, then everything about their parents.', qs: [
        METHOD('Intro → P1: young people’s lifestyle, opinions, interests and appearances → P2: parents’ lifestyle, opinions, interests and appearances → Conclusion', 1, 'One block for each generation, with all four aspects in each block.'),
        METHOD('Intro → P1: lifestyle (both generations) → P2: opinions (both) → P3: interests (both) → P4: appearances (both) → Conclusion', 0, 'Each paragraph takes one aspect and compares both generations: that is Point-by-Point.'),
        METHOD('P1: young people’s lifestyle → P2: parents’ lifestyle → P3: young people’s opinions → P4: parents’ opinions → …', 0, 'The common mistake! Switching generation after each aspect is Point-by-Point, not Block.'),
        METHOD('Block 1: everything about the young generation → Block 2: everything about the parents’ generation', 1, 'Two blocks, one per generation: the Block Method.'),
        MC('In the Block Method, what does Block 1 contain?', ['All four aspects of the young generation.', 'The lifestyle of both generations.', 'The introduction and the conclusion.', 'Only the opinions of young people.'], ['ME', 'YG'], 'Block 1 covers lifestyle, opinions, interests and appearances of young people.'),
        MC('What does Block 2 discuss?', ['The same four aspects, for the parents’ generation.', 'New aspects that Block 1 did not mention.', 'Only the aspects where parents agree with their children.', 'Lifestyle only.'], ['ME', 'PG'], 'Block 2 mirrors Block 1: the same four aspects, now for the parents.')
      ] },
      { key: 'who', name: 'Generation Sorter: Who Does It Describe?', pts: 25, cats: ['Young generation', 'Parents’ generation'],
        how: 'Tap the generation.', tip: 'About some people, not all.', qs: [
        { t: 'sort', round: 'Set 1 of 3', cards: [
          ['Some young people enjoy spending time on social media.', 0, ['YG']],
          ['Some parents prefer traditional forms of entertainment.', 1, ['PG']],
          ['Many young people wear sportswear and trainers.', 0, ['YG']],
          ['Some parents see a stable job as the most important goal.', 1, ['PG']]] },
        { t: 'sort', round: 'Set 2 of 3', cards: [
          ['Many parents read the newspaper every morning.', 1, ['PG']],
          ['Some young people order their meals with an app.', 0, ['YG']],
          ['Some young people dream of working abroad.', 0, ['YG']],
          ['Some parents prefer classic Arabic music.', 1, ['PG']]] },
        { t: 'sort', round: 'Set 3 of 3', cards: [
          ['Some parents prefer wearing a traditional djellaba.', 1, ['PG']],
          ['Many young people follow influencers for fashion tips.', 0, ['YG']],
          ['Some parents prefer face-to-face conversations.', 1, ['PG']],
          ['Some young people want to choose their own career.', 0, ['YG']]] }
      ] },
      { key: 'aspects', name: 'Four Aspects Challenge: Complete Each Block!', pts: 200, how: 'Build it. One is extra.', qs: [
        { t: 'build', long: 1, pos: 1, round: 'Block 1 · The young generation', fr: 'Block 1, the young generation:', bh: 'Tap lifestyle first',
          key: ['Many young people do everything online.', 'Some want to choose their own path.', 'Many love video games and social media.', 'Many follow the latest fashion trends.'], extra: ['Some parents prefer shopping in person.'],
          k: ['YG', 'AS'], e: 'Lifestyle → opinions → interests → appearances, all about young people. The parents’ card goes in Block 2.' },
        { t: 'build', long: 1, pos: 1, round: 'Block 2 · The parents’ generation', fr: 'Block 2, the parents’ generation:', bh: 'Tap lifestyle first',
          key: ['Some parents prefer daily routines.', 'Many value stability and tradition.', 'Some enjoy reading and gardening.', 'Many prefer classic, simple clothes.'], extra: ['Many teens love video games.'],
          k: ['PG', 'AS'], e: 'The same four aspects in the same order, now all about parents. The teens’ card goes in Block 1.' }
      ] },
      { key: 'builder', name: 'Block Builder: Put the Paragraphs in Order!', pts: 300, how: 'Build it. Two are extra.', qs: [
        { t: 'build', long: 1, pos: 1, fr: 'Your article plan:', bh: 'Tap the introduction first',
          key: ['Every generation has its own way of living.', 'Regarding the young generation, …', 'As for their parents, …', 'To sum up, the two generations differ.'],
          extra: ['When it comes to lifestyle, both differ.', 'As for opinions, the two disagree.'],
          k: ['ST', 'ME'], e: 'Introduction → Block 1 (young) → Block 2 (parents) → conclusion. One aspect for both generations is Point-by-Point.' }
      ] },
      { key: 'transitions', name: 'Transition Master: Connect the Two Blocks!', pts: 50, how: 'Choose the transition.', qs: [
        TR('______ the young generation, many teenagers spend hours online every day.', ['Regarding', 'Unlike', 'Similarly', 'Whereas'], '“Regarding + the group” opens Block 1.'),
        TR('______ lifestyle, many young people prefer fast, digital solutions.', ['When it comes to', 'In contrast', 'Similarly', 'Both'], '“When it comes to + an aspect” introduces one aspect inside a block.'),
        TR('______ their parents, many prefer slower, traditional routines.', ['As for', 'Whereas', 'Similarly', 'Although'], '“As for + the other group” moves to Block 2.'),
        TR('______ young people, many parents prefer face-to-face conversations.', ['Unlike', 'Regarding', 'Both', 'In the same way'], '“Unlike + a noun” links Block 2 back to Block 1 with a contrast.'),
        TR('Young people often follow fashion trends. ______, their parents usually prefer classic clothes.', ['In contrast', 'Similarly', 'For example', 'As a result'], '“In contrast,” starts a new sentence with an opposite idea.'),
        TR('Young people value their families. ______, their parents see family as very important.', ['Similarly', 'In contrast', 'Unlike', 'On the other hand'], '“Similarly,” shows the two generations share an idea.')
      ] },
      { key: 'exam', name: 'The National Exam Challenge: Build the Article!', pts: 100, exam: 1, how: 'Choose each paragraph.',
        win: 'Excellent work! You have built a complete article with the Block Method: introduction, Block 1, Block 2, conclusion.',
        lose: 'Not quite! Remember: introduction, then everything about young people, then everything about their parents, then a conclusion.', qs: [
        STEP(1, PROMPT, 'Choose the introduction.', [
          'Every generation has its own way of thinking and living. Today, the young generation and their parents’ generation differ in lifestyle, opinions, interests and appearances.',
          'To sum up, the two generations are different, but they can still respect each other.',
          'Regarding the young generation, many teenagers spend hours online and follow fashion trends.'], ['ST'], 'A general opening that presents the topic and the four aspects.'),
        STEP(2, TASK, 'Choose Block 1.', [
          'Regarding the young generation, many young people live online and use apps for everything. Some want to choose their own careers. Many enjoy video games and social media, and they often follow the latest fashion trends.',
          'When it comes to lifestyle, many young people live online, whereas their parents prefer traditional routines.',
          'As for their parents, many prefer traditional routines and value job security.'], ['YG', 'AS', 'ME'], 'All four aspects of young people in one block. The second paragraph is Point-by-Point.'),
        STEP(3, TASK, 'Choose Block 2.', [
          'As for their parents, many prefer traditional routines and face-to-face contact. Some place great value on job security. Many enjoy reading, gardening and family visits, and they usually prefer classic clothes.',
          'Regarding opinions, many young people want freedom, while their parents want stability.',
          'Many parents prefer traditional routines.'], ['PG', 'AS', 'ME'], 'The same four aspects, all about parents. The last paragraph covers only one aspect.'),
        STEP(4, TASK, 'Choose the conclusion.', [
          'To sum up, the two generations differ in lifestyle, opinions, interests and appearances. Despite these differences, mutual respect can help them understand each other.',
          'Every generation has its own way of thinking and living.',
          'Unlike young people, many parents read newspapers.'], ['ST'], 'A summary of the main points and a final thought.')
      ] }
    ]
  };
})();

/* 2026-11-20: the quiz texts moved here from app.js (shared Writing engine, word for word). */
window.RS_COPY = {
  storeKey: 'levelup-2bac-u10-writing-article-block-q1-v1',
  heroKicker: 'LEVEL UP 2BAC · WRITING · UNIT 10',
  heroTitle: 'ARTICLE: BLOCK METHOD',
  heroQuiz: 'QUIZ 1',
  heroSub: 'The Young Generation vs Their Parents\' Generation · 20 points',
  missionHtml: 'Same topic as Unit 9, a different plan: the <b>Block Method</b>. Block 1 discusses <b>all four aspects of the young generation</b>; Block 2 discusses <b>the same four aspects for the parents’ generation</b>.',
  formula: 'Introduction → Block 1: young generation → Block 2: parents’ generation → Conclusion',
  cats: ['⚖️ Which method?', '👥 Who is it?', '🧱 Fill each block', '🏗️ Build the plan', '🔗 Transitions', '📰 Build the article'],
  rulesHtml: [
    'Play the 6 activities in order. You have <b>one try</b> for each question: tap <b>Check</b> to see if you are right.',
    'Activity 6, the <b>National Exam Challenge</b>: build the whole article.',
    'You see the correct answer and an explanation straight away, and you can review your mistakes at the end.'
  ],
  beforeLast: 'Next: the National Exam Challenge. Build the article with the Block Method!',
  msgs: [
    'Outstanding! You are ready for the exam article.',
    'Well done! Review the activities where you lost points, then try again.',
    'You passed. Practise the Block Method plan again.',
    'Keep going! Re-read the rules, then try again.'
  ],
  fullMarks: '🏆 Block master! You can plan the whole article with the Block Method.'
};
/* Unit 1 · Writing · Paragraph · Quiz (out of 15, as in the teacher's Canva quiz: RS_COPY.max = 1500).
   2026-11-19: the teacher's 15 questions moved to the Unit 10 Writing page (shared engine). The questions and the right answers are
   the teacher's, word for word (one fix: "young people.." → "young people."). Changes:
   - the 9 tasks are grouped into 6 activities, like the Unit 9 and Unit 10 Writing quizzes;
   - Task 6: the four sentences are the answer cards (no "Sentence 1–4" letters), so the answers can move on every attempt;
   - Task 7: the students tap the four sentences in order (0.25 per sentence in its right place) instead of ↑ ↓ arrows;
   - some wrong options are longer, so the right answer is not always the longest one.
   Points are in hundredths (100 = 1 point). In choice items o[0] is the right answer; the app shuffles the options. */
window.RS_TAGS = [
  ['TP', 'The topic sentence', 'The topic: what the whole paragraph is about'],
  ['TS', 'The topic sentence', 'A topic sentence introduces the main idea that the paragraph develops'],
  ['SI', 'Supporting sentences', 'A supporting idea explains the topic sentence directly'],
  ['SD', 'Supporting sentences', 'A supporting detail or example (For example, …) shows how the idea is true'],
  ['UN', 'Supporting sentences', 'Unity: every sentence is about the topic; an irrelevant sentence does not belong'],
  ['CN', 'Language', 'Connectors: In addition (adding) · For example (giving an example)'],
  ['OR', 'Organisation', 'Order: topic sentence → supporting idea → example → conclusion / result'],
  ['CS', 'The concluding sentence', 'A concluding sentence sums up the main idea (In conclusion, … / In brief, … / Overall, …)']
];

(function () {
  function MC(round, p, ask, o, k, e, x) { var q = { t: 'choice', round: round, p: p, ask: ask, o: o, k: k, e: e }; for (var i in (x || {})) q[i] = x[i]; return q; }

  window.RS_QUIZ = {
    title: 'Writing a Paragraph · Quiz',
    games: [
      { key: 'topic', name: 'Find the Topic and the Topic Sentence', pts: 100, how: 'Choose the best answer.', qs: [
        MC('Task 1 · Identify the topic', 'Many young people use social media every day. They use it to communicate with friends, share information, and follow current events. However, spending too much time online can affect their studies and social lives.', 'Choose the best topic for the paragraph.',
          ['The Benefits and Risks of Social Media', 'The History of the Internet and Its Inventors', 'Young People’s School Subjects', 'Traditional Forms of Communication'], ['TP'], 'The paragraph discusses both the uses and possible negative effects of social media.'),
        MC('Task 2 · The topic sentence', 'A paragraph about the importance of learning English.', 'Choose the best topic sentence.',
          ['Learning English is important for many reasons.', 'English is spoken in many countries around the world.', 'Some students study English at school.', 'English has many interesting words.'], ['TS'], 'It introduces the general idea and allows the paragraph to develop several reasons.'),
        MC('Task 2 · The topic sentence', 'A paragraph about the benefits of reading.', 'Choose the best topic sentence.',
          ['Reading books can provide students with several important benefits.', 'Some books are very long and have hundreds of pages in them.', 'I bought a new book at the bookshop near my school yesterday.', 'Libraries in big cities usually contain many different kinds of books.'], ['TS'], 'It clearly introduces the main idea that the following sentences can develop.')
      ] },
      { key: 'idea', name: 'Choose the Best Supporting Idea', pts: 100, how: 'Choose the best answer.', qs: [
        MC('Task 3 · Supporting idea', 'Topic sentence: “Learning a foreign language can create better opportunities for young people.”', 'Which sentence best supports this idea?',
          ['It can help them communicate with people from different countries.', 'Some languages have very difficult pronunciation and grammar rules.', 'Many students have different hobbies.', 'Language classes can sometimes be long.'], ['SI'], 'This sentence directly develops the topic sentence’s idea about better opportunities through communication.'),
        MC('Task 3 · Supporting idea', 'Topic sentence: “Regular exercise is beneficial to students.”', 'Which supporting idea is most relevant?',
          ['It can improve their physical health and reduce stress.', 'Sports shoes are available in many different sizes and colours.', 'Some students prefer watching sports on television.', 'Football matches can attract large audiences.'], ['SI'], 'This sentence directly explains a benefit of exercise, supporting the topic sentence.')
      ] },
      { key: 'detail', name: 'Choose the Best Supporting Detail', pts: 100, how: 'Choose the best answer.', qs: [
        MC('Task 4 · Supporting detail', 'Main idea: “Reading regularly can improve students’ language skills.”', 'Which detail best supports this idea?',
          ['For example, reading exposes students to new vocabulary and different sentence structures.', 'For example, many students enjoy reading a few pages of a novel before going to bed.', 'For example, books are available in many different sizes, colours and prices in shops.', 'For example, some libraries are open at weekends and during the school holidays.'], ['SD'], 'This detail directly explains how reading improves language skills, unlike the other options.', { small: 1 }),
        MC('Task 4 · Supporting detail', 'Main idea: “Using public transport can help protect the environment.”', 'Which example best supports this idea?',
          ['For example, buses can carry many passengers and reduce the number of cars on the roads.', 'For example, some buses are more comfortable and much cleaner than others in the city.', 'For example, passengers often listen to music while travelling to work or school.', 'For example, public transport can sometimes be crowded and late in the morning.'], ['SD'], 'This example explains the environmental benefit directly, connecting fewer cars to environmental protection.', { small: 1 })
      ] },
      { key: 'unity', name: 'Connectors and the Odd One Out', pts: 100, how: 'Choose the best answer.', qs: [
        MC('Task 5 · Connector', 'Students should develop good study habits. ______, they should organize their time effectively.', 'Complete with the best connector.',
          ['In addition', 'For example', 'However', 'Therefore'], ['CN'], 'The second idea adds another point about good study habits, so “In addition” is correct.'),
        MC('Task 5 · Connector', 'Exercise has many benefits. ______, it can help people reduce stress and stay healthy.', 'Complete with the best connector.',
          ['For example', 'However', 'On the other hand', 'As a result'], ['CN'], 'The second sentence gives an example of the benefits of exercise, so “For example” is correct.'),
        MC('Task 6 · The irrelevant sentence', 'Topic: The importance of education.', 'Which sentence does NOT belong in the paragraph?',
          ['Many students enjoy playing football after school.', 'Education helps people develop useful knowledge and skills.', 'It can also increase their chances of finding good employment.', 'Moreover, education can help people become responsible members of society.'], ['UN'], 'This sentence is about students’ leisure activities, not the importance of education.')
      ] },
      { key: 'order', name: 'Paragraph Builder: Put the Sentences in Order!', pts: 100, how: 'Tap the sentences in order.', qs: [
        { t: 'build', long: 1, pos: 1, round: 'Task 7 · Paragraph 1 of 2', d: 'Topic sentence → Supporting idea → Example → Conclusion', fr: 'Your paragraph:', bh: 'Tap the topic sentence first',
          key: ['The Internet can be a useful tool for students.', 'It gives them access to a large amount of educational information.', 'For example, students can use educational websites to research different topics.', 'Therefore, students should learn how to use the Internet responsibly.'], extra: [],
          k: ['OR', 'TS', 'SD', 'CS'], e: 'The paragraph opens with the topic sentence, develops it with a supporting idea, gives an example, then closes with a conclusion.' },
        { t: 'build', long: 1, pos: 1, round: 'Task 7 · Paragraph 2 of 2', d: 'Topic sentence → Supporting idea → Example → Result', fr: 'Your paragraph:', bh: 'Tap the topic sentence first',
          key: ['Regular physical activity is important for young people.', 'It helps them maintain a healthy body and reduce stress.', 'For instance, walking, swimming, and playing sports can improve physical fitness.', 'As a result, they can become healthier and more productive.'], extra: [],
          k: ['OR', 'TS', 'SD', 'CS'], e: 'The paragraph opens with the topic sentence, develops it with a supporting idea, gives examples, then closes with a result.' }
      ] },
      { key: 'end', name: 'Conclusion Challenge: Complete the Paragraph!', pts: 100, how: 'Choose the best ending.', qs: [
        MC('Task 8 · Concluding sentence', 'Learning a foreign language has many advantages. First, it helps people communicate with foreigners. It can also increase their chances of finding better educational and employment opportunities. In addition, learning another language allows people to discover other cultures. In conclusion, ...', 'Choose the best concluding sentence.',
          ['Learning a foreign language has many personal and professional benefits.', 'Many people speak different languages in countries around the world.', 'Some foreign languages are more difficult than others for Moroccan students.', 'Students usually learn languages at school.'], ['CS'], 'This sentence summarizes the benefits mentioned in the paragraph, making it the best conclusion.', { small: 1 }),
        MC('Task 8 · Concluding sentence', 'Technology has changed the way students learn. They can now access educational websites, watch instructional videos, and communicate with teachers online. These tools can make learning more flexible and accessible. In brief, ...', 'Choose the best concluding sentence.',
          ['Technology can make education more accessible and flexible.', 'Technology is used in many different countries.', 'Some students prefer traditional textbooks.', 'Computers and smartphones are popular among young people.'], ['CS'], 'This sentence summarizes the paragraph’s main point about technology making learning more accessible and flexible.', { small: 1 }),
        MC('Task 9 · Build the complete paragraph', 'Volunteering can have several benefits for young people. First, it allows them to help other members of their community. It also helps them develop useful skills such as communication and teamwork. Moreover, volunteering can give them valuable experience for their future careers. Overall, ...', 'Choose the sentence that best completes the paragraph.',
          ['Volunteering can be a valuable experience for young people.', 'Some young people prefer spending their free time at home.', 'Community organizations sometimes need more volunteers.', 'Young people have different interests and hobbies.'], ['CS'], 'This sentence summarizes the benefits listed in the paragraph, making it the best concluding statement to complete it.', { small: 1 })
      ] }
    ]
  };
})();

window.RS_COPY = {
  max: 1500,
  storeKey: 'levelup-2bac-u1-writing-paragraph-q1-v2',
  heroKicker: 'LEVEL UP 2BAC · WRITING · UNIT 1',
  heroTitle: 'WRITING A PARAGRAPH',
  heroQuiz: 'QUIZ',
  heroSub: 'Paragraph Writing: Interactive Practice · 15 points',
  missionHtml: 'A good <b>paragraph</b> is about <b>one topic</b>. It opens with a <b>topic sentence</b>, develops it with <b>supporting ideas</b> and <b>examples</b>, and ends with a <b>concluding sentence</b>.',
  formula: 'Topic sentence → Supporting ideas → Examples → Conclusion',
  cats: ['🎯 Topic', '💡 Topic sentence', '🧱 Supporting ideas', '🔎 Details', '🔗 Connectors', '🏁 Conclusion'],
  rulesHtml: [
    'Play the 6 activities in order. You have <b>one try</b> for each question.',
    'Activity 6, the <b>Conclusion Challenge</b>: finish three paragraphs with the best sentence.',
    'You see the correct answer and an explanation straight away, and you can review your mistakes at the end.'
  ],
  beforeLast: 'Next: the Conclusion Challenge. Finish each paragraph!',
  msgs: [
    'Outstanding! You can build a well-organised paragraph.',
    'Well done! Review the activities where you lost points, then try again.',
    'You passed. Practise topic sentences, supporting details and conclusions again.',
    'Keep going! Re-read the plan: topic sentence, supporting ideas, examples, conclusion. Then try again.'
  ],
  fullMarks: '🏆 Paragraph master! From the topic sentence to the conclusion, everything is in its place.'
};

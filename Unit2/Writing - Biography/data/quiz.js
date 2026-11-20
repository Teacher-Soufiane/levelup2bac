/* Unit 2 · Writing · Biography · Quiz (out of 20).
   2026-11-19: the teacher's 20 questions moved to the Unit 10 Writing page (shared engine). The questions and the right answers are
   the teacher's, word for word. Changes:
   - the 5 sections become 6 activities, like the Unit 9 and Unit 10 Writing quizzes (the timeline is an activity of its own);
   - the irrelevant-sentence question shows the four sentences as answer cards (no "Sentence 1–4"), so the answers can move;
   - the timeline: students tap the four events in order (0.25 per event in its right place);
   - the final challenge: the four whole paragraphs did not fit a phone, so students build the right paragraph sentence by sentence
     (0.25 per sentence in its right place) with one wrong sentence from the teacher's wrong paragraphs;
   - some wrong options are longer, so the right answer is not always the longest one.
   Points are in hundredths (100 = 1 point). In choice items o[0] is the right answer; the app shuffles the options. */
window.RS_TAGS = [
  ['DF', 'Biography basics', 'A biography: a text about a real person’s life, written by another person'],
  ['IN', 'Biography basics', 'What to include: birth, education, career, achievements (not trivial details)'],
  ['TI', 'Biography basics', 'A title and an opening sentence that say who the person is'],
  ['CH', 'Organisation', 'Chronological order: birth → education → career → achievements'],
  ['TE', 'Language', 'Past tenses: past simple, past perfect, passive (was born, was given)'],
  ['TX', 'Language', 'Time expressions and connectors: in 1998, Afterwards, Nine years later'],
  ['UN', 'Organisation', 'Relevance: leave out details that are not important in a person’s life'],
  ['CS', 'Organisation', 'A concluding sentence about the person’s importance']
];

(function () {
  function MC(round, p, ask, o, k, e, x) { var q = { t: 'choice', round: round, p: p, ask: ask, o: o, k: k, e: e }; for (var i in (x || {})) q[i] = x[i]; return q; }

  window.RS_QUIZ = {
    title: 'Writing a Biography · Quiz',
    games: [
      { key: 'basics', name: 'Biography Basics', pts: 100, how: 'Choose the best answer.', qs: [
        MC('Definition', 'What is a biography?', 'Choose the correct definition.',
          ['A text about a person’s life written by another person.', 'A text about a person’s future plans written by themselves.', 'A text describing a fictional story and its characters.', 'A text explaining how to complete a particular activity.'], ['DF'], 'A biography is an account of someone’s life written by another person.'),
        MC('Opening sentence', 'Choose the best opening sentence for a biography.', 'Which sentence is best?',
          ['Nelson Mandela was a South African leader who fought against apartheid.', 'Nelson Mandela is going to become a famous political leader in South Africa.', 'Nelson Mandela enjoys reading books in his free time.', 'Nelson Mandela will travel to many countries next year.'], ['TI', 'TE'], 'A biography describes a person’s life using the past tense, and this sentence introduces who he was and what he is known for.'),
        MC('Information', 'Which information is normally included in a biography?', 'Choose the best answer.',
          ['Date and place of birth, education, career, and achievements.', 'A recipe, a shopping list, and a person’s favourite restaurant.', 'Instructions for using a computer and repairing a car.', 'A fictional story, imaginary characters, and magical events.'], ['IN'], 'Biographies focus on real, verifiable life events such as birth, education, career, and achievements.'),
        MC('Title', 'A biography about a Moroccan scientist who became internationally recognized for her research.', 'Choose the best title.',
          ['The Life and Achievements of a Moroccan Scientist', 'How to Become a Successful Scientist in Morocco', 'The Most Interesting Scientific Discoveries in History', 'Science and Technology in the Modern World'], ['TI'], 'This title accurately reflects that the text is a biography about a specific person’s life and achievements.'),
        MC('Relevance', 'Which sentence contains information that is least relevant in a short biography?', 'Choose the least relevant sentence.',
          ['She usually drinks tea in the afternoon.', 'She was born in Fez in 1985.', 'She studied biology at university.', 'She began her scientific career in 2008.'], ['UN', 'IN'], 'A daily habit like drinking tea is a trivial personal detail, not a significant biographical fact.')
      ] },
      { key: 'organise', name: 'Organizing Biographical Information', pts: 100, how: 'Choose the best answer.', qs: [
        MC('Birth information', 'Which sentence correctly presents a person’s birth information?', 'Choose the correct sentence.',
          ['He was born in Rabat in 1990.', 'He born in Rabat on 1990.', 'He has born in Rabat at 1990.', 'He is born in Rabat from 1990.'], ['TE', 'TX'], 'The correct structure is “was born” followed by “in” before a year.'),
        MC('Logical order', 'Which order is the most logical for a biography?', 'Choose the best order.',
          ['Birth → Education → Career → Major achievements', 'Career → Birth → Major achievements → Education', 'Major achievements → Career → Birth → Education', 'Education → Major achievements → Birth → Career'], ['CH'], 'A biography normally follows chronological order, starting with birth and moving through the person’s life.'),
        MC('Time expression', 'She was born ______ 1998.', 'Choose the correct time expression.',
          ['in', 'on', 'at', 'from'], ['TX'], '“In” is used with years: born in 1998.'),
        MC('Achievement', 'Choose the best sentence to describe an important achievement.', 'Which sentence is best?',
          ['In 2015, she won an international award for her research.', 'In 2015, she was usually going to the library after her classes.', 'In 2015, she likes reading about scientific discoveries.', 'In 2015, she will receive an international award for her work.'], ['TE'], 'Past achievements are described using the past simple tense, and “won an award” is a clear, specific accomplishment.'),
        MC('What comes next?', '“After graduating from university, he moved to Casablanca to begin his career.”', 'Which sentence logically follows?',
          ['He started working for a local organization.', 'He was born in Casablanca many years earlier.', 'He decided to attend primary school in his village.', 'He had not yet started his education at that time.'], ['CH'], 'This sentence continues the chronological sequence forward, right after he moved to begin his career.')
      ] },
      { key: 'language', name: 'The Language of Biography', pts: 100, how: 'Choose the best answer.', qs: [
        MC('Verb form', 'Fatima Mernissi ______ several influential books on Moroccan society.', 'Choose the correct form of the verb.',
          ['wrote', 'writes', 'writing', 'has write'], ['TE'], 'Past simple (“wrote”) is used to describe a completed action in a person’s life story.'),
        MC('Tense', 'By the time he started his first job, he ______ his university studies.', 'Choose the correct tense.',
          ['had completed', 'completes', 'has complete', 'was complete'], ['TE'], 'Past perfect (“had completed”) is used for an action completed before another past action.'),
        MC('Passive', 'The famous scientist ______ an international award in 2020.', 'Choose the correct passive structure.',
          ['was given', 'gave', 'is giving', 'has give'], ['TE'], 'The scientist received the award, so the passive form “was given” is correct.'),
        MC('Connector', 'He graduated from university in 2005. ______, he moved abroad to continue his studies.', 'Choose the best connector.',
          ['Afterwards', 'However', 'Although', 'Because'], ['TX'], '“Afterwards” correctly links two sequential events in time.'),
        MC('Sentence combination', 'Choose the sentence combination that is most appropriate for a biography.', 'Which one is best?',
          ['He graduated in 2004. Then, he began working as a teacher.', 'He graduated in 2004, but then he was born in 1980.', 'He graduated in 2004 because he was born in 1980.', 'He graduated in 2004, although he started primary school later.'], ['CH', 'TX'], 'This is the only option with a logical, chronological sequence of biographical events.')
      ] },
      { key: 'timeline', name: 'Timeline Builder: Put the Events in Order!', pts: 100, how: 'Tap the events in order.', qs: [
        { t: 'build', long: 1, pos: 1, round: 'Building a Biography', d: 'Birth → Education → Career → Achievement', fr: 'Her life:', bh: 'Tap the first event',
          key: ['She was born in Tangier in 1987.', 'She studied journalism at university.', 'She started working as a journalist.', 'She later became the editor of a national newspaper.'], extra: [],
          k: ['CH'], e: 'The logical timeline is: born → studied journalism → started working as a journalist → later became editor.' }
      ] },
      { key: 'build', name: 'Building a Biography', pts: 100, how: 'Choose the best answer.', qs: [
        MC('The irrelevant sentence', 'A short biography: Omar, born in Marrakech in 1992.', 'Which sentence is irrelevant?',
          ['His favourite football team has millions of supporters.', 'Omar was born in Marrakech in 1992.', 'He studied engineering at university.', 'He began working for an international company after graduation.'], ['UN'], 'This sentence is about his football preferences, which is unrelated to his education and career.'),
        MC('Transition', 'She graduated from university in 2006 and started her first job soon afterwards. ______, she became the manager of the company in 2015.', 'Choose the best transition.',
          ['Nine years later', 'The following morning', 'Before she was born', 'At the same time as her childhood'], ['TX'], 'This transition correctly marks the passage of time between 2006 and 2015.'),
        MC('Concluding sentence', 'Ibn Battuta was born in Tangier in 1304. In 1325, he began his famous journey to Mecca. He travelled through many parts of Africa, Asia, and Europe. During his travels, he visited numerous cities and met people from different cultures. His experiences were later recorded in the famous work known as the Rihla. ...', 'Choose the best concluding sentence.',
          ['His remarkable journeys made him one of the most famous travellers in history.', 'Tangier is a beautiful city in northern Morocco, near the Mediterranean Sea.', 'Many people today enjoy travelling to different countries around the world.', 'Travelling can sometimes be difficult and expensive for young people.'], ['CS'], 'This sentence sums up the significance of Ibn Battuta’s life and travels.', { small: 1 })
      ] },
      /* The teacher's final question offered four whole paragraphs; they cannot fit one phone screen, so (as in the Unit 9 and 10
         National Exam Challenges) the students build the right paragraph, sentence by sentence. The 4 cards are the teacher's right
         paragraph word for word; the extra card comes from the teacher's wrong paragraphs (wrong tense). */
      { key: 'final', name: 'Build the Biography: Final Challenge', pts: 100, exam: 1, how: 'Build it. One is extra.', qs: [
        { t: 'build', long: 1, pos: 1, round: 'Final challenge', d: 'A short biography of Nawal El Moutawakel', fr: 'Her biography:', bh: 'Tap the first sentence',
          key: ['Nawal El Moutawakel was born in Casablanca in 1962.', 'She became interested in athletics at a young age and developed a successful career in sport.', 'In 1984, she won the 400-metre hurdles at the Olympic Games, becoming the first Moroccan and African woman to win an Olympic gold medal.', 'Later, she became involved in sports administration.'],
          extra: ['She will win the 400-metre hurdles at the Olympic Games in 1984.'],
          k: ['CH', 'TE', 'IN'], e: 'Birth → athletics → the 1984 gold medal → sports administration. The extra card uses the future.' }
      ] }
    ]
  };
})();

window.RS_COPY = {
  storeKey: 'levelup-2bac-u2-writing-biography-q1-v2',
  heroKicker: 'LEVEL UP 2BAC · WRITING · UNIT 2',
  heroTitle: 'WRITING A BIOGRAPHY',
  heroQuiz: 'QUIZ',
  heroSub: 'Biography Writing: Interactive Practice · 20 points',
  missionHtml: 'A <b>biography</b> tells the story of a <b>real person’s life</b>, written by someone else. Present the important facts in <b>chronological order</b>, use <b>past tenses</b>, and link the events with <b>time expressions</b>.',
  formula: 'Birth → Education → Career → Achievements',
  cats: ['📖 Basics', '🗂️ Organisation', '✍️ Past tenses', '📅 Timeline', '🔗 Transitions', '🏅 Final challenge'],
  rulesHtml: [
    'Play the 6 activities in order. You have <b>one try</b> for each question.',
    'Activity 6, the <b>Final Challenge</b>: build a short biography sentence by sentence.',
    'You see the correct answer and an explanation straight away, and you can review your mistakes at the end.'
  ],
  beforeLast: 'Next: the Final Challenge. Build the biography!',
  msgs: [
    'Outstanding! You can organise a biography and tell a life in the right order.',
    'Well done! Review the activities where you lost points, then try again.',
    'You passed. Practise the chronological order and the past tenses again.',
    'Keep going! Re-read the plan: birth, education, career, achievements, in the past tense. Then try again.'
  ],
  fullMarks: '🏆 Biographer badge! You can tell a life story in the right order with the right tenses.'
};

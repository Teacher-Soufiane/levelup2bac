/* Unit 5 · Writing · Book Review · Quiz 1 (out of 20).
   2026-11-19: the teacher's 20 questions moved to the Unit 10 Writing page (shared engine). The questions and the right answers are
   the teacher's, word for word. Changes:
   - the 5 sections become 6 activities, like the Unit 9 and Unit 10 Writing quizzes;
   - the irrelevant-sentence question shows the four sentences as answer cards (no "Sentence 1–4"), so the answers can move;
   - the final challenge: the teacher's two last questions (choose the best of four whole reviews; order the six parts of a review)
     did not fit one screen, so, as in the Unit 10 National Exam Challenge, students build the review part by part in 5 steps
     (0.4 each = the teacher's 2 points). The right answers are the sentences of the teacher's best review, word for word; the wrong
     ones come from the teacher's three weaker reviews (wrong facts, no plot summary, vague and repetitive).
   Points are in hundredths (100 = 1 point). In choice items o[0] is the right answer; the app shuffles the options. */
window.RS_TAGS = [
  ['PU', 'Book review basics', 'The purpose: summarise the book, evaluate it, help readers decide'],
  ['BD', 'Book review basics', 'Book details: title, author, publication date, genre'],
  ['FO', 'Book review basics', 'Facts and opinions: a personal evaluation is not a checkable fact'],
  ['PL', 'Plot and characters', 'A short, accurate plot summary; the characters and their roles'],
  ['OP', 'Opinions', 'An opinion + a relevant reason about the book’s content (because …)'],
  ['AD', 'Opinions', 'Precise adjectives: profound, gripping, moving'],
  ['ST', 'Structure and language', 'The structure: introduction → genre → characters → plot summary → evaluation → recommendation'],
  ['RC', 'Structure and language', 'A recommendation: a suitable audience + a reason linked to the content'],
  ['LG', 'Structure and language', 'Relevance and grammar (subject–verb agreement)']
];

(function () {
  function MC(round, p, ask, o, k, e, x) { var q = { t: 'choice', round: round, p: p, ask: ask, o: o, k: k, e: e }; for (var i in (x || {})) q[i] = x[i]; return q; }
  var TASK = 'A book review of The Old Man and the Sea (Ernest Hemingway, 1952): accurate, well organized, with a plot summary, a personal evaluation and a recommendation.';
  function STEP(n, ask, o, k, e) { return { t: 'choice', round: 'Step ' + n + ' of 5', p: TASK, ask: ask, o: o, k: k, e: e, small: 1 }; }

  window.RS_QUIZ = {
    title: 'Book Review · Quiz 1',
    games: [
      { key: 'basics', name: 'Book Review Basics', pts: 100, how: 'Choose the best answer.', qs: [
        MC('The purpose of a book review', 'Your teacher asks you to write a book review of a novel you have read.', 'What is the main purpose of a book review?',
          ['To summarize the book, evaluate it, and help readers decide whether to read it', 'To retell the whole book chapter by chapter so readers know every event', 'To give a detailed biography of the author and list all of his books', 'To persuade readers to buy every book by the same author without exception'], ['PU'], 'A book review briefly summarizes the book, gives an evaluation, and helps readers decide whether it is worth reading. It is not a full retelling, an author biography, or an advertisement.', { small: 1 }),
        MC('Book information', '“Published in 1952, The Old Man and the Sea is a short novel by the American writer Ernest Hemingway. It tells the story of an elderly fisherman and his struggle with a giant fish.”', 'Who is the author and when was the book published?',
          ['Ernest Hemingway, 1952', 'Ernest Hemingway, 1926', 'Mark Twain, 1952', 'Herman Melville, 1851'], ['BD'], 'The extract states that the novel was published in 1952 and was written by the American writer Ernest Hemingway.'),
        MC('The genre', '“Set in a distant galaxy, this novel follows a crew of astronauts who discover an alien civilization that threatens Earth.”', 'What is the genre of this book?',
          ['Science fiction', 'Historical fiction', 'Detective story', 'Autobiography'], ['BD'], 'A distant galaxy, astronauts, and an alien civilization are typical features of science fiction.'),
        MC('Facts and opinions', 'Which sentence expresses a personal evaluation rather than factual information?', 'Choose the personal evaluation.',
          ['I found the ending of the novel deeply moving.', 'The novel was first published in the year 1952.', 'The story is set at sea near the coast of Cuba.', 'The book contains about one hundred printed pages.'], ['FO'], '“I found the ending of the novel deeply moving” expresses the reviewer’s own feelings. The other sentences state facts that can be checked.'),
        MC('Essential book details', '“This gripping adventure novel follows Santiago, an elderly fisherman, and Manolin, the young boy who admires him. When Santiago hooks an enormous marlin far from the shore, he must fight exhaustion, hunger, and eventually hungry sharks to bring his catch home.”', 'Which option correctly identifies the genre, the main characters, and the central conflict?',
          ['Adventure novel; Santiago and Manolin; Santiago’s struggle to bring his giant catch home', 'Romance; Santiago and a fisherman’s wife; a quarrel between two fishing families in town', 'Adventure novel; Manolin and the sharks; a competition between two rival fishing boats', 'Detective story; Santiago and a police officer; the search for a missing fish in the bay'], ['BD', 'PL'], 'Adventure novel; Santiago and Manolin; the struggle with the marlin and the sharks.', { small: 1 })
      ] },
      { key: 'plot', name: 'Plot and Characters', pts: 100, how: 'Choose the best answer.', qs: [
        MC('The best plot summary', 'Which sentence best summarizes the central story of The Old Man and the Sea?', 'Choose the best plot summary.',
          ['After a long period without a catch, an old Cuban fisherman hooks a giant marlin and struggles for days to bring it home, only to lose most of it to sharks.', 'After a long period without a catch, an old Cuban fisherman travels to Havana and becomes a famous baseball player, winning a national title in the end.', 'The Old Man and the Sea is a famous short novel written by the American author Ernest Hemingway, first published in 1952 and read by students worldwide.', 'I think the story is about a man who is very sad, and I felt sorry for him because his life seemed so hard and lonely throughout the whole book.'], ['PL'], 'A plot summary gives the main events briefly and accurately.', { small: 1 }),
        MC('The character’s role', '“Manolin is a young boy who used to fish with Santiago. Although his parents have made him work on another boat, he still brings Santiago food and bait and admires him deeply.”', 'What is Manolin’s role in the story?',
          ['Santiago’s young friend and devoted helper who cares for him', 'Santiago’s rival who competes with him for the biggest fish', 'Santiago’s son who owns the fishing boat and gives him orders', 'The main enemy who tries to stop Santiago from going to sea'], ['PL'], 'Manolin brings Santiago food and bait and admires him: a young friend and helper.', { small: 1 }),
        MC('Unsupported information', '“The Old Man and the Sea tells the story of Santiago, an elderly Cuban fisherman who has gone eighty-four days without catching a fish. Far out at sea, he hooks an enormous marlin and spends three days fighting it. Although he finally secures the fish to his boat, sharks attack and eat most of it. Santiago returns to the harbour exhausted, with only the skeleton left.”', 'Which is NOT in the review?',
          ['Santiago sold the marlin at the market for a high price.', 'Santiago spent three days fighting the enormous marlin.', 'Sharks attacked and ate most of the giant marlin.', 'Santiago had gone eighty-four days without catching a fish.'], ['PL'], 'Sharks ate most of the fish and only the skeleton was left, so he could not sell it.', { small: 1 })
      ] },
      { key: 'opinions', name: 'Expressing Opinions', pts: 100, how: 'Choose the best answer.', qs: [
        MC('Likes and reasons', 'Which sentence correctly expresses a positive opinion about a novel and supports it with a relevant reason?', 'Choose the best sentence.',
          ['I really enjoyed the novel because its simple language makes the powerful story easy to follow.', 'I really enjoyed the novel because it was published in 1952 by a very large and famous company.', 'I really enjoyed the novel because I really enjoyed it, and I enjoyed every single page of it.', 'I really enjoyed the novel, but the characters were boring and the story was too long to finish.'], ['OP'], 'A good opinion sentence gives a reason connected to the book’s quality. The publication date is not a reason, repeating the opinion is not a reason, and the remaining sentence contradicts the positive opinion.', { small: 1 }),
        MC('Complete the opinion', 'I did not enjoy this book because ______.', 'Complete the sentence with a logical reason.',
          ['the plot moved too slowly and little happened in the middle chapters', 'the story was full of exciting twists that kept me reading until the end', 'the writing was beautiful and the language was easy for me to read', 'its cover is blue and the pages are printed on thick white paper'], ['OP'], 'A reason for disliking a book must be negative and relevant to the book’s content. Two of the options are positive, and the cover colour is not a relevant reason.', { small: 1 }),
        MC('A personal preference', 'My favourite part of the book is the final struggle with the marlin because ______.', 'Choose the most appropriate reason.',
          ['it shows Santiago’s courage and determination in a dramatic way', 'the book has only one hundred pages and is easy to carry around', 'it was printed by a well-known company in a very large factory', 'I bought the book from a small bookshop near my house last year'], ['OP'], 'A reason for liking a part of the book should explain what makes that part special. Only one option refers to the content of the scene.', { small: 1 }),
        MC('The right adjective', 'This ______ novel explores deep questions about human life and suffering.', 'Choose the most appropriate adjective.',
          ['profound', 'hilarious', 'ordinary', 'careless'], ['AD'], 'A novel that explores deep questions about life and suffering is best described as “profound”. “Hilarious”, “ordinary” and “careless” do not suit such a serious theme.'),
        MC('A weak review sentence', 'Weak sentence: “The book was good.”', 'Which sentence improves it with a clearer evaluation and a specific reason?',
          ['The book was gripping because its fast-paced plot kept me guessing until the final page.', 'The book was really, really good, and it was very good from the beginning to the end.', 'The book was good and I liked it a lot, because I like good books and this was one.', 'The book was good, I think, although I am not sure what exactly made it good for me.'], ['AD', 'OP'], 'A strong evaluation uses a precise adjective (“gripping”) and a specific reason (the fast-paced plot). The other options only repeat vague opinions.', { small: 1 })
      ] },
      { key: 'structure', name: 'Structure and Language of a Review', pts: 100, how: 'Choose the best answer.', qs: [
        MC('The conclusion', '“This is an inspiring story about courage and perseverance. I would recommend it to anyone who enjoys short, powerful novels.”', 'What is the function of this section of the review?',
          ['It gives an overall evaluation and recommends the book to readers.', 'It introduces the author and gives the title and the publication date.', 'It describes the setting and introduces the main characters in detail.', 'It retells the whole plot from the beginning of the story to the end.'], ['ST'], 'The section sums up the reviewer’s overall opinion and tells readers who would enjoy the book, which is the function of a conclusion.', { small: 1 }),
        MC('The irrelevant sentence', 'Sentences from a review of an adventure novel.', 'Which sentence does NOT belong in the review?',
          ['The author’s neighbour has a pet parrot.', 'The novel follows a group of explorers searching for a lost island.', 'Their journey is full of danger and unexpected discoveries.', 'I recommend it to readers who enjoy exciting adventures.'], ['LG'], 'The author’s neighbour’s pet has nothing to do with the plot, the characters, or the reviewer’s evaluation of the novel.'),
        MC('A grammar error', 'Which sentence contains a grammatical error? (Hint: check subject–verb agreement.)', 'Choose the sentence with the error.',
          ['The characters in this novel is very realistic and lively.', 'The plot of this novel is clear and easy to follow.', 'Santiago shows great courage during the long fight at sea.', 'The readers enjoy the ending of this novel very much.'], ['LG'], 'The subject “characters” is plural, so the verb must be “are”: The characters in this novel are very realistic and lively. The other sentences have correct subject–verb agreement.'),
        MC('The strongest recommendation', 'Which is the strongest recommendation for The Old Man and the Sea, considering its content and its intended audience?', 'Choose the strongest recommendation.',
          ['I would recommend this novel to teenagers and adults who enjoy inspiring stories about courage, because its short length and simple language make it easy to read.', 'I would recommend this novel to readers who enjoy fast-paced science fiction with lots of explosions, because its long chapters make it easy to read.', 'I would recommend this novel to everyone in the world, because every single person must read it immediately and nobody should ever ignore it.', 'I would recommend this novel to anyone who visits a bookshop, because it can be found in bookshops and libraries in many different cities.'], ['RC'], 'A strong recommendation names a suitable audience and gives a reason linked to the book’s content. The other options suggest the wrong audience, exaggerate, or give only practical information.', { small: 1 })
      ] },
      /* The teacher's Q18 (four whole paragraphs) did not fit a phone: students now build the right paragraph, word for word,
         from its parts; the extra card comes from the teacher's wrong paragraph about the author. */
      { key: 'missing', name: 'Complete the Review: the Missing Section', pts: 100, how: 'Build it. One is extra.', qs: [
        { t: 'build', long: 1, pos: 1, round: 'The missing plot summary', d: 'Introduction → ______ → Evaluation and recommendation', fr: 'The plot summary:', bh: 'Tap the first part',
          key: ['After eighty-four days without catching a fish,', 'Santiago sails far out to sea and hooks an enormous marlin.', 'He fights the fish for three days,', 'but sharks eat it before he can bring it home.'],
          extra: ['Ernest Hemingway was an American writer.'],
          k: ['PL', 'ST'], e: 'The missing section is the plot summary: the main events, briefly and in order. Author information does not belong here.' }
      ] },
      { key: 'build', name: 'Build the Book Review: Final Challenge', pts: 40, exam: 1, how: 'Build the review.',
        win: 'Excellent work! Introduction and genre → characters → plot summary → evaluation with a reason → recommendation.',
        lose: 'Not quite! A good review is accurate and well organized, with a plot summary, a reasoned evaluation and a recommendation.', qs: [
        STEP(1, 'Choose the introduction: the book and its genre.', ['The Old Man and the Sea is a short novel by Ernest Hemingway, published in 1952. It is an adventure story set at sea near Cuba.', 'The Old Man and the Sea is a long romance by Mark Twain, published in 1920. It is a love story set in a big city in Italy.', 'I would recommend this book to everyone, and I loved it a lot. Santiago catches a fish and then some sharks come.'], ['BD', 'ST'], 'The right title, author, date and genre: Hemingway, 1952, an adventure story.'),
        STEP(2, 'Choose the main characters.', ['The main characters are Santiago, an elderly fisherman, and Manolin, the young boy who admires him.', 'The main characters are Santiago, a young sailor, and his wife, who live together in a big city in Italy.', 'Then there is the boy, and then there is the old man, and then there is the fish again.'], ['PL', 'ST'], 'Santiago is an elderly fisherman; Manolin is the boy who admires him.'),
        STEP(3, 'Choose the plot summary.', ['After eighty-four days without a catch, Santiago hooks an enormous marlin and fights it for three days, only for sharks to destroy his prize before he reaches the harbour.', 'Santiago wins a fishing competition in the final chapter and becomes very rich and famous. Together they open a restaurant in Paris and live happily there for many years.', 'The book is divided into short sections, and the language is simple, clear, and direct, which suits young readers.'], ['PL', 'ST'], 'The main events, briefly and accurately. The last option describes the book but gives no plot summary.'),
        STEP(4, 'Choose the personal evaluation.', ['I found the story deeply moving because Santiago’s courage never fades, even in defeat.', 'I found the story exciting because the ending is happy and full of joy.', 'My friends told me that it is a very good book, and my teacher said that it is good to read.'], ['OP', 'ST'], 'Your own opinion + a reason linked to the story. The story does not end happily.'),
        STEP(5, 'Choose the recommendation.', ['I would recommend it to readers who enjoy short, inspiring stories.', 'I would recommend it to everyone who enjoys romantic stories.', 'In the end it is a good book and you should read it because it is good.'], ['RC', 'ST'], 'A suitable audience and a reason linked to the book: short and inspiring.')
      ] }
    ]
  };
})();

window.RS_COPY = {
  storeKey: 'levelup-2bac-u5-writing-book-review-q1-v2',
  heroKicker: 'LEVEL UP 2BAC · WRITING · UNIT 5',
  heroTitle: 'BOOK REVIEW',
  heroQuiz: 'QUIZ 1',
  heroSub: 'Book Review: Interactive Practice · 20 points',
  missionHtml: 'A <b>book review</b> presents a book, sums up its <b>plot</b>, gives your <b>opinion with reasons</b>, and tells readers whether to read it.',
  formula: 'Introduction → Genre → Characters → Plot summary → Evaluation → Recommendation',
  cats: ['📚 Basics', '🧭 Plot & characters', '💬 Opinions', '🗂️ Structure', '🧩 Missing part', '📰 Full review'],
  rulesHtml: [
    'Play the 6 activities in order. You have <b>one try</b> for each question.',
    'Activity 6, the <b>Final Challenge</b>: build a complete book review step by step.',
    'You see the correct answer and an explanation straight away, and you can review your mistakes at the end.'
  ],
  beforeLast: 'Next: the Final Challenge. Build the book review!',
  msgs: [
    'Excellent! You can write a clear, well-organized book review.',
    'Very good! You understand the main conventions of book-review writing.',
    'Good! Review plot summaries, opinions with reasons, and recommendations.',
    'Keep practising! Start with the basic purpose and parts of a book review, then try again.'
  ],
  fullMarks: '🏆 Critic badge! Your review is accurate, well organized and convincing.'
};

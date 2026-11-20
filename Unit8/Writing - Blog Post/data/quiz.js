/* Unit 8 · Writing · Blog Post · Quiz 1 (out of 20). "Blog Post: Interactive Practice"
   Points are in hundredths (50 = 0.5 point); the total must be 2000. Every item lists k = the skills it tests (RS_TAGS).
   In choice and err items the first option is the correct one; the app shuffles.
   Every task is auto-marked: students recognise, sort, choose, order and correct; they never type a free blog post (not fairly markable).
   Points: 3 / 3 / 3.5 / 3.5 / 3 / 4 (the brief gives only the total, 20).
   2026-11-19: moved to the Unit 10 Writing page (shared engine, texts in RS_COPY). Max 1 point per item: the Blog Post Architect
   scores 0.25 per card in its right place (q.pos), and a new Headline Battle item (Saving Water) keeps the total at 20.
   Instructions are one short line; wrong options are longer, so the right one is not always the longest. */
window.RS_TAGS = [
  ['TI', 'The four parts', 'Title: catchy, relevant and engaging'],
  ['IN', 'The four parts', 'Introduction: introduces the topic and hooks the reader'],
  ['BO', 'The four parts', 'Body: several paragraphs with key points and details (subheadings, images, bullet points)'],
  ['CO', 'The four parts', 'Conclusion: sums up the main ideas + a call to action'],
  ['TP', 'Useful expressions', 'Introducing the topic: Today, I’m going to talk about… / In this post, I will share…'],
  ['GI', 'Useful expressions', 'Giving information: Did you know that…? / Research shows that…'],
  ['OP', 'Useful expressions', 'Expressing opinion: In my opinion, … / I strongly believe that…'],
  ['EN', 'Useful expressions', 'Engaging the reader: Let me know in the comments! / What do you think?']
];

(function () {
  function X(t) { return { t: t, x: 1 }; }
  /* Headline Battle: the topic is shown with every question */
  function HL(topic, ask, o, e) { return { t: 'choice', p: 'Topic: ' + topic, ask: ask, o: o, k: ['TI'], e: e }; }
  /* Become a Blogger: the task card is shown with every step */
  var TASK = 'Topic: The Benefits of Reading · Readers: teenagers on a school blog';
  function STEP(n, ask, o, k, e) { return { t: 'choice', round: 'Step ' + n + ' of 8', p: TASK, ask: ask, o: o, k: k, e: e }; }

  window.RS_QUIZ = {
    title: 'Blog Post · Quiz 1',
    games: [
      { key: 'detective', name: 'Blog Post Detective', pts: 25, how: 'Match each line to a part.', qs: [
        { t: 'match', round: 'Round 1 of 4', pairs: [
          ['A catchy name that grabs attention', 'Title', ['TI']],
          ['Presents the topic and hooks the reader', 'Introduction', ['IN']],
          ['Sums up and asks readers to act', 'Conclusion', ['CO']]] },
        { t: 'match', round: 'Round 2 of 4', pairs: [
          ['Develops the ideas in several paragraphs', 'Body', ['BO']],
          ['Top 5 Secrets of Happy Students', 'Title', ['TI']],
          ['Have you ever wondered why teens love games?', 'Introduction', ['IN']]] },
        { t: 'match', round: 'Round 3 of 4', pairs: [
          ['Tip 2: Eat breakfast. It gives you energy.', 'Body', ['BO']],
          ['So, why not start today? Share your tips below!', 'Conclusion', ['CO', 'EN']],
          ['Today, I’m going to talk about plastic.', 'Introduction', ['IN', 'TP']]] },
        { t: 'match', round: 'Round 4 of 4', pairs: [
          ['Saving the Planet Starts at Home!', 'Title', ['TI']],
          ['Subheadings, bullet points and images', 'Body', ['BO']],
          ['To sum up, small changes matter. What will you do?', 'Conclusion', ['CO']]] }
      ] },
      { key: 'sorter', name: 'Expression Sorter: Where Does It Belong?', pts: 25, cats: ['Introducing', 'Informing', 'Opinion', 'Engaging'],
        how: 'Tap the group for each.', qs: [
        { t: 'sort', round: 'Set 1 of 3', cards: [
          ['Have you ever wondered…?', 0, ['TP']],
          ['Did you know that…?', 1, ['GI']],
          ['In my opinion, …', 2, ['OP']],
          ['Let me know in the comments!', 3, ['EN']]] },
        { t: 'sort', round: 'Set 2 of 3', cards: [
          ['This post is all about…', 0, ['TP']],
          ['Research shows that…', 1, ['GI']],
          ['From my point of view, …', 2, ['OP']],
          ['I’m convinced that…', 2, ['OP']]] },
        { t: 'sort', round: 'Set 3 of 3', cards: [
          ['Let’s talk about…', 0, ['TP']],
          ['Here are some facts: …', 1, ['GI']],
          ['Why not give it a try?', 3, ['EN']],
          ['Leave a comment below!', 3, ['EN']]] }
      ] },
      { key: 'headline', name: 'Headline Battle: Choose the Catchiest Title!', pts: 50, how: 'Choose the best title.', qs: [
        HL('Protecting the Environment', 'Choose the catchiest title.', ['5 Easy Ways to Save Our Planet Today', 'The Environment', 'Some Things About Stuff and Other Stuff', 'My Holiday in Paris With My Family'], 'A number + a promise + the topic: catchy and relevant. “The Environment” is boring; the others are vague or off-topic.'),
        HL('The Benefits of Reading', 'Choose the catchiest title.', ['Open a Book, Open Your Mind!', 'Reading', 'A Text About Books in General', 'How to Cook Couscous'], 'A short, lively title that tells the reader what the post gives them.'),
        HL('How to Stay Healthy', 'Choose the catchiest title.', ['7 Simple Habits for a Healthier You', 'General Health Information for People', 'Things', 'The Best Phones of the Year Are Here'], 'Numbers and “you” speak directly to the reader.'),
        HL('Learning English', 'Choose the catchiest title.', ['Speak English Like a Pro in 30 Days!', 'English', 'My Essay on Languages and Their History', 'Why Cats Sleep So Much During the Day'], 'A clear promise makes readers want to click. A blog post is not an essay.'),
        HL('Teenagers and Social Media', 'Which title is NOT relevant?', ['The Best Pizza in Town', 'Is Social Media Stealing Your Time?', '5 Smart Rules for Social Media', 'Likes, Selfies and You'], 'Pizza has nothing to do with social media. A title must match the topic.'),
        HL('Saving Water', 'Choose the catchiest title.', ['Every Drop Counts: 4 Ways to Save Water', 'Water', 'Facts About Some Liquids and Other Things', 'My Favourite Football Team of the Season'], 'A clever phrase + a number + the topic. “Water” is boring, the third title is vague and the last is off-topic.'),
        HL('Volunteering', 'Which title is too vague?', ['Stuff People Do', 'Volunteer Today, Change Lives Tomorrow', 'How Helping Others Made Me Happier', '3 Reasons Teens Should Volunteer'], '“Stuff People Do” could be about anything: it does not tell the reader the topic.')
      ] },
      { key: 'architect', name: 'Blog Post Architect: Build the Structure!', pts: 175, how: 'Order it. One is extra.', qs: [
        { t: 'build', long: 1, pos: 1, fr: 'Your blog post:', bh: 'Tap the parts in order', key: ['3 Habits for a Healthier You!', 'Have you ever felt tired all day?', 'First, eat a good breakfast.', 'Second, move more.', 'Finally, sleep well.', 'To sum up, small habits matter.', 'Share your tips below!'], extra: ['Dear Sir,'], k: ['TI', 'IN', 'BO', 'CO', 'EN'], e: 'Title → hook → First, Second, Finally → summary → call to action.' },
        { t: 'build', long: 1, pos: 1, fr: 'Your blog post:', bh: 'Tap the parts in order', key: ['Why English Opens Every Door', 'Did you know a billion people use it?', 'First, travel easily.', 'Also, find a job.', 'Finally, enjoy the internet.', 'In short, English is a key.', 'Which language are you learning?'], extra: ['I am writing to complain.'], k: ['TI', 'IN', 'GI', 'BO', 'CO', 'EN'], e: 'Title → a fact as a hook → First, Also, Finally → summary → a question.' }
      ] },
      { key: 'doctor', name: 'Blog Post Doctor: Spot the Mistakes!', pts: 50, how: 'Tap the mistake, then fix.', qs: [
        { t: 'err', round: 'Boring title', fr: 'Topic: study tips. Find the mistake:', w: ['Title:', X('Some Information'), 'Intro:', 'Do', 'you', 'want', 'better', 'marks?'],
          o: ['5 Study Tricks That Really Work!', 'Some Information', 'Studying, Learning and Doing Homework'], k: ['TI'], e: 'A title must be catchy and say what the post is about.' },
        { t: 'err', round: 'Irrelevant title', fr: 'Find the mistake:', w: ['Title:', X('My Summer Holiday'), 'Intro:', 'Let’s', 'talk', 'about', 'healthy', 'food.'],
          o: ['Eat Well, Feel Great!', 'My Summer Holiday', 'Food and Other Things'], k: ['TI'], e: 'The post is about healthy food, so the title must be too.' },
        { t: 'err', round: 'Weak introduction', fr: 'Introduction · Find the mistake:', w: [X('I will write about sport.'), 'Sport', 'keeps', 'you', 'fit', 'and', 'happy.'],
          o: ['Have you ever wondered why sport makes you happy?', 'I will write about sport.', 'To sum up, sport is good for everyone in the world.'], k: ['IN', 'TP'], e: 'Hook the reader with a question or a surprising fact.' },
        { t: 'err', round: 'Missing details', fr: 'Body · Find the mistake:', w: ['Tip', '1:', 'Read', 'every', 'day.', X('It is good.')],
          o: ['It builds your vocabulary and helps you relax.', 'It is good.', 'It is very, very good and I like it a lot, really.'], k: ['BO'], e: 'A body paragraph needs details that explain the point.' },
        { t: 'err', round: 'Wrong expression', fr: 'Body · Find the mistake:', w: [X('In my opinion,'), 'plastic', 'takes', '450', 'years', 'to', 'disappear.'],
          o: ['Scientists say that', 'In my opinion,', 'Let me know in the comments,'], k: ['GI', 'OP'], e: 'This is a fact, not an opinion: use an expression for giving information.' },
        { t: 'err', round: 'No call to action', fr: 'Conclusion · Find the mistake:', w: ['To', 'sum', 'up,', 'reading', 'is', 'fun.', X('The end.')],
          o: ['What will you read next? Tell us below!', 'The end.', 'Yours faithfully, the writer of this blog post.'], k: ['CO', 'EN'], e: 'End with a call to action: ask readers to comment, share or try something.' }
      ] },
      { key: 'blogger', name: 'Become a Blogger: The Ultimate Blog Challenge!', pts: 50, exam: 1, how: 'Build the blog post.', qs: [
        STEP(1, 'Choose the best title.', ['Why Reading Is Your Secret Superpower!', 'Reading', 'A Text About Books and Some Other Things', 'How to Fix Your Bike in Ten Easy Steps'], ['TI'], 'Catchy, relevant and engaging.'),
        STEP(2, 'Introduction: hook the reader.', ['Have you ever wondered why top students read every day?', 'In conclusion, read books because they are very good.', 'Share this post with all your friends and family today!', 'Reading.'], ['IN', 'TP'], 'A question pulls the reader in.'),
        STEP(3, 'Introduction: present the topic.', ['In this post, I will share three benefits of reading.', 'Leave a comment below and share your favourite book!', 'To sum up, reading is great for everyone at every age.', 'Yours faithfully, Nora'], ['IN', 'TP'], 'Tell readers what the post is about.'),
        STEP(4, 'Body: the first point.', ['First, reading builds your vocabulary every day.', 'First, reading is boring and useless for most teenagers.', 'Finally, the end.', 'First, my phone is new.'], ['BO'], 'A relevant point that fits the topic.'),
        STEP(5, 'Body: the second point.', ['Also, did you know that reading can reduce stress?', 'Also, reading.', 'In my opinion, Paris is the most beautiful city in Europe.', 'Have you ever wondered?'], ['BO', 'GI'], 'A new point with information.'),
        STEP(6, 'Body: the third point.', ['Finally, I believe reading makes you more creative.', 'Finally, I don’t know.', 'Finally, let’s talk about football and last night’s match.', 'To begin with, the end.'], ['BO', 'OP'], 'A third point with your opinion: the body has more than two paragraphs.'),
        STEP(7, 'Conclusion: sum up.', ['To sum up, reading improves your words, mood and imagination.', 'To sum up, football is fun and everyone should play it.', 'Today, I’m going to talk about reading and why it matters.', 'Did you know that?'], ['CO'], 'Repeat the main ideas in one sentence.'),
        STEP(8, 'Conclusion: call to action.', ['Why not start a new book tonight? Tell us your favourite below!', 'The end.', 'Stop reading now and close this page, because it is too long.', 'Dear Sir or Madam,'], ['CO', 'EN'], 'Ask readers to act and to comment.')
      ] }
    ]
  };
})();

window.RS_COPY = {
  storeKey: 'levelup-2bac-u8-writing-blog-post-q1-v2',
  heroKicker: 'LEVEL UP 2BAC · WRITING · UNIT 8',
  heroTitle: 'BLOG POST',
  heroQuiz: 'QUIZ 1',
  heroSub: 'Blog Post: Interactive Practice · 20 points',
  missionHtml: 'A <b>blog post</b> has <b>four parts</b>. Hook your readers, develop your ideas in <b>more than two paragraphs</b>, and end with a <b>call to action</b>.',
  formula: 'Title → Introduction → Body → Conclusion',
  cats: ['📰 Title', '🪝 Introduction', '📝 Body', '🎯 Conclusion', '💬 Expressions', '📣 Call to action'],
  rulesHtml: [
    'Play the 6 activities in order. You have <b>one try</b> for each question: tap <b>Check</b> to see if you are right.',
    'Activity 6, <b>Become a Blogger</b>: you build a full blog post step by step.',
    'You see the correct answer and an explanation straight away, and you can review your mistakes at the end.'
  ],
  beforeLast: 'Next: Become a Blogger. Build a full blog post!',
  msgs: [
    'Outstanding! You can build a blog post from a catchy title to a call to action.',
    'Well done! Review the activities where you lost points, then try again.',
    'You passed. Practise the four parts and the useful expressions again.',
    'Keep going! Re-read the four parts: title, introduction, body, conclusion. Then try again.'
  ],
  fullMarks: '🏆 Blogger badge unlocked! You can build a blog post from a catchy title to a call to action.'
};

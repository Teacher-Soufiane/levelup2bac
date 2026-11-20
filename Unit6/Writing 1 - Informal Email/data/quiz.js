/* Unit 6 · Writing · Informal Email · Quiz 1 (out of 20). "Informal Email: Interactive Practice"
   Points are in hundredths (50 = 0.5 point); the total must be 2000. Every item lists k = the skills it tests (RS_TAGS).
   In choice and err items the first option is the correct one; the app shuffles (q.show = fixed display order).
   Every task is auto-marked: students recognise, order, choose and correct; they never type a free email (not fairly markable).
   Points: 3 / 3.5 / 3.5 / 3 / 3 / 4 (the brief gives only the total, 20).
   2026-11-19: moved to the Unit 10 Writing page (shared engine, texts in RS_COPY). Max 1 point per item: the two Email Builders
   score 0.25 per card in its right place (q.pos), and one new "Where does it belong?" item keeps the total at 20.
   Instructions are one short line; some wrong options in the Inbox Mission are longer, so the right one is not always the longest. */
window.RS_TAGS = [
  ['SA', 'The five parts', 'Salutation: Hi … , / Dear … , / Hey … ,'],
  ['OP', 'The five parts', 'Opening sentence: How are you doing? / Thanks for your email.'],
  ['BO', 'The five parts', 'Body: the message and the advice'],
  ['CL', 'The five parts', 'Closing sentence: I can’t wait to catch up in person! / Write back soon!'],
  ['SO', 'The five parts', 'Sign-off: Best wishes, / Love, / Take care, + your name'],
  ['SQ', 'Language', 'Ordering advice: First, Second, Lastly / To begin with, Also, Finally'],
  ['TN', 'Language', 'Friendly tone: informal expressions, not formal ones (Yours faithfully, I am writing to inform you…)']
];

(function () {
  function G() { return { a: [].slice.call(arguments) }; }
  function X(t) { return { t: t, x: 1 }; }
  /* Where Does It Belong?: the five parts, always shown in email order; c = index of the right part */
  var P5 = ['Salutation', 'Opening sentence', 'Body', 'Closing sentence', 'Sign-off'], K5 = ['SA', 'OP', 'BO', 'CL', 'SO'];
  function PART(p, c, e) {
    var o = [P5[c]].concat(P5.filter(function (_, i) { return i !== c; }));
    return { t: 'choice', p: p, ask: 'Which part of the email is this?', o: o, show: P5.map(function (x) { return o.indexOf(x); }), k: [K5[c]], e: e };
  }
  /* Inbox Mission: the friend's email is shown with every step */
  var YAS = 'Hi! The Bac exam is in two months and I feel so stressed. I can’t organise my revision. What should I do? Love, Yasmine';
  function STEP(n, ask, o, k, e) { return { t: 'choice', round: 'Step ' + n + ' of 8', p: YAS, ask: ask, o: o, k: k, e: e }; }

  window.RS_QUIZ = {
    title: 'Informal Email · Quiz 1',
    games: [
      { key: 'parts', name: 'Email Parts Detective', pts: 25, how: 'Match each line to a part.', qs: [
        { t: 'match', round: 'Round 1 of 4', pairs: [
          ['Hi Jamal,', 'Salutation', ['SA']],
          ['How are you doing?', 'Opening sentence', ['OP']],
          ['Best wishes, Karim', 'Sign-off', ['SO']]] },
        { t: 'match', round: 'Round 2 of 4', pairs: [
          ['First, make a study plan.', 'Body', ['BO', 'SQ']],
          ['I can’t wait to catch up in person!', 'Closing sentence', ['CL']],
          ['Dear Salma,', 'Salutation', ['SA']]] },
        { t: 'match', round: 'Round 3 of 4', pairs: [
          ['Thanks for your email!', 'Opening sentence', ['OP']],
          ['Lastly, get enough sleep.', 'Body', ['BO', 'SQ']],
          ['Take care, Nadia', 'Sign-off', ['SO']]] },
        { t: 'match', round: 'Round 4 of 4', pairs: [
          ['Write back soon!', 'Closing sentence', ['CL']],
          ['Love, Youssef', 'Sign-off', ['SO']],
          ['Second, revise with a friend.', 'Body', ['BO', 'SQ']]] }
      ] },
      { key: 'where', name: 'Where Does It Belong?', pts: 50, how: 'Which part is it?', qs: [
        PART('Hello Amina,', 0, 'A greeting + the friend’s name + a comma = the salutation.'),
        PART('I’m sorry I didn’t write sooner. I was busy with my exams.', 1, 'Before the main message you apologise or react to your friend’s email: the opening sentence.'),
        PART('Second, you should join a club to make new friends.', 2, 'Advice with a sequencing word (Second) belongs to the body.'),
        PART('Hope to hear from you soon!', 3, 'A friendly last sentence before the sign-off: the closing sentence.'),
        PART('Love, Hamza', 4, 'A short friendly word + your name: the sign-off.'),
        PART('Thanks a lot for your lovely email.', 1, 'Thanking your friend for their email opens the email.'),
        PART('Cheers, Imane', 4, '“Cheers” + your name at the very end of a friendly email: the sign-off.')
      ] },
      { key: 'order', name: 'Email Builder: Put It in Order!', pts: 175, how: 'Order it. One is extra.', qs: [
        { t: 'build', long: 1, pos: 1, fr: 'Your email:', bh: 'Tap the parts in order', key: ['Hi Omar,', 'Thanks for your email!', 'First, join a club.', 'Second, talk to classmates.', 'Lastly, invite them to study.', 'Write back soon!', 'Best wishes, Ali'], extra: ['Yours faithfully,'], k: ['SA', 'OP', 'BO', 'SQ', 'CL', 'SO', 'TN'], e: 'Salutation → opening → First, Second, Lastly → closing → sign-off. “Yours faithfully” is too formal.' },
        { t: 'build', long: 1, pos: 1, fr: 'Your email:', bh: 'Tap the parts in order', key: ['Hey Sara,', 'How are you doing?', 'First, watch films in English.', 'Then, read every evening.', 'Finally, speak in class.', 'Good luck, and keep in touch!', 'Love, Hiba'], extra: ['I am writing to complain.'], k: ['SA', 'OP', 'BO', 'SQ', 'CL', 'SO', 'TN'], e: 'First → Then → Finally gives the order of the advice. A complaint sentence does not belong in a friendly email.' }
      ] },
      { key: 'missing', name: 'The Missing Expressions Challenge', pts: 25, how: 'Choose for each gap.', qs: [
        { t: 'gapt', round: 'Email 1 · Part 1 of 2', bank: ['How are you doing?', 'I just want to give you my advice', 'First', 'Yours faithfully', 'To whom it may concern'],
          s: ['Hi Rania, ', G('How are you doing?'), ' You asked me about your trip to Chefchaouen, so ', G('I just want to give you my advice'), '. ', G('First'), ', book your hotel early.'],
          k: ['OP', 'BO', 'SQ', 'TN'], e: 'Opening question · introduce the advice · First.' },
        { t: 'gapt', round: 'Email 1 · Part 2 of 2', bank: ['Second', 'Lastly', 'I can’t wait to catch up in person!', 'Firstly', 'I look forward to your reply'],
          s: [G('Second'), ', take warm clothes: the nights are cold. ', G('Lastly'), ', don’t forget your camera! ', G('I can’t wait to catch up in person!'), ' Best wishes, Lamia'],
          k: ['SQ', 'CL', 'TN'], e: 'Second · Lastly · a friendly closing sentence.' },
        { t: 'gapt', round: 'Email 2 · Part 1 of 2', bank: ['Thanks for your email', 'Here’s what I think', 'To begin with', 'Dear Sir', 'Finally'],
          s: ['Hey Younes, ', G('Thanks for your email'), '! I’m sorry you can’t sleep well. ', G('Here’s what I think'), ': ', G('To begin with'), ', stop using your phone before bed.'],
          k: ['OP', 'BO', 'SQ', 'TN'], e: 'Thank your friend · introduce the advice · To begin with.' },
        { t: 'gapt', round: 'Email 2 · Part 2 of 2', bank: ['Also', 'Finally', 'Take care', 'To begin with', 'Yours sincerely'],
          s: [G('Also'), ', avoid coffee in the evening. ', G('Finally'), ', go to bed at the same time every day. ', G('Take care'), ', Mehdi'],
          k: ['SQ', 'SO', 'TN'], e: 'Also · Finally · a friendly sign-off.' }
      ] },
      { key: 'doctor', name: 'Email Doctor: Find and Fix!', pts: 50, how: 'Tap the mistake, then fix.', qs: [
        { t: 'err', round: 'Too formal', fr: 'Find the mistake:', w: ['Hi', 'Ahmed', ',', 'I', X('am writing to inform you'), 'that', 'I', 'passed', 'my', 'exams', '!'],
          o: ['Hi Ahmed, I just wanted to tell you that I passed my exams!', 'Hi Ahmed, I am writing to inform you that I passed my exams!', 'Hi Ahmed, I wish to notify you that I passed my exams!'], k: ['TN', 'OP'], e: '“I am writing to inform you” is for formal letters. To a friend: I just wanted to tell you…' },
        { t: 'err', round: 'Wrong sign-off', fr: 'Find the mistake:', w: ['See', 'you', 'soon', '!', X('Yours faithfully,'), 'Ali'],
          o: ['See you soon! Best wishes, Ali', 'See you soon! Yours faithfully, Ali', 'See you soon! Yours sincerely, Ali'], k: ['SO', 'TN'], e: '“Yours faithfully / sincerely” are formal. For a friend: Best wishes, Love, Take care.' },
        { t: 'err', round: 'Sequencing', fr: 'Find the mistake:', w: ['First,', 'make a plan.', X('Finally,'), 'revise every day.', 'Lastly,', 'sleep well.'],
          o: ['First, make a plan. Second, revise every day. Lastly, sleep well.', 'First, make a plan. Finally, revise every day. Lastly, sleep well.', 'First, make a plan. Firstly, revise every day. Lastly, sleep well.'], k: ['SQ'], e: '“Finally” can only introduce the last point. The middle point is Second (or Then).' },
        { t: 'err', round: 'Too formal', fr: 'Find the mistake:', w: ['That’s', 'all', 'for', 'now', '.', X('I await your prompt reply.')],
          o: ['That’s all for now. Write back soon!', 'That’s all for now. I await your prompt reply.', 'That’s all for now. Yours faithfully.'], k: ['CL', 'TN'], e: 'A friendly closing sentence: Write back soon! / I can’t wait to hear from you!' },
        { t: 'err', round: 'Too formal', fr: 'Find the mistake:', w: ['Hey', 'Lina', ',', X('I acknowledge receipt of your letter.'), 'Great', 'to', 'hear', 'from', 'you', '!'],
          o: ['Hey Lina, thanks for your email! Great to hear from you!', 'Hey Lina, I acknowledge receipt of your letter. Great to hear from you!', 'Hey Lina, please find my reply attached. Great to hear from you!'], k: ['OP', 'TN'], e: 'Open a friendly email with: Thanks for your email!' },
        { t: 'err', round: 'Misplaced sentence', fr: 'Which part is in the wrong place?', w: ['Hi Sam,', X('Best wishes, Reda'), 'How are you?', 'Try to relax.', 'See you soon!'],
          o: ['Hi Sam, How are you? Try to relax. See you soon! Best wishes, Reda', 'Best wishes, Reda. Hi Sam, How are you? Try to relax. See you soon!', 'Hi Sam, How are you? Best wishes, Reda. Try to relax. See you soon!'], k: ['SO'], e: 'The sign-off always comes last, after the closing sentence.' }
      ] },
      { key: 'inbox', name: 'Inbox Mission: Reply to Your Friend!', pts: 50, exam: 1, how: 'Build your reply.', qs: [
        STEP(1, 'Choose the best salutation.', ['Hi Yasmine,', 'Dear Madam,', 'To whom it may concern,', 'Yasmine:'], ['SA', 'TN'], 'A friend → Hi + name + comma.'),
        STEP(2, 'Choose the best opening sentence.', ['Thanks for your email. I’m sorry you feel stressed.', 'I am writing to apply for the job you advertised last week.', 'Lastly, good luck!', 'Yours sincerely,'], ['OP'], 'Thank her and react to her problem.'),
        STEP(3, 'Introduce your advice.', ['Don’t worry! I just want to give you my advice.', 'I hereby inform you of the following decisions of our committee.', 'Love, Hiba', 'Finally, I hope you are fine.'], ['BO', 'TN'], 'A friendly sentence that leads into the advice.'),
        STEP(4, 'Choose your first piece of advice.', ['First, make a revision timetable for each subject.', 'First, stay up all night every day and skip your breakfast.', 'Lastly, make a revision timetable.', 'Best wishes, make a timetable.'], ['BO', 'SQ'], 'Useful advice + the right sequencing word: First.'),
        STEP(5, 'Choose your second piece of advice.', ['Second, take short breaks and do some sport.', 'Second, stop revising completely until the day of the exam.', 'First, take short breaks.', 'Second, I am writing to complain.'], ['BO', 'SQ'], 'Second + another useful piece of advice.'),
        STEP(6, 'Choose your last piece of advice.', ['Lastly, sleep well, especially before the exam.', 'Lastly, drink lots of coffee and don’t sleep before the exam.', 'Firstly, sleep well.', 'Lastly, yours faithfully.'], ['BO', 'SQ'], 'Lastly introduces the final piece of advice.'),
        STEP(7, 'Choose the best closing sentence.', ['I’m sure you’ll do great. I can’t wait to catch up in person!', 'I look forward to receiving your payment by the end of the month.', 'First, I can’t wait.', 'How are you doing?'], ['CL', 'TN'], 'Encourage your friend and end warmly.'),
        STEP(8, 'Choose the best sign-off.', ['Best wishes, Hiba', 'Yours faithfully, Hiba', 'Dear Hiba', 'Regards, the Manager'], ['SO', 'TN'], 'A friendly sign-off + your first name.')
      ] }
    ]
  };
})();

window.RS_COPY = {
  storeKey: 'levelup-2bac-u6-writing-informal-email-q1-v2',
  heroKicker: 'LEVEL UP 2BAC · WRITING · UNIT 6',
  heroTitle: 'INFORMAL EMAIL',
  heroQuiz: 'QUIZ 1',
  heroSub: 'Informal Email: Interactive Practice · 20 points',
  missionHtml: 'An <b>informal email</b> to a friend has <b>five parts</b>. Use friendly expressions, give advice in a clear order (<b>First, Second, Lastly</b>) and keep the tone warm, never formal.',
  formula: 'Salutation → Opening → Body → Closing → Sign-off',
  cats: ['👋 Salutation', '💬 Opening', '📝 Body', '🔚 Closing', '✍️ Sign-off', '😊 Friendly tone'],
  rulesHtml: [
    'Play the 6 activities in order. You have <b>one try</b> for each question: tap <b>Check</b> to see if you are right.',
    'Activity 6, the <b>Inbox Mission</b>: your friend needs advice, and you build the reply step by step.',
    'You see the correct answer and an explanation straight away, and you can review your mistakes at the end.'
  ],
  beforeLast: 'Next: the Inbox Mission. Your friend needs your advice!',
  msgs: [
    'Outstanding! You can write a friendly, well-organised email.',
    'Well done! Review the activities where you lost points, then try again.',
    'You passed. Practise the five parts and the friendly expressions again.',
    'Keep going! Re-read the five parts: salutation, opening, body, closing, sign-off. Then try again.'
  ],
  fullMarks: '🏆 Inbox Mission complete! You can write a friendly, well-organised email from Hi to Best wishes.'
};

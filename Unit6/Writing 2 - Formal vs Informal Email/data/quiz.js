/* Unit 6 · Writing · Quiz 2 (out of 20). "Formal vs Informal Email – Language, Expressions & Transitional Phrases"
   20 single-answer questions, 1 point each (100 hundredths), in the teacher's 5 parts. Question wording and answer key are the teacher's.
   o[0] is always the correct answer (the teacher's key letter is noted in each comment); the app shuffles the four options
   on every attempt and on every reload, and marks by the option's permanent index, never by the displayed letter.
   Each part keeps the teacher's question order (exam: 1). The explanations (e) are added for the feedback.
   2026-11-19: moved to the Unit 10 Writing page (shared engine, texts in RS_COPY). The right answers stay word for word; some wrong
   options (and three wrong emails in Q20) are longer, so the right answer is not always the longest one. */
window.RS_TAGS = [
  ['IS', 'Informal email', 'Informal salutation: Hi Jamal,'],
  ['IO', 'Informal email', 'Informal opening: How are you doing? It has been a while!'],
  ['IB', 'Informal email', 'Informal body: I just wanted to tell you… / If I were you, I’d…'],
  ['IL', 'Informal email', 'Informal linking: What’s more, … / Another thing you could do is… / That’s because…'],
  ['IC', 'Informal email', 'Informal closing: I can’t wait to catch up with you in person!'],
  ['IG', 'Informal email', 'Informal sign-off: Best wishes,'],
  ['FS', 'Formal email', 'Formal salutation: Dear Mrs Brown, / Dear Director,'],
  ['FO', 'Formal email', 'Formal opening: I am writing to enquire about…'],
  ['FB', 'Formal email', 'Formal body: I would be grateful if you could… / I would recommend…'],
  ['FL', 'Formal email', 'Formal linking: Furthermore, … / Nevertheless, … / This is due to…'],
  ['FC', 'Formal email', 'Formal closing: I look forward to hearing from you.'],
  ['FG', 'Formal email', 'Formal sign-off: Yours sincerely, (you know the name)'],
  ['RG', 'Register', 'Recognising the register of a whole email']
];

(function () {
  /* one question: n = number, title = the teacher's heading, p = the question, o = options with the correct one first */
  function Q(n, title, p, o, k, e, extra) {
    var q = { t: 'choice', round: 'Q' + n + ' · ' + title, p: p, o: o, k: k, e: e };
    for (var x in (extra || {})) q[x] = extra[x];
    return q;
  }

  window.RS_QUIZ = {
    title: 'Formal vs Informal Email · Quiz 2',
    games: [
      { key: 'p1', name: 'Part 1 · Salutations and Opening Sentences', pts: 100, exam: 1, how: 'Choose the best answer.', qs: [
        /* key B */
        Q(1, 'Choosing an Informal Salutation', 'You are writing an email to your close friend Jamal. Which salutation is the most appropriate?',
          ['Hi Jamal,', 'Dear Sir or Madam,', 'Dear Mr Jamal,', 'To whom it may concern,'], ['IS'], 'A close friend → Hi + first name + comma. The others are for strangers or formal letters.'),
        /* key D */
        Q(2, 'Choosing a Formal Salutation', 'You are writing an official email to your English teacher, Mrs Brown. Which salutation is the most appropriate?',
          ['Dear Mrs Brown,', 'Hey Mrs Brown!', 'Hi there!', 'Hello, my friend!'], ['FS'], 'An official email to someone whose name you know → Dear + title + surname + comma.'),
        /* key A */
        Q(3, 'Identifying an Informal Opening', 'Which sentence is most suitable for opening an informal email to a friend?',
          ['How are you doing? It has been a while!', 'I am writing to express my concern regarding this matter.', 'I would like to request further information.', 'I am contacting you with reference to your announcement.'], ['IO'], 'A friendly question and a short, chatty sentence open an informal email.'),
        /* key C */
        Q(4, 'Identifying a Formal Opening', 'You are writing to an organization to request information about a training programme. Which opening sentence is most appropriate?',
          ['I am writing to enquire about the training programme you offer.', 'What’s up? I need some quick information about your training programme.', 'I just wanted to ask you something about the course.', 'How’s everything going? I hope you’re doing great.'], ['FO'], '“I am writing to enquire about…” gives the reason formally.')
      ] },
      { key: 'p2', name: 'Part 2 · Language and Expressions in the Body', pts: 100, exam: 1, how: 'Choose the best answer.', qs: [
        /* key B */
        Q(5, 'Recognizing Informal Language', 'Which expression is most suitable for the body of an informal email to a friend?',
          ['I just wanted to tell you what happened yesterday.', 'I would appreciate your assistance in this matter.', 'I am writing to bring this issue to your attention.', 'Your cooperation would be highly appreciated.'], ['IB'], '“I just wanted to tell you…” is conversational. The others are formal requests.'),
        /* key D */
        Q(6, 'Recognizing Formal Language', 'Which sentence is the most appropriate when making a request in a formal email?',
          ['I would be grateful if you could provide me with further details.', 'Can you send me all the details about it when you get a chance?', 'Just send me the details as soon as possible, okay?', 'I need you to give me the information.'], ['FB'], '“I would be grateful if you could…” is a polite, indirect formal request. The others are casual or too direct.'),
        /* key A */
        Q(7, 'Giving Advice Informally', 'Your friend is having problems with his studies. Which expression is the most appropriate for giving advice in an informal email?',
          ['If I were you, I’d talk to your teachers about the problem.', 'I strongly recommend that you consider the following measures.', 'It is advisable that you seek professional assistance.', 'You are kindly requested to take the necessary steps.'], ['IB'], '“If I were you, I’d…” is friendly advice with a short form (I’d).'),
        /* key C */
        Q(8, 'Giving Advice Formally', 'You are writing to an organization to suggest improvements to its services. Which expression is the most appropriate?',
          ['I would recommend introducing additional customer support services.', 'Why don’t you make your services better?', 'You should definitely do something about your bad services!', 'If I were you, I’d change the whole system and the website too.'], ['FB'], '“I would recommend + -ing” gives advice politely to an organisation.')
      ] },
      { key: 'p3', name: 'Part 3 · Transitional Phrases and Linking Expressions', pts: 100, exam: 1, how: 'Choose the best answer.', qs: [
        /* key D */
        Q(9, 'Informal Linking Expressions', 'You want to add another suggestion in an informal email. Which expression is the most natural?',
          ['What’s more, you could ask your parents for help.', 'Furthermore, it is essential to consider the following points...', 'Moreover, I would like to point out...', 'In addition to the aforementioned point...'], ['IL'], '“What’s more, you could…” sounds natural and friendly. The other sentences are formal in tone.'),
        /* key B */
        Q(10, 'Formal Linking Expressions', 'You are adding another argument in a formal email. Which transitional expression is the most appropriate?',
          ['Furthermore, the organization should improve its facilities.', 'Anyway, there’s another thing to consider.', 'And another thing is that the facilities need improvement.', 'Plus, the facilities aren’t very good.'], ['FL'], '“Furthermore” + a full, neutral sentence adds an argument formally. The others are chatty.'),
        /* key C */
        Q(11, 'Informal Sequencing Expressions', 'You are giving your friend three pieces of advice. Which expression is the most appropriate to introduce the second piece of advice?',
          ['Another thing you could do is talk to your parents.', 'Subsequently, I would like to suggest the following measure...', 'In the second instance, I recommend...', 'With regard to the second recommendation...'], ['IL'], '“Another thing you could do is…” introduces the next idea in a friendly way.'),
        /* key A */
        Q(12, 'Formal Contrast Expressions', 'You want to introduce a contrasting idea in a formal email. Which sentence is the most appropriate?',
          ['Nevertheless, the proposed solution requires further consideration.', 'But I don’t really think this idea will work for us, to be honest.', 'Anyway, I don’t agree with that idea.', 'On the other hand, I think the whole idea is a bit strange.'], ['FL'], 'The whole sentence is formal: Nevertheless + neutral, careful words. “On the other hand” is not the problem in D; “a bit strange” is.')
      ] },
      { key: 'p4', name: 'Part 4 · Reasons, Closing Sentences and Sign-offs', pts: 100, exam: 1, how: 'Choose the best answer.', qs: [
        /* key C */
        Q(13, 'Explaining a Reason Informally', 'Which expression is the most suitable for explaining a reason in an informal email?',
          ['That’s because I don’t have enough time to attend the course.', 'This is attributable to several factors.', 'The reason for this situation can be explained as follows.', 'This situation is primarily due to financial constraints.'], ['IL'], '“That’s because…” with short forms is how we explain to a friend.'),
        /* key B */
        Q(14, 'Explaining a Reason Formally', 'Which sentence is most appropriate in a formal email?',
          ['This is due to the limited financial resources available to the institution.', 'That’s mainly because the school doesn’t have enough money to pay for it.', 'It’s simply because there isn’t enough money.', 'The school just can’t afford it right now, so forget about it.'], ['FL'], '“This is due to…” with full forms and precise words is formal.'),
        /* key D */
        Q(15, 'Choosing an Informal Closing Sentence', 'Which sentence is the most appropriate to end an informal email to a close friend?',
          ['I can’t wait to catch up with you in person!', 'I look forward to receiving your response at your earliest convenience.', 'Thank you for your attention to this matter.', 'I await your favourable reply.'], ['IC'], 'A warm, excited sentence ends a friendly email.'),
        /* key B */
        Q(16, 'Choosing a Formal Closing Sentence', 'You are writing a formal email to apply for a training opportunity. Which closing sentence is the most appropriate?',
          ['I look forward to hearing from you.', 'See you soon! Hope to hear from you!', 'Can’t wait to get your reply!', 'Write back when you can!'], ['FC'], '“I look forward to hearing from you.” is the standard formal closing sentence.'),
        /* key A */
        Q(17, 'Choosing an Informal Sign-off', 'Which sign-off is most appropriate for an email to a close friend?',
          ['Best wishes,', 'Yours faithfully,', 'Yours sincerely,', 'Respectfully yours,'], ['IG'], '“Best wishes,” is friendly. “Yours faithfully / sincerely” and “Respectfully yours” are formal.')
      ] },
      { key: 'p5', name: 'Part 5 · Applying and Evaluating Register', pts: 100, exam: 1, how: 'Choose the best answer.', qs: [
        /* key C */
        Q(18, 'Choosing a Formal Sign-off', 'You are writing a formal email to Mrs Brown, whose name you know. Which sign-off is most appropriate?',
          ['Yours sincerely,', 'See you later, then,', 'Take care,', 'Lots of love,'], ['FG'], 'You know her name (Dear Mrs Brown) → Yours sincerely. (Yours faithfully goes with Dear Sir or Madam.)'),
        /* key B */
        Q(19, 'Identifying the Register of an Email', 'Read the following extract:\n“Hi Sarah,\nHow are you doing? I hope everything is going well. I just wanted to tell you about my new school. What’s more, I’ve made some great friends there. I can’t wait to see you soon!\nTake care,”',
          ['An informal email because it uses friendly greetings, conversational expressions and a personal sign-off.', 'A formal email because it contains linking expressions such as “What’s more” in the body.', 'A formal email because it discusses education and the writer’s new school.', 'An official email because it follows a clear structure with an opening, a body and a closing.'], ['RG'], 'Linking words, topics and paragraphs do not make an email formal.',
          { ask: 'What type of email is this?', pre: 1, small: 1 }),
        /* key B */
        Q(20, 'The Register Challenge – Choose the Best Complete Email', 'You need to write an email to the director of a language centre to request information about English courses. Which version is the most appropriate?',
          ['Dear Director,\nI am writing to enquire about the English courses offered at your centre. Furthermore, I would appreciate it if you could provide information about the course fees and registration requirements.\nI look forward to receiving your response.\nYours sincerely,\nAhmed',
           'Hi there!\nHow are you doing? I just wanted to ask about your English courses. Also, can you tell me how much they cost and when the next course starts? Thanks a lot!\nSee you,\nAhmed',
           'Hey!\nWhat’s up? I wanna know more about your courses. Tell me how much they cost and when I can join, because I’m free all summer.\nBye for now!\nAhmed',
           'Dear my friend,\nI hope you’re doing great. I am writing to tell you that I want to join your English courses next month. Anyway, send me the details about the fees and the timetable as soon as you can.\nLots of love,\nAhmed'],
          ['RG', 'FS', 'FO', 'FB', 'FC', 'FG'], 'A director → formal in every part, from “Dear Director,” to “Yours sincerely,”.',
          { emails: 1, pre: 1 })
      ] }
    ]
  };
})();

window.RS_COPY = {
  storeKey: 'levelup-2bac-u6-writing-formal-informal-email-q2-v2',
  heroKicker: 'LEVEL UP 2BAC · WRITING · UNIT 6',
  heroTitle: 'FORMAL VS INFORMAL EMAIL',
  heroQuiz: 'QUIZ 2',
  heroSub: 'Language, Expressions & Transitional Phrases · 20 points',
  missionHtml: 'Tell a <b>formal</b> email from an <b>informal</b> one by its language, tone, expressions and transitional phrases. Remember: a single word such as <b>First</b>, <b>However</b> or <b>In addition</b> is not always formal or informal. It depends on the whole expression, the tone and the context.',
  formula: 'Friend → informal · Teacher, director, organisation → formal',
  cats: ['👋 Salutations', '💬 Openings', '📝 Body language', '🔗 Linking phrases', '🔚 Closings', '✍️ Sign-offs'],
  rulesHtml: [
    '20 questions in 5 parts, <b>1 point</b> each. Only <b>one</b> answer is correct, and you have <b>one try</b>.',
    'The last question, the <b>Register Challenge</b>: choose the best complete email.',
    'You see the correct answer and an explanation straight away, and you can review your mistakes at the end.'
  ],
  beforeLast: 'Next: the Register Challenge. Choose the best complete email!',
  msgs: [
    'Outstanding! You can choose the right register for any email.',
    'Well done! Review the parts where you lost points, then try again.',
    'You passed. Practise the formal and informal expressions again.',
    'Keep going! Re-read the expressions for each part of a formal and an informal email. Then try again.'
  ],
  fullMarks: '🏆 Register master! You can choose the right words for a friend and for a director.'
};

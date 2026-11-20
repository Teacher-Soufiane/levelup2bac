/* Unit 4 · Writing · Formal Email · Quiz (out of 20).
   2026-11-19: the teacher's 20 questions moved to the Unit 10 Writing page (shared engine). The questions and the right answers are
   the teacher's, word for word. Changes:
   - the 5 levels become 6 activities, like the Unit 9 and Unit 10 Writing quizzes (level 1 is split: salutation / opening and purpose);
   - the final challenge: the teacher's two last questions (choose the best of four whole emails; order its six parts) did not fit one
     screen, so students build that email part by part in 5 steps (0.4 each = 2 points), as in the Unit 10 National Exam Challenge;
   - the hints are left out (the engine shows the explanation after each answer);
   - some wrong options are longer, so the right answer is not always the longest one.
   Points are in hundredths (100 = 1 point). In choice items o[0] is the right answer; the app shuffles the options. */
window.RS_TAGS = [
  ['SA', 'Form & register', 'Salutation: Dear Sir/Madam (name unknown) · Dear Mr Ahmed (name known)'],
  ['OP', 'Form & register', 'A polite opening and a clear purpose: I hope this email finds you well. / I am writing to…'],
  ['FL', 'Formal language', 'Formal expressions and linking words: I would like to draw your attention to… / Firstly – Secondly – Lastly'],
  ['CL', 'Formal language', 'A formal closing and the matching sign-off: Yours faithfully (Dear Sir/Madam) · Yours sincerely (Dear Mr Brown)'],
  ['ER', 'Error detection', 'Informal words, grammar errors (would + base verb) and irrelevant sentences'],
  ['ST', 'Organisation', 'The structure: salutation → opening → purpose → body → closing → sign-off']
];

(function () {
  function MC(round, p, ask, o, k, e, x) { var q = { t: 'choice', round: round, p: p, ask: ask, o: o, k: k, e: e }; for (var i in (x || {})) q[i] = x[i]; return q; }
  var A1 = 'Choose the most appropriate answer.', A2 = 'Choose the most formal option.', A3 = 'Find the incorrect option.';
  var SIT = 'Situation: You are writing a formal email to the president of your local council. You do not know the president’s name. You want to suggest building a sports centre for young people in your area.';
  var TASK = 'A formal email to the president of your local council (name unknown): suggest a sports centre for young people.';
  function STEP(n, p, ask, o, k, e) { return { t: 'choice', round: 'Step ' + n + ' of 5', p: p, ask: ask, o: o, k: k, e: e, small: 1 }; }

  window.RS_QUIZ = {
    title: 'Formal Email · Quiz',
    games: [
      { key: 'form', name: 'Form & Register: The Salutation', pts: 100, how: 'Choose the best answer.', qs: [
        MC('Salutation', 'You are writing a formal email to the manager of a company. You have never met the manager and you do not know their name.', A1,
          ['Dear Sir/Madam', 'Dear Manager of the Company', 'Hi there, my friend', 'Dear Friend'], ['SA'], 'When the recipient’s name is unknown, the standard formal salutation is “Dear Sir/Madam”.'),
        MC('Salutation', 'You are writing a formal email to Mr Ahmed, the manager of a company.', A1,
          ['Dear Mr Ahmed', 'Dear Sir/Madam', 'Hi Ahmed', 'Hey Mr Ahmed'], ['SA'], 'When the name is known, we use “Dear” + title + surname: “Dear Mr Ahmed”.'),
        MC('Salutation', 'Which combination correctly matches the salutation with the situation?', A1,
          ['Dear Sir/Madam → the recipient’s name is unknown', 'Dear Mr Brown → the recipient’s name is unknown', 'Hi Ahmed → a formal email to an unknown recipient', 'Hey there → a formal email to a company manager'], ['SA'], '“Dear Sir/Madam” is used only when the name is unknown; the other combinations are informal or mismatched.', { small: 1 })
      ] },
      { key: 'open', name: 'Form & Register: Opening and Purpose', pts: 100, how: 'Choose the best answer.', qs: [
        MC('Opening', 'You want to begin a formal email politely.', A1,
          ['I hope this email finds you well.', 'Hey! How are things with you these days?', 'What’s up with you?', 'I just wanted to tell you something.'], ['OP'], 'A formal opening wishes the reader well in polite language, without slang.'),
        MC('Purpose', 'You want to state the purpose of a formal email clearly.', A1,
          ['I am writing to suggest some improvements for young people in our area.', 'Guess what I want to tell you about our area and the young people!', 'I have something really cool to tell you about our area.', 'You won’t believe what happened.'], ['OP'], '“I am writing to…” states the purpose clearly and formally.', { small: 1 })
      ] },
      { key: 'language', name: 'Formal Language', pts: 100, how: 'Choose the most formal.', qs: [
        MC('Drawing attention', 'You want to draw the reader’s attention to an important issue.', A2,
          ['I would like to draw your attention to this matter.', 'I want you to look at this thing right now, please.', 'Check this out.', 'You should know this, I think.'], ['FL'], '“I would like to draw your attention to…” is polite and formal.'),
        MC('Linking word', '“__________, a modern stadium would provide a safe space for sports and recreational activities.”', A2,
          ['Firstly', 'Anyway', 'By the way', 'Suddenly'], ['FL'], '“Firstly” introduces the first argument formally; the others are informal or unrelated.'),
        MC('Sequencing', 'You want to present three main suggestions in a formal email.', A2,
          ['Firstly – Secondly – Lastly', 'First – Hey – Anyway', 'Suddenly – Secondly – Wow', 'Firstly – By the way – Hey'], ['FL'], 'The formal sequencing words are “Firstly – Secondly – Lastly”.'),
        MC('Closing sentence', 'You have finished presenting your suggestions in a formal email.', A2,
          ['Thank you for considering these suggestions.', 'Anyway, that’s all from me for now. Bye!', 'Let me know if you wanna chat about it.', 'See you later!'], ['CL'], 'A formal closing sentence thanks the reader politely.'),
        MC('Sign-off', 'The email begins: “Dear Mr Brown,”', A2,
          ['Yours sincerely', 'Yours faithfully', 'Cheers', 'Take care'], ['CL'], 'When the name is known (“Dear Mr Brown”), the sign-off is “Yours sincerely”.')
      ] },
      { key: 'errors', name: 'Error Detection', pts: 100, how: 'Find the incorrect option.', qs: [
        MC('Register', 'Which sentence is NOT appropriate in a formal email?', A3,
          ['Hey! I just wanted to tell you about our idea.', 'I would like to suggest a new project for young people.', 'I look forward to your prompt response.', 'Thank you for your attention to this matter.'], ['ER'], '“Hey!” and “I just wanted to tell you” are informal, so they do not suit a formal email.'),
        MC('Grammar', 'Which sentence contains a grammatical error?', A3,
          ['These facilities would helps students develop new skills.', 'I am writing to suggest some improvements.', 'The project would provide young people with useful opportunities.', 'Better transport would improve access to schools.'], ['ER'], 'After “would” we use the base form: “would help”, not “would helps”.'),
        MC('Register', 'Which sentence contains an expression that is NOT appropriate for a formal email?', A3,
          ['I wanna tell you about our new project.', 'I hope this email finds you well.', 'I would like to draw your attention to this issue.', 'Thank you for considering my suggestion.'], ['ER'], '“Wanna” is informal; the formal version is “I would like to tell you about…”.'),
        MC('Sign-off', 'The email begins: “Dear Sir/Madam,”', 'Which sign-off is NOT appropriate?',
          ['Love', 'Yours faithfully', 'With kind regards', 'Respectfully'], ['ER', 'CL'], '“Love” is an informal sign-off used with family and close friends. “Yours faithfully”, “With kind regards” and “Respectfully” are all formal.'),
        MC('Relevance', 'These sentences come from a formal email about improving facilities for young people.', 'Which sentence is irrelevant?',
          ['My favourite football team won its match last Saturday.', 'A modern sports centre would encourage young people to exercise.', 'More green spaces would provide safe places for recreation.', 'Better public transport would improve access to schools and jobs.'], ['ER'], 'This sentence is a personal comment and does not support the purpose of the email.')
      ] },
      { key: 'organise', name: 'Organization & Structure', pts: 100, how: 'Choose the best order.', qs: [
        MC('Email structure', 'Which order creates a well-organized formal email?', 'Choose the best organization.',
          ['Salutation → Opening → Purpose → Body → Closing → Sign-off', 'Body → Salutation → Sign-off → Opening → Closing → Purpose', 'Opening → Body → Salutation → Closing → Purpose → Sign-off', 'Salutation → Body → Sign-off → Purpose → Opening → Closing'], ['ST'], 'A formal email follows this order: salutation, opening, purpose, body, closing, sign-off.', { small: 1 }),
        MC('Paragraph plan', 'You want to write an email suggesting three improvements for young people in your area.', 'Choose the best organization.',
          ['Introduction → First suggestion → Second suggestion → Third suggestion → Conclusion', 'Third suggestion → Introduction → First suggestion → Conclusion → Second suggestion', 'Conclusion → Second suggestion → Introduction → First suggestion → Third suggestion', 'Introduction → Conclusion → Third suggestion → Second suggestion → First suggestion'], ['ST'], 'A logical order is: introduction, suggestions in sequence, then conclusion.', { small: 1 }),
        MC('Complete the email', 'Dear Sir/Madam,\nI hope this email finds you well. I am writing to suggest some improvements for young people in our area.\nFirstly, a modern sports centre would provide a safe place for physical activities.\nSecondly, more parks and green spaces would give young people places to relax.\nLastly, better public transport would improve access to schools and recreational facilities.', 'Choose the sentence that best completes the email.',
          ['Thank you for considering these suggestions.', 'Anyway, that’s everything for today. See you!', 'Let me know if you wanna chat about it.', 'Bye for now!'], ['CL', 'ST'], 'The email needs a polite, formal closing sentence before the sign-off.', { pre: 1, small: 1 })
      ] },
      /* The teacher's two final questions (choose the best of four whole emails; put the six parts of that email in order) did not fit
         one screen, so, as in the Unit 10 National Exam Challenge, they become one email built part by part in 5 steps (0.4 each = the
         teacher's 2 points). The right answers are the parts of the teacher's right email, word for word; the wrong ones come from the
         teacher's three wrong emails (Hi! / Dear Friend, / Hey Sir, …) or break the sign-off rule. */
      { key: 'final', name: 'Final Challenge: Build the Formal Email', pts: 40, exam: 1, how: 'Build the email.',
        win: 'Excellent work! Dear Sir/Madam → a polite opening and purpose → Firstly, Secondly, Lastly → thanks → Yours faithfully.',
        lose: 'Not quite! Check the salutation, the tone, the structure and the sign-off together.', qs: [
        STEP(1, SIT, 'Choose the salutation.', ['Dear Sir/Madam,', 'Dear Friend,', 'Hey Sir,', 'Hi!'], ['SA'], 'You do not know the president’s name: “Dear Sir/Madam,”.'),
        STEP(2, TASK, 'Choose the opening and the purpose.', ['I hope this email finds you well. I am writing to suggest the construction of a modern sports centre for young people in our area.', 'I wanna tell you that a sports centre would be really cool, and all the young people in our area would love it a lot.', 'I am writing about the sports centre. It is very nice and I like football a lot, like all my friends at school.', 'Build a sports centre because young people need one, and you should do it very quickly, please, before the summer.'], ['OP'], 'A polite opening, then “I am writing to suggest…”: the purpose, clearly and formally.'),
        STEP(3, TASK, 'Choose the body.', ['Firstly, a modern sports centre would provide a safe place for sports and recreational activities. Secondly, it would encourage young people to adopt a healthier lifestyle. Lastly, it would create opportunities for community engagement.', 'Firstly, I like football a lot. Secondly, my favourite team is very successful. Lastly, I watch all its matches on TV with my brothers every weekend, and I want to play like them one day in a big stadium.', 'A sports centre would be really cool. By the way, young people would love it. Anyway, they could play football and basketball there after school every day, and it would be fun for everyone in the neighbourhood.'], ['FL'], 'Three relevant arguments with the formal linking words Firstly – Secondly – Lastly.'),
        STEP(4, TASK, 'Choose the closing sentence.', ['Thank you for considering this suggestion.', 'Let me know if you wanna chat about it.', 'You should do it quickly, before the summer.', 'Anyway, that’s all from me. Bye!'], ['CL'], 'A formal closing sentence thanks the reader politely.'),
        STEP(5, TASK, 'Choose the sign-off.', ['Yours faithfully,', 'Yours sincerely,', 'Cheers!', 'See you!'], ['CL', 'SA'], 'The email begins “Dear Sir/Madam,”, so it ends “Yours faithfully,”. (“Yours sincerely” goes with a name: Dear Mr Brown.)')
      ] }
    ]
  };
})();

window.RS_COPY = {
  storeKey: 'levelup-2bac-u4-writing-formal-email-q1-v2',
  heroKicker: 'LEVEL UP 2BAC · WRITING · UNIT 4',
  heroTitle: 'FORMAL EMAIL',
  heroQuiz: 'QUIZ',
  heroSub: 'Formal Email: Interactive Practice · 20 points',
  missionHtml: 'A <b>formal email</b> uses polite, formal language from the first word to the last. Choose the right <b>salutation</b>, state your <b>purpose</b>, order your ideas with <b>Firstly, Secondly, Lastly</b>, and end with the matching <b>sign-off</b>.',
  formula: 'Salutation → Opening → Purpose → Body → Closing → Sign-off',
  cats: ['👋 Salutation', '💬 Opening & purpose', '📝 Formal language', '🔎 Error detection', '🗂️ Structure', '✉️ Final email'],
  rulesHtml: [
    'Play the 6 activities in order. You have <b>one try</b> for each question.',
    'Activity 6, the <b>Final Challenge</b>: build a formal email to your local council step by step.',
    'You see the correct answer and an explanation straight away, and you can review your mistakes at the end.'
  ],
  beforeLast: 'Next: the Final Challenge. Build the formal email!',
  msgs: [
    'Excellent! You have a very strong command of formal email form, language, register and organization.',
    'Very good! You handle most formal email features well. Review the sign-off rules and error detection.',
    'Good progress! You understand the basics, but you need more practice with formal register and sign-off rules.',
    'Keep practising! Review the structure of a formal email: salutation, opening, purpose, body with linking words, closing and the correct sign-off.'
  ],
  fullMarks: '🏆 Formal email master! Every part, from “Dear Sir/Madam” to “Yours faithfully”, is right.'
};

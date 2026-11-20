/* Unit 7 · Reported Speech · Part 5: Mixed · Grammar Quiz 5 (out of 20). "The Ultimate Reported Speech Challenge"
   The final, cumulative Unit 7 quiz: changes, statements, questions and functions together.
   Points are in hundredths (25 = 0.25 point). Every item lists k = the skills it tests (RS_TAGS).
   In choice and err items the first option is the correct one; the app shuffles.
   Game 6: questions 1–6 are the six previous national-exam questions word for word; 7 and 8 are new (newq). */
window.RS_TAGS = [
  ['TN', 'Part 1 · Changes', 'tense backshift (am → was, have finished → had finished, did buy → had bought)'],
  ['MD', 'Part 1 · Changes', 'modals (will → would, can → could)'],
  ['NC', 'Part 1 · Changes', 'forms that do not change (might, could, should …)'],
  ['TM', 'Part 1 · Changes', 'time and place (tomorrow → the next day, here → there, this → that)'],
  ['PR', 'Part 1 · Changes', 'pronouns and possessives (I → she, my → her, we → they)'],
  ['ST', 'Part 2 · Statements', 'statements: said (that) / told + person (that)'],
  ['YN', 'Part 3 · Questions', 'Yes/No question → asked + if / whether'],
  ['WH', 'Part 3 · Questions', 'Wh-question → asked + question word'],
  ['WO', 'Part 3 · Questions', 'statement word order in reported questions (where I was going, not where was I going)'],
  ['CM', 'Part 4 · Functions', 'command → ordered + (not) to + verb'],
  ['RQ', 'Part 4 · Functions', 'request → asked + (not) to + verb'],
  ['AD', 'Part 4 · Functions', 'advice → advised + (not) to + verb'],
  ['PM', 'Part 4 · Functions', 'promise → promised + (not) to + verb'],
  ['SG', 'Part 4 · Functions', 'suggestion → suggested + (not) + -ing'],
  ['NG', 'Part 4 · Functions', 'negatives: not to + verb (never “to not” or “don’t”)']
];

(function () {
  /* a national-exam question as a sentence builder: the given start is the first group; one wrong group */
  function EX(r, d, key, extra, k, e) { return { t: 'build', round: r, d: d, key: key, extra: [extra], k: k, e: e }; }
  function X(t) { return { t: t, x: 1 }; }   /* a wrong word in Grammar Error Hunter */

  window.RS_QUIZ = {
    title: 'Reported Speech · Part 5: Mixed',
    games: [
      { key: 'classify', name: 'Reported Speech Classifier', pts: 25, how: 'What type of direct speech is it?', qs: [
        { t: 'choice', p: '“Don’t touch the equipment!” the technician said.', o: ['Command', 'Request', 'Advice', 'Statement'], k: ['CM'], e: '“Don’t …!” is a negative command → ordered + person + not to + verb.' },
        { t: 'choice', p: '“I’m tired after the match,” Yassine said.', o: ['Statement', 'Promise', 'Wh-question', 'Advice'], k: ['ST'], e: 'It gives information → a statement → said (that) …' },
        { t: 'choice', p: '“Is the museum open on Mondays?” the tourist asked.', o: ['Yes/No question', 'Wh-question', 'Request', 'Statement'], k: ['YN'], e: 'The answer is yes or no → asked + if / whether.' },
        { t: 'choice', p: '“How long have you lived in Fes?” my cousin asked me.', o: ['Wh-question', 'Yes/No question', 'Statement', 'Request'], k: ['WH'], e: 'It starts with a question word (How long) → asked + how long + statement order.' },
        { t: 'choice', p: '“Please send me the photos,” Leila said to her friend.', o: ['Request', 'Command', 'Suggestion', 'Promise'], k: ['RQ'], e: '“Please” + verb → a request → asked + person + to + verb.' },
        { t: 'choice', p: '“You should go to bed early,” Mum told Rayan.', o: ['Advice', 'Command', 'Suggestion', 'Statement'], k: ['AD'], e: '“You should …” → advice → advised + person + to + verb.' },
        { t: 'choice', p: '“I’ll return your laptop on Friday,” Nabil told me.', o: ['Promise', 'Statement', 'Request', 'Suggestion'], k: ['PM'], e: '“I’ll (I will) …” commits the speaker → a promise → promised + to + verb.' },
        { t: 'choice', p: '“Let’s watch a documentary tonight,” Imane said.', o: ['Suggestion', 'Advice', 'Request', 'Command'], k: ['SG'], e: '“Let’s …” → a suggestion → suggested + -ing.' },
        { t: 'choice', p: '“Do you speak Spanish?” the manager asked Sami.', o: ['Yes/No question', 'Wh-question', 'Request', 'Command'], k: ['YN'], e: 'The answer is yes or no → asked + if / whether.' },
        { t: 'choice', p: '“Who wrote this poem?” the teacher asked.', o: ['Wh-question', 'Yes/No question', 'Statement', 'Command'], k: ['WH'], e: 'It starts with a question word (Who) → asked + who …' },
        { t: 'choice', p: '“We visited Chefchaouen last summer,” the girls said.', o: ['Statement', 'Suggestion', 'Promise', 'Yes/No question'], k: ['ST'], e: 'It gives information about the past → a statement → said (that) …' },
        { t: 'choice', p: '“Could you open the door for me, please?” the old man asked.', o: ['Request', 'Yes/No question', 'Command', 'Advice'], k: ['RQ'], e: 'It looks like a question, but “Could you …, please?” asks someone to do something → a request → asked + person + to + verb.' }
      ] },
      { key: 'report', name: 'Choose the Correct Report', pts: 50, how: 'Choose the correct reported sentence.', qs: [
        { t: 'choice', p: '“I am preparing for the national exam,” Imane said.', o: ['Imane said that she was preparing for the national exam.', 'Imane said that she is preparing for the national exam.', 'Imane said that I was preparing for the national exam.', 'Imane told that she was preparing for the national exam.'], k: ['ST', 'TN', 'PR'], e: 'am preparing → was preparing; I → she. “told” needs a person (told me that …).' },
        { t: 'choice', p: '“Are you ready for the exam?” the teacher asked us.', o: ['The teacher asked us if we were ready for the exam.', 'The teacher asked us if were we ready for the exam.', 'The teacher asked us if we are ready for the exam.', 'The teacher asked us to be ready for the exam.'], k: ['YN', 'WO', 'TN', 'PR'], e: 'Yes/No question → if + statement order (we were). are → were; you → we.' },
        { t: 'choice', p: '“Please don’t make noise,” the teacher told us.', o: ['The teacher asked us not to make noise.', 'The teacher asked us to not make noise.', 'The teacher asked us if we didn’t make noise.', 'The teacher suggested us not making noise.'], k: ['RQ', 'NG'], e: 'Negative request → asked + person + not to + verb. Not “to not”, not “if”.' },
        { t: 'choice', p: '“I can’t come to your party,” Anas told Hiba.', o: ['Anas told Hiba that he couldn’t come to her party.', 'Anas told Hiba that he can’t come to her party.', 'Anas told Hiba that he couldn’t come to your party.', 'Anas said Hiba that he couldn’t come to her party.'], k: ['ST', 'MD', 'PR'], e: 'can’t → couldn’t; your → her (Hiba). “said” cannot be followed directly by a person.' },
        { t: 'choice', p: '“What are you cooking?” Dad asked Mum.', o: ['Dad asked Mum what she was cooking.', 'Dad asked Mum what was she cooking.', 'Dad asked Mum what she is cooking.', 'Dad asked Mum if she was cooking.'], k: ['WH', 'WO', 'TN'], e: 'Wh-question → what + statement order (she was cooking). are cooking → was cooking.' },
        { t: 'choice', p: '“We might be late tonight,” my parents said.', o: ['My parents said that they might be late that night.', 'My parents said that we might be late that night.', 'My parents said that they might be late tonight.', 'My parents said that they will be quite late that night.'], k: ['NC', 'TM', 'PR'], e: '“might” does not change. tonight → that night; we → they.' },
        { t: 'choice', p: '“I will help you tomorrow,” Adam promised.', o: ['Adam promised to help me the next day.', 'Adam promised helping me the next day.', 'Adam promised to help me tomorrow.', 'Adam promised me to will help the next day.'], k: ['PM', 'TM'], e: 'Promise → promised + to + verb (“will” disappears). tomorrow → the next day.' },
        { t: 'choice', p: '“Let’s organise a school campaign,” Malak suggested.', o: ['Malak suggested organising a school campaign.', 'Malak suggested to organise a school campaign.', 'Malak suggested us to organise a school campaign.', 'Malak suggested that let’s organise a school campaign.'], k: ['SG'], e: 'Suggestion → suggested + -ing (gerund). Never “suggested to” or “suggested us to”.' }
      ] },
      { key: 'puzzle', name: 'Transformation Puzzle', pts: 25, how: 'Find the reported form.', qs: [
        { t: 'match', round: 'Round 1 · Tenses', pairs: [
          ['will', 'would', ['MD']],
          ['can', 'could', ['MD']],
          ['have finished', 'had finished', ['TN']],
          ['might', 'might (no change)', ['NC']]] },
        { t: 'match', round: 'Round 2 · Time', pairs: [
          ['yesterday', 'the day before', ['TM']],
          ['tomorrow', 'the next day', ['TM']],
          ['now', 'then', ['TM']],
          ['here', 'there', ['TM']]] },
        { t: 'match', round: 'Round 3 · Mixed', pairs: [
          ['“Don’t touch!”', 'ordered someone not to touch', ['CM', 'NG']],
          ['“Where are you?”', 'asked where someone was', ['WH', 'WO']],
          ['“Are you OK?”', 'asked if someone was OK', ['YN']],
          ['“Let’s go!”', 'suggested going', ['SG']]] }
      ] },
      { key: 'build', name: 'Build the Reported Sentence', pts: 100, how: 'Tap or drag the groups in order. One group does not belong.', qs: [
        { t: 'build', d: '“My brother is studying medicine,” Rim said.', key: ['Rim said', 'that', 'her brother', 'was studying', 'medicine'], extra: ['is studying'], k: ['ST', 'TN', 'PR'], e: 'is studying → was studying; my → her (Rim).' },
        { t: 'build', d: '“You should save water,” the teacher advised us.', key: ['The teacher', 'advised us', 'to save', 'water'], extra: ['saving'], k: ['AD'], e: 'Advice → advised + person + to + verb.' },
        { t: 'build', d: '“When did you arrive in Marrakech?” Karim asked us.', key: ['Karim asked us', 'when', 'we', 'had arrived', 'in Marrakech'], extra: ['had we arrived'], k: ['WH', 'WO', 'TN', 'PR'], e: 'when + statement order (we had arrived). “did” disappears; arrived → had arrived; you → we.' },
        { t: 'build', d: '“Don’t use your phone here!” the guard ordered the man.', key: ['The guard ordered the man', 'not to use', 'his phone', 'there'], extra: ['to not use'], k: ['CM', 'NG', 'PR', 'TM'], e: 'Negative command → ordered + person + not to + verb. your → his; here → there.' }
      ] },
      { key: 'hunt', name: 'Grammar Error Hunter', pts: 50, how: 'Step 1: tap the wrong words. Step 2: choose the corrected sentence.', qs: [
        { t: 'err', d: '“Where are you going?” he asked me.', w: ['He', 'asked', 'me', 'where', X('was I'), 'going', '.'], o: ['He asked me where I was going.', 'He asked me where was I going.', 'He asked me where I am going.'], k: ['WH', 'WO'], e: 'Reported questions use statement word order: where I was going (subject before verb).' },
        { t: 'err', d: '“I saw this film yesterday,” Nora said.', w: ['Nora', 'said', 'that', 'she', X('saw'), X('this'), 'film', X('yesterday'), '.'], o: ['Nora said that she had seen that film the day before.', 'Nora said that she had seen this film the day before.', 'Nora said that she saw that film the day before.'], k: ['TN', 'TM'], e: 'saw → had seen; this → that; yesterday → the day before. “she” is already right.' },
        { t: 'err', d: '“I won’t tell anyone your secret,” Salma promised me.', w: ['Salma', 'promised', X('to not'), 'tell', 'anyone', 'my', 'secret', '.'], o: ['Salma promised not to tell anyone my secret.', 'Salma promised to not tell anyone my secret.', 'Salma promised not telling anyone my secret.'], k: ['PM', 'NG'], e: 'Negative promise → promised + not to + verb (“not” before “to”). “my” is already right.' },
        { t: 'err', d: '“Did you lock the door?” Mum asked me.', w: ['Mum', 'asked', 'me', X('did'), 'I', X('lock'), 'the', 'door', '.'], o: ['Mum asked me if I had locked the door.', 'Mum asked me did I lock the door.', 'Mum asked me if I have locked the door.'], k: ['YN', 'WO', 'TN'], e: 'Yes/No question → if + statement order. “did” becomes “if”; lock → had locked.' }
      ] },
      /* 2026-11-19 (teacher: no typing): the six previous national-exam questions (word for word, in order) and the
         two new ones are now built from word groups (the given start is the first group; one group does not belong). */
      { key: 'exam', name: 'National Exam Final Boss', pts: 50, exam: true,
        how: 'Rewrite the sentence: tap the groups in order.',
        qs: [
        EX('National Exam · 1 of 6', '“You should protect forests,” said an ecologist.', ['An ecologist advised people', 'to protect', 'forests'], 'should protect', ['AD'], 'Advice → advised people to protect … “should” disappears.'),
        EX('National Exam · 2 of 6', '“Put the rubbish in the dustbin!” Ali told his son.', ['Ali ordered his son', 'to put', 'the rubbish', 'in the dustbin'], 'putting', ['CM'], 'Command → ordered his son to put … The verb goes into the infinitive.'),
        EX('National Exam · 3 of 6', '“Artificial intelligence will change the future of work,” said Khalid.', ['Khalid said that', 'artificial intelligence', 'would change', 'the future of work'], 'will change', ['ST', 'MD'], 'A statement → said that + backshift: will → would.'),
        EX('National Exam · 4 of 6', '“We will solve the problem together,” Tom assured his team.', ['Tom assured his team that', 'they', 'would solve', 'the problem', 'together'], 'we', ['ST', 'PR', 'MD'], '“we” = Tom and his team → they. will → would.'),
        EX('National Exam · 5 of 6', '“You should use artificial intelligence in your project,” said the teacher.', ['The teacher advised her students', 'to use', 'artificial intelligence', 'in their project'], 'in your project', ['AD', 'PR'], 'Advice → advised her students to use … your → their (the students).'),
        EX('National Exam · 6 of 6', '“We should reduce plastic usage to save our ocean,” Najib said.', ['Najib suggested', 'reducing', 'plastic usage', 'to save our ocean'], 'to reduce', ['SG'], 'Suggestion → suggested + -ing: reducing. Not “suggested to reduce”.'),
        EX('New question · 1 of 2', '“I have finished my homework,” Sara said.', ['Sara said', 'that', 'she', 'had finished', 'her homework'], 'has finished', ['ST', 'TN', 'PR'], 'Statement → said (that). have finished → had finished (present perfect → past perfect); I → she; my → her.'),
        EX('New question · 2 of 2', '“Where did you buy this book?” he asked me.', ['He asked me', 'where', 'I', 'had bought', 'that book'], 'did I buy', ['WH', 'WO', 'TN', 'TM', 'PR'], 'Wh-question → where + statement order (I had bought). did buy → had bought; you → I; this → that.')
      ] }
    ]
  };
})();
/* Page text and storage key (read by app.js). missionHtml and rulesHtml may use <b>; everything else is plain text.
   Keep storeKey unchanged, or saved attempts are lost (v2: the typed exam task became build on 2026-11-19). */
window.RS_COPY = {
  storeKey: 'levelup-2bac-u7-reported-mixed-q5-v2',
  heroKicker: 'LEVEL UP 2BAC · GRAMMAR · UNIT 7',
  heroTitle: 'REPORTED SPEECH',
  heroQuiz: 'MIXED',
  heroSub: 'The Ultimate Reported Speech Challenge · Quiz 5 · 20 points',
  missionHtml: 'This is the <b>final Unit 7 challenge</b>. For every sentence, decide: <b>what type of speech</b> is it, <b>which structure</b> does it need, and <b>which words change</b>?',
  formula: 'type of speech → structure → changes',
  cats: ['🔁 Part 1 · Changes', '💬 Part 2 · Statements', '❓ Part 3 · Questions', '📢 Part 4 · Functions'],
  rulesHtml: [
    'Play the 6 games in order. You have <b>one try</b> for each question.',
    'Games 1–5 prepare you for game 6, the <b>National Exam Final Boss</b>: six previous national-exam questions and two new ones, which you build group by group.',
    'You see the correct answer and an explanation straight away, and you can review your mistakes at the end.'
  ],
  beforeBoss: 'Next: the National Exam Final Boss.',
  fullMarks: '🏆 Perfect! Mission complete: you have mastered reported speech: statements, questions and functions.'
};

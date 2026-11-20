/* Unit 7 · Reported Speech · Part 3: Questions · Grammar Quiz 3 (out of 20). "Mission: Report the Question!"
   Points are in hundredths (25 = 0.25 point). Every item lists k = the skills it tests (RS_TAGS).
   In choice items the first option is the correct one; the app shuffles.
   Game 6 uses the seven previous national-exam questions word for word. Polite requests are reported with to + verb, never if / whether. */
window.RS_TAGS = [
  ['YN', 'Question types', 'Yes/No question → asked + if / whether + subject + verb'],
  ['WH', 'Question types', 'Wh-question → asked + question word + subject + verb'],
  ['RQ', 'Question types', 'Polite request → asked + person + to + verb'],
  ['WO', 'Word order', 'statement word order after if / whether / the question word (where she could …, not where could she …)'],
  ['TN', 'Tense and modal changes', 'tenses (did → had …, is → was, are doing → was doing)'],
  ['MD', 'Tense and modal changes', 'modals (can → could, will → would)'],
  ['PR', 'Pronouns and possessives', 'pronouns and possessives (you → I / he / she, me → him / her, my → her …)'],
  ['WH2', 'if or whether', 'whether, not if, directly before “or not”']
];

(function () {
  function G() { return { a: [].slice.call(arguments) }; }   /* a gap and its accepted answers (chosen from the item's bank) */
  /* a national-exam question as a sentence builder: the given start is the first group; one wrong group */
  function EX(n, d, key, extra, k, e) { return { t: 'build', round: 'National Exam · ' + n + ' of 7', d: d, key: key, extra: [extra], k: k, e: e }; }
  /* Game 2: the four reporting structures; the right one is put first */
  var STR = ['asked + if / whether + subject + verb', 'asked + question word + subject + verb', 'asked + person + to + verb', 'asked + question word + verb + subject'];
  function ST(p, right, k, e) { return { t: 'choice', p: p, o: [STR[right]].concat(STR.filter(function (_, i) { return i !== right; })), k: k, e: e }; }

  window.RS_QUIZ = {
    title: 'Reported Speech · Part 3: Questions',
    games: [
      { key: 'type', name: 'Question Type Detective', pts: 25, how: 'Yes/No question, Wh-question or request?',
        cats: ['Yes/No', 'Wh-', 'Request'], tip: 'A polite request asks someone to do something (Can / Could / Will you …, please?).', qs: [
        { t: 'sort', round: 'Round 1 of 3', cards: [['“Could you please help me?”', 2, 'RQ'], ['“Is the library open today?”', 0, 'YN'], ['“What time does the train leave?”', 1, 'WH'], ['“Did you see my keys?”', 0, 'YN']] },
        { t: 'sort', round: 'Round 2 of 3', cards: [['“Can you pass me the salt, please?”', 2, 'RQ'], ['“How did you get here?”', 1, 'WH'], ['“Who is your English teacher?”', 1, 'WH'], ['“Have you ever been to Agadir?”', 0, 'YN']] },
        { t: 'sort', round: 'Round 3 of 3', cards: [['“Will you carry this bag for me, please?”', 2, 'RQ'], ['“Why is Karim absent?”', 1, 'WH'], ['“Do you like football?”', 0, 'YN'], ['“Could you speak more slowly, please?”', 2, 'RQ']] }
      ] },
      { key: 'structure', name: 'Choose the Reporting Structure', pts: 50, how: 'Which structure do you need to report this?', qs: [
        ST('“Are you ready?” the coach asked us.', 0, ['YN'], 'A Yes/No question → if / whether: The coach asked us if (whether) we were ready.'),
        ST('“Where is the nearest hospital?” the tourist asked.', 1, ['WH', 'WO'], 'A Wh-question → the question word + statement order: The tourist asked where the nearest hospital was.'),
        ST('“Can you open the window, please?” the teacher asked Ali.', 2, ['RQ'], 'A polite request → asked + person + to + verb: The teacher asked Ali to open the window.'),
        ST('“Can you swim?” the coach asked me.', 0, ['YN'], 'This is a real Yes/No question about ability, not a request (no “please”, no action for me to do now): The coach asked me if (whether) I could swim.'),
        ST('“Who broke the window?” the headmaster asked.', 1, ['WH'], 'A Wh-question → the question word: The headmaster asked who had broken the window.'),
        ST('“Would you lend me your pen, please?” Sara asked me.', 2, ['RQ'], 'A polite request → asked + person + to + verb: Sara asked me to lend her my pen.')
      ] },
      { key: 'order', name: 'Fix the Word Order', pts: 75, how: 'Choose the correct reported question. Remember: statement word order.', qs: [
        { t: 'choice', p: '“Where are you going?” Omar asked me.', o: ['Omar asked me where I was going.', 'Omar asked me where was I going.', 'Omar asked me where am I going.'], k: ['WH', 'WO', 'TN'], e: 'where + subject + verb (I was going), not was I going. am going → was going.' },
        { t: 'choice', p: '“Why did you leave early?” the manager asked Hind.', o: ['The manager asked Hind why she had left early.', 'The manager asked Hind why had she left early.', 'The manager asked Hind why did she leave early.'], k: ['WH', 'WO', 'TN'], e: 'why + subject + verb (she had left). “did” disappears; left → had left (past simple → past perfect).' },
        { t: 'choice', p: '“When will the results be announced?” the students asked.', o: ['The students asked when the results would be announced.', 'The students asked when would the results be announced.', 'The students asked when the results will be announced.'], k: ['WH', 'WO', 'MD'], e: 'when + subject + verb (the results would be announced). will → would.' },
        { t: 'choice', p: '“What is your name?” the nurse asked the boy.', o: ['The nurse asked the boy what his name was.', 'The nurse asked the boy what was his name.', 'The nurse asked the boy what is his name.'], k: ['WH', 'WO', 'PR'], e: 'what + subject + verb (his name was). your → his; is → was.' },
        { t: 'choice', p: '“How old is your sister?” Hamid asked me.', o: ['Hamid asked me how old my sister was.', 'Hamid asked me how old was my sister.', 'Hamid asked me how old is your sister.'], k: ['WH', 'WO', 'PR'], e: 'how old + subject + verb (my sister was). your → my (Hamid was speaking to me); is → was.' },
        { t: 'choice', p: '“Do you live near the school?” Leila asked Adam.', o: ['Leila asked Adam if he lived near the school.', 'Leila asked Adam did he live near the school.', 'Leila asked Adam if did he live near the school.'], k: ['YN', 'WO', 'TN'], e: 'A Yes/No question → if + subject + verb (he lived). “do / did” disappears; live → lived.' }
      ] },
      { key: 'build', name: 'Build the Reported Question', pts: 75, how: 'Tap or drag the groups in order. One group does not belong.', qs: [
        { t: 'build', d: '“Who called you last night?” Sara asked me.', key: ['Sara asked me', 'who', 'had called me', 'the night before'], extra: ['did call me'], k: ['WH', 'TN', 'PR'], e: '“who” is the subject here, so the order stays: who had called me. called → had called; you → me; last night → the night before.' },
        { t: 'build', d: '“Have you finished your work?” the teacher asked Ali.', key: ['The teacher asked Ali', 'if', 'he', 'had finished', 'his work'], extra: ['had he finished'], k: ['YN', 'WO', 'TN', 'PR'], e: 'if + subject + verb (he had finished). have finished → had finished; you → he; your → his.' },
        { t: 'build', d: '“How did you travel to Rabat?” my uncle asked me.', key: ['My uncle asked me', 'how', 'I', 'had travelled', 'to Rabat'], extra: ['did I travel'], k: ['WH', 'WO', 'TN', 'PR'], e: 'how + subject + verb (I had travelled). “did” disappears; travelled → had travelled; you → I.' },
        { t: 'build', d: '“Can you explain this rule again, please?” the students asked the teacher.', key: ['The students asked the teacher', 'to explain', 'that rule', 'again'], extra: ['if he could explain'], k: ['RQ'], e: 'A polite request → asked + person + to + verb, not if. this → that; “please” disappears.' }
      ] },
      { key: 'complete', name: 'Complete the Report', pts: 25, how: 'Choose the missing words.', qs: [
        { t: 'gapt', d: '“Did you finish the project?” the teacher asked me.', bank: ['if', 'had', 'did', 'that'], s: ['The teacher asked me ', G('if', 'whether'), ' I ', G('had'), ' finished the project.'], k: ['YN', 'TN'], e: 'A Yes/No question → if or whether (both are correct here). did finish → had finished.' },
        { t: 'gapt', d: '“Why are you crying?” the mother asked her son.', bank: ['he', 'was crying', 'you', 'is crying'], s: ['The mother asked her son why ', G('he'), ' ', G('was crying'), '.'], k: ['WH', 'WO', 'PR', 'TN'], e: 'why + subject + verb: he was crying. you → he; are crying → was crying.' },
        { t: 'gapt', d: '“Are you coming to the party or not?” Salma asked me.', bank: ['whether', 'was coming', 'if', 'am coming'], s: ['Salma asked me ', G('whether'), ' or not I ', G('was coming'), ' to the party.'], k: ['WH2', 'YN', 'TN'], e: 'Only “whether” can come directly before “or not” (if or not is wrong). are coming → was coming.' },
        { t: 'gapt', d: '“What do you want for dinner?” Dad asked us.', bank: ['we', 'wanted', 'you', 'did want'], s: ['Dad asked us what ', G('we'), ' ', G('wanted'), ' for dinner.'], k: ['WH', 'WO', 'PR', 'TN'], e: 'what + subject + verb: we wanted. “do” disappears; want → wanted; you → we.' },
        { t: 'gapt', d: '“Will the shops be open tomorrow?” the tourist asked me.', bank: ['if', 'would be', 'will be', 'that'], s: ['The tourist asked me ', G('if', 'whether'), ' the shops ', G('would be'), ' open the following day.'], k: ['YN', 'WO', 'MD'], e: 'A Yes/No question (not a request: nobody is asked to do anything) → if / whether + statement order (the shops would be). will → would; tomorrow → the following day.' },
        { t: 'gapt', d: '“Could you turn off your phones, please?” the guide asked the visitors.', bank: ['to turn', 'their', 'turned', 'your'], s: ['The guide asked the visitors ', G('to turn'), ' off ', G('their'), ' phones.'], k: ['RQ', 'PR'], e: 'A polite request → asked + person + to + verb: to turn off. your → their; “please” disappears.' }
      ] },
      /* 2026-11-19 (teacher: no typing): the seven previous national-exam questions, word for word and in their
         order, are now built from word groups (the given start is the first group; one group does not belong). */
      { key: 'exam', name: 'National Exam Challenge', pts: 50, exam: true,
        how: 'Rewrite the sentence: tap the groups in order.',
        qs: [
        EX(1, '“Can you show me how to use the interactive whiteboard, please?”', ['Pamela asked me', 'to show', 'her', 'how to use', 'the interactive whiteboard'], 'if I could show', ['RQ', 'PR'], 'A polite request (Can you …, please?) → asked + person + to + verb. Do not use “if”. me → her (Pamela); “please” disappears.'),
        EX(2, '“Can you send me the documents, please?” Rod asked.', ['Rod asked me', 'to send', 'him', 'the documents'], 'if I could send', ['RQ', 'PR'], 'A polite request → asked me to send … me → him (Rod); “please” disappears.'),
        EX(3, '“Could you please give more information about the project?”', ['The journalist asked the minister', 'to give', 'more information', 'about the project'], 'please', ['RQ'], '“Could you please …?” is a polite request → asked the minister to give … “please” disappears.'),
        EX(4, '“Did Amina call the doctor?” The neighbour asked.', ['The neighbour wanted to know', 'if', 'Amina', 'had called', 'the doctor'], 'did Amina call', ['YN', 'WO', 'TN'], 'A Yes/No question → if / whether + statement order (Amina had called). did call → had called (past simple → past perfect).'),
        EX(5, '“Will you help me do my homework, please?” Pamela asked.', ['Pamela asked me', 'to help her', 'do', 'her homework'], 'my homework', ['RQ', 'PR'], '“Will you …, please?” is a polite request → asked me to help her … me → her and my → her (Pamela).'),
        EX(6, '“Where can I find a gas station?” The woman asked me.', ['The woman asked me', 'where', 'she', 'could find', 'a gas station'], 'could she find', ['WH', 'WO', 'MD', 'PR'], 'A Wh-question: keep “where”, then statement order (she could find, not could she find). I → she; can → could.'),
        EX(7, '“What are you doing?” The teacher asked the student.', ['The teacher asked the student', 'what', 'he', 'was doing'], 'was he doing', ['WH', 'WO', 'TN', 'PR'], 'A Wh-question: what + statement order (he was doing, not was he doing). you → he / she; are doing → was doing.')
      ] }
    ]
  };
})();
/* Page text and storage key (read by app.js). missionHtml and rulesHtml may use <b>; everything else is plain text.
   Keep storeKey unchanged, or saved attempts are lost (v2: the typed tasks became choose / build on 2026-11-19). */
window.RS_COPY = {
  storeKey: 'levelup-2bac-u7-reported-questions-q3-v2',
  heroKicker: 'LEVEL UP 2BAC · GRAMMAR · UNIT 7',
  heroTitle: 'REPORTED SPEECH',
  heroQuiz: 'QUESTIONS',
  heroSub: 'Mission: Report the Question! · Quiz 3 · 20 points',
  missionHtml: 'Report <b>questions</b> and <b>polite requests</b> correctly. Each one needs its own structure, and a reported question uses <b>statement word order</b>.',
  formula: 'asked + if / whether · question word · person + to + verb',
  cats: ['❓ Yes/No → if / whether', '🔎 Wh- → question word', '🙏 Request → to + verb', '↔ Statement word order'],
  rulesHtml: [
    'Play the 6 games in order. You have <b>one try</b> for each question.',
    'Games 1–5 prepare you for game 6: the seven <b>previous national-exam questions</b>, which you build group by group.',
    'You see the correct answer and an explanation straight away, and you can review your mistakes at the end.'
  ],
  beforeBoss: 'Next: the National Exam Challenge.',
  fullMarks: '🏆 Perfect! Mission complete: you can report any question or request in the national exam.'
};

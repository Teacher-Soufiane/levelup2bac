/* Unit 7 · Reported Speech · Part 4: Functions · Grammar Quiz 4 (out of 20). "Mission: Report the Message!"
   Points are in hundredths (25 = 0.25 point). Every item lists k = the skills it tests (RS_TAGS).
   In choice and err items the first option is the correct one; the app shuffles.
   Only the teacher's reference table is used: ordered / warned / asked / advised / told / promised + (not) to + verb; suggested + (not) + -ing.
   No reported questions or ordinary statements. Game 6 uses the six previous national-exam questions word for word. */
window.RS_TAGS = [
  ['CM', 'Commands', 'Command → ordered / warned + (not) to + verb'],
  ['RQ', 'Requests', 'Request → asked + (not) to + verb'],
  ['AD', 'Advice', 'Advice → advised / told + (not) to + verb'],
  ['PM', 'Promises', 'Promise → promised + (not) to + verb'],
  ['SG', 'Suggestions', 'Suggestion → suggested + (not) + -ing'],
  ['NG', 'Negative structures', 'negatives: not to + verb, not + -ing (never “to not” or “don’t”)'],
  ['PR', 'Pronouns and other changes', 'pronouns, possessives and time (me → her, my → his, tomorrow → the next day)']
];

(function () {
  /* a national-exam question as a sentence builder: the given start is the first group; one wrong group */
  function EX(n, d, key, extra, k, e) { return { t: 'build', round: 'National Exam · ' + n + ' of 6', d: d, key: key, extra: [extra], k: k, e: e }; }
  function X(t) { return { t: t, x: 1 }; }   /* a wrong word in Grammar Error Detective */

  window.RS_QUIZ = {
    title: 'Reported Speech · Part 4: Functions',
    games: [
      { key: 'function', name: 'Function Detective', pts: 50, how: 'What is the speaker’s intention?', qs: [
        { t: 'choice', p: '“You should see a dentist about that tooth,” Mum told me.', o: ['Advice', 'Command', 'Promise', 'Suggestion'], k: ['AD'], e: '“You should …” gives advice → Mum advised me to see a dentist.' },
        { t: 'choice', p: '“Stand up and leave the classroom now!” the teacher shouted.', o: ['Command', 'Request', 'Advice', 'Suggestion'], k: ['CM'], e: 'An order with “!” and no “please” is a command → the teacher ordered him to leave the classroom.' },
        { t: 'choice', p: '“Please lend me your charger,” Hind said to me.', o: ['Request', 'Command', 'Promise', 'Advice'], k: ['RQ'], e: '“Please” + verb is a polite request → Hind asked me to lend her my charger.' },
        { t: 'choice', p: '“I’ll call you as soon as I arrive,” my brother said.', o: ['Promise', 'Request', 'Suggestion', 'Advice'], k: ['PM'], e: '“I’ll (I will) …” commits the speaker to an action: a promise → my brother promised to call me.' },
        { t: 'choice', p: '“Let’s study together for the exam,” Omar said to us.', o: ['Suggestion', 'Promise', 'Command', 'Advice'], k: ['SG'], e: '“Let’s …” is a suggestion → Omar suggested studying together for the exam.' },
        { t: 'choice', p: '“Don’t park your car here!” the police officer said to the driver.', o: ['Command', 'Advice', 'Request', 'Suggestion'], k: ['CM', 'NG'], e: '“Don’t …!” is a negative command → the police officer ordered the driver not to park his car there.' }
      ] },
      { key: 'verb', name: 'Choose the Reporting Verb', pts: 50, how: 'Choose the reporting verb that matches the speaker’s intention.', qs: [
        { t: 'choice', p: '“Don’t touch the electrical wires!” → The teacher ____ the students not to touch the electrical wires.', o: ['ordered', 'advised', 'promised', 'suggested'], k: ['CM', 'NG'], e: '“Don’t …!” is a command → ordered + person + not to + verb.' },
        { t: 'choice', p: '“You shouldn’t stay up so late, Omar,” the nurse said. → The nurse ____ Omar not to stay up so late.', o: ['advised', 'ordered', 'promised', 'suggested'], k: ['AD', 'NG'], e: '“You shouldn’t …” is advice → advised + person + not to + verb.' },
        { t: 'choice', p: '“Please don’t tell anyone,” Hind said to me. → Hind ____ me not to tell anyone.', o: ['asked', 'promised', 'suggested', 'advised'], k: ['RQ', 'NG'], e: '“Please don’t …” is a negative request → asked + person + not to + verb.' },
        { t: 'choice', p: '“I won’t forget your birthday,” my brother told me. → My brother ____ not to forget my birthday.', o: ['promised', 'asked', 'ordered', 'suggested'], k: ['PM', 'NG'], e: '“I won’t …” is a promise → promised + not to + verb (no person after promised).' },
        { t: 'choice', p: '“Let’s organise a school campaign,” Salma said. → Salma ____ organising a school campaign.', o: ['suggested', 'advised', 'promised', 'asked'], k: ['SG'], e: '“Let’s …” is a suggestion. Only suggested is followed by -ing (organising).' },
        { t: 'choice', p: '“Watch out! Don’t touch the hot pan,” Mum said. → Mum ____ me not to touch the hot pan.', o: ['warned', 'promised', 'suggested', 'asked'], k: ['CM', 'NG'], e: '“Watch out!” announces a danger → warned + person + not to + verb.' }
      ] },
      { key: 'form', name: 'Infinitive or Gerund?', pts: 50, how: 'Choose the correct form after the reporting verb.', qs: [
        { t: 'choice', p: '“Let’s take a taxi,” said Karim. → Karim suggested ____ a taxi.', o: ['taking', 'to take', 'take'], k: ['SG'], e: 'suggested + -ing (gerund): suggested taking. Never “suggested to take”.' },
        { t: 'choice', p: '“You should drink more water,” the coach said to us. → The coach told us ____ more water.', o: ['to drink', 'drinking', 'drink'], k: ['AD'], e: 'Advice → told / advised + person + to + verb: told us to drink.' },
        { t: 'choice', p: '“Let’s not waste our time,” said Nadia. → Nadia suggested ____ our time.', o: ['not wasting', 'not to waste', 'to not waste'], k: ['SG', 'NG'], e: 'Negative suggestion → suggested + not + -ing: suggested not wasting.' },
        { t: 'choice', p: '“I won’t be late again,” said Yassine. → Yassine promised ____ late again.', o: ['not to be', 'not being', 'to not be'], k: ['PM', 'NG'], e: 'Negative promise → promised + not to + verb. “not” comes before “to”.' },
        { t: 'choice', p: '“Don’t make noise!” the librarian said to us. → The librarian ordered us ____ noise.', o: ['not to make', 'not making', 'to not make'], k: ['CM', 'NG'], e: 'Negative command → ordered + person + not to + verb. “Don’t” disappears.' },
        { t: 'choice', p: '“Close the door!” the teacher said to Ali. → The teacher ordered Ali ____ the door.', o: ['to close', 'closing', 'to closing'], k: ['CM'], e: 'Command → ordered + person + to + verb: ordered Ali to close.' }
      ] },
      { key: 'build', name: 'Build the Reported Message', pts: 50, how: 'Tap or drag the groups in order. One group does not belong.', qs: [
        { t: 'build', d: '“Please help me with my suitcase,” the old woman said to Adam.', key: ['The old woman', 'asked Adam', 'to help her', 'with her suitcase'], extra: ['helping her'], k: ['RQ', 'PR'], e: 'Request → asked + person + to + verb. me → her; my → her.' },
        { t: 'build', d: '“You should save money for the holidays,” my father told me.', key: ['My father', 'advised me', 'to save money', 'for the holidays'], extra: ['saving money'], k: ['AD'], e: 'Advice → advised + person + to + verb (not -ing).' },
        { t: 'build', d: '“Don’t use your phones in class!” the teacher said to the students.', key: ['The teacher', 'ordered the students', 'not to use', 'their phones in class'], extra: ['to not use'], k: ['CM', 'NG', 'PR'], e: 'Negative command → ordered + person + not to + verb (“not” before “to”). your → their.' },
        { t: 'build', d: '“Let’s go to the beach on Sunday,” Lina said to her friends.', key: ['Lina', 'suggested', 'going to the beach', 'on Sunday'], extra: ['to go to the beach'], k: ['SG'], e: 'Suggestion → suggested + -ing: suggested going. No person after “suggested”.' }
      ] },
      { key: 'detect', name: 'Grammar Error Detective', pts: 50, how: 'Step 1: tap the wrong words. Step 2: choose the corrected sentence.', qs: [
        { t: 'err', d: '“Let’s study in the library,” Sara said.', w: ['Sara', 'suggested', X('to study'), 'in', 'the', 'library', '.'], o: ['Sara suggested studying in the library.', 'Sara suggested to study in the library.', 'Sara suggested us to study in the library.'], k: ['SG'], e: 'suggested + -ing: suggested studying. Never “suggested to …” or “suggested us to …”.' },
        { t: 'err', d: '“You shouldn’t waste water,” the teacher told us.', w: ['The', 'teacher', 'advised', 'us', X('don’t'), 'waste', 'water', '.'], o: ['The teacher advised us not to waste water.', 'The teacher advised us to not waste water.', 'The teacher advised us don’t waste water.'], k: ['AD', 'NG'], e: 'Negative advice → advised + person + not to + verb. “advised” is already right.' },
        { t: 'err', d: '“Don’t open the window!” the teacher said to us.', w: ['The', 'teacher', 'ordered', 'us', X('to not'), 'open', 'the', 'window', '.'], o: ['The teacher ordered us not to open the window.', 'The teacher ordered us to not open the window.', 'The teacher ordered us not opening the window.'], k: ['CM', 'NG'], e: 'The negative is “not to + verb”: “not” comes before “to”.' },
        { t: 'err', d: '“I will bring your book tomorrow,” Ali told me.', w: ['Ali', 'promised', X('bringing'), 'my', 'book', 'the', 'next', 'day', '.'], o: ['Ali promised to bring my book the next day.', 'Ali promised bringing my book the next day.', 'Ali promised to bring your book the next day.'], k: ['PM', 'PR'], e: 'promised + to + verb: promised to bring. “my” and “the next day” are already right.' },
        { t: 'err', d: '“Please wait for me,” Hind said to us.', w: ['Hind', 'asked', 'us', X('wait'), 'for', 'her', '.'], o: ['Hind asked us to wait for her.', 'Hind asked us waiting for her.', 'Hind asked us to wait for me.'], k: ['RQ', 'PR'], e: 'Request → asked + person + to + verb: to wait. “her” is already right (me → her).' },
        { t: 'err', d: '“Let’s not go out tonight,” my sister said.', w: ['My', 'sister', 'suggested', X('not to go'), 'out', 'that', 'night', '.'], o: ['My sister suggested not going out that night.', 'My sister suggested not to go out that night.', 'My sister suggested to not go out that night.'], k: ['SG', 'NG'], e: 'Negative suggestion → suggested + not + -ing: not going. “that night” is already right (tonight → that night).' }
      ] },
      /* 2026-11-19 (teacher: no typing): the six previous national-exam questions, word for word and in their
         order, are now built from word groups (the given start is the first group; one group does not belong).
         1 point each, so the Build game above went from 0.75 to 0.5 per item (total stays 20). */
      { key: 'exam', name: 'National Exam Challenge', pts: 100, exam: true,
        how: 'Rewrite the sentence: tap the groups in order.',
        qs: [
        EX(1, '“Don’t eat the food on the table!” the mother told her son.', ['The mother ordered her son', 'not to eat', 'the food', 'on the table'], 'to not eat', ['CM', 'NG'], '“Don’t …!” is a negative command → ordered her son not to eat … “not” comes before “to”; “don’t” disappears.'),
        EX(2, '“If I were you, I would contribute to charity work,” Ahmed said.', ['Ahmed advised his friend', 'to contribute', 'to charity work'], 'contributing', ['AD'], '“If I were you, I would …” is advice. advised + person + to + verb; the words “If I were you, I would” disappear.'),
        EX(3, '“Call me as soon as possible,” said my friend.', ['My friend asked me', 'to call', 'him', 'as soon as possible'], 'me', ['RQ', 'PR'], 'Request → asked me to call … me → him / her (my friend).'),
        EX(4, '“I will visit my grandparents at the weekend,” Amina told her dad.', ['Amina promised', 'to visit', 'her grandparents', 'at the weekend'], 'my grandparents', ['PM', 'PR'], '“I will …” is a promise → promised to visit … “will” disappears; my → her (Amina).'),
        EX(5, '“I think you should convert the document to PDF,” she said.', ['She advised me', 'to convert', 'the document', 'to PDF'], 'should convert', ['AD'], '“I think you should …” is advice → advised me to convert … “I think you should” disappears.'),
        EX(6, '“You should change your eating habits to stay healthy,” the doctor said.', ['The doctor advised me', 'to change', 'my eating habits', 'to stay healthy'], 'your eating habits', ['AD', 'PR'], '“You should …” is advice → advised me to change … “should” disappears; your → my (the doctor was speaking to me).')
      ] }
    ]
  };
})();
/* Page text and storage key (read by app.js). missionHtml and rulesHtml may use <b>; everything else is plain text.
   Keep storeKey unchanged, or saved attempts are lost (v2: the typed exam task became build on 2026-11-19). */
window.RS_COPY = {
  storeKey: 'levelup-2bac-u7-reported-functions-q4-v2',
  heroKicker: 'LEVEL UP 2BAC · GRAMMAR · UNIT 7',
  heroTitle: 'REPORTED SPEECH',
  heroQuiz: 'FUNCTIONS',
  heroSub: 'Mission: Report the Message! · Quiz 4 · 20 points',
  missionHtml: 'Report <b>commands, requests, advice, promises and suggestions</b>. First find the speaker’s <b>intention</b>, then choose the <b>reporting verb</b>: the verb decides the structure.',
  formula: 'reporting verb + (person) + (not) to + verb · suggested + -ing',
  cats: ['📢 ordered / warned', '🙏 asked', '💡 advised', '🤝 promised', '🗣 suggested + ‑ing'],
  rulesHtml: [
    'Play the 6 games in order. You have <b>one try</b> for each question.',
    'Games 1–5 prepare you for game 6: the six <b>previous national-exam questions</b>, which you build group by group.',
    'You see the correct answer and an explanation straight away, and you can review your mistakes at the end.'
  ],
  beforeBoss: 'Next: the National Exam Challenge.',
  fullMarks: '🏆 Perfect! Mission complete: you can report any command, request, piece of advice, promise or suggestion in the national exam.'
};

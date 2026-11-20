/* Unit 7 · Reported Speech · Part 2: Statements · Grammar Quiz 2 (out of 20).
   Points are in hundredths (25 = 0.25 point). Every item lists k = the skills it tests (RS_TAGS).
   In choice and error items the first option is the correct one; the app shuffles.
   Game 6 uses the seven previous national-exam questions word for word. */
window.RS_TAGS = [
  ['PS', 'Tenses', 'present simple → past simple'],
  ['PC', 'Tenses', 'present continuous → past continuous'],
  ['PP', 'Tenses', 'present perfect → past perfect'],
  ['PA', 'Tenses', 'past simple → past perfect'],
  ['GT', 'Tenses', 'am / is / are going to → was / were going to'],
  ['WI', 'Modals', 'will → would'],
  ['CA', 'Modals', "can / can't → could / couldn't"],
  ['HT', 'Modals', 'have to → had to'],
  ['MU', 'Modals', 'must → had to'],
  ['PR', 'Pronouns and possessives', 'pronouns (I, we, you → he, she, they …)'],
  ['PO', 'Pronouns and possessives', 'possessives (my, our, your → his, her, their …)'],
  ['TM', 'Time, place and this / these', 'now, today, tomorrow, yesterday, tonight, next …, this, here'],
  ['RV', 'Reporting verbs', 'said that / told someone that / informed someone that / explained to someone that'],
  ['NC', 'Words that do not change', 'names, should, could, soon, past perfect …']
];

(function () {
  function G() { return { a: [].slice.call(arguments) }; }   /* a typed gap and its accepted answers */
  function X(t) { return { t: t, x: 1 }; }                    /* a wrong word in Reported Speech Detective */
  /* a national-exam question as a sentence builder: the given start is the first group; one wrong group */
  function EX(n, d, key, extra, k, e) { return { t: 'build', round: 'National Exam · ' + n + ' of 7', d: d, key: key, extra: [extra], k: k, e: e }; }

  window.RS_QUIZ = {
    title: 'Reported Speech · Part 2: Statements',
    games: [
      { key: 'identify', name: 'Identify the Transformation', pts: 50, how: 'Tap or drag each statement to its report.', qs: [
        { t: 'match', round: 'Round 1 · Tenses', pairs: [
          ['“I live in Fes,” Ali said.', 'Ali said that he lived in Fes.', ['PS', 'PR']],
          ['“I lived in Fes,” Ali said.', 'Ali said that he had lived in Fes.', ['PA', 'PR']],
          ['“I will live in Fes,” Ali said.', 'Ali said that he would live in Fes.', ['WI', 'PR']]] },
        { t: 'match', round: 'Round 2 · Tense + time', pairs: [
          ['“I am busy today,” Nora said.', 'Nora said that she was busy that day.', ['PS', 'PR', 'TM']],
          ['“I was busy yesterday,” Nora said.', 'Nora said that she had been busy the day before.', ['PA', 'PR', 'TM']],
          ['“I will be busy tomorrow,” Nora said.', 'Nora said that she would be busy the following day.', ['WI', 'PR', 'TM']]] }
      ] },
      { key: 'choose', name: 'Choose the Correct Report', pts: 75, how: 'Choose the correct reported statement.', qs: [
        { t: 'choice', p: '“I have finished my homework,” Sara said.', o: ['Sara said that she had finished her homework.', 'Sara said that she has finished her homework.', 'Sara said that she had finished my homework.', 'Sara said that I had finished her homework.'], k: ['PP', 'PR', 'PO'], e: 'have finished → had finished (present perfect → past perfect); I → she; my → her.' },
        { t: 'choice', p: '“We are preparing for the exam,” the students said.', o: ['The students said that they were preparing for the exam.', 'The students said that we were preparing for the exam.', 'The students said that they are preparing for their exam.', 'The students said that they had prepared for the exam.'], k: ['PC', 'PR'], e: 'are preparing → were preparing (present continuous → past continuous); we → they. “had prepared” changes the meaning: they had not finished preparing.' },
        { t: 'choice', p: '“I watched the match last night,” Youssef said.', o: ['Youssef said that he had watched the match the night before.', 'Youssef said that he has watched the match the night before.', 'Youssef said that he had watched the match the following night.', 'Youssef said that he watches the match the night before.'], k: ['PA', 'PR', 'TM'], e: 'watched → had watched (past simple → past perfect); last night → the night before.' },
        { t: 'choice', p: '“I am going to apply for the job,” Leila said.', o: ['Leila said that she was going to apply for the job.', 'Leila said that she is going to apply for the job.', 'Leila said that she had been going to apply for the job.', 'Leila said that I was going to apply for the job.'], k: ['GT', 'PR'], e: 'am going to → was going to; I → she.' },
        { t: 'choice', p: '“I have to leave early,” Amina told the teacher.', o: ['Amina told the teacher that she had to leave early.', 'Amina said the teacher that she had to leave early.', 'Amina told to the teacher that she had to leave early.', 'Amina told the teacher that she has to leave early.'], k: ['HT', 'PR', 'RV'], e: 'have to → had to. “told” is followed directly by the person (told the teacher that …). “said” is not (said that … or said to the teacher that …).' },
        { t: 'choice', p: '“You must finish your work today,” Mr Bennani told me.', o: ['Mr Bennani told me that I had to finish my work that day.', 'Mr Bennani told me that you had to finish your work that day.', 'Mr Bennani told me that I had to finish your work that day.', 'Mr Bennani told me that I have to finish my work that day.'], k: ['MU', 'PR', 'PO', 'TM', 'RV'], e: 'must → had to; you → I and your → my (Mr Bennani was speaking to me); today → that day.' }
      ] },
      { key: 'build', name: 'Build the Reported Sentence', pts: 75, how: 'Tap or drag the groups in order. One group does not belong.', qs: [
        { t: 'build', d: '“I will visit my aunt tomorrow,” Salma said.', key: ['Salma said', 'that', 'she', 'would visit', 'her aunt', 'the following day'], extra: ['will visit'], alt: [['Salma said', 'that', 'the following day', 'she', 'would visit', 'her aunt']], k: ['WI', 'PR', 'PO', 'TM'], e: 'will → would; I → she; my → her; tomorrow → the following day.' },
        { t: 'build', d: '“We have finished our project,” the students told the teacher.', key: ['The students told', 'the teacher', 'that', 'they', 'had finished', 'their project'], extra: ['our project'], k: ['PP', 'PR', 'PO', 'RV'], e: 'told + the person + that; we → they; have finished → had finished; our → their.' },
        { t: 'build', d: '“I am working on my report now,” Karim explained to us.', key: ['Karim explained', 'to us', 'that', 'he', 'was working', 'on his report', 'then'], extra: ['now'], k: ['PC', 'PR', 'PO', 'TM', 'RV'], e: 'explained to us that …; am working → was working; my → his; now → then.' },
        { t: 'build', d: '“I must finish this essay today,” Leila said.', key: ['Leila said', 'that', 'she', 'had to finish', 'that essay', 'that day'], extra: ['must finish'], alt: [['Leila said', 'that', 'that day', 'she', 'had to finish', 'that essay']], k: ['MU', 'PR', 'TM'], e: 'must → had to; this → that; today → that day.' }
      ] },
      /* 2026-11-19 (teacher: no typing): each gap is chosen from a short list (the right words + wrong forms) */
      { key: 'complete', name: 'Complete the Report', pts: 25, how: 'Choose the missing words.', qs: [
        { t: 'gapt', d: '“I can help you with your homework,” Rachid told Hiba.', bank: ['could', 'her', 'can', 'you'], s: ['Rachid told Hiba that he ', G('could'), ' help ', G('her'), ' with her homework.'], k: ['CA', 'PR', 'RV'], e: 'can → could; you → her (Rachid was speaking to Hiba).' },
        { t: 'gapt', d: '“We are moving to a new office next month,” the director informed the employees.', bank: ['were moving', 'the following month', 'are moving', 'next month'], s: ['The director informed the employees that they ', G('were moving'), ' to a new office ', G('the following month', 'the next month'), '.'], k: ['PC', 'PR', 'TM', 'RV'], e: 'are moving → were moving; next month → the following month. “informed” is followed by the people: informed the employees that …' },
        { t: 'gapt', d: '“I have lost my keys,” Adam said.', bank: ['had lost', 'his', 'has lost', 'my'], s: ['Adam said that he ', G('had lost'), ' ', G('his'), ' keys.'], k: ['PP', 'PO'], e: 'have lost → had lost (present perfect → past perfect); my → his.' },
        { t: 'gapt', d: '“I don’t like this film,” Sara said.', bank: ["didn't", 'that', "don't", 'this'], s: ['Sara said that she ', G("didn't", 'did not'), ' like ', G('that'), ' film.'], k: ['PS', 'TM'], e: "don't like → didn't like (present simple → past simple); this → that." },
        { t: 'gapt', d: '“I saw your brother yesterday,” Nora told me.', bank: ['had seen', 'the day before', 'saw', 'yesterday'], s: ['Nora told me that she ', G('had seen'), ' my brother ', G('the day before', 'the previous day'), '.'], k: ['PA', 'TM', 'RV'], e: 'saw → had seen (past simple → past perfect); yesterday → the day before. your → my, because Nora was speaking to me.' },
        { t: 'gapt', d: '“You should revise your lessons every day,” the teacher told us.', bank: ['should', 'our', 'had to', 'your'], s: ['The teacher told us that we ', G('should'), ' revise ', G('our'), ' lessons every day.'], k: ['NC', 'PO', 'RV'], e: 'should does not change; your → our (the teacher was speaking to us).' }
      ] },
      { key: 'detective', name: 'Reported Speech Detective', pts: 50, how: 'Tap every wrong word, then choose the corrected sentence.', qs: [
        { t: 'err', d: '“I am working now,” Ali said.', w: ['Ali', 'said', 'that', 'he', X('is working'), X('now'), '.'], o: ['Ali said that he was working then.', 'Ali said that he was working now.', 'Ali said that he had been working then.'], k: ['PC', 'TM'], e: 'is working → was working; now → then.' },
        { t: 'err', d: '“I have cleaned my room,” Sara said.', w: ['Sara', 'said', 'that', 'she', X('has cleaned'), X('my'), 'room', '.'], o: ['Sara said that she had cleaned her room.', 'Sara said that she had cleaned my room.', 'Sara said that she has cleaned her room.'], k: ['PP', 'PO'], e: 'has cleaned → had cleaned; my → her.' },
        { t: 'err', d: '“I will call you tomorrow,” Omar told me.', w: ['Omar', X('said'), 'me', 'that', 'he', 'would', 'call', 'me', X('tomorrow'), '.'], o: ['Omar told me that he would call me the following day.', 'Omar said me that he would call me the following day.', 'Omar told me that he will call me the following day.'], k: ['RV', 'WI', 'TM'], e: '“said” cannot be followed directly by a person: told me that …; tomorrow → the following day. “would” and “me” are already right.' },
        { t: 'err', d: '“We can’t find our tickets,” the girls said.', w: ['The', 'girls', 'said', 'that', X('we'), "couldn't", 'find', 'their', 'tickets', '.'], o: ['The girls said that they couldn’t find their tickets.', 'The girls said that they can’t find their tickets.', 'The girls said that we couldn’t find our own tickets.'], k: ['PR', 'CA'], e: 'we → they. “couldn’t” and “their” are already right.' },
        { t: 'err', d: '“I must study tonight,” Hamza said.', w: ['Hamza', 'said', 'that', 'he', 'had to', 'study', X('tonight'), '.'], o: ['Hamza said that he had to study that night.', 'Hamza said that he had to study tonight.', 'Hamza said that he had to study the night before.'], k: ['MU', 'TM'], e: 'tonight → that night. “had to” is already right (must → had to).' },
        { t: 'err', d: '“You should drink more water,” the doctor told my father.', w: ['The', 'doctor', 'told', 'my', 'father', 'that', 'he', X('would'), 'drink', 'more', 'water', '.'], o: ['The doctor told my father that he should drink more water.', 'The doctor told my father that he had to drink more water.', 'The doctor told my father that you should drink more water.'], k: ['NC', 'RV'], e: '“should” does not change in reported speech. “he” is right: the doctor was speaking to my father.' }
      ] },
      /* 2026-11-19 (teacher: no typing): the seven previous national-exam questions, word for word and in their
         order, are now built from word groups (the given start is the first group; one group does not belong). */
      { key: 'exam', name: 'National Exam Challenge', pts: 50, exam: true,
        how: 'Rewrite the sentence: tap the groups in order.',
        qs: [
        EX(1, '“The number of foreign students in Morocco has increased,” said the minister.', ['The minister said', 'that', 'the number of foreign students', 'in Morocco', 'had increased'], 'has increased', ['PP', 'NC'], 'has increased → had increased (present perfect → past perfect). Everything else stays the same. “that” is optional after “said”.'),
        EX(2, '“Nadia has made considerable progress in her new job,” the manager said.', ['The manager said that', 'Nadia', 'had made', 'considerable progress', 'in her new job'], 'has made', ['PP', 'NC'], 'has made → had made (present perfect → past perfect). “her” does not change: the manager is talking about Nadia.'),
        EX(3, '“I have worked as a waiter for three years,” James said.', ['James said', 'that', 'he', 'had worked', 'as a waiter', 'for three years'], 'have worked', ['PR', 'PP'], 'I → he; have worked → had worked (present perfect → past perfect).'),
        EX(4, '“I have cancelled the meeting,” said the manager.', ['The manager informed the employees that', 'he', 'had cancelled', 'the meeting'], 'has cancelled', ['PR', 'PP', 'RV'], 'I → he (or she); have cancelled → had cancelled. “informed” is followed by the people (the employees), then “that”.'),
        EX(5, '“I’m going to visit Janelle in hospital,” Nancy said.', ['Nancy said that', 'she', 'was going to visit', 'Janelle', 'in hospital'], 'is going to visit', ['PR', 'GT'], 'I → she; I’m (am) going to → was going to.'),
        EX(6, '“I will send them an email soon,” said the secretary.', ['The secretary said that she', 'would send', 'them', 'an email', 'soon'], 'will send', ['WI', 'NC'], 'will → would. “them” is not the speaker or the listener, and “soon” is not a fixed day, so they do not change.'),
        EX(7, '“I will stay a few more days in Spain,” Hajar told me.', ['Hajar told me that', 'she', 'would stay', 'a few more days', 'in Spain'], 'will stay', ['PR', 'WI', 'RV'], 'told me that …; I → she; will → would.')
      ] }
    ]
  };
})();
/* Page text and storage key (read by app.js). missionHtml and rulesHtml may use <b>; everything else is plain text.
   Keep storeKey unchanged, or saved attempts are lost (v2: the typed tasks became choose / build on 2026-11-19). */
window.RS_COPY = {
  storeKey: 'levelup-2bac-u7-reported-statements-q2-v2',
  heroKicker: 'LEVEL UP 2BAC · GRAMMAR · UNIT 7',
  heroTitle: 'REPORTED SPEECH',
  heroQuiz: 'STATEMENTS',
  heroSub: 'From direct speech to reported statements · Quiz 2 · 20 points',
  missionHtml: 'Turn <b>complete statements</b> into reported speech, step by step, until you can solve <b>real national-exam questions</b> on your own.',
  formula: 'said (that) / told + person (that) + one step back in time',
  cats: ['⏱ Tenses and modals', '👤 Pronouns and possessives', '📅 Time and place', '🗣 said · told · informed'],
  rulesHtml: [
    'Play the 6 games in order. You have <b>one try</b> for each question.',
    'Games 1–5 prepare you for game 6: the seven <b>previous national-exam questions</b>, which you build group by group.',
    'You see the correct answer and an explanation straight away, and you can review your mistakes at the end.'
  ],
  beforeBoss: 'Next: the National Exam Challenge.',
  fullMarks: '🏆 Perfect! You are ready for reported statements in the national exam.'
};

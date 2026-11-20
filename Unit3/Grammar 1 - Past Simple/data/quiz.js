/* Unit 3 · Grammar · Past Simple · Quiz 1 (out of 20). On the Unit 10 Grammar page (2026-11-19), like Units 1 and 2.
   Points are in hundredths (100 = 1 point); the total must be 2000. Every item lists k = the skills it tests (RS_TAGS).
   In choice items the first option is the correct one; the app shuffles, and the right answer changes place on
   every new attempt. The teacher's 20 questions are kept word for word (levels 1–8 grouped into 6 games).
   Only change: in two "meaning" items the wrong options were lengthened so the right answer is not always the longest. */
window.RS_TAGS = [
  ['RG', 'Form', 'regular verbs: + -ed / -d'],
  ['SP', 'Form', 'spelling: stop → stopped, study → studied'],
  ['IR', 'Form', 'irregular verbs: go → went, lose → lost, run → ran'],
  ['DI', 'Form', 'questions and negatives: did + base verb'],
  ['US', 'Use', 'a finished action at a finished time (yesterday, last…, ago)']
];

(function () {
  window.RS_QUIZ = {
    title: 'Past Simple · Quiz 1',
    games: [
      { key: 'form', name: 'Choose the Correct Form', pts: 100, how: 'Choose the correct past form.', qs: [
        { t: 'choice', p: 'Last summer, I ______ to Spain and met my old friends there.', o: ['travelled', 'travel', 'travels', 'travelling'], k: ['RG'], e: "Regular verbs form the Past Simple by adding '-ed' (here doubling the final consonant): 'travel' → 'travelled'." },
        { t: 'choice', p: 'Ahmed ______ from university last year. At the moment, he is working for a big company.', o: ['graduated', 'graduate', 'graduates', 'graduating'], k: ['RG'], e: "'Graduate' is a regular verb ending in 'e'; add '-d' to form the Past Simple: graduate → graduated." },
        { t: 'choice', p: 'She ______ her keys somewhere in the garden yesterday afternoon.', o: ['lost', 'lose', 'loses', 'losing'], k: ['IR'], e: "'Lose' is an irregular verb; its Past Simple form is 'lost', not 'losed'." },
        { t: 'choice', p: "We ______ this project only last Tuesday, so it isn't finished yet.", o: ['started', 'start', 'starts', 'starting'], k: ['RG', 'US'], e: "'Start' is regular; add '-ed' for the Past Simple with 'last Tuesday'." },
        { t: 'choice', p: 'Salah has just completed his part of the project. Last night, he ______ up late doing research on the internet.', o: ['stayed', 'stay', 'stays', 'staying'], k: ['RG', 'US'], e: "'Stay' becomes 'stayed' in the Past Simple, matching 'last night'." },
        { t: 'choice', p: 'Last week, Mike was reading a book when he ______ a phone call from his friend.', o: ['received', 'receive', 'receives', 'receiving'], k: ['RG'], e: "'Receive' takes '-d' in the Past Simple: received." }
      ] },
      { key: 'pattern', name: 'Know the Pattern', pts: 100, how: 'Which is the correct Past Simple form?', qs: [
        { t: 'choice', p: 'Which is the correct Past Simple form of "stop"?', o: ['stopped', 'stoped', 'stopping', 'stops'], k: ['SP'], e: 'One-syllable verbs ending in vowel + consonant double the consonant: stop → stopped.' },
        { t: 'choice', p: 'Which is the correct Past Simple form of "study"?', o: ['studied', 'studyed', 'studying', 'studys'], k: ['SP'], e: "Consonant + y changes to i before '-ed': study → studied." },
        { t: 'choice', p: 'Which is the correct Past Simple form of "go"?', o: ['went', 'goed', 'going', 'goes'], k: ['IR'], e: "'Go' is irregular: its Past Simple is 'went'." }
      ] },
      { key: 'error', name: 'Find and Correct the Error', pts: 100, how: 'Choose the correct version.', qs: [
        { t: 'choice', p: '❌ Yesterday, she runned five kilometers before breakfast.', o: ['Yesterday, she ran five kilometers before breakfast.', 'Yesterday, she runed five kilometers before breakfast.', 'Yesterday, she was ran five kilometers before breakfast.', 'Yesterday, she has ran five kilometers before breakfast.'], k: ['IR'], e: "'Run' is irregular; its Past Simple is 'ran', not 'runned'." },
        { t: 'choice', p: '❌ Did you called your brother last night?', o: ['Did you call your brother last night?', 'Did you calling your brother last night?', 'Did you calls your brother last night?', 'Did you have called your brother last night?'], k: ['DI'], e: "After 'did', the main verb stays in its base form: 'did you call'." }
      ] },
      { key: 'meaning', name: 'Understand the Meaning', pts: 100, how: 'Choose the correct answer.', qs: [
        { t: 'choice', p: "I haven't received any answer from the university yet.", ask: 'Why is the Past Simple NOT appropriate in this sentence?', o: ["Because 'yet' shows the action is connected to the present moment, so the Present Perfect is used instead.", 'Because the sentence describes a repeated past habit that the speaker had for a long time in the past.', "Because the verb 'receive' has no Past Simple form, so another tense is used.", 'Because the action happened at a specific time in the past.'], k: ['US'], e: "'Yet' signals an unfinished period connected to now, needing the Present Perfect." },
        { t: 'choice', p: 'I called you twice yesterday.', ask: 'What does this sentence tell us about when the action happened?', o: ['The action happened at a specific, finished time in the past.', 'The action started in the past and is still happening now, at this moment.', 'The action will happen at some time in the future.', 'The action happens repeatedly every day.'], k: ['US'], e: "'Yesterday' is a definite, finished past time marker." },
        { t: 'choice', p: 'Which time expression fits naturally with the Past Simple?', o: ['three weeks ago', 'since last year', 'for two hours (up to now)', 'just now'], k: ['US'], e: "'Ago' expressions naturally show how far back a finished action occurred." }
      ] },
      { key: 'context', name: 'Same Meaning & Context', pts: 100, how: 'Same meaning, or complete the context.', qs: [
        { t: 'choice', p: "It's been three weeks since we started working on this song.", ask: 'Choose the sentence with the same meaning:', o: ['We started working on this song three weeks ago.', 'We have started working on this song three weeks ago.', 'We are starting working on this song three weeks ago.', 'We were starting working on this song three weeks ago.'], k: ['US'], e: "'It has been X since...' and 'We did it X ago' express the same past start." },
        { t: 'choice', p: 'Salah finished his part of the project. Then he stayed up late doing research.', ask: 'Choose the sentence with the same meaning:', o: ['After finishing his part of the project, Salah stayed up late doing research.', 'Salah finishes his part of the project and stays up late doing research.', 'Salah was finishing his part of the project and staying up late doing research.', 'Salah will finish his part of the project and stay up late doing research.'], k: ['US'], e: 'Both structures preserve the sequence of completed past actions.' },
        { t: 'choice', p: 'Lucas left Alex a message: "You ______ me twice yesterday, but my phone was off, so I didn\'t answer."', o: ['called', 'call', 'calls', 'calling'], k: ['RG', 'US'], e: "'Called' matches the completed action and the time marker 'yesterday'." },
        { t: 'choice', p: 'In her letter, Fatima wrote: "I ______ your e-mail yesterday. You seem to be worried."', o: ['read', 'reads', 'reading', 'readed'], k: ['IR'], e: "Past Simple 'read' is spelled like the present form but pronounced differently." }
      ] },
      { key: 'boss', name: 'Final Challenge: Mixed Grammar', pts: 100, how: 'Choose the correct sentence.', qs: [
        { t: 'choice', p: '', o: ['Ahmed graduated from university last year, and then he travelled to Spain to visit his old friends.', 'Ahmed graduated from university last year, and then he travel to Spain to visit his old friends.', 'Ahmed graduate from university last year, and then he travelled to Spain to visit his old friends.', 'Ahmed has graduated from university last year, and then he was travelling to Spain to visit his old friends.'], k: ['RG', 'US'], e: "With 'last year', both regular verbs need Past Simple: graduated and travelled." },
        { t: 'choice', p: '', o: ['She lost her keys in the garden, so she went back inside to look for a spare set.', 'She losed her keys in the garden, so she goed back inside to look for a spare set.', 'She lost her keys in the garden, so she goes back inside to look for a spare set.', 'She was lost her keys in the garden, so she was going back inside to look for a spare set.'], k: ['IR'], e: "'Lose' and 'go' are irregular: lost and went." }
      ] }
    ]
  };
})();
/* Page text and storage key (read by app.js). missionHtml and rulesHtml may use <b>; everything else is plain text.
   Keep storeKey unchanged, or saved attempts are lost. */
window.RS_COPY = {
  storeKey: 'levelup-2bac-u3-past-simple-q1-v1',
  heroKicker: 'LEVEL UP 2BAC · GRAMMAR · UNIT 3',
  heroTitle: 'PAST SIMPLE',
  heroQuiz: 'QUIZ 1',
  heroSub: 'The Past Simple Challenge · 20 points',
  missionHtml: 'The <b>Past Simple</b> tells us about a <b>finished action</b> at a <b>finished time</b>: yesterday, last week, three years ago. Regular verbs add <b>-ed</b>; irregular verbs have their own form (go → <b>went</b>). In questions and negatives, use <b>did + base verb</b>. Before you choose, ask: is the time <b>finished</b>?',
  formula: 'verb + -ed · irregular form · did + base verb',
  cats: ['➕ +ed', '🔁 stopped', '✏️ studied', '⚡ went', '❓ did + verb', '⏰ ago'],
  rulesHtml: [
    'Play the 6 games in order. You have <b>one try</b> for each question.',
    'There are <b>20 questions</b>, and each one is worth <b>1 point</b>.',
    'You see the correct answer and an explanation straight away, and you can review your mistakes at the end.'
  ],
  beforeBoss: 'Next: the Final Challenge.',
  fullMarks: '🏆 Achievement unlocked: Past Simple Champion! You travelled through every question without a mistake.'
};

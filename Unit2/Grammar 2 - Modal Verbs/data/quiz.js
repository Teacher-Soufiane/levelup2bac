/* Unit 2 · Grammar · Modal Verbs · Quiz 2 (out of 20). On the Unit 10 Grammar page (2026-11-19), like Unit 1.
   Points are in hundredths (100 = 1 point); the total must be 2000. Every item lists k = the skills it tests (RS_TAGS).
   In choice items the first option is the correct one; the app shuffles, and the right answer changes place on
   every new attempt. The teacher's 20 questions are kept word for word (levels 1–8 grouped into 6 games).
   Only change: in two items one wrong option was lengthened so the right answer is not always the longest. */
window.RS_TAGS = [
  ['AD', 'Meaning of the modal', 'advice: should / shouldn’t'],
  ['AB', 'Meaning of the modal', 'ability: could / couldn’t'],
  ['FU', 'Meaning of the modal', 'future and prediction: will / won’t'],
  ['RF', 'Meaning of the modal', 'refusal: won’t / wouldn’t'],
  ['DE', 'Meaning of the modal', 'deduction: can’t (have) = it is impossible'],
  ['FO', 'Form', 'modal + base verb (no “to”, no -ing, no -s)']
];

(function () {
  window.RS_QUIZ = {
    title: 'Modal Verbs · Quiz 2',
    games: [
      { key: 'form', name: 'Choose the Correct Modal', pts: 100, how: 'Choose the correct modal.', qs: [
        { t: 'choice', p: 'Rachida ______ miss her interview tomorrow because she needs the job to support her family.', o: ["shouldn't", "needn't", "wouldn't", "mustn't"], k: ['AD'], e: "'Shouldn't' expresses advice against doing something — here, advising her not to miss the important interview." },
        { t: 'choice', p: 'Rachid ______ go to his swimming classes because of the lockdown.', o: ["couldn't", "needn't", "wouldn't", "shouldn't"], k: ['AB'], e: "'Couldn't' expresses past inability — the lockdown made it impossible for him to go." },
        { t: 'choice', p: "It's very cold today. Do you think it ______ snow?", o: ['will', 'must', 'should', 'can'], k: ['FU'], e: "'Will' is used here to ask about a simple future prediction." },
        { t: 'choice', p: "Jessica ______ have seen me because she walked past without saying 'hello'.", o: ["can't", "won't", "shouldn't", "mightn't"], k: ['DE'], e: "'Can't have + past participle' expresses that something is logically impossible based on the evidence." },
        { t: 'choice', p: 'I asked my brother to lend me his bike, but he ______ agree, no matter how much I insisted.', o: ["wouldn't", "couldn't", "shouldn't", "mightn't"], k: ['RF'], e: "'Wouldn't' expresses a refusal — someone was simply unwilling to do something." },
        { t: 'choice', p: 'My little sister ______ eat any vegetables, no matter what I cook for her.', o: ["won't", "can't", "shouldn't", "mustn't"], k: ['RF'], e: "'Won't' expresses a refusal or stubborn unwillingness to do something." }
      ] },
      { key: 'function', name: 'Know the Function', pts: 100, how: 'What does this modal express?', qs: [
        { t: 'choice', p: "I'm sure he will pass the exam; he has worked so hard.", ask: 'What does "will" express in this sentence?', o: ['Certainty about the future', 'A polite request', 'An obligation', 'A habit that he had in the past'], k: ['FU'], e: "'Will' here expresses the speaker's confident prediction about a future event." },
        { t: 'choice', p: "She apologized because she couldn't attend the meeting yesterday.", ask: 'What does "couldn\'t" express in this sentence?', o: ['Past inability', 'Future possibility', 'Present permission', 'Strong obligation'], k: ['AB'], e: "'Couldn't' expresses an inability that existed in the past." },
        { t: 'choice', p: "He won't listen to any advice, no matter what we say.", ask: 'What does "won\'t" express in this sentence?', o: ['Refusal', 'Permission', 'Past habit', 'Necessity'], k: ['RF'], e: "'Won't' expresses a firm refusal to do something." }
      ] },
      { key: 'error', name: 'Spot and Correct the Error', pts: 100, how: 'Choose the correct sentence.', qs: [
        { t: 'choice', p: "❌ She shouldn't to worry about the results.", o: ["She shouldn't worry about the results.", "She shouldn't worrying about the results.", "She shouldn't worried about the results.", "She shouldn't to worrying about the results."], k: ['FO'], e: "A modal such as 'shouldn't' is followed directly by the base form of the verb, without 'to'." },
        { t: 'choice', p: "❌ They couldn't to finish the project on time.", o: ["They couldn't finish the project on time.", "They couldn't finishing the project on time.", "They couldn't finished the project on time.", "They couldn't to finishing the project on time."], k: ['FO'], e: "A modal such as 'couldn't' is followed directly by the base form of the verb, without 'to'." }
      ] },
      { key: 'meaning', name: 'Understand the Meaning', pts: 100, how: 'Choose the correct meaning.', qs: [
        { t: 'choice', p: "I've called him five times, but he won't answer.", ask: 'What does this sentence mean?', o: ['He refuses to answer.', 'He is simply unable to answer.', 'It is impossible for him to answer.', 'He forgot to answer.'], k: ['RF'], e: "'Won't' here expresses a stubborn refusal, not a simple inability." },
        { t: 'choice', p: "This can't be the right address; the number doesn't match.", ask: 'What does this sentence mean?', o: ['It is logically impossible for this to be correct.', 'It is forbidden to use this address.', 'The speaker is physically unable to find the address.', "The speaker doesn't remember the address."], k: ['DE'], e: "'Can't' here expresses strong certainty that something is NOT true, based on the evidence." },
        { t: 'choice', p: "I'm sorry, I couldn't hear you properly; the line was very bad.", ask: 'What does this sentence mean?', o: ['I was unable to hear because of poor conditions.', 'I refused to listen to you because I was very angry.', 'It is impossible that you called me.', 'I am not allowed to hear you.'], k: ['AB'], e: "'Couldn't' here expresses a past inability caused by external conditions (a bad phone line)." }
      ] },
      { key: 'context', name: 'Same Meaning & Context', pts: 100, how: 'Same meaning, or complete the context.', qs: [
        { t: 'choice', p: 'He refuses to apologize for what he did.', ask: 'Choose the sentence with the same meaning:', o: ["He won't apologize for what he did.", "He mustn't apologize for what he did.", "He shouldn't apologize for what he did.", "He can't apologize for what he did."], k: ['RF'], e: "'Refuse to do X' and 'won't do X' both express an unwillingness to do something." },
        { t: 'choice', p: 'It was impossible for us to reach the summit because of the storm.', ask: 'Choose the sentence with the same meaning:', o: ["We couldn't reach the summit because of the storm.", "We shouldn't reach the summit because of the storm.", "We wouldn't reach the summit because of the storm.", "We mightn't reach the summit because of the storm."], k: ['AB'], e: "'It was impossible for X to do Y' and 'X couldn't do Y' both express an inability in the past." },
        { t: 'choice', p: 'Karim just failed his driving test for the third time. He is very frustrated and says: "I just know I ______ pass this test — I always make a mistake!"', o: ["won't", "shouldn't", "mustn't", "needn't"], k: ['FU'], e: "'Won't' here expresses a firm, pessimistic prediction about the future, based on his past failures." },
        { t: 'choice', p: 'Drivers ______ speed near schools; children could suddenly run into the road.', o: ["shouldn't", "wouldn't", "needn't", "couldn't"], k: ['AD'], e: "'Shouldn't' gives strong advice against a dangerous behavior." }
      ] },
      { key: 'boss', name: 'Final Challenge: Mixed Modals', pts: 100, how: 'Choose the best sentence.', qs: [
        { t: 'choice', p: 'Yasmine invited her friend to the birthday party, but her friend has a bad cold and is not feeling well.', o: ["She couldn't come to the party because she shouldn't spread her cold to everyone.", "She couldn't to come to the party because she shouldn't to spread her cold to everyone.", "She could come to the party because she shouldn't spreading her cold to everyone.", "She couldn't coming to the party because she shouldn't spread her cold to everyone."], k: ['FO', 'AB', 'AD'], e: "'Couldn't' (inability) and 'shouldn't' (advice against) are both followed directly by the base form of the verb, without 'to' or '-ing'." },
        { t: 'choice', p: "The weather forecast predicts rain for tomorrow, but the coach doesn't plan to cancel practice because of a light shower.", o: ["The weather forecast says it will rain tomorrow, but the coach won't cancel practice because of a light shower.", "The weather forecast says it will raining tomorrow, but the coach won't to cancel practice because of a light shower.", "The weather forecast says it will to rain tomorrow, but the coach won't cancelling practice because of a light shower.", "The weather forecast says it will rains tomorrow, but the coach won't cancels practice because of a light shower."], k: ['FO', 'FU'], e: "Both 'will' and 'won't' are followed directly by the base form of the verb: 'will rain', 'won't cancel'." }
      ] }
    ]
  };
})();
/* Page text and storage key (read by app.js). missionHtml and rulesHtml may use <b>; everything else is plain text.
   Keep storeKey unchanged, or saved attempts are lost. */
window.RS_COPY = {
  storeKey: 'levelup-2bac-u2-modal-verbs-q2-v1',
  heroKicker: 'LEVEL UP 2BAC · GRAMMAR · UNIT 2',
  heroTitle: 'MODAL VERBS',
  heroQuiz: 'QUIZ 2',
  heroSub: 'The Modal Verbs Challenge · 20 points',
  missionHtml: 'Negative modals change the meaning of a sentence: <b>shouldn’t</b> (advice against), <b>couldn’t</b> (past inability), <b>won’t / wouldn’t</b> (refusal) and <b>can’t</b> (it is impossible). Every modal is followed by the <b>base form</b> of the verb. Before you choose, ask: what does the speaker <b>mean</b>?',
  formula: 'modal + base verb · no “to” · no -ing · no -s',
  cats: ['💡 shouldn’t', '💪 couldn’t', '🔮 will', '🙅 won’t', '✋ wouldn’t', '❌ can’t be'],
  rulesHtml: [
    'Play the 6 games in order. You have <b>one try</b> for each question.',
    'There are <b>20 questions</b>, and each one is worth <b>1 point</b>.',
    'You see the correct answer and an explanation straight away, and you can review your mistakes at the end.'
  ],
  beforeBoss: 'Next: the Final Challenge.',
  fullMarks: '🏆 Achievement unlocked: Modal Verbs Champion! You won’t have any problem with modals in the national exam.'
};

/* Unit 5 · Grammar · The Passive Voice · Quiz 1 (out of 20). On the Unit 10 Grammar page (2026-11-19), like Units 1–4.
   Points are in hundredths (100 = 1 point); the total must be 2000. Every item lists k = the skills it tests (RS_TAGS).
   In choice items the first option is the correct one; the app shuffles, and the right answer changes place on
   every new attempt. The teacher's 20 questions are kept word for word (levels 1–8 grouped into 6 games).
   Only change: in five items the right answer was the only longest option, so one wrong option was lengthened
   (it stays wrong): "were interviewing", "has being widened", "have being installed", "have being selected",
   "have not being submitted". The teacher teaches "by + subject (the doer)", never "agent" (2026-11-19). */
window.RS_TAGS = [
  ['FO', 'Form', 'be + past participle (the subject receives the action)'],
  ['TE', 'Tense', 'keep the tense: is / was / is being / was being / has been / had been'],
  ['MO', 'Tense', 'future and modal passive: will / should / must + be + past participle'],
  ['PP', 'Form', 'past participles: sent, stolen, built'],
  ['AG', 'Use', 'the doer: by + subject (the doer), or no doer when it is unknown']
];

(function () {
  window.RS_QUIZ = {
    title: 'The Passive Voice · Quiz 1',
    games: [
      { key: 'spot', name: 'Spot & Build the Passive', pts: 100, how: 'Spot or complete the passive.', qs: [
        { t: 'choice', p: '', ask: 'Which sentence is written in the passive voice?', o: ['The school library was opened last Monday.', 'The school library opened last Monday.', 'The school library has open last Monday.', 'The school library was opening last Monday.'], k: ['FO'], e: '“The school library was opened” uses was + past participle: the library receives the action.' },
        { t: 'choice', p: '', ask: 'Which sentence correctly uses the passive voice?', o: ['The candidates were interviewed online.', 'The candidates were interviewing online.', 'The candidates was interviewed online.', 'The candidates were interview online.'], k: ['FO'], e: 'A plural subject takes “were” + past participle: “were interviewed”.' },
        { t: 'choice', p: 'Stories ______ by online newspapers to influence the public.', o: ['are invented', 'invent', 'are inventing', 'is invented'], k: ['FO', 'TE'], e: '“Stories” is plural, so the present simple passive is “are invented”.' },
        { t: 'choice', p: 'A survey ______ about the needs of young people last week.', o: ['was conducted', 'has conducted', 'were conducted', 'is being conducted'], k: ['TE'], e: '“Last week” signals the past simple, so: “was conducted” (singular subject).' },
        { t: 'choice', p: 'The road ______ at the moment, so drivers must use another route.', o: ['is being widened', 'is widened', 'has widened', 'has being widened'], k: ['TE'], e: '“At the moment” needs the present continuous passive: “is being widened”.' }
      ] },
      { key: 'trap', name: 'Past Participle Trap Hunt', pts: 100, how: 'Choose the correct passive form.', qs: [
        { t: 'choice', p: 'At 8 p.m. yesterday, the stage ______ for the ceremony.', o: ['was being decorated', 'was decorated', 'were being decorated', 'had being decorated'], k: ['TE'], e: 'A past action in progress at 8 p.m. needs the past continuous passive: “was being decorated”.' },
        { t: 'choice', p: 'Surveillance cameras ______ in many schools already.', o: ['have been installed', 'have installed', 'has been installed', 'have being installed'], k: ['TE'], e: 'Present perfect passive with a plural subject: “have been installed”.' },
        { t: 'choice', p: 'By the time the guests arrived, the room ______.', o: ['had been prepared', 'has been prepared', 'was preparing', 'had prepared'], k: ['TE'], e: '“By the time” + an earlier past action needs the past perfect passive: “had been prepared”.' }
      ] },
      { key: 'modal', name: 'Future and Modal Passive', pts: 100, how: 'Choose the correct passive form.', qs: [
        { t: 'choice', p: 'More stadiums ______ for the 2030 World Cup.', o: ['will be built', 'will build', 'are built', 'will been built'], k: ['MO'], e: 'Future passive = will + be + past participle: “will be built”.' },
        { t: 'choice', p: 'To protect the environment, bags ______ instead of single-use plastic bags.', o: ['should be reused', 'should reuse', 'should been reused', 'are should reused'], k: ['MO'], e: 'Modal passive = modal + be + past participle: “should be reused”.' }
      ] },
      { key: 'transform', name: 'Active-to-Passive Transformer', pts: 100, how: 'Choose the correct passive transformation.', qs: [
        { t: 'choice', p: 'The storm destroyed several houses last night.', ask: 'Choose the correct passive form.', o: ['Several houses were destroyed by the storm last night.', 'Several houses destroyed by the storm last night.', 'Several houses have destroyed by the storm last night.', 'Several houses were destroying by the storm last night.'], k: ['TE', 'AG'], e: 'Past simple passive with a plural subject: “were destroyed”.' },
        { t: 'choice', p: 'The computer company launched a new website in 2025.', ask: 'Choose the correct passive form.', o: ['A new website was launched by the computer company in 2025.', 'A new website launched by the computer company in 2025.', 'A new website was launching by the computer company in 2025.', 'A new website has launch by the computer company in 2025.'], k: ['TE', 'AG'], e: 'Past simple passive with a singular subject: “was launched”.' },
        { t: 'choice', p: 'The jury has selected all the finalists.', ask: 'Choose the correct passive form.', o: ['All the finalists have been selected by the jury.', 'All the finalists have being selected by the jury.', 'All the finalists were selected by the jury.', 'All the finalists have been select by the jury.'], k: ['TE', 'AG'], e: 'Present perfect passive with a plural subject: “have been selected”.' }
      ] },
      { key: 'correct', name: 'Future, Errors & the Doer', pts: 100, how: 'Choose the correct answer.', qs: [
        { t: 'choice', p: 'The school will publish the results tomorrow.', ask: 'Choose the correct passive form.', o: ['The results will be published tomorrow.', 'The results will publish tomorrow.', 'The results are published tomorrow.', 'The results will been published tomorrow.'], k: ['MO'], e: 'Future passive = will + be + past participle: “will be published”.' },
        { t: 'choice', p: '❌ The invitations were send yesterday.', ask: 'Find the correct correction of this sentence:', o: ['The invitations were sent yesterday.', 'The invitations was sent yesterday.', 'The invitations were sended yesterday.', 'The invitations are sent yesterday.'], k: ['PP'], e: 'The past participle of “send” is irregular: “sent”. So: “were sent”.' },
        { t: 'choice', p: 'The mechanic is repairing the computer now.', ask: 'Which passive sentence keeps the same tense?', o: ['The computer is being repaired now.', 'The computer is repaired now.', 'The computer was being repaired now.', 'The computer has been repairing now.'], k: ['TE'], e: 'Present continuous passive: “is being repaired”.' },
        { t: 'choice', p: 'An e-commerce platform was developed by the company.', ask: 'In this sentence, who performed the action?', o: ['The company', 'The e-commerce platform', 'The customers', 'The sentence does not identify the doer.'], k: ['AG'], e: 'The doer follows “by”: “by the company”.' }
      ] },
      { key: 'boss', name: 'BAC Final Boss', pts: 100, how: 'Choose the correct answer.', qs: [
        { t: 'choice', p: 'Someone stole my bicycle last night.', ask: 'Choose the best passive transformation without naming the unknown doer.', o: ['My bicycle was stolen last night.', 'My bicycle stole last night.', 'My bicycle has stolen last night.', 'My bicycle was steal last night.'], k: ['PP', 'AG'], e: 'Past simple passive: “was stolen”. The unknown doer (“someone”) is dropped.' },
        { t: 'choice', p: 'The final reports ______ yet, so the director cannot review them.', o: ['have not been submitted', 'have not being submitted', 'were not submitted yet', 'have not been submit'], k: ['TE'], e: 'Negative present perfect passive: “have not been submitted”.' },
        { t: 'choice', p: 'The new policy ______ after a long discussion yesterday.', o: ['was approved', 'has approved', 'approved by the committee', 'was approve'], k: ['TE'], e: 'Past simple passive with “yesterday”: “was approved”.' }
      ] }
    ]
  };
})();
/* Page text and storage key (read by app.js). missionHtml and rulesHtml may use <b>; everything else is plain text.
   Keep storeKey unchanged, or saved attempts are lost. */
window.RS_COPY = {
  storeKey: 'levelup-2bac-u5-passive-voice-q1-v1',
  heroKicker: 'LEVEL UP 2BAC · GRAMMAR · UNIT 5',
  heroTitle: 'THE PASSIVE VOICE',
  heroQuiz: 'QUIZ 1',
  heroSub: 'The Passive Voice Challenge · 20 points',
  missionHtml: 'In the <b>passive voice</b> the subject <b>receives</b> the action: the library <b>was opened</b>. Use <b>be + past participle</b>, and keep the tense of the active sentence: is, was, is being, has been, had been, will be. The doer comes after <b>by</b>, or is dropped when it is unknown. Before you choose, ask: <b>which tense, and which past participle?</b>',
  formula: 'be + past participle (+ by + subject (the doer))',
  cats: ['🔁 be + V3', '⏳ is being', '✅ has been', '🔮 will be', '📮 sent · stolen', '👤 by + subject'],
  rulesHtml: [
    'Play the 6 games in order. You have <b>one try</b> for each question.',
    'There are <b>20 questions</b>, and each one is worth <b>1 point</b>.',
    'You see the correct answer and an explanation straight away, and you can review your mistakes at the end.'
  ],
  beforeBoss: 'Next: the BAC Final Boss.',
  fullMarks: '🏆 Achievement unlocked: Passive Voice Champion! Every question was answered correctly.'
};

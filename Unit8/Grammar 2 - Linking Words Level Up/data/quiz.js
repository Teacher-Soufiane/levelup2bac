/* Unit 8 · Grammar · Linking Words · Quiz 2 (out of 20). "Linking Words: Level Up!"
   Same six functions as Quiz 1, separate question bank: new, less familiar linkers, longer statements, new formats
   (function detective, function sort, wrong-linker hunt). The only Quiz 1 linker used as a key is "as", in the teacher's own sample item.
   2026-11-19: moved to the Unit 10 page (shared engine). The teacher's items and keys are kept; the boss is now
   interactive (typed gaps → short drop-down lists, the "which is why" rewrite → sentence builder, two items added so the
   boss stays at 3 points with max 1 point per item). "What Comes Next?" (+ noun / + clause / sentence start) became a
   six-box sort BY MEANING: the teacher never sorts by grammar pattern.
   Points are in hundredths (25 = 0.25 point). Every item lists k = the skills it tests (RS_TAGS).
   In choice and err items the first option is the correct one; the app shuffles. */
window.RS_TAGS = [
  ['RE', 'The six functions', 'Giving reasons: owing to / on account of / in view of + noun; given that / seeing that / now that + clause'],
  ['EX', 'The six functions', 'Giving examples: notably, including, to illustrate'],
  ['AD', 'The six functions', 'Adding information: what is more, additionally, on top of that, in addition to / apart from / as well as + noun'],
  ['XP', 'The six functions', 'Explaining: that is, namely, to put it simply, which means that'],
  ['EF', 'The six functions', 'Expressing effect: hence, accordingly, for this reason, which is why'],
  ['SU', 'The six functions', 'Summarising: all in all, on the whole, in a nutshell, to conclude'],
  ['GP', 'Grammar patterns', 'patterns: linker + noun vs linker + subject + verb vs linker at the start of a sentence']
];

(function () {
  function G() { return { a: [].slice.call(arguments) }; }   /* a word-bank gap and its answer */
  function L(o) { return { a: [o[0]], o: o.slice() }; }      /* a boss gap: its own short list, o[0] is right */
  function X(t) { return { t: t, x: 1 }; }                   /* the wrong linker in Spot the Wrong Linker */

  window.RS_QUIZ = {
    title: 'Linking Words · Quiz 2',
    games: [
      { key: 'detect', name: 'Function Detective', pts: 50, how: 'What does it introduce?', qs: [
        { t: 'choice', p: 'Rain has been scarce in the south of Morocco for years; hence, many farmers now use drip irrigation.', ask: '“hence” introduces …', o: ['a result', 'a reason', 'extra information', 'a summary'], k: ['EF'], e: 'Drip irrigation is the result of the lack of rain → hence = therefore, for this reason.' },
        { t: 'choice', p: 'Several Moroccan cities, notably Rabat and Marrakech, have introduced electric buses.', ask: '“notably” introduces …', o: ['an example', 'extra information', 'a result', 'a reason'], k: ['EX'], e: 'Rabat and Marrakech are examples of those cities → notably = especially, for example.' },
        { t: 'choice', p: 'Many young doctors leave Morocco on account of the low salaries and long working hours.', ask: '“on account of” introduces …', o: ['a reason', 'a result', 'an example', 'an explanation'], k: ['RE', 'GP'], e: 'Low salaries are why doctors leave → on account of = because of, + a noun phrase.' },
        { t: 'choice', p: 'The report focuses on two problems in rural areas, namely school dropout and the lack of clean water.', ask: '“namely” introduces …', o: ['an explanation', 'extra information', 'a result', 'a reason'], k: ['XP'], e: '“namely” says exactly which two problems the writer means: it clarifies what came before (= that is).' },
        { t: 'choice', p: 'Volunteering looks good on your CV. What is more, it gives you a real sense of purpose.', ask: '“What is more” introduces …', o: ['extra information', 'a result of the first idea', 'a summary', 'an example'], k: ['AD'], e: 'A second, different benefit is added → What is more = moreover, additionally.' },
        { t: 'choice', p: 'Some of the students’ ideas were unrealistic, but most were creative and useful. On the whole, the debate was a great success.', ask: '“On the whole” introduces …', o: ['a summary', 'extra information', 'a reason', 'an example'], k: ['SU'], e: 'On the whole = all in all: a general conclusion about everything said before.' }
      ] },
      { key: 'choose', name: 'Choose the Best Linker', pts: 50, how: 'Choose the best linker.', qs: [
        { t: 'choice', p: 'The school decided to organise extra English lessons, ____ many students were struggling with writing.', o: ['as', 'hence', 'overall', 'likewise'], k: ['RE', 'GP'], e: 'Students struggling is the reason for the lessons → as + subject + verb (= because). “hence” would introduce a result.' },
        { t: 'choice', p: 'The national exam is only a few weeks away. ____, students should revise a little every day instead of cramming the night before.', o: ['Accordingly', 'Likewise', 'Namely', 'On account of'], k: ['EF'], e: 'Revising every day is the logical consequence of the exam being close → Accordingly (= for this reason, therefore).' },
        { t: 'choice', p: 'Many Moroccan dishes, ____ couscous, tagine and pastilla, are now famous all over the world.', o: ['including', 'to illustrate', 'hence', 'in brief'], k: ['EX', 'GP'], e: 'including + nouns gives examples inside the sentence. “To illustrate,” starts a new sentence.' },
        { t: 'choice', p: '____ the rise in fuel prices, many families have started using public transport.', o: ['In view of', 'Given that', 'Seeing that', 'Hence'], k: ['RE', 'GP'], e: '“the rise in fuel prices” is a noun phrase → In view of (+ noun). Given that / Seeing that need subject + verb: Given that prices have risen…' },
        { t: 'choice', p: '____ more women hold top jobs in Morocco, girls have more role models to follow.', o: ['Now that', 'On account of', 'Apart from', 'Notably'], k: ['RE', 'GP'], e: 'Now that + subject + verb gives a reason that is new: because, today, more women hold top jobs.' },
        { t: 'choice', p: 'The trip to Chefchaouen was cancelled because of the storm, ____ the students were very disappointed.', o: ['which is why', 'namely', 'in addition to', 'to illustrate'], k: ['EF', 'GP'], e: 'The disappointment is the result of the cancelled trip → which is why + subject + verb.' },
        { t: 'choice', p: 'Learning a second language improves your memory. ____, it makes it easier to travel and meet new people.', o: ['On top of that', 'To put it simply', 'Hence', 'In a nutshell'], k: ['AD'], e: 'A second, different advantage is added → On top of that (= what is more, additionally).' },
        { t: 'choice', p: 'Brain drain is the emigration of highly qualified people. ____, it is when a country’s best minds leave to work abroad.', o: ['To put it simply', 'On top of that', 'Accordingly', 'In spite of all this'], k: ['XP'], e: 'The second sentence says the same thing in easier words → To put it simply (= in other words).' }
      ] },
      { key: 'sort', name: 'Sort by Function', pts: 25, per: 'linker', bucket: true, how: 'Tap a linker, then a box.',
        cats: ['Reasons', 'Examples', 'Addition', 'Explanation', 'Effect', 'Summary'], qs: [
        { t: 'sort', round: 'Round 1 of 3', cards: [['owing to', 0, 'RE'], ['to illustrate', 1, 'EX'], ['namely', 3, 'XP'], ['accordingly', 4, 'EF']] },
        { t: 'sort', round: 'Round 2 of 3', cards: [['given that', 0, 'RE'], ['what is more', 2, 'AD'], ['which is why', 4, 'EF'], ['in a nutshell', 5, 'SU']] },
        { t: 'sort', round: 'Round 3 of 3', cards: [['including', 1, 'EX'], ['in addition to', 2, 'AD'], ['which means that', 3, 'XP'], ['on the whole', 5, 'SU']] }
      ] },
      { key: 'spot', name: 'Spot the Wrong Linker', pts: 50, how: 'Tap the wrong linker.',
        found: 'You found the wrong linker', step2: 'choose the corrected sentence.', wordsAre: 'the wrong linker was', qs: [
        { t: 'err', fr: 'Find the wrong linker:', w: ['Girls', 'in', 'some', 'villages', 'leave', 'school', 'early', X('given that'), 'the', 'long', 'distance', '.'],
          o: ['Girls in some villages leave school early owing to the long distance.', 'Girls in some villages leave school early hence the long distance.', 'Girls in some villages leave school early seeing that the long distance.'], k: ['RE', 'GP'], e: '“the long distance” is a noun phrase → owing to (on account of). given that needs subject + verb: given that the school is far.' },
        { t: 'err', fr: 'Find the wrong linker:', w: ['The', 'museum', 'was', 'closed', 'for', 'repairs', '.', X('Notably'), ',', 'we', 'visited', 'the', 'medina', '.'],
          o: ['The museum was closed for repairs. For this reason, we visited the medina.', 'The museum was closed for repairs. Including, we visited the medina.', 'The museum was closed for repairs. In a nutshell, we visited the medina.'], k: ['EF'], e: 'Visiting the medina is the result → For this reason (accordingly). notably gives an example.' },
        { t: 'err', fr: 'Find the wrong linker:', w: ['Some', 'jobs', ',', X('accordingly'), 'nursing', 'and', 'teaching', ',', 'are', 'still', 'badly', 'paid', '.'],
          o: ['Some jobs, notably nursing and teaching, are still badly paid.', 'Some jobs, which is why nursing and teaching, are still badly paid.', 'Some jobs, in a nutshell nursing and teaching, are still badly paid.'], k: ['EX'], e: 'Nursing and teaching are examples of those jobs → notably (including). accordingly introduces a result.' },
        { t: 'err', fr: 'Find the wrong linker:', w: ['Recycling', 'saves', 'energy', '.', X('Hence'), ',', 'it', 'keeps', 'our', 'streets', 'cleaner', '.'],
          o: ['Recycling saves energy. Additionally, it keeps our streets cleaner.', 'Recycling saves energy. Namely, it keeps our streets cleaner.', 'Recycling saves energy. Owing to, it keeps our streets cleaner.'], k: ['AD'], e: 'Cleaner streets are a second benefit, not a result of saving energy → Additionally (what is more).' },
        { t: 'err', fr: 'Find the wrong linker:', w: ['Ahmed', 'is', 'a', 'polyglot', '.', X('As well as'), ',', 'he', 'speaks', 'five', 'languages', '.'],
          o: ['Ahmed is a polyglot. Put simply, he speaks five languages.', 'Ahmed is a polyglot. Apart from, he speaks five languages.', 'Ahmed is a polyglot. On account of, he speaks five languages.'], k: ['XP', 'GP'], e: 'The second sentence explains the word “polyglot” → Put simply (to put it simply, that is). as well as needs a noun after it.' },
        { t: 'err', fr: 'Find the wrong linker:', w: ['The', 'film', 'was', 'slow', ',', 'but', 'the', 'acting', 'was', 'great', '.', X('Apart from'), ',', 'it', 'was', 'worth', 'seeing', '.'],
          o: ['The film was slow, but the acting was great. All in all, it was worth seeing.', 'The film was slow, but the acting was great. Likewise, it was worth seeing.', 'The film was slow, but the acting was great. Seeing that, it was worth seeing.'], k: ['SU'], e: 'The last sentence gives a general judgement of everything before → All in all (on the whole).' }
      ] },
      { key: 'para', name: 'Paragraph Linker Challenge', pts: 20, how: 'Pick a linker per gap.', qs: [
        { t: 'gapt', round: 'Brain drain', bank: ['owing to', 'notably', 'Hence', 'On the whole', 'given that', 'Likewise'],
          s: ['Every year, thousands of Moroccan graduates move abroad ', G('owing to'), ' the lack of well-paid jobs at home. Some professions, ', G('notably'), ' medicine and engineering, are badly affected. ', G('Hence'), ', some hospitals do not have enough doctors. ', G('On the whole'), ', brain drain has some benefits, but its costs for Morocco are much greater.'],
          k: ['RE', 'EX', 'EF', 'SU', 'GP'], e: 'owing to + noun · notably = examples · Hence = result · On the whole sums up.' },
        { t: 'gapt', round: 'Women and power', bank: ['Now that', 'including', 'What is more', 'which means that', 'On account of', 'Hence'],
          s: [G('Now that'), ' more Moroccan women go to university, they hold important jobs in many fields, ', G('including'), ' politics, business and science. ', G('What is more'), ', the 2004 Family Code gave women more rights. Many women now run their own companies, ', G('which means that'), ' they are financially independent.'],
          k: ['RE', 'EX', 'AD', 'XP', 'GP'], e: 'Now that + clause · including + nouns · What is more adds · which means that explains.' },
        { t: 'gapt', round: 'Sustainable development', bank: ['In view of', 'To illustrate', 'Additionally', 'which is why', 'Seeing that', 'In a nutshell'],
          s: [G('In view of'), ' the long periods of drought, water has become a precious resource in Morocco. ', G('To illustrate'), ', some dams have been almost empty in recent years. ', G('Additionally'), ', the population of big cities keeps growing, ', G('which is why'), ' the country is building plants to turn sea water into drinking water.'],
          k: ['RE', 'EX', 'AD', 'EF', 'GP'], e: 'In view of + noun · To illustrate = example · Additionally adds · which is why = result.' },
        { t: 'gapt', round: 'Citizenship', bank: ['that is', 'Given that', 'Accordingly', 'in addition to', 'owing to', 'notably'],
          s: ['A good citizen respects the law and takes part in community life, ', G('that is'), ', they act for the good of everyone. ', G('Given that'), ' many young people feel ignored by politicians, few of them vote. ', G('Accordingly'), ', schools now organise civic education clubs. Students take part in debates ', G('in addition to'), ' local clean-up campaigns.'],
          k: ['XP', 'RE', 'EF', 'AD', 'GP'], e: 'that is explains · Given that + clause · Accordingly = result · in addition to + noun.' },
        { t: 'gapt', round: 'Cultural heritage', bank: ['seeing that', 'notably', 'as well as', 'To conclude', 'on account of', 'Otherwise'],
          s: ['Tourists love Morocco ', G('seeing that'), ' it offers a rich mix of cultures. Its traditional crafts, ', G('notably'), ' pottery and carpets, are sold all over the world. Visitors enjoy the food ', G('as well as'), ' the music of festivals in Fes and Essaouira. ', G('To conclude'), ', our heritage is a treasure that we must protect.'],
          k: ['RE', 'EX', 'AD', 'SU', 'GP'], e: 'seeing that + clause · notably = examples · as well as + noun · To conclude ends it.' }
      ] },
      { key: 'boss', name: 'Linking Words Boss Challenge', pts: 25, how: 'The final challenge.', qs: [
        { t: 'choice', round: 'Same meaning', p: 'Which linker means the same as “consequently”?', o: ['accordingly', 'additionally', 'notably', 'namely'], k: ['EF'], e: 'consequently = accordingly = for this reason: both introduce a result.' },
        { t: 'choice', round: 'Clarifying', p: 'You want to say the same idea again in easier words. Which linker do you use?', o: ['to put it simply', 'on top of that', 'on the whole', 'in view of'], k: ['XP'], e: 'to put it simply (in other words, that is) restates an idea more clearly.' },
        { t: 'choice', round: 'Summarising', p: 'You want to sum up all the ideas before. Which linker do you use?', o: ['in a nutshell', 'in addition to', 'namely', 'including'], k: ['SU'], e: 'in a nutshell (all in all, on the whole) sums up everything said before.' },
        { t: 'gapt', round: 'Gap fill', s: ['Hamza applied for a scholarship abroad ', L(['given that', 'owing to', 'to illustrate']), ' his family could not pay for university.'], k: ['RE', 'GP'], e: '“his family could not pay” is subject + verb → given that / seeing that / since (not “owing to”, which needs a noun).' },
        { t: 'build', round: 'Combine · use “which is why”', d: 'Fast food is cheap and quick. + Many teenagers eat it every day.', key: ['Fast food is cheap and quick,', 'which is why', 'many teenagers', 'eat it every day'], extra: ['on account of'], k: ['EF', 'GP'], e: 'Eating it every day is the result → , which is why + subject + verb: Fast food is cheap and quick, which is why many teenagers eat it every day.' },
        { t: 'build', round: 'Combine · use “Hence”', d: 'The bus drivers went on strike. + Many students were late for school.', key: ['The bus drivers went on strike.', 'Hence,', 'many students were late', 'for school'], extra: ['Namely,'], k: ['EF'], e: 'Being late is the result of the strike → Hence, + the result.' },
        { t: 'gapt', round: 'Error correction', d: 'Owing to the price of fuel went up, many people sold their cars. Notably, the streets are less crowded.',
          s: [L(['Given that', 'Owing to', 'To illustrate']), ' the price of fuel went up, many people sold their cars. ', L(['Hence', 'Notably', 'Namely']), ', the streets are less crowded.'], k: ['RE', 'EF', 'GP'], e: '“the price of fuel went up” is a clause → Given that (not Owing to). Less crowded streets are a result → Hence (Notably only gives examples).' },
        { t: 'gapt', round: 'Paragraph · 4 linkers', s: ['Teenagers spend hours online. ', L(['To illustrate', 'Hence', 'In a nutshell']), ', some check their phones before they get up. Social media keeps them in touch with friends. ', L(['What is more', 'To illustrate', 'Namely']), ', it gives them access to news. But too much screen time harms sleep ', L(['as well as', 'owing to', 'which is why']), ' concentration. ', L(['All in all', 'Notably', 'Given that']), ', social media is useful in moderation.'],
          k: ['EX', 'AD', 'SU', 'GP'], e: 'example · another benefit · as well as + noun · summary.' }
      ] }
    ]
  };
})();

window.RS_COPY = {
  storeKey: 'levelup-2bac-u8-linking-words-q2-v2',
  heroKicker: 'LEVEL UP 2BAC · GRAMMAR · UNIT 8',
  heroTitle: 'LINKING WORDS',
  heroQuiz: 'QUIZ 2',
  heroSub: 'Linking Words: Level Up! · 20 points',
  missionHtml: 'Same six functions, <b>new linkers</b> and longer statements. Read the whole sentence first, then ask: is the next idea a <b>reason</b>, an <b>example</b>, an <b>extra idea</b>, an <b>explanation</b>, a <b>result</b> or a <b>summary</b>?',
  formula: 'idea 1 + linker + idea 2',
  cats: ['❓ Reasons', '🔎 Examples', '➕ Addition', '💡 Explaining', '➡️ Effect', '📝 Summary'],
  rulesHtml: [
    'Play the 6 games in order. You have <b>one try</b> for each question.',
    'Games 1–5 prepare you for game 6, the <b>Boss Challenge</b>, which mixes every kind of question.',
    'You see the correct answer and an explanation straight away, and you can review your mistakes at the end.'
  ],
  beforeBoss: 'Next: the Boss Challenge.',
  fullMarks: '🏆 Perfect! You have levelled up: you can use less common linkers with confidence in your national-exam writing.'
};

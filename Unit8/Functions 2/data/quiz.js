/* Unit 8 · Grammar · Linking Words · Quiz 2 (out of 20). "Linking Words: Level Up!"
   Same six functions as Quiz 1, separate question bank: new, less familiar linkers, longer statements, new formats
   (function detective, grammar sort, wrong-linker hunt). The only Quiz 1 linker used as a key is "as", in the teacher's own sample item.
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
  function G() { return { a: [].slice.call(arguments) }; }   /* a gap and its accepted answers (the first is shown as the correction) */
  function X(t) { return { t: t, x: 1 }; }                   /* the wrong linker in Spot the Wrong Linker */

  window.RS_QUIZ = {
    title: 'Linking Words · Quiz 2',
    games: [
      { key: 'detect', name: 'Function Detective', pts: 50, how: 'What does the linker introduce?', qs: [
        { t: 'choice', p: 'Rain has been scarce in the south of Morocco for years; hence, many farmers now use drip irrigation.', ask: '“hence” introduces …', o: ['a result', 'a reason', 'extra information', 'a summary'], k: ['EF'], e: 'Drip irrigation is the result of the lack of rain → hence = therefore, for this reason.' },
        { t: 'choice', p: 'Several Moroccan cities, notably Rabat and Marrakech, have introduced electric buses.', ask: '“notably” introduces …', o: ['an example', 'a summary', 'a result', 'a reason'], k: ['EX'], e: 'Rabat and Marrakech are examples of those cities → notably = especially, for example.' },
        { t: 'choice', p: 'Many young doctors leave Morocco on account of the low salaries and long working hours.', ask: '“on account of” introduces …', o: ['a reason', 'a result', 'an example', 'an explanation'], k: ['RE', 'GP'], e: 'Low salaries are why doctors leave → on account of = because of, + a noun phrase.' },
        { t: 'choice', p: 'The report focuses on two problems in rural areas, namely school dropout and the lack of clean water.', ask: '“namely” introduces …', o: ['an explanation', 'extra information', 'a result', 'a reason'], k: ['XP'], e: '“namely” says exactly which two problems the writer means: it clarifies what came before (= that is).' },
        { t: 'choice', p: 'Volunteering looks good on your CV. What is more, it gives you a real sense of purpose.', ask: '“What is more” introduces …', o: ['extra information', 'a summary', 'a result', 'an example'], k: ['AD'], e: 'A second, different benefit is added → What is more = moreover, additionally.' },
        { t: 'choice', p: 'Some of the students’ ideas were unrealistic, but most were creative and useful. On the whole, the debate was a great success.', ask: '“On the whole” introduces …', o: ['a summary', 'extra information', 'a reason', 'an example'], k: ['SU'], e: 'On the whole = all in all: a general conclusion about everything said before.' }
      ] },
      { key: 'choose', name: 'Choose the Best Linker', pts: 50, how: 'Read the whole sentence. Choose the best linker.', qs: [
        { t: 'choice', p: 'The school decided to organise extra English lessons, ____ many students were struggling with writing.', o: ['as', 'hence', 'overall', 'likewise'], k: ['RE', 'GP'], e: 'Students struggling is the reason for the lessons → as + subject + verb (= because). “hence” would introduce a result.' },
        { t: 'choice', p: 'The national exam is only a few weeks away. ____, students should revise a little every day instead of cramming the night before.', o: ['Accordingly', 'Likewise', 'Namely', 'On account of'], k: ['EF'], e: 'Revising every day is the logical consequence of the exam being close → Accordingly (= for this reason, therefore).' },
        { t: 'choice', p: 'Many Moroccan dishes, ____ couscous, tagine and pastilla, are now famous all over the world.', o: ['including', 'to illustrate', 'hence', 'in brief'], k: ['EX', 'GP'], e: 'including + nouns gives examples inside the sentence. “To illustrate,” starts a new sentence.' },
        { t: 'choice', p: '____ the rise in fuel prices, many families have started using public transport.', o: ['In view of', 'Given that', 'Seeing that', 'Hence'], k: ['RE', 'GP'], e: '“the rise in fuel prices” is a noun phrase → In view of (+ noun). Given that / Seeing that need subject + verb: Given that prices have risen…' },
        { t: 'choice', p: '____ more women hold top jobs in Morocco, girls have more role models to follow.', o: ['Now that', 'On account of', 'Apart from', 'Notably'], k: ['RE', 'GP'], e: 'Now that + subject + verb gives a reason that is new: because, today, more women hold top jobs.' },
        { t: 'choice', p: 'The trip to Chefchaouen was cancelled because of the storm, ____ the students were very disappointed.', o: ['which is why', 'namely', 'in addition to', 'to illustrate'], k: ['EF', 'GP'], e: 'The disappointment is the result of the cancelled trip → which is why + subject + verb.' },
        { t: 'choice', p: 'Learning a second language improves your memory. ____, it makes it easier to travel and meet new people.', o: ['On top of that', 'To put it simply', 'Hence', 'In a nutshell'], k: ['AD'], e: 'A second, different advantage is added → On top of that (= what is more, additionally).' },
        { t: 'choice', p: 'Brain drain is the emigration of highly qualified people. ____, it is when a country’s best minds leave to work abroad.', o: ['To put it simply', 'On top of that', 'Accordingly', 'Otherwise'], k: ['XP'], e: 'The second sentence says the same thing in easier words → To put it simply (= in other words).' }
      ] },
      { key: 'sort', name: 'What Comes Next?', pts: 25, how: 'What comes after each linker?',
        cats: ['+ noun', '+ clause', 'Sentence start'], tip: 'Clause = subject + verb. Sentence start = Linker, + a new sentence.', qs: [
        { t: 'sort', round: 'Round 1 of 4', cards: [['owing to', 0, 'RE'], ['given that', 1, 'RE'], ['accordingly', 2, 'EF']] },
        { t: 'sort', round: 'Round 2 of 4', cards: [['on account of', 0, 'RE'], ['seeing that', 1, 'RE'], ['what is more', 2, 'AD']] },
        { t: 'sort', round: 'Round 3 of 4', cards: [['in addition to', 0, 'AD'], ['which means that', 1, 'XP'], ['in a nutshell', 2, 'SU']] },
        { t: 'sort', round: 'Round 4 of 4', cards: [['apart from', 0, 'AD'], ['which is why', 1, 'EF'], ['to put it simply', 2, 'XP']] }
      ] },
      { key: 'spot', name: 'Spot the Wrong Linker', pts: 50, how: 'Tap the wrong linker. Then choose the correction.', qs: [
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
      { key: 'para', name: 'Paragraph Linker Challenge', pts: 20, how: 'Choose a linker for each gap.', qs: [
        { t: 'gapt', round: 'Brain drain', bank: ['owing to', 'notably', 'Hence', 'On the whole', 'given that', 'Likewise'],
          s: ['Every year, thousands of Moroccan graduates move abroad ', G('owing to'), ' the lack of well-paid jobs at home. Some professions, ', G('notably'), ' medicine and engineering, are badly affected. ', G('Hence'), ', some hospitals do not have enough doctors. ', G('On the whole'), ', brain drain has some benefits, but its costs for Morocco are much greater.'],
          k: ['RE', 'EX', 'EF', 'SU', 'GP'], e: 'owing to + noun · notably = examples · Hence = result · On the whole sums up.' },
        { t: 'gapt', round: 'Women and power', bank: ['Now that', 'including', 'What is more', 'which means that', 'On account of', 'Hence'],
          s: [G('Now that'), ' more Moroccan women go to university, they hold important jobs in many fields, ', G('including'), ' politics, business and science. ', G('What is more'), ', the 2004 Family Code gave women more rights. Many women now run their own companies, ', G('which means that'), ' they are financially independent.'],
          k: ['RE', 'EX', 'AD', 'XP', 'GP'], e: 'Now that + clause · including + nouns · What is more = another point · which means that explains.' },
        { t: 'gapt', round: 'Sustainable development', bank: ['In view of', 'To illustrate', 'Additionally', 'which is why', 'Seeing that', 'In a nutshell'],
          s: [G('In view of'), ' the long periods of drought, water has become a precious resource in Morocco. ', G('To illustrate'), ', some dams have been almost empty in recent years. ', G('Additionally'), ', the population of big cities keeps growing, ', G('which is why'), ' the country is building plants to turn sea water into drinking water.'],
          k: ['RE', 'EX', 'AD', 'EF', 'GP'], e: 'In view of + noun · To illustrate = example · Additionally = another fact · which is why = result.' },
        { t: 'gapt', round: 'Citizenship', bank: ['that is', 'Given that', 'Accordingly', 'in addition to', 'owing to', 'notably'],
          s: ['A good citizen respects the law and takes part in community life, ', G('that is'), ', they act for the good of everyone. ', G('Given that'), ' many young people feel ignored by politicians, few of them vote. ', G('Accordingly'), ', schools now organise civic education clubs. Students take part in debates ', G('in addition to'), ' local clean-up campaigns.'],
          k: ['XP', 'RE', 'EF', 'AD', 'GP'], e: 'that is explains · Given that + clause · Accordingly = result · in addition to + noun.' },
        { t: 'gapt', round: 'Cultural heritage', bank: ['seeing that', 'notably', 'as well as', 'To conclude', 'on account of', 'Otherwise'],
          s: ['Tourists love Morocco ', G('seeing that'), ' it offers a rich mix of cultures. Its traditional crafts, ', G('notably'), ' pottery and carpets, are sold all over the world. Visitors enjoy the food ', G('as well as'), ' the music of festivals in Fes and Essaouira. ', G('To conclude'), ', our heritage is a treasure that we must protect.'],
          k: ['RE', 'EX', 'AD', 'SU', 'GP'], e: 'seeing that + clause · notably = examples · as well as + noun · To conclude ends it.' }
      ] },
      { key: 'boss', name: 'Linking Words Boss Challenge', pts: 25, how: 'Final challenge: no word bank.', qs: [
        { t: 'choice', round: 'Same meaning', p: 'Which linker means the same as “consequently”?', o: ['accordingly', 'additionally', 'notably', 'namely'], k: ['EF'], e: 'consequently = accordingly = for this reason: both introduce a result.' },
        { t: 'choice', round: 'Clarifying', p: 'You want to say the same idea again in easier words. Which linker do you use?', o: ['to put it simply', 'on top of that', 'on the whole', 'in view of'], k: ['XP'], e: 'to put it simply (in other words, that is) restates an idea more clearly.' },
        { t: 'gapt', round: 'Gap fill · type the linker', d: 'Type a linker that gives a reason.', s: ['Hamza applied for a scholarship abroad ', G('given that', 'seeing that', 'since', 'because', 'as'), ' his family could not pay for university.'], k: ['RE', 'GP'], e: '“his family could not pay” is subject + verb → given that / seeing that / since (not “owing to”, which needs a noun).' },
        { t: 'exam', n: 1, round: 'Combine · use “which is why”', d: 'Fast food is cheap and quick. Many teenagers eat it every day.', f: 'Fast food is cheap and quick, …', pre: 'Fast food is cheap and quick', lead: [], core: 'teenagers', dd: '',
          ans: ['which is why ', ['many ', 'a lot of ', 'lots of ', ''], 'teenagers eat it every day'],
          checks: [['which is why + subject (which is why many teenagers …)', '^which is why (many |a lot of |lots of )?teenagers\\b'], ['the result: they eat it every day', '\\beat (it|fast food) every day\\b']],
          hint: 'Which sentence is the result? which is why + subject + verb.',
          model: 'Fast food is cheap and quick, which is why many teenagers eat it every day.', also: '“which is why a lot of teenagers eat it every day” is also correct.', k: ['EF', 'GP'], e: 'Eating it every day is the result → , which is why + subject + verb.' },
        { t: 'gapt', round: 'Error correction', d: 'Owing to the price of fuel went up, many people sold their cars. Notably, the streets are less crowded.',
          s: [G('Given that', 'Seeing that', 'Since', 'Because', 'As', 'Now that'), ' the price of fuel went up, many people sold their cars. ', G('Hence', 'As a result', 'Consequently', 'Therefore', 'For this reason', 'Accordingly', 'Thus', 'As a consequence', 'So'), ', the streets are less crowded.'], k: ['RE', 'EF', 'GP'], e: '“the price of fuel went up” is a clause → Given that (not Owing to). Less crowded streets are a result → Hence (Notably only gives examples).' },
        { t: 'gapt', round: 'Paragraph · type 4 linkers', s: ['Teenagers spend hours online. ', G('To illustrate', 'For example', 'For instance'), ', some check their phones before they get up. Social media keeps them in touch with friends. ', G('What is more', 'Additionally', 'Moreover', 'Furthermore', 'In addition', 'Besides', 'On top of that', 'Also'), ', it gives them access to news. But too much screen time harms sleep ', G('as well as', 'and'), ' concentration. ', G('All in all', 'On the whole', 'In a nutshell', 'In brief', 'To conclude', 'In conclusion', 'To sum up', 'In short', 'Overall', 'To summarise', 'To summarize'), ', social media is useful in moderation.'],
          k: ['EX', 'AD', 'SU', 'GP'], e: 'example · another benefit · as well as + noun · summary.' }
      ] }
    ]
  };
})();

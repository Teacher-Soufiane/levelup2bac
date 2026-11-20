/* Unit 8 · Grammar · Linking Words · Quiz 1 (out of 20). "Linking Words Master: Connect Your Ideas!"
   Points are in hundredths (25 = 0.25 point). Every item lists k = the skills it tests (RS_TAGS).
   In choice items the first option is the correct one; the app shuffles.
   The six functions follow the teacher's order: reasons, examples, addition, explaining, effect, summarising.
   No national-exam questions yet: the teacher's brief says the screenshot was missing. */
window.RS_TAGS = [
  ['RE', 'The six functions', 'Giving reasons: because / since / as + clause; because of / due to + noun'],
  ['EX', 'The six functions', 'Giving examples: for example, for instance, such as'],
  ['AD', 'The six functions', 'Adding information: moreover, furthermore, in addition, besides'],
  ['XP', 'The six functions', 'Explaining: in other words, that is to say, this means that'],
  ['EF', 'The six functions', 'Expressing effect: therefore, consequently, as a result, thus'],
  ['SU', 'The six functions', 'Summarising: in conclusion, to sum up, in short, overall'],
  ['GP', 'Grammar patterns', 'patterns: because + clause vs because of + noun; such as + nouns vs For example, + sentence']
];

(function () {
  function G() { return { a: [].slice.call(arguments) }; }   /* a gap and its accepted answers (the first is shown as the correction) */

  window.RS_QUIZ = {
    title: 'Linking Words · Quiz 1',
    games: [
      { key: 'match', name: 'Function Match-Up', pts: 25, how: 'Match each linker.', qs: [
        { t: 'match', round: 'Round 1 of 3', pairs: [
          ['because', 'Giving reasons', ['RE']],
          ['for instance', 'Giving examples', ['EX']],
          ['moreover', 'Adding information', ['AD']],
          ['consequently', 'Expressing effect', ['EF']]] },
        { t: 'match', round: 'Round 2 of 3', pairs: [
          ['in other words', 'Explaining', ['XP']],
          ['to sum up', 'Summarising', ['SU']],
          ['due to', 'Giving reasons', ['RE']],
          ['such as', 'Giving examples', ['EX']]] },
        { t: 'match', round: 'Round 3 of 3', pairs: [
          ['furthermore', 'Adding information', ['AD']],
          ['as a result', 'Expressing effect', ['EF']],
          ['that is to say', 'Explaining', ['XP']],
          ['in conclusion', 'Summarising', ['SU']]] }
      ] },
      { key: 'choose', name: 'Choose the Right Linker', pts: 50, how: 'Choose the linker that fits.', qs: [
        { t: 'choice', p: 'Many students use the Internet ____ they need information for their studies.', o: ['because', 'however', 'therefore', 'in conclusion'], k: ['RE', 'GP'], e: 'The second idea is the reason → because + subject + verb (they need).' },
        { t: 'choice', p: 'The football match in Agadir was cancelled ____ the heavy rain.', o: ['because of', 'because', 'therefore', 'for instance'], k: ['RE', 'GP'], e: '“the heavy rain” is a noun phrase → because of (or due to). “because” needs a subject + verb: because it rained heavily.' },
        { t: 'choice', p: 'Air pollution harms our health. ____, it can cause asthma in children.', o: ['For example', 'Such as', 'Because of', 'To sum up'], k: ['EX', 'GP'], e: 'A new sentence that gives an example starts with “For example,”. “such as” goes directly before nouns inside a sentence (diseases such as asthma).' },
        { t: 'choice', p: 'Hamid did not revise for the national exam. ____, he got a bad mark.', o: ['Consequently', 'Because', 'In other words', 'For instance'], k: ['EF'], e: 'The bad mark is the result of not revising → consequently (therefore, as a result). “because” would introduce a reason, not a result.' },
        { t: 'choice', p: 'Ali is bilingual. ____, he speaks two languages fluently.', o: ['In other words', 'Such as', 'Because of', 'Due to'], k: ['XP'], e: 'The second sentence says the same thing in simpler words → in other words. It explains; it does not add an example.' },
        { t: 'choice', p: 'Sport keeps you fit. ____, it helps you reduce stress.', o: ['Moreover', 'Therefore', 'In other words', 'For example'], k: ['AD'], e: 'A second, different benefit is added → moreover (furthermore, in addition).' },
        { t: 'choice', p: 'Working from home saves time and money. ____, more and more companies are choosing it.', o: ['As a result', 'Because of', 'For instance', 'In other words'], k: ['EF'], e: 'Companies choose it because it saves time and money: the second idea is the result → as a result.' },
        { t: 'choice', p: 'Volunteers gain new skills, and communities get the help they need. ____, voluntary work is good for everyone.', o: ['In short', 'Because of', 'Such as', 'Due to'], k: ['SU'], e: 'The last sentence sums up the two ideas before it → in short (to sum up, in conclusion).' }
      ] },
      { key: 'sort', name: 'Linker Sorting Challenge', pts: 25, how: 'Sort each linker.',
        cats: ['Reasons', 'Examples', 'Addition', 'Explanation', 'Effect', 'Summary'], tip: 'Ask: what comes next?', qs: [
        { t: 'sort', round: 'Round 1 of 4', cards: [['since', 0, 'RE'], ['in addition', 2, 'AD'], ['therefore', 4, 'EF']] },
        { t: 'sort', round: 'Round 2 of 4', cards: [['as', 0, 'RE'], ['for example', 1, 'EX'], ['this means that', 3, 'XP']] },
        { t: 'sort', round: 'Round 3 of 4', cards: [['because of', 0, 'RE'], ['besides', 2, 'AD'], ['in short', 5, 'SU']] },
        { t: 'sort', round: 'Round 4 of 4', cards: [['to put it another way', 3, 'XP'], ['thus', 4, 'EF'], ['overall', 5, 'SU']] }
      ] },
      { key: 'connect', name: 'Connect the Ideas', pts: 75, how: 'Join the ideas. One group is extra.', qs: [
        { t: 'build', d: 'Some students sleep late. + They feel tired in class.', key: ['Some students feel tired in class', 'because', 'they sleep late'], extra: ['because of'], k: ['RE', 'GP'], e: 'Sleeping late is the reason → because + subject + verb (they sleep). “because of” needs a noun (because of late nights).' },
        { t: 'build', d: 'Karim trained every day. + He won the race.', key: ['Karim trained every day.', 'As a result,', 'he won the race'], extra: ['Such as'], k: ['EF'], e: 'Winning is the result of training → As a result, + the result.' },
        { t: 'build', d: 'Many teenagers do team sports. + They play football and basketball.', key: ['Many teenagers do team sports', 'such as', 'football and basketball'], extra: ['for example of'], k: ['EX', 'GP'], e: 'such as + nouns gives examples inside the sentence: team sports such as football and basketball.' },
        { t: 'build', d: 'Reading improves your vocabulary. + It helps you write better.', key: ['Reading improves your vocabulary.', 'Moreover,', 'it helps you write better'], extra: ['Because of'], k: ['AD'], e: 'A second benefit is added → Moreover, + the new idea.' }
      ] },
      { key: 'para', name: 'Paragraph Linker Challenge', pts: 20, how: 'Choose a linker for each gap.', qs: [
        { t: 'gapt', round: 'Environment', bank: ['because', 'because of', 'Moreover', 'such as', 'In conclusion', 'In other words'],
          s: ['Plastic waste is a serious problem in Morocco ', G('because'), ' it pollutes our beaches and kills sea animals. ', G('Moreover'), ', it takes hundreds of years to disappear. Many towns organise campaigns, ', G('such as'), ' beach clean-ups and recycling days. ', G('In conclusion'), ', protecting the environment is everyone’s responsibility.'],
          k: ['RE', 'AD', 'EX', 'SU', 'GP'], e: 'because + clause · Moreover = another problem · such as + nouns · In conclusion ends it.' },
        { t: 'gapt', round: 'Education', bank: ['such as', 'Furthermore', 'because', 'To sum up', 'because of', 'For instance'],
          s: ['English gives Moroccan students access to many resources ', G('such as'), ' online courses, films and scientific articles. ', G('Furthermore'), ', it improves their chances of finding a good job. Many companies ask for English ', G('because'), ' they work with foreign partners. ', G('To sum up'), ', English is a skill for life, not just a school subject.'],
          k: ['EX', 'AD', 'RE', 'SU', 'GP'], e: 'such as + nouns · Furthermore = another advantage · because + clause · To sum up ends it.' },
        { t: 'gapt', round: 'Technology', bank: ['As a result', 'In addition', 'that is to say', 'Overall', 'Since', 'Because of'],
          s: ['Many teenagers stay online until late at night. ', G('As a result'), ', they feel tired at school the next day. ', G('In addition'), ', smartphones are expensive and easy to lose. Doctors recommend a “digital detox”, ', G('that is to say'), ' one day a week without a phone. ', G('Overall'), ', technology is useful, but we must use it wisely.'],
          k: ['EF', 'AD', 'XP', 'SU'], e: 'As a result = effect · In addition = another problem · that is to say explains · Overall sums up.' },
        { t: 'gapt', round: 'Health', bank: ['For instance', 'because', 'Consequently', 'In short', 'because of', 'Such as'],
          s: ['Doctors say that exercise is the best medicine. ', G('For instance'), ', people who walk thirty minutes a day live longer. Fast food is dangerous ', G('because'), ' it contains too much salt, sugar and fat. ', G('Consequently'), ', eating it every day can lead to obesity. ', G('In short'), ', if we eat well and move more, we will stay healthy.'],
          k: ['EX', 'RE', 'EF', 'SU', 'GP'], e: 'For instance, can start a sentence (Such as cannot) · because + clause · Consequently = result · In short sums up.' },
        { t: 'gapt', round: 'Volunteering', bank: ['In other words', 'such as', 'because', 'In addition', 'Due to', 'For instance'],
          s: ['Voluntary work means helping others without being paid. ', G('In other words'), ', volunteers work for free. They help in many places, ', G('such as'), ' hospitals, schools and orphanages. Many young people volunteer ', G('because'), ' they want to be useful to their community. ', G('In addition'), ', volunteers themselves gain new skills and make new friends.'],
          k: ['XP', 'EX', 'RE', 'AD', 'GP'], e: 'In other words restates · such as + nouns · because + clause · In addition = another benefit.' }
      ] },
      { key: 'boss', name: 'Linking Words Boss Challenge', pts: 25, how: 'Final challenge: no word bank.', qs: [
        { t: 'choice', round: 'Meaning', p: 'What does “consequently” introduce?', o: ['a result', 'a reason', 'an example', 'a summary'], k: ['EF'], e: 'consequently = as a result: it introduces the effect of what came before.' },
        { t: 'choice', round: 'Most logical connector', p: 'The roads to Ifrane were blocked by snow. ____, the schools were closed for two days.', o: ['Therefore', 'Because', 'For instance', 'In other words'], k: ['EF'], e: 'The schools closed because of the snow: the second sentence is the result → Therefore.' },
        { t: 'gapt', round: 'Gap fill · type the linker', s: ['Ahmed could not sleep ', G('because of', 'due to', 'owing to'), ' the noise from the street.'], k: ['RE', 'GP'], e: '“the noise” is a noun phrase → because of / due to (not “because”).' },
        { t: 'exam', n: 1, round: 'Combine · use “because”', d: 'Many people moved to the cities. They wanted better jobs.', f: 'Many people moved to the cities …', pre: 'Many people moved to the cities', lead: [], core: 'jobs', dd: '',
          ans: ['because they wanted ', ['', 'to find ', 'to get ', 'to have '], 'better jobs'],
          checks: [['because + subject + verb (because they …)', '^because they\\b'], ['the reason: they wanted better jobs', '\\bwanted\\b.*\\bbetter jobs\\b']],
          hint: 'Which sentence is the reason? because + subject + verb.',
          model: 'Many people moved to the cities because they wanted better jobs.', also: '“because they wanted to find better jobs” is also correct.', k: ['RE', 'GP'], e: 'Wanting better jobs is the reason → because + subject + verb: because they wanted better jobs.' },
        { t: 'gapt', round: 'Error correction', d: 'Many students are stressed because of they have exams. Such as, they cannot sleep well.',
          s: ['Many students are stressed ', G('because', 'since', 'as'), ' they have exams. ', G('As a result', 'Consequently', 'Therefore', 'Thus', 'As a consequence', 'So'), ', they cannot sleep well.'], k: ['RE', 'EF', 'GP'], e: '“they have exams” is a clause → because (not because of). Not sleeping is a result → As a result (“Such as” only gives examples).' },
        { t: 'gapt', round: 'Paragraph · type 4 linkers', s: ['Sport is important for young people ', G('because', 'since', 'as'), ' it keeps them fit. ', G('Moreover', 'In addition', 'Furthermore', 'Besides', 'What is more', 'Also'), ', it teaches them teamwork. Popular sports in Morocco, ', G('such as', 'like'), ' football and athletics, attract millions of fans. ', G('In conclusion', 'To sum up', 'In short', 'Overall', 'To conclude', 'All in all', 'In brief'), ', sport is good for both the body and the mind.'],
          k: ['RE', 'AD', 'EX', 'SU', 'GP'], e: 'because + clause · Moreover = another benefit · such as + nouns · In conclusion ends it.' }
      ] }
    ]
  };
})();

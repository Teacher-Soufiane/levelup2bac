/* Unit 3 · Writing · Report · Quiz (out of 20).
   2026-11-19: the teacher's 20 questions moved to the Unit 10 Writing page (shared engine). The questions and the right answers are
   the teacher's, word for word. Changes:
   - the 4 sections become 6 activities, like the Unit 9 and Unit 10 Writing quizzes;
   - the report order (5 parts): students tap the parts in order (0.2 per part in its right place) instead of dragging;
   - the final question: the teacher's four whole reports did not fit a screen, so students build the report in 4 steps (0.25 each),
     as in the Unit 10 National Exam Challenge; the right answers are the sentences of the teacher's right report, word for word;
   - some wrong options are longer, so the right answer is not always the longest one.
   Points are in hundredths (100 = 1 point). In choice items o[0] is the right answer; the app shuffles the options. */
window.RS_TAGS = [
  ['PU', 'Report basics', 'The purpose of a report: to describe and evaluate an event'],
  ['FC', 'Report basics', 'Reading a fact chart: what, when, where, who organised, who attended, what happened'],
  ['OP', 'Report basics', 'A factual opening: the event, the place and the date'],
  ['FN', 'Organisation', 'The function of each part: introducing, describing participants, recommendations, evaluation'],
  ['OR', 'Organisation', 'The order: event & date → topic → participants → recommendations → evaluation'],
  ['LA', 'Language', 'Report language: revolved around, included, was organised by, was attended by'],
  ['PT', 'Language', 'Past tenses: past simple, past perfect, past perfect continuous, past passive'],
  ['RE', 'Recommendations & evaluation', 'Recommendations that answer the problem; an evaluation of how the event went'],
  ['UN', 'Recommendations & evaluation', 'Relevance: leave out trivial personal details']
];

(function () {
  function MC(round, p, ask, o, k, e, x) { var q = { t: 'choice', round: round, p: p, ask: ask, o: o, k: k, e: e }; for (var i in (x || {})) q[i] = x[i]; return q; }
  var KEYINFO = 'Key information: a seminar on dropping out in rural schools · Town Hall conference room, November 20th · about 200 people · recommendations · evaluation';
  function STEP(n, ask, o, k, e) { return { t: 'choice', round: 'Step ' + n + ' of 4', p: KEYINFO, ask: ask, o: o, k: k, e: e, small: 1 }; }
  var CHART ='Fact chart: School Cultural Week | First week of March 2019 | School premises | School administration + parents’ association | Teachers, students, parents and guests | Poetry, clean-up activities, sports competitions, songs and drama.';

  window.RS_QUIZ = {
    title: 'Writing a Report · Quiz',
    games: [
      { key: 'basics', name: 'Report Basics: Purpose and Facts', pts: 100, how: 'Choose the best answer.', qs: [
        MC('The purpose of the report', 'A school organized a cultural week. The administration wants a written account of the event.', 'What is the main purpose of this report?',
          ['To describe and evaluate the event', 'To tell a fictional story about the week', 'To describe someone’s childhood', 'To persuade people to buy something'], ['PU'], 'A report objectively describes what happened and evaluates the outcome, rather than telling a story, describing a person’s life, or persuading people to buy something.'),
        MC('The purpose of the report', 'A group of students organized a seminar on road safety for their school. They want to write an account of what happened and assess how well it went.', 'What is the main purpose of this report?',
          ['To describe and evaluate the event', 'To express personal feelings about road safety', 'To advertise an upcoming seminar', 'To write a short story about road safety'], ['PU'], 'A report objectively describes what happened and evaluates its outcome, rather than expressing personal feelings, advertising, or telling a story.'),
        MC('Report information hunt', CHART, 'According to the fact chart, WHAT event took place?',
          ['School Cultural Week', 'Sports competitions', 'A parents’ association meeting', 'Clean-up activities'], ['FC'], 'The fact chart identifies the event itself as School Cultural Week. The other options are activities that happened during it, not the event’s name.', { small: 1 }),
        MC('Report information hunt', CHART, 'According to the fact chart, WHO organized the event?',
          ['The school administration and the parents’ association.', 'The teachers only, with no help from the parents.', 'The students’ council and the class representatives.', 'A private company from the town centre and its manager.'], ['FC'], 'The fact chart lists the school administration and parents’ association as the organizers of the event.', { small: 1 }),
        MC('The report opening', 'Which opening is most appropriate for a formal report?', 'Choose the best opening.',
          ['A seminar on education was held at the Town Hall on November 20th.', 'Once upon a time, there was a seminar about education in our town.', 'I think seminars about education are usually boring and too long.', 'Education is very important, don’t you think?'], ['OP'], 'A report opens factually with the event, venue and date, rather than with narrative language or a personal opinion.')
      ] },
      { key: 'chart', name: 'Build the Report from a Fact Chart', pts: 100, how: 'Choose the best answer.', qs: [
        MC('Report the fact', 'FACT: Organizers = school administration + parents’ association.', 'Which sentence correctly reports this fact?',
          ['The event was organized by the school administration and the parents’ association.', 'The school administration and the parents’ association attended the event as guests.', 'The event will be organized by the school administration next year.', 'Organizing events is the job of the school administration.'], ['FC', 'LA'], 'This sentence correctly reports the fact using the past passive, matching how reports describe who organized an event.', { small: 1 }),
        MC('Report the fact', 'FACT: Participants = teachers, students, parents and guests.', 'Which sentence correctly reports this fact?',
          ['The event was attended by teachers, students, parents and guests.', 'Teachers, students, parents and guests organized the event.', 'The event will be attended by teachers, students, parents and guests.', 'Teachers, students, parents and guests recommended the event.'], ['FC', 'LA'], 'This sentence correctly reports who attended the event, using the past passive appropriate for a completed event.', { small: 1 }),
        MC('The function of each part', '“The occasion was a seminar organised by the local education authorities.”', 'What does this sentence do?',
          ['Introducing the event', 'Giving a recommendation', 'Evaluating the event', 'Giving a personal opinion'], ['FN'], 'This sentence states what the event was and who organized it, which is the function of an introduction.'),
        MC('The function of each part', '“They suggested that we should encourage dropouts to return to school.”', 'What does this sentence do?',
          ['Reporting recommendations', 'Describing participants', 'Introducing the event', 'Giving the date of the event'], ['FN'], '“They suggested that we should” introduces a recommendation made by participants, not a description of the event or its participants.')
      ] },
      { key: 'order', name: 'Put the Report in the Correct Order', pts: 100, how: 'Tap the parts in order.', qs: [
        { t: 'build', long: 1, pos: 1, round: 'A seminar report', d: 'Event & Date → Topic → Participants → Recommendations → Evaluation', fr: 'Your report:', bh: 'Tap the event and date first',
          key: ['The seminar took place in the Town Hall conference room on November 20th.', 'The seminar focused on dropping out in rural schools.', 'About 200 people attended, including parents’ associations, educators and political officials.', 'Participants recommended supporting poor families and raising parents’ awareness.', 'The event was considered fruitful, although some participants called for further action.'], extra: [],
          k: ['OR'], e: 'When and where the event happened → what it focused on → who attended → what was recommended → how it was evaluated.' }
      ] },
      { key: 'language', name: 'Report Language and Past Tenses', pts: 100, how: 'Choose the best answer.', qs: [
        MC('Report language', 'The event ______ around the issue of school dropout.', 'Choose the most appropriate word.',
          ['revolved', 'played', 'happened', 'went'], ['LA'], '“Revolved around” is the natural collocation meaning “was centered on”, which fits formal report language.'),
        MC('Report language', 'The activities ______ mini-lectures and workshops.', 'Choose the most appropriate word.',
          ['included', 'consisted', 'happened', 'contained'], ['LA'], '“Included” is correct here; “consisted” would need “consisted of” to be grammatically correct in this sentence.'),
        MC('Past tense', 'The seminar ______ on November 20th.', 'Choose the correct tense.',
          ['took place', 'takes place', 'has taken place', 'had been taking place'], ['PT'], 'Past simple, “took place”, is used to describe a completed dated event in a report.'),
        MC('Past tense', 'By the time the guests arrived, the organizers ______ the preparations.', 'Choose the correct tense.',
          ['had completed', 'complete', 'were complete', 'have completed'], ['PT'], 'Past perfect, “had completed”, is used for an action completed before another past action: the guests arriving.'),
        MC('Past tense', 'By the time the event ended, the participants ______ for nearly three hours.', 'Choose the correct tense.',
          ['had been discussing the issue', 'discuss the issue', 'will discuss the issue together', 'have discussed the issue together'], ['PT'], 'Past perfect continuous emphasizes the duration of an action that was ongoing up to another point in the past.')
      ] },
      { key: 'evaluate', name: 'Recommendations and Evaluation', pts: 100, how: 'Choose the best answer.', qs: [
        MC('Recommendations challenge', 'Problem: Many students are dropping out of rural schools.', 'Which recommendation is appropriate?',
          ['Schools should support poor families and raise parents’ awareness.', 'Students should buy more expensive school materials and books.', 'Parents should stop sending their children to school.', 'Schools should organize fewer educational activities for students.'], ['RE'], 'This recommendation directly addresses the causes of dropout: poverty and lack of awareness.'),
        MC('Recommendations challenge', 'Problem: Many students are dropping out of rural schools.', 'Which option contains the most complete set of appropriate recommendations?',
          ['Supporting poor families financially and raising parents’ awareness about the importance of education.', 'Supporting poor families financially only, with no other action needed from the school or the parents.', 'Raising parents’ awareness while reducing the number of school activities and the hours of classes.', 'Encouraging families to rely only on private tutoring and to stop paying for public schools.'], ['RE'], 'This option combines two complementary, realistic recommendations addressing both financial and awareness-related causes of dropout.', { small: 1 }),
        MC('Evaluate the event', 'The seminar was generally considered successful.', 'Choose the best evaluation sentence for this report.',
          ['The event was well organized and most participants were satisfied with the results.', 'The event was a complete waste of everyone’s time and money, in my honest opinion.', 'The event happened last year in the main hall of our school, on a Saturday.', 'The event took place in the Town Hall on a cold and rainy November morning.'], ['RE'], 'An evaluation sentence assesses how the event went. This option evaluates the outcome rather than only restating a fact.', { small: 1 }),
        MC('Find the irrelevant sentence', 'A report about a school seminar on road safety.', 'Which sentence does NOT belong in the report?',
          ['The guest speaker usually drives a red car.', 'The seminar was held in the school hall on May 10th.', 'About 150 students and teachers attended.', 'Participants recommended organizing more awareness campaigns.'], ['UN'], 'The guest speaker’s car color is a trivial personal detail unrelated to the event’s facts, structure, or outcome.')
      ] },
      /* The teacher's final question offered four whole reports; they cannot fit one screen (phone or laptop), so, as in the Unit 10
         National Exam Challenge, the students build the report part by part. The right answers are the four sentences of the teacher's
         right report, word for word; the wrong ones use the future (as in the teacher's wrong reports) or belong to another part. */
      { key: 'final', name: 'Build the Complete Report', pts: 25, exam: 1, how: 'Build the report.',
        win: 'Excellent work! Event and date → participants → recommendations → evaluation, all in past tenses.',
        lose: 'Not quite! A report gives the event and date, the participants, the recommendations and an evaluation, in past tenses.', qs: [
        STEP(1, 'Choose the opening: the event, the place and the date.', ['A seminar on dropping out in rural schools took place in the Town Hall conference room on November 20th.', 'A seminar on dropping out in rural schools will take place in the Town Hall conference room next month.', 'Dropping out in rural schools is a seminar that was held in a conference room in the Town Hall.'], ['OR', 'PT', 'FC'], 'The event, its topic, the place and the date, in the past simple.'),
        STEP(2, 'Choose the participants.', ['About 200 people attended, including parents’ associations, educators and political officials.', 'About 200 people will attend, including parents’ associations, educators and political officials.', 'The event was considered fruitful before about 200 people attended the seminar in the hall.'], ['OR', 'PT', 'FC'], 'Who attended, in the past simple. The event happened, so not “will attend”.'),
        STEP(3, 'Choose the recommendations.', ['Participants recommended supporting poor families and raising parents’ awareness.', 'The seminar will focus on supporting poor families and on raising parents’ awareness.', 'Participants recommended building a new conference room in the Town Hall.'], ['OR', 'RE'], 'What the participants recommended, and it answers the problem of dropping out.'),
        STEP(4, 'Choose the evaluation.', ['The event was considered fruitful, although some participants called for further action.', 'The event will be considered fruitful, although some participants may call for more action.', 'The seminar took place in the Town Hall conference room on a cold morning in November.'], ['OR', 'RE', 'PT'], 'How the event went: the evaluation comes last.')
      ] }
    ]
  };
})();

window.RS_COPY = {
  storeKey: 'levelup-2bac-u3-writing-report-q1-v2',
  heroKicker: 'LEVEL UP 2BAC · WRITING · UNIT 3',
  heroTitle: 'WRITING A REPORT',
  heroQuiz: 'QUIZ',
  heroSub: 'Report Writing: Interactive Practice · 20 points',
  missionHtml: 'A <b>report</b> describes an event and <b>evaluates</b> it. Use the facts (what, when, where, who), write in <b>past tenses</b>, report the <b>recommendations</b>, and say how the event went.',
  formula: 'Event & Date → Topic → Participants → Recommendations → Evaluation',
  cats: ['🎯 Purpose', '📋 Fact chart', '🗂️ Order', '✍️ Past tenses', '💡 Recommendations', '📰 Full report'],
  rulesHtml: [
    'Play the 6 activities in order. You have <b>one try</b> for each question.',
    'Activity 6, the <b>Final Challenge</b>: build the complete report step by step.',
    'You see the correct answer and an explanation straight away, and you can review your mistakes at the end.'
  ],
  beforeLast: 'Next: the Final Challenge. Build the complete report!',
  msgs: [
    'Outstanding! You can turn a fact chart into a clear, well-organised report.',
    'Well done! Review the activities where you lost points, then try again.',
    'You passed. Practise the report order and the past tenses again.',
    'Keep going! Re-read the order: event and date, topic, participants, recommendations, evaluation. Then try again.'
  ],
  fullMarks: '🏆 Reporter badge! From the fact chart to the evaluation, your report is clear and complete.'
};

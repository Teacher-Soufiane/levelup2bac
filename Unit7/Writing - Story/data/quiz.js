/* Unit 7 · Writing · A Story · Quiz 1 (out of 20). "A Story: Interactive Practice"
   Points are in hundredths (50 = 0.5 point); the total must be 2000. Every item lists k = the skills it tests (RS_TAGS).
   In choice and err items the first option is the correct one; the app shuffles.
   Every task is auto-marked: students recognise, sort, order, choose and correct; they never type a free story (not fairly markable).
   Points: 3 / 4 / 3 / 3 / 3 / 4 (the brief gives only the total, 20).
   2026-11-19: moved to the Unit 10 Writing page (shared engine, texts in RS_COPY). Max 1 point per item: the Story Scramble scores
   0.25 per card in its right place (q.pos), and a 4th Beginning/Middle/End set keeps the total at 20. Instructions are one short line;
   wrong options in the Story Doctor and the Story Creator are longer, so the right one is not always the longest. */
window.RS_TAGS = [
  ['CH', 'Story elements', 'Characters: who the story is about'],
  ['SE', 'Story elements', 'Setting: where and when the story happens'],
  ['PR', 'Story elements', 'Problem: what goes wrong'],
  ['CF', 'Story elements', 'Conflict: how the problem develops and gets worse'],
  ['SO', 'Story elements', 'Solution: how the problem is solved'],
  ['BE', 'The three stages', 'Beginning: set the scene (Who? Where? When?)'],
  ['MI', 'The three stages', 'Middle: develop the events (What happened? How? Why?)'],
  ['EN', 'The three stages', 'End: solve the problem and finish the story'],
  ['EX', 'Story expressions', 'One day… / Last summer… / While I was… / Suddenly… / Unfortunately… / Then… / To make matters worse… / Finally… / In the end… / Eventually…']
];

(function () {
  function G() { return { a: [].slice.call(arguments) }; }
  function X(t) { return { t: t, x: 1 }; }
  /* The Story Creator: the situation is shown with every step */
  var SIT = 'Situation: A strange noise in the middle of the night';
  function STEP(n, ask, o, k, e) { return { t: 'choice', round: 'Step ' + n + ' of 8', p: SIT, ask: ask, o: o, k: k, e: e }; }

  window.RS_QUIZ = {
    title: 'A Story · Quiz 1',
    games: [
      { key: 'elements', name: 'Story Elements Detective', pts: 25, how: 'Match each story element.', qs: [
        { t: 'match', round: 'Round 1 of 4', pairs: [
          ['Who the story is about', 'Characters', ['CH']],
          ['Where and when it happens', 'Setting', ['SE']],
          ['How the problem is solved', 'Solution', ['SO']]] },
        { t: 'match', round: 'Round 2 of 4', pairs: [
          ['What goes wrong', 'Problem', ['PR']],
          ['How things get worse', 'Conflict', ['CF']],
          ['Yasmine and her little brother', 'Characters', ['CH']]] },
        { t: 'match', round: 'Round 3 of 4', pairs: [
          ['In a dark forest, last winter', 'Setting', ['SE']],
          ['They lost their map.', 'Problem', ['PR']],
          ['A farmer showed them the way home.', 'Solution', ['SO']]] },
        { t: 'match', round: 'Round 4 of 4', pairs: [
          ['Then the storm got worse.', 'Conflict', ['CF']],
          ['In a small village, in 1990', 'Setting', ['SE']],
          ['Sami and his grandfather', 'Characters', ['CH']]] }
      ] },
      { key: 'stages', name: 'Beginning, Middle or End?', pts: 25, cats: ['Beginning', 'Middle', 'End'], how: 'Tap the stage for each.', qs: [
        { t: 'sort', round: 'Set 1 of 4', cards: [
          ['Last Saturday, I went camping with my friends.', 0, ['BE']],
          ['Suddenly, we heard a strange noise.', 1, ['MI']],
          ['Finally, we discovered that it was only a small cat.', 2, ['EN']],
          ['It was a warm summer evening in Ifrane.', 0, ['BE']]] },
        { t: 'sort', round: 'Set 2 of 4', cards: [
          ['Unfortunately, the bus broke down in the desert.', 1, ['MI']],
          ['In the end, everyone laughed about it.', 2, ['EN']],
          ['One day, my cousin Adam came to visit us.', 0, ['BE']],
          ['To make matters worse, it started to rain.', 1, ['MI']]] },
        { t: 'sort', round: 'Set 3 of 4', cards: [
          ['Eventually, a kind driver stopped to help us.', 2, ['EN']],
          ['While I was walking home, I saw a wallet.', 0, ['BE']],
          ['Then, all the lights went out.', 1, ['MI']],
          ['Since that day, I always check my bag twice.', 2, ['EN']]] },
        { t: 'sort', round: 'Set 4 of 4', cards: [
          ['Halfway up the mountain, the path disappeared under the snow.', 1, ['MI']],
          ['Two years ago, my family moved to a small town near Agadir.', 0, ['BE']],
          ['At last, we reached the hotel, tired but happy.', 2, ['EN']],
          ['My best friend Lina lived in the house next door.', 0, ['BE']]] }
      ] },
      { key: 'scramble', name: 'Story Scramble: Put Events in Order!', pts: 150, how: 'Order it. One is extra.', qs: [
        { t: 'build', long: 1, pos: 1, fr: 'Your story:', bh: 'Tap the events in order', key: ['Last winter, I visited my grandma.', 'One night, I heard a noise.', 'Then, I went downstairs slowly.', 'Suddenly, the door opened!', 'It was only her old cat.', 'In the end, I went back to bed.'], extra: ['Dear Sir or Madam,'], k: ['BE', 'MI', 'EN', 'EX'], e: 'Setting → problem → Then → Suddenly → the answer → In the end.' },
        { t: 'build', long: 1, pos: 1, fr: 'Your story:', bh: 'Tap the events in order', key: ['Last summer, we visited Merzouga.', 'One morning, we walked in the dunes.', 'Suddenly, Omar found an old box.', 'Inside, there was a strange map.', 'We took it to the museum.', 'Eventually, we were on TV!'], extra: ['Yours sincerely, Omar'], k: ['BE', 'MI', 'EN', 'EX'], e: 'When and where → what happened → the discovery → how it ended.' }
      ] },
      { key: 'expressions', name: 'Storytelling Expressions Challenge', pts: 25, how: 'Choose for each gap.', qs: [
        { t: 'gapt', round: 'Story 1 of 4', bank: ['Last summer', 'Then', 'Suddenly', 'In conclusion', 'Yours faithfully'],
          s: [G('Last summer'), ', I went fishing with my uncle. ', G('Then'), ', we sailed far from the beach. ', G('Suddenly'), ', a huge wave hit our boat!'],
          k: ['EX', 'BE', 'MI'], e: 'Last summer sets the time · Then adds the next event · Suddenly brings a surprise.' },
        { t: 'gapt', round: 'Story 2 of 4', bank: ['Unfortunately', 'To make matters worse', 'Finally', 'Once upon a time', 'Dear Sir'],
          s: ['We wanted to go home. ', G('Unfortunately'), ', the engine stopped. ', G('To make matters worse'), ', our phones had no signal. ', G('Finally'), ', a fisherman towed us back.'],
          k: ['EX', 'MI', 'EN'], e: 'Unfortunately = bad news · To make matters worse = even worse · Finally = the solution.' },
        { t: 'gapt', round: 'Story 3 of 4', bank: ['One day', 'While I was', 'In the end', 'Firstly', 'Furthermore'],
          s: [G('One day'), ', I took the train to Fes. ', G('While I was'), ' reading, a man took my bag. ', G('In the end'), ', the police found it.'],
          k: ['EX', 'BE', 'EN'], e: 'One day starts the story · While I was + -ing · In the end finishes it.' },
        { t: 'gapt', round: 'Story 4 of 4', bank: ['Last week', 'Unfortunately', 'Eventually', 'In my opinion', 'Dear Madam'],
          s: [G('Last week'), ', our class visited a museum. ', G('Unfortunately'), ', I got lost. ', G('Eventually'), ', a guard found me.'],
          k: ['EX', 'BE', 'MI', 'EN'], e: 'Last week (when) · Unfortunately (the problem) · Eventually (after a long time, the solution).' }
      ] },
      { key: 'doctor', name: 'Story Doctor: Find and Fix the Mistakes!', pts: 50, how: 'Tap the mistake, then fix.', qs: [
        { t: 'err', round: 'Missing setting', fr: 'Beginning · Find the mistake:', w: [X('One day, somebody went somewhere.'), 'Suddenly,', 'it', 'started', 'to', 'snow.'],
          o: ['Last winter, Ali went to the mountains.', 'One day, somebody went somewhere.', 'In the end, Ali went back home with his family.'], k: ['BE', 'CH', 'SE'], e: 'The beginning says who, where and when.' },
        { t: 'err', round: 'Missing character', fr: 'Beginning · Find the mistake:', w: ['Last', 'Friday,', 'at', 'the', 'beach,', X('someone'), 'swam', 'too', 'far.'],
          o: ['my brother Rayan', 'someone', 'the cold blue sea'], k: ['CH'], e: 'Name your characters so the reader knows who the story is about.' },
        { t: 'err', round: 'Wrong order', fr: 'Middle · Find the mistake:', w: [X('Finally,'), 'we', 'got', 'lost', 'in', 'the', 'forest.'],
          o: ['Unfortunately,', 'Finally,', 'At the very end,'], k: ['MI', 'EX'], e: 'Getting lost is the problem (middle), not the end.' },
        { t: 'err', round: 'Unclear problem', fr: 'Middle · Find the mistake:', w: ['Suddenly,', X('a thing happened.'), 'We', 'were', 'scared.'],
          o: ['the bridge broke behind us.', 'a thing happened.', 'it was a nice, sunny day at the lake.'], k: ['PR', 'MI'], e: 'Say clearly what went wrong.' },
        { t: 'err', round: 'No solution', fr: 'End · Find the mistake:', w: ['We', 'were', 'lost', 'in', 'the', 'desert.', X('Then I ate lunch.')],
          o: ['In the end, a guide found us.', 'Then I ate lunch.', 'Suddenly, we were lost again in the dunes.'], k: ['EN', 'SO'], e: 'The end must solve the problem.' },
        { t: 'err', round: 'Wrong expression', fr: 'Middle · Find the mistake:', w: [X('In conclusion,'), 'the', 'lights', 'went', 'out', 'and', 'we', 'screamed!'],
          o: ['Suddenly,', 'In conclusion,', 'Dear Sir,'], k: ['EX'], e: '“In conclusion” is for essays. “Suddenly” brings a surprise.' }
      ] },
      { key: 'creator', name: 'The Story Creator: Complete the Adventure!', pts: 50, exam: 1, how: 'Build the story.', qs: [
        STEP(1, 'Beginning: when and where?', ['Last winter, I was alone at home in Ifrane.', 'In the end, I was alone at home with my old dog.', 'Suddenly, I was at home.', 'Dear Sir or Madam,'], ['BE', 'SE'], 'Set the scene: time + place.'),
        STEP(2, 'Beginning: who and what were they doing?', ['While I was reading in bed, my dog Max was asleep.', 'Finally, my dog Max was fast asleep in the kitchen.', 'To make matters worse, I like dogs.', 'In my opinion, dogs are great.'], ['BE', 'CH'], 'Introduce the characters. “While I was…” describes the background.'),
        STEP(3, 'Middle: what happened?', ['Suddenly, I heard a loud noise downstairs.', 'In the end, I heard a noise and went to sleep.', 'One day, I heard a noise.', 'Last winter, it was cold.'], ['MI', 'PR'], 'Suddenly introduces the problem.'),
        STEP(4, 'Middle: what did you do?', ['Then, I took my torch and went downstairs slowly.', 'Then, I went to the beach with my friends for a swim.', 'Eventually, I slept.', 'Yours faithfully, Ali'], ['MI'], 'Then moves the action forward.'),
        STEP(5, 'Middle: how did it get worse?', ['To make matters worse, all the lights went out!', 'To make matters worse, I found my lost keys under the sofa.', 'Finally, the lights came on.', 'Once upon a time, a light.'], ['MI', 'CF'], 'To make matters worse develops the conflict.'),
        STEP(6, 'Middle: one more problem.', ['Unfortunately, my phone battery was dead.', 'Fortunately, everything was fine and nothing happened.', 'In conclusion, phones are useful.', 'Last summer, I bought a phone.'], ['MI', 'CF'], 'Unfortunately adds bad news.'),
        STEP(7, 'End: how was the problem solved?', ['Finally, I saw that the wind had opened the window and knocked over a vase.', 'Finally, I went to Paris to visit my uncle and his children.', 'Suddenly, I heard another strange noise coming from the garden outside.', 'One day, there was a window.'], ['EN', 'SO'], 'The end explains the mystery.'),
        STEP(8, 'End: finish the story.', ['In the end, I closed the window and went back to bed, laughing.', 'In the end, the noise got louder and louder until the morning.', 'Then, the story began.', 'Write back soon!'], ['EN'], 'A calm, finished ending.')
      ] }
    ]
  };
})();

window.RS_COPY = {
  storeKey: 'levelup-2bac-u7-writing-story-q1-v2',
  heroKicker: 'LEVEL UP 2BAC · WRITING · UNIT 7',
  heroTitle: 'A STORY',
  heroQuiz: 'QUIZ 1',
  heroSub: 'A Story: Interactive Practice · 20 points',
  missionHtml: 'A <b>story</b> has <b>three stages</b>. Set the scene (<b>Who? Where? When?</b>), develop the problem (<b>What? How? Why?</b>), then solve it. Storytelling expressions link the events.',
  formula: 'Beginning → Middle → End',
  cats: ['👥 Characters', '🏞️ Setting', '⚡ Problem', '🔥 Conflict', '✅ Solution', '🔗 Expressions'],
  rulesHtml: [
    'Play the 6 activities in order. You have <b>one try</b> for each question: tap <b>Check</b> to see if you are right.',
    'Activity 6, <b>The Story Creator</b>: you build a complete story step by step.',
    'You see the correct answer and an explanation straight away, and you can review your mistakes at the end.'
  ],
  beforeLast: 'Next: The Story Creator. Build a complete story!',
  msgs: [
    'Outstanding! You can build a story from the beginning to the end.',
    'Well done! Review the activities where you lost points, then try again.',
    'You passed. Practise the three stages and the storytelling expressions again.',
    'Keep going! Re-read the three stages: beginning, middle, end. Then try again.'
  ],
  fullMarks: '🏆 Master storyteller! You can build a story from “Last winter…” to “In the end…”.'
};

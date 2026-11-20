/* Unit 6 · Grammar · Phrasal Verbs · Quiz 2 (out of 20). On the Unit 10 Grammar page (2026-11-19), like Units 1–5.
   The items are those of the Phrasal Verbs Quiz 2 built on 2026-11-12 (same sentences, same options, same points):
   Match-Up 8 pairs × 0.25 · Particle 8 × 0.25 · Context 8 × 0.5 · Sentence Builder 5 × 0.8 · Guess 6 × 0.5 ·
   Boss 10 × 0.5 = 20 points. No item is worth more than 1 point.
   The verb list and meanings come from data/verbs.js (PV_VERBS). The helpers below turn the short item formats
   into the engine's items: particle / context / guess / meaning → choice (o[0] correct), build → build (tiles),
   match → match. The final full stop is not a tile, so every correct word order can be built. */
window.RS_TAGS = [
  ['MN', 'Meaning', 'what the phrasal verb means'],
  ['PA', 'Form', 'the right particle: up, down, in, out, on, off …'],
  ['CO', 'Use', 'the phrasal verb that fits the sentence'],
  ['WO', 'Form', 'word order: the object can go before or after the particle'],
  ['CL', 'Use', 'a picture or a clue: find the phrasal verb']
];

(function () {
  var V = {};
  window.PV_VERBS.forEach(function (r) { V[r[0]] = { label: r[1], meaning: r[2] }; });
  function plain(id) { return V[id].label.replace(/\s*\(.*?\)\s*/g, ' ').trim(); }
  function expl(id) { return '“' + plain(id) + '” = ' + V[id].meaning + '.'; }
  function gap(s) { return s.replace('___', '______'); }
  function M(ids) { return { t: 'match', pairs: ids.map(function (id) { return [V[id].label, V[id].meaning, ['MN']]; }) }; }
  function P(v, s, a, o) { return { t: 'choice', p: gap(s), o: [a].concat(o), k: ['PA'], e: expl(v) }; }
  function C(v, s, o) { return { t: 'choice', p: gap(s), o: o.map(function (x) { return x[0]; }), k: ['CO'], e: expl(v) }; }
  function G(v, clue, o, img) { var q = { t: 'choice', p: clue, o: o.map(function (x) { return x[0]; }), k: ['CL'], e: expl(v) }; if (img) q.img = img; return q; }
  function N(v, s, o) {
    var vb = /\*\*(.+?)\*\*/.exec(s)[1];
    return { t: 'choice', p: s.replace(/\*\*(.+?)\*\*/, '“$1”'), ask: 'What does “' + vb + '” mean here?', o: o.map(function (id) { return V[id].meaning; }), k: ['MN'], e: expl(v) };
  }
  function tilesOf(s) { return s.replace(/\.$/, '').split(' '); }
  function B(v, w, alt) {
    var key = w.slice(); key[key.length - 1] = key[key.length - 1].replace(/\.$/, '');
    var q = { t: 'build', d: 'Use “' + plain(v) + '”: ' + V[v].meaning + '.', key: key, extra: [], k: alt ? ['WO'] : ['CO'], e: expl(v) + (alt ? ' The object can also go between the verb and the particle.' : '') };
    if (alt) q.alt = alt.map(tilesOf);
    return q;
  }

  window.RS_QUIZ = {
    title: 'Phrasal Verbs · Quiz 2',
    games: [
      { key: 'match', name: 'Phrasal Verb Match-Up', pts: 25, how: 'Tap or drag each verb to its meaning.', qs: [
        M(['PV08', 'PV12', 'PV30', 'PV52']),
        M(['PV56', 'PV38', 'PV28', 'PV42'])
      ] },
      { key: 'particle', name: 'Complete the Phrasal Verb', pts: 25, how: 'Choose the missing particle.', qs: [
        P('PV04', 'The washing machine broke ___, so we called a repairman.', 'down', ['into', 'away', 'off']),
        P('PV06', 'The Second World War broke ___ in 1939.', 'out', ['down', 'up', 'into']),
        P('PV24', 'At the start of the exam, the teacher hands ___ the question papers to all the students.', 'out', ['in', 'up', 'off']),
        P('PV22', 'I want to be a pilot when I grow ___.', 'up', ['out', 'on', 'off']),
        P('PV60', 'It’s dark in here. Can you turn ___ the light?', 'on', ['off', 'down', 'out']),
        P('PV58', 'The music is too loud! Please turn it ___ a little.', 'down', ['up', 'on', 'away']),
        P('PV20', 'The car stopped at the beach, and everyone got ___ of the car to look at the sea.', 'out', ['up', 'on', 'along']),
        P('PV34', 'I’m looking ___ my glasses. Have you seen them?', 'for', ['after', 'up', 'into'])
      ] },
      { key: 'context', name: 'Meaning in Context', pts: 50, how: 'Choose the phrasal verb that fits.', qs: [
        C('PV02', 'If you get lost in the old city, ___ directions at a shop.', [['ask for', 'PV02'], ['log on', 'PV30'], ['take off', 'PV54'], ['make up', 'PV38']]),
        C('PV10', 'The man fell into the river and ___ help.', [['called for', 'PV10'], ['checked in', 'PV12'], ['handed out', 'PV24'], ['stood for', 'PV52']]),
        C('PV16', 'I was near your house, so I decided to ___ and say hello.', [['drop in', 'PV16'], ['break down', 'PV04'], ['look into', 'PV36'], ['set out', 'PV48']]),
        C('PV18', 'Did you ___ why the shop was closed this morning?', [['find out', 'PV18'], ['take off', 'PV54'], ['put up with', 'PV42'], ['log on', 'PV30']]),
        C('PV32', 'My aunt ___ my little sister when my parents are at work.', [['looks after', 'PV32'], ['breaks down', 'PV04'], ['checks in', 'PV12'], ['turns on', 'PV60']]),
        C('PV36', 'The headteacher promised to ___ the problem of the broken windows.', [['look into', 'PV36'], ['grow up', 'PV22'], ['come back', 'PV14'], ['take off', 'PV54']]),
        C('PV44', 'We ___ a problem on our trip: the car battery died in the desert.', [['ran into', 'PV44'], ['handed out', 'PV24'], ['woke up', 'PV62'], ['stood for', 'PV52']]),
        C('PV48', 'The fishermen ___ at dawn and came back in the evening.', [['set out', 'PV48'], ['took after', 'PV56'], ['logged on', 'PV30'], ['made up', 'PV38']])
      ] },
      { key: 'build', name: 'Sentence Builder', pts: 80, how: 'Tap the words in order, then Check.', qs: [
        B('PV14', ['When', 'will', 'your', 'father', 'come', 'back', 'from', 'Paris?']),
        B('PV26', ['She', 'jotted', 'down', 'the', 'address', 'on', 'a', 'napkin.'], ['She jotted the address down on a napkin.']),
        B('PV50', ['My', 'cousin', 'wants', 'to', 'set', 'up', 'an', 'online', 'business.'], ['My cousin wants to set an online business up.']),
        B('PV62', ['The', 'baby', 'woke', 'up', 'in', 'the', 'middle', 'of', 'the', 'night.']),
        B('PV40', ['Please', 'pick', 'up', 'the', 'papers', 'from', 'the', 'floor.'], ['Please pick the papers up from the floor.'])
      ] },
      { key: 'guess', name: 'Guess the Phrasal Verb', pts: 50, how: 'Read the clue. Choose the phrasal verb.', qs: [
        G('PV54', 'Look at the picture. What is the plane doing?', [['take off', 'PV54'], ['look after', 'PV32'], ['drop in', 'PV16'], ['make up', 'PV38']], 'pv54'),
        G('PV46', 'In the forest, he suddenly met a bear. Which phrasal verb describes this?', [['run into', 'PV46'], ['hand out', 'PV24'], ['log on', 'PV30'], ['check in', 'PV12']], 'pv46'),
        G('PV40', 'Look at the picture. What is the boy doing with the box?', [['pick up', 'PV40'], ['stand for', 'PV52'], ['call for', 'PV10'], ['grow up', 'PV22']], 'pv40'),
        G('PV62', 'Look at the picture. It’s morning. What has the boy just done?', [['wake up', 'PV62'], ['bring about', 'PV08'], ['look into', 'PV36'], ['hand out', 'PV24']], 'pv62'),
        G('PV52', 'On a sign you read “UN”. It is a short form of “United Nations”. Which phrasal verb completes the idea: “UN ___ United Nations”?', [['stands for', 'PV52'], ['sets out', 'PV48'], ['breaks out', 'PV06'], ['takes off', 'PV54']]),
        G('PV38', 'Which phrasal verb means “to invent a story or an excuse”?', [['make up', 'PV38'], ['turn on', 'PV60'], ['look for', 'PV34'], ['set out', 'PV48']])
      ] },
      { key: 'boss', name: 'Phrasal Verb Boss Challenge', pts: 50, how: 'Final challenge: choose or build.', qs: [
        N('PV02', 'If you need more paper, **ask for** it at the office.', ['PV02', 'PV14', 'PV54', 'PV37']),
        P('PV10', 'The lost hikers called ___ help on their phone.', 'for', ['on', 'off', 'back']),
        B('PV32', ['Who', 'will', 'look', 'after', 'the', 'children', 'tonight?']),
        C('PV56', 'Rania ___ her father: she is tall and funny, just like him.', [['takes after', 'PV56'], ['puts up with', 'PV42'], ['breaks down', 'PV04'], ['checks in', 'PV12']]),
        N('PV18', 'When did you **find out** the truth about the accident?', ['PV18', 'PV48', 'PV62', 'PV58']),
        C('PV16', 'My uncle often ___ on Friday afternoons for a quick cup of tea.', [['drops in', 'PV16'], ['takes off', 'PV54'], ['looks into', 'PV36'], ['grows up', 'PV22']]),
        C('PV42', 'The neighbours’ dog barks all night. I can’t ___ it any more!', [['put up with', 'PV42'], ['check in', 'PV12'], ['look back on', 'PV33'], ['hand out', 'PV24']]),
        N('PV26', 'She quickly **jotted down** the phone number on her hand.', ['PV26', 'PV38', 'PV36', 'PV37']),
        P('PV44', 'We ran ___ some problems with the new computer program.', 'into', ['out', 'off', 'away']),
        B('PV24', ['The', 'teacher', 'handed', 'out', 'the', 'test', 'papers.'], ['The teacher handed the test papers out.'])
      ] }
    ]
  };
})();
/* Page text and storage key (read by app.js). missionHtml and rulesHtml may use <b>; everything else is plain text.
   Keep storeKey unchanged, or saved attempts are lost. */
window.RS_COPY = {
  storeKey: 'levelup-2bac-u6-phrasal-verbs-q2-v1',
  heroKicker: 'LEVEL UP 2BAC · GRAMMAR · UNIT 6',
  heroTitle: 'PHRASAL VERBS',
  heroQuiz: 'QUIZ 2',
  heroSub: 'The Phrasal Verb Challenge · 20 points',
  missionHtml: 'A <b>phrasal verb</b> is a verb + a particle (<b>up, down, in, out, on, off, for, after</b> …), and together they have a <b>new meaning</b>: <b>give up</b> = stop trying. Learn the meaning, choose the right particle, and remember that the object can often go <b>between</b> the verb and the particle: fill <b>in</b> the form = fill the form <b>in</b>.',
  formula: 'verb + particle = a new meaning',
  cats: ['🔗 Match‑Up', '🧩 Particle', '📖 Context', '🧱 Builder', '🖼️ Guess', '👑 Boss'],
  rulesHtml: [
    'Play the 6 games in order. You have <b>one try</b> for each question.',
    'Matching: <b>0.25</b> per pair · Particle: <b>0.25</b> · Context, Guess and Boss: <b>0.5</b> · Sentence Builder: <b>0.8</b>. Total: <b>20 points</b>.',
    'You see the correct answer and the meaning straight away, and you can review your mistakes at the end.'
  ],
  beforeBoss: 'Next: the Phrasal Verb Boss Challenge.',
  fullMarks: '🏆 Achievement unlocked: Phrasal Verb Champion! Every question was answered correctly.'
};

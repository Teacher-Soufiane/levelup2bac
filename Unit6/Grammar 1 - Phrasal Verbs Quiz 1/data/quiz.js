/* Unit 6 · Grammar · Phrasal Verbs · Quiz 1 (out of 20). On the Unit 10 Grammar page (2026-11-19), like Units 1–5.
   The items are those of the Phrasal Verbs Quiz 1 built on 2026-11-12 (same sentences, same options, same points):
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
    title: 'Phrasal Verbs · Quiz 1',
    games: [
      { key: 'match', name: 'Phrasal Verb Match-Up', pts: 25, how: 'Tap or drag each verb to its meaning.', qs: [
        M(['PV01', 'PV09', 'PV15', 'PV29']),
        M(['PV33', 'PV47', 'PV53', 'PV51'])
      ] },
      { key: 'particle', name: 'Complete the Phrasal Verb', pts: 25, how: 'Choose the missing particle.', qs: [
        P('PV03', 'The dog broke ___ from its owner and ran into the street.', 'away', ['up', 'on', 'along']),
        P('PV05', 'Thieves broke ___ the shop at night and stole three phones.', 'into', ['away', 'out', 'off']),
        P('PV07', 'Karim and Nadia broke ___ last month. They are not together any more.', 'up', ['into', 'away', 'on']),
        P('PV21', 'Get ___! It’s seven o’clock and you’re still in bed!', 'up', ['along', 'through', 'over']),
        P('PV41', 'It’s raining. Put ___ your raincoat before you go out.', 'on', ['off', 'up', 'in']),
        P('PV59', 'Please turn ___ your phones. You can’t use them during the exam.', 'off', ['up', 'along', 'away']),
        P('PV61', 'I can’t hear the news. Can you turn the TV ___, please?', 'up', ['off', 'in', 'away']),
        P('PV23', 'Students must hand ___ their essays to the teacher before Friday.', 'in', ['out', 'up', 'away'])
      ] },
      { key: 'context', name: 'Meaning in Context', pts: 50, how: 'Choose the phrasal verb that fits.', qs: [
        C('PV11', 'The teacher said, “Please ___ reading. I’ll be back in five minutes.”', [['carry on', 'PV11'], ['break up', 'PV07'], ['look up', 'PV37'], ['take in', 'PV53']]),
        C('PV19', 'Amine is very friendly. He ___ everyone in his class.', [['gets along with', 'PV19'], ['takes in', 'PV53'], ['looks forward to', 'PV35'], ['leaves behind', 'PV29']]),
        C('PV25', 'After school, we usually ___ at the café near the park and chat.', [['hang out', 'PV25'], ['apply for', 'PV01'], ['cut down', 'PV15'], ['turn off', 'PV59']]),
        C('PV31', 'After six months abroad, Yassine ___ his mother’s couscous.', [['longed for', 'PV31'], ['looked up', 'PV37'], ['took up', 'PV55'], ['broke into', 'PV05']]),
        C('PV37', 'I didn’t know the word “fluent”, so I ___ it in my dictionary.', [['looked up', 'PV37'], ['set up', 'PV49'], ['turned up', 'PV61'], ['brought up', 'PV09']]),
        C('PV57', 'The company offered Salma a job, but she ___ the offer because the salary was too low.', [['turned down', 'PV57'], ['took in', 'PV53'], ['cut down on', 'PV15'], ['ran into', 'PV45']]),
        C('PV13', 'While I was tidying my desk, I ___ a letter from an old friend.', [['came across', 'PV13'], ['cut down', 'PV15'], ['hung out', 'PV25'], ['applied for', 'PV01']]),
        C('PV49', 'Before the party, the students ___ the classroom with tables and balloons.', [['set up', 'PV49'], ['broke up', 'PV07'], ['looked back', 'PV33'], ['slowed down', 'PV51']])
      ] },
      { key: 'build', name: 'Sentence Builder', pts: 80, how: 'Tap the words in order, then Check.', qs: [
        B('PV35', ['We', 'are', 'looking', 'forward', 'to', 'the', 'school', 'trip.']),
        B('PV17', ['Please', 'fill', 'in', 'this', 'form', 'with', 'your', 'name.'], ['Please fill this form in with your name.']),
        B('PV55', ['My', 'sister', 'took', 'up', 'swimming', 'last', 'summer.']),
        B('PV63', ['Write', 'down', 'the', 'new', 'words', 'in', 'your', 'notebook.'], ['Write the new words down in your notebook.']),
        B('PV39', ['She', 'picked', 'up', 'English', 'by', 'watching', 'films.'], ['She picked English up by watching films.'])
      ] },
      { key: 'guess', name: 'Guess the Phrasal Verb', pts: 50, how: 'Read the clue. Choose the phrasal verb.', qs: [
        G('PV43', 'Look at the picture. What is the boy doing?', [['run away', 'PV43'], ['take up', 'PV55'], ['look back', 'PV33'], ['fill in', 'PV17']], 'pv43'),
        G('PV05', 'Look at the picture. What is the man doing?', [['break into', 'PV05'], ['bring up', 'PV09'], ['hang out', 'PV25'], ['get along with', 'PV19']], 'pv05'),
        G('PV41', 'Look at the picture. What is the boy doing with his jacket?', [['put on', 'PV41'], ['apply for', 'PV01'], ['slow down', 'PV51'], ['cut down', 'PV15']], 'pv41'),
        G('PV45', 'You go to the market and, by chance, you meet your old primary-school teacher there. Which phrasal verb describes this?', [['run into', 'PV45'], ['turn down', 'PV57'], ['take up', 'PV55'], ['get up', 'PV21']]),
        G('PV27', 'Which phrasal verb means “to continue doing something even when there are problems”?', [['keep on', 'PV27'], ['break up', 'PV07'], ['put on', 'PV41'], ['look up', 'PV37']]),
        G('PV31', 'Omar lives in Canada. He misses Morocco and wants very much to see his family again. Which phrasal verb describes his feeling?', [['long for', 'PV31'], ['turn off', 'PV59'], ['fill in', 'PV17'], ['bring up', 'PV09']])
      ] },
      { key: 'boss', name: 'Phrasal Verb Boss Challenge', pts: 50, how: 'Final challenge: choose or build.', qs: [
        C('PV11', 'Don’t stop! ___ talking; I’m listening.', [['Carry on', 'PV11'], ['Take in', 'PV53'], ['Break away', 'PV03'], ['Look up', 'PV37']]),
        N('PV63', 'Please **write down** the date of the exam.', ['PV63', 'PV55', 'PV33', 'PV42']),
        P('PV57', 'She turned ___ the job offer because she wanted to continue her studies.', 'down', ['off', 'up', 'along']),
        C('PV47', 'You can always ___ me. I will help you when you need me.', [['rely on', 'PV47'], ['break up', 'PV07'], ['take in', 'PV53'], ['turn off', 'PV59']]),
        N('PV39', 'Lina **picked up** some Italian during her holiday in Rome.', ['PV39', 'PV57', 'PV16', 'PV29']),
        P('PV15', 'My doctor told me to cut down ___ salt and sugar.', 'on', ['in', 'at', 'of']),
        C('PV01', 'Hamza wants to study in Rabat, so he will ___ a place at the university.', [['apply for', 'PV01'], ['hang out', 'PV25'], ['break into', 'PV05'], ['slow down', 'PV51']]),
        N('PV53', 'The lesson was so fast that I couldn’t **take in** all the information.', ['PV53', 'PV11', 'PV07', 'PV35']),
        B('PV09', ['My', 'grandmother', 'brought', 'up', 'five', 'children.'], ['My grandmother brought five children up.']),
        B('PV29', ['I', 'left', 'my', 'umbrella', 'behind', 'at', 'the', 'café.'], ['I left behind my umbrella at the café.'])
      ] }
    ]
  };
})();
/* Page text and storage key (read by app.js). missionHtml and rulesHtml may use <b>; everything else is plain text.
   Keep storeKey unchanged, or saved attempts are lost. */
window.RS_COPY = {
  storeKey: 'levelup-2bac-u6-phrasal-verbs-q1-v1',
  heroKicker: 'LEVEL UP 2BAC · GRAMMAR · UNIT 6',
  heroTitle: 'PHRASAL VERBS',
  heroQuiz: 'QUIZ 1',
  heroSub: 'The Phrasal Verb Challenge · 20 points',
  missionHtml: 'A <b>phrasal verb</b> is a verb + a particle (<b>up, down, in, out, on, off, away, into</b> …), and together they have a <b>new meaning</b>: <b>give up</b> = stop trying. Learn the meaning, choose the right particle, and remember that the object can often go <b>between</b> the verb and the particle: pick <b>up</b> the papers = pick the papers <b>up</b>.',
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

/* Unit 9 · Grammar · Zero Conditional · Quiz 1 (out of 10). "Zero Conditional Challenge: Facts, Rules & Results!"
   2026-11-19: moved to the Unit 10 page (shared engine, RS_COPY.max = 1000 keeps the teacher's 10-point total).
   The teacher's items and keys are kept; typed answers are now short drop-down lists (L), and the boss rewrite
   "Plants die if you don't water them" is a sentence builder.
   Points are in hundredths (25 = 0.25 point); the total must be 1000. Every item lists k = the skills it tests (RS_TAGS).
   In choice and err items the first option is the correct one; the app shuffles (True/False items, q.tf, always show True first).
   Only the zero conditional is a learning target: "will" appears only as a wrong form to reject. */
window.RS_TAGS = [
  ['TR', 'Meaning', 'General truths: facts, rules and habits that are always true'],
  ['CR', 'Meaning', 'Condition → result: the result always follows'],
  ['PS', 'Form', 'Present simple in both clauses (not will, not the past)'],
  ['SV', 'Form', 'Subject–verb agreement: he / she / it + -s'],
  ['NG', 'Form', 'Negatives: don’t / doesn’t + base verb'],
  ['OR', 'Form', 'Clause order: If-clause first + comma, or result first with no comma'],
  ['WH', 'Form', 'If or when: when can replace if for general truths']
];

(function () {
  function L(o) { return { a: [o[0]], o: o.slice() }; }      /* a gap with its own short list, o[0] is right */
  function X(t) { return { t: t, x: 1 }; }                   /* the wrong words in the Boss error item */

  window.RS_QUIZ = {
    title: 'Zero Conditional · Quiz 1',
    games: [
      { key: 'fact', name: 'Fact or Fiction?', pts: 25, how: 'True or false?', qs: [
        { t: 'choice', tf: 1, p: 'If ice gets warm, it melts.', o: ['True', 'False'], k: ['TR'], e: 'True: ice always melts above 0°C. If + present simple, present simple = a general truth.' },
        { t: 'choice', tf: 1, p: 'If plants don’t get water, they grow faster.', o: ['False', 'True'], k: ['TR', 'CR'], e: 'False: if plants don’t get water, they die.' },
        { t: 'choice', tf: 1, p: 'If you mix red and yellow paint, you get orange.', o: ['True', 'False'], k: ['TR'], e: 'True: red + yellow always gives orange. The result never changes.' },
        { t: 'choice', tf: 1, p: 'If you heat metal, it gets smaller.', o: ['False', 'True'], k: ['TR', 'CR'], e: 'False: if you heat metal, it expands (it gets bigger).' },
        { t: 'choice', tf: 1, p: 'When the sun sets, it gets dark.', o: ['True', 'False'], k: ['TR', 'WH'], e: 'True: this happens every day. When can replace if for things that always happen.' },
        { t: 'choice', tf: 1, p: 'If you drop a stone into water, it floats.', o: ['False', 'True'], k: ['TR', 'CR'], e: 'False: if you drop a stone into water, it sinks.' }
      ] },
      { key: 'match', name: 'Match the Cause and Result', pts: 25, how: 'Tap or drag to match.', qs: [
        { t: 'match', round: 'Round 1 of 2', pairs: [
          ['If you mix red and blue,', 'you get purple.', ['CR']],
          ['If people don’t sleep enough,', 'they feel tired.', ['CR', 'NG']],
          ['If water reaches 0°C,', 'it turns into ice.', ['CR']]] },
        { t: 'match', round: 'Round 2 of 2', pairs: [
          ['If you don’t refrigerate milk,', 'it goes bad.', ['CR', 'NG']],
          ['If it rains heavily,', 'the streets sometimes flood.', ['CR']],
          ['If you press this button,', 'the computer starts.', ['CR']]] }
      ] },
      { key: 'form', name: 'Choose the Correct Form', pts: 25, how: 'Choose the correct forms.', qs: [
        { t: 'choice', p: 'If people ____ too much sugar, they ____ weight.', o: ['eat / gain', 'eats / gains', 'ate / gained', 'will eat / will gain'], k: ['PS', 'SV'], e: 'Zero conditional: present simple in both clauses. “people” is plural → eat, gain (no -s).' },
        { t: 'choice', p: 'If a baby ____ hungry, it ____.', o: ['is / cries', 'are / cry', 'is / will cry', 'was / cried'], k: ['PS', 'SV'], e: '“a baby” and “it” are singular → is, cries. No will: this always happens.' },
        { t: 'choice', p: 'Water ____ if you ____ it to 100°C at sea level.', o: ['boils / heat', 'boil / heats', 'will boil / heat', 'boils / will heat'], k: ['PS', 'SV', 'OR'], e: 'The result can come first. Water → boils; you → heat. Present simple in both clauses.' },
        { t: 'choice', p: 'If my sister ____ coffee at night, she ____ sleep well.', o: ['drinks / doesn’t', 'drink / don’t', 'drinks / don’t', 'will drink / doesn’t'], k: ['SV', 'NG'], e: 'she → drinks, and the negative is doesn’t + base verb (doesn’t sleep).' },
        { t: 'choice', p: 'When you ____ ice in the sun, it ____ quickly.', o: ['leave / melts', 'leave / melt', 'leaves / melts', 'left / will melt'], k: ['SV', 'WH'], e: 'you → leave; it → melts. When = if for things that always happen.' },
        { t: 'choice', p: 'If students ____ regularly, they ____ their English.', o: ['practise / improve', 'practises / improves', 'practise / will improve', 'practised / improved'], k: ['PS', 'SV'], e: 'students, they → practise, improve. Present simple in both clauses.' },
        { t: 'choice', p: 'Plants ____ if they ____ get enough sunlight.', o: ['die / don’t', 'dies / doesn’t', 'die / doesn’t', 'will die / don’t'], k: ['SV', 'NG', 'OR'], e: 'plants, they → die, don’t. No comma when the result comes first.' },
        { t: 'choice', p: 'If you ____ a magnet near iron, it ____ the iron.', o: ['put / attracts', 'put / attract', 'puts / attracts', 'will put / attracts'], k: ['PS', 'SV'], e: 'you → put; it (the magnet) → attracts. Present simple in both clauses.' }
      ] },
      { key: 'build', name: 'Sentence Builder', pts: 40, how: 'Build it. One is extra.', qs: [
        { t: 'build', d: 'plants · no water → die', key: ['If', 'plants', 'don’t', 'get', 'water,', 'they', 'die'], extra: ['will'], k: ['NG', 'PS', 'OR'], e: 'If-clause first, then a comma: If plants don’t get water, they die. No will.' },
        { t: 'build', d: 'heat ice → it melts', key: ['If', 'you', 'heat', 'ice,', 'it', 'melts'], extra: ['melted'], k: ['PS', 'SV'], e: 'Present simple in both clauses: heat, melts (it → -s).' },
        { t: 'build', d: 'ice · put in water → floats (result first)', key: ['Ice', 'floats', 'if', 'you', 'put', 'it', 'in', 'water'], extra: ['will'], k: ['OR', 'PS'], e: 'Result first: Ice floats if you put it in water. No comma before if.' },
        { t: 'build', d: 'people · no exercise → gain weight (result first)', key: ['People', 'gain', 'weight', 'if', 'they', 'don’t', 'exercise'], extra: ['doesn’t'], k: ['OR', 'NG', 'SV'], e: 'they → don’t exercise (not doesn’t). Result first, no comma.' },
        { t: 'build', d: 'wake up late → miss the bus', key: ['When', 'I', 'wake', 'up', 'late,', 'I', 'miss', 'the', 'bus'], extra: ['missed'], k: ['WH', 'PS'], e: 'A habit: When I wake up late, I miss the bus. Present simple in both clauses.' }
      ] },
      { key: 'rule', name: 'Complete the Rule', pts: 25, how: 'Choose the verb forms.', qs: [
        { t: 'gapt', s: ['If you freeze water, it ', L(['turns', 'turn', 'will turn']), ' (turn) into ice.'], k: ['PS', 'SV'], e: 'it → turns. Present simple, not will turn.' },
        { t: 'gapt', s: ['Plants die if they ', L(['don’t get', 'doesn’t get', 'won’t get']), ' (not get) enough sunlight.'], k: ['NG', 'OR'], e: 'they → don’t get (do not + base verb).' },
        { t: 'gapt', s: ['If my brother ', L(['plays', 'play', 'played']), ' (play) video games late, he ', L(['feels', 'feel', 'will feel']), ' (feel) tired the next morning.'], k: ['SV', 'PS'], e: 'he → plays, feels: he / she / it + -s in both clauses.' },
        { t: 'gapt', s: ['When the sun ', L(['goes', 'go', 'went']), ' (go) down, the desert ', L(['gets', 'get', 'will get']), ' (get) cold very quickly.'], k: ['SV', 'WH'], e: 'the sun → goes; the desert → gets. This happens every night.' }
      ] },
      { key: 'boss', name: 'Zero Conditional Boss Challenge', pts: 30, how: 'The final challenge.', qs: [
        { t: 'err', round: 'Error correction', fr: 'Tap the wrong words:', w: ['If', 'water', 'reaches', '100°C', ',', 'it', X('will boil'), '.'],
          o: ['If water reaches 100°C, it boils.', 'If water reaches 100°C, it boil.', 'If water reached 100°C, it boils.'], k: ['PS', 'SV'], e: 'This is always true, so we use the present simple, not will: it boils.' },
        { t: 'gapt', round: 'Sentence completion', s: ['If you mix oil and water, the oil ', L(['floats', 'float', 'will float']), ' (float) on top.'], k: ['PS', 'SV', 'TR'], e: 'the oil → floats: present simple for a scientific fact.' },
        { t: 'choice', round: 'If or when', p: 'If you heat butter, it melts.', ask: 'Which word can replace “If” with the same meaning?', o: ['When', 'Unless', 'Although', 'Because'], k: ['WH'], e: 'For general truths, when = if: When you heat butter, it melts.' },
        { t: 'build', round: 'Sentence transformation', d: 'If you don’t water plants, they die. → Start with the result.', key: ['Plants', 'die', 'if', 'you', 'don’t', 'water', 'them'], extra: ['will'], k: ['OR', 'NG'], e: 'Result first, no comma: Plants die if you don’t water them.' },
        { t: 'choice', round: 'General truth', p: 'Which sentence is a correct zero conditional?', o: ['If you touch a hot pan, you burn your hand.', 'If you touch a hot pan, you will burn your hand.', 'If you touched a hot pan, you burned your hand.', 'If you touch a hot pan, you burns your hand.'], k: ['PS', 'SV', 'TR'], e: 'Present simple in both clauses: touch / burn (you → no -s).' }
      ] }
    ]
  };
})();

window.RS_COPY = {
  max: 1000,
  storeKey: 'levelup-2bac-u9-zero-conditional-q1-v2',
  heroKicker: 'LEVEL UP 2BAC · GRAMMAR · UNIT 9',
  heroTitle: 'ZERO CONDITIONAL',
  heroQuiz: 'QUIZ 1',
  heroSub: 'Zero Conditional Challenge: Facts, Rules & Results! · 10 points',
  missionHtml: 'We use the <b>zero conditional</b> for things that are <b>always true</b>: facts, rules, habits and results you can predict.',
  formula: 'If + present simple, present simple',
  cats: ['🔬 Science', '💪 Health', '🌳 Nature', '📚 School', '💻 Technology', '⏰ Routines'],
  rulesHtml: [
    'Play the 6 games in order. You have <b>one try</b> for each question.',
    'Games 1–5 prepare you for game 6, the <b>Boss Challenge</b>: you correct, complete and rebuild sentences.',
    'You see the correct answer and an explanation straight away, and you can review your mistakes at the end.'
  ],
  beforeBoss: 'Next: the Boss Challenge.',
  fullMarks: '🏆 Perfect! You are a Zero Conditional expert: if + present simple, present simple. Every time!'
};

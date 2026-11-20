/* Unit 6 · the 63 phrasal verbs (source: the 63 pictures in "E:\phrasal verbs"; meanings from the hub verb list the teacher approved on 2026-11-11).
   No Arabic translations were supplied, so none are shown. */
window.PV_VERBS = [
  ['PV01', 'apply for', 'formally ask for a job, a place or a document'],
  ['PV02', 'ask for', 'say that you want someone to give you something'],
  ['PV03', 'break away', 'escape from someone who is holding you'],
  ['PV04', 'break down', 'stop working (a car or a machine)'],
  ['PV05', 'break into', 'enter a building by force to steal'],
  ['PV06', 'break out', 'start suddenly (a fire, a war, a disease)'],
  ['PV07', 'break up', 'end a romantic relationship'],
  ['PV08', 'bring about', 'cause something to happen'],
  ['PV09', 'bring up', 'care for a child until he or she is an adult'],
  ['PV10', 'call for', 'shout or phone to ask for help'],
  ['PV11', 'carry on', 'continue doing something'],
  ['PV12', 'check in', 'arrive and register at a hotel or an airport'],
  ['PV13', 'come across', 'find something by chance'],
  ['PV14', 'come back', 'return to a place'],
  ['PV15', 'cut down (on)', 'eat or use less of something'],
  ['PV16', 'drop in', 'visit someone briefly without planning it'],
  ['PV17', 'fill in', 'complete a form with information'],
  ['PV18', 'find out', 'discover a fact or the truth'],
  ['PV19', 'get along with', 'have a friendly relationship with someone'],
  ['PV20', 'get out', 'leave a room, a building or a car'],
  ['PV21', 'get up', 'leave your bed after sleeping'],
  ['PV22', 'grow up', 'become an adult'],
  ['PV23', 'hand in', 'give your work to a teacher'],
  ['PV24', 'hand out', 'give something to each person in a group'],
  ['PV25', 'hang out', 'spend free time with friends'],
  ['PV26', 'jot down', 'write something quickly, as a short note'],
  ['PV27', 'keep on', 'continue doing something despite problems'],
  ['PV28', 'keep up with', 'go at the same speed as other people'],
  ['PV29', 'leave behind', 'forget to take something with you'],
  ['PV30', 'log on', 'enter a computer system with your password'],
  ['PV31', 'long for', 'want something very much'],
  ['PV32', 'look after', 'take care of someone'],
  ['PV33', 'look back (on)', 'think about something in the past'],
  ['PV34', 'look for', 'try to find something'],
  ['PV35', 'look forward to', 'feel happy about something that will happen'],
  ['PV36', 'look into', 'examine a problem or a crime carefully'],
  ['PV37', 'look up', 'search for information in a dictionary or online'],
  ['PV38', 'make up', 'invent a story or an excuse'],
  ['PV39', 'pick up (a language)', 'learn something without formal lessons'],
  ['PV40', 'pick up (an object)', 'lift something from the ground'],
  ['PV41', 'put on', 'dress yourself in clothes'],
  ['PV42', 'put up with', 'accept something annoying without complaining'],
  ['PV43', 'run away', 'leave quickly to escape from danger'],
  ['PV44', 'run into (a problem)', 'suddenly have a difficulty'],
  ['PV45', 'run into (someone)', 'meet someone by chance'],
  ['PV46', 'run into (something)', 'meet something unexpectedly'],
  ['PV47', 'rely on', 'depend on someone for help or support'],
  ['PV48', 'set out', 'start a journey'],
  ['PV49', 'set up (organise)', 'prepare or arrange something for an event'],
  ['PV50', 'set up (a business)', 'start a company or a business'],
  ['PV51', 'slow down', 'reduce speed'],
  ['PV52', 'stand for', 'be a short form of a name'],
  ['PV53', 'take in', 'understand and remember information'],
  ['PV54', 'take off', 'leave the ground (a plane)'],
  ['PV55', 'take up', 'start a new hobby or activity'],
  ['PV56', 'take after', 'look or behave like an older relative'],
  ['PV57', 'turn down (an offer)', 'refuse an offer or a request'],
  ['PV58', 'turn down (the volume)', 'reduce the sound or the heat'],
  ['PV59', 'turn off', 'stop a machine or a light'],
  ['PV60', 'turn on', 'start a machine or a light'],
  ['PV61', 'turn up', 'increase the sound or the heat'],
  ['PV62', 'wake up', 'stop sleeping'],
  ['PV63', 'write down', 'write something on paper so you remember it']
];

/* Verbs that are easy to confuse, or the same verb with another meaning.
   Two verbs from one group are never offered in the same question or matching board. */
window.PV_GROUPS = [
  ['PV11', 'PV27'],                         // carry on / keep on
  ['PV26', 'PV63', 'PV17'],                 // jot down / write down / fill in
  ['PV13', 'PV18', 'PV44', 'PV45', 'PV46'], // come across / find out / run into
  ['PV21', 'PV62'],                         // get up / wake up
  ['PV03', 'PV20', 'PV43', 'PV48'],         // break away / get out / run away / set out
  ['PV31', 'PV35'],                         // long for / look forward to
  ['PV01', 'PV02', 'PV10'],                 // apply for / ask for / call for
  ['PV39', 'PV40', 'PV53', 'PV55'],         // pick up ×2 / take in / take up
  ['PV19', 'PV25'],                         // get along with / hang out
  ['PV09', 'PV22', 'PV32', 'PV56'],         // bring up / grow up / look after / take after
  ['PV34', 'PV36', 'PV37'],                 // look for / look into / look up
  ['PV57', 'PV58', 'PV59'],                 // turn down ×2 / turn off
  ['PV49', 'PV50'],                         // set up ×2
  ['PV14', 'PV16']                          // come back / drop in
];

/* Unit 8 · Grammar · Linking Words · Quiz 1 (out of 20). Logic; content is in data/quiz.js.
   Built on the Quiz 2 engine (adds the sort type). Progress is kept in this browser only (localStorage). */
(function () {
'use strict';
if (window.__rsqInit) return;
window.__rsqInit = true;

var STORE_KEY = 'levelup-2bac-u8-linking-words-q1-v1';
var BANDS = [[18, 'Excellent!'], [16, 'Very Good'], [14, 'Good'], [12, 'Fairly Good'], [10, 'Pass'], [0, 'Fail']];
var LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

function $(s) { return document.querySelector(s); }
function esc(t) { return String(t).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
function range(n) { var a = []; for (var i = 0; i < n; i++) a.push(i); return a; }
function say(t) { var m = $('#liveMsg'); if (m) m.textContent = t; }
function fmt(h) { return String(Math.round(h) / 100); }
function band(h) { var s = h / 100; for (var i = 0; i < BANDS.length; i++) if (s >= BANDS[i][0]) return BANDS[i][1]; return 'Fail'; }
function isTok(w) { return typeof w === 'object'; }
function isPunct(w) { return typeof w === 'string' && /^[.,!?;:]+$/.test(w); }
function wtext(w) { return isTok(w) ? w.t : w; }
/* answer normalising: case, quotes, spaces, commas, final full stop, leading "…"; short forms written out */
function norm(s) {
  s = String(s).replace(/[‘’`´]/g, "'").replace(/[“”"]/g, '').toLowerCase().replace(/,/g, ' ').replace(/\s+/g, ' ').trim();
  return s.replace(/^(\.\.\.|…)\s*/, '').replace(/[.!…]+$/, '').trim();
}
function expand(s, dd) {
  s = s.replace(/\bcan't\b/g, 'can not').replace(/\bcannot\b/g, 'can not').replace(/\bwon't\b/g, 'will not').replace(/n't\b/g, ' not').replace(/\bi'm\b/g, 'i am');
  if (dd) s = s.replace(/'d\b/g, ' ' + dd);
  return s.replace(/\s+/g, ' ').trim();
}
function clean(s, dd) { return expand(norm(s), dd); }

/* ---------- data ---------- */
var D, TAG = {}, GROUPS = [];
function fatal(msg) { var a = $('#app'); if (a) a.innerHTML = '<div class="fatal" role="alert">' + esc(msg) + '</div>'; window.__rsqReady = true; }
function gapsOf(q) { return q.s.filter(isTok); }
function errsOf(q) { var a = []; q.w.forEach(function (w, i) { if (isTok(w) && w.x) a.push(i); }); return a; }
function maxPts(g, q) { return q.t === 'match' ? g.pts * q.pairs.length : q.t === 'sort' ? g.pts * q.cards.length : q.t === 'gapt' ? g.pts * gapsOf(q).length : q.t === 'exam' ? g.pts * (q.checks.length + 1) : g.pts; }
function tagsOf(q) {
  if (q.t === 'match') { var a = []; q.pairs.forEach(function (p) { a = a.concat(p[2]); }); return a; }
  if (q.t === 'sort') return q.cards.map(function (cd) { return cd[2]; });
  return q.k || [];
}
/* every accepted full answer of an exam item: all combinations of its alternatives */
function answers(q) {
  var out = [''];
  q.ans.forEach(function (seg) { var alts = typeof seg === 'string' ? [seg] : seg, nx = []; out.forEach(function (o) { alts.forEach(function (a) { nx.push(o + a); }); }); out = nx; });
  return out.map(function (a) { return clean(a, q.dd); });
}
/* the answer as shown after Check: the given words are printed in bold, so drop them if the student typed them again */
function shown(q, raw) {
  var f = String(q.f).replace(/\s*(\.\.\.|…)\s*$/, '').trim(), s = String(raw).trim();
  if (f && s.toLowerCase().indexOf(f.toLowerCase()) === 0) s = s.slice(f.length).trim();
  return s.replace(/^(\.\.\.|…)\s*/, '');
}
/* what the student typed after the given words (the given words are removed if they typed them again) */
function completion(q, raw) {
  var s = clean(raw, q.dd), pre = clean(q.pre);
  if (s.indexOf(pre + ' ') === 0 || s === pre) s = s.slice(pre.length).trim();
  s = s.replace(/^(\.\.\.|…)\s*/, '');
  (q.lead || []).forEach(function (w) { if (s.indexOf(w + ' ') === 0) s = s.slice(w.length + 1); });
  return s.trim();
}
function grade(q, raw) {
  /* marking points count only when the answer is the reported sentence (it keeps the sentence's key word) */
  var s = completion(q, raw), real = !q.core || new RegExp('\\b' + q.core + '\\b').test(s);
  var ok = q.checks.map(function (c) { return real && new RegExp(c[1]).test(s); });
  ok.push(answers(q).indexOf(s) >= 0);
  if (ok[ok.length - 1]) ok = ok.map(function () { return true; });   /* an accepted answer passes every point */
  return ok;
}
function validate() {
  var errs = [], total = 0;
  if (!window.RS_TAGS || !window.RS_QUIZ) return ['The data file did not load.'];
  D = window.RS_QUIZ;
  RS_TAGS.forEach(function (r) { TAG[r[0]] = { id: r[0], group: r[1], label: r[2] }; if (GROUPS.indexOf(r[1]) < 0) GROUPS.push(r[1]); });
  if (D.games.length !== 6) errs.push('The quiz must have 6 games.');
  D.games.forEach(function (g, gi) {
    g.qs.forEach(function (q, qi) {
      var where = 'Game ' + (gi + 1) + ' item ' + (qi + 1) + ': ';
      total += maxPts(g, q);
      tagsOf(q).forEach(function (r) { if (!TAG[r]) errs.push(where + 'unknown skill ' + r); });
      if (q.t === 'match' && q.pairs.length > LETTERS.length) errs.push(where + 'too many pairs');
      if (q.t === 'err' && !errsOf(q).length) errs.push(where + 'no wrong word');
      if (q.t === 'err' && g.pts % 2) errs.push(where + 'points must split into two steps');
      if (q.t === 'gapt' && !gapsOf(q).length) errs.push(where + 'no gaps');
      if (q.t === 'exam') { try { q.checks.forEach(function (c) { new RegExp(c[1]); }); } catch (e) { errs.push(where + 'bad check'); } }
    });
  });
  if (total !== 2000) errs.push('The quiz totals ' + fmt(total) + ' points, not 20.');
  return errs;
}

/* ---------- storage ---------- */
var store = { best: null, att: null }, storeOk = true;
try { var raw = window.localStorage.getItem(STORE_KEY); if (raw) { var pr = JSON.parse(raw); if (pr && 'att' in pr) store = pr; } } catch (e) { storeOk = false; }
function save() { if (!storeOk) return; try { window.localStorage.setItem(STORE_KEY, JSON.stringify(store)); } catch (e) { storeOk = false; } }

/* ---------- attempt ---------- */
var view = { page: 'intro', confirm: false }, draft = {};
function newAttempt() {
  var opt = {}, order = [];
  D.games.forEach(function (g, gi) {
    /* rounds and the national-exam questions keep their order; the rest are shuffled */
    order.push(g.exam || g.qs[0].t === 'match' || g.qs[0].t === 'sort' ? range(g.qs.length) : shuffle(range(g.qs.length)));
    g.qs.forEach(function (q, qi) {
      var id = gi + '-' + qi;
      if (q.t === 'choice' || q.t === 'err') opt[id] = shuffle(range(q.o.length));
      else if (q.t === 'match') opt[id] = { v: shuffle(range(q.pairs.length)), m: shuffle(range(q.pairs.length)) };
      else if (q.t === 'build') opt[id] = shuffle(range(q.key.length + q.extra.length));
      else if (q.t === 'sort') opt[id] = shuffle(range(q.cards.length));
    });
  });
  return { order: order, opt: opt, rec: {}, part: {}, g: 0, i: 0, phase: 'play', done: false };
}
function cur() { var A = store.att, g = D.games[A.g], qi = A.order[A.g][A.i]; return { A: A, g: g, gi: A.g, q: g.qs[qi], id: A.g + '-' + qi }; }
function lock(c, rec) {
  if (c.A.rec[c.id]) return;
  rec.max = maxPts(c.g, c.q);
  c.A.rec[c.id] = rec;
  delete draft[c.id];
  save();
  say(rec.pts === rec.max ? 'Correct.' : rec.pts ? 'Partly correct.' : 'Not correct.');
  render();
}
function gameScore(A, gi) { var s = 0, m = 0, g = D.games[gi]; g.qs.forEach(function (q, qi) { m += maxPts(g, q); var r = A.rec[gi + '-' + qi]; if (r) s += r.pts; }); return { s: s, m: m }; }
function total(A) { var s = 0; Object.keys(A.rec).forEach(function (k) { s += A.rec[k].pts; }); return s; }
function tiles(q) { return q.key.concat(q.extra); }

/* ---------- render ---------- */
function render() {
  var a = $('#app'), A = store.att, h;
  if (view.page === 'intro' || !A) h = intro();
  else if (A.phase === 'results') h = view.page === 'review' ? review() : results();
  else if (A.phase === 'gameEnd') h = gameEnd();
  else h = play();
  a.innerHTML = h;
  window.__rsqReady = true;
  if (view.focus) { var inp = $('#typeIn') || $('.gapin'); if (inp && !inp.disabled) inp.focus(); view.focus = false; }
}
function storeNote() { return storeOk ? '' : '<p class="warn">Your browser is blocking storage, so your answers will be lost if you leave this page.</p>'; }
function hero() { return '<div class="hero"><small>LEVEL UP 2BAC · GRAMMAR · UNIT 8</small><h1>LINKING WORDS <span>· QUIZ 1</span></h1><p>Linking Words Master: Connect Your Ideas! · 20 points</p></div>'; }
function intro() {
  var A = store.att, h = hero();
  h += '<div class="instruction">Your mission</div><p class="lead">Linking words show the <b>relationship between ideas</b>. Before you choose one, ask: is this a <b>reason</b>, an <b>example</b>, an <b>extra idea</b>, an <b>explanation</b>, a <b>result</b> or a <b>summary</b>?</p>';
  h += '<div class="cats4">' + ['❓ Reasons', '🔎 Examples', '➕ Addition', '💡 Explaining', '➡️ Effect', '📝 Summary'].map(function (x) { return '<span>' + x + '</span>'; }).join('') + '</div>';
  h += '<ul class="rules"><li>Play the 6 games in order. You have <b>one try</b> for each question.</li><li>Games 1–5 prepare you for game 6, the <b>Boss Challenge</b>: there is no word bank, so you type the linking words yourself.</li><li>You see the correct answer and an explanation straight away, and you can review your mistakes at the end.</li></ul>';
  h += '<div class="glist">';
  D.games.forEach(function (g, gi) { var m = 0; g.qs.forEach(function (q) { m += maxPts(g, q); }); h += '<div class="gitem"><span class="num">' + (gi + 1) + '</span><b>' + esc(g.name) + '</b><span class="pill">' + fmt(m) + ' pts</span></div>'; });
  h += '</div><div class="actions">';
  if (A && !A.done) h += '<button class="btn primary" data-act="resume">Continue my quiz</button>';
  if (A && A.done) h += '<button class="btn primary" data-act="resume">See my results</button>';
  h += A ? confirmBtn() : '<button class="btn primary" data-act="start">Start the quiz</button>';
  h += '</div>';
  if (store.best !== null) h += '<p class="note" style="text-align:center">Best score in this browser: ' + fmt(store.best) + ' / 20</p>';
  return h + storeNote();
}
function confirmBtn() {
  return view.confirm ? '<span class="confirm">Start again from zero? <button class="btn danger" data-act="restart">Yes, start again</button><button class="btn" data-act="nocon">No</button></span>'
                      : '<button class="btn" data-act="askrestart">Start again</button>';
}
function topbar(c) {
  var A = c.A, n = A.order[A.g].length, all = 0, done = Object.keys(A.rec).length, gs = gameScore(A, A.g);
  D.games.forEach(function (g) { all += g.qs.length; });
  return '<div class="gamebar"><span class="gnum">Game ' + (A.g + 1) + ' / 6</span><b>' + esc(c.g.name) + '</b></div>' +
    '<div class="topbar"><span>Question ' + (A.i + 1) + ' of ' + n + ' · this game ' + fmt(gs.s) + ' / ' + fmt(gs.m) + '</span><span>Score: ' + fmt(total(A)) + ' / 20</span></div>' +
    '<div class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="' + all + '" aria-valuenow="' + done + '"><span style="width:' + Math.round(100 * done / all) + '%"></span></div>';
}
var CHECK = '';
function worth(c) {
  var q = c.q, mp = maxPts(c.g, q), p = fmt(c.g.pts);
  return 'Worth ' + fmt(mp) + (mp === 100 ? ' point' : ' points') + (q.t === 'match' ? ' (' + p + ' per pair)' : q.t === 'sort' ? ' (' + p + ' per sentence)' : q.t === 'gapt' ? ' (' + p + ' per gap)' : q.t === 'err' ? ' (' + fmt(c.g.pts / 2) + ' per step)' : '');
}
function play() {
  var c = cur(), q = c.q, r = c.A.rec[c.id], h = topbar(c);
  h += '<div class="instruction">' + esc(c.g.how) + '</div>';
  var tag = q.round ? q.round : q.t === 'exam' ? (q.newq ? 'New exam-style practice' : 'Previous National Exams') + ' · Question ' + q.n + ' of ' + c.g.qs.length : '';
  h += '<div class="metarow">' + (tag ? '<span class="grouptag' + (q.t === 'exam' ? ' examtag' : '') + '">' + esc(tag) + '</span>' : '<span></span>') + '<span class="worth">' + worth(c) + '</span></div>';
  CHECK = '';
  h += body(c, r);
  if (r) h += feedback(c, r);
  var A = c.A, last = A.i === A.order[A.g].length - 1;
  h += '<div class="nav-row"><button class="btn" data-act="prev"' + (A.i === 0 ? ' disabled' : '') + '>◀ Previous</button>' + CHECK +
       '<button class="btn primary" data-act="next"' + (r ? '' : ' disabled') + '>' + (last ? 'Finish game ' + (A.g + 1) + ' ▶' : 'Next ▶') + '</button></div>';
  return h;
}
function optBtn(attrs, text, r, isRight, chosen) {
  var cls = 'tile', mark = '';
  if (r) { if (isRight) { cls += ' correct'; mark = ' ✔'; } else if (chosen) { cls += ' wrong'; mark = ' ✘'; } }
  return '<button class="' + cls + '" ' + attrs + (r ? ' disabled' : '') + '>' + text + '<span class="mk">' + mark + '</span></button>';
}
function quote(d) { return '<div class="quote bq" aria-label="Sentence">' + esc(d) + '</div>'; }
function body(c, r) {
  var q = c.q, o = c.A.opt[c.id], h = '';
  if (q.t === 'choice') {
    h += quote(q.p) + (q.ask ? '<p class="frame">' + esc(q.ask) + '</p>' : '') + '<div class="tiles">';
    o.forEach(function (k) { h += optBtn('data-act="pick" data-k="' + k + '"', esc(q.o[k]), r, k === 0, r && r.resp === k); });
    return h + '</div>';
  }
  if (q.t === 'match') {
    var asg = r ? r.resp : (draft[c.id] || {});
    h += '<div class="match"><ol class="meanings" aria-label="Functions">';
    o.m.forEach(function (mi, li) { h += '<li><span class="ml">' + LETTERS[li] + '</span>' + esc(q.pairs[mi][1]) + '</li>'; });
    h += '</ol><div class="mrows">';
    o.v.forEach(function (vi) {
      var st = r ? (r.ok[vi] ? ' correct' : ' wrong') : '';
      h += '<div class="mrow' + st + '"><b class="mverb">' + esc(q.pairs[vi][0]) + (r ? '<span class="mk">' + (r.ok[vi] ? ' ✔' : ' ✘') + '</span>' : '') + '</b><div class="letters" role="group" aria-label="Function">';
      o.m.forEach(function (mi, li) {
        var on = asg[vi] === mi;
        h += '<button class="lt' + (on ? ' on' : '') + (r && mi === vi ? ' right' : '') + '" data-act="assign" data-v="' + vi + '" data-m="' + mi + '" aria-pressed="' + on + '"' + (r ? ' disabled' : '') + '>' + LETTERS[li] + '</button>';
      });
      h += '</div></div>';
    });
    h += '</div></div>';
    if (!r) CHECK = '<button class="btn primary" data-act="check"' + (Object.keys(asg).length === q.pairs.length ? '' : ' disabled') + '>Check</button>';
    return h;
  }
  if (q.t === 'sort') {
    var as2 = r ? r.resp : (draft[c.id] || {}), cats = c.g.cats;
    h += '<div class="mrows">';
    o.forEach(function (ci) {
      var cd = q.cards[ci], st2 = r ? (r.ok[ci] ? ' correct' : ' wrong') : '';
      h += '<div class="mrow sortrow' + st2 + '"><b class="mverb">' + esc(cd[0]) + (r ? '<span class="mk">' + (r.ok[ci] ? ' ✔' : ' ✘') + '</span>' : '') + '</b><div class="letters catbtns" role="group" aria-label="Type of ' + esc(cd[0]) + '">';
      cats.forEach(function (t, k) {
        var on = as2[ci] === k;
        h += '<button class="lt cat' + (on ? ' on' : '') + (r && k === cd[1] ? ' right' : '') + '" data-act="assign" data-v="' + ci + '" data-m="' + k + '" aria-pressed="' + on + '"' + (r ? ' disabled' : '') + '>' + esc(t) + '</button>';
      });
      h += '</div></div>';
    });
    h += '</div>';
    if (!r) CHECK = '<button class="btn primary" data-act="check"' + (Object.keys(as2).length === q.cards.length ? '' : ' disabled') + '>Check</button>';
    return h;
  }
  if (q.t === 'build') {
    var T = tiles(q), placed = r ? r.resp : (draft[c.id] || []);
    h += quote(q.d) + '<p class="frame">Your sentence:</p><div class="bline' + (r ? (r.pts ? ' ok' : ' no') : '') + '" aria-label="Your sentence">';
    if (!placed.length) h += '<span class="bhint">Tap the groups in order</span>';
    placed.forEach(function (ti, pos) { h += '<button class="btile" data-act="btile" data-from="line" data-i="' + ti + '" data-pos="' + pos + '"' + (r ? ' disabled' : '') + '>' + esc(T[ti]) + '</button>'; });
    h += '</div>';
    if (!r) {
      h += '<div class="bpool" aria-label="Word groups">';
      o.forEach(function (ti) { if (placed.indexOf(ti) < 0) h += '<button class="btile" data-act="btile" data-from="pool" data-i="' + ti + '">' + esc(T[ti]) + '</button>'; });
      h += '</div>';
      CHECK = '<button class="btn primary" data-act="check"' + (placed.length === q.key.length ? '' : ' disabled') + '>Check</button>';
    }
    return h;
  }
  if (q.t === 'gapt') {
    var vals = r ? r.resp : (draft[c.id] || []), n = 0;
    h += (q.d ? quote(q.d) : '') + (q.fr ? '<p class="frame">' + esc(q.fr) + '</p>' : '') + '<p class="sentence left gsent' + (q.bank ? ' para' : '') + '">';
    q.s.forEach(function (part) {
      if (!isTok(part)) { h += esc(part); return; }
      var k = n++, w = Math.max(7, part.a[0].length + 2), st = r ? (r.ok[k] ? ' ok' : ' no') : '';
      h += '<label class="sr-only" for="gap' + k + '">Gap ' + (k + 1) + '</label>';
      if (q.bank) {
        /* Paragraph Linker Challenge: each gap is a drop-down list of the paragraph's linkers (alphabetical, so the order gives nothing away) */
        h += '<sup class="gapno">' + (k + 1) + '</sup><select id="gap' + k + '" class="gapin gapsel' + st + '" data-i="' + k + '"' + (r ? ' disabled' : '') + '><option value="">choose…</option>' +
          q.bank.slice().sort(function (a, b) { return a.toLowerCase() < b.toLowerCase() ? -1 : 1; }).map(function (o) { return '<option' + (vals[k] === o ? ' selected' : '') + '>' + esc(o) + '</option>'; }).join('') + '</select>';
      } else h += (gapsOf(q).length >= 3 ? '<sup class="gapno">' + (k + 1) + '</sup>' : '') + '<input id="gap' + k + '" class="gapin' + st + '" data-i="' + k + '" type="text" autocomplete="off" autocapitalize="none" spellcheck="false" style="width:' + w + 'ch" value="' + esc(vals[k] || '') + '"' + (r ? ' disabled' : '') + '>';
    });
    h += '</p>';
    if (!r) { var full = gapsOf(q).every(function (_, k2) { return (vals[k2] || '').trim(); }); CHECK = '<button class="btn primary" data-act="check"' + (full ? '' : ' disabled') + '>Check</button>'; }
    return h;
  }
  if (q.t === 'err') {
    var P = c.A.part[c.id], sel = P ? P.sel : (draft[c.id] && draft[c.id].sel) || [];
    h += (q.d ? quote(q.d) : '') + '<p class="frame">' + esc(q.fr || 'A student wrote:') + '</p><div class="quote' + (P ? ' done' : '') + '" aria-label="Sentence with a mistake">';
    q.w.forEach(function (w, i) {
      if (isPunct(w)) { h += '<span class="punct">' + esc(w) + '</span>'; return; }
      var on = sel.indexOf(i) >= 0, bad = isTok(w) && w.x, cls = 'word';
      if (P) cls += bad ? (on ? ' correct' : ' missed') : (on ? ' wrong' : '');
      else if (on) cls += ' on';
      h += '<button class="' + cls + '" data-act="tok" data-i="' + i + '" aria-pressed="' + on + '"' + (P ? ' disabled' : '') + '>' + esc(wtext(w)) + '</button>';
    });
    h += '</div>';
    if (!P) { CHECK = '<button class="btn primary" data-act="check1"' + (sel.length ? '' : ' disabled') + '>Check step 1</button>'; return h; }
    if (!r) h += '<div class="feedback s1 ' + (P.ok ? 'good' : 'badf') + '"><b>Step 1: ' + (P.ok ? '✔ You found every mistake' : '✘ Not exactly') + '</b> · ' + fmt(P.ok ? c.g.pts / 2 : 0) + ' / ' + fmt(c.g.pts / 2) + (P.ok ? '' : ' (dashed = missed)') + ' · <b>Step 2:</b> choose the corrected sentence.</div>';
    h += '<div class="tiles">';
    /* once answered, show only the right sentence and the one chosen */
    o.forEach(function (k) { if (r && k !== 0 && k !== r.resp) return; h += optBtn('data-act="pick" data-k="' + k + '"', esc(q.o[k]), r, k === 0, r && r.resp === k); });
    return h + '</div>';
  }
  if (q.t === 'exam') {
    var v = r ? r.resp : (draft[c.id] || ''), hint = c.A.part[c.id] && c.A.part[c.id].hint;
    h += quote(q.d);
    if (r) h += '<p class="examdone ' + (r.pts === r.max ? 'ok' : r.pts ? 'part' : 'no') + '"><b>' + esc(q.f.replace(/\s*…$/, '')) + '</b> ' + esc(shown(q, r.resp)) + '</p>';
    else h += '<div class="exrow"><label class="exframe" for="typeIn">' + esc(q.f) + '</label><textarea id="typeIn" class="examin" rows="2" autocomplete="off" autocapitalize="none" spellcheck="false" placeholder="Type the rest of the sentence">' + esc(v) + '</textarea></div>';
    if (hint && !r) h += '<p class="hintbox">💡 ' + esc(q.hint) + '</p>';
    else if (!r) h += '<p class="hintrow"><button class="btn small" data-act="hint">💡 Show a hint</button></p>';
    if (!r) CHECK = '<button class="btn primary" data-act="check">Check</button>';
    return h;
  }
  return '';
}
function feedback(c, r) {
  var q = c.q, good = r.pts === r.max, h = '<div class="feedback ' + (good ? 'good' : r.pts ? 'part' : 'badf') + '" role="status">';
  h += '<b>' + (good ? '✔ Correct!' : r.pts ? '◐ Partly correct' : '✘ Not correct') + '</b> · ' + fmt(r.pts) + ' / ' + fmt(r.max) + (q.t === 'exam' ? '' : ' · ');
  if (q.t === 'match') return h + (good ? 'Every statement is matched correctly.' : 'The right letter is circled in green on each wrong row.') + '</div>';
  if (q.t === 'sort') return h + (good ? 'Every sentence is in the right group.' : 'Green = the right group.') + ' ' + esc(c.g.tip || '') + '</div>';
  if (q.t === 'err') return h + 'Step 1 ' + (r.s1 ? '✔' : '✘') + ' · Step 2 ' + (r.s2 ? '✔' : '✘') + '<br>' + esc(q.e) + '</div>';
  if (q.t === 'choice') return h + esc(q.e) + '</div>';
  if (q.t === 'build') { if (!good) h += 'Correct: <b>' + esc(q.key.join(' ')) + '.</b><br>'; return h + esc(q.e) + '</div>'; }
  if (q.t === 'gapt') {
    if (!good && (q.bank || gapsOf(q).length >= 3)) h += 'Correct: ' + gapsOf(q).map(function (gp, i) { return (r.ok[i] ? '' : '<b>') + (i + 1) + ' ' + esc(gp.a[0]) + (r.ok[i] ? '' : '</b>'); }).join(' · ') + '<br>';
    else if (!good) h += 'Correct: <b>' + esc(gapSentence(q)) + '</b><br>';
    return h + esc(q.e) + '</div>';
  }
  if (q.t === 'exam') {
    h += '<span class="rubric">';
    q.checks.forEach(function (ck, i) { h += '<span class="rb ' + (r.ok[i] ? 'y' : 'n') + '">' + (r.ok[i] ? '✔ ' : '✘ ') + esc(ck[0]) + '</span>'; });
    h += '<span class="rb ' + (r.ok[q.checks.length] ? 'y' : 'n') + '">' + (r.ok[q.checks.length] ? '✔ ' : '✘ ') + 'Whole sentence correct</span></span>';
    h += (good ? '' : 'Model answer: <b>' + esc(q.model) + '</b><br>') + esc(q.e) + (q.also ? ' <span class="note">' + esc(q.also) + '</span>' : '');
    if (c.A.part[c.id] && c.A.part[c.id].hint) h += ' <span class="note">(You used the hint.)</span>';
    return h + '</div>';
  }
  return h + '</div>';
}
function gapSentence(q) { return q.s.map(function (p) { return isTok(p) ? p.a[0] : p; }).join(''); }

function gameEnd() {
  var A = store.att, gi = A.g, g = D.games[gi], gs = gameScore(A, gi), pct = gs.m ? gs.s / gs.m : 0;
  var h = '<div class="result"><p class="gamebar" style="justify-content:center"><span class="gnum">Game ' + (gi + 1) + ' / 6 finished</span></p>';
  h += '<h2 class="section-title">' + esc(g.name) + '</h2><div class="badge sm">' + fmt(gs.s) + '<small>/ ' + fmt(gs.m) + '</small></div>';
  h += '<p class="remark">' + (pct >= 0.8 ? 'Excellent work!' : pct >= 0.5 ? 'Good effort!' : 'Keep practising!') + '</p><p>Total so far: <b>' + fmt(total(A)) + ' / 20</b></p>';
  if (gi === 4) h += '<p class="rec">Next: the Boss Challenge. You type the linkers yourself. There is no word bank.</p>';
  h += '<div class="actions"><button class="btn primary" data-act="nextgame">' + (gi === 5 ? 'See my final results ▶' : 'Start game ' + (gi + 2) + ' ▶') + '</button></div></div>';
  return h;
}
function tagStats(A) {
  var st = {};
  function add(id, ok) { var s = st[id] || (st[id] = { ok: 0, bad: 0 }); if (ok) s.ok++; else s.bad++; }
  D.games.forEach(function (g, gi) {
    g.qs.forEach(function (q, qi) {
      var r = A.rec[gi + '-' + qi]; if (!r) return;
      if (q.t === 'match') q.pairs.forEach(function (p, i) { p[2].forEach(function (id) { add(id, r.ok[i]); }); });
      else if (q.t === 'sort') q.cards.forEach(function (cd, i) { add(cd[2], r.ok[i]); });
      else q.k.forEach(function (id) { add(id, r.pts === r.max); });
    });
  });
  return st;
}
function results() {
  var A = store.att, t = total(A), st = tagStats(A), weak = [];
  RS_TAGS.forEach(function (rw) { if (st[rw[0]] && st[rw[0]].bad) weak.push(TAG[rw[0]]); });
  var h = '<div class="result"><div class="instruction">Final result</div>';
  h += '<div class="badge">' + fmt(t) + '<small>/ 20</small></div><p class="remark band-' + band(t).replace(/\W/g, '') + '">' + esc(band(t)) + '</p>';
  if (t === 2000) h += '<p class="rec">🏆 Perfect! You are a Linking Words Master: you can connect your ideas in your national-exam writing.</p>';
  if (store.best !== null) h += '<p class="note">Best score in this browser: ' + fmt(store.best) + ' / 20</p>';
  h += '</div><h3 class="section-title">Your score in each game</h3>';
  D.games.forEach(function (g, gi) { var gs = gameScore(A, gi), p = gs.m ? Math.round(100 * gs.s / gs.m) : 0; h += bar((gi + 1) + '. ' + g.name, p, fmt(gs.s) + ' / ' + fmt(gs.m)); });
  h += '<h3 class="section-title">Your strengths and weaknesses</h3>';
  GROUPS.forEach(function (gr) {
    var ok = 0, all = 0; RS_TAGS.forEach(function (rw) { if (rw[1] === gr && st[rw[0]]) { ok += st[rw[0]].ok; all += st[rw[0]].ok + st[rw[0]].bad; } });
    if (!all) return;
    var p = Math.round(100 * ok / all); h += bar(gr + (p >= 80 ? ' ⭐' : ''), p, p + '%');
  });
  h += '<h3 class="section-title">To practise again (' + weak.length + ')</h3>';
  if (weak.length) {
    h += '<table class="vt"><thead><tr><th>Kind</th><th>Rule</th></tr></thead><tbody>';
    weak.forEach(function (R) { h += '<tr><td>' + esc(R.group) + '</td><td><b>' + esc(R.label) + '</b></td></tr>'; });
    h += '</tbody></table>';
  } else h += '<p class="rec">Perfect! You made no mistakes.</p>';
  h += '<div class="actions">' + (weak.length ? '<button class="btn gold" data-act="review">Review my mistakes</button>' : '') + confirmBtn() + '</div>';
  return h;
}
function bar(label, p, val) { return '<div class="skillrow"><span>' + esc(label) + '</span><span class="sbar"><span class="' + (p < 50 ? 'low' : '') + '" style="width:' + p + '%"></span></span><b>' + esc(val) + '</b></div>'; }
function review() {
  var A = store.att, h = '<div class="instruction">Review my mistakes</div>', n = 0;
  D.games.forEach(function (g, gi) {
    g.qs.forEach(function (q, qi) {
      var r = A.rec[gi + '-' + qi]; if (!r || r.pts === r.max) return;
      n++;
      h += '<div class="review-item"><span class="grouptag">' + esc(g.name) + (q.t === 'exam' ? ' · Question ' + q.n : '') + '</span><br>';
      if (q.t === 'match') q.pairs.forEach(function (p, i) { if (!r.ok[i]) h += '✘ ' + esc(p[0]) + '<br>You chose: ' + esc(q.pairs[r.resp[i]][1]) + '<br>✔ <b>' + esc(p[1]) + '</b><br>'; });
      else if (q.t === 'sort') q.cards.forEach(function (cd, i) { if (!r.ok[i]) h += '✘ ' + esc(cd[0]) + ': you chose “' + esc(g.cats[r.resp[i]]) + '”. ✔ <b>' + esc(g.cats[cd[1]]) + '</b><br>'; });
      else if (q.t === 'choice') h += esc(q.p) + '<br>✘ Your answer: ' + esc(q.o[r.resp]) + '<br>✔ <b>' + esc(q.o[0]) + '</b><br>' + esc(q.e);
      else if (q.t === 'build') h += esc(q.d) + '<br>✘ Your sentence: ' + esc(r.resp.map(function (ti) { return tiles(q)[ti]; }).join(' ')) + '.<br>✔ <b>' + esc(q.key.join(' ')) + '.</b><br>' + esc(q.e);
      else if (q.t === 'gapt') { var k = 0; h += esc(q.d) + '<br>✘ Your answer: ' + esc(q.s.map(function (p) { return isTok(p) ? '[' + (r.resp[k++] || '') + ']' : p; }).join('')) + '<br>✔ <b>' + esc(gapSentence(q)) + '</b><br>' + esc(q.e); }
      else if (q.t === 'err') h += esc(q.d) + '<br>' + (r.s1 ? '' : '✘ Step 1: the wrong words were ' + errsOf(q).map(function (i) { return '<b>' + esc(q.w[i].t) + '</b>'; }).join(', ') + '.<br>') + (r.s2 ? '' : '✘ Step 2: you chose “' + esc(q.o[r.resp]) + '”.<br>') + '✔ <b>' + esc(q.o[0]) + '</b><br>' + esc(q.e);
      else if (q.t === 'exam') h += esc(q.d) + '<br>✘ Your answer: ' + esc(q.f.replace(/\s*…$/, '')) + ' ' + esc(r.resp || '(empty)') + '<br>✔ <b>' + esc(q.model) + '</b><br>' + esc(q.e);
      h += '</div>';
    });
  });
  if (!n) h += '<p>No mistakes to review.</p>';
  return h + '<div class="actions"><button class="btn primary" data-act="results">◀ Back to my results</button></div>';
}

/* ---------- actions ---------- */
function go(page) { view.page = page; render(); window.scrollTo(0, 0); }
var dragEnd = 0;
function onClick(e) {
  /* the click the browser may send at the end of a drag is not a tap */
  if (Date.now() - dragEnd < 60) return;
  var b = e.target.closest('[data-act]'); if (!b || b.disabled) return;
  var act = b.getAttribute('data-act');
  if (act === 'start' || act === 'restart') { store.att = newAttempt(); draft = {}; view.confirm = false; save(); go('play'); return; }
  if (act === 'askrestart') { view.confirm = true; render(); return; }
  if (act === 'nocon') { view.confirm = false; render(); return; }
  if (act === 'resume' || act === 'results') { go('play'); return; }
  if (act === 'review') { go('review'); return; }
  if (act === 'nextgame') {
    var A = store.att;
    if (A.g >= 5) { A.phase = 'results'; A.done = true; var t = total(A); if (store.best === null || t > store.best) store.best = t; }
    else { A.g++; A.i = 0; A.phase = 'play'; }
    save(); go('play'); return;
  }
  if (!store.att || store.att.phase !== 'play') return;
  var c = cur();
  if (act === 'prev') { if (c.A.i > 0) { c.A.i--; save(); render(); window.__inSight(); } return; }
  if (act === 'next') {
    if (!c.A.rec[c.id]) return;
    if (c.A.i < c.A.order[c.A.g].length - 1) { c.A.i++; save(); render(); window.__inSight(); }
    else { c.A.phase = 'gameEnd'; save(); go('play'); }
    return;
  }
  if (c.A.rec[c.id]) return;
  var q = c.q, pts = c.g.pts, d;
  if (act === 'hint') { c.A.part[c.id] = { hint: true }; save(); render(); return; }
  if (act === 'pick') {
    var k = +b.getAttribute('data-k');
    if (q.t === 'err') { var P = c.A.part[c.id]; if (!P) return; lock(c, { pts: (P.ok ? pts / 2 : 0) + (k === 0 ? pts / 2 : 0), s1: P.ok, s2: k === 0, sel: P.sel, resp: k }); }
    else lock(c, { pts: k === 0 ? pts : 0, resp: k });
    return;
  }
  if (act === 'assign') {
    d = draft[c.id] || (draft[c.id] = {}); var vi = +b.getAttribute('data-v'), mi = +b.getAttribute('data-m');
    if (q.t === 'match') Object.keys(d).forEach(function (kk) { if (d[kk] === mi) delete d[kk]; });
    d[vi] = mi; render(); return;
  }
  if (act === 'btile') {
    d = draft[c.id] || (draft[c.id] = []); var ti = +b.getAttribute('data-i'), at = d.indexOf(ti);
    if (b.getAttribute('data-from') === 'line') { if (at >= 0) d.splice(at, 1); } else if (at < 0 && d.length < q.key.length) d.push(ti);
    render(); return;
  }
  if (act === 'tok') {
    if (c.A.part[c.id]) return;
    d = draft[c.id] || (draft[c.id] = { sel: [] }); var i = +b.getAttribute('data-i'), at2 = d.sel.indexOf(i);
    if (at2 >= 0) d.sel.splice(at2, 1); else d.sel.push(i);
    render(); return;
  }
  if (act === 'check1') {
    if (c.A.part[c.id]) return;
    d = draft[c.id] || { sel: [] }; if (!d.sel.length) return;
    var want = errsOf(q), ok1 = d.sel.length === want.length && want.every(function (i2) { return d.sel.indexOf(i2) >= 0; });
    c.A.part[c.id] = { sel: d.sel.slice().sort(function (a, b2) { return a - b2; }), ok: ok1 };
    delete draft[c.id]; save(); say(ok1 ? 'Step 1 correct.' : 'Step 1 not correct.'); render(); return;
  }
  if (act === 'check') {
    if (q.t === 'match') {
      d = draft[c.id] || {}; if (Object.keys(d).length !== q.pairs.length) return;
      var ok = range(q.pairs.length).map(function (i3) { return d[i3] === i3; }), resp = {};
      Object.keys(d).forEach(function (kk) { resp[kk] = d[kk]; });
      lock(c, { pts: pts * ok.filter(Boolean).length, ok: ok, resp: resp });
    } else if (q.t === 'sort') {
      d = draft[c.id] || {}; if (Object.keys(d).length !== q.cards.length) return;
      var oks = range(q.cards.length).map(function (i6) { return d[i6] === q.cards[i6][1]; }), rs = {};
      Object.keys(d).forEach(function (kk) { rs[kk] = d[kk]; });
      lock(c, { pts: pts * oks.filter(Boolean).length, ok: oks, resp: rs });
    } else if (q.t === 'build') {
      d = draft[c.id] || []; if (d.length !== q.key.length) return;
      var T = tiles(q), said = d.map(function (ti2) { return T[ti2]; }).join('|'), keys = [q.key].concat(q.alt || []);
      var right = keys.some(function (kk2) { return kk2.join('|') === said; });
      lock(c, { pts: right ? pts : 0, resp: d.slice() });
    } else if (q.t === 'gapt') {
      var gs = gapsOf(q), vals = gs.map(function (_, i4) { var el = document.getElementById('gap' + i4); return el ? el.value : ''; });
      if (vals.some(function (v) { return !v.trim(); })) { say('Fill every gap first.'); return; }
      var ok4 = gs.map(function (gp, i4) { return gp.a.map(function (a) { return clean(a); }).indexOf(clean(vals[i4])) >= 0; });
      lock(c, { pts: pts * ok4.filter(Boolean).length, ok: ok4, resp: vals.map(function (v) { return v.trim(); }) });
    } else if (q.t === 'exam') {
      var val = ($('#typeIn') || {}).value || '';
      if (!completion(q, val)) { say('Type the rest of the sentence first.'); var ti3 = $('#typeIn'); if (ti3) ti3.focus(); return; }
      var ok5 = grade(q, val);
      lock(c, { pts: pts * ok5.filter(Boolean).length, ok: ok5, resp: val.replace(/\s+/g, ' ').trim() });
    }
  }
}
function onKey(e) {
  var t = e.target; if (!t || e.key !== 'Enter') return;
  if (t.id === 'typeIn' || t.classList.contains('gapin')) {
    e.preventDefault();
    if (t.classList.contains('gapin')) { var nx = document.getElementById('gap' + (+t.getAttribute('data-i') + 1)); if (nx && !nx.value.trim()) { nx.focus(); return; } }
    var b = document.querySelector('[data-act="check"]'); if (b && !b.disabled) b.click();
  }
}
function onInput(e) {
  var t = e.target; if (!t || !store.att || store.att.phase !== 'play') return;
  var c = cur();
  if (t.id === 'typeIn') draft[c.id] = t.value;
  else if (t.classList.contains('gapin')) {
    var d = draft[c.id] || (draft[c.id] = []); d[+t.getAttribute('data-i')] = t.value;
    var chk = document.querySelector('[data-act="check"]'); if (chk) chk.disabled = !gapsOf(c.q).every(function (_, k) { return (d[k] || '').trim(); });
  }
}
/* Build the Reported Sentence: drag a group into the sentence (before the group you drop it on), or back to the pool */
var drag = null;
function onDown(e) {
  var t = e.target.closest && e.target.closest('.btile'); if (!t || t.disabled || e.button > 0) return;
  drag = { t: t, x: e.clientX, y: e.clientY, i: +t.getAttribute('data-i'), moved: false, ghost: null };
}
function onMove(e) {
  if (!drag) return;
  if (!drag.moved) {
    if (Math.abs(e.clientX - drag.x) + Math.abs(e.clientY - drag.y) < 8) return;
    drag.moved = true; var g = drag.t.cloneNode(true); g.className = 'btile ghost'; document.body.appendChild(g); drag.ghost = g; drag.t.classList.add('dragging');
  }
  e.preventDefault();
  drag.ghost.style.left = (e.clientX - drag.ghost.offsetWidth / 2) + 'px'; drag.ghost.style.top = (e.clientY - drag.ghost.offsetHeight / 2) + 'px';
}
function onUp(e) {
  var dg = drag; drag = null; if (!dg || !dg.moved) return;
  dragEnd = Date.now();
  if (dg.ghost) dg.ghost.remove();
  if (!store.att || store.att.phase !== 'play') return;
  var c = cur(); if (c.q.t !== 'build' || c.A.rec[c.id]) return;
  var d = draft[c.id] || (draft[c.id] = []), el = document.elementFromPoint(e.clientX, e.clientY), at = d.indexOf(dg.i);
  if (el && el.closest('.bline')) {
    var tg = el.closest('.btile[data-from="line"]'), tgi = tg ? +tg.getAttribute('data-i') : -1;
    if (tgi === dg.i) { render(); return; }
    if (at < 0 && d.length >= c.q.key.length) { render(); return; }
    if (at >= 0) d.splice(at, 1);
    var pos = tg ? d.indexOf(tgi) : d.length; d.splice(pos < 0 ? d.length : pos, 0, dg.i);
  } else if (el && el.closest('.bpool') && at >= 0) d.splice(at, 1);
  render();
}

/* ---------- start ---------- */
var errs = validate();
if (errs.length) { fatal('This quiz could not start:\n' + errs.join('\n')); return; }
/* an attempt saved before the quiz content changed (different number of items) cannot be resumed */
if (store.att && (!store.att.order || store.att.order.length !== D.games.length || store.att.order.some(function (o, gi) { return o.length !== D.games[gi].qs.length; }))) { store.att = null; save(); }
var app = document.getElementById('app');
app.addEventListener('click', onClick);
app.addEventListener('keydown', onKey);
app.addEventListener('input', onInput);
app.addEventListener('change', onInput);   /* drop-down gaps: some browsers only send "change" */
app.addEventListener('pointerdown', onDown);
document.addEventListener('pointermove', onMove, { passive: false });
document.addEventListener('pointerup', onUp);
document.addEventListener('pointercancel', function () { if (!drag) return; var m = drag.moved; if (drag.ghost) drag.ghost.remove(); drag = null; if (m) render(); });
render();
window.__rsq = { store: function () { return store; }, total: total, band: band, grade: grade, completion: completion, answers: answers, clean: clean, maxPts: maxPts };
})();

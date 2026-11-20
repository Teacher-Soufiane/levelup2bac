/* Unit 10 · Grammar quiz engine (out of 20: MAX = 2000 hundredths). Logic only: content AND page copy (hero, mission, rules,
   storage key) are in data/quiz.js (RS_QUIZ, RS_TAGS, RS_COPY), so this file is byte-identical in every Unit 10 Grammar quiz.
   2026-11-15: focus is kept after every redraw; a new screen moves focus to its heading.
   Adds keyText(): a built question ending in "?" gets no extra full stop.
   Same engine as Unit 8 Linking Words Quiz 2 (choice items may add q.ask; err items may leave out q.d and set q.fr; build items may set q.fr). Progress is kept in this browser only (localStorage). */
(function () {
'use strict';
if (window.__rsqInit) return;
window.__rsqInit = true;

var COPY = window.RS_COPY || {};
var STORE_KEY = COPY.storeKey || 'levelup-2bac-rsq-missing-key';
/* MAX10-2026-11-19 (Unit 9): RS_COPY.max sets the total (1000 = out of 10, as the teacher's Quiz 1 and 2 briefs); bands scale with it */
var MAX = COPY.max || 2000;   /* points are in hundredths */
var BANDS = [[18, 'Excellent!'], [16, 'Very Good'], [14, 'Good'], [12, 'Fairly Good'], [10, 'Pass'], [0, 'Fail']].map(function (b) { return [b[0] * MAX / 2000, b[1]]; });
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
  if (!window.RS_COPY || !COPY.storeKey || !COPY.heroTitle) errs.push('The data file has no RS_COPY (page text and storage key).');
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
  if (total !== MAX) errs.push('The quiz totals ' + fmt(total) + ' points, not ' + fmt(MAX) + '.');
  return errs;
}

/* ---------- storage ---------- */
var store = { best: null, att: null }, storeOk = true;
try { var raw = window.localStorage.getItem(STORE_KEY); if (raw) { var pr = JSON.parse(raw); if (pr && 'att' in pr) store = pr; } } catch (e) { storeOk = false; }
function save() { if (!storeOk) return; try { window.localStorage.setItem(STORE_KEY, JSON.stringify(store)); } catch (e) { storeOk = false; } }

/* ---------- attempt ---------- */
var view = { page: 'intro', confirm: false }, draft = {}, SEL = {};   /* SEL[item] = the word picked in a bucket sort */
/* MIXPOS-2026-11-19 (teacher): the right answers are never "in order" and never all in A.
   - Choice / error items: in each game the right answer's place is spread over A, B, C, D (a shuffled bag), never the
     same place twice in a row, and never the place it had in the last attempt (store.pos).
   - Match: tapping the items in order never pairs them up, and every meaning moves to a new box on a retake (store.mpos).
   - Drop-down gaps: the options get a new order each attempt; the right one is spread like the choices (store.gpos).
   - Word builders: never in the right order, never the same order as last time (store.bpos).
   True/False items keep True first. National-exam items (q.show) are shuffled like the others (teacher, 2026-11-19). */
function placeAt(n, ans, p) { var rest = shuffle(range(n).filter(function (x) { return x !== ans; })); rest.splice(p, 0, ans); return rest; }
function derange(n, avoid, tries) {
  /* a shuffle of 0..n-1 where position k never holds avoid[k] (falls back to a rotation) */
  var a, t = 0;
  if (n < 2) return range(n);
  do { a = shuffle(range(n)); t++; } while (a.some(function (x, k) { return avoid && x === avoid[k]; }) && t < (tries || 300));
  if (a.some(function (x, k) { return avoid && x === avoid[k]; })) a = avoid.slice(1).concat(avoid[0]);
  return a;
}
function newAttempt(fixedOrder) {   /* fixedOrder: re-deal the answers of an attempt in progress along the questions' order on screen */
  var opt = {}, order = [], P = store.pos || {}, MP = store.mpos || {}, GP = store.gpos || {}, BP = store.bpos || {};
  D.games.forEach(function (g, gi) {
    /* rounds and the national-exam questions keep their order; the rest are shuffled */
    var ord = fixedOrder && fixedOrder[gi] ? fixedOrder[gi] : g.exam || g.qs[0].t === 'match' || g.qs[0].t === 'sort' ? range(g.qs.length) : shuffle(range(g.qs.length));
    order.push(ord);
    var bags = {}, prev = -1;
    function pick(n, last) {
      var bag = bags[n], i, c, ok;
      if (!bag || !bag.length) bag = bags[n] = shuffle(range(n));
      for (i = 0; i < bag.length; i++) if (bag[i] !== last && bag[i] !== prev) break;
      if (i < bag.length) c = bag.splice(i, 1)[0];
      else {
        ok = range(n).filter(function (x) { return x !== last && x !== prev; });
        if (!ok.length) ok = range(n).filter(function (x) { return x !== last; });
        if (!ok.length) ok = range(n);
        c = ok[Math.floor(Math.random() * ok.length)];
      }
      prev = c; return c;
    }
    ord.forEach(function (qi) {
      var q = g.qs[qi], id = gi + '-' + qi;
      /* 2026-11-19 (teacher): national-exam items (q.show) move too, like every other choice */
      if ((q.t === 'choice' || q.t === 'err') && q.tf) opt[id] = q.o[0] === 'True' ? [0, 1] : [1, 0];
      else if (q.t === 'choice' || q.t === 'err') { var p = q.o.length > 1 ? pick(q.o.length, P[id]) : 0; opt[id] = placeAt(q.o.length, 0, p); P[id] = p; }
      else if (q.t === 'match') {
        var n = q.pairs.length, m = derange(n, MP[id]), v = derange(n, m);
        opt[id] = { v: v, m: m }; MP[id] = m;
      }
      else if (q.t === 'build') {
        var nb = q.key.length + q.extra.length, b, tb = 0, inOrder = range(nb).join();
        do { b = shuffle(range(nb)); tb++; } while (nb > 2 && (b.join() === inOrder || b.join() === BP[id]) && tb < 50);
        opt[id] = b; BP[id] = b.join();
      }
      else if (q.t === 'sort') opt[id] = shuffle(range(q.cards.length));
      else if (q.t === 'gapt') {
        var lastG = GP[id] || [], gk = 0, go = [], gp = [];
        q.s.forEach(function (part) {
          if (!isTok(part)) return;
          var k = gk++, L = part.o || q.bank;
          if (!L) { go.push(null); gp.push(-1); return; }
          var ai = -1; L.forEach(function (w, wi) { if (ai < 0 && part.a.indexOf(w) >= 0) ai = wi; });
          if (ai < 0) { go.push(shuffle(range(L.length))); gp.push(-1); return; }
          var pp = pick(L.length, lastG[k]); go.push(placeAt(L.length, ai, pp)); gp.push(pp);
        });
        opt[id] = go; GP[id] = gp;
      }
    });
  });
  store.pos = P; store.mpos = MP; store.gpos = GP; store.bpos = BP;
  return { order: order, opt: opt, rec: {}, part: {}, g: 0, i: 0, phase: 'play', done: false };
}
/* a drop-down gap's options: this attempt's order, or alphabetical for an attempt saved before MIXPOS */
function gapOrder(L, ord) { return ord ? ord.map(function (i) { return L[i]; }) : L.slice().sort(function (a, b) { return a.toLowerCase() < b.toLowerCase() ? -1 : 1; }); }
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
/* the built sentence as text: a full stop is added unless the last tile already ends with ? . or ! (questions) */
function keyText(q) { var s = q.key.join(' '); return /[?.!]$/.test(s) ? s : s + '.'; }

/* ---------- render ---------- */
/* ---------- focus: every redraw replaces #app, so the focused control is found again by a stable key ---------- */
function focusKey(el) {
  var a = $('#app');
  if (!el || !el.getAttribute || !a || !a.contains(el)) return null;
  if (el.id === 'typeIn') return 'id:typeIn';
  if (el.classList.contains('gapin')) return 'gap:' + el.getAttribute('data-i');
  var act = el.getAttribute('data-act'); if (!act) return null;
  return act + ':' + ['data-k', 'data-v', 'data-m', 'data-i', 'data-from'].map(function (n) { return el.getAttribute(n) || ''; }).join('|');
}
function firstUsable(sels) {
  for (var i = 0; i < sels.length; i++) { var el = document.querySelector('#app ' + sels[i]); if (el && !el.disabled) return el; }
  return null;
}
function restoreFocus(key) {
  var el = null;
  if (key) [].some.call(document.querySelectorAll('#app [data-act], #app .gapin, #app #typeIn'), function (x) { if (!x.disabled && focusKey(x) === key) { el = x; return true; } return false; });
  /* the control is gone (a locked answer, a tile that moved, Check after Check): go to the next useful control */
  if (!el && key) el = firstUsable(['[data-act="check"]', '[data-act="check1"]', '[data-act="next"]', '.bpool .btile', '.tiles .tile', '.letters .lt', '.quote .word', '#typeIn', '.gapin', '[data-act]']);
  if (el) try { el.focus({ preventScroll: true }); } catch (e) { }
}
var lastScreen = null;
function screenOf(A) { return view.page === 'intro' || !A ? 'intro' : A.phase === 'results' ? (view.page === 'review' ? 'review' : 'results') : A.phase === 'gameEnd' ? 'gameEnd' : 'play'; }
function render() {
  var a = $('#app'), A = store.att, h, key = focusKey(document.activeElement), scr = screenOf(A), first = lastScreen === null;
  if (view.page === 'intro' || !A) h = intro();
  else if (A.phase === 'results') h = view.page === 'review' ? review() : results();
  else if (A.phase === 'gameEnd') h = gameEnd();
  else h = play();
  a.innerHTML = h;
  window.__rsqReady = true;
  if (view.focus) { var inp = $('#typeIn') || $('.gapin'); if (inp && !inp.disabled) inp.focus(); view.focus = false; }
  else if (!first && scr !== lastScreen && scr !== 'play') {
    /* a new screen (game end, results, review, intro): focus its heading so a screen reader starts there; never on first load (an iframe must not steal focus) */
    var hd = a.querySelector('h1, h2, .instruction, .gnum');
    if (hd) { hd.setAttribute('tabindex', '-1'); try { hd.focus({ preventScroll: true }); } catch (e) { } }
  } else if (!first) restoreFocus(key);
  lastScreen = scr;
}
function storeNote() { return storeOk ? '' : '<p class="warn">Your browser is blocking storage, so your answers will be lost if you leave this page.</p>'; }
/* RS_COPY strings are authored by the teacher in data/quiz.js and may contain <b> markup (trusted, not student input) */
function hero() { return '<div class="hero"><small>' + esc(COPY.heroKicker) + '</small><h1>' + esc(COPY.heroTitle) + ' <span>· ' + esc(COPY.heroQuiz) + '</span></h1><p>' + esc(COPY.heroSub) + '</p></div>'; }
function intro() {
  var A = store.att, h = hero();
  h += '<div class="instruction">Your mission</div><p class="lead">' + COPY.missionHtml + '</p><p class="formula">' + esc(COPY.formula) + '</p>';
  h += '<div class="cats4">' + (COPY.cats || []).map(function (x) { return '<span>' + esc(x) + '</span>'; }).join('') + '</div>';
  h += '<ul class="rules">' + (COPY.rulesHtml || []).map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul>';
  h += '<div class="glist">';
  D.games.forEach(function (g, gi) { var m = 0; g.qs.forEach(function (q) { m += maxPts(g, q); }); h += '<div class="gitem"><span class="num">' + (gi + 1) + '</span><b>' + esc(g.name) + '</b><span class="pill">' + fmt(m) + ' pts</span></div>'; });
  h += '</div><div class="actions">';
  if (A && !A.done) h += '<button class="btn primary" data-act="resume">Continue my quiz</button>';
  if (A && A.done) h += '<button class="btn primary" data-act="resume">See my results</button>';
  h += A ? confirmBtn() : '<button class="btn primary" data-act="start">Start the quiz</button>';
  h += '</div>';
  if (store.best !== null) h += '<p class="note" style="text-align:center">Best score in this browser: ' + fmt(store.best) + ' / ' + fmt(MAX) + '</p>';
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
    '<div class="topbar"><span>Question ' + (A.i + 1) + ' of ' + n + ' · this game ' + fmt(gs.s) + ' / ' + fmt(gs.m) + '</span><span>Score: ' + fmt(total(A)) + ' / ' + fmt(MAX) + '</span></div>' +
    '<div class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="' + all + '" aria-valuenow="' + done + '"><span style="width:' + Math.round(100 * done / all) + '%"></span></div>';
}
var CHECK = '';
function worth(c) {
  var q = c.q, mp = maxPts(c.g, q), p = fmt(c.g.pts);
  return 'Worth ' + fmt(mp) + (mp === 100 ? ' point' : ' points') + (q.t === 'match' ? ' (' + p + ' per pair)' : q.t === 'sort' ? ' (' + p + ' per ' + (c.g.per || 'sentence') + ')' : q.t === 'gapt' ? ' (' + p + ' per gap)' : q.t === 'err' ? ' (' + fmt(c.g.pts / 2) + ' per step)' : '');
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
    /* U6-2026-11-19: a choice item may show a picture clue (q.img = file name in images/, .jpg) */
    h += (q.img ? '<img class="pic" src="images/' + esc(q.img) + '.jpg" alt="Picture clue">' : '') + quote(q.p) + (q.ask ? '<p class="frame">' + esc(q.ask) + '</p>' : '') + '<div class="tiles">';
    o.forEach(function (k) { h += optBtn('data-act="pick" data-k="' + k + '"', esc(q.o[k]), r, k === 0, r && r.resp === k); });
    return h + '</div>';
  }
  if (q.t === 'match') {
    /* U6MATCH-2026-11-19 (teacher): no A B C D letters. The phrasal verbs sit in one row at the top; the definitions
       are listed below, each with an empty box in front. Tap a verb: it goes into the first empty box (in order).
       Or drag it onto any box. Tap a filled box to send its verb back. Same data as before: asg[verb] = definition. */
    var asg = r ? r.resp : (draft[c.id] || {}), inBox = {};
    Object.keys(asg).forEach(function (kv) { inBox[asg[kv]] = +kv; });
    /* long items (whole sentences): each definition sits above a full-width box */
    var vlong = q.pairs.some(function (p) { return p[0].length > 22; });
    h += '<div class="vmatch' + (vlong ? ' vlong' : '') + '"><div class="vchips" aria-label="Items to place">';
    o.v.forEach(function (vi) {
      var used = r || asg[vi] !== undefined;
      h += '<button class="vchip' + (used ? ' used' : '') + '" data-act="vpick" data-v="' + vi + '"' + (used ? ' disabled tabindex="-1"' : '') + '>' + esc(q.pairs[vi][0]) + '</button>';
    });
    h += '</div><ol class="dslots" aria-label="Definitions">';
    o.m.forEach(function (mi) {
      var vi = inBox[mi], has = vi !== undefined, st = r ? (r.ok[vi] ? ' correct' : ' wrong') : '';
      /* after Check a wrong box shows the right phrasal verb (in green) */
      var shown = r ? q.pairs[mi][0] : (has ? q.pairs[vi][0] : '');
      h += '<li class="dslot' + st + '"><button class="vslot' + (has ? ' filled' : '') + '" data-act="vslot" data-m="' + mi + '"' + (has && !r ? ' data-v="' + vi + '"' : '') + (r || !has ? ' disabled' : '') + ' aria-label="' + (has ? esc(q.pairs[vi][0]) : 'Empty box') + '">' + esc(shown) + '</button>' +
           '<span class="ddef">' + esc(q.pairs[mi][1]) + '</span>' + (r ? '<span class="mk">' + (r.ok[vi] ? '✔' : '✘') + '</span>' : '') + '</li>';
    });
    h += '</ol></div>';
    if (!r) CHECK = '<button class="btn primary" data-act="check"' + (Object.keys(asg).length === q.pairs.length ? '' : ' disabled') + '>Check</button>';
    return h;
  }
  if (q.t === 'sort' && c.g.bucket) {
    /* BUCKET-2026-11-19 (Unit 7 G1, phone fit): the words sit in one row at the top and the groups are boxes below.
       Tap a word, then tap its box. Tap a word in a box to send it back. Same data as the row sort: asg[card] = group. */
    var asb = r ? r.resp : (draft[c.id] || {}), selv = r ? -1 : (SEL[c.id] === undefined ? -1 : SEL[c.id]);
    h += '<div class="bucket' + (r ? ' done' : '') + '"><div class="vchips" aria-label="Words to sort">';
    o.forEach(function (ci) {
      if (asb[ci] !== undefined) return;
      h += '<button class="vchip' + (selv === ci ? ' sel' : '') + '" data-act="spick" data-v="' + ci + '" aria-pressed="' + (selv === ci) + '">' + esc(q.cards[ci][0]) + '</button>';
    });
    if (!r && o.every(function (ci) { return asb[ci] !== undefined; })) h += '<span class="bhint">All placed. Press Check.</span>';
    h += '</div><div class="sboxes">';
    c.g.cats.forEach(function (t, k) {
      h += '<div class="sbox' + (selv >= 0 && !r ? ' ready' : '') + '" data-act="sdrop" data-m="' + k + '"><button class="sboxh" data-act="sdrop" data-m="' + k + '"' + (r ? ' disabled' : '') + '>' + esc(t) + '</button><div class="sin">';
      o.forEach(function (ci) {
        var mine = asb[ci] === k, right = r && q.cards[ci][1] === k && !r.ok[ci];
        if (!mine && !right) return;
        if (right) { h += '<span class="vchip ghost correct">' + esc(q.cards[ci][0]) + '</span>'; return; }
        h += '<button class="vchip in' + (r ? (r.ok[ci] ? ' correct' : ' wrong') : '') + '" data-act="sback" data-v="' + ci + '"' + (r ? ' disabled' : '') + '>' + esc(q.cards[ci][0]) + (r ? (r.ok[ci] ? ' ✔' : ' ✘') : '') + '</button>';
      });
      h += '</div></div>';
    });
    h += '</div></div>';
    if (!r) CHECK = '<button class="btn primary" data-act="check"' + (Object.keys(asb).length === q.cards.length ? '' : ' disabled') + '>Check</button>';
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
    if (!placed.length) h += '<span class="bhint">Tap the words in order</span>';
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
      if (q.bank || part.o) {
        /* Paragraph Linker Challenge: each gap is a drop-down list of the paragraph's linkers (alphabetical, so the order gives nothing away).
           U7G1-2026-11-19: a gap may carry its own short list (part.o) instead of the shared bank. */
        h += '<sup class="gapno">' + (k + 1) + '</sup><select id="gap' + k + '" class="gapin gapsel' + st + '" data-i="' + k + '"' + (r ? ' disabled' : '') + '><option value="">choose…</option>' +
          gapOrder(part.o || q.bank, o && o[k]).map(function (o) { return '<option' + (vals[k] === o ? ' selected' : '') + '>' + esc(o) + '</option>'; }).join('') + '</select>';
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
    if (!r) h += '<div class="feedback s1 ' + (P.ok ? 'good' : 'badf') + '"><b>Step 1: ' + (P.ok ? '✔ ' + (c.g.found || 'You found every mistake') : '✘ Not exactly') + '</b> · ' + fmt(P.ok ? c.g.pts / 2 : 0) + ' / ' + fmt(c.g.pts / 2) + (P.ok ? '' : ' (dashed = missed)') + ' · <b>Step 2:</b> ' + (c.g.step2 || 'choose the corrected sentence.') + '</div>';
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
  if (q.t === 'match') return h + (good ? 'Every pair is matched correctly.' : 'The right answers are in green.') + '</div>';
  if (q.t === 'sort') return h + (good ? 'Every ' + (c.g.per || 'sentence') + ' is in the right group.' : 'Green = the right group.') + ' ' + esc(c.g.tip || '') + '</div>';
  if (q.t === 'err') return h + 'Step 1 ' + (r.s1 ? '✔' : '✘') + ' · Step 2 ' + (r.s2 ? '✔' : '✘') + '<br>' + esc(q.e) + '</div>';
  if (q.t === 'choice') return h + esc(q.e) + '</div>';
  if (q.t === 'build') { if (!good) h += 'Correct: <b>' + esc(keyText(q)) + '</b><br>'; return h + esc(q.e) + '</div>'; }
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
  h += '<p class="remark">' + (pct >= 0.8 ? 'Excellent work!' : pct >= 0.5 ? 'Good effort!' : 'Keep practising!') + '</p><p>Total so far: <b>' + fmt(total(A)) + ' / ' + fmt(MAX) + '</b></p>';
  if (gi === 4 && COPY.beforeBoss) h += '<p class="rec">' + esc(COPY.beforeBoss) + '</p>';
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
  h += '<div class="badge">' + fmt(t) + '<small>/ ' + fmt(MAX) + '</small></div><p class="remark band-' + band(t).replace(/\W/g, '') + '">' + esc(band(t)) + '</p>';
  if (t === MAX && COPY.fullMarks) h += '<p class="rec">' + esc(COPY.fullMarks) + '</p>';
  if (store.best !== null) h += '<p class="note">Best score in this browser: ' + fmt(store.best) + ' / ' + fmt(MAX) + '</p>';
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
      else if (q.t === 'build') h += esc(q.d) + '<br>✘ Your sentence: ' + esc(r.resp.map(function (ti) { return tiles(q)[ti]; }).join(' ')) + '<br>✔ <b>' + esc(keyText(q)) + '</b><br>' + esc(q.e);
      else if (q.t === 'gapt') { var k = 0; h += esc(q.d) + '<br>✘ Your answer: ' + esc(q.s.map(function (p) { return isTok(p) ? '[' + (r.resp[k++] || '') + ']' : p; }).join('')) + '<br>✔ <b>' + esc(gapSentence(q)) + '</b><br>' + esc(q.e); }
      else if (q.t === 'err') h += esc(q.d) + '<br>' + (r.s1 ? '' : '✘ Step 1: ' + (g.wordsAre || 'the wrong words were') + ' ' + errsOf(q).map(function (i) { return '<b>' + esc(q.w[i].t) + '</b>'; }).join(', ') + '.<br>') + (r.s2 ? '' : '✘ Step 2: you chose “' + esc(q.o[r.resp]) + '”.<br>') + '✔ <b>' + esc(q.o[0]) + '</b><br>' + esc(q.e);
      else if (q.t === 'exam') h += esc(q.d) + '<br>✘ Your answer: ' + esc(q.f.replace(/\s*…$/, '')) + ' ' + esc(r.resp || '(empty)') + '<br>✔ <b>' + esc(q.model) + '</b><br>' + esc(q.e);
      h += '</div>';
    });
  });
  if (!n) h += '<p>No mistakes to review.</p>';
  return h + '<div class="actions"><button class="btn primary" data-act="results">◀ Back to my results</button></div>';
}

/* ---------- actions ---------- */
function go(page) { view.page = page; render(); window.scrollTo(0, 0); }
/* after Previous / Next the focus stays on the button, so the new question is announced */
function sayQ() { var A = store.att; if (A && A.phase === 'play') say('Question ' + (A.i + 1) + ' of ' + A.order[A.g].length + '. ' + D.games[A.g].how); }
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
  if (act === 'prev') { if (c.A.i > 0) { c.A.i--; save(); render(); window.__inSight(); sayQ(); } return; }
  if (act === 'next') {
    if (!c.A.rec[c.id]) return;
    if (c.A.i < c.A.order[c.A.g].length - 1) { c.A.i++; save(); render(); window.__inSight(); sayQ(); }
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
  if (act === 'spick') { SEL[c.id] = +b.getAttribute('data-v'); render(); return; }
  if (act === 'sdrop') {
    if (SEL[c.id] === undefined) { say('Tap a word first.'); return; }
    d = draft[c.id] || (draft[c.id] = {}); d[SEL[c.id]] = +b.getAttribute('data-m'); delete SEL[c.id];
    var o3 = c.A.opt[c.id], nx = o3.filter(function (ci) { return d[ci] === undefined; })[0];
    if (nx !== undefined) SEL[c.id] = nx;   /* the next word is ready: one tap on a box per word */
    render(); return;
  }
  if (act === 'sback') { d = draft[c.id] || (draft[c.id] = {}); var bv = +b.getAttribute('data-v'); delete d[bv]; SEL[c.id] = bv; render(); return; }
  if (act === 'vpick' || act === 'vslot') {
    d = draft[c.id] || (draft[c.id] = {}); var o2 = c.A.opt[c.id];
    if (act === 'vslot') { if (b.hasAttribute('data-v')) delete d[+b.getAttribute('data-v')]; render(); return; }
    var vv = +b.getAttribute('data-v'), taken = {};
    Object.keys(d).forEach(function (kk) { taken[d[kk]] = 1; });
    var free = o2.m.filter(function (mm) { return !taken[mm]; })[0];
    if (free !== undefined) d[vv] = free;
    render(); return;
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
  var t = e.target.closest && e.target.closest('.btile, .vchip, .vslot.filled'); if (!t || t.disabled || e.button > 0) return;
  drag = { t: t, x: e.clientX, y: e.clientY, i: +t.getAttribute(t.classList.contains('btile') ? 'data-i' : 'data-v'), vm: !t.classList.contains('btile'), moved: false, ghost: null };
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
  var c = cur(); if (c.A.rec[c.id]) return;
  if (dg.vm && c.q.t === 'match') {
    /* U6MATCH: a verb dropped on a box goes there (a verb already in that box goes back to the top row);
       dropped on the top row, it leaves its box */
    var dm = draft[c.id] || (draft[c.id] = {}), el2 = document.elementFromPoint(e.clientX, e.clientY), box = el2 && el2.closest('.dslot');
    var sl2 = box && box.querySelector('.vslot');
    if (sl2) { var mm = +sl2.getAttribute('data-m'); Object.keys(dm).forEach(function (kk) { if (dm[kk] === mm) delete dm[kk]; }); dm[dg.i] = mm; }
    else if (el2 && el2.closest('.vchips')) delete dm[dg.i];
    render(); return;
  }
  if (c.q.t !== 'build') return;
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

/* ============================================================
   chart.js - demonstration natal chart wheel (SVG)
   Renders 12 houses + 12 signs + Sun / Moon / Asc + aspect lines.
   NOT astronomically precise. Sun = day-of-year approximation,
   Moon = deterministic pseudo-random from DOB, Asc = derived
   from time-of-birth (if supplied) by simple lookup.
   ============================================================ */
(function () {
  const NS = 'http://www.w3.org/2000/svg';
  const SIGNS = [
    { glyph: '♈', name_en: 'Aries',       name_fa: 'حمل',   name_ckb: 'بەرخ' },
    { glyph: '♉', name_en: 'Taurus',      name_fa: 'ثور',   name_ckb: 'گا' },
    { glyph: '♊', name_en: 'Gemini',      name_fa: 'جوزا',  name_ckb: 'دووانە' },
    { glyph: '♋', name_en: 'Cancer',      name_fa: 'سرطان', name_ckb: 'كرژاڵ' },
    { glyph: '♌', name_en: 'Leo',         name_fa: 'اسد',   name_ckb: 'شێر' },
    { glyph: '♍', name_en: 'Virgo',       name_fa: 'سنبله', name_ckb: 'گوڵگەنم' },
    { glyph: '♎', name_en: 'Libra',       name_fa: 'میزان', name_ckb: 'تەرازوو' },
    { glyph: '♏', name_en: 'Scorpio',     name_fa: 'عقرب',  name_ckb: 'دوپشك' },
    { glyph: '♐', name_en: 'Sagittarius', name_fa: 'قوس',   name_ckb: 'تیراندازی' },
    { glyph: '♑', name_en: 'Capricorn',   name_fa: 'جدی',   name_ckb: 'بزن' },
    { glyph: '♒', name_en: 'Aquarius',    name_fa: 'دلو',   name_ckb: 'دۆڵكە' },
    { glyph: '♓', name_en: 'Pisces',      name_fa: 'حوت',   name_ckb: 'ماسى' }
  ];
  // Sun sign by month-day boundary (zero-indexed month, 1-indexed day)
  const SUN_BOUNDS = [
    { mo: 2, d: 21, idx: 0 }, // Mar 21 -> Aries
    { mo: 3, d: 20, idx: 1 }, // Apr 20 -> Taurus
    { mo: 4, d: 21, idx: 2 },
    { mo: 5, d: 21, idx: 3 },
    { mo: 6, d: 23, idx: 4 },
    { mo: 7, d: 23, idx: 5 },
    { mo: 8, d: 23, idx: 6 },
    { mo: 9, d: 23, idx: 7 },
    { mo: 10, d: 22, idx: 8 },
    { mo: 11, d: 22, idx: 9 },
    { mo: 0, d: 20, idx: 10 },
    { mo: 1, d: 19, idx: 11 }
  ];

  function sunSign(date) {
    const m = date.getMonth(), d = date.getDate();
    // walk bounds; default Pisces if none matched
    let s = 11;
    for (const b of SUN_BOUNDS) {
      const matches = m > b.mo || (m === b.mo && d >= b.d);
      if (matches) s = b.idx;
    }
    // handle Pisces wrap (Feb 19 - Mar 20)
    if ((m === 1 && d >= 19) || (m === 2 && d <= 20)) s = 11;
    if ((m === 0 && d <= 19) || (m === 11 && d >= 22)) s = 9;
    return s;
  }

  function moonSign(date) {
    // deterministic pseudo-random based on date
    const seed = date.getFullYear() * 100 + (date.getMonth() + 1) * 31 + date.getDate();
    return (seed * 2654435761 >>> 0) % 12;
  }
  function ascSign(time) {
    if (!time) return null;
    const [h, m] = time.split(':').map(Number);
    if (Number.isNaN(h)) return null;
    // every ~2 hours = next sign, anchored arbitrarily at 6am = Aries
    const totalHours = h + (m || 0) / 60;
    return Math.floor(((totalHours - 6 + 24) % 24) / 2) % 12;
  }

  function el(name, attrs, text) {
    const e = document.createElementNS(NS, name);
    if (attrs) for (const k in attrs) e.setAttribute(k, attrs[k]);
    if (text != null) e.textContent = text;
    return e;
  }

  function lang() { return document.documentElement.lang || 'fa'; }

  function render(opts) {
    const svg = document.getElementById('chart-svg');
    if (!svg) return;
    while (svg.firstChild) svg.removeChild(svg.firstChild);
    const VB = 600;
    svg.setAttribute('viewBox', '0 0 ' + VB + ' ' + VB);

    const cx = VB / 2, cy = VB / 2;
    const rOuter = 280, rInner = 200, rHouse = 130, rBody = 165, rGlyph = 240;

    // Three concentric circles
    svg.appendChild(el('circle', { cx, cy, r: rOuter, class: 'wheel-ring' }));
    svg.appendChild(el('circle', { cx, cy, r: rInner, class: 'wheel-ring' }));
    svg.appendChild(el('circle', { cx, cy, r: rHouse, class: 'wheel-ring' }));

    // 12 sign division lines + glyphs
    // Position: 0 deg points right (3 o'clock). We want Aries at left (9 o'clock) so subtract PI.
    for (let i = 0; i < 12; i++) {
      const a = Math.PI - (i / 12) * Math.PI * 2;
      const a2 = Math.PI - ((i + 1) / 12) * Math.PI * 2;
      // boundary line outer
      svg.appendChild(el('line', {
        x1: cx + Math.cos(a) * rInner,
        y1: cy - Math.sin(a) * rInner,
        x2: cx + Math.cos(a) * rOuter,
        y2: cy - Math.sin(a) * rOuter,
        class: 'wheel-sign-line'
      }));
      // glyph at mid
      const aMid = (a + a2) / 2;
      const gx = cx + Math.cos(aMid) * rGlyph;
      const gy = cy - Math.sin(aMid) * rGlyph;
      const glyph = el('text', {
        x: gx, y: gy + 6, 'text-anchor': 'middle',
        class: 'wheel-glyph' + (opts.sunIdx === i ? ' heritage' : '')
      }, SIGNS[i].glyph);
      glyph.setAttribute('font-size', '20');
      svg.appendChild(glyph);
    }

    // 12 house lines (inner)
    const houseOffset = (opts.ascIdx != null) ? opts.ascIdx : 0;
    for (let i = 0; i < 12; i++) {
      const a = Math.PI - ((i + houseOffset) / 12) * Math.PI * 2;
      svg.appendChild(el('line', {
        x1: cx + Math.cos(a) * rHouse,
        y1: cy - Math.sin(a) * rHouse,
        x2: cx + Math.cos(a) * rInner,
        y2: cy - Math.sin(a) * rInner,
        class: 'wheel-house-line'
      }));
      // house number
      const aMid = Math.PI - ((i + houseOffset + 0.5) / 12) * Math.PI * 2;
      const hx = cx + Math.cos(aMid) * (rHouse + 18);
      const hy = cy - Math.sin(aMid) * (rHouse + 18);
      const hn = el('text', { x: hx, y: hy + 4, 'text-anchor': 'middle', class: 'wheel-glyph' }, String(i + 1));
      hn.setAttribute('font-size', '11');
      hn.setAttribute('opacity', '.6');
      svg.appendChild(hn);
    }

    // place bodies
    function place(idx, cls, label) {
      const a = Math.PI - ((idx + 0.5) / 12) * Math.PI * 2;
      const x = cx + Math.cos(a) * rBody;
      const y = cy - Math.sin(a) * rBody;
      svg.appendChild(el('circle', { cx: x, cy: y, r: 6, class: 'wheel-body ' + cls }));
      const t = el('text', { x: x, y: y - 14, 'text-anchor': 'middle', class: 'wheel-glyph' }, label);
      t.setAttribute('font-size', '11');
      svg.appendChild(t);
      return { x, y };
    }
    const bodies = [];
    bodies.push({ p: place(opts.sunIdx, '', '☉'), idx: opts.sunIdx });
    bodies.push({ p: place(opts.moonIdx, 'moon', '☽'), idx: opts.moonIdx });
    if (opts.ascIdx != null) bodies.push({ p: place(opts.ascIdx, 'asc', 'ASC'), idx: opts.ascIdx });

    // aspect lines (just connect bodies through center)
    for (let i = 0; i < bodies.length; i++) {
      for (let j = i + 1; j < bodies.length; j++) {
        svg.appendChild(el('line', {
          x1: bodies[i].p.x, y1: bodies[i].p.y,
          x2: bodies[j].p.x, y2: bodies[j].p.y,
          class: 'wheel-aspect'
        }));
      }
    }

    // center label
    const cl = el('text', { x: cx, y: cy + 5, 'text-anchor': 'middle', class: 'wheel-glyph' }, '✦');
    cl.setAttribute('font-size', '16');
    svg.appendChild(cl);

    // result panel
    const out = document.getElementById('chart-result');
    if (out) {
      const L = lang();
      const sn = SIGNS[opts.sunIdx];
      const mn = SIGNS[opts.moonIdx];
      const an = opts.ascIdx != null ? SIGNS[opts.ascIdx] : null;
      const labels = {
        fa: { sun: 'خورشید', moon: 'ماه', asc: 'طالع', born: 'تاریخ تولد' },
        en: { sun: 'Sun',   moon: 'Moon', asc: 'Ascendant', born: 'Date of birth' },
        ckb: { sun: 'خۆر', moon: 'مانگ', asc: 'هەڵھاتن', born: 'ڕۆژى لەدایكبوون' }
      };
      const L2 = labels[L] || labels.fa;
      const sgName = (s) => L === 'en' ? s.name_en : L === 'ckb' ? s.name_ckb : s.name_fa;
      out.innerHTML = '';
      const h = document.createElement('h4');
      h.textContent = (opts.name || '') ;
      out.appendChild(h);
      const dl = document.createElement('dl');
      function row(k, v) {
        const dt = document.createElement('dt'); dt.textContent = k;
        const dd = document.createElement('dd'); dd.textContent = v;
        dl.append(dt, dd);
      }
      row(L2.born, opts.date);
      row(L2.sun, sn.glyph + ' ' + sgName(sn));
      row(L2.moon, mn.glyph + ' ' + sgName(mn));
      if (an) row(L2.asc, an.glyph + ' ' + sgName(an));
      out.appendChild(dl);
    }
  }

  function bindForm() {
    const form = document.getElementById('chart-form');
    if (!form) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      const dateStr = fd.get('date');
      const timeStr = fd.get('time');
      const place = fd.get('place');
      const name = fd.get('name');
      if (!dateStr) return;
      const date = new Date(dateStr);
      if (isNaN(date)) return;
      render({
        name: name || '',
        date: dateStr + (place ? (', ' + place) : ''),
        sunIdx: sunSign(date),
        moonIdx: moonSign(date),
        ascIdx: ascSign(timeStr)
      });
      const wrap = document.getElementById('chart-frame-wrap');
      if (wrap) wrap.style.display = 'block';
    });

    // demo render with Avin's birthday so the wheel isn't empty
    const demoDate = new Date('1971-04-21');
    render({
      name: 'Avin Dabaghchimokri',
      date: '1971-04-21, Mahabad',
      sunIdx: sunSign(demoDate),
      moonIdx: moonSign(demoDate),
      ascIdx: null
    });
  }

  document.addEventListener('DOMContentLoaded', bindForm);
})();

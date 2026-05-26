/* ============================================================
   cosmography.js - ambient zodiacal arc rotation + star map
   Renders to either #cosmography (full-bg) or #cosmography-hero (hero box).
   Pauses when offscreen. Honours prefers-reduced-motion.
   ============================================================ */
(function () {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');

  function init(canvas, opts) {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let W = 0, H = 0, cx = 0, cy = 0, R = 0;
    let stars = [];
    let constellations = [];
    let t = 0;
    let running = true, visible = true;
    let hover = null;
    const dense = opts && opts.dense;

    // Plausible constellation glyphs (12 zodiac)
    const ZODIAC = [
      { glyph: '♈', name_en: 'Aries',       name_fa: 'حمل',   name_ckb: 'بەرخ',     note_en: 'cardinal fire; the first impulse', note_fa: 'آتش آغازین؛ تکانهٔ نخستین', note_ckb: 'ئاگرى سەرەتا؛ یەكەم پاڵنان' },
      { glyph: '♉', name_en: 'Taurus',      name_fa: 'ثور',   name_ckb: 'گا',        note_en: 'fixed earth; the senses settled', note_fa: 'خاک پایدار؛ حواس مستقر', note_ckb: 'خاكى چەسپاو؛ هەستەكان دامەزراون' },
      { glyph: '♊', name_en: 'Gemini',      name_fa: 'جوزا',  name_ckb: 'دووانە',    note_en: 'mutable air; the doubled voice', note_fa: 'هوای دگرگون؛ صدای دوگانه', note_ckb: 'هەواى گۆڕاو؛ دەنگى دووانە' },
      { glyph: '♋', name_en: 'Cancer',      name_fa: 'سرطان', name_ckb: 'كرژاڵ',     note_en: 'cardinal water; memory as ocean', note_fa: 'آب آغازین؛ خاطره چون اقیانوس', note_ckb: 'ئاوى سەرەتا؛ یاد وەك زەریا' },
      { glyph: '♌', name_en: 'Leo',         name_fa: 'اسد',   name_ckb: 'شێر',       note_en: 'fixed fire; warmth of being seen', note_fa: 'آتش پایدار؛ گرمای دیده‌شدن', note_ckb: 'ئاگرى چەسپاو؛ گەرماى بینرانە' },
      { glyph: '♍', name_en: 'Virgo',       name_fa: 'سنبله', name_ckb: 'گوڵگەنم',   note_en: 'mutable earth; tender precision', note_fa: 'خاک دگرگون؛ دقت مهربان', note_ckb: 'خاكى گۆڕاو؛ ووردى نەرم' },
      { glyph: '♎', name_en: 'Libra',       name_fa: 'میزان', name_ckb: 'تەرازوو',   note_en: 'cardinal air; balance as practice', note_fa: 'هوای آغازین؛ تعادل به مثابهٔ تمرین', note_ckb: 'هەواى سەرەتا؛ هاوسەنگى وەك ڕاهێنان' },
      { glyph: '♏', name_en: 'Scorpio',     name_fa: 'عقرب',  name_ckb: 'دوپشك',     note_en: 'fixed water; the deep undertow', note_fa: 'آب پایدار؛ جریان عمیق زیرین', note_ckb: 'ئاوى چەسپاو؛ ڕەوى قووڵ' },
      { glyph: '♐', name_en: 'Sagittarius', name_fa: 'قوس',   name_ckb: 'تیراندازی', note_en: 'mutable fire; the far horizon', note_fa: 'آتش دگرگون؛ افق دور', note_ckb: 'ئاگرى گۆڕاو؛ ئاسۆى دوور' },
      { glyph: '♑', name_en: 'Capricorn',   name_fa: 'جدی',   name_ckb: 'بزن',       note_en: 'cardinal earth; bone and patience', note_fa: 'خاک آغازین؛ استخوان و صبر', note_ckb: 'خاكى سەرەتا؛ ئێسك و سەبر' },
      { glyph: '♒', name_en: 'Aquarius',    name_fa: 'دلو',   name_ckb: 'دۆڵكە',     note_en: 'fixed air; collective vision', note_fa: 'هوای پایدار؛ بینش جمعی', note_ckb: 'هەواى چەسپاو؛ بینینى كۆمەڵ' },
      { glyph: '♓', name_en: 'Pisces',      name_fa: 'حوت',   name_ckb: 'ماسى',      note_en: 'mutable water; the thinned dream', note_fa: 'آب دگرگون؛ رؤیای رقیق', note_ckb: 'ئاوى گۆڕاو؛ خەونى لاواز' }
    ];

    function resize() {
      const r = canvas.getBoundingClientRect();
      W = r.width; H = r.height;
      canvas.width = Math.floor(W * dpr);
      canvas.height = Math.floor(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cx = W / 2; cy = H / 2;
      R = Math.min(W, H) * 0.42;
      stars = [];
      const n = dense ? Math.floor(W * H / 1600) : Math.floor(W * H / 4500);
      for (let i = 0; i < n; i++) {
        stars.push({
          x: Math.random() * W,
          y: Math.random() * H,
          r: Math.random() * 1.3 + .3,
          tw: Math.random() * Math.PI * 2,
          tws: 0.005 + Math.random() * 0.01,
          c: Math.random() < .8 ? 'rgba(245,230,211,' : 'rgba(167,193,255,'
        });
      }
      constellations = ZODIAC.map((z, i) => {
        const ang = -Math.PI / 2 + (i / 12) * Math.PI * 2;
        return Object.assign({ baseAng: ang }, z);
      });
    }

    function pointInRing(mx, my, ang) {
      // approximate hit: within 22px of the glyph position
      const px = cx + Math.cos(ang) * R;
      const py = cy + Math.sin(ang) * R;
      const d = Math.hypot(mx - px, my - py);
      return d < 22;
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);
      // stars
      for (const s of stars) {
        s.tw += s.tws;
        const a = 0.35 + 0.45 * (0.5 + 0.5 * Math.sin(s.tw));
        ctx.fillStyle = s.c + a.toFixed(3) + ')';
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
      // central faint disc
      const grad = ctx.createRadialGradient(cx, cy, R * 0.2, cx, cy, R * 1.15);
      grad.addColorStop(0, 'rgba(230,185,166,0.04)');
      grad.addColorStop(1, 'rgba(13,10,19,0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(cx, cy, R * 1.15, 0, Math.PI * 2);
      ctx.fill();

      // outer ring
      ctx.strokeStyle = 'rgba(245,230,211,0.10)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.stroke();

      // inner ring
      ctx.strokeStyle = 'rgba(201,165,92,0.18)';
      ctx.beginPath();
      ctx.arc(cx, cy, R * 0.92, 0, Math.PI * 2);
      ctx.stroke();

      // 12 sign division lines
      const rot = t * 0.0002;
      for (let i = 0; i < 12; i++) {
        const a = -Math.PI / 2 + (i / 12) * Math.PI * 2 + rot;
        ctx.strokeStyle = 'rgba(245,230,211,0.06)';
        ctx.beginPath();
        ctx.moveTo(cx + Math.cos(a) * R * 0.92, cy + Math.sin(a) * R * 0.92);
        ctx.lineTo(cx + Math.cos(a) * R, cy + Math.sin(a) * R);
        ctx.stroke();
      }

      // glyphs
      const now = new Date();
      const month = now.getMonth(); // 0-11
      // sun-sign current month index, rough mapping: Mar 21 = Aries, etc.
      const dayOfYear = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / 86400000);
      const sunSignIdx = Math.floor(((dayOfYear - 80 + 365) % 365) / 30.4) % 12;

      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      for (let i = 0; i < 12; i++) {
        const c = constellations[i];
        const a = c.baseAng + rot;
        const gx = cx + Math.cos(a) * R;
        const gy = cy + Math.sin(a) * R;
        const isCurrent = i === sunSignIdx;
        const isHover = hover === i;
        ctx.fillStyle = isHover ? '#f5e6d3' :
                       isCurrent ? 'rgba(201,165,92,0.95)' :
                       'rgba(245,230,211,0.55)';
        ctx.font = (isCurrent || isHover ? '18px' : '15px') + ' "JetBrains Mono", monospace';
        ctx.fillText(c.glyph, gx, gy);
        if (isCurrent) {
          ctx.strokeStyle = 'rgba(201,165,92,0.4)';
          ctx.beginPath();
          ctx.arc(gx, gy, 14, 0, Math.PI * 2);
          ctx.stroke();
        }
      }
    }

    function tick() {
      if (!running) return;
      if (visible) {
        t += 1;
        draw();
      }
      requestAnimationFrame(tick);
    }

    function staticPoster() {
      // For reduced motion: draw once, no tick.
      draw();
    }

    function onMove(e) {
      const r = canvas.getBoundingClientRect();
      const mx = e.clientX - r.left;
      const my = e.clientY - r.top;
      let found = null;
      const rot = t * 0.0002;
      for (let i = 0; i < 12; i++) {
        const a = constellations[i].baseAng + rot;
        if (pointInRing(mx, my, a)) { found = i; break; }
      }
      if (found !== hover) {
        hover = found;
        if (found !== null && opts && opts.tooltip) {
          opts.tooltip.show(constellations[found], e.clientX, e.clientY);
        } else if (opts && opts.tooltip) {
          opts.tooltip.hide();
        }
      }
    }
    function onLeave() {
      if (hover !== null && opts && opts.tooltip) opts.tooltip.hide();
      hover = null;
    }

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();

    if (opts && opts.interactive) {
      canvas.addEventListener('mousemove', onMove);
      canvas.addEventListener('mouseleave', onLeave);
    }

    if (reduce.matches) {
      staticPoster();
    } else {
      // pause when offscreen
      const io = new IntersectionObserver((entries) => {
        for (const e of entries) visible = e.isIntersecting;
      }, { threshold: 0.05 });
      io.observe(canvas);
      tick();
    }
  }

  // tooltip helper
  function makeTooltip() {
    const el = document.createElement('div');
    el.style.cssText = 'position:fixed;pointer-events:none;background:#1a0e1d;border:1px solid rgba(245,230,211,.18);padding:.55rem .8rem;font-size:.78rem;color:#f5e6d3;z-index:100;border-radius:4px;opacity:0;transition:opacity .15s;max-width:260px;line-height:1.45;box-shadow:0 10px 30px -10px rgba(0,0,0,.7);';
    document.body.appendChild(el);
    const lang = () => document.documentElement.lang || 'fa';
    return {
      show(c, x, y) {
        const L = lang();
        const name = L === 'en' ? c.name_en : L === 'ckb' ? c.name_ckb : c.name_fa;
        const note = L === 'en' ? c.note_en : L === 'ckb' ? c.note_ckb : c.note_fa;
        el.innerHTML = '<div style="font-family:JetBrains Mono,monospace;font-size:1.1rem;color:#e6b9a6;margin-bottom:.25rem">' + c.glyph + ' ' + name + '</div><div style="color:#c9bcb0">' + note + '</div>';
        el.style.left = Math.min(x + 14, window.innerWidth - 280) + 'px';
        el.style.top = (y + 14) + 'px';
        el.style.opacity = '1';
      },
      hide() { el.style.opacity = '0'; }
    };
  }

  // bootstrap
  document.addEventListener('DOMContentLoaded', () => {
    const bg = document.getElementById('cosmography');
    if (bg) init(bg, { dense: false });

    const hero = document.getElementById('cosmography-hero');
    if (hero) {
      const tt = makeTooltip();
      init(hero, { dense: true, interactive: true, tooltip: tt });
    }
  });
})();

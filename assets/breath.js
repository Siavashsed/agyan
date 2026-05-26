/* ============================================================
   breath.js - layered breath visualisation
   - inner sphere scales with breath phase
   - mid ring pulses with delayed rhythm
   - outer corona = particles drifting in/out by phase
   Modes: 4-7-8, box (4-4-4-4), hanaseh (4-2-6)
   ============================================================ */
(function () {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');

  const MODES = {
    'hanaseh':  { phases: [{n:'in',d:4000},{n:'hold',d:2000},{n:'out',d:6000}], label: 'Hanaseh 4-2-6' },
    '4-7-8':    { phases: [{n:'in',d:4000},{n:'hold',d:7000},{n:'out',d:8000}], label: '4-7-8' },
    'box':      { phases: [{n:'in',d:4000},{n:'hold',d:4000},{n:'out',d:4000},{n:'hold',d:4000}], label: 'Box 4-4-4-4' }
  };

  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.from((r || document).querySelectorAll(s)); }

  function init() {
    const canvas = $('#breath-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let W = 0, H = 0, cx = 0, cy = 0;
    let particles = [];
    let phaseIdx = 0, phaseStart = 0;
    let modeKey = 'hanaseh';
    let mode = MODES[modeKey];
    let running = false;
    let sessionStart = 0;
    let breathCount = 0;
    let lastPhaseName = 'in';
    let lastTickTime = 0;

    const phaseLabel = $('#breath-phase');
    const timerEl = $('#breath-timer');
    const countEl = $('#breath-count');
    const startBtn = $('#breath-start');

    function resize() {
      const r = canvas.getBoundingClientRect();
      W = r.width; H = r.height;
      canvas.width = Math.floor(W * dpr);
      canvas.height = Math.floor(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cx = W / 2; cy = H / 2;
      if (particles.length === 0) seedParticles();
    }
    function seedParticles() {
      particles = [];
      for (let i = 0; i < 70; i++) {
        const a = Math.random() * Math.PI * 2;
        const r = Math.random() * 0.4 + 0.6;
        particles.push({
          a, r,
          baseR: r,
          speed: 0.0006 + Math.random() * 0.0012,
          alpha: 0.3 + Math.random() * 0.5,
          size: Math.random() * 1.6 + 0.6,
          phase: Math.random() * Math.PI * 2
        });
      }
    }

    function setMode(k) {
      modeKey = k;
      mode = MODES[k];
      phaseIdx = 0;
      phaseStart = performance.now();
      lastPhaseName = mode.phases[0].n;
      breathCount = 0;
      $$('.mode-switch button').forEach(b => {
        b.setAttribute('aria-pressed', String(b.dataset.mode === k));
      });
    }

    function fmtTime(ms) {
      const s = Math.floor(ms / 1000);
      const m = Math.floor(s / 60);
      const r = s % 60;
      return m + ':' + String(r).padStart(2, '0');
    }

    function currentPhase(now) {
      if (!running) return { name: 'rest', progress: 0, t: 0 };
      let t = now - phaseStart;
      let p = mode.phases[phaseIdx];
      while (t >= p.d) {
        t -= p.d;
        phaseStart += p.d;
        phaseIdx = (phaseIdx + 1) % mode.phases.length;
        p = mode.phases[phaseIdx];
        if (p.n === 'in' && phaseIdx === 0) breathCount += 1;
      }
      return { name: p.n, progress: t / p.d, t };
    }

    function easeInOut(t) { return t < 0.5 ? 2*t*t : 1 - Math.pow(-2*t+2, 2)/2; }

    function draw(now) {
      ctx.clearRect(0, 0, W, H);
      const p = currentPhase(now);
      // scale by phase: in -> 0.55 to 1.0, out -> 1.0 to 0.55, hold -> stay
      let scale = 0.7;
      if (p.name === 'in')  scale = 0.55 + 0.45 * easeInOut(p.progress);
      else if (p.name === 'out') scale = 1.0 - 0.45 * easeInOut(p.progress);
      else if (p.name === 'hold') scale = (lastPhaseName === 'in' || phaseIdx > 0 && mode.phases[phaseIdx-1].n === 'in') ? 1.0 : 0.55;

      const maxR = Math.min(W, H) * 0.42;
      const baseR = maxR * scale;

      // corona particles drift inward on 'in', outward on 'out'
      const drift = p.name === 'in' ? -0.0008 : p.name === 'out' ? 0.0008 : 0;
      for (const pt of particles) {
        pt.r += drift;
        if (pt.r < 0.45) pt.r = 1.15;
        if (pt.r > 1.25) pt.r = 0.55;
        pt.a += pt.speed;
        pt.phase += 0.02;
        const px = cx + Math.cos(pt.a) * maxR * pt.r * 1.1;
        const py = cy + Math.sin(pt.a) * maxR * pt.r * 1.1;
        const tw = 0.5 + 0.5 * Math.sin(pt.phase);
        ctx.fillStyle = 'rgba(230,185,166,' + (pt.alpha * 0.5 * tw).toFixed(3) + ')';
        ctx.beginPath();
        ctx.arc(px, py, pt.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // outer ring (delayed pulse)
      const delayed = Math.max(0, scale - 0.1);
      ctx.strokeStyle = 'rgba(167,193,255,0.18)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(cx, cy, maxR * delayed * 1.05, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = 'rgba(230,185,166,0.22)';
      ctx.beginPath();
      ctx.arc(cx, cy, baseR * 1.0, 0, Math.PI * 2);
      ctx.stroke();

      // inner orb with radial gradient
      const grad = ctx.createRadialGradient(cx - baseR * 0.25, cy - baseR * 0.25, baseR * 0.1, cx, cy, baseR);
      grad.addColorStop(0, 'rgba(245,230,211,0.55)');
      grad.addColorStop(0.4, 'rgba(230,185,166,0.32)');
      grad.addColorStop(1, 'rgba(201,138,115,0.05)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(cx, cy, baseR * 0.78, 0, Math.PI * 2);
      ctx.fill();

      // center pinpoint
      ctx.fillStyle = 'rgba(245,230,211,0.85)';
      ctx.beginPath();
      ctx.arc(cx, cy, 3, 0, Math.PI * 2);
      ctx.fill();

      // update DOM
      lastPhaseName = p.name;
      if (phaseLabel) phaseLabel.textContent = labelFor(p.name);
      if (running && timerEl) timerEl.textContent = fmtTime(now - sessionStart);
      if (countEl) countEl.textContent = String(breathCount);
    }

    function labelFor(name) {
      const lang = document.documentElement.lang || 'fa';
      const T = {
        fa: { in: 'دم', hold: 'نگه‌داشتن', out: 'بازدم', rest: 'آماده' },
        en: { in: 'inhale', hold: 'hold', out: 'exhale', rest: 'ready' },
        ckb: { in: 'هەناسەدان', hold: 'ڕاگرتن', out: 'هەناسەدەرکردن', rest: 'ئامادە' }
      };
      return (T[lang] || T.fa)[name] || name;
    }

    let raf;
    function tick(t) {
      lastTickTime = t;
      draw(t);
      raf = requestAnimationFrame(tick);
    }

    function start() {
      if (running) return;
      running = true;
      sessionStart = performance.now();
      phaseStart = sessionStart;
      phaseIdx = 0;
      breathCount = 0;
      if (startBtn) startBtn.textContent = startBtn.dataset.stop || 'Stop';
    }
    function stop() {
      running = false;
      if (startBtn) startBtn.textContent = startBtn.dataset.start || 'Begin';
    }

    if (startBtn) startBtn.addEventListener('click', () => running ? stop() : start());
    $$('.mode-switch button').forEach(b => {
      b.addEventListener('click', () => setMode(b.dataset.mode));
    });

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();
    setMode(modeKey);

    if (reduce.matches) {
      // single static draw
      draw(performance.now());
    } else {
      let visible = true;
      const io = new IntersectionObserver(es => {
        for (const e of es) visible = e.isIntersecting;
      }, { threshold: 0.05 });
      io.observe(canvas);
      (function loop(t) {
        if (visible) draw(t);
        raf = requestAnimationFrame(loop);
      })(performance.now());
    }
  }

  document.addEventListener('DOMContentLoaded', init);
})();

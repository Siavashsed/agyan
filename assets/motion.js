/* ============================================================
   motion.js - scroll reveal + read progress + TOC active
   Respects prefers-reduced-motion.
   ============================================================ */
(function () {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');

  // reveal-on-scroll
  document.addEventListener('DOMContentLoaded', () => {
    const targets = document.querySelectorAll('.reveal');
    if (reduce.matches) {
      targets.forEach(t => t.classList.add('on'));
    } else if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('on');
            io.unobserve(e.target);
          }
        }
      }, { threshold: 0.15 });
      targets.forEach(t => io.observe(t));
    } else {
      targets.forEach(t => t.classList.add('on'));
    }

    // read progress
    const bar = document.querySelector('.read-progress');
    if (bar) {
      const onScroll = () => {
        const h = document.documentElement;
        const max = h.scrollHeight - h.clientHeight;
        const p = max <= 0 ? 0 : (h.scrollTop || document.body.scrollTop) / max;
        bar.style.transform = 'scaleX(' + Math.min(1, p) + ')';
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }

    // TOC active link
    const tocLinks = document.querySelectorAll('.toc a[href^="#"]');
    if (tocLinks.length) {
      const headings = Array.from(tocLinks)
        .map(a => document.getElementById(a.getAttribute('href').slice(1)))
        .filter(Boolean);
      const setActive = () => {
        const top = window.scrollY + 120;
        let active = headings[0];
        for (const h of headings) {
          if (h.offsetTop <= top) active = h;
        }
        tocLinks.forEach(a => a.classList.remove('active'));
        if (active) {
          const a = document.querySelector('.toc a[href="#' + active.id + '"]');
          if (a) a.classList.add('active');
        }
      };
      window.addEventListener('scroll', setActive, { passive: true });
      setActive();
    }

    // mobile nav toggle
    const tog = document.querySelector('.nav-toggle');
    const links = document.querySelector('.nav-links');
    if (tog && links) {
      tog.addEventListener('click', () => {
        const open = links.classList.toggle('open');
        tog.setAttribute('aria-expanded', String(open));
      });
    }
  });
})();

(function () {
  'use strict';

  var SITE_STEM = 'agyan';
  var BRAND_FA  = 'آگیان';
  var BRAND_EN  = 'Agyan';
  var TAGLINE   = { fa: 'آکادمی نَفَس، زبان، و کیهان', en: 'An academy of breath, language, and cosmos' };

  var NAV = [
    { href: 'index.html', key: 'home', fa: 'خانه', en: 'Home' },
    { href: 'about.html', key: 'about', fa: 'دربارهٔ آوین', en: 'About' },
    { href: 'curriculum/index.html', key: 'curriculum', fa: 'برنامه', en: 'Curriculum' },
    { href: 'lab/index.html', key: 'lab', fa: 'آزمایشگاه', en: 'Lab' },
    { href: 'library.html', key: 'library', fa: 'کتابخانه', en: 'Library' },
    { href: 'admissions.html', key: 'admissions', fa: 'ثبت‌نام', en: 'Admissions' }
  ];

  // Stem-aware rel(): finds /SITE_STEM/ in the pathname and counts depth
  // RELATIVE to that, so siavashsed.github.io/agyan/lab/x.html resolves
  // nav 'about.html' as '../about.html' -> '/agyan/about.html' (correct),
  // not '/about.html' (the previous bug).
  function rel(href) {
    var p = window.location.pathname;
    var marker = '/' + SITE_STEM + '/';
    var idx = p.indexOf(marker);
    var tail;
    if (idx >= 0) {
      tail = p.substring(idx + marker.length);
    } else {
      // Custom domain or local dev: treat the whole path after host as tail.
      tail = p.replace(/^\//, '');
    }
    var segs = tail.split('/').filter(Boolean);
    if (segs.length && segs[segs.length - 1].indexOf('.') > -1) segs.pop();
    var depth = segs.length;
    var prefix = '';
    for (var i = 0; i < depth; i++) prefix += '../';
    return prefix + href;
  }

  function currentLang() {
    try {
      var stored = localStorage.getItem('agyan_lang');
      if (stored === 'fa' || stored === 'en') return stored;
    } catch (e) {}
    var doc = document.documentElement.getAttribute('lang');
    if (doc === 'fa' || doc === 'en') return doc;
    return 'fa';
  }

  function buildHeader() {
    var lang = currentLang();
    var brand = lang === 'fa' ? BRAND_FA : BRAND_EN;
    var tagline = TAGLINE[lang] || TAGLINE.fa;

    var navHtml = NAV.map(function (item) {
      var label = item[lang] || item.en;
      var href = rel(item.href);
      return '<li><a href="' + href + '" data-nav-key="' + item.key + '">' + label + '</a></li>';
    }).join('');

    var prefix = 'agyan'.substring(0,2);
    return '<header class="' + prefix + '-header" data-' + prefix + '-header role="banner">' +
        '<div class="' + prefix + '-header-inner">' +
          '<a class="' + prefix + '-brand" href="' + rel('index.html') + '" aria-label="' + brand + '">' +
            '<span class="' + prefix + '-brand-text">' +
              '<span class="' + prefix + '-brand-name">' + brand + '</span>' +
              '<span class="' + prefix + '-brand-tagline">' + tagline + '</span>' +
            '</span>' +
          '</a>' +
          '<button class="' + prefix + '-nav-toggle" type="button" aria-expanded="false" aria-label="menu">' +
            '<span></span><span></span><span></span>' +
          '</button>' +
          '<nav class="' + prefix + '-nav" role="navigation" aria-label="primary">' +
            '<ul class="' + prefix + '-nav-list">' + navHtml + '</ul>' +
          '</nav>' +
          '<div class="' + prefix + '-lang-switch" role="group" aria-label="language">' +
            '<button type="button" data-lang="fa" class="' + (lang === 'fa' ? 'is-active' : '') + '">فا</button>' +
            '<button type="button" data-lang="en" class="' + (lang === 'en' ? 'is-active' : '') + '">EN</button>' +
          '</div>' +
        '</div>' +
      '</header>' +
      '<div class="' + prefix + '-lang-dock" role="group" aria-label="language">' +
        '<button type="button" data-lang="fa" class="' + (lang === 'fa' ? 'is-active' : '') + '">فا</button>' +
        '<button type="button" data-lang="en" class="' + (lang === 'en' ? 'is-active' : '') + '">EN</button>' +
      '</div>';
  }

  function hideLegacyHeaders() {
    var prefix = 'agyan'.substring(0,2);
    document.querySelectorAll('header.site-header, header.site-head, header.hdr').forEach(function (el) {
      if (el.closest('[data-' + prefix + '-header-mount]')) return;
      el.style.display = 'none';
      el.setAttribute('aria-hidden', 'true');
    });
  }

  function mountHeader() {
    var prefix = 'agyan'.substring(0,2);
    var mountAttr = 'data-' + prefix + '-header-mount';
    var mount = document.querySelector('[' + mountAttr + ']');
    if (!mount) {
      mount = document.createElement('div');
      mount.setAttribute(mountAttr, '');
      document.body.insertBefore(mount, document.body.firstChild);
    }
    mount.innerHTML = buildHeader();
    hideLegacyHeaders();
    wire();
  }

  function setLang(lang) {
    if (lang !== 'fa' && lang !== 'en') return;
    try { localStorage.setItem('agyan_lang', lang); } catch (e) {}
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'fa' ? 'rtl' : 'ltr');
    var i18nGlobal = window.AgyanI18n || window.I18n;
    if (i18nGlobal && typeof i18nGlobal.applyLang === 'function') {
      i18nGlobal.applyLang(lang);
    } else {
      document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: lang } }));
    }
    mountHeader();
  }

  function wire() {
    var prefix = 'agyan'.substring(0,2);
    var toggle = document.querySelector('.' + prefix + '-nav-toggle');
    var nav = document.querySelector('.' + prefix + '-nav');
    if (toggle && nav) {
      toggle.addEventListener('click', function () {
        var open = nav.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        document.body.classList.toggle(prefix + '-nav-open', open);
      });
    }
    document.querySelectorAll('[data-lang]').forEach(function (btn) {
      btn.addEventListener('click', function () { setLang(btn.getAttribute('data-lang')); });
    });
    var header = document.querySelector('.' + prefix + '-header');
    if (!header) return;
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    var lastY = window.scrollY;
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        var y = window.scrollY;
        if (y > 200 && y > lastY) header.classList.add('is-hidden');
        else header.classList.remove('is-hidden');
        if (y > 12) header.classList.add('is-condensed'); else header.classList.remove('is-condensed');
        lastY = y;
        ticking = false;
      });
    }, { passive: true });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mountHeader);
  else mountHeader();

  window.AgyanHeader = { mount: mountHeader, setLang: setLang };
})();

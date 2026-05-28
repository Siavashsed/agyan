(function () {
  'use strict';

  var BRAND_FA = 'آگیان';
  var BRAND_EN = 'Agyan';
  var BRAND_CKB = 'ئاگیان';
  var TAGLINE = {
    fa: 'آکادمی نَفَس، زبان، و کیهان',
    en: 'An academy of breath, language, and cosmos',
    ckb: 'ئەکادیمیای هەناسە، زمان، و گەردوون'
  };

  var NAV = [
    { href: 'index.html',                key: 'home',       fa: 'خانه',          en: 'Home',        ckb: 'سەرەکی' },
    { href: 'about.html',                key: 'about',      fa: 'دربارهٔ آوین',  en: 'About',       ckb: 'دەربارە' },
    { href: 'curriculum/index.html',     key: 'curriculum', fa: 'برنامه',        en: 'Curriculum',  ckb: 'بەرنامە' },
    { href: 'lab/index.html',            key: 'lab',        fa: 'آزمایشگاه',     en: 'Lab',         ckb: 'تاقیگە' },
    { href: 'library.html',              key: 'library',    fa: 'کتابخانه',      en: 'Library',     ckb: 'کتێبخانە' },
    { href: 'admissions.html',           key: 'admissions', fa: 'ثبت‌نام',       en: 'Admissions',  ckb: 'تۆمارکردن' }
  ];

  function rel(href) {
    var segs = window.location.pathname.split('/').filter(Boolean);
    if (segs.length && segs[segs.length - 1].indexOf('.') > -1) segs.pop();
    var depth = segs.length;
    var prefix = '';
    for (var i = 0; i < depth; i++) prefix += '../';
    return prefix + href;
  }

  function currentLang() {
    try {
      var stored = localStorage.getItem('agyan_lang');
      if (stored === 'fa' || stored === 'en' || stored === 'ckb') return stored;
    } catch (e) {}
    var doc = document.documentElement.getAttribute('lang');
    if (doc === 'fa' || doc === 'en' || doc === 'ckb') return doc;
    return 'fa';
  }

  function buildHeader() {
    var lang = currentLang();
    var brand = lang === 'fa' ? BRAND_FA : (lang === 'ckb' ? BRAND_CKB : BRAND_EN);
    var tagline = TAGLINE[lang] || TAGLINE.fa;

    var navHtml = NAV.map(function (item) {
      var label = item[lang] || item.en;
      var href = rel(item.href);
      return '<li><a href="' + href + '" data-nav-key="' + item.key + '">' + label + '</a></li>';
    }).join('');

    var html =
      '<header class="ag-header" data-ag-header role="banner">' +
        '<div class="ag-header-inner">' +
          '<a class="ag-brand" href="' + rel('index.html') + '" aria-label="' + brand + '">' +
            '<span class="ag-brand-mark" aria-hidden="true">A</span>' +
            '<span class="ag-brand-text">' +
              '<span class="ag-brand-name">' + brand + '</span>' +
              '<span class="ag-brand-tagline">' + tagline + '</span>' +
            '</span>' +
          '</a>' +
          '<button class="ag-nav-toggle" type="button" aria-expanded="false" aria-controls="ag-nav-list" aria-label="menu">' +
            '<span></span><span></span><span></span>' +
          '</button>' +
          '<nav class="ag-nav" role="navigation" aria-label="primary">' +
            '<ul class="ag-nav-list" id="ag-nav-list">' + navHtml + '</ul>' +
          '</nav>' +
          '<div class="ag-lang-switch" role="group" aria-label="language">' +
            '<button type="button" data-lang="fa" class="' + (lang === 'fa' ? 'is-active' : '') + '">فا</button>' +
            '<button type="button" data-lang="en" class="' + (lang === 'en' ? 'is-active' : '') + '">EN</button>' +
            '<button type="button" data-lang="ckb" class="' + (lang === 'ckb' ? 'is-active' : '') + '">کو</button>' +
          '</div>' +
        '</div>' +
      '</header>' +
      '<div class="ag-lang-dock" role="group" aria-label="language">' +
        '<button type="button" data-lang="fa" class="' + (lang === 'fa' ? 'is-active' : '') + '">فا</button>' +
        '<button type="button" data-lang="en" class="' + (lang === 'en' ? 'is-active' : '') + '">EN</button>' +
        '<button type="button" data-lang="ckb" class="' + (lang === 'ckb' ? 'is-active' : '') + '">کو</button>' +
      '</div>';

    return html;
  }

  function hideLegacyHeaders() {
    var legacy = document.querySelectorAll('header.site-header, header.site-head, header.hdr');
    legacy.forEach(function (el) {
      if (el.closest('[data-ag-header-mount]')) return;
      el.style.display = 'none';
      el.setAttribute('aria-hidden', 'true');
    });
  }

  function mountHeader() {
    var mount = document.querySelector('[data-ag-header-mount]');
    if (!mount) {
      mount = document.createElement('div');
      mount.setAttribute('data-ag-header-mount', '');
      document.body.insertBefore(mount, document.body.firstChild);
    }
    mount.innerHTML = buildHeader();
    hideLegacyHeaders();
    wire();
  }

  function setLang(lang) {
    if (lang !== 'fa' && lang !== 'en' && lang !== 'ckb') return;
    try { localStorage.setItem('agyan_lang', lang); } catch (e) {}
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'en' ? 'ltr' : 'rtl');
    if (window.AgyanI18n && typeof window.AgyanI18n.applyLang === 'function') {
      window.AgyanI18n.applyLang(lang);
    } else {
      document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: lang } }));
    }
    mountHeader();
  }

  function wire() {
    var toggle = document.querySelector('.ag-nav-toggle');
    var nav = document.querySelector('.ag-nav');
    if (toggle && nav) {
      toggle.addEventListener('click', function () {
        var open = nav.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        document.body.classList.toggle('ag-nav-open', open);
      });
    }
    document.querySelectorAll('[data-lang]').forEach(function (btn) {
      btn.addEventListener('click', function () { setLang(btn.getAttribute('data-lang')); });
    });
    wireScrollDirection();
  }

  function wireScrollDirection() {
    var header = document.querySelector('.ag-header');
    if (!header) return;
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    var lastY = window.scrollY;
    var ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () {
        var y = window.scrollY;
        if (y > 200 && y > lastY) {
          header.classList.add('is-hidden');
        } else {
          header.classList.remove('is-hidden');
        }
        if (y > 12) header.classList.add('is-condensed'); else header.classList.remove('is-condensed');
        lastY = y;
        ticking = false;
      });
    }
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mountHeader);
  } else {
    mountHeader();
  }

  window.AgyanHeader = { mount: mountHeader, setLang: setLang };
})();

/**
 * Folio UI mode: "ink" reveal + staggered blocks (article being composed).
 * Skips when prefers-reduced-motion or ui-mode !== folio.
 */
(function () {
  function reducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  function isFolio() {
    return document.documentElement.getAttribute('data-ui-mode') === 'folio';
  }

  function clearFolioMotion() {
    document.body.classList.remove('folio-motion-on');
    document.querySelectorAll('.folio-write-block').forEach(function (el) {
      el.classList.remove('folio-write-block');
      el.style.removeProperty('--folio-delay');
    });
    document.querySelectorAll('.hero').forEach(function (h) {
      h.classList.remove('folio-hero-motion');
    });
  }

  function applyStagger(elements, baseDelay, step) {
    baseDelay = typeof baseDelay === 'number' ? baseDelay : 0;
    step = typeof step === 'number' ? step : 0.07;
    [].forEach.call(elements, function (el, i) {
      el.classList.add('folio-write-block');
      el.style.setProperty('--folio-delay', baseDelay + i * step + 's');
    });
  }

  window.initFolioMotion = function () {
    clearFolioMotion();
    if (reducedMotion() || !isFolio()) return;

    document.body.classList.add('folio-motion-on');

    var hero = document.querySelector('.hero');
    if (hero) {
      hero.classList.add('folio-hero-motion');
      var heroSeq = hero.querySelectorAll(
        '.hero__eyebrow, .hero__title-line, .hero__description, .hero__secondary'
      );
      applyStagger(heroSeq, 0, 0.14);
    }

    document.querySelectorAll('.detail-header').forEach(function (dh) {
      applyStagger(dh.children, 0, 0.11);
    });

    document.querySelectorAll('.detail-body').forEach(function (body) {
      applyStagger(body.children, 0.04, 0.055);
    });

    document.querySelectorAll('.page-title').forEach(function (pt) {
      applyStagger(pt.children, 0, 0.1);
    });

    document.querySelectorAll('.about-content').forEach(function (ac) {
      applyStagger(ac.children, 0.12, 0.06);
    });

    var phil = document.querySelector('.philosophy');
    if (phil) {
      applyStagger(phil.querySelectorAll('.philosophy__mark, .philosophy__quote'), 0.15, 0.22);
    }

    document.querySelectorAll('.stack-grid .stack-group').forEach(function (g, i) {
      g.classList.add('folio-write-block');
      g.style.setProperty('--folio-delay', 0.08 + i * 0.045 + 's');
    });

    var interested = document.querySelector('.stack-interested');
    if (interested) {
      interested.classList.add('folio-write-block');
      interested.style.setProperty('--folio-delay', '0.65s');
    }

    document.querySelectorAll('.focus-grid .focus-card').forEach(function (el, i) {
      el.classList.add('folio-write-block');
      el.style.setProperty('--folio-delay', 0.35 + i * 0.07 + 's');
    });

    document.querySelectorAll('.blog-list .blog-item').forEach(function (el, i) {
      el.classList.add('folio-write-block');
      el.style.setProperty('--folio-delay', 0.28 + i * 0.08 + 's');
    });

    document.querySelectorAll('.projects-grid .project-card').forEach(function (el, i) {
      el.classList.add('folio-write-block');
      el.style.setProperty('--folio-delay', 0.22 + i * 0.06 + 's');
    });
  };

  document.addEventListener('DOMContentLoaded', function () {
    window.initFolioMotion();
  });
})();

/**
 * Folio UI mode: typewriter-style text output + list reveals.
 * Header is not modified by this script. Skips when prefers-reduced-motion or Lab mode.
 */
(function () {
  var timers = [];
  var backup = new WeakMap();
  var folioTargets = [];

  function clearTimers() {
    timers.forEach(function (id) {
      clearTimeout(id);
    });
    timers = [];
  }

  function schedule(fn, ms) {
    var id = setTimeout(function () {
      timers = timers.filter(function (t) {
        return t !== id;
      });
      fn();
    }, ms);
    timers.push(id);
  }

  function reducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  function isFolio() {
    return document.documentElement.getAttribute('data-ui-mode') === 'folio';
  }

  function remember(el) {
    if (backup.has(el)) return backup.get(el);
    if (!el || el.nodeType !== 1) return null;
    var html = el.innerHTML;
    var text = el.textContent || '';
    var data = { html: html, text: text };
    backup.set(el, data);
    if (folioTargets.indexOf(el) === -1) folioTargets.push(el);
    return data;
  }

  function restoreAll() {
    folioTargets.forEach(function (el) {
      var b = backup.get(el);
      if (b && el.parentNode) {
        el.innerHTML = b.html;
      }
      el.classList.remove('folio-typing');
      el.querySelectorAll('.folio-type-caret').forEach(function (c) {
        c.remove();
      });
    });
    folioTargets = [];
    document.querySelectorAll('.folio-type-caret').forEach(function (c) {
      c.remove();
    });
    document.querySelectorAll('.folio-list-reveal').forEach(function (el) {
      el.classList.remove('folio-list-reveal', 'folio-list-reveal--visible');
    });
    document.body.classList.remove('folio-motion-on');
    document.querySelectorAll('.hero').forEach(function (h) {
      h.classList.remove('folio-hero-motion');
    });
  }

  function typeTextElement(el, speedMs, done) {
    var b = remember(el);
    if (!b || !b.text.length) {
      done();
      return;
    }
    el.classList.add('folio-typing');
    el.textContent = '';
    var caret = document.createElement('span');
    caret.className = 'folio-type-caret';
    caret.setAttribute('aria-hidden', 'true');
    el.appendChild(caret);
    var i = 0;
    function step() {
      if (!isFolio()) {
        el.innerHTML = b.html;
        caret.remove();
        el.classList.remove('folio-typing');
        done();
        return;
      }
      if (i > b.text.length) {
        el.innerHTML = b.html;
        caret.remove();
        el.classList.remove('folio-typing');
        done();
        return;
      }
      el.textContent = b.text.slice(0, i);
      el.appendChild(caret);
      i++;
      schedule(step, speedMs);
    }
    step();
  }

  function typeRichBlock(el, speedMs, done) {
    var b = remember(el);
    if (!b || !b.text.length) {
      done();
      return;
    }
    if (el.tagName === 'PRE' || el.classList.contains('highlight')) {
      done();
      return;
    }
    if (b.text.length > 1400) {
      done();
      return;
    }
    el.classList.add('folio-typing');
    el.textContent = '';
    var caret = document.createElement('span');
    caret.className = 'folio-type-caret';
    caret.setAttribute('aria-hidden', 'true');
    el.appendChild(caret);
    var i = 0;
    function step() {
      if (!isFolio()) {
        el.innerHTML = b.html;
        caret.remove();
        el.classList.remove('folio-typing');
        done();
        return;
      }
      if (i > b.text.length) {
        el.innerHTML = b.html;
        caret.remove();
        el.classList.remove('folio-typing');
        done();
        return;
      }
      el.textContent = b.text.slice(0, i);
      el.appendChild(caret);
      i++;
      schedule(step, speedMs);
    }
    step();
  }

  function chain(tasks, i) {
    if (!isFolio()) return;
    if (i >= tasks.length) {
      revealLists();
      return;
    }
    tasks[i](function () {
      chain(tasks, i + 1);
    });
  }

  function prepHiddenLists() {
    document
      .querySelectorAll('.focus-card, .blog-item, .project-card, .stack-group, .stack-interested')
      .forEach(function (el) {
        el.classList.add('folio-list-reveal');
      });
  }

  function revealLists() {
    document
      .querySelectorAll('.folio-list-reveal:not(.folio-list-reveal--visible)')
      .forEach(function (el, idx) {
        schedule(function () {
          el.classList.add('folio-list-reveal--visible');
        }, 40 + idx * 55);
      });
  }

  window.initFolioMotion = function () {
    clearTimers();
    restoreAll();
    backup = new WeakMap();

    if (reducedMotion() || !isFolio()) {
      return;
    }

    document.body.classList.add('folio-motion-on');
    prepHiddenLists();

    var tasks = [];

    var hero = document.querySelector('.hero');
    if (hero) {
      hero.classList.add('folio-hero-motion');
      var heroOrder = hero.querySelectorAll(
        '.hero__eyebrow, .hero__title-line--1, .hero__title-line--2, .hero__description, .hero__secondary'
      );
      [].forEach.call(heroOrder, function (el) {
        tasks.push(function (done) {
          typeTextElement(el, el.classList.contains('hero__description') ? 14 : 22, done);
        });
      });
    }

    document.querySelectorAll('.detail-header').forEach(function (dh) {
      [].forEach.call(dh.children, function (child) {
        tasks.push(function (done) {
          typeTextElement(child, 20, done);
        });
      });
    });

    document.querySelectorAll('.page-title').forEach(function (pt) {
      [].forEach.call(pt.children, function (child) {
        tasks.push(function (done) {
          typeTextElement(child, 18, done);
        });
      });
    });

    document.querySelectorAll('.detail-body').forEach(function (body) {
      [].forEach.call(body.children, function (child) {
        tasks.push(function (done) {
          typeRichBlock(child, 12, done);
        });
      });
    });

    document.querySelectorAll('.about-content').forEach(function (ac) {
      [].forEach.call(ac.children, function (child) {
        tasks.push(function (done) {
          typeRichBlock(child, 14, done);
        });
      });
    });

    var phil = document.querySelector('.philosophy');
    if (phil) {
      var quote = phil.querySelector('.philosophy__quote');
      if (quote) {
        tasks.push(function (done) {
          typeTextElement(quote, 15, done);
        });
      }
    }

    if (tasks.length === 0) {
      revealLists();
      return;
    }

    chain(tasks, 0);
  };

  document.addEventListener('DOMContentLoaded', function () {
    window.initFolioMotion();
  });
})();

/**
 * Folio UI mode: typewriter-style text output + list reveals.
 * Header is not modified. Uses html.folio-typewriter-pending (base.html) to avoid FOUC.
 */
(function () {
  var timers = [];
  var backup = new WeakMap();
  var folioTargets = [];
  var listRevealObserver = null;

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
      el.style.opacity = '';
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
    if (listRevealObserver) {
      listRevealObserver.disconnect();
      listRevealObserver = null;
    }
    document.body.classList.remove('folio-motion-on');
    document.querySelectorAll('.hero').forEach(function (h) {
      h.classList.remove('folio-hero-motion');
    });
  }

  /** Backup all targets, clear short text, keep long/pre hidden until typed or skipped */
  function primeTypingTargets() {
    var items = [];

    var hero = document.querySelector('.hero');
    if (hero) {
      ['.hero__eyebrow', '.hero__title-line--1', '.hero__title-line--2', '.hero__description', '.hero__secondary'].forEach(function (sel) {
        var el = hero.querySelector(sel);
        if (el) items.push({ el: el, kind: 'text' });
      });
    }

    document.querySelectorAll('.detail-header').forEach(function (dh) {
      [].forEach.call(dh.children, function (child) {
        items.push({ el: child, kind: 'text' });
      });
    });

    document.querySelectorAll('.page-title').forEach(function (pt) {
      [].forEach.call(pt.children, function (child) {
        items.push({ el: child, kind: 'text' });
      });
    });

    document.querySelectorAll('.detail-body').forEach(function (body) {
      [].forEach.call(body.children, function (child) {
        items.push({ el: child, kind: 'rich' });
      });
    });

    document.querySelectorAll('.about-content').forEach(function (ac) {
      [].forEach.call(ac.children, function (child) {
        items.push({ el: child, kind: 'rich' });
      });
    });

    var quote = document.querySelector('.philosophy__quote');
    if (quote) items.push({ el: quote, kind: 'text' });

    items.forEach(function (item) {
      remember(item.el);
    });

    items.forEach(function (item) {
      var el = item.el;
      var b = backup.get(el);
      var t = b ? b.text : '';
      if (item.kind === 'rich') {
        if (el.tagName === 'PRE' || el.classList.contains('highlight')) {
          el.style.opacity = '0';
          return;
        }
        if (t.length > 1400) {
          el.style.opacity = '0';
          return;
        }
      }
      el.textContent = '';
    });

    document.documentElement.classList.remove('folio-typewriter-pending');
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
        el.style.opacity = '';
        caret.remove();
        el.classList.remove('folio-typing');
        done();
        return;
      }
      if (i > b.text.length) {
        el.innerHTML = b.html;
        el.style.opacity = '';
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
      el.style.opacity = '';
      done();
      return;
    }
    if (b.text.length > 1400) {
      el.style.opacity = '';
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
        el.style.opacity = '';
        caret.remove();
        el.classList.remove('folio-typing');
        done();
        return;
      }
      if (i > b.text.length) {
        el.innerHTML = b.html;
        el.style.opacity = '';
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

  /** Stagger within the same parent (e.g. focus grid) when multiple cards enter together */
  function staggerDelayFor(el) {
    var parent = el.parentElement;
    if (!parent) return 0;
    var peers = parent.querySelectorAll(
      ':scope > .focus-card, :scope > .blog-item, :scope > .project-card, :scope > .stack-group, :scope > .stack-interested'
    );
    var idx = 0;
    for (var i = 0; i < peers.length; i++) {
      if (peers[i] === el) {
        idx = i;
        break;
      }
    }
    return Math.min(idx * 48, 360);
  }

  function bindFolioListReveal() {
    if (listRevealObserver) {
      listRevealObserver.disconnect();
      listRevealObserver = null;
    }

    var candidates = document.querySelectorAll(
      '.focus-card, .blog-item, .project-card, .stack-group, .stack-interested'
    );
    if (!candidates.length) return;

    listRevealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting || !isFolio()) return;
          var el = entry.target;
          if (!el.classList.contains('folio-list-reveal')) return;
          var delay = staggerDelayFor(el);
          schedule(function () {
            if (isFolio() && el.isConnected) {
              el.classList.add('folio-list-reveal--visible');
            }
          }, delay);
          listRevealObserver.unobserve(el);
        });
      },
      {
        threshold: 0.06,
        rootMargin: '0px 0px -4% 0px',
      }
    );

    candidates.forEach(function (el) {
      if (!el.classList.contains('folio-list-reveal')) {
        el.classList.add('folio-list-reveal');
      }
      listRevealObserver.observe(el);
    });
  }

  window.initFolioMotion = function () {
    clearTimers();
    if (!isFolio() || reducedMotion()) {
      document.documentElement.classList.remove('folio-typewriter-pending');
    }
    restoreAll();
    backup = new WeakMap();

    if (reducedMotion() || !isFolio()) {
      return;
    }

    document.documentElement.classList.add('folio-typewriter-pending');
    document.body.classList.add('folio-motion-on');
    prepHiddenLists();
    primeTypingTargets();
    bindFolioListReveal();

    var tasks = [];

    var hero = document.querySelector('.hero');
    if (hero) {
      hero.classList.add('folio-hero-motion');
      hero.querySelectorAll('.hero__eyebrow, .hero__title-line--1, .hero__title-line--2, .hero__description, .hero__secondary').forEach(function (el) {
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
      return;
    }

    chain(tasks, 0);
  };

  document.addEventListener('DOMContentLoaded', function () {
    window.initFolioMotion();
  });
})();

function _typeof(e) {
  return (_typeof =
    typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
      ? function(e) {
          return typeof e;
        }
      : function(e) {
          return e &&
            typeof Symbol === 'function' &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? 'symbol'
            : typeof e;
        })(e);
}
!(function(e, t) {
  typeof define === 'function' && define.amd
    ? define([], () => t(e))
    : (typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) ===
      'object'
    ? (module.exports = t(e))
    : (e.SmoothScroll = t(e));
})(
  typeof global !== 'undefined'
    ? global
    : typeof window !== 'undefined'
    ? window
    : void 0,
  e => {
    const t = {
      ignore: '[data-scroll-ignore]',
      header: null,
      topOnEmptyHash: !0,
      speed: 500,
      speedAsDuration: !1,
      durationMax: null,
      durationMin: null,
      clip: !0,
      offset: 0,
      easing: 'easeInOutCubic',
      customEasing: null,
      updateURL: !0,
      popstate: !0,
      emitEvents: !0
    };

    const n = function() {
      return (
        'querySelector' in document &&
        'addEventListener' in e &&
        'requestAnimationFrame' in e &&
        'closest' in e.Element.prototype
      );
    };

    const o = function() {
      const e = {};
      return (
        Array.prototype.forEach.call(arguments, t => {
          for (const n in t) {
            if (!t.hasOwnProperty(n)) {
              return;
            }
            e[n] = t[n];
          }
        }),
        e
      );
    };

    const a = function(t) {
      return !!(
        'matchMedia' in e && e.matchMedia('(prefers-reduced-motion)').matches
      );
    };

    const r = function(t) {
      return parseInt(e.getComputedStyle(t).height, 10);
    };

    const i = function(e) {
      e.charAt(0) === '#' && (e = e.substr(1));
      for (
        var t, n = String(e), o = n.length, a = -1, r = '', i = n.charCodeAt(0);
        ++a < o;

      ) {
        if ((t = n.charCodeAt(a)) === 0) {
          throw new InvalidCharacterError(
            'Invalid character: the input contains U+0000.'
          );
        }
        (t >= 1 && t <= 31) ||
        t == 127 ||
        (a === 0 && t >= 48 && t <= 57) ||
        (a === 1 && t >= 48 && t <= 57 && i === 45)
          ? (r += `\\${t.toString(16)} `)
          : (r +=
              t >= 128 ||
              t === 45 ||
              t === 95 ||
              (t >= 48 && t <= 57) ||
              (t >= 65 && t <= 90) ||
              (t >= 97 && t <= 122)
                ? n.charAt(a)
                : `\\${n.charAt(a)}`);
      }
      return `#${r}`;
    };

    const u = function(e, t) {
      let n;
      return (
        e.easing === 'easeInQuad' && (n = t * t),
        e.easing === 'easeOutQuad' && (n = t * (2 - t)),
        e.easing === 'easeInOutQuad' &&
          (n = t < 0.5 ? 2 * t * t : (4 - 2 * t) * t - 1),
        e.easing === 'easeInCubic' && (n = t * t * t),
        e.easing === 'easeOutCubic' && (n = --t * t * t + 1),
        e.easing === 'easeInOutCubic' &&
          (n =
            t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1),
        e.easing === 'easeInQuart' && (n = t * t * t * t),
        e.easing === 'easeOutQuart' && (n = 1 - --t * t * t * t),
        e.easing === 'easeInOutQuart' &&
          (n = t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t),
        e.easing === 'easeInQuint' && (n = t * t * t * t * t),
        e.easing === 'easeOutQuint' && (n = 1 + --t * t * t * t * t),
        e.easing === 'easeInOutQuint' &&
          (n = t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t),
        e.customEasing && (n = e.customEasing(t)),
        n || t
      );
    };

    const s = function() {
      return Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      );
    };

    const c = function(t, n, o, a) {
      let r = 0;
      if (t.offsetParent) {
        do {
          (r += t.offsetTop), (t = t.offsetParent);
        } while (t);
      }
      return (
        (r = Math.max(r - n - o, 0)),
        a && (r = Math.min(r, s() - e.innerHeight)),
        r
      );
    };

    const l = function(e) {
      return e ? r(e) + e.offsetTop : 0;
    };

    const d = function(e, t) {
      const n = t.speedAsDuration ? t.speed : Math.abs((e / 1e3) * t.speed);
      return t.durationMax && n > t.durationMax
        ? t.durationMax
        : t.durationMin && n < t.durationMin
        ? t.durationMin
        : parseInt(n, 10);
    };

    const m = function(t) {
      if (history.replaceState && t.updateURL && !history.state) {
        let n = e.location.hash;
        (n = n || e.pageYOffset),
          history.replaceState(
            { smoothScroll: JSON.stringify(t), anchor: n || e.pageYOffset },
            document.title,
            n || e.location.href
          );
      }
    };

    const f = function(e, t, n) {
      t ||
        (history.pushState &&
          n.updateURL &&
          history.pushState(
            { smoothScroll: JSON.stringify(n), anchor: e.id },
            document.title,
            e === document.documentElement ? '#top' : `#${e.id}`
          ));
    };

    const p = function(t, n, o) {
      t === 0 && document.body.focus(),
        o ||
          (t.focus(),
          document.activeElement !== t &&
            (t.setAttribute('tabindex', '-1'),
            t.focus(),
            (t.style.outline = 'none')),
          e.scrollTo(0, n));
    };

    const h = function(t, n, o, a) {
      if (n.emitEvents && typeof e.CustomEvent === 'function') {
        const r = new CustomEvent(t, {
          bubbles: !0,
          detail: { anchor: o, toggle: a }
        });
        document.dispatchEvent(r);
      }
    };
    return function(r, y) {
      let g;

      let b;

      let v;

      let S;

      let E;

      let O;

      const I = {};
      (I.cancelScroll = function(e) {
        cancelAnimationFrame(O), (O = null), e || h('scrollCancel', g);
      }),
        (I.animateScroll = function(n, a, r) {
          I.cancelScroll();
          const i = o(g || t, r || {});

          const m = Object.prototype.toString.call(n) === '[object Number]';

          const y = m || !n.tagName ? null : n;
          if (m || y) {
            const b = e.pageYOffset;
            i.header && !S && (S = document.querySelector(i.header));
            let v;

            let E;

            let A;

            const C = l(S);

            const L = m
              ? n
              : c(
                  y,
                  C,
                  parseInt(
                    typeof i.offset === 'function' ? i.offset(n, a) : i.offset,
                    10
                  ),
                  i.clip
                );

            const M = L - b;

            const w = s();

            let N = 0;

            const x = d(M, i);

            const H = function(t, o) {
              const r = e.pageYOffset;
              if (t == o || r == o || (b < o && e.innerHeight + r) >= w) {
                return (
                  I.cancelScroll(!0),
                  p(n, o, m),
                  h('scrollStop', i, n, a),
                  (v = null),
                  (O = null),
                  !0
                );
              }
            };

            const q = function t(n) {
              v || (v = n),
                (N += n - v),
                (E = x === 0 ? 0 : N / x),
                (E = E > 1 ? 1 : E),
                (A = b + M * u(i, E)),
                e.scrollTo(0, Math.floor(A)),
                H(A, L) || ((O = e.requestAnimationFrame(t)), (v = n));
            };
            e.pageYOffset === 0 && e.scrollTo(0, 0),
              f(n, m, i),
              h('scrollStart', i, n, a),
              I.cancelScroll(!0),
              e.requestAnimationFrame(q);
          }
        });
      const A = function(t) {
        if (
          !a() &&
          t.button === 0 &&
          !t.metaKey &&
          !t.ctrlKey &&
          'closest' in t.target &&
          (v = t.target.closest(r)) &&
          v.tagName.toLowerCase() === 'a' &&
          !t.target.closest(g.ignore) &&
          v.hostname === e.location.hostname &&
          v.pathname === e.location.pathname &&
          /#/.test(v.href)
        ) {
          const n = i(v.hash);

          let o =
            g.topOnEmptyHash && n === '#'
              ? document.documentElement
              : document.querySelector(n);
          (o = o || n !== '#top' ? o : document.documentElement),
            o && (t.preventDefault(), m(g), I.animateScroll(o, v));
        }
      };

      const C = function(e) {
        if (
          history.state !== null &&
          history.state.smoothScroll &&
          history.state.smoothScroll === JSON.stringify(g)
        ) {
          let t = history.state.anchor;
          (t &&
            t !== 0 &&
            !(t = document.querySelector(i(history.state.anchor)))) ||
            I.animateScroll(t, null, { updateURL: !1 });
        }
      };
      return (
        (I.destroy = function() {
          g &&
            (document.removeEventListener('click', A, !1),
            e.removeEventListener('popstate', C, !1),
            I.cancelScroll(),
            (g = null),
            (b = null),
            (v = null),
            (S = null),
            (E = null),
            (O = null));
        }),
        (I.init = function(a) {
          if (!n()) {
            throw 'Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.';
          }
          I.destroy(),
            (g = o(t, a || {})),
            (S = g.header ? document.querySelector(g.header) : null),
            document.addEventListener('click', A, !1),
            g.updateURL && g.popstate && e.addEventListener('popstate', C, !1);
        }),
        I.init(y),
        I
      );
    };
  }
);
const scroll = new SmoothScroll('a[href*="#"]', {
  easing: 'easeInOutCubic',
  offset: 64
});
const menuOpen = document.getElementById('js-navOpen');
const menuClose = document.getElementById('js-navClose');
const metabarNav = document.getElementById('js-metabarNav');
menuOpen.addEventListener('click', () => {
  metabarNav.classList.add('open');
}),
  menuClose.addEventListener('click', () => {
    metabarNav.classList.remove('open');
  });
for (
  let embeds = document.getElementsByClassName('embedly-card'), i = 0;
  i < embeds.length;
  i += 1
) {
  embeds[i].setAttribute('data-card-controls', '0'),
    embeds[i].setAttribute('data-card-align', 'left'),
    embeds[i].setAttribute('data-card-recommend', '0'),
    embeds[i].setAttribute('data-card-chrome', '0');
}
// # sourceMappingURL=scripts.js.map

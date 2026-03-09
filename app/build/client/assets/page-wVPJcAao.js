import { a as l, p as a } from './chunk-WWGJGFF6-CzgBTqlU.js';
import { A as S, m as g } from './proxy-CnLaudG0.js';
import { u as b, b as T } from './redux-toolkit.modern-Bd2BvcLC.js';
const k = 50,
  Y = 50,
  _ = 10,
  I = 0.3,
  R = 0.15,
  m = 800,
  j = 3,
  q = 360 * j,
  z = 180,
  w = 1,
  K = [4, 6, 8, 10, 12, 20],
  V = [1, 2, 3, 4, 5],
  X = [40, 60, 90, 130, 190, 270, 380],
  Z = 80,
  G = 85,
  J = ({ children: n }) => {
    const e = l.useRef(null),
      [t, r] = l.useState(!1),
      [u, i] = l.useState(0);
    l.useEffect(() => {
      const c = e.current;
      if (!c) return;
      const d = new ResizeObserver(() => {
        i(c.getBoundingClientRect().height);
      });
      return (d.observe(c), i(c.getBoundingClientRect().height), () => d.disconnect());
    }, []);
    const s = Math.max(0, u - _),
      o = (c, d) => {
        const { offset: f, velocity: h } = d;
        if (f.y > s * I || h.y > m) {
          r(!1);
          return;
        } else if (f.y < -s * R || h.y < -m) {
          r(!0);
          return;
        }
      };
    return a.jsxs(a.Fragment, {
      children: [
        a.jsx(S, {
          children:
            t &&
            a.jsx(
              g.div,
              {
                className: 'overlay',
                onClick: () => r(!1),
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                transition: { duration: 0.18 },
              },
              'overlay',
            ),
        }),
        a.jsxs(g.div, {
          ref: e,
          className: 'sheet',
          role: 'dialog',
          'aria-modal': 'true',
          'aria-expanded': t,
          initial: { y: 9999 },
          animate: { y: t ? 0 : s },
          transition: { type: 'spring', stiffness: 420, damping: 38 },
          drag: 'y',
          dragConstraints: { top: 0, bottom: s },
          dragElastic: 0.05,
          onDragEnd: o,
          children: [
            a.jsx('button', {
              type: 'button',
              className: 'handleButton',
              onClick: () => r(!t),
              'aria-label': t ? 'Close panel' : 'Open panel',
              children: a.jsx('div', { className: 'grabber' }),
            }),
            a.jsx('div', { className: 'content', children: n }),
          ],
        }),
      ],
    });
  },
  x = ({ id: n, label: e, isActive: t, onSelect: r }) =>
    a.jsx(g.li, {
      className: 'tab',
      role: 'tab',
      'aria-selected': t,
      initial: !1,
      onClick: () => r(n),
      children: a.jsx('span', { className: 'label', children: e }),
    }),
  Q = ({
    settingsContent: n,
    historyContent: e,
    defaultTab: t = 'settings',
    swipeEnabled: r = !0,
    swipeThresholdPx: u = 60,
  }) => {
    const [i, s] = l.useState(t),
      o = (d) => {
        s(d);
      },
      c = (d, f) => {
        if (!r) return;
        const { offset: h, velocity: p } = f,
          E = h.x < -u || p.x < -m,
          N = h.x > u || p.x > m;
        if (i === 'settings' && N) {
          s('history');
          return;
        } else if (i === 'history' && E) {
          s('settings');
          return;
        }
      };
    return a.jsxs('div', {
      className: 'root',
      children: [
        a.jsx('nav', {
          className: 'nav',
          'aria-label': 'Tabs',
          'data-active-index': i === 'settings' ? 0 : 1,
          'data-tab-count': n ? 2 : 1,
          children: a.jsxs('ul', {
            className: 'list',
            role: 'tablist',
            children: [
              n
                ? a.jsx(x, {
                    id: 'settings',
                    label: 'Settings',
                    isActive: i === 'settings',
                    onSelect: () => o('settings'),
                  })
                : null,
              a.jsx(x, {
                id: 'history',
                label: 'History',
                isActive: i === 'history',
                onSelect: () => o('history'),
              }),
            ],
          }),
        }),
        a.jsx('div', {
          className: 'panel',
          role: 'tabpanel',
          children: a.jsx(S, {
            mode: 'wait',
            initial: !1,
            children: a.jsxs(
              g.div,
              {
                className: 'panelInner',
                initial: { y: 10, opacity: 0 },
                animate: { y: 0, opacity: 1 },
                exit: { y: -10, opacity: 0 },
                transition: { duration: 0.2 },
                drag: r ? 'x' : !1,
                dragConstraints: { left: 0, right: 0 },
                dragElastic: 0.05,
                onDragEnd: c,
                children: [i === 'settings' ? n : null, i === 'history' ? e : null],
              },
              i,
            ),
          }),
        }),
      ],
    });
  },
  v = 1831565813,
  y = 0,
  A = 15,
  C = 7,
  L = 14,
  D = 1,
  F = 61,
  O = 2 ** 32,
  U = (n) => {
    let e = n >>> y;
    return function () {
      e += v;
      let t = Math.imul(e ^ (e >>> A), D | e);
      return ((t ^= t + Math.imul(t ^ (t >>> C), F | t)), ((t ^ (t >>> L)) >>> y) / O);
    };
  },
  H = ({ items: n, count: e, rng: t, options: r = { unique: !0 } }) => {
    if (!Number.isFinite(e) || e <= 0) return [];
    if (n.length === 0) return [];
    if ((r.unique ?? !0) && e <= n.length) {
      const s = n.slice();
      for (let o = 0; o < e; o++) {
        const c = o + Math.floor(t() * (s.length - o));
        [s[o], s[c]] = [s[c], s[o]];
      }
      return s.slice(0, e);
    }
    const i = [];
    for (let s = 0; s < e; s++) {
      const o = Math.floor(t() * n.length);
      i.push(n[o]);
    }
    return i;
  },
  W = ({ seed: n, values: e, unique: t = !0 }) => {
    const r = l.useMemo(() => U(n), [n]),
      [u, i] = l.useState([]),
      s = l.useCallback(
        (o) => {
          const c = H({ items: e, count: o, rng: r, options: { unique: t } });
          return (i(c), c);
        },
        [e, r, t],
      );
    return { result: u, generate: s };
  },
  $ = () => b(),
  tt = T,
  et = 12345,
  st = 360,
  nt = 3;
export {
  J as B,
  Y as C,
  G as D,
  st as F,
  z as H,
  k as R,
  et as S,
  Q as T,
  tt as a,
  W as b,
  nt as c,
  q as d,
  w as e,
  K as f,
  V as g,
  X as h,
  Z as i,
  $ as u,
};

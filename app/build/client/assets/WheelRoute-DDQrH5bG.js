const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/History-Dmurc1Sm.js',
      'assets/chunk-WWGJGFF6-CzgBTqlU.js',
      'assets/trash-2-Dp3dLB2C.js',
      'assets/createLucideIcon-CaUA1BhJ.js',
      'assets/History-CBMwa4wd.css',
    ]),
) => i.map((i) => d[i]);
import { _ as A } from './preload-helper-BXl3LOEh.js';
import { a as h, p as e, w as E } from './chunk-WWGJGFF6-CzgBTqlU.js';
import {
  C as o,
  R as g,
  u as S,
  a as f,
  b as D,
  B as I,
  T,
  S as M,
  F as C,
  c as B,
} from './page-wVPJcAao.js';
import { m as P } from './proxy-CnLaudG0.js';
import {
  s as $,
  c as U,
  d as O,
  e as F,
  f as W,
  g as k,
  h as z,
  i as H,
  j as q,
  k as V,
} from './wheelListsSlice-DztqBp0q.js';
import { c as K } from './createLucideIcon-CaUA1BhJ.js';
import { T as X } from './trash-2-Dp3dLB2C.js';
import './redux-toolkit.modern-Bd2BvcLC.js';
const Y = [['path', { d: 'm18 15-6-6-6 6', key: '153udz' }]],
  Z = K('chevron-up', Y),
  G = 5,
  J = ({ segments: a, highlightedIds: l, rotationDeg: u = 0 }) => {
    const m = h.useMemo(() => new Set(l), [l]),
      w = h.useMemo(() => {
        const i = a.length;
        if (i === 0) return [];
        const x =
            i % 2 === 0
              ? ['wheel__slice-path--primary', 'wheel__slice-path--secondary-a']
              : [
                  'wheel__slice-path--primary',
                  'wheel__slice-path--secondary-a',
                  'wheel__slice-path--secondary-b',
                ],
          d = (r, j, t, c) => ({ x: r + t * Math.cos(c), y: j + t * Math.sin(c) }),
          L = (r) => (x.length === 3 && i % 3 === 1 && r === i - 1 ? x[1] : x[r % x.length]),
          N = (2 * Math.PI) / i;
        return a.map((r, j) => {
          const t = -Math.PI / 2 + j * N,
            c = t + N,
            n = d(o, o, g, t),
            _ = d(o, o, g, c),
            s = N > Math.PI ? 1 : 0,
            y = [`M ${o} ${o}`, `L ${n.x} ${n.y}`, `A ${g} ${g} 0 ${s} 1 ${_.x} ${_.y}`, 'Z'].join(
              ' ',
            ),
            v = t + N / 2,
            p = d(o, o, g * 0.62, v),
            b = (v * 180) / Math.PI;
          return { seg: r, d: y, textPos: p, midDeg: b, toneClass: L(j), key: r.id };
        });
      }, [a]);
    return e.jsxs(P.svg, {
      className: 'wheel',
      viewBox: '0 0 100 100',
      animate: { rotate: u },
      transition: { duration: 1.2, ease: [0.17, 0.67, 0.12, 1] },
      children: [
        e.jsx('circle', { className: 'wheel__base', cx: o, cy: o, r: g }),
        w.map((i) => {
          const d = m.has(i.seg.id)
            ? 'wheel__slice-path wheel__slice-path--active'
            : 'wheel__slice-path';
          return e.jsxs(
            'g',
            {
              className: 'wheel__slice',
              children: [
                e.jsx('path', { d: i.d, className: `${d} ${i.toneClass}` }),
                e.jsx('text', {
                  className: 'wheel__label',
                  x: i.textPos.x,
                  y: i.textPos.y,
                  textAnchor: 'middle',
                  dominantBaseline: 'middle',
                  transform: `rotate(${i.midDeg} ${i.textPos.x} ${i.textPos.y})`,
                  children: i.seg.label,
                }),
              ],
            },
            i.key,
          );
        }),
        e.jsx('circle', { className: 'wheel__hub', cx: o, cy: o, r: G }),
        e.jsx('circle', { className: 'wheel__rim-shadow', cx: o, cy: o, r: g }),
        e.jsx('circle', { className: 'wheel__rim-highlight', cx: o, cy: o, r: g - 0.8 }),
        e.jsx('circle', { className: 'wheel__border', cx: o, cy: o, r: g - 0.4 }),
      ],
    });
  },
  Q = '_root_dwuxx_1',
  ee = { root: Q },
  te = ({ value: a, min: l, max: u, onChange: m }) =>
    e.jsxs('section', {
      className: 'block__row',
      children: [
        e.jsx('div', { className: 'blockTitle', children: 'Results count:' }),
        e.jsxs('div', {
          className: 'countRow',
          children: [
            e.jsx('button', {
              type: 'button',
              'aria-label': 'Decrease results count',
              className: 'countBtn',
              onClick: () => m(a - 1),
              disabled: a <= l,
              children: '−',
            }),
            e.jsx('div', { className: 'countValue', children: a }),
            e.jsx('button', {
              type: 'button',
              'aria-label': 'Increase results count',
              className: 'countBtn',
              onClick: () => m(a + 1),
              disabled: a >= u,
              children: '+',
            }),
          ],
        }),
      ],
    }),
  se = ({
    lists: a,
    activeListId: l,
    expandedListId: u,
    onSelectActive: m,
    onToggleExpanded: w,
    onChangeListName: i,
    onChangeItem: x,
    onBlurItem: d,
    onAddItem: L,
    onAddList: N,
    onDeleteList: r,
  }) => {
    const [j, t] = h.useState({}),
      c = h.useRef({}),
      n = h.useRef({}),
      _ = (s) => {
        const y = (j[s] ?? '').trim();
        y &&
          (n.current[s] ||
            ((n.current[s] = !0),
            L(s, y),
            t((v) => ({ ...v, [s]: '' })),
            requestAnimationFrame(() => {
              (c.current[s]?.focus(),
                setTimeout(() => {
                  n.current[s] = !1;
                }, 0));
            })));
      };
    return e.jsxs('section', {
      className: 'block',
      children: [
        e.jsxs('div', {
          className: 'blockTitle',
          children: [
            e.jsx('div', { children: 'Lists:' }),
            e.jsx('button', {
              type: 'button',
              'aria-label': 'Add a list',
              className: 'addBtn',
              onClick: N,
              children: '+',
            }),
          ],
        }),
        e.jsx('div', {
          className: 'lists',
          children: a.map((s) => {
            const y = s.id === l,
              v = s.id === u;
            return e.jsxs(
              'div',
              {
                className: 'listCard',
                children: [
                  e.jsxs('div', {
                    className: 'row',
                    children: [
                      e.jsx('button', {
                        type: 'button',
                        'aria-label': 'Choose the list',
                        className: `row-main ${y ? 'row-main--active' : ''}`,
                        onClick: () => m(s.id),
                        children: s.name,
                      }),
                      e.jsx('button', {
                        type: 'button',
                        className: 'rowToggle',
                        onClick: () => w(s.id),
                        'aria-label': v ? 'Collapse' : 'Edit',
                        children: e.jsx(Z, { className: `chevron ${v ? 'chevronOpen' : ''}` }),
                      }),
                    ],
                  }),
                  v
                    ? e.jsxs('div', {
                        className: 'editor',
                        children: [
                          e.jsxs('div', {
                            className: 'editorLine',
                            children: [
                              e.jsxs('div', {
                                className: 'editorTitle',
                                children: [
                                  e.jsx('label', { className: 'label', children: 'Name' }),
                                  e.jsx('button', {
                                    type: 'button',
                                    className: 'iconTrash',
                                    onClick: () => r(s.id),
                                    'aria-label': 'Delete the list',
                                    children: e.jsx(X, {}),
                                  }),
                                ],
                              }),
                              e.jsx('input', {
                                className: 'input',
                                value: s.name,
                                onChange: (p) => i(s.id, p.target.value),
                                placeholder: 'List name',
                              }),
                            ],
                          }),
                          e.jsxs('div', {
                            className: 'editorLine',
                            children: [
                              e.jsx('div', { className: 'label', children: 'Items' }),
                              e.jsxs('div', {
                                className: 'items',
                                children: [
                                  s.items.map((p, b) =>
                                    e.jsx(
                                      'input',
                                      {
                                        className: 'input',
                                        value: p,
                                        onChange: (R) => x(s.id, b, R.target.value),
                                        onBlur: () => d(s.id, b),
                                        placeholder: `item ${b + 1}`,
                                      },
                                      `${s.id}-${b}`,
                                    ),
                                  ),
                                  e.jsx('input', {
                                    className: 'input',
                                    placeholder: 'Add an item…',
                                    value: j[s.id] ?? '',
                                    ref: (p) => {
                                      c.current[s.id] = p;
                                    },
                                    onChange: (p) => t((b) => ({ ...b, [s.id]: p.target.value })),
                                    onKeyDown: (p) => {
                                      p.key === 'Enter' && (p.preventDefault(), _(s.id));
                                    },
                                    onBlur: () => {
                                      _(s.id);
                                    },
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      })
                    : null,
                ],
              },
              s.id,
            );
          }),
        }),
      ],
    });
  };
function ne(a, l, u) {
  return Math.max(l, Math.min(u, a));
}
const ae = () => {
    const a = S(),
      l = f((t) => t.wheelLists.collection),
      u = f((t) => t.wheelSettings.count),
      m = f((t) => t.wheelSettings.activeList),
      [w, i] = h.useState(null),
      d = h.useMemo(() => l.find((t) => t.id === m) ?? null, [l, m])?.items.length ?? 0;
    h.useEffect(() => {
      const t = d > 1 ? 1 : 0;
      a($(t));
    }, [a, d]);
    const L = () => `List ${l.length ? l.length : ''}`,
      N = () => `list_${Date.now()}`,
      r = () => {
        const t = N();
        (a(H({ id: t, name: L(), items: [] })), i(t));
      },
      j = (t) => {
        const c = l.filter((n) => n.id !== t);
        (a(z(t)), t === w && i(null), t === m && a(k(c[0].id ?? '')));
      };
    return e.jsxs('div', {
      className: ee.root,
      children: [
        e.jsx(te, { value: u, min: 0, max: d, onChange: (t) => a($(ne(t, 0, d))) }),
        e.jsx(se, {
          lists: l,
          activeListId: m,
          expandedListId: w,
          onSelectActive: (t) => a(k(t)),
          onToggleExpanded: (t) => i((c) => (c === t ? null : t)),
          onChangeListName: (t, c) => a(W({ listId: t, newName: c })),
          onChangeItem: (t, c, n) => a(F({ listId: t, index: c, value: n })),
          onBlurItem: (t, c) => a(O({ listId: t, index: c })),
          onAddItem: (t, c) => a(U({ listId: t, value: c })),
          onAddList: r,
          onDeleteList: j,
        }),
      ],
    });
  },
  ie = () => {
    const a = f((n) => n.wheelSettings.count),
      l = f((n) => n.wheelHistory.entries),
      u = S(),
      m = f((n) => n.wheelSettings.activeList),
      i = f((n) => n.wheelLists.collection).find((n) => n.id === m),
      x = h.useMemo(
        () => (i ? i.items.map((n, _) => ({ id: `${i.id}-${_}`, label: n })) : []),
        [i],
      ),
      d = h.lazy(() => A(() => import('./History-Dmurc1Sm.js'), __vite__mapDeps([0, 1, 2, 3, 4]))),
      [L, N] = h.useState(0),
      { result: r, generate: j } = D({ seed: M, values: x, unique: !0 }),
      t = (n) => {
        N((s) => s + C * B + Math.random() * C);
        const _ = j(n);
        u(V(_.map((s) => s.label)));
      },
      c = h.useMemo(() => r.map((n) => n.id), [r]);
    return e.jsxs('div', {
      className: 'page',
      children: [
        e.jsx(J, { segments: x, rotationDeg: L, highlightedIds: c }),
        e.jsx('button', {
          disabled: x.length === 0,
          className: 'goButton',
          onClick: () => t(a),
          children: 'Spin',
        }),
        e.jsxs('div', { children: ['Picked: ', r.map((n) => n.label).join(', ') || '—'] }),
        e.jsx(I, {
          children: e.jsx(T, {
            settingsContent: e.jsx(ae, {}),
            historyContent: e.jsx(h.Suspense, {
              fallback: e.jsx('div', { children: 'Loading...' }),
              children: e.jsx(d, { entries: l, onClear: () => u(q()) }),
            }),
            defaultTab: 'settings',
          }),
        }),
      ],
    });
  },
  xe = E(ie);
export { xe as default };

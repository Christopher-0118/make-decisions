import { p as s, w as m, a as u } from './chunk-WWGJGFF6-CzgBTqlU.js';
import {
  d as p,
  H as h,
  u as f,
  a as x,
  b as _,
  B as j,
  T as y,
  S as v,
  e as C,
} from './page-wVPJcAao.js';
import E from './History-Dmurc1Sm.js';
import { m as c } from './proxy-CnLaudG0.js';
import { a as N, b } from './coinHistorySlice-CLp7QKx1.js';
import './redux-toolkit.modern-Bd2BvcLC.js';
import './trash-2-Dp3dLB2C.js';
import './createLucideIcon-CaUA1BhJ.js';
const S = ({ side: a, isFlipping: e, onFlipEnd: i }) => {
    const o = p + (a === 'tails' ? h : 0);
    return s.jsx('div', {
      className: 'coin_stage',
      children: s.jsx(c.div, {
        className: 'coin_motion',
        initial: { y: 0, scale: 1 },
        animate: e ? { y: [0, -6, -140, 0], scale: [1, 0.98, 1.02, 1] } : { y: 0, scale: 1 },
        transition: e
          ? {
              duration: 1.5,
              times: [0, 0.02, 0.55, 1],
              ease: ['easeOut', 'easeOut', 'easeInOut', 'easeOut'],
            }
          : { duration: 0.2 },
        children: s.jsxs(c.div, {
          className: `coin coin-${a}`,
          initial: { rotateX: 0 },
          animate: e ? { rotateX: o } : { rotateX: a === 'heads' ? 0 : 180 },
          transition: e ? { duration: 1.5, ease: 'linear' } : { duration: 0 },
          onAnimationComplete: () => {
            e && i?.();
          },
          children: [
            s.jsx('div', {
              className: 'coin_face coin_face__front',
              children: s.jsx('span', { className: 'coin_label', children: 'Heads' }),
            }),
            s.jsx('div', {
              className: 'coin_face coin_face__back',
              children: s.jsx('span', { className: 'coin_label', children: 'Tails' }),
            }),
          ],
        }),
      }),
    });
  },
  A = () => {
    const a = f(),
      e = x((t) => t.coinHistory.entries),
      { result: i, generate: o } = _({ seed: v, values: ['heads', 'tails'] }),
      l = i[0] ?? 'heads',
      [n, r] = u.useState(!1),
      d = () => {
        if (n) return;
        const t = o(C);
        (t[0] && a(b(t[0])), r(!0));
      };
    return s.jsxs('div', {
      className: 'page',
      children: [
        s.jsx('div', {
          onClick: d,
          children: s.jsx(S, { side: l, isFlipping: n, onFlipEnd: () => r(!1) }),
        }),
        s.jsx(j, {
          children: s.jsx(y, {
            historyContent: s.jsx(E, { entries: e, onClear: () => a(N()) }),
            defaultTab: 'history',
          }),
        }),
      ],
    });
  },
  D = m(A);
export { D as default };

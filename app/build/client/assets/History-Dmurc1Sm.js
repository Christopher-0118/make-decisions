import { p as s } from './chunk-WWGJGFF6-CzgBTqlU.js';
import { T as t } from './trash-2-Dp3dLB2C.js';
import './createLucideIcon-CaUA1BhJ.js';
const o = ({ entries: l, onClear: e }) =>
  s.jsxs('div', {
    className: 'results-table',
    children: [
      s.jsxs('div', {
        className: 'table-header',
        children: [
          s.jsx('strong', { children: 'Results:' }),
          s.jsx('button', {
            onClick: e,
            'aria-label': 'Clear history',
            className: 'iconTrash',
            children: s.jsx(t, { size: 20 }),
          }),
        ],
      }),
      l.map((r, a) =>
        s.jsxs(
          'label',
          {
            className: 'result',
            children: [
              s.jsx('label', { children: r.time }),
              s.jsx('label', {
                children: Array.isArray(r.results) ? r.results.join(', ') : r.results,
              }),
              r.resultsSum ? s.jsx('label', { children: r.resultsSum }) : '',
            ],
          },
          a,
        ),
      ),
    ],
  });
export { o as default };

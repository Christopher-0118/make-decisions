function Sa(e, t) {
  for (var r = 0; r < t.length; r++) {
    const n = t[r];
    if (typeof n != 'string' && !Array.isArray(n)) {
      for (const a in n)
        if (a !== 'default' && !(a in e)) {
          const o = Object.getOwnPropertyDescriptor(n, a);
          o && Object.defineProperty(e, a, o.get ? o : { enumerable: !0, get: () => n[a] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }));
}
function xa(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
}
var Gt = { exports: {} },
  nt = {};
var jr;
function Pa() {
  if (jr) return nt;
  jr = 1;
  var e = Symbol.for('react.transitional.element'),
    t = Symbol.for('react.fragment');
  function r(n, a, o) {
    var i = null;
    if ((o !== void 0 && (i = '' + o), a.key !== void 0 && (i = '' + a.key), 'key' in a)) {
      o = {};
      for (var s in a) s !== 'key' && (o[s] = a[s]);
    } else o = a;
    return ((a = o.ref), { $$typeof: e, type: n, key: i, ref: a !== void 0 ? a : null, props: o });
  }
  return ((nt.Fragment = t), (nt.jsx = r), (nt.jsxs = r), nt);
}
var Hr;
function Ca() {
  return (Hr || ((Hr = 1), (Gt.exports = Pa())), Gt.exports);
}
var Bl = Ca(),
  Xt = { exports: {} },
  z = {};
var Ur;
function La() {
  if (Ur) return z;
  Ur = 1;
  var e = Symbol.for('react.transitional.element'),
    t = Symbol.for('react.portal'),
    r = Symbol.for('react.fragment'),
    n = Symbol.for('react.strict_mode'),
    a = Symbol.for('react.profiler'),
    o = Symbol.for('react.consumer'),
    i = Symbol.for('react.context'),
    s = Symbol.for('react.forward_ref'),
    l = Symbol.for('react.suspense'),
    u = Symbol.for('react.memo'),
    h = Symbol.for('react.lazy'),
    d = Symbol.for('react.activity'),
    v = Symbol.iterator;
  function w(p) {
    return p === null || typeof p != 'object'
      ? null
      : ((p = (v && p[v]) || p['@@iterator']), typeof p == 'function' ? p : null);
  }
  var E = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    C = Object.assign,
    R = {};
  function P(p, S, I) {
    ((this.props = p), (this.context = S), (this.refs = R), (this.updater = I || E));
  }
  ((P.prototype.isReactComponent = {}),
    (P.prototype.setState = function (p, S) {
      if (typeof p != 'object' && typeof p != 'function' && p != null)
        throw Error(
          'takes an object of state variables to update or a function which returns an object of state variables.',
        );
      this.updater.enqueueSetState(this, p, S, 'setState');
    }),
    (P.prototype.forceUpdate = function (p) {
      this.updater.enqueueForceUpdate(this, p, 'forceUpdate');
    }));
  function b() {}
  b.prototype = P.prototype;
  function M(p, S, I) {
    ((this.props = p), (this.context = S), (this.refs = R), (this.updater = I || E));
  }
  var T = (M.prototype = new b());
  ((T.constructor = M), C(T, P.prototype), (T.isPureReactComponent = !0));
  var D = Array.isArray;
  function k() {}
  var f = { H: null, A: null, T: null, S: null },
    B = Object.prototype.hasOwnProperty;
  function W(p, S, I) {
    var H = I.ref;
    return { $$typeof: e, type: p, key: S, ref: H !== void 0 ? H : null, props: I };
  }
  function G(p, S) {
    return W(p.type, S, p.props);
  }
  function U(p) {
    return typeof p == 'object' && p !== null && p.$$typeof === e;
  }
  function se(p) {
    var S = { '=': '=0', ':': '=2' };
    return (
      '$' +
      p.replace(/[=:]/g, function (I) {
        return S[I];
      })
    );
  }
  var Z = /\/+/g;
  function q(p, S) {
    return typeof p == 'object' && p !== null && p.key != null ? se('' + p.key) : S.toString(36);
  }
  function ne(p) {
    switch (p.status) {
      case 'fulfilled':
        return p.value;
      case 'rejected':
        throw p.reason;
      default:
        switch (
          (typeof p.status == 'string'
            ? p.then(k, k)
            : ((p.status = 'pending'),
              p.then(
                function (S) {
                  p.status === 'pending' && ((p.status = 'fulfilled'), (p.value = S));
                },
                function (S) {
                  p.status === 'pending' && ((p.status = 'rejected'), (p.reason = S));
                },
              )),
          p.status)
        ) {
          case 'fulfilled':
            return p.value;
          case 'rejected':
            throw p.reason;
        }
    }
    throw p;
  }
  function te(p, S, I, H, Y) {
    var J = typeof p;
    (J === 'undefined' || J === 'boolean') && (p = null);
    var Q = !1;
    if (p === null) Q = !0;
    else
      switch (J) {
        case 'bigint':
        case 'string':
        case 'number':
          Q = !0;
          break;
        case 'object':
          switch (p.$$typeof) {
            case e:
            case t:
              Q = !0;
              break;
            case h:
              return ((Q = p._init), te(Q(p._payload), S, I, H, Y));
          }
      }
    if (Q)
      return (
        (Y = Y(p)),
        (Q = H === '' ? '.' + q(p, 0) : H),
        D(Y)
          ? ((I = ''),
            Q != null && (I = Q.replace(Z, '$&/') + '/'),
            te(Y, S, I, '', function (Bt) {
              return Bt;
            }))
          : Y != null &&
            (U(Y) &&
              (Y = G(
                Y,
                I +
                  (Y.key == null || (p && p.key === Y.key)
                    ? ''
                    : ('' + Y.key).replace(Z, '$&/') + '/') +
                  Q,
              )),
            S.push(Y)),
        1
      );
    Q = 0;
    var he = H === '' ? '.' : H + ':';
    if (D(p))
      for (var me = 0; me < p.length; me++)
        ((H = p[me]), (J = he + q(H, me)), (Q += te(H, S, I, J, Y)));
    else if (((me = w(p)), typeof me == 'function'))
      for (p = me.call(p), me = 0; !(H = p.next()).done; )
        ((H = H.value), (J = he + q(H, me++)), (Q += te(H, S, I, J, Y)));
    else if (J === 'object') {
      if (typeof p.then == 'function') return te(ne(p), S, I, H, Y);
      throw (
        (S = String(p)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (S === '[object Object]' ? 'object with keys {' + Object.keys(p).join(', ') + '}' : S) +
            '). If you meant to render a collection of children, use an array instead.',
        )
      );
    }
    return Q;
  }
  function ue(p, S, I) {
    if (p == null) return p;
    var H = [],
      Y = 0;
    return (
      te(p, H, '', '', function (J) {
        return S.call(I, J, Y++);
      }),
      H
    );
  }
  function ee(p) {
    if (p._status === -1) {
      var S = p._result;
      ((S = S()),
        S.then(
          function (I) {
            (p._status === 0 || p._status === -1) && ((p._status = 1), (p._result = I));
          },
          function (I) {
            (p._status === 0 || p._status === -1) && ((p._status = 2), (p._result = I));
          },
        ),
        p._status === -1 && ((p._status = 0), (p._result = S)));
    }
    if (p._status === 1) return p._result.default;
    throw p._result;
  }
  var fe =
      typeof reportError == 'function'
        ? reportError
        : function (p) {
            if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
              var S = new window.ErrorEvent('error', {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof p == 'object' && p !== null && typeof p.message == 'string'
                    ? String(p.message)
                    : String(p),
                error: p,
              });
              if (!window.dispatchEvent(S)) return;
            } else if (typeof process == 'object' && typeof process.emit == 'function') {
              process.emit('uncaughtException', p);
              return;
            }
            console.error(p);
          },
    be = {
      map: ue,
      forEach: function (p, S, I) {
        ue(
          p,
          function () {
            S.apply(this, arguments);
          },
          I,
        );
      },
      count: function (p) {
        var S = 0;
        return (
          ue(p, function () {
            S++;
          }),
          S
        );
      },
      toArray: function (p) {
        return (
          ue(p, function (S) {
            return S;
          }) || []
        );
      },
      only: function (p) {
        if (!U(p))
          throw Error('React.Children.only expected to receive a single React element child.');
        return p;
      },
    };
  return (
    (z.Activity = d),
    (z.Children = be),
    (z.Component = P),
    (z.Fragment = r),
    (z.Profiler = a),
    (z.PureComponent = M),
    (z.StrictMode = n),
    (z.Suspense = l),
    (z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f),
    (z.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (p) {
        return f.H.useMemoCache(p);
      },
    }),
    (z.cache = function (p) {
      return function () {
        return p.apply(null, arguments);
      };
    }),
    (z.cacheSignal = function () {
      return null;
    }),
    (z.cloneElement = function (p, S, I) {
      if (p == null) throw Error('The argument must be a React element, but you passed ' + p + '.');
      var H = C({}, p.props),
        Y = p.key;
      if (S != null)
        for (J in (S.key !== void 0 && (Y = '' + S.key), S))
          !B.call(S, J) ||
            J === 'key' ||
            J === '__self' ||
            J === '__source' ||
            (J === 'ref' && S.ref === void 0) ||
            (H[J] = S[J]);
      var J = arguments.length - 2;
      if (J === 1) H.children = I;
      else if (1 < J) {
        for (var Q = Array(J), he = 0; he < J; he++) Q[he] = arguments[he + 2];
        H.children = Q;
      }
      return W(p.type, Y, H);
    }),
    (z.createContext = function (p) {
      return (
        (p = {
          $$typeof: i,
          _currentValue: p,
          _currentValue2: p,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (p.Provider = p),
        (p.Consumer = { $$typeof: o, _context: p }),
        p
      );
    }),
    (z.createElement = function (p, S, I) {
      var H,
        Y = {},
        J = null;
      if (S != null)
        for (H in (S.key !== void 0 && (J = '' + S.key), S))
          B.call(S, H) && H !== 'key' && H !== '__self' && H !== '__source' && (Y[H] = S[H]);
      var Q = arguments.length - 2;
      if (Q === 1) Y.children = I;
      else if (1 < Q) {
        for (var he = Array(Q), me = 0; me < Q; me++) he[me] = arguments[me + 2];
        Y.children = he;
      }
      if (p && p.defaultProps)
        for (H in ((Q = p.defaultProps), Q)) Y[H] === void 0 && (Y[H] = Q[H]);
      return W(p, J, Y);
    }),
    (z.createRef = function () {
      return { current: null };
    }),
    (z.forwardRef = function (p) {
      return { $$typeof: s, render: p };
    }),
    (z.isValidElement = U),
    (z.lazy = function (p) {
      return { $$typeof: h, _payload: { _status: -1, _result: p }, _init: ee };
    }),
    (z.memo = function (p, S) {
      return { $$typeof: u, type: p, compare: S === void 0 ? null : S };
    }),
    (z.startTransition = function (p) {
      var S = f.T,
        I = {};
      f.T = I;
      try {
        var H = p(),
          Y = f.S;
        (Y !== null && Y(I, H),
          typeof H == 'object' && H !== null && typeof H.then == 'function' && H.then(k, fe));
      } catch (J) {
        fe(J);
      } finally {
        (S !== null && I.types !== null && (S.types = I.types), (f.T = S));
      }
    }),
    (z.unstable_useCacheRefresh = function () {
      return f.H.useCacheRefresh();
    }),
    (z.use = function (p) {
      return f.H.use(p);
    }),
    (z.useActionState = function (p, S, I) {
      return f.H.useActionState(p, S, I);
    }),
    (z.useCallback = function (p, S) {
      return f.H.useCallback(p, S);
    }),
    (z.useContext = function (p) {
      return f.H.useContext(p);
    }),
    (z.useDebugValue = function () {}),
    (z.useDeferredValue = function (p, S) {
      return f.H.useDeferredValue(p, S);
    }),
    (z.useEffect = function (p, S) {
      return f.H.useEffect(p, S);
    }),
    (z.useEffectEvent = function (p) {
      return f.H.useEffectEvent(p);
    }),
    (z.useId = function () {
      return f.H.useId();
    }),
    (z.useImperativeHandle = function (p, S, I) {
      return f.H.useImperativeHandle(p, S, I);
    }),
    (z.useInsertionEffect = function (p, S) {
      return f.H.useInsertionEffect(p, S);
    }),
    (z.useLayoutEffect = function (p, S) {
      return f.H.useLayoutEffect(p, S);
    }),
    (z.useMemo = function (p, S) {
      return f.H.useMemo(p, S);
    }),
    (z.useOptimistic = function (p, S) {
      return f.H.useOptimistic(p, S);
    }),
    (z.useReducer = function (p, S, I) {
      return f.H.useReducer(p, S, I);
    }),
    (z.useRef = function (p) {
      return f.H.useRef(p);
    }),
    (z.useState = function (p) {
      return f.H.useState(p);
    }),
    (z.useSyncExternalStore = function (p, S, I) {
      return f.H.useSyncExternalStore(p, S, I);
    }),
    (z.useTransition = function () {
      return f.H.useTransition();
    }),
    (z.version = '19.2.3'),
    z
  );
}
var zr;
function Ta() {
  return (zr || ((zr = 1), (Xt.exports = La())), Xt.exports);
}
var m = Ta();
const Ma = xa(m),
  Da = Sa({ __proto__: null, default: Ma }, [m]);
var wn = (e) => {
    throw TypeError(e);
  },
  _a = (e, t, r) => t.has(e) || wn('Cannot ' + r),
  Kt = (e, t, r) => (_a(e, t, 'read from private field'), r ? r.call(e) : t.get(e)),
  Oa = (e, t, r) =>
    t.has(e)
      ? wn('Cannot add the same private member more than once')
      : t instanceof WeakSet
        ? t.add(e)
        : t.set(e, r),
  Br = 'popstate';
function Wl(e = {}) {
  function t(n, a) {
    let { pathname: o, search: i, hash: s } = n.location;
    return ut(
      '',
      { pathname: o, search: i, hash: s },
      (a.state && a.state.usr) || null,
      (a.state && a.state.key) || 'default',
    );
  }
  function r(n, a) {
    return typeof a == 'string' ? a : Le(a);
  }
  return Aa(t, r, null, e);
}
function V(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function ie(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Na() {
  return Math.random().toString(36).substring(2, 10);
}
function Wr(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function ut(e, t, r = null, n) {
  return {
    pathname: typeof e == 'string' ? e : e.pathname,
    search: '',
    hash: '',
    ...(typeof t == 'string' ? $e(t) : t),
    state: r,
    key: (t && t.key) || n || Na(),
  };
}
function Le({ pathname: e = '/', search: t = '', hash: r = '' }) {
  return (
    t && t !== '?' && (e += t.charAt(0) === '?' ? t : '?' + t),
    r && r !== '#' && (e += r.charAt(0) === '#' ? r : '#' + r),
    e
  );
}
function $e(e) {
  let t = {};
  if (e) {
    let r = e.indexOf('#');
    r >= 0 && ((t.hash = e.substring(r)), (e = e.substring(0, r)));
    let n = e.indexOf('?');
    (n >= 0 && ((t.search = e.substring(n)), (e = e.substring(0, n))), e && (t.pathname = e));
  }
  return t;
}
function Aa(e, t, r, n = {}) {
  let { window: a = document.defaultView, v5Compat: o = !1 } = n,
    i = a.history,
    s = 'POP',
    l = null,
    u = h();
  u == null && ((u = 0), i.replaceState({ ...i.state, idx: u }, ''));
  function h() {
    return (i.state || { idx: null }).idx;
  }
  function d() {
    s = 'POP';
    let R = h(),
      P = R == null ? null : R - u;
    ((u = R), l && l({ action: s, location: C.location, delta: P }));
  }
  function v(R, P) {
    s = 'PUSH';
    let b = ut(C.location, R, P);
    u = h() + 1;
    let M = Wr(b, u),
      T = C.createHref(b);
    try {
      i.pushState(M, '', T);
    } catch (D) {
      if (D instanceof DOMException && D.name === 'DataCloneError') throw D;
      a.location.assign(T);
    }
    o && l && l({ action: s, location: C.location, delta: 1 });
  }
  function w(R, P) {
    s = 'REPLACE';
    let b = ut(C.location, R, P);
    u = h();
    let M = Wr(b, u),
      T = C.createHref(b);
    (i.replaceState(M, '', T), o && l && l({ action: s, location: C.location, delta: 0 }));
  }
  function E(R) {
    return En(R);
  }
  let C = {
    get action() {
      return s;
    },
    get location() {
      return e(a, i);
    },
    listen(R) {
      if (l) throw new Error('A history only accepts one active listener');
      return (
        a.addEventListener(Br, d),
        (l = R),
        () => {
          (a.removeEventListener(Br, d), (l = null));
        }
      );
    },
    createHref(R) {
      return t(a, R);
    },
    createURL: E,
    encodeLocation(R) {
      let P = E(R);
      return { pathname: P.pathname, search: P.search, hash: P.hash };
    },
    push: v,
    replace: w,
    go(R) {
      return i.go(R);
    },
  };
  return C;
}
function En(e, t = !1) {
  let r = 'http://localhost';
  (typeof window < 'u' &&
    (r = window.location.origin !== 'null' ? window.location.origin : window.location.href),
    V(r, 'No window.location.(origin|href) available to create URL'));
  let n = typeof e == 'string' ? e : Le(e);
  return ((n = n.replace(/ $/, '%20')), !t && n.startsWith('//') && (n = r + n), new URL(n, r));
}
var lt,
  Yr = class {
    constructor(e) {
      if ((Oa(this, lt, new Map()), e)) for (let [t, r] of e) this.set(t, r);
    }
    get(e) {
      if (Kt(this, lt).has(e)) return Kt(this, lt).get(e);
      if (e.defaultValue !== void 0) return e.defaultValue;
      throw new Error('No value found for context');
    }
    set(e, t) {
      Kt(this, lt).set(e, t);
    }
  };
lt = new WeakMap();
var ka = new Set(['lazy', 'caseSensitive', 'path', 'id', 'index', 'children']);
function Ia(e) {
  return ka.has(e);
}
var $a = new Set(['lazy', 'caseSensitive', 'path', 'id', 'index', 'middleware', 'children']);
function Fa(e) {
  return $a.has(e);
}
function ja(e) {
  return e.index === !0;
}
function ct(e, t, r = [], n = {}, a = !1) {
  return e.map((o, i) => {
    let s = [...r, String(i)],
      l = typeof o.id == 'string' ? o.id : s.join('-');
    if (
      (V(o.index !== !0 || !o.children, 'Cannot specify children on an index route'),
      V(
        a || !n[l],
        `Found a route id collision on id "${l}".  Route id's must be globally unique within Data Router usages`,
      ),
      ja(o))
    ) {
      let u = { ...o, id: l };
      return ((n[l] = Vr(u, t(u))), u);
    } else {
      let u = { ...o, id: l, children: void 0 };
      return ((n[l] = Vr(u, t(u))), o.children && (u.children = ct(o.children, t, s, n, a)), u);
    }
  });
}
function Vr(e, t) {
  return Object.assign(e, {
    ...t,
    ...(typeof t.lazy == 'object' && t.lazy != null ? { lazy: { ...e.lazy, ...t.lazy } } : {}),
  });
}
function Ne(e, t, r = '/') {
  return st(e, t, r, !1);
}
function st(e, t, r, n) {
  let a = typeof t == 'string' ? $e(t) : t,
    o = Re(a.pathname || '/', r);
  if (o == null) return null;
  let i = bn(e);
  Ha(i);
  let s = null;
  for (let l = 0; s == null && l < i.length; ++l) {
    let u = Ka(o);
    s = Xa(i[l], u, n);
  }
  return s;
}
function Rn(e, t) {
  let { route: r, pathname: n, params: a } = e;
  return { id: r.id, pathname: n, params: a, data: t[r.id], loaderData: t[r.id], handle: r.handle };
}
function bn(e, t = [], r = [], n = '', a = !1) {
  let o = (i, s, l = a, u) => {
    let h = {
      relativePath: u === void 0 ? i.path || '' : u,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: s,
      route: i,
    };
    if (h.relativePath.startsWith('/')) {
      if (!h.relativePath.startsWith(n) && l) return;
      (V(
        h.relativePath.startsWith(n),
        `Absolute route path "${h.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
      ),
        (h.relativePath = h.relativePath.slice(n.length)));
    }
    let d = Ce([n, h.relativePath]),
      v = r.concat(h);
    (i.children &&
      i.children.length > 0 &&
      (V(
        i.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${d}".`,
      ),
      bn(i.children, t, v, d, l)),
      !(i.path == null && !i.index) && t.push({ path: d, score: Ja(d, i.index), routesMeta: v }));
  };
  return (
    e.forEach((i, s) => {
      if (i.path === '' || !i.path?.includes('?')) o(i, s);
      else for (let l of Sn(i.path)) o(i, s, !0, l);
    }),
    t
  );
}
function Sn(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [r, ...n] = t,
    a = r.endsWith('?'),
    o = r.replace(/\?$/, '');
  if (n.length === 0) return a ? [o, ''] : [o];
  let i = Sn(n.join('/')),
    s = [];
  return (
    s.push(...i.map((l) => (l === '' ? o : [o, l].join('/')))),
    a && s.push(...i),
    s.map((l) => (e.startsWith('/') && l === '' ? '/' : l))
  );
}
function Ha(e) {
  e.sort((t, r) =>
    t.score !== r.score
      ? r.score - t.score
      : Ga(
          t.routesMeta.map((n) => n.childrenIndex),
          r.routesMeta.map((n) => n.childrenIndex),
        ),
  );
}
var Ua = /^:[\w-]+$/,
  za = 3,
  Ba = 2,
  Wa = 1,
  Ya = 10,
  Va = -2,
  Jr = (e) => e === '*';
function Ja(e, t) {
  let r = e.split('/'),
    n = r.length;
  return (
    r.some(Jr) && (n += Va),
    t && (n += Ba),
    r.filter((a) => !Jr(a)).reduce((a, o) => a + (Ua.test(o) ? za : o === '' ? Wa : Ya), n)
  );
}
function Ga(e, t) {
  return e.length === t.length && e.slice(0, -1).every((n, a) => n === t[a])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Xa(e, t, r = !1) {
  let { routesMeta: n } = e,
    a = {},
    o = '/',
    i = [];
  for (let s = 0; s < n.length; ++s) {
    let l = n[s],
      u = s === n.length - 1,
      h = o === '/' ? t : t.slice(o.length) || '/',
      d = Ot({ path: l.relativePath, caseSensitive: l.caseSensitive, end: u }, h),
      v = l.route;
    if (
      (!d &&
        u &&
        r &&
        !n[n.length - 1].route.index &&
        (d = Ot({ path: l.relativePath, caseSensitive: l.caseSensitive, end: !1 }, h)),
      !d)
    )
      return null;
    (Object.assign(a, d.params),
      i.push({
        params: a,
        pathname: Ce([o, d.pathname]),
        pathnameBase: eo(Ce([o, d.pathnameBase])),
        route: v,
      }),
      d.pathnameBase !== '/' && (o = Ce([o, d.pathnameBase])));
  }
  return i;
}
function Ot(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [r, n] = xn(e.path, e.caseSensitive, e.end),
    a = t.match(r);
  if (!a) return null;
  let o = a[0],
    i = o.replace(/(.)\/+$/, '$1'),
    s = a.slice(1);
  return {
    params: n.reduce((u, { paramName: h, isOptional: d }, v) => {
      if (h === '*') {
        let E = s[v] || '';
        i = o.slice(0, o.length - E.length).replace(/(.)\/+$/, '$1');
      }
      const w = s[v];
      return (d && !w ? (u[h] = void 0) : (u[h] = (w || '').replace(/%2F/g, '/')), u);
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e,
  };
}
function xn(e, t = !1, r = !0) {
  ie(
    e === '*' || !e.endsWith('*') || e.endsWith('/*'),
    `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, '/*')}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, '/*')}".`,
  );
  let n = [],
    a =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (i, s, l) => (
            n.push({ paramName: s, isOptional: l != null }),
            l ? '/?([^\\/]+)?' : '/([^\\/]+)'
          ),
        )
        .replace(/\/([\w-]+)\?(\/|$)/g, '(/$1)?$2');
  return (
    e.endsWith('*')
      ? (n.push({ paramName: '*' }), (a += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : r
        ? (a += '\\/*$')
        : e !== '' && e !== '/' && (a += '(?:(?=\\/|$))'),
    [new RegExp(a, t ? void 0 : 'i'), n]
  );
}
function Ka(e) {
  try {
    return e
      .split('/')
      .map((t) => decodeURIComponent(t).replace(/\//g, '%2F'))
      .join('/');
  } catch (t) {
    return (
      ie(
        !1,
        `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`,
      ),
      e
    );
  }
}
function Re(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let r = t.endsWith('/') ? t.length - 1 : t.length,
    n = e.charAt(r);
  return n && n !== '/' ? null : e.slice(r) || '/';
}
function qa({ basename: e, pathname: t }) {
  return t === '/' ? e : Ce([e, t]);
}
var Qa = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  It = (e) => Qa.test(e);
function Za(e, t = '/') {
  let { pathname: r, search: n = '', hash: a = '' } = typeof e == 'string' ? $e(e) : e,
    o;
  if (r)
    if (It(r)) o = r;
    else {
      if (r.includes('//')) {
        let i = r;
        ((r = r.replace(/\/\/+/g, '/')),
          ie(!1, `Pathnames cannot have embedded double slashes - normalizing ${i} -> ${r}`));
      }
      r.startsWith('/') ? (o = Gr(r.substring(1), '/')) : (o = Gr(r, t));
    }
  else o = t;
  return { pathname: o, search: to(n), hash: ro(a) };
}
function Gr(e, t) {
  let r = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((a) => {
      a === '..' ? r.length > 1 && r.pop() : a !== '.' && r.push(a);
    }),
    r.length > 1 ? r.join('/') : '/'
  );
}
function qt(e, t, r, n) {
  return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Pn(e) {
  return e.filter((t, r) => r === 0 || (t.route.path && t.route.path.length > 0));
}
function $t(e) {
  let t = Pn(e);
  return t.map((r, n) => (n === t.length - 1 ? r.pathname : r.pathnameBase));
}
function Ft(e, t, r, n = !1) {
  let a;
  typeof e == 'string'
    ? (a = $e(e))
    : ((a = { ...e }),
      V(!a.pathname || !a.pathname.includes('?'), qt('?', 'pathname', 'search', a)),
      V(!a.pathname || !a.pathname.includes('#'), qt('#', 'pathname', 'hash', a)),
      V(!a.search || !a.search.includes('#'), qt('#', 'search', 'hash', a)));
  let o = e === '' || a.pathname === '',
    i = o ? '/' : a.pathname,
    s;
  if (i == null) s = r;
  else {
    let d = t.length - 1;
    if (!n && i.startsWith('..')) {
      let v = i.split('/');
      for (; v[0] === '..'; ) (v.shift(), (d -= 1));
      a.pathname = v.join('/');
    }
    s = d >= 0 ? t[d] : '/';
  }
  let l = Za(a, s),
    u = i && i !== '/' && i.endsWith('/'),
    h = (o || i === '.') && r.endsWith('/');
  return (!l.pathname.endsWith('/') && (u || h) && (l.pathname += '/'), l);
}
var Ce = (e) => e.join('/').replace(/\/\/+/g, '/'),
  eo = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  to = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  ro = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e),
  no = class {
    constructor(e, t) {
      ((this.type = 'DataWithResponseInit'), (this.data = e), (this.init = t || null));
    }
  };
function ao(e, t) {
  return new no(e, typeof t == 'number' ? { status: t } : t);
}
var oo = (e, t = 302) => {
    let r = t;
    typeof r == 'number' ? (r = { status: r }) : typeof r.status > 'u' && (r.status = 302);
    let n = new Headers(r.headers);
    return (n.set('Location', e), new Response(null, { ...r, headers: n }));
  },
  Ye = class {
    constructor(e, t, r, n = !1) {
      ((this.status = e),
        (this.statusText = t || ''),
        (this.internal = n),
        r instanceof Error ? ((this.data = r.toString()), (this.error = r)) : (this.data = r));
    }
  };
function We(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  );
}
function ft(e) {
  return (
    e
      .map((t) => t.route.path)
      .filter(Boolean)
      .join('/')
      .replace(/\/\/*/g, '/') || '/'
  );
}
var Ie = Symbol('Uninstrumented');
function io(e, t) {
  let r = {
    lazy: [],
    'lazy.loader': [],
    'lazy.action': [],
    'lazy.middleware': [],
    middleware: [],
    loader: [],
    action: [],
  };
  e.forEach((a) =>
    a({
      id: t.id,
      index: t.index,
      path: t.path,
      instrument(o) {
        let i = Object.keys(r);
        for (let s of i) o[s] && r[s].push(o[s]);
      },
    }),
  );
  let n = {};
  if (typeof t.lazy == 'function' && r.lazy.length > 0) {
    let a = Ke(r.lazy, t.lazy, () => {});
    a && (n.lazy = a);
  }
  if (typeof t.lazy == 'object') {
    let a = t.lazy;
    ['middleware', 'loader', 'action'].forEach((o) => {
      let i = a[o],
        s = r[`lazy.${o}`];
      if (typeof i == 'function' && s.length > 0) {
        let l = Ke(s, i, () => {});
        l && (n.lazy = Object.assign(n.lazy || {}, { [o]: l }));
      }
    });
  }
  return (
    ['loader', 'action'].forEach((a) => {
      let o = t[a];
      if (typeof o == 'function' && r[a].length > 0) {
        let i = o[Ie] ?? o,
          s = Ke(r[a], i, (...l) => Xr(l[0]));
        s && ((s[Ie] = i), (n[a] = s));
      }
    }),
    t.middleware &&
      t.middleware.length > 0 &&
      r.middleware.length > 0 &&
      (n.middleware = t.middleware.map((a) => {
        let o = a[Ie] ?? a,
          i = Ke(r.middleware, o, (...s) => Xr(s[0]));
        return i ? ((i[Ie] = o), i) : a;
      })),
    n
  );
}
function lo(e, t) {
  let r = { navigate: [], fetch: [] };
  if (
    (t.forEach((n) =>
      n({
        instrument(a) {
          let o = Object.keys(a);
          for (let i of o) a[i] && r[i].push(a[i]);
        },
      }),
    ),
    r.navigate.length > 0)
  ) {
    let n = e.navigate[Ie] ?? e.navigate,
      a = Ke(r.navigate, n, (...o) => {
        let [i, s] = o;
        return {
          to: typeof i == 'number' || typeof i == 'string' ? i : i ? Le(i) : '.',
          ...Kr(e, s ?? {}),
        };
      });
    a && ((a[Ie] = n), (e.navigate = a));
  }
  if (r.fetch.length > 0) {
    let n = e.fetch[Ie] ?? e.fetch,
      a = Ke(r.fetch, n, (...o) => {
        let [i, , s, l] = o;
        return { href: s ?? '.', fetcherKey: i, ...Kr(e, l ?? {}) };
      });
    a && ((a[Ie] = n), (e.fetch = a));
  }
  return e;
}
function Ke(e, t, r) {
  return e.length === 0
    ? null
    : async (...n) => {
        let a = await Cn(e, r(...n), () => t(...n), e.length - 1);
        if (a.type === 'error') throw a.value;
        return a.value;
      };
}
async function Cn(e, t, r, n) {
  let a = e[n],
    o;
  if (a) {
    let i,
      s = async () => (
        i
          ? console.error('You cannot call instrumented handlers more than once')
          : (i = Cn(e, t, r, n - 1)),
        (o = await i),
        V(o, 'Expected a result'),
        o.type === 'error' && o.value instanceof Error
          ? { status: 'error', error: o.value }
          : { status: 'success', error: void 0 }
      );
    try {
      await a(s, t);
    } catch (l) {
      console.error('An instrumentation function threw an error:', l);
    }
    (i || (await s()), await i);
  } else
    try {
      o = { type: 'success', value: await r() };
    } catch (i) {
      o = { type: 'error', value: i };
    }
  return o || { type: 'error', value: new Error('No result assigned in instrumentation chain.') };
}
function Xr(e) {
  let { request: t, context: r, params: n, unstable_pattern: a } = e;
  return { request: so(t), params: { ...n }, unstable_pattern: a, context: uo(r) };
}
function Kr(e, t) {
  return {
    currentUrl: Le(e.state.location),
    ...('formMethod' in t ? { formMethod: t.formMethod } : {}),
    ...('formEncType' in t ? { formEncType: t.formEncType } : {}),
    ...('formData' in t ? { formData: t.formData } : {}),
    ...('body' in t ? { body: t.body } : {}),
  };
}
function so(e) {
  return { method: e.method, url: e.url, headers: { get: (...t) => e.headers.get(...t) } };
}
function uo(e) {
  if (fo(e)) {
    let t = { ...e };
    return (Object.freeze(t), t);
  } else return { get: (t) => e.get(t) };
}
var co = Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
function fo(e) {
  if (e === null || typeof e != 'object') return !1;
  const t = Object.getPrototypeOf(e);
  return (
    t === Object.prototype || t === null || Object.getOwnPropertyNames(t).sort().join('\0') === co
  );
}
var Ln = ['POST', 'PUT', 'PATCH', 'DELETE'],
  ho = new Set(Ln),
  mo = ['GET', ...Ln],
  po = new Set(mo),
  yo = new Set([301, 302, 303, 307, 308]),
  vo = new Set([307, 308]),
  Qt = {
    state: 'idle',
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  go = {
    state: 'idle',
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  at = { state: 'unblocked', proceed: void 0, reset: void 0, location: void 0 },
  wo = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  Tn = 'remix-router-transitions',
  Mn = Symbol('ResetLoaderData');
function Yl(e) {
  const t = e.window ? e.window : typeof window < 'u' ? window : void 0,
    r = typeof t < 'u' && typeof t.document < 'u' && typeof t.document.createElement < 'u';
  V(e.routes.length > 0, 'You must provide a non-empty routes array to createRouter');
  let n = e.hydrationRouteProperties || [],
    a = e.mapRouteProperties || wo,
    o = a;
  if (e.unstable_instrumentations) {
    let c = e.unstable_instrumentations;
    o = (y) => ({ ...a(y), ...io(c.map((g) => g.route).filter(Boolean), y) });
  }
  let i = {},
    s = ct(e.routes, o, void 0, i),
    l,
    u = e.basename || '/';
  u.startsWith('/') || (u = `/${u}`);
  let h = e.dataStrategy || xo,
    d = { ...e.future },
    v = null,
    w = new Set(),
    E = null,
    C = null,
    R = null,
    P = e.hydrationData != null,
    b = Ne(s, e.history.location, u),
    M = !1,
    T = null,
    D;
  if (b == null && !e.patchRoutesOnNavigation) {
    let c = Se(404, { pathname: e.history.location.pathname }),
      { matches: y, route: g } = bt(s);
    ((D = !0), (b = y), (T = { [g.id]: c }));
  } else if (
    (b && !e.hydrationData && vt(b, s, e.history.location.pathname).active && (b = null), b)
  )
    if (b.some((c) => c.route.lazy)) D = !1;
    else if (!b.some((c) => pr(c.route))) D = !0;
    else {
      let c = e.hydrationData ? e.hydrationData.loaderData : null,
        y = e.hydrationData ? e.hydrationData.errors : null;
      if (y) {
        let g = b.findIndex((x) => y[x.route.id] !== void 0);
        D = b.slice(0, g + 1).every((x) => !or(x.route, c, y));
      } else D = b.every((g) => !or(g.route, c, y));
    }
  else {
    ((D = !1), (b = []));
    let c = vt(null, s, e.history.location.pathname);
    c.active && c.matches && ((M = !0), (b = c.matches));
  }
  let k,
    f = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: b,
      initialized: D,
      navigation: Qt,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: 'idle',
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || T,
      fetchers: new Map(),
      blockers: new Map(),
    },
    B = 'POP',
    W = null,
    G = !1,
    U,
    se = !1,
    Z = new Map(),
    q = null,
    ne = !1,
    te = !1,
    ue = new Set(),
    ee = new Map(),
    fe = 0,
    be = -1,
    p = new Map(),
    S = new Set(),
    I = new Map(),
    H = new Map(),
    Y = new Set(),
    J = new Map(),
    Q,
    he = null;
  function me() {
    if (
      ((v = e.history.listen(({ action: c, location: y, delta: g }) => {
        if (Q) {
          (Q(), (Q = void 0));
          return;
        }
        ie(
          J.size === 0 || g != null,
          'You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.',
        );
        let x = Ar({ currentLocation: f.location, nextLocation: y, historyAction: c });
        if (x && g != null) {
          let L = new Promise((O) => {
            Q = O;
          });
          (e.history.go(g * -1),
            yt(x, {
              state: 'blocked',
              location: y,
              proceed() {
                (yt(x, { state: 'proceeding', proceed: void 0, reset: void 0, location: y }),
                  L.then(() => e.history.go(g)));
              },
              reset() {
                let O = new Map(f.blockers);
                (O.set(x, at), pe({ blockers: O }));
              },
            }),
            W?.resolve(),
            (W = null));
          return;
        }
        return Fe(c, y);
      })),
      r)
    ) {
      Ho(t, Z);
      let c = () => Uo(t, Z);
      (t.addEventListener('pagehide', c), (q = () => t.removeEventListener('pagehide', c)));
    }
    return (f.initialized || Fe('POP', f.location, { initialHydration: !0 }), k);
  }
  function Bt() {
    (v && v(),
      q && q(),
      w.clear(),
      U && U.abort(),
      f.fetchers.forEach((c, y) => Yt(y)),
      f.blockers.forEach((c, y) => Nr(y)));
  }
  function la(c) {
    return (w.add(c), () => w.delete(c));
  }
  function pe(c, y = {}) {
    (c.matches &&
      (c.matches = c.matches.map((L) => {
        let O = i[L.route.id],
          N = L.route;
        return N.element !== O.element ||
          N.errorElement !== O.errorElement ||
          N.hydrateFallbackElement !== O.hydrateFallbackElement
          ? { ...L, route: O }
          : L;
      })),
      (f = { ...f, ...c }));
    let g = [],
      x = [];
    (f.fetchers.forEach((L, O) => {
      L.state === 'idle' && (Y.has(O) ? g.push(O) : x.push(O));
    }),
      Y.forEach((L) => {
        !f.fetchers.has(L) && !ee.has(L) && g.push(L);
      }),
      [...w].forEach((L) =>
        L(f, {
          deletedFetchers: g,
          newErrors: c.errors ?? null,
          viewTransitionOpts: y.viewTransitionOpts,
          flushSync: y.flushSync === !0,
        }),
      ),
      g.forEach((L) => Yt(L)),
      x.forEach((L) => f.fetchers.delete(L)));
  }
  function Je(c, y, { flushSync: g } = {}) {
    let x =
        f.actionData != null &&
        f.navigation.formMethod != null &&
        ve(f.navigation.formMethod) &&
        f.navigation.state === 'loading' &&
        c.state?._isRedirect !== !0,
      L;
    y.actionData
      ? Object.keys(y.actionData).length > 0
        ? (L = y.actionData)
        : (L = null)
      : x
        ? (L = f.actionData)
        : (L = null);
    let O = y.loaderData ? ln(f.loaderData, y.loaderData, y.matches || [], y.errors) : f.loaderData,
      N = f.blockers;
    N.size > 0 && ((N = new Map(N)), N.forEach(($, F) => N.set(F, at)));
    let _ = ne ? !1 : Ir(c, y.matches || f.matches),
      A =
        G === !0 ||
        (f.navigation.formMethod != null &&
          ve(f.navigation.formMethod) &&
          c.state?._isRedirect !== !0);
    (l && ((s = l), (l = void 0)),
      ne ||
        B === 'POP' ||
        (B === 'PUSH'
          ? e.history.push(c, c.state)
          : B === 'REPLACE' && e.history.replace(c, c.state)));
    let j;
    if (B === 'POP') {
      let $ = Z.get(f.location.pathname);
      $ && $.has(c.pathname)
        ? (j = { currentLocation: f.location, nextLocation: c })
        : Z.has(c.pathname) && (j = { currentLocation: c, nextLocation: f.location });
    } else if (se) {
      let $ = Z.get(f.location.pathname);
      ($ ? $.add(c.pathname) : (($ = new Set([c.pathname])), Z.set(f.location.pathname, $)),
        (j = { currentLocation: f.location, nextLocation: c }));
    }
    (pe(
      {
        ...y,
        actionData: L,
        loaderData: O,
        historyAction: B,
        location: c,
        initialized: !0,
        navigation: Qt,
        revalidation: 'idle',
        restoreScrollPosition: _,
        preventScrollReset: A,
        blockers: N,
      },
      { viewTransitionOpts: j, flushSync: g === !0 },
    ),
      (B = 'POP'),
      (G = !1),
      (se = !1),
      (ne = !1),
      (te = !1),
      W?.resolve(),
      (W = null),
      he?.resolve(),
      (he = null));
  }
  async function Cr(c, y) {
    if ((W?.resolve(), (W = null), typeof c == 'number')) {
      W || (W = cn());
      let re = W.promise;
      return (e.history.go(c), re);
    }
    let g = ar(f.location, f.matches, u, c, y?.fromRouteId, y?.relative),
      { path: x, submission: L, error: O } = qr(!1, g, y),
      N = f.location,
      _ = ut(f.location, x, y && y.state);
    _ = { ..._, ...e.history.encodeLocation(_) };
    let A = y && y.replace != null ? y.replace : void 0,
      j = 'PUSH';
    A === !0
      ? (j = 'REPLACE')
      : A === !1 ||
        (L != null &&
          ve(L.formMethod) &&
          L.formAction === f.location.pathname + f.location.search &&
          (j = 'REPLACE'));
    let $ = y && 'preventScrollReset' in y ? y.preventScrollReset === !0 : void 0,
      F = (y && y.flushSync) === !0,
      X = Ar({ currentLocation: N, nextLocation: _, historyAction: j });
    if (X) {
      yt(X, {
        state: 'blocked',
        location: _,
        proceed() {
          (yt(X, { state: 'proceeding', proceed: void 0, reset: void 0, location: _ }), Cr(c, y));
        },
        reset() {
          let re = new Map(f.blockers);
          (re.set(X, at), pe({ blockers: re }));
        },
      });
      return;
    }
    await Fe(j, _, {
      submission: L,
      pendingError: O,
      preventScrollReset: $,
      replace: y && y.replace,
      enableViewTransition: y && y.viewTransition,
      flushSync: F,
    });
  }
  function sa() {
    (he || (he = cn()), Wt(), pe({ revalidation: 'loading' }));
    let c = he.promise;
    return f.navigation.state === 'submitting'
      ? c
      : f.navigation.state === 'idle'
        ? (Fe(f.historyAction, f.location, { startUninterruptedRevalidation: !0 }), c)
        : (Fe(B || f.historyAction, f.navigation.location, {
            overrideNavigation: f.navigation,
            enableViewTransition: se === !0,
          }),
          c);
  }
  async function Fe(c, y, g) {
    (U && U.abort(),
      (U = null),
      (B = c),
      (ne = (g && g.startUninterruptedRevalidation) === !0),
      wa(f.location, f.matches),
      (G = (g && g.preventScrollReset) === !0),
      (se = (g && g.enableViewTransition) === !0));
    let x = l || s,
      L = g && g.overrideNavigation,
      O = g?.initialHydration && f.matches && f.matches.length > 0 && !M ? f.matches : Ne(x, y, u),
      N = (g && g.flushSync) === !0;
    if (
      O &&
      f.initialized &&
      !te &&
      Oo(f.location, y) &&
      !(g && g.submission && ve(g.submission.formMethod))
    ) {
      Je(y, { matches: O }, { flushSync: N });
      return;
    }
    let _ = vt(O, x, y.pathname);
    if ((_.active && _.matches && (O = _.matches), !O)) {
      let { error: de, notFoundMatches: ae, route: oe } = Vt(y.pathname);
      Je(y, { matches: ae, loaderData: {}, errors: { [oe.id]: de } }, { flushSync: N });
      return;
    }
    U = new AbortController();
    let A = Xe(e.history, y, U.signal, g && g.submission),
      j = e.getContext ? await e.getContext() : new Yr(),
      $;
    if (g && g.pendingError) $ = [ke(O).route.id, { type: 'error', error: g.pendingError }];
    else if (g && g.submission && ve(g.submission.formMethod)) {
      let de = await ua(A, y, g.submission, O, j, _.active, g && g.initialHydration === !0, {
        replace: g.replace,
        flushSync: N,
      });
      if (de.shortCircuited) return;
      if (de.pendingActionResult) {
        let [ae, oe] = de.pendingActionResult;
        if (Ee(oe) && We(oe.error) && oe.error.status === 404) {
          ((U = null), Je(y, { matches: de.matches, loaderData: {}, errors: { [ae]: oe.error } }));
          return;
        }
      }
      ((O = de.matches || O),
        ($ = de.pendingActionResult),
        (L = Zt(y, g.submission)),
        (N = !1),
        (_.active = !1),
        (A = Xe(e.history, A.url, A.signal)));
    }
    let {
      shortCircuited: F,
      matches: X,
      loaderData: re,
      errors: ce,
    } = await ca(
      A,
      y,
      O,
      j,
      _.active,
      L,
      g && g.submission,
      g && g.fetcherSubmission,
      g && g.replace,
      g && g.initialHydration === !0,
      N,
      $,
    );
    F || ((U = null), Je(y, { matches: X || O, ...sn($), loaderData: re, errors: ce }));
  }
  async function ua(c, y, g, x, L, O, N, _ = {}) {
    Wt();
    let A = Fo(y, g);
    if ((pe({ navigation: A }, { flushSync: _.flushSync === !0 }), O)) {
      let F = await gt(x, y.pathname, c.signal);
      if (F.type === 'aborted') return { shortCircuited: !0 };
      if (F.type === 'error') {
        if (F.partialMatches.length === 0) {
          let { matches: re, route: ce } = bt(s);
          return { matches: re, pendingActionResult: [ce.id, { type: 'error', error: F.error }] };
        }
        let X = ke(F.partialMatches).route.id;
        return {
          matches: F.partialMatches,
          pendingActionResult: [X, { type: 'error', error: F.error }],
        };
      } else if (F.matches) x = F.matches;
      else {
        let { notFoundMatches: X, error: re, route: ce } = Vt(y.pathname);
        return { matches: X, pendingActionResult: [ce.id, { type: 'error', error: re }] };
      }
    }
    let j,
      $ = Tt(x, y);
    if (!$.route.action && !$.route.lazy)
      j = {
        type: 'error',
        error: Se(405, { method: c.method, pathname: y.pathname, routeId: $.route.id }),
      };
    else {
      let F = qe(o, i, c, x, $, N ? [] : n, L),
        X = await et(c, F, L, null);
      if (((j = X[$.route.id]), !j)) {
        for (let re of x)
          if (X[re.route.id]) {
            j = X[re.route.id];
            break;
          }
      }
      if (c.signal.aborted) return { shortCircuited: !0 };
    }
    if (Be(j)) {
      let F;
      return (
        _ && _.replace != null
          ? (F = _.replace)
          : (F =
              nn(j.response.headers.get('Location'), new URL(c.url), u) ===
              f.location.pathname + f.location.search),
        await je(c, j, !0, { submission: g, replace: F }),
        { shortCircuited: !0 }
      );
    }
    if (Ee(j)) {
      let F = ke(x, $.route.id);
      return (
        (_ && _.replace) !== !0 && (B = 'PUSH'),
        { matches: x, pendingActionResult: [F.route.id, j, $.route.id] }
      );
    }
    return { matches: x, pendingActionResult: [$.route.id, j] };
  }
  async function ca(c, y, g, x, L, O, N, _, A, j, $, F) {
    let X = O || Zt(y, N),
      re = N || _ || un(X),
      ce = !ne && !j;
    if (L) {
      if (ce) {
        let ye = Lr(F);
        pe({ navigation: X, ...(ye !== void 0 ? { actionData: ye } : {}) }, { flushSync: $ });
      }
      let K = await gt(g, y.pathname, c.signal);
      if (K.type === 'aborted') return { shortCircuited: !0 };
      if (K.type === 'error') {
        if (K.partialMatches.length === 0) {
          let { matches: Ge, route: ze } = bt(s);
          return { matches: Ge, loaderData: {}, errors: { [ze.id]: K.error } };
        }
        let ye = ke(K.partialMatches).route.id;
        return { matches: K.partialMatches, loaderData: {}, errors: { [ye]: K.error } };
      } else if (K.matches) g = K.matches;
      else {
        let { error: ye, notFoundMatches: Ge, route: ze } = Vt(y.pathname);
        return { matches: Ge, loaderData: {}, errors: { [ze.id]: ye } };
      }
    }
    let de = l || s,
      { dsMatches: ae, revalidatingFetchers: oe } = Qr(
        c,
        x,
        o,
        i,
        e.history,
        f,
        g,
        re,
        y,
        j ? [] : n,
        j === !0,
        te,
        ue,
        Y,
        I,
        S,
        de,
        u,
        e.patchRoutesOnNavigation != null,
        F,
      );
    if (
      ((be = ++fe),
      !e.dataStrategy &&
        !ae.some((K) => K.shouldLoad) &&
        !ae.some((K) => K.route.middleware && K.route.middleware.length > 0) &&
        oe.length === 0)
    ) {
      let K = _r();
      return (
        Je(
          y,
          {
            matches: g,
            loaderData: {},
            errors: F && Ee(F[1]) ? { [F[0]]: F[1].error } : null,
            ...sn(F),
            ...(K ? { fetchers: new Map(f.fetchers) } : {}),
          },
          { flushSync: $ },
        ),
        { shortCircuited: !0 }
      );
    }
    if (ce) {
      let K = {};
      if (!L) {
        K.navigation = X;
        let ye = Lr(F);
        ye !== void 0 && (K.actionData = ye);
      }
      (oe.length > 0 && (K.fetchers = da(oe)), pe(K, { flushSync: $ }));
    }
    oe.forEach((K) => {
      (_e(K.key), K.controller && ee.set(K.key, K.controller));
    });
    let He = () => oe.forEach((K) => _e(K.key));
    U && U.signal.addEventListener('abort', He);
    let { loaderResults: tt, fetcherResults: Ae } = await Tr(ae, oe, c, x);
    if (c.signal.aborted) return { shortCircuited: !0 };
    (U && U.signal.removeEventListener('abort', He), oe.forEach((K) => ee.delete(K.key)));
    let Pe = St(tt);
    if (Pe) return (await je(c, Pe.result, !0, { replace: A }), { shortCircuited: !0 });
    if (((Pe = St(Ae)), Pe))
      return (S.add(Pe.key), await je(c, Pe.result, !0, { replace: A }), { shortCircuited: !0 });
    let { loaderData: Jt, errors: rt } = on(f, g, tt, F, oe, Ae);
    j && f.errors && (rt = { ...f.errors, ...rt });
    let Ue = _r(),
      wt = Or(be),
      Et = Ue || wt || oe.length > 0;
    return {
      matches: g,
      loaderData: Jt,
      errors: rt,
      ...(Et ? { fetchers: new Map(f.fetchers) } : {}),
    };
  }
  function Lr(c) {
    if (c && !Ee(c[1])) return { [c[0]]: c[1].data };
    if (f.actionData) return Object.keys(f.actionData).length === 0 ? null : f.actionData;
  }
  function da(c) {
    return (
      c.forEach((y) => {
        let g = f.fetchers.get(y.key),
          x = ot(void 0, g ? g.data : void 0);
        f.fetchers.set(y.key, x);
      }),
      new Map(f.fetchers)
    );
  }
  async function fa(c, y, g, x) {
    _e(c);
    let L = (x && x.flushSync) === !0,
      O = l || s,
      N = ar(f.location, f.matches, u, g, y, x?.relative),
      _ = Ne(O, N, u),
      A = vt(_, O, N);
    if ((A.active && A.matches && (_ = A.matches), !_)) {
      De(c, y, Se(404, { pathname: N }), { flushSync: L });
      return;
    }
    let { path: j, submission: $, error: F } = qr(!0, N, x);
    if (F) {
      De(c, y, F, { flushSync: L });
      return;
    }
    let X = e.getContext ? await e.getContext() : new Yr(),
      re = (x && x.preventScrollReset) === !0;
    if ($ && ve($.formMethod)) {
      await ha(c, y, j, _, X, A.active, L, re, $);
      return;
    }
    (I.set(c, { routeId: y, path: j }), await ma(c, y, j, _, X, A.active, L, re, $));
  }
  async function ha(c, y, g, x, L, O, N, _, A) {
    (Wt(), I.delete(c));
    let j = f.fetchers.get(c);
    Me(c, jo(A, j), { flushSync: N });
    let $ = new AbortController(),
      F = Xe(e.history, g, $.signal, A);
    if (O) {
      let le = await gt(x, new URL(F.url).pathname, F.signal, c);
      if (le.type === 'aborted') return;
      if (le.type === 'error') {
        De(c, y, le.error, { flushSync: N });
        return;
      } else if (le.matches) x = le.matches;
      else {
        De(c, y, Se(404, { pathname: g }), { flushSync: N });
        return;
      }
    }
    let X = Tt(x, g);
    if (!X.route.action && !X.route.lazy) {
      let le = Se(405, { method: A.formMethod, pathname: g, routeId: y });
      De(c, y, le, { flushSync: N });
      return;
    }
    ee.set(c, $);
    let re = fe,
      ce = qe(o, i, F, x, X, n, L),
      de = await et(F, ce, L, c),
      ae = de[X.route.id];
    if (!ae) {
      for (let le of ce)
        if (de[le.route.id]) {
          ae = de[le.route.id];
          break;
        }
    }
    if (F.signal.aborted) {
      ee.get(c) === $ && ee.delete(c);
      return;
    }
    if (Y.has(c)) {
      if (Be(ae) || Ee(ae)) {
        Me(c, Oe(void 0));
        return;
      }
    } else {
      if (Be(ae))
        if ((ee.delete(c), be > re)) {
          Me(c, Oe(void 0));
          return;
        } else
          return (
            S.add(c),
            Me(c, ot(A)),
            je(F, ae, !1, { fetcherSubmission: A, preventScrollReset: _ })
          );
      if (Ee(ae)) {
        De(c, y, ae.error);
        return;
      }
    }
    let oe = f.navigation.location || f.location,
      He = Xe(e.history, oe, $.signal),
      tt = l || s,
      Ae = f.navigation.state !== 'idle' ? Ne(tt, f.navigation.location, u) : f.matches;
    V(Ae, "Didn't find any matches after fetcher action");
    let Pe = ++fe;
    p.set(c, Pe);
    let Jt = ot(A, ae.data);
    f.fetchers.set(c, Jt);
    let { dsMatches: rt, revalidatingFetchers: Ue } = Qr(
      He,
      L,
      o,
      i,
      e.history,
      f,
      Ae,
      A,
      oe,
      n,
      !1,
      te,
      ue,
      Y,
      I,
      S,
      tt,
      u,
      e.patchRoutesOnNavigation != null,
      [X.route.id, ae],
    );
    (Ue.filter((le) => le.key !== c).forEach((le) => {
      let Rt = le.key,
        Fr = f.fetchers.get(Rt),
        ba = ot(void 0, Fr ? Fr.data : void 0);
      (f.fetchers.set(Rt, ba), _e(Rt), le.controller && ee.set(Rt, le.controller));
    }),
      pe({ fetchers: new Map(f.fetchers) }));
    let wt = () => Ue.forEach((le) => _e(le.key));
    $.signal.addEventListener('abort', wt);
    let { loaderResults: Et, fetcherResults: K } = await Tr(rt, Ue, He, L);
    if ($.signal.aborted) return;
    if (
      ($.signal.removeEventListener('abort', wt),
      p.delete(c),
      ee.delete(c),
      Ue.forEach((le) => ee.delete(le.key)),
      f.fetchers.has(c))
    ) {
      let le = Oe(ae.data);
      f.fetchers.set(c, le);
    }
    let ye = St(Et);
    if (ye) return je(He, ye.result, !1, { preventScrollReset: _ });
    if (((ye = St(K)), ye))
      return (S.add(ye.key), je(He, ye.result, !1, { preventScrollReset: _ }));
    let { loaderData: Ge, errors: ze } = on(f, Ae, Et, void 0, Ue, K);
    (Or(Pe),
      f.navigation.state === 'loading' && Pe > be
        ? (V(B, 'Expected pending action'),
          U && U.abort(),
          Je(f.navigation.location, {
            matches: Ae,
            loaderData: Ge,
            errors: ze,
            fetchers: new Map(f.fetchers),
          }))
        : (pe({
            errors: ze,
            loaderData: ln(f.loaderData, Ge, Ae, ze),
            fetchers: new Map(f.fetchers),
          }),
          (te = !1)));
  }
  async function ma(c, y, g, x, L, O, N, _, A) {
    let j = f.fetchers.get(c);
    Me(c, ot(A, j ? j.data : void 0), { flushSync: N });
    let $ = new AbortController(),
      F = Xe(e.history, g, $.signal);
    if (O) {
      let oe = await gt(x, new URL(F.url).pathname, F.signal, c);
      if (oe.type === 'aborted') return;
      if (oe.type === 'error') {
        De(c, y, oe.error, { flushSync: N });
        return;
      } else if (oe.matches) x = oe.matches;
      else {
        De(c, y, Se(404, { pathname: g }), { flushSync: N });
        return;
      }
    }
    let X = Tt(x, g);
    ee.set(c, $);
    let re = fe,
      ce = qe(o, i, F, x, X, n, L),
      ae = (await et(F, ce, L, c))[X.route.id];
    if ((ee.get(c) === $ && ee.delete(c), !F.signal.aborted)) {
      if (Y.has(c)) {
        Me(c, Oe(void 0));
        return;
      }
      if (Be(ae))
        if (be > re) {
          Me(c, Oe(void 0));
          return;
        } else {
          (S.add(c), await je(F, ae, !1, { preventScrollReset: _ }));
          return;
        }
      if (Ee(ae)) {
        De(c, y, ae.error);
        return;
      }
      Me(c, Oe(ae.data));
    }
  }
  async function je(
    c,
    y,
    g,
    { submission: x, fetcherSubmission: L, preventScrollReset: O, replace: N } = {},
  ) {
    (g || (W?.resolve(), (W = null)), y.response.headers.has('X-Remix-Revalidate') && (te = !0));
    let _ = y.response.headers.get('Location');
    (V(_, 'Expected a Location header on the redirect Response'), (_ = nn(_, new URL(c.url), u)));
    let A = ut(f.location, _, { _isRedirect: !0 });
    if (r) {
      let ce = !1;
      if (y.response.headers.has('X-Remix-Reload-Document')) ce = !0;
      else if (It(_)) {
        const de = En(_, !0);
        ce = de.origin !== t.location.origin || Re(de.pathname, u) == null;
      }
      if (ce) {
        N ? t.location.replace(_) : t.location.assign(_);
        return;
      }
    }
    U = null;
    let j = N === !0 || y.response.headers.has('X-Remix-Replace') ? 'REPLACE' : 'PUSH',
      { formMethod: $, formAction: F, formEncType: X } = f.navigation;
    !x && !L && $ && F && X && (x = un(f.navigation));
    let re = x || L;
    if (vo.has(y.response.status) && re && ve(re.formMethod))
      await Fe(j, A, {
        submission: { ...re, formAction: _ },
        preventScrollReset: O || G,
        enableViewTransition: g ? se : void 0,
      });
    else {
      let ce = Zt(A, x);
      await Fe(j, A, {
        overrideNavigation: ce,
        fetcherSubmission: L,
        preventScrollReset: O || G,
        enableViewTransition: g ? se : void 0,
      });
    }
  }
  async function et(c, y, g, x) {
    let L,
      O = {};
    try {
      L = await Co(h, c, y, x, g, !1);
    } catch (N) {
      return (
        y
          .filter((_) => _.shouldLoad)
          .forEach((_) => {
            O[_.route.id] = { type: 'error', error: N };
          }),
        O
      );
    }
    if (c.signal.aborted) return O;
    for (let [N, _] of Object.entries(L))
      if (Io(_)) {
        let A = _.result;
        O[N] = { type: 'redirect', response: Do(A, c, N, y, u) };
      } else O[N] = await Mo(_);
    return O;
  }
  async function Tr(c, y, g, x) {
    let L = et(g, c, x, null),
      O = Promise.all(
        y.map(async (A) => {
          if (A.matches && A.match && A.request && A.controller) {
            let $ = (await et(A.request, A.matches, x, A.key))[A.match.route.id];
            return { [A.key]: $ };
          } else
            return Promise.resolve({
              [A.key]: { type: 'error', error: Se(404, { pathname: A.path }) },
            });
        }),
      ),
      N = await L,
      _ = (await O).reduce((A, j) => Object.assign(A, j), {});
    return { loaderResults: N, fetcherResults: _ };
  }
  function Wt() {
    ((te = !0),
      I.forEach((c, y) => {
        (ee.has(y) && ue.add(y), _e(y));
      }));
  }
  function Me(c, y, g = {}) {
    (f.fetchers.set(c, y),
      pe({ fetchers: new Map(f.fetchers) }, { flushSync: (g && g.flushSync) === !0 }));
  }
  function De(c, y, g, x = {}) {
    let L = ke(f.matches, y);
    (Yt(c),
      pe(
        { errors: { [L.route.id]: g }, fetchers: new Map(f.fetchers) },
        { flushSync: (x && x.flushSync) === !0 },
      ));
  }
  function Mr(c) {
    return (H.set(c, (H.get(c) || 0) + 1), Y.has(c) && Y.delete(c), f.fetchers.get(c) || go);
  }
  function pa(c, y) {
    (_e(c, y?.reason), Me(c, Oe(null)));
  }
  function Yt(c) {
    let y = f.fetchers.get(c);
    (ee.has(c) && !(y && y.state === 'loading' && p.has(c)) && _e(c),
      I.delete(c),
      p.delete(c),
      S.delete(c),
      Y.delete(c),
      ue.delete(c),
      f.fetchers.delete(c));
  }
  function ya(c) {
    let y = (H.get(c) || 0) - 1;
    (y <= 0 ? (H.delete(c), Y.add(c)) : H.set(c, y), pe({ fetchers: new Map(f.fetchers) }));
  }
  function _e(c, y) {
    let g = ee.get(c);
    g && (g.abort(y), ee.delete(c));
  }
  function Dr(c) {
    for (let y of c) {
      let g = Mr(y),
        x = Oe(g.data);
      f.fetchers.set(y, x);
    }
  }
  function _r() {
    let c = [],
      y = !1;
    for (let g of S) {
      let x = f.fetchers.get(g);
      (V(x, `Expected fetcher: ${g}`), x.state === 'loading' && (S.delete(g), c.push(g), (y = !0)));
    }
    return (Dr(c), y);
  }
  function Or(c) {
    let y = [];
    for (let [g, x] of p)
      if (x < c) {
        let L = f.fetchers.get(g);
        (V(L, `Expected fetcher: ${g}`), L.state === 'loading' && (_e(g), p.delete(g), y.push(g)));
      }
    return (Dr(y), y.length > 0);
  }
  function va(c, y) {
    let g = f.blockers.get(c) || at;
    return (J.get(c) !== y && J.set(c, y), g);
  }
  function Nr(c) {
    (f.blockers.delete(c), J.delete(c));
  }
  function yt(c, y) {
    let g = f.blockers.get(c) || at;
    V(
      (g.state === 'unblocked' && y.state === 'blocked') ||
        (g.state === 'blocked' && y.state === 'blocked') ||
        (g.state === 'blocked' && y.state === 'proceeding') ||
        (g.state === 'blocked' && y.state === 'unblocked') ||
        (g.state === 'proceeding' && y.state === 'unblocked'),
      `Invalid blocker state transition: ${g.state} -> ${y.state}`,
    );
    let x = new Map(f.blockers);
    (x.set(c, y), pe({ blockers: x }));
  }
  function Ar({ currentLocation: c, nextLocation: y, historyAction: g }) {
    if (J.size === 0) return;
    J.size > 1 && ie(!1, 'A router only supports one blocker at a time');
    let x = Array.from(J.entries()),
      [L, O] = x[x.length - 1],
      N = f.blockers.get(L);
    if (
      !(N && N.state === 'proceeding') &&
      O({ currentLocation: c, nextLocation: y, historyAction: g })
    )
      return L;
  }
  function Vt(c) {
    let y = Se(404, { pathname: c }),
      g = l || s,
      { matches: x, route: L } = bt(g);
    return { notFoundMatches: x, route: L, error: y };
  }
  function ga(c, y, g) {
    if (((E = c), (R = y), (C = g || null), !P && f.navigation === Qt)) {
      P = !0;
      let x = Ir(f.location, f.matches);
      x != null && pe({ restoreScrollPosition: x });
    }
    return () => {
      ((E = null), (R = null), (C = null));
    };
  }
  function kr(c, y) {
    return (
      (C &&
        C(
          c,
          y.map((x) => Rn(x, f.loaderData)),
        )) ||
      c.key
    );
  }
  function wa(c, y) {
    if (E && R) {
      let g = kr(c, y);
      E[g] = R();
    }
  }
  function Ir(c, y) {
    if (E) {
      let g = kr(c, y),
        x = E[g];
      if (typeof x == 'number') return x;
    }
    return null;
  }
  function vt(c, y, g) {
    if (e.patchRoutesOnNavigation)
      if (c) {
        if (Object.keys(c[0].params).length > 0) return { active: !0, matches: st(y, g, u, !0) };
      } else return { active: !0, matches: st(y, g, u, !0) || [] };
    return { active: !1, matches: null };
  }
  async function gt(c, y, g, x) {
    if (!e.patchRoutesOnNavigation) return { type: 'success', matches: c };
    let L = c;
    for (;;) {
      let O = l == null,
        N = l || s,
        _ = i;
      try {
        await e.patchRoutesOnNavigation({
          signal: g,
          path: y,
          matches: L,
          fetcherKey: x,
          patch: ($, F) => {
            g.aborted || Zr($, F, N, _, o, !1);
          },
        });
      } catch ($) {
        return { type: 'error', error: $, partialMatches: L };
      } finally {
        O && !g.aborted && (s = [...s]);
      }
      if (g.aborted) return { type: 'aborted' };
      let A = Ne(N, y, u),
        j = null;
      if (A) {
        if (Object.keys(A[0].params).length === 0) return { type: 'success', matches: A };
        if (((j = st(N, y, u, !0)), !(j && L.length < j.length && $r(L, j.slice(0, L.length)))))
          return { type: 'success', matches: A };
      }
      if ((j || (j = st(N, y, u, !0)), !j || $r(L, j))) return { type: 'success', matches: null };
      L = j;
    }
  }
  function $r(c, y) {
    return c.length === y.length && c.every((g, x) => g.route.id === y[x].route.id);
  }
  function Ea(c) {
    ((i = {}), (l = ct(c, o, void 0, i)));
  }
  function Ra(c, y, g = !1) {
    let x = l == null;
    (Zr(c, y, l || s, i, o, g), x && ((s = [...s]), pe({})));
  }
  return (
    (k = {
      get basename() {
        return u;
      },
      get future() {
        return d;
      },
      get state() {
        return f;
      },
      get routes() {
        return s;
      },
      get window() {
        return t;
      },
      initialize: me,
      subscribe: la,
      enableScrollRestoration: ga,
      navigate: Cr,
      fetch: fa,
      revalidate: sa,
      createHref: (c) => e.history.createHref(c),
      encodeLocation: (c) => e.history.encodeLocation(c),
      getFetcher: Mr,
      resetFetcher: pa,
      deleteFetcher: ya,
      dispose: Bt,
      getBlocker: va,
      deleteBlocker: Nr,
      patchRoutes: Ra,
      _internalFetchControllers: ee,
      _internalSetRoutes: Ea,
      _internalSetStateDoNotUseOrYouWillBreakYourApp(c) {
        pe(c);
      },
    }),
    e.unstable_instrumentations &&
      (k = lo(k, e.unstable_instrumentations.map((c) => c.router).filter(Boolean))),
    k
  );
}
function Eo(e) {
  return (
    e != null && (('formData' in e && e.formData != null) || ('body' in e && e.body !== void 0))
  );
}
function ar(e, t, r, n, a, o) {
  let i, s;
  if (a) {
    i = [];
    for (let u of t)
      if ((i.push(u), u.route.id === a)) {
        s = u;
        break;
      }
  } else ((i = t), (s = t[t.length - 1]));
  let l = Ft(n || '.', $t(i), Re(e.pathname, r) || e.pathname, o === 'path');
  if (
    (n == null && ((l.search = e.search), (l.hash = e.hash)),
    (n == null || n === '' || n === '.') && s)
  ) {
    let u = vr(l.search);
    if (s.route.index && !u) l.search = l.search ? l.search.replace(/^\?/, '?index&') : '?index';
    else if (!s.route.index && u) {
      let h = new URLSearchParams(l.search),
        d = h.getAll('index');
      (h.delete('index'), d.filter((w) => w).forEach((w) => h.append('index', w)));
      let v = h.toString();
      l.search = v ? `?${v}` : '';
    }
  }
  return (r !== '/' && (l.pathname = qa({ basename: r, pathname: l.pathname })), Le(l));
}
function qr(e, t, r) {
  if (!r || !Eo(r)) return { path: t };
  if (r.formMethod && !$o(r.formMethod))
    return { path: t, error: Se(405, { method: r.formMethod }) };
  let n = () => ({ path: t, error: Se(400, { type: 'invalid-body' }) }),
    o = (r.formMethod || 'get').toUpperCase(),
    i = kn(t);
  if (r.body !== void 0) {
    if (r.formEncType === 'text/plain') {
      if (!ve(o)) return n();
      let d =
        typeof r.body == 'string'
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
            ? Array.from(r.body.entries()).reduce(
                (v, [w, E]) => `${v}${w}=${E}
`,
                '',
              )
            : String(r.body);
      return {
        path: t,
        submission: {
          formMethod: o,
          formAction: i,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: d,
        },
      };
    } else if (r.formEncType === 'application/json') {
      if (!ve(o)) return n();
      try {
        let d = typeof r.body == 'string' ? JSON.parse(r.body) : r.body;
        return {
          path: t,
          submission: {
            formMethod: o,
            formAction: i,
            formEncType: r.formEncType,
            formData: void 0,
            json: d,
            text: void 0,
          },
        };
      } catch {
        return n();
      }
    }
  }
  V(typeof FormData == 'function', 'FormData is not available in this environment');
  let s, l;
  if (r.formData) ((s = lr(r.formData)), (l = r.formData));
  else if (r.body instanceof FormData) ((s = lr(r.body)), (l = r.body));
  else if (r.body instanceof URLSearchParams) ((s = r.body), (l = an(s)));
  else if (r.body == null) ((s = new URLSearchParams()), (l = new FormData()));
  else
    try {
      ((s = new URLSearchParams(r.body)), (l = an(s)));
    } catch {
      return n();
    }
  let u = {
    formMethod: o,
    formAction: i,
    formEncType: (r && r.formEncType) || 'application/x-www-form-urlencoded',
    formData: l,
    json: void 0,
    text: void 0,
  };
  if (ve(u.formMethod)) return { path: t, submission: u };
  let h = $e(t);
  return (
    e && h.search && vr(h.search) && s.append('index', ''),
    (h.search = `?${s}`),
    { path: Le(h), submission: u }
  );
}
function Qr(e, t, r, n, a, o, i, s, l, u, h, d, v, w, E, C, R, P, b, M) {
  let T = M ? (Ee(M[1]) ? M[1].error : M[1].data) : void 0,
    D = a.createURL(o.location),
    k = a.createURL(l),
    f;
  if (h && o.errors) {
    let q = Object.keys(o.errors)[0];
    f = i.findIndex((ne) => ne.route.id === q);
  } else if (M && Ee(M[1])) {
    let q = M[0];
    f = i.findIndex((ne) => ne.route.id === q) - 1;
  }
  let B = M ? M[1].statusCode : void 0,
    W = B && B >= 400,
    G = {
      currentUrl: D,
      currentParams: o.matches[0]?.params || {},
      nextUrl: k,
      nextParams: i[0].params,
      ...s,
      actionResult: T,
      actionStatus: B,
    },
    U = ft(i),
    se = i.map((q, ne) => {
      let { route: te } = q,
        ue = null;
      if (
        (f != null && ne > f
          ? (ue = !1)
          : te.lazy
            ? (ue = !0)
            : pr(te)
              ? h
                ? (ue = or(te, o.loaderData, o.errors))
                : Ro(o.loaderData, o.matches[ne], q) && (ue = !0)
              : (ue = !1),
        ue !== null)
      )
        return ir(r, n, e, U, q, u, t, ue);
      let ee = W
          ? !1
          : d ||
            D.pathname + D.search === k.pathname + k.search ||
            D.search !== k.search ||
            bo(o.matches[ne], q),
        fe = { ...G, defaultShouldRevalidate: ee },
        be = Nt(q, fe);
      return ir(r, n, e, U, q, u, t, be, fe);
    }),
    Z = [];
  return (
    E.forEach((q, ne) => {
      if (h || !i.some((I) => I.route.id === q.routeId) || w.has(ne)) return;
      let te = o.fetchers.get(ne),
        ue = te && te.state !== 'idle' && te.data === void 0,
        ee = Ne(R, q.path, P);
      if (!ee) {
        if (b && ue) return;
        Z.push({
          key: ne,
          routeId: q.routeId,
          path: q.path,
          matches: null,
          match: null,
          request: null,
          controller: null,
        });
        return;
      }
      if (C.has(ne)) return;
      let fe = Tt(ee, q.path),
        be = new AbortController(),
        p = Xe(a, q.path, be.signal),
        S = null;
      if (v.has(ne)) (v.delete(ne), (S = qe(r, n, p, ee, fe, u, t)));
      else if (ue) d && (S = qe(r, n, p, ee, fe, u, t));
      else {
        let I = { ...G, defaultShouldRevalidate: W ? !1 : d };
        Nt(fe, I) && (S = qe(r, n, p, ee, fe, u, t, I));
      }
      S &&
        Z.push({
          key: ne,
          routeId: q.routeId,
          path: q.path,
          matches: S,
          match: fe,
          request: p,
          controller: be,
        });
    }),
    { dsMatches: se, revalidatingFetchers: Z }
  );
}
function pr(e) {
  return e.loader != null || (e.middleware != null && e.middleware.length > 0);
}
function or(e, t, r) {
  if (e.lazy) return !0;
  if (!pr(e)) return !1;
  let n = t != null && e.id in t,
    a = r != null && r[e.id] !== void 0;
  return !n && a ? !1 : typeof e.loader == 'function' && e.loader.hydrate === !0 ? !0 : !n && !a;
}
function Ro(e, t, r) {
  let n = !t || r.route.id !== t.route.id,
    a = !e.hasOwnProperty(r.route.id);
  return n || a;
}
function bo(e, t) {
  let r = e.route.path;
  return (
    e.pathname !== t.pathname || (r != null && r.endsWith('*') && e.params['*'] !== t.params['*'])
  );
}
function Nt(e, t) {
  if (e.route.shouldRevalidate) {
    let r = e.route.shouldRevalidate(t);
    if (typeof r == 'boolean') return r;
  }
  return t.defaultShouldRevalidate;
}
function Zr(e, t, r, n, a, o) {
  let i;
  if (e) {
    let u = n[e];
    (V(u, `No route found to patch children into: routeId = ${e}`),
      u.children || (u.children = []),
      (i = u.children));
  } else i = r;
  let s = [],
    l = [];
  if (
    (t.forEach((u) => {
      let h = i.find((d) => Dn(u, d));
      h ? l.push({ existingRoute: h, newRoute: u }) : s.push(u);
    }),
    s.length > 0)
  ) {
    let u = ct(s, a, [e || '_', 'patch', String(i?.length || '0')], n);
    i.push(...u);
  }
  if (o && l.length > 0)
    for (let u = 0; u < l.length; u++) {
      let { existingRoute: h, newRoute: d } = l[u],
        v = h,
        [w] = ct([d], a, [], {}, !0);
      Object.assign(v, {
        element: w.element ? w.element : v.element,
        errorElement: w.errorElement ? w.errorElement : v.errorElement,
        hydrateFallbackElement: w.hydrateFallbackElement
          ? w.hydrateFallbackElement
          : v.hydrateFallbackElement,
      });
    }
}
function Dn(e, t) {
  return 'id' in e && 'id' in t && e.id === t.id
    ? !0
    : e.index === t.index && e.path === t.path && e.caseSensitive === t.caseSensitive
      ? (!e.children || e.children.length === 0) && (!t.children || t.children.length === 0)
        ? !0
        : e.children.every((r, n) => t.children?.some((a) => Dn(r, a)))
      : !1;
}
var en = new WeakMap(),
  _n = ({ key: e, route: t, manifest: r, mapRouteProperties: n }) => {
    let a = r[t.id];
    if ((V(a, 'No route found in manifest'), !a.lazy || typeof a.lazy != 'object')) return;
    let o = a.lazy[e];
    if (!o) return;
    let i = en.get(a);
    i || ((i = {}), en.set(a, i));
    let s = i[e];
    if (s) return s;
    let l = (async () => {
      let u = Ia(e),
        d = a[e] !== void 0 && e !== 'hasErrorBoundary';
      if (u)
        (ie(
          !u,
          'Route property ' +
            e +
            ' is not a supported lazy route property. This property will be ignored.',
        ),
          (i[e] = Promise.resolve()));
      else if (d)
        ie(
          !1,
          `Route "${a.id}" has a static property "${e}" defined. The lazy property will be ignored.`,
        );
      else {
        let v = await o();
        v != null && (Object.assign(a, { [e]: v }), Object.assign(a, n(a)));
      }
      typeof a.lazy == 'object' &&
        ((a.lazy[e] = void 0),
        Object.values(a.lazy).every((v) => v === void 0) && (a.lazy = void 0));
    })();
    return ((i[e] = l), l);
  },
  tn = new WeakMap();
function So(e, t, r, n, a) {
  let o = r[e.id];
  if ((V(o, 'No route found in manifest'), !e.lazy))
    return { lazyRoutePromise: void 0, lazyHandlerPromise: void 0 };
  if (typeof e.lazy == 'function') {
    let h = tn.get(o);
    if (h) return { lazyRoutePromise: h, lazyHandlerPromise: h };
    let d = (async () => {
      V(typeof e.lazy == 'function', 'No lazy route function found');
      let v = await e.lazy(),
        w = {};
      for (let E in v) {
        let C = v[E];
        if (C === void 0) continue;
        let R = Fa(E),
          b = o[E] !== void 0 && E !== 'hasErrorBoundary';
        R
          ? ie(
              !R,
              'Route property ' +
                E +
                ' is not a supported property to be returned from a lazy route function. This property will be ignored.',
            )
          : b
            ? ie(
                !b,
                `Route "${o.id}" has a static property "${E}" defined but its lazy function is also returning a value for this property. The lazy route property "${E}" will be ignored.`,
              )
            : (w[E] = C);
      }
      (Object.assign(o, w), Object.assign(o, { ...n(o), lazy: void 0 }));
    })();
    return (tn.set(o, d), d.catch(() => {}), { lazyRoutePromise: d, lazyHandlerPromise: d });
  }
  let i = Object.keys(e.lazy),
    s = [],
    l;
  for (let h of i) {
    if (a && a.includes(h)) continue;
    let d = _n({ key: h, route: e, manifest: r, mapRouteProperties: n });
    d && (s.push(d), h === t && (l = d));
  }
  let u = s.length > 0 ? Promise.all(s).then(() => {}) : void 0;
  return (u?.catch(() => {}), l?.catch(() => {}), { lazyRoutePromise: u, lazyHandlerPromise: l });
}
async function rn(e) {
  let t = e.matches.filter((a) => a.shouldLoad),
    r = {};
  return (
    (await Promise.all(t.map((a) => a.resolve()))).forEach((a, o) => {
      r[t[o].route.id] = a;
    }),
    r
  );
}
async function xo(e) {
  return e.matches.some((t) => t.route.middleware) ? On(e, () => rn(e)) : rn(e);
}
function On(e, t) {
  return Po(e, t, (n) => n, Ao, r);
  function r(n, a, o) {
    if (o) return Promise.resolve(Object.assign(o.value, { [a]: { type: 'error', result: n } }));
    {
      let { matches: i } = e,
        s = Math.min(
          Math.max(
            i.findIndex((u) => u.route.id === a),
            0,
          ),
          Math.max(
            i.findIndex((u) => u.shouldCallHandler()),
            0,
          ),
        ),
        l = ke(i, i[s].route.id).route.id;
      return Promise.resolve({ [l]: { type: 'error', result: n } });
    }
  }
}
async function Po(e, t, r, n, a) {
  let { matches: o, request: i, params: s, context: l, unstable_pattern: u } = e,
    h = o.flatMap((v) =>
      v.route.middleware ? v.route.middleware.map((w) => [v.route.id, w]) : [],
    );
  return await Nn({ request: i, params: s, context: l, unstable_pattern: u }, h, t, r, n, a);
}
async function Nn(e, t, r, n, a, o, i = 0) {
  let { request: s } = e;
  if (s.signal.aborted) throw s.signal.reason ?? new Error(`Request aborted: ${s.method} ${s.url}`);
  let l = t[i];
  if (!l) return await r();
  let [u, h] = l,
    d,
    v = async () => {
      if (d) throw new Error('You may only call `next()` once per middleware');
      try {
        return ((d = { value: await Nn(e, t, r, n, a, o, i + 1) }), d.value);
      } catch (w) {
        return ((d = { value: await o(w, u, d) }), d.value);
      }
    };
  try {
    let w = await h(e, v),
      E = w != null ? n(w) : void 0;
    return a(E) ? E : d ? (E ?? d.value) : ((d = { value: await v() }), d.value);
  } catch (w) {
    return await o(w, u, d);
  }
}
function An(e, t, r, n, a) {
  let o = _n({ key: 'middleware', route: n.route, manifest: t, mapRouteProperties: e }),
    i = So(n.route, ve(r.method) ? 'action' : 'loader', t, e, a);
  return { middleware: o, route: i.lazyRoutePromise, handler: i.lazyHandlerPromise };
}
function ir(e, t, r, n, a, o, i, s, l = null) {
  let u = !1,
    h = An(e, t, r, a, o);
  return {
    ...a,
    _lazyPromises: h,
    shouldLoad: s,
    shouldRevalidateArgs: l,
    shouldCallHandler(d) {
      return (
        (u = !0),
        l ? (typeof d == 'boolean' ? Nt(a, { ...l, defaultShouldRevalidate: d }) : Nt(a, l)) : s
      );
    },
    resolve(d) {
      let { lazy: v, loader: w, middleware: E } = a.route,
        C = u || s || (d && !ve(r.method) && (v || w)),
        R = E && E.length > 0 && !w && !v;
      return C && (ve(r.method) || !R)
        ? Lo({
            request: r,
            unstable_pattern: n,
            match: a,
            lazyHandlerPromise: h?.handler,
            lazyRoutePromise: h?.route,
            handlerOverride: d,
            scopedContext: i,
          })
        : Promise.resolve({ type: 'data', result: void 0 });
    },
  };
}
function qe(e, t, r, n, a, o, i, s = null) {
  return n.map((l) =>
    l.route.id !== a.route.id
      ? {
          ...l,
          shouldLoad: !1,
          shouldRevalidateArgs: s,
          shouldCallHandler: () => !1,
          _lazyPromises: An(e, t, r, l, o),
          resolve: () => Promise.resolve({ type: 'data', result: void 0 }),
        }
      : ir(e, t, r, ft(n), l, o, i, !0, s),
  );
}
async function Co(e, t, r, n, a, o) {
  r.some((u) => u._lazyPromises?.middleware) &&
    (await Promise.all(r.map((u) => u._lazyPromises?.middleware)));
  let i = { request: t, unstable_pattern: ft(r), params: r[0].params, context: a, matches: r },
    l = await e({
      ...i,
      fetcherKey: n,
      runClientMiddleware: (u) => {
        let h = i;
        return On(h, () =>
          u({
            ...h,
            fetcherKey: n,
            runClientMiddleware: () => {
              throw new Error(
                'Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler',
              );
            },
          }),
        );
      },
    });
  try {
    await Promise.all(r.flatMap((u) => [u._lazyPromises?.handler, u._lazyPromises?.route]));
  } catch {}
  return l;
}
async function Lo({
  request: e,
  unstable_pattern: t,
  match: r,
  lazyHandlerPromise: n,
  lazyRoutePromise: a,
  handlerOverride: o,
  scopedContext: i,
}) {
  let s,
    l,
    u = ve(e.method),
    h = u ? 'action' : 'loader',
    d = (v) => {
      let w,
        E = new Promise((P, b) => (w = b));
      ((l = () => w()), e.signal.addEventListener('abort', l));
      let C = (P) =>
          typeof v != 'function'
            ? Promise.reject(
                new Error(
                  `You cannot call the handler for a route which defines a boolean "${h}" [routeId: ${r.route.id}]`,
                ),
              )
            : v(
                { request: e, unstable_pattern: t, params: r.params, context: i },
                ...(P !== void 0 ? [P] : []),
              ),
        R = (async () => {
          try {
            return { type: 'data', result: await (o ? o((b) => C(b)) : C()) };
          } catch (P) {
            return { type: 'error', result: P };
          }
        })();
      return Promise.race([R, E]);
    };
  try {
    let v = u ? r.route.action : r.route.loader;
    if (n || a)
      if (v) {
        let w,
          [E] = await Promise.all([
            d(v).catch((C) => {
              w = C;
            }),
            n,
            a,
          ]);
        if (w !== void 0) throw w;
        s = E;
      } else {
        await n;
        let w = u ? r.route.action : r.route.loader;
        if (w) [s] = await Promise.all([d(w), a]);
        else if (h === 'action') {
          let E = new URL(e.url),
            C = E.pathname + E.search;
          throw Se(405, { method: e.method, pathname: C, routeId: r.route.id });
        } else return { type: 'data', result: void 0 };
      }
    else if (v) s = await d(v);
    else {
      let w = new URL(e.url),
        E = w.pathname + w.search;
      throw Se(404, { pathname: E });
    }
  } catch (v) {
    return { type: 'error', result: v };
  } finally {
    l && e.signal.removeEventListener('abort', l);
  }
  return s;
}
async function To(e) {
  let t = e.headers.get('Content-Type');
  return t && /\bapplication\/json\b/.test(t) ? (e.body == null ? null : e.json()) : e.text();
}
async function Mo(e) {
  let { result: t, type: r } = e;
  if (yr(t)) {
    let n;
    try {
      n = await To(t);
    } catch (a) {
      return { type: 'error', error: a };
    }
    return r === 'error'
      ? {
          type: 'error',
          error: new Ye(t.status, t.statusText, n),
          statusCode: t.status,
          headers: t.headers,
        }
      : { type: 'data', data: n, statusCode: t.status, headers: t.headers };
  }
  return r === 'error'
    ? sr(t)
      ? t.data instanceof Error
        ? {
            type: 'error',
            error: t.data,
            statusCode: t.init?.status,
            headers: t.init?.headers ? new Headers(t.init.headers) : void 0,
          }
        : {
            type: 'error',
            error: No(t),
            statusCode: We(t) ? t.status : void 0,
            headers: t.init?.headers ? new Headers(t.init.headers) : void 0,
          }
      : { type: 'error', error: t, statusCode: We(t) ? t.status : void 0 }
    : sr(t)
      ? {
          type: 'data',
          data: t.data,
          statusCode: t.init?.status,
          headers: t.init?.headers ? new Headers(t.init.headers) : void 0,
        }
      : { type: 'data', data: t };
}
function Do(e, t, r, n, a) {
  let o = e.headers.get('Location');
  if (
    (V(o, 'Redirects returned/thrown from loaders/actions must have a Location header'), !It(o))
  ) {
    let i = n.slice(0, n.findIndex((s) => s.route.id === r) + 1);
    ((o = ar(new URL(t.url), i, a, o)), e.headers.set('Location', o));
  }
  return e;
}
function nn(e, t, r) {
  if (It(e)) {
    let n = e,
      a = n.startsWith('//') ? new URL(t.protocol + n) : new URL(n),
      o = Re(a.pathname, r) != null;
    if (a.origin === t.origin && o) return a.pathname + a.search + a.hash;
  }
  return e;
}
function Xe(e, t, r, n) {
  let a = e.createURL(kn(t)).toString(),
    o = { signal: r };
  if (n && ve(n.formMethod)) {
    let { formMethod: i, formEncType: s } = n;
    ((o.method = i.toUpperCase()),
      s === 'application/json'
        ? ((o.headers = new Headers({ 'Content-Type': s })), (o.body = JSON.stringify(n.json)))
        : s === 'text/plain'
          ? (o.body = n.text)
          : s === 'application/x-www-form-urlencoded' && n.formData
            ? (o.body = lr(n.formData))
            : (o.body = n.formData));
  }
  return new Request(a, o);
}
function lr(e) {
  let t = new URLSearchParams();
  for (let [r, n] of e.entries()) t.append(r, typeof n == 'string' ? n : n.name);
  return t;
}
function an(e) {
  let t = new FormData();
  for (let [r, n] of e.entries()) t.append(r, n);
  return t;
}
function _o(e, t, r, n = !1, a = !1) {
  let o = {},
    i = null,
    s,
    l = !1,
    u = {},
    h = r && Ee(r[1]) ? r[1].error : void 0;
  return (
    e.forEach((d) => {
      if (!(d.route.id in t)) return;
      let v = d.route.id,
        w = t[v];
      if ((V(!Be(w), 'Cannot handle redirect results in processLoaderData'), Ee(w))) {
        let E = w.error;
        if ((h !== void 0 && ((E = h), (h = void 0)), (i = i || {}), a)) i[v] = E;
        else {
          let C = ke(e, v);
          i[C.route.id] == null && (i[C.route.id] = E);
        }
        (n || (o[v] = Mn),
          l || ((l = !0), (s = We(w.error) ? w.error.status : 500)),
          w.headers && (u[v] = w.headers));
      } else
        ((o[v] = w.data),
          w.statusCode && w.statusCode !== 200 && !l && (s = w.statusCode),
          w.headers && (u[v] = w.headers));
    }),
    h !== void 0 && r && ((i = { [r[0]]: h }), r[2] && (o[r[2]] = void 0)),
    { loaderData: o, errors: i, statusCode: s || 200, loaderHeaders: u }
  );
}
function on(e, t, r, n, a, o) {
  let { loaderData: i, errors: s } = _o(t, r, n);
  return (
    a
      .filter((l) => !l.matches || l.matches.some((u) => u.shouldLoad))
      .forEach((l) => {
        let { key: u, match: h, controller: d } = l;
        if (d && d.signal.aborted) return;
        let v = o[u];
        if ((V(v, 'Did not find corresponding fetcher result'), Ee(v))) {
          let w = ke(e.matches, h?.route.id);
          ((s && s[w.route.id]) || (s = { ...s, [w.route.id]: v.error }), e.fetchers.delete(u));
        } else if (Be(v)) V(!1, 'Unhandled fetcher revalidation redirect');
        else {
          let w = Oe(v.data);
          e.fetchers.set(u, w);
        }
      }),
    { loaderData: i, errors: s }
  );
}
function ln(e, t, r, n) {
  let a = Object.entries(t)
    .filter(([, o]) => o !== Mn)
    .reduce((o, [i, s]) => ((o[i] = s), o), {});
  for (let o of r) {
    let i = o.route.id;
    if (
      (!t.hasOwnProperty(i) && e.hasOwnProperty(i) && o.route.loader && (a[i] = e[i]),
      n && n.hasOwnProperty(i))
    )
      break;
  }
  return a;
}
function sn(e) {
  return e ? (Ee(e[1]) ? { actionData: {} } : { actionData: { [e[0]]: e[1].data } }) : {};
}
function ke(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((n) => n.route.id === t) + 1) : [...e])
      .reverse()
      .find((n) => n.route.hasErrorBoundary === !0) || e[0]
  );
}
function bt(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((r) => r.index || !r.path || r.path === '/') || { id: '__shim-error-route__' };
  return { matches: [{ params: {}, pathname: '', pathnameBase: '', route: t }], route: t };
}
function Se(e, { pathname: t, routeId: r, method: n, type: a, message: o } = {}) {
  let i = 'Unknown Server Error',
    s = 'Unknown @remix-run/router error';
  return (
    e === 400
      ? ((i = 'Bad Request'),
        n && t && r
          ? (s = `You made a ${n} request to "${t}" but did not provide a \`loader\` for route "${r}", so there is no way to handle the request.`)
          : a === 'invalid-body' && (s = 'Unable to encode submission body'))
      : e === 403
        ? ((i = 'Forbidden'), (s = `Route "${r}" does not match URL "${t}"`))
        : e === 404
          ? ((i = 'Not Found'), (s = `No route matches URL "${t}"`))
          : e === 405 &&
            ((i = 'Method Not Allowed'),
            n && t && r
              ? (s = `You made a ${n.toUpperCase()} request to "${t}" but did not provide an \`action\` for route "${r}", so there is no way to handle the request.`)
              : n && (s = `Invalid request method "${n.toUpperCase()}"`)),
    new Ye(e || 500, i, new Error(s), !0)
  );
}
function St(e) {
  let t = Object.entries(e);
  for (let r = t.length - 1; r >= 0; r--) {
    let [n, a] = t[r];
    if (Be(a)) return { key: n, result: a };
  }
}
function kn(e) {
  let t = typeof e == 'string' ? $e(e) : e;
  return Le({ ...t, hash: '' });
}
function Oo(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ''
      ? t.hash !== ''
      : e.hash === t.hash
        ? !0
        : t.hash !== '';
}
function No(e) {
  return new Ye(e.init?.status ?? 500, e.init?.statusText ?? 'Internal Server Error', e.data);
}
function Ao(e) {
  return (
    e != null &&
    typeof e == 'object' &&
    Object.entries(e).every(([t, r]) => typeof t == 'string' && ko(r))
  );
}
function ko(e) {
  return (
    e != null &&
    typeof e == 'object' &&
    'type' in e &&
    'result' in e &&
    (e.type === 'data' || e.type === 'error')
  );
}
function Io(e) {
  return yr(e.result) && yo.has(e.result.status);
}
function Ee(e) {
  return e.type === 'error';
}
function Be(e) {
  return (e && e.type) === 'redirect';
}
function sr(e) {
  return (
    typeof e == 'object' &&
    e != null &&
    'type' in e &&
    'data' in e &&
    'init' in e &&
    e.type === 'DataWithResponseInit'
  );
}
function yr(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.headers == 'object' &&
    typeof e.body < 'u'
  );
}
function $o(e) {
  return po.has(e.toUpperCase());
}
function ve(e) {
  return ho.has(e.toUpperCase());
}
function vr(e) {
  return new URLSearchParams(e).getAll('index').some((t) => t === '');
}
function Tt(e, t) {
  let r = typeof t == 'string' ? $e(t).search : t.search;
  if (e[e.length - 1].route.index && vr(r || '')) return e[e.length - 1];
  let n = Pn(e);
  return n[n.length - 1];
}
function un(e) {
  let { formMethod: t, formAction: r, formEncType: n, text: a, formData: o, json: i } = e;
  if (!(!t || !r || !n)) {
    if (a != null)
      return {
        formMethod: t,
        formAction: r,
        formEncType: n,
        formData: void 0,
        json: void 0,
        text: a,
      };
    if (o != null)
      return {
        formMethod: t,
        formAction: r,
        formEncType: n,
        formData: o,
        json: void 0,
        text: void 0,
      };
    if (i !== void 0)
      return {
        formMethod: t,
        formAction: r,
        formEncType: n,
        formData: void 0,
        json: i,
        text: void 0,
      };
  }
}
function Zt(e, t) {
  return t
    ? {
        state: 'loading',
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: 'loading',
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function Fo(e, t) {
  return {
    state: 'submitting',
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function ot(e, t) {
  return e
    ? {
        state: 'loading',
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: 'loading',
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function jo(e, t) {
  return {
    state: 'submitting',
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function Oe(e) {
  return {
    state: 'idle',
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function Ho(e, t) {
  try {
    let r = e.sessionStorage.getItem(Tn);
    if (r) {
      let n = JSON.parse(r);
      for (let [a, o] of Object.entries(n || {}))
        o && Array.isArray(o) && t.set(a, new Set(o || []));
    }
  } catch {}
}
function Uo(e, t) {
  if (t.size > 0) {
    let r = {};
    for (let [n, a] of t) r[n] = [...a];
    try {
      e.sessionStorage.setItem(Tn, JSON.stringify(r));
    } catch (n) {
      ie(!1, `Failed to save applied view transitions in sessionStorage (${n}).`);
    }
  }
}
function cn() {
  let e,
    t,
    r = new Promise((n, a) => {
      ((e = async (o) => {
        n(o);
        try {
          await r;
        } catch {}
      }),
        (t = async (o) => {
          a(o);
          try {
            await r;
          } catch {}
        }));
    });
  return { promise: r, resolve: e, reject: t };
}
var Ve = m.createContext(null);
Ve.displayName = 'DataRouter';
var Qe = m.createContext(null);
Qe.displayName = 'DataRouterState';
var zo = m.createContext(!1);
function Bo() {
  return m.useContext(zo);
}
var gr = m.createContext({ isTransitioning: !1 });
gr.displayName = 'ViewTransition';
var In = m.createContext(new Map());
In.displayName = 'Fetchers';
var Wo = m.createContext(null);
Wo.displayName = 'Await';
var we = m.createContext(null);
we.displayName = 'Navigation';
var jt = m.createContext(null);
jt.displayName = 'Location';
var xe = m.createContext({ outlet: null, matches: [], isDataRoute: !1 });
xe.displayName = 'Route';
var wr = m.createContext(null);
wr.displayName = 'RouteError';
function Yo(e, { relative: t } = {}) {
  V(Ze(), 'useHref() may be used only in the context of a <Router> component.');
  let { basename: r, navigator: n } = m.useContext(we),
    { hash: a, pathname: o, search: i } = ht(e, { relative: t }),
    s = o;
  return (
    r !== '/' && (s = o === '/' ? r : Ce([r, o])),
    n.createHref({ pathname: s, search: i, hash: a })
  );
}
function Ze() {
  return m.useContext(jt) != null;
}
function Te() {
  return (
    V(Ze(), 'useLocation() may be used only in the context of a <Router> component.'),
    m.useContext(jt).location
  );
}
var $n =
  'You should call navigate() in a React.useEffect(), not when your component is first rendered.';
function Fn(e) {
  m.useContext(we).static || m.useLayoutEffect(e);
}
function jn() {
  let { isDataRoute: e } = m.useContext(xe);
  return e ? si() : Vo();
}
function Vo() {
  V(Ze(), 'useNavigate() may be used only in the context of a <Router> component.');
  let e = m.useContext(Ve),
    { basename: t, navigator: r } = m.useContext(we),
    { matches: n } = m.useContext(xe),
    { pathname: a } = Te(),
    o = JSON.stringify($t(n)),
    i = m.useRef(!1);
  return (
    Fn(() => {
      i.current = !0;
    }),
    m.useCallback(
      (l, u = {}) => {
        if ((ie(i.current, $n), !i.current)) return;
        if (typeof l == 'number') {
          r.go(l);
          return;
        }
        let h = Ft(l, JSON.parse(o), a, u.relative === 'path');
        (e == null && t !== '/' && (h.pathname = h.pathname === '/' ? t : Ce([t, h.pathname])),
          (u.replace ? r.replace : r.push)(h, u.state, u));
      },
      [t, r, o, a, e],
    )
  );
}
var Jo = m.createContext(null);
function Go(e) {
  let t = m.useContext(xe).outlet;
  return m.useMemo(() => t && m.createElement(Jo.Provider, { value: e }, t), [t, e]);
}
function Xo() {
  let { matches: e } = m.useContext(xe),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function ht(e, { relative: t } = {}) {
  let { matches: r } = m.useContext(xe),
    { pathname: n } = Te(),
    a = JSON.stringify($t(r));
  return m.useMemo(() => Ft(e, JSON.parse(a), n, t === 'path'), [e, a, n, t]);
}
function Ko(e, t, r, n, a) {
  V(Ze(), 'useRoutes() may be used only in the context of a <Router> component.');
  let { navigator: o } = m.useContext(we),
    { matches: i } = m.useContext(xe),
    s = i[i.length - 1],
    l = s ? s.params : {},
    u = s ? s.pathname : '/',
    h = s ? s.pathnameBase : '/',
    d = s && s.route;
  {
    let b = (d && d.path) || '';
    Un(
      u,
      !d || b.endsWith('*') || b.endsWith('*?'),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${u}" (under <Route path="${b}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${b}"> to <Route path="${b === '/' ? '*' : `${b}/*`}">.`,
    );
  }
  let v = Te(),
    w;
  w = v;
  let E = w.pathname || '/',
    C = E;
  if (h !== '/') {
    let b = h.replace(/^\//, '').split('/');
    C = '/' + E.replace(/^\//, '').split('/').slice(b.length).join('/');
  }
  let R = Ne(e, { pathname: C });
  return (
    ie(d || R != null, `No routes matched location "${w.pathname}${w.search}${w.hash}" `),
    ie(
      R == null ||
        R[R.length - 1].route.element !== void 0 ||
        R[R.length - 1].route.Component !== void 0 ||
        R[R.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
    ),
    ti(
      R &&
        R.map((b) =>
          Object.assign({}, b, {
            params: Object.assign({}, l, b.params),
            pathname: Ce([
              h,
              o.encodeLocation
                ? o.encodeLocation(b.pathname.replace(/\?/g, '%3F').replace(/#/g, '%23')).pathname
                : b.pathname,
            ]),
            pathnameBase:
              b.pathnameBase === '/'
                ? h
                : Ce([
                    h,
                    o.encodeLocation
                      ? o.encodeLocation(b.pathnameBase.replace(/\?/g, '%3F').replace(/#/g, '%23'))
                          .pathname
                      : b.pathnameBase,
                  ]),
          }),
        ),
      i,
      r,
      n,
      a,
    )
  );
}
function qo() {
  let e = Hn(),
    t = We(e) ? `${e.status} ${e.statusText}` : e instanceof Error ? e.message : JSON.stringify(e),
    r = e instanceof Error ? e.stack : null,
    n = 'rgba(200,200,200, 0.5)',
    a = { padding: '0.5rem', backgroundColor: n },
    o = { padding: '2px 4px', backgroundColor: n },
    i = null;
  return (
    console.error('Error handled by React Router default ErrorBoundary:', e),
    (i = m.createElement(
      m.Fragment,
      null,
      m.createElement('p', null, '💿 Hey developer 👋'),
      m.createElement(
        'p',
        null,
        'You can provide a way better UX than this when your app throws errors by providing your own ',
        m.createElement('code', { style: o }, 'ErrorBoundary'),
        ' or',
        ' ',
        m.createElement('code', { style: o }, 'errorElement'),
        ' prop on your route.',
      ),
    )),
    m.createElement(
      m.Fragment,
      null,
      m.createElement('h2', null, 'Unexpected Application Error!'),
      m.createElement('h3', { style: { fontStyle: 'italic' } }, t),
      r ? m.createElement('pre', { style: a }, r) : null,
      i,
    )
  );
}
var Qo = m.createElement(qo, null),
  Zo = class extends m.Component {
    constructor(e) {
      (super(e),
        (this.state = { location: e.location, revalidation: e.revalidation, error: e.error }));
    }
    static getDerivedStateFromError(e) {
      return { error: e };
    }
    static getDerivedStateFromProps(e, t) {
      return t.location !== e.location || (t.revalidation !== 'idle' && e.revalidation === 'idle')
        ? { error: e.error, location: e.location, revalidation: e.revalidation }
        : {
            error: e.error !== void 0 ? e.error : t.error,
            location: t.location,
            revalidation: e.revalidation || t.revalidation,
          };
    }
    componentDidCatch(e, t) {
      this.props.onError
        ? this.props.onError(e, t)
        : console.error('React Router caught the following error during render', e);
    }
    render() {
      return this.state.error !== void 0
        ? m.createElement(
            xe.Provider,
            { value: this.props.routeContext },
            m.createElement(wr.Provider, {
              value: this.state.error,
              children: this.props.component,
            }),
          )
        : this.props.children;
    }
  };
function ei({ routeContext: e, match: t, children: r }) {
  let n = m.useContext(Ve);
  return (
    n &&
      n.static &&
      n.staticContext &&
      (t.route.errorElement || t.route.ErrorBoundary) &&
      (n.staticContext._deepestRenderedBoundaryId = t.route.id),
    m.createElement(xe.Provider, { value: e }, r)
  );
}
function ti(e, t = [], r = null, n = null, a = null) {
  if (e == null) {
    if (!r) return null;
    if (r.errors) e = r.matches;
    else if (t.length === 0 && !r.initialized && r.matches.length > 0) e = r.matches;
    else return null;
  }
  let o = e,
    i = r?.errors;
  if (i != null) {
    let h = o.findIndex((d) => d.route.id && i?.[d.route.id] !== void 0);
    (V(
      h >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(i).join(',')}`,
    ),
      (o = o.slice(0, Math.min(o.length, h + 1))));
  }
  let s = !1,
    l = -1;
  if (r)
    for (let h = 0; h < o.length; h++) {
      let d = o[h];
      if (((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (l = h), d.route.id)) {
        let { loaderData: v, errors: w } = r,
          E = d.route.loader && !v.hasOwnProperty(d.route.id) && (!w || w[d.route.id] === void 0);
        if (d.route.lazy || E) {
          ((s = !0), l >= 0 ? (o = o.slice(0, l + 1)) : (o = [o[0]]));
          break;
        }
      }
    }
  let u =
    r && n
      ? (h, d) => {
          n(h, {
            location: r.location,
            params: r.matches?.[0]?.params ?? {},
            unstable_pattern: ft(r.matches),
            errorInfo: d,
          });
        }
      : void 0;
  return o.reduceRight((h, d, v) => {
    let w,
      E = !1,
      C = null,
      R = null;
    r &&
      ((w = i && d.route.id ? i[d.route.id] : void 0),
      (C = d.route.errorElement || Qo),
      s &&
        (l < 0 && v === 0
          ? (Un(
              'route-fallback',
              !1,
              'No `HydrateFallback` element provided to render during initial hydration',
            ),
            (E = !0),
            (R = null))
          : l === v && ((E = !0), (R = d.route.hydrateFallbackElement || null))));
    let P = t.concat(o.slice(0, v + 1)),
      b = () => {
        let M;
        return (
          w
            ? (M = C)
            : E
              ? (M = R)
              : d.route.Component
                ? (M = m.createElement(d.route.Component, null))
                : d.route.element
                  ? (M = d.route.element)
                  : (M = h),
          m.createElement(ei, {
            match: d,
            routeContext: { outlet: h, matches: P, isDataRoute: r != null },
            children: M,
          })
        );
      };
    return r && (d.route.ErrorBoundary || d.route.errorElement || v === 0)
      ? m.createElement(Zo, {
          location: r.location,
          revalidation: r.revalidation,
          component: C,
          error: w,
          children: b(),
          routeContext: { outlet: null, matches: P, isDataRoute: !0 },
          onError: u,
        })
      : b();
  }, null);
}
function Er(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function ri(e) {
  let t = m.useContext(Ve);
  return (V(t, Er(e)), t);
}
function mt(e) {
  let t = m.useContext(Qe);
  return (V(t, Er(e)), t);
}
function ni(e) {
  let t = m.useContext(xe);
  return (V(t, Er(e)), t);
}
function pt(e) {
  let t = ni(e),
    r = t.matches[t.matches.length - 1];
  return (V(r.route.id, `${e} can only be used on routes that contain a unique "id"`), r.route.id);
}
function ai() {
  return pt('useRouteId');
}
function oi() {
  return mt('useNavigation').navigation;
}
function Rr() {
  let { matches: e, loaderData: t } = mt('useMatches');
  return m.useMemo(() => e.map((r) => Rn(r, t)), [e, t]);
}
function ii() {
  let e = mt('useLoaderData'),
    t = pt('useLoaderData');
  return e.loaderData[t];
}
function li() {
  let e = mt('useActionData'),
    t = pt('useLoaderData');
  return e.actionData ? e.actionData[t] : void 0;
}
function Hn() {
  let e = m.useContext(wr),
    t = mt('useRouteError'),
    r = pt('useRouteError');
  return e !== void 0 ? e : t.errors?.[r];
}
function si() {
  let { router: e } = ri('useNavigate'),
    t = pt('useNavigate'),
    r = m.useRef(!1);
  return (
    Fn(() => {
      r.current = !0;
    }),
    m.useCallback(
      async (a, o = {}) => {
        (ie(r.current, $n),
          r.current &&
            (typeof a == 'number'
              ? await e.navigate(a)
              : await e.navigate(a, { fromRouteId: t, ...o })));
      },
      [e, t],
    )
  );
}
var dn = {};
function Un(e, t, r) {
  !t && !dn[e] && ((dn[e] = !0), ie(!1, r));
}
var fn = {};
function ur(e, t) {
  !e && !fn[t] && ((fn[t] = !0), console.warn(t));
}
var ui = 'useOptimistic',
  hn = Da[ui],
  ci = () => {};
function di(e) {
  return hn ? hn(e) : [e, ci];
}
function Vl(e) {
  let t = {
    hasErrorBoundary: e.hasErrorBoundary || e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      (e.element &&
        ie(
          !1,
          'You should not include both `Component` and `element` on your route - `Component` will be used.',
        ),
      Object.assign(t, { element: m.createElement(e.Component), Component: void 0 })),
    e.HydrateFallback &&
      (e.hydrateFallbackElement &&
        ie(
          !1,
          'You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used.',
        ),
      Object.assign(t, {
        hydrateFallbackElement: m.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      })),
    e.ErrorBoundary &&
      (e.errorElement &&
        ie(
          !1,
          'You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used.',
        ),
      Object.assign(t, { errorElement: m.createElement(e.ErrorBoundary), ErrorBoundary: void 0 })),
    t
  );
}
var Jl = ['HydrateFallback', 'hydrateFallbackElement'],
  fi = class {
    constructor() {
      ((this.status = 'pending'),
        (this.promise = new Promise((e, t) => {
          ((this.resolve = (r) => {
            this.status === 'pending' && ((this.status = 'resolved'), e(r));
          }),
            (this.reject = (r) => {
              this.status === 'pending' && ((this.status = 'rejected'), t(r));
            }));
        })));
    }
  };
function Gl({ router: e, flushSync: t, unstable_onError: r, unstable_useTransitions: n }) {
  let [a, o] = m.useState(e.state),
    [i, s] = di(a),
    [l, u] = m.useState(),
    [h, d] = m.useState({ isTransitioning: !1 }),
    [v, w] = m.useState(),
    [E, C] = m.useState(),
    [R, P] = m.useState(),
    b = m.useRef(new Map()),
    M = m.useCallback(
      (f, { deletedFetchers: B, newErrors: W, flushSync: G, viewTransitionOpts: U }) => {
        (W &&
          r &&
          Object.values(W).forEach((Z) =>
            r(Z, {
              location: f.location,
              params: f.matches[0]?.params ?? {},
              unstable_pattern: ft(f.matches),
            }),
          ),
          f.fetchers.forEach((Z, q) => {
            Z.data !== void 0 && b.current.set(q, Z.data);
          }),
          B.forEach((Z) => b.current.delete(Z)),
          ur(
            G === !1 || t != null,
            'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.',
          ));
        let se =
          e.window != null &&
          e.window.document != null &&
          typeof e.window.document.startViewTransition == 'function';
        if (
          (ur(
            U == null || se,
            'You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available.',
          ),
          !U || !se)
        ) {
          t && G
            ? t(() => o(f))
            : n === !1
              ? o(f)
              : m.startTransition(() => {
                  (n === !0 && s((Z) => mn(Z, f)), o(f));
                });
          return;
        }
        if (t && G) {
          t(() => {
            (E && (v?.resolve(), E.skipTransition()),
              d({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: U.currentLocation,
                nextLocation: U.nextLocation,
              }));
          });
          let Z = e.window.document.startViewTransition(() => {
            t(() => o(f));
          });
          (Z.finished.finally(() => {
            t(() => {
              (w(void 0), C(void 0), u(void 0), d({ isTransitioning: !1 }));
            });
          }),
            t(() => C(Z)));
          return;
        }
        E
          ? (v?.resolve(),
            E.skipTransition(),
            P({ state: f, currentLocation: U.currentLocation, nextLocation: U.nextLocation }))
          : (u(f),
            d({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: U.currentLocation,
              nextLocation: U.nextLocation,
            }));
      },
      [e.window, t, E, v, n, s, r],
    );
  (m.useLayoutEffect(() => e.subscribe(M), [e, M]),
    m.useEffect(() => {
      h.isTransitioning && !h.flushSync && w(new fi());
    }, [h]),
    m.useEffect(() => {
      if (v && l && e.window) {
        let f = l,
          B = v.promise,
          W = e.window.document.startViewTransition(async () => {
            (n === !1
              ? o(f)
              : m.startTransition(() => {
                  (n === !0 && s((G) => mn(G, f)), o(f));
                }),
              await B);
          });
        (W.finished.finally(() => {
          (w(void 0), C(void 0), u(void 0), d({ isTransitioning: !1 }));
        }),
          C(W));
      }
    }, [l, v, e.window, n, s]),
    m.useEffect(() => {
      v && l && i.location.key === l.location.key && v.resolve();
    }, [v, E, i.location, l]),
    m.useEffect(() => {
      !h.isTransitioning &&
        R &&
        (u(R.state),
        d({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: R.currentLocation,
          nextLocation: R.nextLocation,
        }),
        P(void 0));
    }, [h.isTransitioning, R]));
  let T = m.useMemo(
      () => ({
        createHref: e.createHref,
        encodeLocation: e.encodeLocation,
        go: (f) => e.navigate(f),
        push: (f, B, W) => e.navigate(f, { state: B, preventScrollReset: W?.preventScrollReset }),
        replace: (f, B, W) =>
          e.navigate(f, { replace: !0, state: B, preventScrollReset: W?.preventScrollReset }),
      }),
      [e],
    ),
    D = e.basename || '/',
    k = m.useMemo(
      () => ({ router: e, navigator: T, static: !1, basename: D, unstable_onError: r }),
      [e, T, D, r],
    );
  return m.createElement(
    m.Fragment,
    null,
    m.createElement(
      Ve.Provider,
      { value: k },
      m.createElement(
        Qe.Provider,
        { value: i },
        m.createElement(
          In.Provider,
          { value: b.current },
          m.createElement(
            gr.Provider,
            { value: h },
            m.createElement(
              pi,
              {
                basename: D,
                location: i.location,
                navigationType: i.historyAction,
                navigator: T,
                unstable_useTransitions: n === !0,
              },
              m.createElement(hi, {
                routes: e.routes,
                future: e.future,
                state: i,
                unstable_onError: r,
              }),
            ),
          ),
        ),
      ),
    ),
    null,
  );
}
function mn(e, t) {
  return {
    ...e,
    navigation: t.navigation.state !== 'idle' ? t.navigation : e.navigation,
    revalidation: t.revalidation !== 'idle' ? t.revalidation : e.revalidation,
    actionData: t.navigation.state !== 'submitting' ? t.actionData : e.actionData,
    fetchers: t.fetchers,
  };
}
var hi = m.memo(mi);
function mi({ routes: e, future: t, state: r, unstable_onError: n }) {
  return Ko(e, void 0, r, n, t);
}
function Xl({ to: e, replace: t, state: r, relative: n }) {
  V(Ze(), '<Navigate> may be used only in the context of a <Router> component.');
  let { static: a } = m.useContext(we);
  ie(
    !a,
    '<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.',
  );
  let { matches: o } = m.useContext(xe),
    { pathname: i } = Te(),
    s = jn(),
    l = Ft(e, $t(o), i, n === 'path'),
    u = JSON.stringify(l);
  return (
    m.useEffect(() => {
      s(JSON.parse(u), { replace: t, state: r, relative: n });
    }, [s, u, n, t, r]),
    null
  );
}
function Kl(e) {
  return Go(e.context);
}
function pi({
  basename: e = '/',
  children: t = null,
  location: r,
  navigationType: n = 'POP',
  navigator: a,
  static: o = !1,
  unstable_useTransitions: i,
}) {
  V(
    !Ze(),
    'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.',
  );
  let s = e.replace(/^\/*/, '/'),
    l = m.useMemo(
      () => ({ basename: s, navigator: a, static: o, unstable_useTransitions: i, future: {} }),
      [s, a, o, i],
    );
  typeof r == 'string' && (r = $e(r));
  let { pathname: u = '/', search: h = '', hash: d = '', state: v = null, key: w = 'default' } = r,
    E = m.useMemo(() => {
      let C = Re(u, s);
      return C == null
        ? null
        : { location: { pathname: C, search: h, hash: d, state: v, key: w }, navigationType: n };
    }, [s, u, h, d, v, w, n]);
  return (
    ie(
      E != null,
      `<Router basename="${s}"> is not able to match the URL "${u}${h}${d}" because it does not start with the basename, so the <Router> won't render anything.`,
    ),
    E == null
      ? null
      : m.createElement(
          we.Provider,
          { value: l },
          m.createElement(jt.Provider, { children: t, value: E }),
        )
  );
}
function yi() {
  return { params: Xo(), loaderData: ii(), actionData: li(), matches: Rr() };
}
function ql(e) {
  return function () {
    const r = yi();
    return m.createElement(e, r);
  };
}
var Mt = 'get',
  Dt = 'application/x-www-form-urlencoded';
function Ht(e) {
  return typeof HTMLElement < 'u' && e instanceof HTMLElement;
}
function vi(e) {
  return Ht(e) && e.tagName.toLowerCase() === 'button';
}
function gi(e) {
  return Ht(e) && e.tagName.toLowerCase() === 'form';
}
function wi(e) {
  return Ht(e) && e.tagName.toLowerCase() === 'input';
}
function Ei(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Ri(e, t) {
  return e.button === 0 && (!t || t === '_self') && !Ei(e);
}
var xt = null;
function bi() {
  if (xt === null)
    try {
      (new FormData(document.createElement('form'), 0), (xt = !1));
    } catch {
      xt = !0;
    }
  return xt;
}
var Si = new Set(['application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain']);
function er(e) {
  return e != null && !Si.has(e)
    ? (ie(
        !1,
        `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Dt}"`,
      ),
      null)
    : e;
}
function xi(e, t) {
  let r, n, a, o, i;
  if (gi(e)) {
    let s = e.getAttribute('action');
    ((n = s ? Re(s, t) : null),
      (r = e.getAttribute('method') || Mt),
      (a = er(e.getAttribute('enctype')) || Dt),
      (o = new FormData(e)));
  } else if (vi(e) || (wi(e) && (e.type === 'submit' || e.type === 'image'))) {
    let s = e.form;
    if (s == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let l = e.getAttribute('formaction') || s.getAttribute('action');
    if (
      ((n = l ? Re(l, t) : null),
      (r = e.getAttribute('formmethod') || s.getAttribute('method') || Mt),
      (a = er(e.getAttribute('formenctype')) || er(s.getAttribute('enctype')) || Dt),
      (o = new FormData(s, e)),
      !bi())
    ) {
      let { name: u, type: h, value: d } = e;
      if (h === 'image') {
        let v = u ? `${u}.` : '';
        (o.append(`${v}x`, '0'), o.append(`${v}y`, '0'));
      } else u && o.append(u, d);
    }
  } else {
    if (Ht(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
      );
    ((r = Mt), (n = null), (a = Dt), (i = e));
  }
  return (
    o && a === 'text/plain' && ((i = o), (o = void 0)),
    { action: n, method: r.toLowerCase(), encType: a, formData: o, body: i }
  );
}
var Pi = -1,
  Ci = -2,
  Li = -3,
  Ti = -4,
  Mi = -5,
  Di = -6,
  _i = -7,
  Oi = 'B',
  Ni = 'D',
  zn = 'E',
  Ai = 'M',
  ki = 'N',
  Bn = 'P',
  Ii = 'R',
  $i = 'S',
  Fi = 'Y',
  ji = 'U',
  Hi = 'Z',
  Wn = class {
    constructor() {
      this.promise = new Promise((e, t) => {
        ((this.resolve = e), (this.reject = t));
      });
    }
  };
function Ui() {
  const e = new TextDecoder();
  let t = '';
  return new TransformStream({
    transform(r, n) {
      const a = e.decode(r, { stream: !0 }),
        o = (t + a).split(`
`);
      t = o.pop() || '';
      for (const i of o) n.enqueue(i);
    },
    flush(r) {
      t && r.enqueue(t);
    },
  });
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
var tr = typeof window < 'u' ? window : typeof globalThis < 'u' ? globalThis : void 0;
function cr(e) {
  const { hydrated: t, values: r } = this;
  if (typeof e == 'number') return pn.call(this, e);
  if (!Array.isArray(e) || !e.length) throw new SyntaxError();
  const n = r.length;
  for (const a of e) r.push(a);
  return ((t.length = r.length), pn.call(this, n));
}
function pn(e) {
  const { hydrated: t, values: r, deferred: n, plugins: a } = this;
  let o;
  const i = [
    [
      e,
      (l) => {
        o = l;
      },
    ],
  ];
  let s = [];
  for (; i.length > 0; ) {
    const [l, u] = i.pop();
    switch (l) {
      case _i:
        u(void 0);
        continue;
      case Mi:
        u(null);
        continue;
      case Ci:
        u(NaN);
        continue;
      case Di:
        u(1 / 0);
        continue;
      case Li:
        u(-1 / 0);
        continue;
      case Ti:
        u(-0);
        continue;
    }
    if (t[l]) {
      u(t[l]);
      continue;
    }
    const h = r[l];
    if (!h || typeof h != 'object') {
      ((t[l] = h), u(h));
      continue;
    }
    if (Array.isArray(h))
      if (typeof h[0] == 'string') {
        const [d, v, w] = h;
        switch (d) {
          case Ni:
            u((t[l] = new Date(v)));
            continue;
          case ji:
            u((t[l] = new URL(v)));
            continue;
          case Oi:
            u((t[l] = BigInt(v)));
            continue;
          case Ii:
            u((t[l] = new RegExp(v, w)));
            continue;
          case Fi:
            u((t[l] = Symbol.for(v)));
            continue;
          case $i:
            const E = new Set();
            t[l] = E;
            for (let T = h.length - 1; T > 0; T--)
              i.push([
                h[T],
                (D) => {
                  E.add(D);
                },
              ]);
            u(E);
            continue;
          case Ai:
            const C = new Map();
            t[l] = C;
            for (let T = h.length - 2; T > 0; T -= 2) {
              const D = [];
              (i.push([
                h[T + 1],
                (k) => {
                  D[1] = k;
                },
              ]),
                i.push([
                  h[T],
                  (k) => {
                    D[0] = k;
                  },
                ]),
                s.push(() => {
                  C.set(D[0], D[1]);
                }));
            }
            u(C);
            continue;
          case ki:
            const R = Object.create(null);
            t[l] = R;
            for (const T of Object.keys(v).reverse()) {
              const D = [];
              (i.push([
                v[T],
                (k) => {
                  D[1] = k;
                },
              ]),
                i.push([
                  Number(T.slice(1)),
                  (k) => {
                    D[0] = k;
                  },
                ]),
                s.push(() => {
                  R[D[0]] = D[1];
                }));
            }
            u(R);
            continue;
          case Bn:
            if (t[v]) u((t[l] = t[v]));
            else {
              const T = new Wn();
              ((n[v] = T), u((t[l] = T.promise)));
            }
            continue;
          case zn:
            const [, P, b] = h;
            let M = b && tr && tr[b] ? new tr[b](P) : new Error(P);
            ((t[l] = M), u(M));
            continue;
          case Hi:
            u((t[l] = t[v]));
            continue;
          default:
            if (Array.isArray(a)) {
              const T = [],
                D = h.slice(1);
              for (let k = 0; k < D.length; k++) {
                const f = D[k];
                i.push([
                  f,
                  (B) => {
                    T[k] = B;
                  },
                ]);
              }
              s.push(() => {
                for (const k of a) {
                  const f = k(h[0], ...T);
                  if (f) {
                    u((t[l] = f.value));
                    return;
                  }
                }
                throw new SyntaxError();
              });
              continue;
            }
            throw new SyntaxError();
        }
      } else {
        const d = [];
        t[l] = d;
        for (let v = 0; v < h.length; v++) {
          const w = h[v];
          w !== Pi &&
            i.push([
              w,
              (E) => {
                d[v] = E;
              },
            ]);
        }
        u(d);
        continue;
      }
    else {
      const d = {};
      t[l] = d;
      for (const v of Object.keys(h).reverse()) {
        const w = [];
        (i.push([
          h[v],
          (E) => {
            w[1] = E;
          },
        ]),
          i.push([
            Number(v.slice(1)),
            (E) => {
              w[0] = E;
            },
          ]),
          s.push(() => {
            d[w[0]] = w[1];
          }));
      }
      u(d);
      continue;
    }
  }
  for (; s.length > 0; ) s.pop()();
  return o;
}
async function zi(e, t) {
  const { plugins: r } = t ?? {},
    n = new Wn(),
    a = e.pipeThrough(Ui()).getReader(),
    o = { values: [], hydrated: [], deferred: {}, plugins: r },
    i = await Bi.call(o, a);
  let s = n.promise;
  return (
    i.done
      ? n.resolve()
      : (s = Wi.call(o, a)
          .then(n.resolve)
          .catch((l) => {
            for (const u of Object.values(o.deferred)) u.reject(l);
            n.reject(l);
          })),
    { done: s.then(() => a.closed), value: i.value }
  );
}
async function Bi(e) {
  const t = await e.read();
  if (!t.value) throw new SyntaxError();
  let r;
  try {
    r = JSON.parse(t.value);
  } catch {
    throw new SyntaxError();
  }
  return { done: t.done, value: cr.call(this, r) };
}
async function Wi(e) {
  let t = await e.read();
  for (; !t.done; ) {
    if (!t.value) continue;
    const r = t.value;
    switch (r[0]) {
      case Bn: {
        const n = r.indexOf(':'),
          a = Number(r.slice(1, n)),
          o = this.deferred[a];
        if (!o) throw new Error(`Deferred ID ${a} not found in stream`);
        const i = r.slice(n + 1);
        let s;
        try {
          s = JSON.parse(i);
        } catch {
          throw new SyntaxError();
        }
        const l = cr.call(this, s);
        o.resolve(l);
        break;
      }
      case zn: {
        const n = r.indexOf(':'),
          a = Number(r.slice(1, n)),
          o = this.deferred[a];
        if (!o) throw new Error(`Deferred ID ${a} not found in stream`);
        const i = r.slice(n + 1);
        let s;
        try {
          s = JSON.parse(i);
        } catch {
          throw new SyntaxError();
        }
        const l = cr.call(this, s);
        o.reject(l);
        break;
      }
      default:
        throw new SyntaxError();
    }
    t = await e.read();
  }
}
async function Yi(e) {
  let t = { signal: e.signal };
  if (e.method !== 'GET') {
    t.method = e.method;
    let r = e.headers.get('Content-Type');
    r && /\bapplication\/json\b/.test(r)
      ? ((t.headers = { 'Content-Type': r }), (t.body = JSON.stringify(await e.json())))
      : r && /\btext\/plain\b/.test(r)
        ? ((t.headers = { 'Content-Type': r }), (t.body = await e.text()))
        : r && /\bapplication\/x-www-form-urlencoded\b/.test(r)
          ? (t.body = new URLSearchParams(await e.text()))
          : (t.body = await e.formData());
  }
  return t;
}
function ge(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
var dr = Symbol('SingleFetchRedirect'),
  Yn = class extends Error {},
  Vi = 202,
  Ji = new Set([100, 101, 204, 205]);
function Ql(e, t, r, n, a) {
  let o = Gi(
    e,
    (i) => {
      let s = t.routes[i.route.id];
      ge(s, 'Route not found in manifest');
      let l = r[i.route.id];
      return {
        hasLoader: s.hasLoader,
        hasClientLoader: s.hasClientLoader,
        hasShouldRevalidate: !!l?.shouldRevalidate,
      };
    },
    tl,
    n,
    a,
  );
  return async (i) => i.runClientMiddleware(o);
}
function Gi(e, t, r, n, a, o = () => !0) {
  return async (i) => {
    let { request: s, matches: l, fetcherKey: u } = i,
      h = e();
    if (s.method !== 'GET') return Xi(i, r, a);
    let d = l.some((v) => {
      let { hasLoader: w, hasClientLoader: E } = t(v);
      return v.shouldCallHandler() && w && !E;
    });
    return !n && !d ? Ki(i, t, r, a) : u ? Zi(i, r, a) : qi(i, h, t, r, n, a, o);
  };
}
async function Xi(e, t, r) {
  let n = e.matches.find((i) => i.shouldCallHandler());
  ge(n, 'No action match found');
  let a,
    o = await n.resolve(
      async (i) =>
        await i(async () => {
          let { data: l, status: u } = await t(e, r, [n.route.id]);
          return ((a = u), dt(l, n.route.id));
        }),
    );
  return yr(o.result) || We(o.result) || sr(o.result)
    ? { [n.route.id]: o }
    : { [n.route.id]: { type: o.type, result: ao(o.result, a) } };
}
async function Ki(e, t, r, n) {
  let a = e.matches.filter((i) => i.shouldCallHandler()),
    o = {};
  return (
    await Promise.all(
      a.map((i) =>
        i.resolve(async (s) => {
          try {
            let { hasClientLoader: l } = t(i),
              u = i.route.id,
              h = l
                ? await s(async () => {
                    let { data: d } = await r(e, n, [u]);
                    return dt(d, u);
                  })
                : await s();
            o[i.route.id] = { type: 'data', result: h };
          } catch (l) {
            o[i.route.id] = { type: 'error', result: l };
          }
        }),
      ),
    ),
    o
  );
}
async function qi(e, t, r, n, a, o, i = () => !0) {
  let s = new Set(),
    l = !1,
    u = e.matches.map(() => yn()),
    h = yn(),
    d = {},
    v = Promise.all(
      e.matches.map(async (E, C) =>
        E.resolve(async (R) => {
          u[C].resolve();
          let P = E.route.id,
            { hasLoader: b, hasClientLoader: M, hasShouldRevalidate: T } = r(E),
            D =
              !E.shouldRevalidateArgs ||
              E.shouldRevalidateArgs.actionStatus == null ||
              E.shouldRevalidateArgs.actionStatus < 400;
          if (!E.shouldCallHandler(D)) {
            l || (l = E.shouldRevalidateArgs != null && b && T === !0);
            return;
          }
          if (i(E) && M) {
            b && (l = !0);
            try {
              let f = await R(async () => {
                let { data: B } = await n(e, o, [P]);
                return dt(B, P);
              });
              d[P] = { type: 'data', result: f };
            } catch (f) {
              d[P] = { type: 'error', result: f };
            }
            return;
          }
          b && s.add(P);
          try {
            let f = await R(async () => {
              let B = await h.promise;
              return dt(B, P);
            });
            d[P] = { type: 'data', result: f };
          } catch (f) {
            d[P] = { type: 'error', result: f };
          }
        }),
      ),
    );
  if (
    (await Promise.all(u.map((E) => E.promise)),
    ((!t.state.initialized && t.state.navigation.state === 'idle') || s.size === 0) &&
      !window.__reactRouterHdrActive)
  )
    h.resolve({ routes: {} });
  else {
    let E = a && l && s.size > 0 ? [...s.keys()] : void 0;
    try {
      let C = await n(e, o, E);
      h.resolve(C.data);
    } catch (C) {
      h.reject(C);
    }
  }
  return (await v, await Qi(h.promise, e.matches, s, d), d);
}
async function Qi(e, t, r, n) {
  try {
    let a,
      o = await e;
    if ('routes' in o) {
      for (let i of t)
        if (i.route.id in o.routes) {
          let s = o.routes[i.route.id];
          if ('error' in s) {
            ((a = s.error),
              n[i.route.id]?.result == null && (n[i.route.id] = { type: 'error', result: a }));
            break;
          }
        }
    }
    a !== void 0 &&
      Array.from(r.values()).forEach((i) => {
        n[i].result instanceof Yn && (n[i].result = a);
      });
  } catch {}
}
async function Zi(e, t, r) {
  let n = e.matches.find((i) => i.shouldCallHandler());
  ge(n, 'No fetcher match found');
  let a = n.route.id,
    o = await n.resolve(async (i) =>
      i(async () => {
        let { data: s } = await t(e, r, [a]);
        return dt(s, a);
      }),
    );
  return { [n.route.id]: o };
}
function el(e) {
  let t = e.searchParams.getAll('index');
  e.searchParams.delete('index');
  let r = [];
  for (let n of t) n && r.push(n);
  for (let n of r) e.searchParams.append('index', n);
  return e;
}
function Vn(e, t, r) {
  let n =
    typeof e == 'string'
      ? new URL(e, typeof window > 'u' ? 'server://singlefetch/' : window.location.origin)
      : e;
  return (
    n.pathname === '/'
      ? (n.pathname = `_root.${r}`)
      : t && Re(n.pathname, t) === '/'
        ? (n.pathname = `${t.replace(/\/$/, '')}/_root.${r}`)
        : (n.pathname = `${n.pathname.replace(/\/$/, '')}.${r}`),
    n
  );
}
async function tl(e, t, r) {
  let { request: n } = e,
    a = Vn(n.url, t, 'data');
  n.method === 'GET' && ((a = el(a)), r && a.searchParams.set('_routes', r.join(',')));
  let o = await fetch(a, await Yi(n));
  if (o.status >= 400 && !o.headers.has('X-Remix-Response'))
    throw new Ye(o.status, o.statusText, await o.text());
  if (o.status === 204 && o.headers.has('X-Remix-Redirect'))
    return {
      status: Vi,
      data: {
        redirect: {
          redirect: o.headers.get('X-Remix-Redirect'),
          status: Number(o.headers.get('X-Remix-Status') || '302'),
          revalidate: o.headers.get('X-Remix-Revalidate') === 'true',
          reload: o.headers.get('X-Remix-Reload-Document') === 'true',
          replace: o.headers.get('X-Remix-Replace') === 'true',
        },
      },
    };
  if (Ji.has(o.status)) {
    let i = {};
    return (
      r && n.method !== 'GET' && (i[r[0]] = { data: void 0 }),
      { status: o.status, data: { routes: i } }
    );
  }
  ge(o.body, 'No response body to decode');
  try {
    let i = await rl(o.body, window),
      s;
    if (n.method === 'GET') {
      let l = i.value;
      dr in l ? (s = { redirect: l[dr] }) : (s = { routes: l });
    } else {
      let l = i.value,
        u = r?.[0];
      (ge(u, 'No routeId found for single fetch call decoding'),
        'redirect' in l ? (s = { redirect: l }) : (s = { routes: { [u]: l } }));
    }
    return { status: o.status, data: s };
  } catch {
    throw new Error('Unable to decode turbo-stream response');
  }
}
function rl(e, t) {
  return zi(e, {
    plugins: [
      (r, ...n) => {
        if (r === 'SanitizedError') {
          let [a, o, i] = n,
            s = Error;
          a && a in t && typeof t[a] == 'function' && (s = t[a]);
          let l = new s(o);
          return ((l.stack = i), { value: l });
        }
        if (r === 'ErrorResponse') {
          let [a, o, i] = n;
          return { value: new Ye(o, i, a) };
        }
        if (r === 'SingleFetchRedirect') return { value: { [dr]: n[0] } };
        if (r === 'SingleFetchClassInstance') return { value: n[0] };
        if (r === 'SingleFetchFallback') return { value: void 0 };
      },
    ],
  });
}
function dt(e, t) {
  if ('redirect' in e) {
    let { redirect: n, revalidate: a, reload: o, replace: i, status: s } = e.redirect;
    throw oo(n, {
      status: s,
      headers: {
        ...(a ? { 'X-Remix-Revalidate': 'yes' } : null),
        ...(o ? { 'X-Remix-Reload-Document': 'yes' } : null),
        ...(i ? { 'X-Remix-Replace': 'yes' } : null),
      },
    });
  }
  let r = e.routes[t];
  if (r == null) throw new Yn(`No result found for routeId "${t}"`);
  if ('error' in r) throw r.error;
  if ('data' in r) return r.data;
  throw new Error(`Invalid response found for routeId "${t}"`);
}
function yn() {
  let e,
    t,
    r = new Promise((n, a) => {
      ((e = async (o) => {
        n(o);
        try {
          await r;
        } catch {}
      }),
        (t = async (o) => {
          a(o);
          try {
            await r;
          } catch {}
        }));
    });
  return { promise: r, resolve: e, reject: t };
}
async function Jn(e, t) {
  if (e.id in t) return t[e.id];
  try {
    let r = await import(e.module);
    return ((t[e.id] = r), r);
  } catch (r) {
    return (
      console.error(`Error loading route module \`${e.module}\`, reloading page...`),
      console.error(r),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function Gn(e) {
  return e.css ? e.css.map((t) => ({ rel: 'stylesheet', href: t })) : [];
}
async function nl(e) {
  if (!e.css) return;
  let t = Gn(e);
  await Promise.all(t.map(Kn));
}
async function Xn(e, t) {
  if ((!e.css && !t.links) || !cl()) return;
  let r = [];
  if ((e.css && r.push(...Gn(e)), t.links && r.push(...t.links()), r.length === 0)) return;
  let n = [];
  for (let a of r)
    !al(a) && a.rel === 'stylesheet' && n.push({ ...a, rel: 'preload', as: 'style' });
  await Promise.all(n.map(Kn));
}
async function Kn(e) {
  return new Promise((t) => {
    if (
      (e.media && !window.matchMedia(e.media).matches) ||
      document.querySelector(`link[rel="stylesheet"][href="${e.href}"]`)
    )
      return t();
    let r = document.createElement('link');
    Object.assign(r, e);
    function n() {
      document.head.contains(r) && document.head.removeChild(r);
    }
    ((r.onload = () => {
      (n(), t());
    }),
      (r.onerror = () => {
        (n(), t());
      }),
      document.head.appendChild(r));
  });
}
function al(e) {
  return e != null && typeof e.page == 'string';
}
function ol(e) {
  return e == null
    ? !1
    : e.href == null
      ? e.rel === 'preload' && typeof e.imageSrcSet == 'string' && typeof e.imageSizes == 'string'
      : typeof e.rel == 'string' && typeof e.href == 'string';
}
async function il(e, t, r) {
  let n = await Promise.all(
    e.map(async (a) => {
      let o = t.routes[a.route.id];
      if (o) {
        let i = await Jn(o, r);
        return i.links ? i.links() : [];
      }
      return [];
    }),
  );
  return ul(
    n
      .flat(1)
      .filter(ol)
      .filter((a) => a.rel === 'stylesheet' || a.rel === 'preload')
      .map((a) =>
        a.rel === 'stylesheet' ? { ...a, rel: 'prefetch', as: 'style' } : { ...a, rel: 'prefetch' },
      ),
  );
}
function vn(e, t, r, n, a, o) {
  let i = (l, u) => (r[u] ? l.route.id !== r[u].route.id : !0),
    s = (l, u) =>
      r[u].pathname !== l.pathname ||
      (r[u].route.path?.endsWith('*') && r[u].params['*'] !== l.params['*']);
  return o === 'assets'
    ? t.filter((l, u) => i(l, u) || s(l, u))
    : o === 'data'
      ? t.filter((l, u) => {
          let h = n.routes[l.route.id];
          if (!h || !h.hasLoader) return !1;
          if (i(l, u) || s(l, u)) return !0;
          if (l.route.shouldRevalidate) {
            let d = l.route.shouldRevalidate({
              currentUrl: new URL(a.pathname + a.search + a.hash, window.origin),
              currentParams: r[0]?.params || {},
              nextUrl: new URL(e, window.origin),
              nextParams: l.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof d == 'boolean') return d;
          }
          return !0;
        })
      : [];
}
function qn(e, t, { includeHydrateFallback: r } = {}) {
  return ll(
    e
      .map((n) => {
        let a = t.routes[n.route.id];
        if (!a) return [];
        let o = [a.module];
        return (
          a.clientActionModule && (o = o.concat(a.clientActionModule)),
          a.clientLoaderModule && (o = o.concat(a.clientLoaderModule)),
          r && a.hydrateFallbackModule && (o = o.concat(a.hydrateFallbackModule)),
          a.imports && (o = o.concat(a.imports)),
          o
        );
      })
      .flat(1),
  );
}
function ll(e) {
  return [...new Set(e)];
}
function sl(e) {
  let t = {},
    r = Object.keys(e).sort();
  for (let n of r) t[n] = e[n];
  return t;
}
function ul(e, t) {
  let r = new Set();
  return (
    new Set(t),
    e.reduce((n, a) => {
      let o = JSON.stringify(sl(a));
      return (r.has(o) || (r.add(o), n.push({ key: o, link: a })), n);
    }, [])
  );
}
var Pt;
function cl() {
  if (Pt !== void 0) return Pt;
  let e = document.createElement('link');
  return ((Pt = e.relList.supports('preload')), (e = null), Pt);
}
function dl() {
  return m.createElement(
    fr,
    { title: 'Loading...', renderScripts: !0 },
    m.createElement('script', {
      dangerouslySetInnerHTML: {
        __html: `
              console.log(
                "💿 Hey developer 👋. You can provide a way better UX than this " +
                "when your app is loading JS modules and/or running \`clientLoader\` " +
                "functions. Check out https://reactrouter.com/start/framework/route-module#hydratefallback " +
                "for more information."
              );
            `,
      },
    }),
  );
}
function Qn(e) {
  let t = {};
  return (
    Object.values(e).forEach((r) => {
      if (r) {
        let n = r.parentId || '';
        (t[n] || (t[n] = []), t[n].push(r));
      }
    }),
    t
  );
}
function fl(e, t, r) {
  let n = Zn(t),
    a =
      t.HydrateFallback && (!r || e.id === 'root')
        ? t.HydrateFallback
        : e.id === 'root'
          ? dl
          : void 0,
    o = t.ErrorBoundary
      ? t.ErrorBoundary
      : e.id === 'root'
        ? () => m.createElement(ra, { error: Hn() })
        : void 0;
  return e.id === 'root' && t.Layout
    ? {
        ...(n
          ? { element: m.createElement(t.Layout, null, m.createElement(n, null)) }
          : { Component: n }),
        ...(o
          ? { errorElement: m.createElement(t.Layout, null, m.createElement(o, null)) }
          : { ErrorBoundary: o }),
        ...(a
          ? { hydrateFallbackElement: m.createElement(t.Layout, null, m.createElement(a, null)) }
          : { HydrateFallback: a }),
      }
    : { Component: n, ErrorBoundary: o, HydrateFallback: a };
}
function Zl(e, t, r, n, a, o) {
  return br(t, r, n, a, o, '', Qn(t), e);
}
function Ct(e, t) {
  if ((e === 'loader' && !t.hasLoader) || (e === 'action' && !t.hasAction)) {
    let n = `You are trying to call ${e === 'action' ? 'serverAction()' : 'serverLoader()'} on a route that does not have a server ${e} (routeId: "${t.id}")`;
    throw (console.error(n), new Ye(400, 'Bad Request', new Error(n), !0));
  }
}
function rr(e, t) {
  let r = e === 'clientAction' ? 'a' : 'an',
    n = `Route "${t}" does not have ${r} ${e}, but you are trying to submit to it. To fix this, please add ${r} \`${e}\` function to the route`;
  throw (console.error(n), new Ye(405, 'Method Not Allowed', new Error(n), !0));
}
function br(e, t, r, n, a, o = '', i = Qn(e), s) {
  return (i[o] || []).map((l) => {
    let u = t[l.id];
    function h(b) {
      return (
        ge(typeof b == 'function', 'No single fetch function available for route handler'),
        b()
      );
    }
    function d(b) {
      return l.hasLoader ? h(b) : Promise.resolve(null);
    }
    function v(b) {
      if (!l.hasAction) throw rr('action', l.id);
      return h(b);
    }
    function w(b) {
      import(b);
    }
    function E(b) {
      (b.clientActionModule && w(b.clientActionModule),
        b.clientLoaderModule && w(b.clientLoaderModule));
    }
    async function C(b) {
      let M = t[l.id],
        T = M ? Xn(l, M) : Promise.resolve();
      try {
        return b();
      } finally {
        await T;
      }
    }
    let R = { id: l.id, index: l.index, path: l.path };
    if (u) {
      Object.assign(R, {
        ...R,
        ...fl(l, u, a),
        middleware: u.clientMiddleware,
        handle: u.handle,
        shouldRevalidate: gn(R.path, u, l, n, s),
      });
      let b = r && r.loaderData && l.id in r.loaderData,
        M = b ? r?.loaderData?.[l.id] : void 0,
        T = r && r.errors && l.id in r.errors,
        D = T ? r?.errors?.[l.id] : void 0,
        k = s == null && (u.clientLoader?.hydrate === !0 || !l.hasLoader);
      ((R.loader = async ({ request: f, params: B, context: W, unstable_pattern: G }, U) => {
        try {
          return await C(
            async () => (
              ge(u, 'No `routeModule` available for critical-route loader'),
              u.clientLoader
                ? u.clientLoader({
                    request: f,
                    params: B,
                    context: W,
                    unstable_pattern: G,
                    async serverLoader() {
                      if ((Ct('loader', l), k)) {
                        if (b) return M;
                        if (T) throw D;
                      }
                      return d(U);
                    },
                  })
                : d(U)
            ),
          );
        } finally {
          k = !1;
        }
      }),
        (R.loader.hydrate = pl(l.id, u.clientLoader, l.hasLoader, a)),
        (R.action = ({ request: f, params: B, context: W, unstable_pattern: G }, U) =>
          C(async () => {
            if ((ge(u, 'No `routeModule` available for critical-route action'), !u.clientAction)) {
              if (a) throw rr('clientAction', l.id);
              return v(U);
            }
            return u.clientAction({
              request: f,
              params: B,
              context: W,
              unstable_pattern: G,
              async serverAction() {
                return (Ct('action', l), v(U));
              },
            });
          })));
    } else {
      (l.hasClientLoader || (R.loader = (T, D) => C(() => d(D))),
        l.hasClientAction ||
          (R.action = (T, D) =>
            C(() => {
              if (a) throw rr('clientAction', l.id);
              return v(D);
            })));
      let b;
      async function M() {
        return b
          ? await b
          : ((b = (async () => {
              (l.clientLoaderModule || l.clientActionModule) &&
                (await new Promise((D) => setTimeout(D, 0)));
              let T = ml(l, t);
              return (E(l), await T);
            })()),
            await b);
      }
      R.lazy = {
        loader: l.hasClientLoader
          ? async () => {
              let { clientLoader: T } = l.clientLoaderModule
                ? await import(l.clientLoaderModule)
                : await M();
              return (
                ge(T, 'No `clientLoader` export found'),
                (D, k) =>
                  T({
                    ...D,
                    async serverLoader() {
                      return (Ct('loader', l), d(k));
                    },
                  })
              );
            }
          : void 0,
        action: l.hasClientAction
          ? async () => {
              let T = l.clientActionModule ? import(l.clientActionModule) : M();
              E(l);
              let { clientAction: D } = await T;
              return (
                ge(D, 'No `clientAction` export found'),
                (k, f) =>
                  D({
                    ...k,
                    async serverAction() {
                      return (Ct('action', l), v(f));
                    },
                  })
              );
            }
          : void 0,
        middleware: l.hasClientMiddleware
          ? async () => {
              let { clientMiddleware: T } = l.clientMiddlewareModule
                ? await import(l.clientMiddlewareModule)
                : await M();
              return (ge(T, 'No `clientMiddleware` export found'), T);
            }
          : void 0,
        shouldRevalidate: async () => {
          let T = await M();
          return gn(R.path, T, l, n, s);
        },
        handle: async () => (await M()).handle,
        Component: async () => (await M()).Component,
        ErrorBoundary: l.hasErrorBoundary ? async () => (await M()).ErrorBoundary : void 0,
      };
    }
    let P = br(e, t, r, n, a, l.id, i, s);
    return (P.length > 0 && (R.children = P), R);
  });
}
function gn(e, t, r, n, a) {
  if (a) return hl(r.id, t.shouldRevalidate, a);
  if (!n && r.hasLoader && !r.hasClientLoader) {
    let o = e ? xn(e)[1].map((s) => s.paramName) : [];
    const i = (s) => o.some((l) => s.currentParams[l] !== s.nextParams[l]);
    if (t.shouldRevalidate) {
      let s = t.shouldRevalidate;
      return (l) => s({ ...l, defaultShouldRevalidate: i(l) });
    } else return (s) => i(s);
  }
  return t.shouldRevalidate;
}
function hl(e, t, r) {
  let n = !1;
  return (a) => (n ? (t ? t(a) : a.defaultShouldRevalidate) : ((n = !0), r.has(e)));
}
async function ml(e, t) {
  let r = Jn(e, t),
    n = nl(e),
    a = await r;
  return (
    await Promise.all([n, Xn(e, a)]),
    {
      Component: Zn(a),
      ErrorBoundary: a.ErrorBoundary,
      clientMiddleware: a.clientMiddleware,
      clientAction: a.clientAction,
      clientLoader: a.clientLoader,
      handle: a.handle,
      links: a.links,
      meta: a.meta,
      shouldRevalidate: a.shouldRevalidate,
    }
  );
}
function Zn(e) {
  if (e.default == null) return;
  if (!(typeof e.default == 'object' && Object.keys(e.default).length === 0)) return e.default;
}
function pl(e, t, r, n) {
  return (n && e !== 'root') || (t != null && (t.hydrate === !0 || r !== !0));
}
var _t = new Set(),
  yl = 1e3,
  At = new Set(),
  vl = 7680;
function Sr(e, t) {
  return e.mode === 'lazy' && t === !0;
}
function gl({ sri: e, ...t }, r) {
  let n = new Set(r.state.matches.map((s) => s.route.id)),
    a = r.state.location.pathname.split('/').filter(Boolean),
    o = ['/'];
  for (a.pop(); a.length > 0; ) (o.push(`/${a.join('/')}`), a.pop());
  o.forEach((s) => {
    let l = Ne(r.routes, s, r.basename);
    l && l.forEach((u) => n.add(u.route.id));
  });
  let i = [...n].reduce((s, l) => Object.assign(s, { [l]: t.routes[l] }), {});
  return { ...t, routes: i, sri: e ? !0 : void 0 };
}
function es(e, t, r, n, a, o) {
  if (Sr(n, r))
    return async ({ path: i, patch: s, signal: l, fetcherKey: u }) => {
      At.has(i) ||
        (await ea([i], u ? window.location.href : i, e, t, r, a, o, n.manifestPath, s, l));
    };
}
function ts(e, t, r, n, a, o) {
  m.useEffect(() => {
    if (!Sr(a, n) || window.navigator?.connection?.saveData === !0) return;
    function i(h) {
      let d = h.tagName === 'FORM' ? h.getAttribute('action') : h.getAttribute('href');
      if (!d) return;
      let v = h.tagName === 'A' ? h.pathname : new URL(d, window.location.origin).pathname;
      At.has(v) || _t.add(v);
    }
    async function s() {
      document.querySelectorAll('a[data-discover], form[data-discover]').forEach(i);
      let h = Array.from(_t.keys()).filter((d) => (At.has(d) ? (_t.delete(d), !1) : !0));
      if (h.length !== 0)
        try {
          await ea(h, null, t, r, n, o, e.basename, a.manifestPath, e.patchRoutes);
        } catch (d) {
          console.error('Failed to fetch manifest patches', d);
        }
    }
    let l = Rl(s, 100);
    s();
    let u = new MutationObserver(() => l());
    return (
      u.observe(document.documentElement, {
        subtree: !0,
        childList: !0,
        attributes: !0,
        attributeFilter: ['data-discover', 'href', 'action'],
      }),
      () => u.disconnect()
    );
  }, [n, o, t, r, e, a]);
}
function wl(e, t) {
  let r = e || '/__manifest';
  return t == null ? r : `${t}${r}`.replace(/\/+/g, '/');
}
var nr = 'react-router-manifest-version';
async function ea(e, t, r, n, a, o, i, s, l, u) {
  const h = new URLSearchParams();
  (h.set('paths', e.sort().join(',')), h.set('version', r.version));
  let d = new URL(wl(s, i), window.location.origin);
  if (((d.search = h.toString()), d.toString().length > vl)) {
    _t.clear();
    return;
  }
  let v;
  try {
    let R = await fetch(d, { signal: u });
    if (R.ok) {
      if (R.status === 204 && R.headers.has('X-Remix-Reload-Document')) {
        if (!t) {
          console.warn(
            'Detected a manifest version mismatch during eager route discovery. The next navigation/fetch to an undiscovered route will result in a new document navigation to sync up with the latest manifest.',
          );
          return;
        }
        try {
          if (sessionStorage.getItem(nr) === r.version) {
            console.error('Unable to discover routes due to manifest version mismatch.');
            return;
          }
          sessionStorage.setItem(nr, r.version);
        } catch {}
        ((window.location.href = t),
          console.warn('Detected manifest version mismatch, reloading...'),
          await new Promise(() => {}));
      } else if (R.status >= 400) throw new Error(await R.text());
    } else throw new Error(`${R.status} ${R.statusText}`);
    try {
      sessionStorage.removeItem(nr);
    } catch {}
    v = await R.json();
  } catch (R) {
    if (u?.aborted) return;
    throw R;
  }
  let w = new Set(Object.keys(r.routes)),
    E = Object.values(v).reduce((R, P) => (P && !w.has(P.id) && (R[P.id] = P), R), {});
  (Object.assign(r.routes, E), e.forEach((R) => El(R, At)));
  let C = new Set();
  (Object.values(E).forEach((R) => {
    R && (!R.parentId || !E[R.parentId]) && C.add(R.parentId);
  }),
    C.forEach((R) => l(R || null, br(E, n, null, a, o, R))));
}
function El(e, t) {
  if (t.size >= yl) {
    let r = t.values().next().value;
    t.delete(r);
  }
  t.add(e);
}
function Rl(e, t) {
  let r;
  return (...n) => {
    (window.clearTimeout(r), (r = window.setTimeout(() => e(...n), t)));
  };
}
function xr() {
  let e = m.useContext(Ve);
  return (ge(e, 'You must render this element inside a <DataRouterContext.Provider> element'), e);
}
function ta() {
  let e = m.useContext(Qe);
  return (
    ge(e, 'You must render this element inside a <DataRouterStateContext.Provider> element'),
    e
  );
}
var Ut = m.createContext(void 0);
Ut.displayName = 'FrameworkContext';
function zt() {
  let e = m.useContext(Ut);
  return (ge(e, 'You must render this element inside a <HydratedRouter> element'), e);
}
function bl(e, t) {
  let r = m.useContext(Ut),
    [n, a] = m.useState(!1),
    [o, i] = m.useState(!1),
    { onFocus: s, onBlur: l, onMouseEnter: u, onMouseLeave: h, onTouchStart: d } = t,
    v = m.useRef(null);
  (m.useEffect(() => {
    if ((e === 'render' && i(!0), e === 'viewport')) {
      let C = (P) => {
          P.forEach((b) => {
            i(b.isIntersecting);
          });
        },
        R = new IntersectionObserver(C, { threshold: 0.5 });
      return (
        v.current && R.observe(v.current),
        () => {
          R.disconnect();
        }
      );
    }
  }, [e]),
    m.useEffect(() => {
      if (n) {
        let C = setTimeout(() => {
          i(!0);
        }, 100);
        return () => {
          clearTimeout(C);
        };
      }
    }, [n]));
  let w = () => {
      a(!0);
    },
    E = () => {
      (a(!1), i(!1));
    };
  return r
    ? e !== 'intent'
      ? [o, v, {}]
      : [
          o,
          v,
          {
            onFocus: it(s, w),
            onBlur: it(l, E),
            onMouseEnter: it(u, w),
            onMouseLeave: it(h, E),
            onTouchStart: it(d, w),
          },
        ]
    : [!1, v, {}];
}
function it(e, t) {
  return (r) => {
    (e && e(r), r.defaultPrevented || t(r));
  };
}
function Sl(e, t, r) {
  return r && !kt ? [e[0]] : e;
}
function xl({ page: e, ...t }) {
  let { router: r } = xr(),
    n = m.useMemo(() => Ne(r.routes, e, r.basename), [r.routes, e, r.basename]);
  return n ? m.createElement(Cl, { page: e, matches: n, ...t }) : null;
}
function Pl(e) {
  let { manifest: t, routeModules: r } = zt(),
    [n, a] = m.useState([]);
  return (
    m.useEffect(() => {
      let o = !1;
      return (
        il(e, t, r).then((i) => {
          o || a(i);
        }),
        () => {
          o = !0;
        }
      );
    }, [e, t, r]),
    n
  );
}
function Cl({ page: e, matches: t, ...r }) {
  let n = Te(),
    { manifest: a, routeModules: o } = zt(),
    { basename: i } = xr(),
    { loaderData: s, matches: l } = ta(),
    u = m.useMemo(() => vn(e, t, l, a, n, 'data'), [e, t, l, a, n]),
    h = m.useMemo(() => vn(e, t, l, a, n, 'assets'), [e, t, l, a, n]),
    d = m.useMemo(() => {
      if (e === n.pathname + n.search + n.hash) return [];
      let E = new Set(),
        C = !1;
      if (
        (t.forEach((P) => {
          let b = a.routes[P.route.id];
          !b ||
            !b.hasLoader ||
            ((!u.some((M) => M.route.id === P.route.id) &&
              P.route.id in s &&
              o[P.route.id]?.shouldRevalidate) ||
            b.hasClientLoader
              ? (C = !0)
              : E.add(P.route.id));
        }),
        E.size === 0)
      )
        return [];
      let R = Vn(e, i, 'data');
      return (
        C &&
          E.size > 0 &&
          R.searchParams.set(
            '_routes',
            t
              .filter((P) => E.has(P.route.id))
              .map((P) => P.route.id)
              .join(','),
          ),
        [R.pathname + R.search]
      );
    }, [i, s, n, a, u, t, e, o]),
    v = m.useMemo(() => qn(h, a), [h, a]),
    w = Pl(h);
  return m.createElement(
    m.Fragment,
    null,
    d.map((E) => m.createElement('link', { key: E, rel: 'prefetch', as: 'fetch', href: E, ...r })),
    v.map((E) => m.createElement('link', { key: E, rel: 'modulepreload', href: E, ...r })),
    w.map(({ key: E, link: C }) => m.createElement('link', { key: E, nonce: r.nonce, ...C })),
  );
}
var kt = !1;
function Ll() {
  kt = !0;
}
function Tl(e) {
  let {
      manifest: t,
      serverHandoffString: r,
      isSpaMode: n,
      renderMeta: a,
      routeDiscovery: o,
      ssr: i,
    } = zt(),
    { router: s, static: l, staticContext: u } = xr(),
    { matches: h } = ta(),
    d = Bo(),
    v = Sr(o, i);
  a && (a.didRenderScripts = !0);
  let w = Sl(h, null, n);
  m.useEffect(() => {
    Ll();
  }, []);
  let E = m.useMemo(() => {
      if (d) return null;
      let b = u
          ? `window.__reactRouterContext = ${r};window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());`
          : ' ',
        M = l
          ? `${t.hmr?.runtime ? `import ${JSON.stringify(t.hmr.runtime)};` : ''}${v ? '' : `import ${JSON.stringify(t.url)}`};
${w.map((T, D) => {
  let k = `route${D}`,
    f = t.routes[T.route.id];
  ge(f, `Route ${T.route.id} not found in manifest`);
  let {
      clientActionModule: B,
      clientLoaderModule: W,
      clientMiddlewareModule: G,
      hydrateFallbackModule: U,
      module: se,
    } = f,
    Z = [
      ...(B ? [{ module: B, varName: `${k}_clientAction` }] : []),
      ...(W ? [{ module: W, varName: `${k}_clientLoader` }] : []),
      ...(G ? [{ module: G, varName: `${k}_clientMiddleware` }] : []),
      ...(U ? [{ module: U, varName: `${k}_HydrateFallback` }] : []),
      { module: se, varName: `${k}_main` },
    ];
  if (Z.length === 1) return `import * as ${k} from ${JSON.stringify(se)};`;
  let q = Z.map((te) => `import * as ${te.varName} from "${te.module}";`).join(`
`),
    ne = `const ${k} = {${Z.map((te) => `...${te.varName}`).join(',')}};`;
  return [q, ne].join(`
`);
}).join(`
`)}
  ${v ? `window.__reactRouterManifest = ${JSON.stringify(gl(t, s), null, 2)};` : ''}
  window.__reactRouterRouteModules = {${w.map((T, D) => `${JSON.stringify(T.route.id)}:route${D}`).join(',')}};

import(${JSON.stringify(t.entry.module)});`
          : ' ';
      return m.createElement(
        m.Fragment,
        null,
        m.createElement('script', {
          ...e,
          suppressHydrationWarning: !0,
          dangerouslySetInnerHTML: { __html: b },
          type: void 0,
        }),
        m.createElement('script', {
          ...e,
          suppressHydrationWarning: !0,
          dangerouslySetInnerHTML: { __html: M },
          type: 'module',
          async: !0,
        }),
      );
    }, []),
    C = kt || d ? [] : Ml(t.entry.imports.concat(qn(w, t, { includeHydrateFallback: !0 }))),
    R = typeof t.sri == 'object' ? t.sri : {};
  return (
    ur(!d, 'The <Scripts /> element is a no-op when using RSC and can be safely removed.'),
    kt || d
      ? null
      : m.createElement(
          m.Fragment,
          null,
          typeof t.sri == 'object'
            ? m.createElement('script', {
                'rr-importmap': '',
                type: 'importmap',
                suppressHydrationWarning: !0,
                dangerouslySetInnerHTML: { __html: JSON.stringify({ integrity: R }) },
              })
            : null,
          v
            ? null
            : m.createElement('link', {
                rel: 'modulepreload',
                href: t.url,
                crossOrigin: e.crossOrigin,
                integrity: R[t.url],
                suppressHydrationWarning: !0,
              }),
          m.createElement('link', {
            rel: 'modulepreload',
            href: t.entry.module,
            crossOrigin: e.crossOrigin,
            integrity: R[t.entry.module],
            suppressHydrationWarning: !0,
          }),
          C.map((P) =>
            m.createElement('link', {
              key: P,
              rel: 'modulepreload',
              href: P,
              crossOrigin: e.crossOrigin,
              integrity: R[P],
              suppressHydrationWarning: !0,
            }),
          ),
          E,
        )
  );
}
function Ml(e) {
  return [...new Set(e)];
}
function Dl(...e) {
  return (t) => {
    e.forEach((r) => {
      typeof r == 'function' ? r(t) : r != null && (r.current = t);
    });
  };
}
var rs = class extends m.Component {
  constructor(e) {
    (super(e), (this.state = { error: e.error || null, location: e.location }));
  }
  static getDerivedStateFromError(e) {
    return { error: e };
  }
  static getDerivedStateFromProps(e, t) {
    return t.location !== e.location
      ? { error: e.error || null, location: e.location }
      : { error: e.error || t.error, location: t.location };
  }
  render() {
    return this.state.error
      ? m.createElement(ra, { error: this.state.error, isOutsideRemixApp: !0 })
      : this.props.children;
  }
};
function ra({ error: e, isOutsideRemixApp: t }) {
  console.error(e);
  let r = m.createElement('script', {
    dangerouslySetInnerHTML: {
      __html: `
        console.log(
          "💿 Hey developer 👋. You can provide a way better UX than this when your app throws errors. Check out https://reactrouter.com/how-to/error-boundary for more information."
        );
      `,
    },
  });
  if (We(e))
    return m.createElement(
      fr,
      { title: 'Unhandled Thrown Response!' },
      m.createElement('h1', { style: { fontSize: '24px' } }, e.status, ' ', e.statusText),
      r,
    );
  let n;
  if (e instanceof Error) n = e;
  else {
    let a =
      e == null
        ? 'Unknown Error'
        : typeof e == 'object' && 'toString' in e
          ? e.toString()
          : JSON.stringify(e);
    n = new Error(a);
  }
  return m.createElement(
    fr,
    { title: 'Application Error!', isOutsideRemixApp: t },
    m.createElement('h1', { style: { fontSize: '24px' } }, 'Application Error'),
    m.createElement(
      'pre',
      {
        style: {
          padding: '2rem',
          background: 'hsla(10, 50%, 50%, 0.1)',
          color: 'red',
          overflow: 'auto',
        },
      },
      n.stack,
    ),
    r,
  );
}
function fr({ title: e, renderScripts: t, isOutsideRemixApp: r, children: n }) {
  let { routeModules: a } = zt();
  return a.root?.Layout && !r
    ? n
    : m.createElement(
        'html',
        { lang: 'en' },
        m.createElement(
          'head',
          null,
          m.createElement('meta', { charSet: 'utf-8' }),
          m.createElement('meta', {
            name: 'viewport',
            content: 'width=device-width,initial-scale=1,viewport-fit=cover',
          }),
          m.createElement('title', null, e),
        ),
        m.createElement(
          'body',
          null,
          m.createElement(
            'main',
            { style: { fontFamily: 'system-ui, sans-serif', padding: '2rem' } },
            n,
            t ? m.createElement(Tl, null) : null,
          ),
        ),
      );
}
var na =
  typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u';
try {
  na && (window.__reactRouterVersion = '7.10.1');
} catch {}
var aa = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  oa = m.forwardRef(function (
    {
      onClick: t,
      discover: r = 'render',
      prefetch: n = 'none',
      relative: a,
      reloadDocument: o,
      replace: i,
      state: s,
      target: l,
      to: u,
      preventScrollReset: h,
      viewTransition: d,
      ...v
    },
    w,
  ) {
    let { basename: E, unstable_useTransitions: C } = m.useContext(we),
      R = typeof u == 'string' && aa.test(u),
      P,
      b = !1;
    if (typeof u == 'string' && R && ((P = u), na))
      try {
        let G = new URL(window.location.href),
          U = u.startsWith('//') ? new URL(G.protocol + u) : new URL(u),
          se = Re(U.pathname, E);
        U.origin === G.origin && se != null ? (u = se + U.search + U.hash) : (b = !0);
      } catch {
        ie(
          !1,
          `<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
        );
      }
    let M = Yo(u, { relative: a }),
      [T, D, k] = bl(n, v),
      f = kl(u, {
        replace: i,
        state: s,
        target: l,
        preventScrollReset: h,
        relative: a,
        viewTransition: d,
        unstable_useTransitions: C,
      });
    function B(G) {
      (t && t(G), G.defaultPrevented || f(G));
    }
    let W = m.createElement('a', {
      ...v,
      ...k,
      href: P || M,
      onClick: b || o ? t : B,
      ref: Dl(w, D),
      target: l,
      'data-discover': !R && r === 'render' ? 'true' : void 0,
    });
    return T && !R ? m.createElement(m.Fragment, null, W, m.createElement(xl, { page: M })) : W;
  });
oa.displayName = 'Link';
var _l = m.forwardRef(function (
  {
    'aria-current': t = 'page',
    caseSensitive: r = !1,
    className: n = '',
    end: a = !1,
    style: o,
    to: i,
    viewTransition: s,
    children: l,
    ...u
  },
  h,
) {
  let d = ht(i, { relative: u.relative }),
    v = Te(),
    w = m.useContext(Qe),
    { navigator: E, basename: C } = m.useContext(we),
    R = w != null && zl(d) && s === !0,
    P = E.encodeLocation ? E.encodeLocation(d).pathname : d.pathname,
    b = v.pathname,
    M = w && w.navigation && w.navigation.location ? w.navigation.location.pathname : null;
  (r || ((b = b.toLowerCase()), (M = M ? M.toLowerCase() : null), (P = P.toLowerCase())),
    M && C && (M = Re(M, C) || M));
  const T = P !== '/' && P.endsWith('/') ? P.length - 1 : P.length;
  let D = b === P || (!a && b.startsWith(P) && b.charAt(T) === '/'),
    k = M != null && (M === P || (!a && M.startsWith(P) && M.charAt(P.length) === '/')),
    f = { isActive: D, isPending: k, isTransitioning: R },
    B = D ? t : void 0,
    W;
  typeof n == 'function'
    ? (W = n(f))
    : (W = [n, D ? 'active' : null, k ? 'pending' : null, R ? 'transitioning' : null]
        .filter(Boolean)
        .join(' '));
  let G = typeof o == 'function' ? o(f) : o;
  return m.createElement(
    oa,
    { ...u, 'aria-current': B, className: W, ref: h, style: G, to: i, viewTransition: s },
    typeof l == 'function' ? l(f) : l,
  );
});
_l.displayName = 'NavLink';
var Ol = m.forwardRef(
  (
    {
      discover: e = 'render',
      fetcherKey: t,
      navigate: r,
      reloadDocument: n,
      replace: a,
      state: o,
      method: i = Mt,
      action: s,
      onSubmit: l,
      relative: u,
      preventScrollReset: h,
      viewTransition: d,
      ...v
    },
    w,
  ) => {
    let { unstable_useTransitions: E } = m.useContext(we),
      C = Fl(),
      R = jl(s, { relative: u }),
      P = i.toLowerCase() === 'get' ? 'get' : 'post',
      b = typeof s == 'string' && aa.test(s),
      M = (T) => {
        if ((l && l(T), T.defaultPrevented)) return;
        T.preventDefault();
        let D = T.nativeEvent.submitter,
          k = D?.getAttribute('formmethod') || i,
          f = () =>
            C(D || T.currentTarget, {
              fetcherKey: t,
              method: k,
              navigate: r,
              replace: a,
              state: o,
              relative: u,
              preventScrollReset: h,
              viewTransition: d,
            });
        E && r !== !1 ? m.startTransition(() => f()) : f();
      };
    return m.createElement('form', {
      ref: w,
      method: P,
      action: R,
      onSubmit: n ? l : M,
      ...v,
      'data-discover': !b && e === 'render' ? 'true' : void 0,
    });
  },
);
Ol.displayName = 'Form';
function Nl({ getKey: e, storageKey: t, ...r }) {
  let n = m.useContext(Ut),
    { basename: a } = m.useContext(we),
    o = Te(),
    i = Rr();
  Hl({ getKey: e, storageKey: t });
  let s = m.useMemo(() => {
    if (!n || !e) return null;
    let u = mr(o, i, a, e);
    return u !== o.key ? u : null;
  }, []);
  if (!n || n.isSpaMode) return null;
  let l = ((u, h) => {
    if (!window.history.state || !window.history.state.key) {
      let d = Math.random().toString(32).slice(2);
      window.history.replaceState({ key: d }, '');
    }
    try {
      let v = JSON.parse(sessionStorage.getItem(u) || '{}')[h || window.history.state.key];
      typeof v == 'number' && window.scrollTo(0, v);
    } catch (d) {
      (console.error(d), sessionStorage.removeItem(u));
    }
  }).toString();
  return m.createElement('script', {
    ...r,
    suppressHydrationWarning: !0,
    dangerouslySetInnerHTML: { __html: `(${l})(${JSON.stringify(t || hr)}, ${JSON.stringify(s)})` },
  });
}
Nl.displayName = 'ScrollRestoration';
function ia(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Pr(e) {
  let t = m.useContext(Ve);
  return (V(t, ia(e)), t);
}
function Al(e) {
  let t = m.useContext(Qe);
  return (V(t, ia(e)), t);
}
function kl(
  e,
  {
    target: t,
    replace: r,
    state: n,
    preventScrollReset: a,
    relative: o,
    viewTransition: i,
    unstable_useTransitions: s,
  } = {},
) {
  let l = jn(),
    u = Te(),
    h = ht(e, { relative: o });
  return m.useCallback(
    (d) => {
      if (Ri(d, t)) {
        d.preventDefault();
        let v = r !== void 0 ? r : Le(u) === Le(h),
          w = () =>
            l(e, { replace: v, state: n, preventScrollReset: a, relative: o, viewTransition: i });
        s ? m.startTransition(() => w()) : w();
      }
    },
    [u, l, h, r, n, t, e, a, o, i, s],
  );
}
var Il = 0,
  $l = () => `__${String(++Il)}__`;
function Fl() {
  let { router: e } = Pr('useSubmit'),
    { basename: t } = m.useContext(we),
    r = ai(),
    n = e.fetch,
    a = e.navigate;
  return m.useCallback(
    async (o, i = {}) => {
      let { action: s, method: l, encType: u, formData: h, body: d } = xi(o, t);
      if (i.navigate === !1) {
        let v = i.fetcherKey || $l();
        await n(v, r, i.action || s, {
          preventScrollReset: i.preventScrollReset,
          formData: h,
          body: d,
          formMethod: i.method || l,
          formEncType: i.encType || u,
          flushSync: i.flushSync,
        });
      } else
        await a(i.action || s, {
          preventScrollReset: i.preventScrollReset,
          formData: h,
          body: d,
          formMethod: i.method || l,
          formEncType: i.encType || u,
          replace: i.replace,
          state: i.state,
          fromRouteId: r,
          flushSync: i.flushSync,
          viewTransition: i.viewTransition,
        });
    },
    [n, a, t, r],
  );
}
function jl(e, { relative: t } = {}) {
  let { basename: r } = m.useContext(we),
    n = m.useContext(xe);
  V(n, 'useFormAction must be used inside a RouteContext');
  let [a] = n.matches.slice(-1),
    o = { ...ht(e || '.', { relative: t }) },
    i = Te();
  if (e == null) {
    o.search = i.search;
    let s = new URLSearchParams(o.search),
      l = s.getAll('index');
    if (l.some((h) => h === '')) {
      (s.delete('index'), l.filter((d) => d).forEach((d) => s.append('index', d)));
      let h = s.toString();
      o.search = h ? `?${h}` : '';
    }
  }
  return (
    (!e || e === '.') &&
      a.route.index &&
      (o.search = o.search ? o.search.replace(/^\?/, '?index&') : '?index'),
    r !== '/' && (o.pathname = o.pathname === '/' ? r : Ce([r, o.pathname])),
    Le(o)
  );
}
var hr = 'react-router-scroll-positions',
  Lt = {};
function mr(e, t, r, n) {
  let a = null;
  return (
    n &&
      (r !== '/' ? (a = n({ ...e, pathname: Re(e.pathname, r) || e.pathname }, t)) : (a = n(e, t))),
    a == null && (a = e.key),
    a
  );
}
function Hl({ getKey: e, storageKey: t } = {}) {
  let { router: r } = Pr('useScrollRestoration'),
    { restoreScrollPosition: n, preventScrollReset: a } = Al('useScrollRestoration'),
    { basename: o } = m.useContext(we),
    i = Te(),
    s = Rr(),
    l = oi();
  (m.useEffect(
    () => (
      (window.history.scrollRestoration = 'manual'),
      () => {
        window.history.scrollRestoration = 'auto';
      }
    ),
    [],
  ),
    Ul(
      m.useCallback(() => {
        if (l.state === 'idle') {
          let u = mr(i, s, o, e);
          Lt[u] = window.scrollY;
        }
        try {
          sessionStorage.setItem(t || hr, JSON.stringify(Lt));
        } catch (u) {
          ie(
            !1,
            `Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${u}).`,
          );
        }
        window.history.scrollRestoration = 'auto';
      }, [l.state, e, o, i, s, t]),
    ),
    typeof document < 'u' &&
      (m.useLayoutEffect(() => {
        try {
          let u = sessionStorage.getItem(t || hr);
          u && (Lt = JSON.parse(u));
        } catch {}
      }, [t]),
      m.useLayoutEffect(() => {
        let u = r?.enableScrollRestoration(
          Lt,
          () => window.scrollY,
          e ? (h, d) => mr(h, d, o, e) : void 0,
        );
        return () => u && u();
      }, [r, o, e]),
      m.useLayoutEffect(() => {
        if (n !== !1) {
          if (typeof n == 'number') {
            window.scrollTo(0, n);
            return;
          }
          try {
            if (i.hash) {
              let u = document.getElementById(decodeURIComponent(i.hash.slice(1)));
              if (u) {
                u.scrollIntoView();
                return;
              }
            }
          } catch {
            ie(
              !1,
              `"${i.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`,
            );
          }
          a !== !0 && window.scrollTo(0, 0);
        }
      }, [i, n, a])));
}
function Ul(e, t) {
  let { capture: r } = {};
  m.useEffect(() => {
    let n = r != null ? { capture: r } : void 0;
    return (
      window.addEventListener('pagehide', e, n),
      () => {
        window.removeEventListener('pagehide', e, n);
      }
    );
  }, [e, r]);
}
function zl(e, { relative: t } = {}) {
  let r = m.useContext(gr);
  V(
    r != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
  );
  let { basename: n } = Pr('useViewTransitionState'),
    a = ht(e, { relative: t });
  if (!r.isTransitioning) return !1;
  let o = Re(r.currentLocation.pathname, n) || r.currentLocation.pathname,
    i = Re(r.nextLocation.pathname, n) || r.nextLocation.pathname;
  return Ot(a.pathname, i) != null || Ot(a.pathname, o) != null;
}
export {
  Ye as E,
  Ut as F,
  Ji as N,
  Kl as O,
  Ma as R,
  Nl as S,
  m as a,
  V as b,
  rs as c,
  Gl as d,
  rl as e,
  br as f,
  Yl as g,
  es as h,
  We as i,
  Ql as j,
  Wl as k,
  Zl as l,
  Ne as m,
  Vl as n,
  Jl as o,
  Bl as p,
  Tl as q,
  Ta as r,
  pl as s,
  Te as t,
  ts as u,
  _l as v,
  ql as w,
  Xl as x,
};

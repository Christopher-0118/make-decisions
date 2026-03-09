import { a as c } from './redux-toolkit.modern-Bd2BvcLC.js';
const m = { count: 1, activeList: '' },
  l = c({
    name: 'wheelSettings',
    initialState: m,
    reducers: {
      setCount: (e, t) => {
        e.count = t.payload;
      },
      setActiveList: (e, t) => {
        e.activeList = t.payload;
      },
      increment: (e) => {
        e.count += 1;
      },
      decrement: (e) => {
        e.count -= 1;
      },
    },
  }),
  { setCount: S, setActiveList: y, increment: h, decrement: w } = l.actions,
  f = l.reducer,
  L = { entries: [] },
  o = c({
    name: 'wheelHistory',
    initialState: L,
    reducers: {
      addEntry: {
        reducer(e, t) {
          e.entries.unshift(t.payload);
        },
        prepare(e) {
          return {
            payload: { id: Date.now(), time: new Date().toLocaleTimeString('en-En'), results: e },
          };
        },
      },
      clearAllEntries(e) {
        e.entries = [];
      },
    },
  }),
  { addEntry: I, clearAllEntries: v } = o.actions,
  g = o.reducer,
  u = { collection: [] },
  d = c({
    name: 'wheelLists',
    initialState: u,
    reducers: {
      addList: (e, t) => {
        e.collection.push(t.payload);
      },
      deleteList: (e, t) => {
        const s = t.payload;
        e.collection = e.collection.filter((n) => n.id !== s);
      },
      editListName: (e, t) => {
        const { listId: s, newName: n } = t.payload,
          i = e.collection.find((a) => a.id === s);
        i && (i.name = n);
      },
      addListItem: (e, t) => {
        const { listId: s, value: n } = t.payload,
          i = e.collection.find((a) => a.id === s);
        i && i.items.push(n);
      },
      editListItem: (e, t) => {
        const { listId: s, index: n, value: i } = t.payload,
          a = e.collection.find((r) => r.id === s);
        a && (a.items[n] = i);
      },
      deleteListItem: (e, t) => {
        const { listId: s, index: n } = t.payload,
          i = e.collection.find((a) => a.id === s);
        i && i.items.splice(n, 1);
      },
    },
  }),
  {
    addList: E,
    deleteList: A,
    editListName: $,
    addListItem: x,
    editListItem: H,
    deleteListItem: N,
  } = d.actions,
  C = d.reducer;
export {
  f as a,
  g as b,
  x as c,
  N as d,
  H as e,
  $ as f,
  y as g,
  A as h,
  E as i,
  v as j,
  I as k,
  S as s,
  C as w,
};

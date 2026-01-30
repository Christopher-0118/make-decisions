// import type { ListModel } from '../type';

// export function addList (lists: ListModel[], newList: ListModel): ListModel[] {
//   return [...lists, newList];
// }

// export function updateListName(lists: ListModel[], id: string, nextName: string): ListModel[] {
//   return lists.map((l) => (l.id === id ? { ...l, name: nextName } : l));
// }

// export function updateItem(
//   lists: ListModel[],
//   listId: string,
//   index: number,
//   nextValue: string,
// ): ListModel[] {
//   return lists.map((l) => {
//     if (l.id !== listId) return l;
//     const nextItems = l.items.slice();
//     nextItems[index] = nextValue;
//     return { ...l, items: nextItems };
//   });
// }

// export function deleteItemIfEmpty(lists: ListModel[], listId: string, index: number): ListModel[] {
//   return lists.map((l) => {
//     if (l.id !== listId) return l;
//     const val = l.items[index] ?? '';
//     if (val.trim() !== '') return l;

//     const nextItems = l.items.slice();
//     nextItems.splice(index, 1);
//     return { ...l, items: nextItems };
//   });
// }

// export function addItemWithValue(lists: ListModel[], listId: string, value: string): ListModel[] {
//   const v = value.trim();
//   if (!v) return lists;

//   return lists.map((l) => (l.id === listId ? { ...l, items: [...l.items, v] } : l));
// }

// export function deleteList(lists: ListModel[], listId: string) {
//   return lists.filter(list => list.id !== listId);
// }

export function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { ListModel, ListModelState } from '@/components/type';

const initialState: ListModelState = {
  collection: [],
};

const wheelListSlice = createSlice({
  name: 'wheelLists',
  initialState,
  reducers: {
    addList: (state, action: PayloadAction<ListModel>) => {
      state.collection.push(action.payload);
    },
    deleteList: (state, action: PayloadAction<string>) => {
      const listId = action.payload;

      state.collection = state.collection.filter((item: ListModel) => item.id !== listId);
    },
    editListName: (state, action: PayloadAction<{ listId: string; newName: string }>) => {
      const { listId, newName } = action.payload;
      const list = state.collection.find((item) => item.id === listId);

      if (list) list.name = newName;
    },
    addListItem: (state, action: PayloadAction<{ listId: string; value: string }>) => {
      const { listId, value } = action.payload;
      const list = state.collection.find((item) => item.id === listId);

      if (list) list.items.push(value);
    },
    editListItem: (
      state,
      action: PayloadAction<{ listId: string; index: number; value: string }>,
    ) => {
      const { listId, index, value } = action.payload;
      const list = state.collection.find((item) => item.id === listId);

      if (list) list.items[index] = value;
    },
    deleteListItem: (state, action: PayloadAction<{ listId: string; index: number }>) => {
      const { listId, index } = action.payload;
      const list = state.collection.find((item) => item.id === listId);

      if (list) list.items.splice(index, 1);
    },
  },
});

export const { addList, deleteList, editListName, addListItem, editListItem, deleteListItem } =
  wheelListSlice.actions;
export default wheelListSlice.reducer;

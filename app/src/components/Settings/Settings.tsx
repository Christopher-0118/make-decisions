import { useMemo, useState } from 'react';
import styles from './Settings.module.css';
import CountSelector from '../CountSelector/CountSelector';
import ListsEditor from '../ListEditor/ListsEditor';
import type { ListModel } from '../type';
import {
  addItemWithValue,
  clamp,
  deleteItemIfEmpty,
  deleteList,
  updateItem,
  updateListName,
} from '../ListEditor/listMutations';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { setCount } from '@/store/wheelSettingsSlice';

const Settings = () => {
  const dispatch = useAppDispatch();
  const resultsCount = useAppSelector((state) => state.resultsCount.count);
  //----------------------------------------
  const [lists, setLists] = useState<ListModel[]>([
    { id: 'fruits', name: 'Fruits', items: ['Apple', 'Banana', 'Orange'] },
    { id: 'tasks', name: 'Tasks', items: ['Code', 'Sleep', 'Walk'] },
  ]);
  //----------------------------------------
  const [activeListId, setActiveListId] = useState<string>(lists[0]?.id ?? '');
  const [expandedListId, setExpandedListId] = useState<string | null>(null);
  const activeList = useMemo(
    () => lists.find((l) => l.id === activeListId) ?? null,
    [lists, activeListId],
  );
  const maxCount = Math.max(1, (activeList?.items.length ?? 0) - 1);
  const makeNewListName = () => `List ${lists.length}`;
  const makeNewListId = () => `list_${Date.now()}`;
  const handleAddNewList = () => {
    const newList = {id: makeNewListId(), name: makeNewListName(), items: []};

    setLists((prev) => [...prev, newList]);
    setExpandedListId(makeNewListId());
  };


  const handleDeleteList = (listId: string) => {
    const next = deleteList(lists, listId);
    
    setLists(next);
    if(listId === expandedListId) {
      setExpandedListId(null);
    }
    if(listId === activeListId) {
      setActiveListId(next[0].id ?? '');
    }
    
  };

  return (
    <div className={styles.root}>
      <CountSelector
        value={resultsCount}
        min={1}
        max={maxCount}
        onChange={(next) => dispatch(setCount(clamp(next, 1, maxCount)))}
      />

      <ListsEditor
        lists={lists}
        activeListId={activeListId}
        expandedListId={expandedListId}
        onSelectActive={setActiveListId}
        onToggleExpanded={(id) => setExpandedListId((prev) => (prev === id ? null : id))}
        onChangeListName={(id, name) => setLists((prev) => updateListName(prev, id, name))}
        onChangeItem={(listId, index, value) =>
          setLists((prev) => updateItem(prev, listId, index, value))
        }
        onBlurItem={(listId, index) => setLists((prev) => deleteItemIfEmpty(prev, listId, index))}
        onAddItem={(listId, value) => setLists((prev) => addItemWithValue(prev, listId, value))}
        onAddList={handleAddNewList}
        onDeleteList={handleDeleteList}
      />
    </div>
  );
};

export default Settings;

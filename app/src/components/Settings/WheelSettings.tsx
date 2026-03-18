import { useMemo, useState, useEffect } from 'react';
import CountSelector from '../CountSelector/CountSelector';
import ListsEditor from '../ListEditor/ListsEditor';
import { clamp } from '../ListEditor/listMutations';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { setActiveList, setCount } from '@/store/wheelSettingsSlice';
import {
  addList,
  deleteList,
  deleteListItem,
  editListName,
  editListItem,
  addListItem,
} from '@/store/wheelListsSlice';
import styles from './settings.module.css';

const WheelSettings = () => {
  const dispatch = useAppDispatch();
  const lists = useAppSelector((state) => state.wheelLists.collection);
  const resultsCount = useAppSelector((state) => state.wheelSettings.count);
  const activeListId = useAppSelector((state) => state.wheelSettings.activeList);
  const [expandedListId, setExpandedListId] = useState<string | null>(null);
  const activeList = useMemo(
    () => lists.find((l) => l.id === activeListId) ?? null,
    [lists, activeListId],
  );
  const maxCount = activeList?.items.length ?? 0;
  useEffect(() => {
    const nextResCount = maxCount > 1 ? 1 : 0;
    dispatch(setCount(nextResCount));
  }, [dispatch, maxCount]);
  const makeNewListName = () => `List ${lists.length ? lists.length : ''}`;
  const makeNewListId = () => `list_${Date.now()}`;

  const handleAddNewList = () => {
    const id = makeNewListId();
    dispatch(addList({ id, name: makeNewListName(), items: [] }));
    setExpandedListId(id);
  };

  const handleDeleteList = (listId: string) => {
    const next = lists.filter((l) => l.id !== listId);
    dispatch(deleteList(listId));

    if (listId === expandedListId) {
      setExpandedListId(null);
    }
    if (listId === activeListId) {
      dispatch(setActiveList(next[0].id ?? ''));
    }
  };

  const handleBlurItem = (listId: string, index: number) => {
    const list = lists.find((item) => item.id === listId);
    const value = list?.items[index] ?? '';
    if (value.trim() !== '') return;
    dispatch(deleteListItem({ listId, index }));
  };

  return (
    <div className={styles.root}>
      <CountSelector
        value={resultsCount}
        min={0}
        max={maxCount}
        onChange={(nextResCount) => dispatch(setCount(clamp(nextResCount, 0, maxCount)))}
      />

      <ListsEditor
        lists={lists}
        activeListId={activeListId}
        expandedListId={expandedListId}
        onSelectActive={(listId) => dispatch(setActiveList(listId))}
        onToggleExpanded={(id) => setExpandedListId((prev) => (prev === id ? null : id))}
        onChangeListName={(id, name) => dispatch(editListName({ listId: id, newName: name }))}
        onChangeItem={(listId, index, value) => dispatch(editListItem({ listId, index, value }))}
        onBlurItem={handleBlurItem}
        onAddItem={(listId, value) => dispatch(addListItem({ listId, value }))}
        onAddList={handleAddNewList}
        onDeleteList={handleDeleteList}
      />
    </div>
  );
};

export default WheelSettings;

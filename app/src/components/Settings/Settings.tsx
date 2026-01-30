import { useMemo, useState } from 'react';
import styles from './Settings.module.css';
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

const Settings = () => {
  const dispatch = useAppDispatch();

  const lists = useAppSelector((state) => state.wheelLists.collection);
  const resultsCount = useAppSelector((state) => state.wheelSettings.count);
  const activeListId = useAppSelector((state) => state.wheelSettings.activeList);

  //const [activeListId, setActiveListId] = useState<string>(lists[0]?.id ?? '');
  const [expandedListId, setExpandedListId] = useState<string | null>(null);

  const activeList = useMemo(
    () => lists.find((l) => l.id === activeListId) ?? null,
    [lists, activeListId],
  );

  const maxCount = Math.max(1, (activeList?.items.length ?? 0) - 1);
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
        onSelectActive={(listId) => dispatch(setActiveList(listId))}
        onToggleExpanded={(id) => setExpandedListId((prev) => (prev === id ? null : id))}
        onChangeListName={(id, name) => dispatch(editListName({ listId: id, newName: name }))}
        onChangeItem={(listId, index, value) => dispatch(editListItem({ listId, index, value }))}
        onBlurItem={(listId, index) => dispatch(deleteListItem({ listId, index }))}
        onAddItem={(listId, value) => dispatch(addListItem({ listId, value }))}
        onAddList={handleAddNewList}
        onDeleteList={handleDeleteList}
      />
    </div>
  );
};

export default Settings;

import { ChevronUp, Trash2Icon } from 'lucide-react';
import type { ListsEditorProps } from '../type';
import { useRef, useState } from 'react';
import './ListsEditor.scss';

const ListsEditor = ({
  lists,
  activeListId,
  expandedListId,
  onSelectActive,
  onToggleExpanded,
  onChangeListName,
  onChangeItem,
  onBlurItem,
  onAddItem,
  onAddList,
  onDeleteList,
}: ListsEditorProps) => {
  const [draftByListId, setDraftByListId] = useState<Record<string, string>>({});
  const inputRefs = useRef<Record<string, HTMLInputElement | null>>({});
  const commitLockRef = useRef<Record<string, boolean>>({});
  const commitDraft = (listId: string) => {
    const text = (draftByListId[listId] ?? '').trim();
    if (!text) return;

    if (commitLockRef.current[listId]) return;
    commitLockRef.current[listId] = true;
    onAddItem(listId, text);
    setDraftByListId((prev) => ({ ...prev, [listId]: '' }));
    requestAnimationFrame(() => {
      inputRefs.current[listId]?.focus();
      setTimeout(() => {
        commitLockRef.current[listId] = false;
      }, 0);
    });
  };

  return (
    <section className="block">
      <div className="blockTitle">
        <div>Lists:</div>
        <button type="button" aria-label="Add a list" className="addBtn" onClick={onAddList}>
          +
        </button>
      </div>

      <div className="lists">
        {lists.map((list) => {
          const isActive = list.id === activeListId;
          const isExpanded = list.id === expandedListId;

          return (
            <div key={list.id} className="listCard">
              <div className="row">
                <button
                  type="button"
                  aria-label="Choose the list"
                  className={`row-main ${isActive ? 'row-main--active' : ''}`}
                  onClick={() => onSelectActive(list.id)}
                >
                  {list.name}
                </button>
                <button
                  type="button"
                  className="rowToggle"
                  onClick={() => onToggleExpanded(list.id)}
                  aria-label={isExpanded ? 'Collapse' : 'Edit'}
                >
                  <ChevronUp className={`chevron ${isExpanded ? 'chevronOpen' : ''}`} />
                </button>
              </div>

              {isExpanded ? (
                <div className="editor">
                  <div className="editorLine">
                    <div className="editorTitle">
                      <label className="label">Name</label>
                      <button
                        type="button"
                        className="iconTrash"
                        onClick={() => onDeleteList(list.id)}
                        aria-label="Delete the list"
                      >
                        <Trash2Icon />
                      </button>
                    </div>
                    <input
                      className="input"
                      value={list.name}
                      onChange={(e) => onChangeListName(list.id, e.target.value)}
                      placeholder="List name"
                    />
                  </div>

                  <div className="editorLine">
                    <div className="label">Items</div>

                    <div className="items">
                      {list.items.map((it, idx) => (
                        <input
                          key={`${list.id}-${idx}`}
                          className="input"
                          value={it}
                          onChange={(e) => onChangeItem(list.id, idx, e.target.value)}
                          onBlur={() => onBlurItem(list.id, idx)}
                          placeholder={`item ${idx + 1}`}
                        />
                      ))}
                      <input
                        className="input"
                        placeholder="Add an item…"
                        value={draftByListId[list.id] ?? ''}
                        ref={(el) => {
                          inputRefs.current[list.id] = el;
                        }}
                        onChange={(e) =>
                          setDraftByListId((prev) => ({ ...prev, [list.id]: e.target.value }))
                        }
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            e.preventDefault();
                            commitDraft(list.id);
                          }
                        }}
                        onBlur={() => {
                          commitDraft(list.id);
                        }}
                      />
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ListsEditor;

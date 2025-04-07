import React, { useState } from 'react';

const TodoItem = ({ todo, onDelete, onEdit, onToggle }) => {
  const [editing, setEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);

  const handleSave = () => {
    if (editTitle.trim()) {
      onEdit(todo.id, editTitle.trim());
      setEditing(false);
    }
  };

  return (
    <div className="border px-4 py-3 rounded shadow flex justify-between items-center bg-white dark:bg-gray-800">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="w-5 h-5"
        />
        {editing ? (
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSave()}
            className="border px-2 py-1 rounded text-sm dark:bg-gray-700"
          />
        ) : (
          <span
            className={`text-lg ${todo.completed ? 'line-through text-gray-500' : ''}`}
            onDoubleClick={() => setEditing(true)}
          >
            {todo.title}
          </span>
        )}
      </div>
      <div className="flex gap-2">
        {editing ? (
          <button onClick={handleSave} className="text-sm text-green-600 hover:underline">
            Simpan
          </button>
        ) : (
          <button onClick={() => setEditing(true)} className="text-sm text-blue-600 hover:underline">
            Edit
          </button>
        )}
        <button onClick={() => onDelete(todo.id)} className="text-sm text-red-600 hover:underline">
          Hapus
        </button>
      </div>
    </div>
  );
};

TodoItem.defaultProps = {
  onEdit: () => console.warn("onEdit not provided"),
};

export default TodoItem;

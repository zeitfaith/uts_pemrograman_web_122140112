import React from 'react';

const TodoToolbar = ({
  newTodoTitle,
  onNewTitleChange,
  onAddTodo,
  onReset,
  searchTerm,
  onSearchChange,
  onImport,
  onExport,
  filter,
  onFilterChange,
}) => {
  return (
    <div className="mb-6 space-y-4">
      <div className="flex gap-2">
        <input
          type="text"
          value={newTodoTitle}
          onChange={onNewTitleChange}
          placeholder="Tambah to-do"
          className="flex-1 border p-2 rounded"
        />
        <button onClick={onAddTodo} className="bg-blue-600 text-white px-4 py-2 rounded">
          Tambah
        </button>
        <button onClick={onReset} className="bg-red-500 text-white px-4 py-2 rounded">
          Reset
        </button>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="text"
          value={searchTerm}
          onChange={onSearchChange}
          placeholder="Cari to-do"
          className="flex-1 border p-2 rounded"
        />

        <select
          value={filter}
          onChange={(e) => onFilterChange(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="all">Semua</option>
          <option value="completed">Selesai</option>
          <option value="incomplete">Belum selesai</option>
        </select>

        <button onClick={onExport} className="bg-green-500 text-white px-3 py-2 rounded">
          Export
        </button>

        <label className="bg-yellow-500 text-white px-3 py-2 rounded cursor-pointer">
          Import
          <input type="file" hidden onChange={onImport} />
        </label>
      </div>
    </div>
  );
};

export default TodoToolbar;
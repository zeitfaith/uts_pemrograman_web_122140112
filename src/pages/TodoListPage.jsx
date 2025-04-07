import React from 'react';
import useTodos from '../hooks/useTodos';
import TodoToolbar from '../components/TodoToolbar';
import TodoList from '../components/TodoList';

const TodoListPage = () => {
  const {
    newTodoTitle,
    setNewTodoTitle,
    addTodo,
    resetTodos,
    searchTerm,
    setSearchTerm,
    importTodos,
    exportTodos,
    filter,
    setFilter,
    filteredTodos,
    toggleTodo,
    deleteTodo,
    editTodo,
  } = useTodos();

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-blue-700">📋 Daftar To-do</h1>
        <TodoToolbar
          newTodoTitle={newTodoTitle}
          onNewTitleChange={(e) => setNewTodoTitle(e.target.value)}
          onAddTodo={addTodo}
          onReset={resetTodos}
          searchTerm={searchTerm}
          onSearchChange={(e) => setSearchTerm(e.target.value)}
          onImport={importTodos}
          onExport={exportTodos}
          onFilterChange={setFilter}
        />

        <TodoList
          todos={filteredTodos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onEdit={editTodo}
        />
      </div>
    </div>
  );
};

export default TodoListPage;
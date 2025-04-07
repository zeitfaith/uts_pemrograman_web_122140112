// src/components/TodoHeader.jsx
import React from 'react';

const TodoHeader = ({ darkMode, toggleDarkMode }) => (
  <div className="flex justify-between items-center mb-6">
    <h1 className="text-3xl font-bold tracking-tight">📋 Daftar To-do</h1>
    <button
      onClick={toggleDarkMode}
      className="text-sm border border-gray-400 rounded px-3 py-1 hover:bg-gray-200 dark:hover:bg-gray-800 transition"
    >
      {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
    </button>
  </div>
);

export default TodoHeader;

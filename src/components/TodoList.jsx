import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const TodoList = ({ todos, onToggle, onDelete, onEdit }) => {
  if (!todos.length) {
    return <p className="text-center text-gray-500">Belum ada todo yang ditambahkan.</p>;
  }

  return (
    <ul className="space-y-4">
      <AnimatePresence>
        {todos.map((todo) => (
          <motion.li
            key={todo.id}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-white p-4 rounded shadow flex justify-between items-start gap-4"
          >
            <div className="flex-1">
              <Link
                to={`/todos/${todo.id}`}
                className="text-lg font-medium text-blue-600 hover:underline"
              >
                {todo.title}
              </Link>
              <p className="text-sm text-gray-500">
                Status: {todo.completed ? '✅ Selesai' : '❌ Belum selesai'}
              </p>
              {todo.tags && todo.tags.length > 0 && (
                <div className="mt-1 flex flex-wrap gap-1">
                  {todo.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="flex-shrink-0 space-x-2">
              <button
                onClick={() => onToggle(todo.id)}
                className="text-green-600 hover:text-green-800"
                title="Toggle Selesai"
              >
                ✔
              </button>
              <button
                onClick={() => onEdit(todo)}
                className="text-yellow-500 hover:text-yellow-700"
                title="Edit"
              >
                ✎
              </button>
              <button
                onClick={() => onDelete(todo.id)}
                className="text-red-600 hover:text-red-800"
                title="Hapus"
              >
                🗑
              </button>
            </div>
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
};

export default TodoList;

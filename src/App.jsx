import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TodoListPage from './pages/TodoListPage';
import TodoDetailPage from './pages/TodoDetailPage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <nav className="p-4 bg-gray-100 shadow mb-4 rounded">
        <Link to="/" className="mr-4 text-blue-600 hover:underline">Home</Link>
        <Link to="/todos" className="mr-4 text-blue-600 hover:underline">Todos</Link>
        <Link to="/about" className="text-blue-600 hover:underline">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todos" element={<TodoListPage />} />
        <Route path="/todos/:todoId" element={<TodoDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const TodoDetailPage = () => {
  const { todoId } = useParams();
  const [todo, setTodo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
        setTodo(res.data);
      } catch (err) {
        setError('Gagal mengambil detail todo.');
      } finally {
        setLoading(false);
      }
    };

    fetchTodo();
  }, [todoId]);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!todo) return <p className="text-center text-gray-500">Todo tidak ditemukan.</p>;

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-xl mx-auto bg-white shadow rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4 text-blue-700">📝 Detail Todo</h1>
        <div className="space-y-2">
          <p><span className="font-semibold">ID:</span> {todo.id}</p>
          <p><span className="font-semibold">User ID:</span> {todo.userId}</p>
          <p><span className="font-semibold">Judul:</span> {todo.title}</p>
          <p><span className="font-semibold">Status:</span> {todo.completed ? '✅ Selesai' : '❌ Belum selesai'}</p>
        </div>

        <Link
          to="/todos"
          className="mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          ← Kembali ke Daftar
        </Link>
      </div>
    </div>
  );
};

export default TodoDetailPage;

import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-700 mb-4">📝 To-do List App</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Aplikasi manajemen tugas harian menggunakan React dan Tailwind CSS.
        </p>
      </div>

      <Link
        to="/todos"
        className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Lihat Todo List
      </Link>

      <div className="mt-10 max-w-2xl w-full bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">📌 Tentang Aplikasi</h2>
        <p className="text-gray-700 mb-4">
          Fitur-fitur utama:
        </p>
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Menambah, menghapus, dan mengedit to-do</li>
          <li>Toggle status selesai atau belum</li>
          <li>Pencarian dan filter berdasarkan status</li>
          <li>Penyimpanan di <code>localStorage</code></li>
          <li>Sinkronisasi parsial dengan server API</li>
        </ul>
        <p className="text-sm text-gray-500 mt-4 italic">
          Dibuat untuk Ujian Tengah Semester Web Development 💻
        </p>
      </div>
    </div>
  );
};

export default HomePage;
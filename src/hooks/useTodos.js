import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const useTodos = () => {
  const [todoList, setTodoList] = useState([]);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [newTodoTitle, setNewTodoTitle] = useState('');

 
  useEffect(() => {
    const saved = localStorage.getItem('myTodos');
    if (saved) {
      setTodoList(JSON.parse(saved));
    } else {
      fetchInitialTodosWithAxios(); 
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('myTodos', JSON.stringify(todoList));
  }, [todoList]);

  const fetchInitialTodosWithAxios = async () => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5');
      setTodoList(res.data);
      localStorage.setItem('myTodos', JSON.stringify(res.data));
      toast.success('Data awal dimuat dari API');
    } catch (err) {
      console.error('Gagal mengambil data dari API:', err);
      toast.error('Gagal memuat data dari API');
    }
  };

  const handleAddTodo = () => {
    if (newTodoTitle.trim() === '') return;

    const newTodo = {
      userId: 1,
      id: Date.now(),
      title: newTodoTitle,
      completed: false,
    };

    setTodoList([newTodo, ...todoList]);
    setNewTodoTitle('');
    toast.success('To-do berhasil ditambahkan');
  };

  const handleDelete = (id) => {
    setTodoList(todoList.filter(todo => todo.id !== id));
    toast.info('To-do dihapus');
  };

  const handleEdit = (id, newTitle) => {
    const updated = todoList.map(todo =>
      todo.id === id ? { ...todo, title: newTitle } : todo
    );
    setTodoList(updated);
    toast.success('Judul to-do diperbarui');
  };

  const handleToggle = (id) => {
    const updatedList = todoList.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodoList(updatedList);
  };

  const handleReset = () => {
    setTodoList([]);
    toast.warn('Semua to-do dihapus');
  };

  const handleExport = () => {
    const blob = new Blob([JSON.stringify(todoList)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'todos.json';
    link.click();
  };

  const handleImport = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const imported = JSON.parse(reader.result);
      if (Array.isArray(imported)) {
        setTodoList(imported);
        toast.success('Data berhasil diimpor');
      } else {
        toast.error('Format file tidak valid');
      }
    };
    reader.readAsText(file);
  };

  const filteredTodos = todoList
    .filter(todo => todo.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(todo => {
      if (filter === 'completed') return todo.completed;
      if (filter === 'incomplete') return !todo.completed;
      return true;
    });

  return {
    todoList,
    setTodoList,
    filter,
    setFilter,
    searchTerm,
    setSearchTerm,
    newTodoTitle,
    setNewTodoTitle,
    filteredTodos,
    addTodo: handleAddTodo,
    deleteTodo: handleDelete,
    editTodo: handleEdit,
    toggleTodo: handleToggle,
    resetTodos: handleReset,
    exportTodos: handleExport,
    importTodos: handleImport,
  };
};

export default useTodos;

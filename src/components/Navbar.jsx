import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex gap-6 p-4 border-b border-gray-300">
      <Link to="/" className="text-blue-600 hover:underline">Home</Link>
      <Link to="/todos" className="text-blue-600 hover:underline">To-do's</Link>
    </nav>
  );
};

export default Navbar;

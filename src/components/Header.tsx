import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white py-4 px-4 w-full">
      <div className="flex justify-between items-center p-2">
        <h1 className="text-3xl font-bold">求人検索アプリ</h1>
        <nav className="space-x-6">
          <Link to="/" className="hover:text-gray-300">
            求人検索
          </Link>
          <Link to="/post" className="hover:text-gray-300">
            求人投稿
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

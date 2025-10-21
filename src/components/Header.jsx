import React from 'react';
import { translations } from '../utils/translations';
import { SearchIcon } from './Icons';

const Header = ({ lang, user, searchQuery, onSearchChange }) => {
  return (
    <header className="bg-gray-50/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-10 py-6 px-8">
        <div className="flex justify-between items-center">
            <div>
                <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">{translations[lang].hello} {user.name}!</h1>
                <p className="text-gray-500 dark:text-gray-400">{translations[lang].yourNotes}</p>
            </div>
            <div className="flex items-center gap-6">
                <div className="relative">
                    <SearchIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2"/>
                    <input 
                        type="text" 
                        placeholder={translations[lang].search} 
                        value={searchQuery}
                        onChange={(e) => onSearchChange(e.target.value)}
                        className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 dark:text-gray-200 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"/>
                </div>
                <img src={user.avatar} alt="User Profile" className="w-10 h-10 rounded-full object-cover"/>
            </div>
        </div>
    </header>
  );
};

export default Header;
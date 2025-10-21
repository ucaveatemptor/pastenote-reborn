import React from 'react';
import { translations } from '../utils/translations';

const CategoryCard = ({ category, notesCount, lang, onClick }) => {
    const colors = {
        blue: 'border-blue-500',
        purple: 'border-purple-500',
        yellow: 'border-yellow-500',
        indigo: 'border-indigo-500',
        teal: 'border-teal-500',
        red: 'border-red-500',
        pink: 'border-pink-500',
    };
    const textColors = {
        blue: 'text-blue-500 dark:text-blue-400',
        purple: 'text-purple-500 dark:text-purple-400',
        yellow: 'text-yellow-500 dark:text-yellow-400',
        indigo: 'text-indigo-500 dark:text-indigo-400',
        teal: 'text-teal-500 dark:text-teal-400',
        red: 'text-red-500 dark:text-red-400',
        pink: 'text-pink-500 dark:text-pink-400',
    };

    return (
        <div onClick={() => onClick(category)} className={`relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm hover:shadow-lg dark:shadow-none transition-all duration-300 border-l-4 ${colors[category.color]} flex items-center justify-between gap-4 cursor-pointer`}>
            <div className="flex items-center gap-4 min-w-0 flex-grow">
                <category.icon className={`w-8 h-8 flex-shrink-0 ${textColors[category.color]}`} />
                <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100 truncate">{category.name}</h3>
            </div>
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-md flex-shrink-0">{notesCount} {translations[lang].notesCount}</span>
        </div>
    );
};

export default CategoryCard;
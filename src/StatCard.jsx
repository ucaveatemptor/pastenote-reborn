import React from 'react';

const StatCard = ({ title, value, icon, color, onClick }) => {
    const colors = {
        blue: 'bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400',
        green: 'bg-green-100 text-green-600 dark:bg-green-900/50 dark:text-green-400',
        yellow: 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/50 dark:text-yellow-400',
        purple: 'bg-purple-100 text-purple-600 dark:bg-purple-900/50 dark:text-purple-400',
    };
    return (
        <div onClick={onClick} className={`bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm hover:shadow-md dark:shadow-none dark:hover:bg-gray-700/50 transition-all flex items-start justify-between ${onClick ? 'cursor-pointer' : ''}`}>
            <div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{title}</p>
                <p className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-1">{value}</p>
            </div>
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${colors[color]}`}>
                {icon}
            </div>
        </div>
    );
};

export default StatCard;
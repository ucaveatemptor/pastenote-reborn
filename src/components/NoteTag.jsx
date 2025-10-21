import React from 'react';

const NoteTag = ({ tag }) => {
    const tagColors = {
        blue: 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300',
        green: 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300',
        purple: 'bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300',
        yellow: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-300',
        red: 'bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300',
        indigo: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300',
        pink: 'bg-pink-100 text-pink-700 dark:bg-pink-900/50 dark:text-pink-300',
        teal: 'bg-teal-100 text-teal-700 dark:bg-teal-900/50 dark:text-teal-300',
    };
    return (<span className={`text-xs font-medium px-2 py-1 rounded-md ${tagColors[tag.color] || 'bg-gray-100 text-gray-700'}`}>{tag.name}</span>);
};

export default NoteTag;
import React from 'react';
import { translations } from '../utils/translations';
import NoteTag from './NoteTag';
import { RestoreIcon, TrashIcon } from './Icons';

const ArchivedNoteCard = ({ note, onRestore, onDeletePermanently, lang }) => {
    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm hover:shadow-lg dark:shadow-none dark:hover:ring-1 dark:hover:ring-gray-700 transition-all duration-300 flex flex-col h-full opacity-70">
            <h3 className="font-bold text-gray-500 dark:text-gray-400 flex-grow pr-2 line-through truncate">{note.title}</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm my-4 flex-grow">{note.content}</p>
            <div className="flex items-center justify-between">
                <div className="flex gap-2 flex-wrap">{note.tags.map(tag => <NoteTag key={tag.name} tag={tag} />)}</div>
                <div className="flex items-center gap-2">
                    <button onClick={() => onRestore(note.id)} title={translations[lang].restore} className="text-gray-400 dark:text-gray-500 hover:text-green-600 dark:hover:text-green-400 transition-colors"><RestoreIcon className="w-5 h-5"/></button>
                    <button onClick={() => onDeletePermanently(note.id)} title={translations[lang].deletePermanently} className="text-gray-400 dark:text-gray-500 hover:text-red-600 dark:hover:text-red-400 transition-colors"><TrashIcon className="w-5 h-5"/></button>
                </div>
            </div>
        </div>
    );
};

export default ArchivedNoteCard;
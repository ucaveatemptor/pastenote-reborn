import React from 'react';
import { PinIcon, EditIcon, ArchiveIcon, StarIcon } from './Icons';
import NoteTag from './NoteTag';

const NoteCard = ({ note, onToggleFavorite, onArchive, onEdit }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm hover:shadow-lg dark:shadow-none dark:hover:ring-1 dark:hover:ring-gray-700 transition-all duration-300 flex flex-col h-full">
        <div className="flex justify-between items-start mb-3">
            <h3 className="font-bold text-gray-800 dark:text-gray-100 flex-grow pr-2 truncate">{note.title}</h3>
            {note.isPinned && <PinIcon className="w-5 h-5 text-gray-400 dark:text-gray-500 flex-shrink-0" />}
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow">{note.content}</p>
        <div className="flex items-center justify-between">
            <div className="flex gap-2 flex-wrap">{note.tags.map(tag => <NoteTag key={tag.name} tag={tag} />)}</div>
            <div className="flex items-center gap-2">
                <button onClick={() => onEdit(note)} className="text-gray-400 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"><EditIcon className="w-5 h-5"/></button>
                <button onClick={() => onArchive(note.id)} className="text-gray-400 dark:text-gray-500 hover:text-red-600 dark:hover:text-red-400 transition-colors"><ArchiveIcon className="w-5 h-5"/></button>
                 <button onClick={() => onToggleFavorite(note.id)} className={`transition-colors ${note.isFavorite ? 'text-yellow-500' : 'text-gray-400 dark:text-gray-500 hover:text-yellow-500'}`}>
                    <StarIcon className="w-5 h-5" solid={note.isFavorite} />
                </button>
            </div>
        </div>
    </div>
  );
};

export default NoteCard;
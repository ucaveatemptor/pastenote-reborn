import React from 'react';
import { translations } from '../utils/translations';
import StatCard from './StatCard';
import NoteCard from './NoteCard';
import { NotesIcon, PinIcon, StarIcon, FolderIcon } from './Icons';

const NotesPage = ({ notes, categories, onToggleFavorite, onArchive, onEdit, lang }) => (
    <>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <StatCard title={translations[lang].totalNotes} value={notes.length} icon={<NotesIcon className="w-5 h-5" />} color="blue"/>
            <StatCard title={translations[lang].pinned} value={notes.filter(n => n.isPinned).length} icon={<PinIcon className="w-5 h-5" />} color="green"/>
            <StatCard title={translations[lang].favorites} value={notes.filter(n => n.isFavorite).length} icon={<StarIcon className="w-5 h-5" />} color="yellow"/>
            <StatCard title={translations[lang].totalFolders} value={categories.length} icon={<FolderIcon className="w-5 h-5" />} color="purple"/>
        </section>
        
        <section>
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-6">{translations[lang].recentNotes}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {notes.map(note => (
              <NoteCard key={note.id} note={note} onToggleFavorite={onToggleFavorite} onArchive={onArchive} onEdit={onEdit} />
            ))}
          </div>
        </section>
    </>
);

export default NotesPage;
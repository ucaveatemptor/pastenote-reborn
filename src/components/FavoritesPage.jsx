import React from 'react';
import { translations } from '../utils/translations';
import PageTitle from './PageTitle';
import NoteCard from './NoteCard';

const FavoritesPage = ({ notes, onToggleFavorite, onArchive, onEdit, lang }) => {
    const favoriteNotes = notes.filter(note => note.isFavorite);
    return (
        <div>
            <PageTitle title={translations[lang].pageTitleFavorites} />
            {favoriteNotes.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {favoriteNotes.map(note => (
                        <NoteCard key={note.id} note={note} onToggleFavorite={onToggleFavorite} onArchive={onArchive} onEdit={onEdit} />
                    ))}
                </div>
            ) : (
                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl text-center text-gray-500 dark:text-gray-400">
                   {translations[lang].noFavorites}
                </div>
            )}
        </div>
    );
};

export default FavoritesPage;
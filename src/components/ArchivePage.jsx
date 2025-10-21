import React from 'react';
import { translations } from '../utils/translations';
import PageTitle from './PageTitle';
import ArchivedNoteCard from './ArchivedNoteCard';

const ArchivePage = ({ archivedNotes, onRestore, onDeletePermanently, lang }) => {
    return (
        <div>
            <PageTitle title={translations[lang].pageTitleArchive} />
            {archivedNotes.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {archivedNotes.map(note => (
                        <ArchivedNoteCard 
                            key={note.id} 
                            note={note} 
                            onRestore={onRestore} 
                            onDeletePermanently={onDeletePermanently}
                            lang={lang}
                        />
                    ))}
                </div>
            ) : (
                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl text-center text-gray-500 dark:text-gray-400">
                   {translations[lang].noArchivedNotes}
                </div>
            )}
        </div>
    );
};

export default ArchivePage;
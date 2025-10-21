import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { translations } from '../utils/translations';
import StatCard from '../StatCard';
import NoteCard from './NoteCard';
import { NotesIcon, PinIcon, StarIcon, FolderIcon } from './Icons';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
        },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
};

const NotesPage = ({ allNotes, searchQuery, categories, onToggleFavorite, onArchive, onEdit, lang, setCurrentPage }) => {
    const [activeFilter, setActiveFilter] = useState('all'); // 'all' or 'pinned'

    const displayedNotes = allNotes
        .filter(note => {
            // Фильтр по поисковому запросу
            const query = searchQuery.toLowerCase();
            return note.title.toLowerCase().includes(query) || note.content.toLowerCase().includes(query);
        })
        .filter(note => {
            // Фильтр по активному виджету
            if (activeFilter === 'pinned') {
                return note.isPinned;
            }
            return true;
        });

    return (
        <>
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                <StatCard title={translations[lang].totalNotes} value={allNotes.length} icon={<NotesIcon className="w-5 h-5" />} color="blue" onClick={() => setActiveFilter('all')} isActive={activeFilter === 'all'}/>
                <StatCard title={translations[lang].pinned} value={allNotes.filter(n => n.isPinned).length} icon={<PinIcon className="w-5 h-5" />} color="green" onClick={() => setActiveFilter('pinned')} isActive={activeFilter === 'pinned'}/>
                <StatCard title={translations[lang].favorites} value={allNotes.filter(n => n.isFavorite).length} icon={<StarIcon className="w-5 h-5" />} color="yellow" onClick={() => setCurrentPage('favorites')}/>
                <StatCard title={translations[lang].totalFolders} value={categories.length} icon={<FolderIcon className="w-5 h-5" />} color="purple" onClick={() => setCurrentPage('tags')}/>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-6">
                {activeFilter === 'pinned' ? translations[lang].pinned : translations[lang].recentNotes}
              </h2>
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible" // Используем key для перезапуска анимации
                key={activeFilter}
              >
                {displayedNotes.map(note => (
                  <motion.div key={note.id} variants={itemVariants}>
                    <NoteCard note={note} onToggleFavorite={onToggleFavorite} onArchive={onArchive} onEdit={onEdit} />
                  </motion.div>
                ))}
              </motion.div>
            </section>
        </>
    );
};

export default NotesPage;
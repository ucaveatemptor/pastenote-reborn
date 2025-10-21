import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { translations } from '../../utils/translations';

const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
};

const modal = {
    hidden: { 
        y: "-50px",
        opacity: 0 
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: { delay: 0.1, type: "spring", stiffness: 200, damping: 20 }
    },
};

const CreationModal = ({ isOpen, onClose, onSave, mode, lang, allCategories, noteToEdit }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [selectedTags, setSelectedTags] = useState([]);
    const [isFavorite, setIsFavorite] = useState(mode === 'createFavoriteNote');
    const [isPinned, setIsPinned] = useState(false);
    const [categoryColor, setCategoryColor] = useState('blue');

    useEffect(() => {
        if (isOpen) {
            if (mode === 'editNote' && noteToEdit) {
                setTitle(noteToEdit.title);
                setContent(noteToEdit.content);
                setIsFavorite(noteToEdit.isFavorite);
                setIsPinned(noteToEdit.isPinned);
                setSelectedTags(noteToEdit.tags.map(t => t.name));
            } else {
                setTitle('');
                setContent('');
                setSelectedTags([]);
                setIsFavorite(mode === 'createFavoriteNote');
                setIsPinned(false);
                setCategoryColor('blue');
            }
        }
    }, [isOpen, mode, noteToEdit]);

    const handleTagToggle = (tagName) => {
        setSelectedTags(prev => 
            prev.includes(tagName) ? prev.filter(t => t !== tagName) : [...prev, tagName]
        );
    };

    const handleSave = () => {
        if (mode === 'createCategory') {
            if (title.trim()) onSave({ name: title, color: categoryColor });
        } else {
            if (title.trim() && content.trim()) {
                const tags = allCategories.filter(cat => selectedTags.includes(cat.name));
                const noteData = { title, content, tags, isFavorite, isPinned };
                if(mode === 'editNote') noteData.id = noteToEdit.id;
                onSave(noteData);
            }
        }
    };

    const getModalTitle = () => {
        if (mode === 'createCategory') return translations[lang].newCategory;
        if (mode === 'createFavoriteNote') return translations[lang].newFavoriteNote;
        if (mode === 'editNote') return translations[lang].editNote;
        return translations[lang].newNote;
    };
    
    const colorOptions = ['blue', 'green', 'purple', 'yellow', 'red', 'indigo', 'pink', 'teal'];

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div 
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" 
                    onClick={onClose}
                    variants={backdrop}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                >
                    <motion.div 
                        className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 m-4 max-w-lg w-full"
                        onClick={e => e.stopPropagation()}
                        variants={modal}
                    >
                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-6">{getModalTitle()}</h3>
                        
                        <div className="space-y-4">
                            {mode.includes('Note') ? (
                                <>
                                    <input type="text" placeholder={translations[lang].title} value={title} onChange={e => setTitle(e.target.value)} className="w-full bg-gray-100 dark:bg-gray-700 border-transparent rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
                                    <textarea placeholder={translations[lang].content} value={content} onChange={e => setContent(e.target.value)} rows="5" className="w-full bg-gray-100 dark:bg-gray-700 border-transparent rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"></textarea>
                                    <div>
                                        <h4 className="text-gray-700 dark:text-gray-300 mb-2">{translations[lang].categories}</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {allCategories.map(cat => (
                                                <button key={cat.id} onClick={() => handleTagToggle(cat.name)} className={`px-3 py-1 text-sm rounded-full transition ${selectedTags.includes(cat.name) ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}>
                                                    {cat.name}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <label className="flex items-center">
                                            <input type="checkbox" checked={isFavorite} onChange={e => setIsFavorite(e.target.checked)} className="rounded text-blue-500 focus:ring-blue-500"/>
                                            <span className="ml-2 text-gray-700 dark:text-gray-300">{translations[lang].markAsFavorite}</span>
                                        </label>
                                         <label className="flex items-center">
                                            <input type="checkbox" checked={isPinned} onChange={e => setIsPinned(e.target.checked)} className="rounded text-blue-500 focus:ring-blue-500"/>
                                            <span className="ml-2 text-gray-700 dark:text-gray-300">{translations[lang].pinNote}</span>
                                        </label>
                                    </div>
                                </>
                            ) : (
                                 <>
                                    <input type="text" placeholder={translations[lang].categoryName} value={title} onChange={e => setTitle(e.target.value)} className="w-full bg-gray-100 dark:bg-gray-700 border-transparent rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
                                    <div className="flex items-center gap-3">
                                        <label className="text-gray-700 dark:text-gray-300">{translations[lang].color}:</label>
                                        {colorOptions.map(color => (
                                            <button key={color} onClick={() => setCategoryColor(color)} className={`w-6 h-6 rounded-full bg-${color}-500 transition ${categoryColor === color ? 'ring-2 ring-offset-2 dark:ring-offset-gray-800 ring-blue-500' : ''}`}></button>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>

                        <div className="flex justify-end gap-4 mt-8">
                            <button onClick={onClose} className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition">
                                {translations[lang].cancel}
                            </button>
                            <button onClick={handleSave} className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
                                {translations[lang].save}
                            </button>
                        </div>
                    </motion.div> 
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CreationModal;
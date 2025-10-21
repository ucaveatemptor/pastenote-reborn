import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { translations } from '../../utils/translations';
import { TrashIcon } from '../Icons';

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

const CategoryDetailModal = ({ isOpen, onClose, onSave, onDelete, category, notesInCategory, lang }) => {
    const [name, setName] = useState('');
    const [color, setColor] = useState('blue');

    useEffect(() => {
        if (category) {
            setName(category.name);
            setColor(category.color);
        }
    }, [category]);

    const handleSave = () => {
        if (name.trim()) {
            onSave({ ...category, name, color });
        }
    };
    
    const handleDelete = () => {
        onDelete(category.id);
    };

    const colorOptions = ['blue', 'green', 'purple', 'yellow', 'red', 'indigo', 'pink', 'teal'];

    return (
        <AnimatePresence>
            {isOpen && category && (
                <motion.div 
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" 
                    onClick={onClose}
                    variants={backdrop}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                >
                    <motion.div 
                        className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 m-4 max-w-2xl w-full"
                        onClick={e => e.stopPropagation()}
                        variants={modal}
                    >
                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-6">{translations[lang].editCategory}</h3>
                        
                        <div className="space-y-4">
                            <input type="text" placeholder={translations[lang].categoryName} value={name} onChange={e => setName(e.target.value)} className="w-full bg-gray-100 dark:bg-gray-700 border-transparent rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
                            <div className="flex items-center gap-3">
                                <label className="text-gray-700 dark:text-gray-300">{translations[lang].color}:</label>
                                {colorOptions.map(c => (
                                    <button key={c} onClick={() => setColor(c)} className={`w-6 h-6 rounded-full bg-${c}-500 transition ${color === c ? 'ring-2 ring-offset-2 dark:ring-offset-gray-800 ring-blue-500' : ''}`}></button>
                                ))}
                            </div>

                            <div className="pt-4">
                                <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">{translations[lang].notesInCategory} ({notesInCategory.length})</h4>
                                <div className="max-h-48 overflow-y-auto space-y-2 pr-2">
                                    {notesInCategory.length > 0 ? (
                                        notesInCategory.map(note => (
                                            <div key={note.id} className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg text-gray-800 dark:text-gray-200 truncate">
                                                {note.title}
                                            </div>
                                        ))
                                    ) : (
                                        <p className="text-gray-500 dark:text-gray-400">No notes in this category.</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between items-center mt-8">
                             <button onClick={handleDelete} className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition flex items-center gap-2">
                                <TrashIcon className="w-5 h-5" />
                                {translations[lang].deleteCategory}
                            </button>
                            <div className="flex gap-4">
                                <button onClick={onClose} className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition">
                                    {translations[lang].cancel}
                                </button>
                                <button onClick={handleSave} className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
                                    {translations[lang].save}
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CategoryDetailModal;
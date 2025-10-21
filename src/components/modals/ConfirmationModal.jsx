import React from 'react';
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

const ConfirmationModal = ({ isOpen, onClose, onConfirm, lang }) => {
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
                        className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 m-4 max-w-sm w-full"
                        onClick={e => e.stopPropagation()}
                        variants={modal}
                    >
                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{translations[lang].clearArchiveTitle}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mt-2 mb-6">{translations[lang].clearArchiveMessage}</p>
                        <div className="flex justify-end gap-4">
                            <button onClick={onClose} className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition">
                                {translations[lang].cancel}
                            </button>
                            <button onClick={onConfirm} className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition">
                                {translations[lang].confirm}
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ConfirmationModal;
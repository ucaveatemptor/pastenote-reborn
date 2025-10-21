import React from 'react';
import { translations } from '../../utils/translations';

const ConfirmationModal = ({ isOpen, onClose, onConfirm, lang }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity" onClick={onClose}>
            <div 
                className={`bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 m-4 max-w-sm w-full transform transition-all ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
                onClick={e => e.stopPropagation()}
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
            </div>
        </div>
    );
};

export default ConfirmationModal;
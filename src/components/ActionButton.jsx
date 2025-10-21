import React from 'react';
import { translations } from '../utils/translations';
import { PlusIcon, TrashIcon, LogoutIcon } from './Icons';

const ActionButton = ({ currentPage, onAction, lang }) => {
    const isArchivePage = currentPage === 'archive';
    const isSettingsPage = currentPage === 'settings';

    const getButtonConfig = () => {
        switch (currentPage) {
            case 'archive':
                return {
                    icon: <TrashIcon className="w-6 h-6" />,
                    style: "bg-red-600 hover:bg-red-700 shadow-red-500/30 hover:shadow-red-400/50",
                    ariaLabel: translations[lang].clearArchiveTitle
                };
            case 'settings':
                return {
                    icon: <LogoutIcon className="w-6 h-6" />,
                    style: "bg-gray-600 hover:bg-gray-700 shadow-gray-500/30 hover:shadow-gray-400/50",
                    ariaLabel: translations[lang].logout
                };
            case 'tags':
                return {
                    icon: <PlusIcon className="w-6 h-6" />,
                    style: "bg-blue-600 hover:bg-blue-700 shadow-blue-500/30 hover:shadow-blue-400/50",
                    ariaLabel: translations[lang].createFolder
                };
            default:
                return {
                    icon: <PlusIcon className="w-6 h-6" />,
                    style: "bg-blue-600 hover:bg-blue-700 shadow-blue-500/30 hover:shadow-blue-400/50",
                    ariaLabel: translations[lang].createNote
                };
        }
    };

    const config = getButtonConfig();

    return (
        <button 
            onClick={onAction} 
            className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white transition-all duration-300 shadow-lg ${config.style}`}
            aria-label={config.ariaLabel}
        >
            <div className="relative w-6 h-6 flex items-center justify-center">
                 <span className={`transition-all duration-300 absolute ${isArchivePage || isSettingsPage ? 'opacity-0 transform -rotate-90 scale-50' : 'opacity-100 transform rotate-0 scale-100'}`}>
                    <PlusIcon className="w-6 h-6" />
                </span>
                 <span className={`transition-all duration-300 absolute ${isArchivePage ? 'opacity-100 transform rotate-0 scale-100' : 'opacity-0 transform rotate-90 scale-50'}`}>
                    <TrashIcon className="w-6 h-6" />
                </span>
                <span className={`transition-all duration-300 absolute ${isSettingsPage ? 'opacity-100 transform rotate-0 scale-100' : 'opacity-0 transform rotate-90 scale-50'}`}>
                    <LogoutIcon className="w-6 h-6" />
                </span>
            </div>
        </button>
    );
};

export default ActionButton;
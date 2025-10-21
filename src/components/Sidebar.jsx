import React from 'react';
import { translations } from '../utils/translations';
import { NotesIcon, FolderIcon, StarIcon, ArchiveIcon, SettingsIcon } from './Icons';
import ActionButton from './ActionButton';

const Sidebar = ({ currentPage, setCurrentPage, lang, onActionButtonClick }) => {
  const menuItems = [
    { id: 'notes', icon: NotesIcon, label: translations[lang].notes },
    { id: 'tags', icon: FolderIcon, label: translations[lang].tags },
    { id: 'favorites', icon: StarIcon, label: translations[lang].favorites },
    { id: 'archive', icon: ArchiveIcon, label: translations[lang].archive },
    { id: 'settings', icon: SettingsIcon, label: translations[lang].settings },
  ];

  return (
    <aside className="bg-white dark:bg-gray-800 w-20 lg:w-24 h-screen flex flex-col items-center py-8 fixed left-0 top-0 border-r border-gray-200 dark:border-gray-700 z-20">
      <div className="text-blue-600 font-bold text-5xl font-sans -mt-1">P</div>
      <nav className="flex flex-col items-center gap-6 mt-16 flex-grow">
        {menuItems.map(item => (
          <button
            key={item.id}
            onClick={() => setCurrentPage(item.id)}
            className={`p-3 rounded-xl transition-colors duration-200 ${
              currentPage === item.id 
                ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400' 
                : 'text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700'
            }`}
            aria-label={item.label}
          >
            <item.icon className="w-6 h-6" />
          </button>
        ))}
      </nav>
      <ActionButton currentPage={currentPage} onAction={onActionButtonClick} lang={lang} />
    </aside>
  );
};

export default Sidebar;
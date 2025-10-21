import React, { useState } from 'react';
import { translations } from '../utils/translations';
import PageTitle from './PageTitle';

const SettingsPage = ({ user, onUserUpdate, theme, setTheme, language, setLanguage, lang }) => {
    const [name, setName] = useState(user.name);
    const [avatar, setAvatar] = useState(user.avatar);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSaveChanges = () => {
        onUserUpdate({ name, avatar });
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
    };

    return (
        <div>
            <PageTitle title={translations[lang].pageTitleSettings} />
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl space-y-8">
                {/* Account Settings */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">{translations[lang].accountSettings}</h3>
                    <div className="space-y-4">
                         <div className="flex items-center gap-4">
                            <img src={avatar} alt="Current Avatar" className="w-16 h-16 rounded-full object-cover"/>
                            <div className="w-full">
                                <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">{translations[lang].avatarUrl}</label>
                                <input type="text" value={avatar} onChange={e => setAvatar(e.target.value)} className="w-full bg-gray-100 dark:bg-gray-700 border-transparent rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">{translations[lang].yourName}</label>
                            <input type="text" value={name} onChange={e => setName(e.target.value)} className="w-full bg-gray-100 dark:bg-gray-700 border-transparent rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
                        </div>
                        <div className="flex justify-end items-center">
                            {showSuccess && <span className="text-green-600 dark:text-green-400 mr-4 transition-opacity">{translations[lang].profileUpdated}</span>}
                            <button onClick={handleSaveChanges} className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
                                {translations[lang].saveChanges}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Language Switcher */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-3">{translations[lang].language}</h3>
                    <div className="flex gap-2">
                        <button onClick={() => setLanguage('ru')} className={`px-4 py-2 rounded-lg transition ${language === 'ru' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 dark:text-gray-300'}`}>Русский</button>
                        <button onClick={() => setLanguage('en')} className={`px-4 py-2 rounded-lg transition ${language === 'en' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 dark:text-gray-300'}`}>English</button>
                    </div>
                </div>

                {/* Theme Switcher */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-3">{translations[lang].theme}</h3>
                    <div className="flex gap-2">
                        <button onClick={() => setTheme('light')} className={`px-4 py-2 rounded-lg transition ${theme === 'light' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 dark:text-gray-300'}`}>{translations[lang].light}</button>
                        <button onClick={() => setTheme('dark')} className={`px-4 py-2 rounded-lg transition ${theme === 'dark' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 dark:text-gray-300'}`}>{translations[lang].dark}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SettingsPage;
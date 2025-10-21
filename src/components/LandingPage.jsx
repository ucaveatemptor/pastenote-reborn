import React, { useState } from 'react';
import { translations } from '../utils/translations';

const LandingPage = ({ onLogin, onRegister }) => {
    const [formMode, setFormMode] = useState('login'); // 'login' or 'register'
    const [lang] = useState('ru'); // Static lang for landing page for now

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        onLogin({email, password});
    }
    
    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        onRegister({name, email, password});
    }

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans flex flex-col">
            <header className="absolute top-0 left-0 right-0 p-6 z-10">
                <div className="container mx-auto flex justify-between items-center px-6">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
                        <span className="text-blue-600">Paste</span>Note
                    </h1>
                    <button onClick={() => setFormMode('login')} className="font-semibold text-blue-600 hover:text-blue-700 transition">
                        {translations[lang].login}
                    </button>
                </div>
            </header>
            <main className="min-h-screen flex items-center justify-center pt-24 pb-12">
                <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
                    {/* Left Column: Hero Text */}
                    <div className="text-center md:text-left">
                        <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight tracking-tight">
                            {translations[lang].landingTitle}
                        </h2>
                        <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300">
                            {translations[lang].landingSubtitle}
                        </p>
                        <div className="mt-8 flex justify-center md:justify-start">
                           <button onClick={() => setFormMode('register')} className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-colors">
                                {translations[lang].getStarted}
                            </button>
                        </div>
                    </div>
                    
                    {/* Right Column: Auth Form */}
                    <div className="w-full max-w-sm mx-auto bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl border dark:border-gray-700">
                        {formMode === 'login' ? (
                           <form onSubmit={handleLogin}>
                                <h3 className="text-2xl font-bold mb-6 text-center">{translations[lang].loginTitle}</h3>
                                <div className="space-y-4">
                                    <input name="email" type="email" required placeholder={translations[lang].email} className="w-full bg-gray-100 dark:bg-gray-700 border-transparent rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
                                    <input name="password" type="password" required placeholder={translations[lang].password} className="w-full bg-gray-100 dark:bg-gray-700 border-transparent rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
                                </div>
                                <button type="submit" className="w-full mt-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors">
                                    {translations[lang].login}
                                </button>
                                <p className="text-center mt-4 text-sm">
                                    {translations[lang].noAccount} <button type="button" onClick={() => setFormMode('register')} className="font-semibold text-blue-600 hover:underline">{translations[lang].signUp}</button>
                                </p>
                            </form>
                        ) : (
                           <form onSubmit={handleRegister}>
                                <h3 className="text-2xl font-bold mb-6 text-center">{translations[lang].registerTitle}</h3>
                                <div className="space-y-4">
                                    <input name="name" type="text" required placeholder={translations[lang].name} className="w-full bg-gray-100 dark:bg-gray-700 border-transparent rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
                                    <input name="email" type="email" required placeholder={translations[lang].email} className="w-full bg-gray-100 dark:bg-gray-700 border-transparent rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
                                    <input name="password" type="password" required placeholder={translations[lang].password} className="w-full bg-gray-100 dark:bg-gray-700 border-transparent rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
                                </div>
                                <button type="submit" className="w-full mt-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors">
                                    {translations[lang].register}
                                </button>
                                <p className="text-center mt-4 text-sm">
                                    {translations[lang].haveAccount} <button type="button" onClick={() => setFormMode('login')} className="font-semibold text-blue-600 hover:underline">{translations[lang].login}</button>
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default LandingPage;
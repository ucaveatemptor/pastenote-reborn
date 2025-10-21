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

const AuthModal = ({ isOpen, onClose, onLogin, onRegister, initialMode = 'login', lang }) => {
    const [mode, setMode] = useState(initialMode);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        if (isOpen) {
            setMode(initialMode);
            // Сбрасываем поля при открытии
            setName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            setError('');
        }
    }, [isOpen, initialMode]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(''); // Сброс ошибки перед новой попыткой

        if (mode === 'login') {
            onLogin({ email, password });
        } else {
            // Валидация для регистрации
            if (password.length < 8) {
                setError(translations[lang].passwordTooShort);
                return;
            }
            if (password !== confirmPassword) {
                setError(translations[lang].passwordsDoNotMatch);
                return;
            }
            onRegister({ name, email, password });
        }
    };

    const isLogin = mode === 'login';

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
                        <h3 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
                            {isLogin ? translations[lang].loginTitle : translations[lang].registerTitle}
                        </h3>

                        <form onSubmit={handleSubmit}>
                            <div className="space-y-4">
                                {!isLogin && (
                                    <input 
                                        name="name" 
                                        type="text" 
                                        required 
                                        placeholder={translations[lang].name} 
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                        className="w-full bg-gray-100 dark:bg-gray-700 border-transparent rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800 dark:text-gray-200"
                                    />
                                )}
                                <input 
                                    name="email" 
                                    type="email" 
                                    required 
                                    placeholder={translations[lang].email} 
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    className="w-full bg-gray-100 dark:bg-gray-700 border-transparent rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800 dark:text-gray-200"
                                />
                                <input 
                                    name="password" 
                                    type="password" 
                                    required 
                                    placeholder={translations[lang].password} 
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    className="w-full bg-gray-100 dark:bg-gray-700 border-transparent rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800 dark:text-gray-200"
                                />
                                {!isLogin && (
                                    <input 
                                        name="confirmPassword" 
                                        type="password" 
                                        required 
                                        placeholder={translations[lang].confirmPassword} 
                                        value={confirmPassword}
                                        onChange={e => setConfirmPassword(e.target.value)}
                                        className="w-full bg-gray-100 dark:bg-gray-700 border-transparent rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800 dark:text-gray-200"
                                    />
                                )}
                            </div>
                            <button type="submit" className="w-full mt-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors">
                                {isLogin ? translations[lang].login : translations[lang].register}
                            </button>
                            <p className="text-center mt-4 text-sm text-gray-600 dark:text-gray-400">
                                {isLogin ? translations[lang].noAccount : translations[lang].haveAccount}{' '}
                                <button 
                                    type="button"
                                    onClick={() => {
                                        setMode(isLogin ? 'register' : 'login');
                                        setError(''); // Сброс ошибки при смене режима
                                    }} 
                                    className="font-semibold text-blue-600 hover:underline"
                                >
                                    {isLogin ? translations[lang].signUp : translations[lang].login}
                                </button>
                            </p>
                        </form>
                        {error && (
                            <div className="mt-4 text-center text-sm text-red-500 bg-red-100 dark:bg-red-900/50 p-3 rounded-lg">
                                {error}
                            </div>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default AuthModal;
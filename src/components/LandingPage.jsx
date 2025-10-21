import React, { useState, useRef } from 'react';
import { translations } from '../utils/translations';
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import AuthModal from './modals/AuthModal';
import { motion, useInView } from 'framer-motion';

// Feature Card Component
const FeatureCard = ({ icon, title, description }) => (
    <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
        <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 mb-4">
            {icon}
        </div>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm">{description}</p>
    </div>
);

// Animation wrapper for sections
const AnimatedSection = ({ children }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {children}
        </motion.section>
    );
};

// Main Landing Page Component
const LandingPage = ({ onLogin, onRegister, lang = 'ru' }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMode, setModalMode] = useState('login');

    const features = [
        {
            icon: <ArrowPathIcon className="w-6 h-6" />,
            title: translations[lang].featureSyncTitle,
            description: translations[lang].featureSyncDesc,
        },
        {
            icon: <CloudArrowUpIcon className="w-6 h-6" />,
            title: translations[lang].featureOrgTitle,
            description: translations[lang].featureOrgDesc,
        },
        {
            icon: <ChartBarIcon className="w-6 h-6" />,
            title: translations[lang].featureAnalyticsTitle,
            description: translations[lang].featureAnalyticsDesc,
        },
        {
            icon: <FingerPrintIcon className="w-6 h-6" />,
            title: translations[lang].featureSecureTitle,
            description: translations[lang].featureSecureDesc,
        },
    ];

    const openModal = (mode) => {
        setModalMode(mode);
        setIsModalOpen(true);
    };

    const handleAuthSuccess = (data) => {
        modalMode === 'login' ? onLogin(data) : onRegister(data);
        setIsModalOpen(false);
    };

    return (
        <div className="bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-950 text-gray-800 dark:text-gray-200 font-sans">
            {/* Header */}
            <header className="sticky top-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg z-20 border-b border-gray-200 dark:border-gray-800">
                <div className="container mx-auto flex justify-between items-center px-6">
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-white py-4">
                        <span className="text-blue-600">Paste</span>Note
                    </h1>
                    <div className="flex items-center gap-4">
                        <button onClick={() => openModal('login')} className="font-semibold text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
                            {translations[lang].login}
                        </button>
                        <button onClick={() => openModal('register')} className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors">
                            {translations[lang].startFree}
                        </button>
                    </div>
                </div>
            </header>

            <main>
                {/* Hero Section */}
                <div className="container mx-auto px-6 py-24 md:py-32">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div 
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-center md:text-left"
                        >
                            <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight tracking-tight">{translations[lang].landingTitleV2}</h2>
                            <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto md:mx-0">{translations[lang].landingSubtitleV2}</p>
                            <div className="mt-8 flex justify-center md:justify-start">
                               <button onClick={() => openModal('register')} className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-colors text-lg">{translations[lang].startFree}</button>
                            </div>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="relative h-64 md:h-auto md:aspect-[4/3] hidden md:flex items-center justify-center"
                        >
                            {/* Placeholder for App UI Image */}
                            <div className="w-full h-full bg-gray-200 dark:bg-gray-800 rounded-2xl shadow-2xl flex items-center justify-center border border-gray-300 dark:border-gray-700">
                                <p className="text-gray-500">App Interface Screenshot</p>
                            </div>
                             {/* Soft 3D elements */}
                            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-200/50 dark:bg-purple-900/30 rounded-2xl -rotate-12 blur-xl"></div>
                            <div className="absolute -top-8 -right-8 w-40 h-40 bg-blue-200/50 dark:bg-blue-900/30 rounded-full blur-2xl"></div>
                        </motion.div>
                    </div>
                </div>

                {/* Features Section */}
                <AnimatedSection>
                    <div className="container mx-auto px-6 py-24">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {features.map((feature, index) => (
                                <FeatureCard key={index} {...feature} />
                            ))}
                        </div>
                    </div>
                </AnimatedSection>

                {/* Final CTA Section */}
                <AnimatedSection>
                    <div className="container mx-auto px-6 py-24 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">{translations[lang].finalCtaTitle}</h2>
                        <div className="mt-8">
                            <button onClick={() => openModal('register')} className="px-10 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-colors text-lg">{translations[lang].startFree}</button>
                        </div>
                    </div>
                </AnimatedSection>
            </main>

            {/* Footer */}
            <footer className="bg-gray-100 dark:bg-gray-950/50 mt-16">
                <div className="container mx-auto px-6 py-8 text-center text-gray-500 dark:text-gray-400">
                    <p>&copy; {new Date().getFullYear()} PasteNote. All rights reserved.</p>
                </div>
            </footer>

            <AuthModal 
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onLogin={onLogin}
                onRegister={onRegister}
                initialMode={modalMode}
                lang={lang}
            />
        </div>
    );
};

export default LandingPage;
import React, { useState, useEffect } from 'react';

// --- Иконки (SVG-компоненты) ---
const NotesIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  </svg>
);
const StarIcon = ({ className, solid }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={solid ? "currentColor" : "none"} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
);
const ArchiveIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
  </svg>
);
const SettingsIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);
const SearchIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);
const PinIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);
const EditIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
    </svg>
);
const TrashIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.134-2.033-2.134H8.033c-1.12 0-2.033.954-2.033 2.134v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
    </svg>
);
const FolderIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
  </svg>
);
const RestoreIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
  </svg>
);
const PlusIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
);
const LogoutIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
    </svg>
);

// --- Моковые данные ---
const mockNotes = [
  { id: 1, title: 'Идеи для квартального отчета с очень длинным названием, которое не помещается в одну строку', content: 'Необходимо проанализировать данные по продажам за Q3, выделить ключевые метрики роста и подготовить визуализацию для презентации...', tags: [{ name: 'Работа', color: 'blue' }], isPinned: true, isFavorite: true },
  { id: 2, title: 'План на выходные', content: '1. Сходить в спортзал. 2. Прочитать новую книгу по дизайну. 3. Встретиться с друзьями в центре города...', tags: [{ name: 'Личное', color: 'purple' }], isPinned: false, isFavorite: false },
  { id: 3, title: 'Рецепт пасты Карбонара', content: 'Ингредиенты: спагетти, гуанчале, яичные желтки, сыр пекорино романо, черный перец. Главное — не добавлять сливки!', tags: [{ name: 'Рецепты', color: 'yellow' }], isPinned: false, isFavorite: true },
  { id: 4, title: 'Список покупок', content: 'Молоко, хлеб, яйца, авокадо, куриное филе, оливковое масло.', tags: [{ name: 'Быт', color: 'red' }], isPinned: false, isFavorite: false },
  { id: 5, title: 'Мысли о редизайне проекта', content: 'Обновить цветовую палитру, использовать более современный шрифт, упростить навигацию. Собрать референсы с Dribbble.', tags: [{ name: 'Проект X', color: 'indigo' }, { name: 'Дизайн', color: 'pink' }], isPinned: true, isFavorite: false },
  { id: 6, title: 'Подготовка к отпуску', content: 'Купить билеты, забронировать отель, составить маршрут по достопримечательностям, собрать аптечку.', tags: [{ name: 'Путешествия', color: 'teal' }], isPinned: false, isFavorite: true },
];
const initialCategories = [
  { id: 1, name: 'Работа', color: 'blue', icon: FolderIcon },
  { id: 2, name: 'Личное', color: 'purple', icon: FolderIcon },
  { id: 3, name: 'Очень длинное название категории для проверки обрезки текста', color: 'yellow', icon: FolderIcon },
  { id: 4, name: 'Проект X', color: 'indigo', icon: FolderIcon },
  { id: 5, name: 'Путешествия', color: 'teal', icon: FolderIcon },
  { id: 6, name: 'Быт', color: 'red', icon: FolderIcon },
  { id: 7, name: 'Дизайн', color: 'pink', icon: FolderIcon },
];

// --- Локализация ---
const translations = {
    en: {
        hello: "Hello,",
        yourNotes: "Here are your latest notes.",
        search: "Search notes...",
        totalNotes: "Total Notes",
        pinned: "Pinned",
        favorites: "Favorites",
        totalFolders: "Total Folders",
        recentNotes: "Recent Notes",
        notes: "Notes",
        tags: "Categories",
        archive: "Archive",
        settings: "Settings",
        language: "Language",
        theme: "Theme",
        light: "Light",
        dark: "Dark",
        pageTitleTags: "Note Categories",
        pageTitleFavorites: "Favorite Notes",
        pageTitleArchive: "Archived Notes",
        pageTitleSettings: "Application Settings",
        noFavorites: "You don't have any favorite notes yet.",
        notesCount: "notes",
        noArchivedNotes: "There are no notes in the archive yet.",
        restore: "Restore",
        deletePermanently: "Delete Permanently",
        clearArchiveTitle: "Clear Archive?",
        clearArchiveMessage: "Are you sure you want to permanently delete all archived notes? This action cannot be undone.",
        confirm: "Confirm",
        cancel: "Cancel",
        logout: "Log Out",
        newNote: "New Note",
        editNote: "Edit Note",
        newFavoriteNote: "New Favorite Note",
        newCategory: "New Category",
        title: "Title",
        content: "Content",
        categoryName: "Category Name",
        color: "Color",
        categories: "Categories",
        markAsFavorite: "Mark as favorite",
        pinNote: "Pin note",
        save: "Save",
        createNote: "Create Note",
        createFolder: "Create Folder",
        editCategory: "Edit Category",
        notesInCategory: "Notes in this category",
        deleteCategory: "Delete Category",
        accountSettings: "Account Settings",
        yourName: "Your Name",
        avatarUrl: "Avatar URL",
        saveChanges: "Save Changes",
        profileUpdated: "Profile updated successfully!",
        // Landing Page
        landingTitle: "Your Thoughts, Organized.",
        landingSubtitle: "PasteNote is a simple and powerful tool to capture your ideas, thoughts, and everything that matters. Access your notes anywhere, anytime.",
        getStarted: "Get Started for Free",
        loginTitle: "Welcome Back!",
        registerTitle: "Create an Account",
        email: "Email",
        password: "Password",
        name: "Name",
        login: "Log In",
        register: "Register",
        noAccount: "Don't have an account?",
        haveAccount: "Already have an account?",
        signUp: "Sign Up",
    },
    ru: {
        hello: "Привет,",
        yourNotes: "Вот ваши последние заметки.",
        search: "Поиск заметок...",
        totalNotes: "Всего заметок",
        pinned: "Закреплено",
        favorites: "Избранные",
        totalFolders: "Всего папок",
        recentNotes: "Недавние заметки",
        notes: "Заметки",
        tags: "Категории",
        archive: "Архив",
        settings: "Настройки",
        language: "Язык",
        theme: "Тема",
        light: "Светлая",
        dark: "Темная",
        pageTitleTags: "Категории заметок",
        pageTitleFavorites: "Избранные заметки",
        pageTitleArchive: "Архив заметок",
        pageTitleSettings: "Настройки приложения",
        noFavorites: "У вас пока нет избранных заметок.",
        notesCount: "заметок",
        noArchivedNotes: "В архиве пока нет заметок.",
        restore: "Восстановить",
        deletePermanently: "Удалить навсегда",
        clearArchiveTitle: "Очистить архив?",
        clearArchiveMessage: "Вы уверены, что хотите навсегда удалить все заметки из архива? Это действие нельзя отменить.",
        confirm: "Подтвердить",
        cancel: "Отмена",
        logout: "Выйти",
        newNote: "Новая заметка",
        editNote: "Редактировать заметку",
        newFavoriteNote: "Новая избранная заметка",
        newCategory: "Новая категория",
        title: "Заголовок",
        content: "Содержимое",
        categoryName: "Название категории",
        color: "Цвет",
        categories: "Категории",
        markAsFavorite: "Отметить как избранное",
        pinNote: "Закрепить заметку",
        save: "Сохранить",
        createNote: "Создать заметку",
        createFolder: "Создать папку",
        editCategory: "Редактирование категории",
        notesInCategory: "Заметки в этой категории",
        deleteCategory: "Удалить категорию",
        accountSettings: "Настройки аккаунта",
        yourName: "Ваше имя",
        avatarUrl: "URL аватара",
        saveChanges: "Сохранить изменения",
        profileUpdated: "Профиль успешно обновлен!",
         // Landing Page
        landingTitle: "Ваши мысли, организованные.",
        landingSubtitle: "PasteNote — это простой и мощный инструмент для записи ваших идей, мыслей и всего, что имеет значение. Доступ к вашим заметкам в любом месте и в любое время.",
        getStarted: "Начать бесплатно",
        loginTitle: "С возвращением!",
        registerTitle: "Создать аккаунт",
        email: "Эл. почта",
        password: "Пароль",
        name: "Имя",
        login: "Войти",
        register: "Зарегистрироваться",
        noAccount: "Нет аккаунта?",
        haveAccount: "Уже есть аккаунт?",
        signUp: "Регистрация",
    },
};

// --- КОМПОНЕНТЫ ПАНЕЛИ УПРАВЛЕНИЯ (DASHBOARD) ---

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

    if (!isOpen) return null;

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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
            <div 
                className={`bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 m-4 max-w-lg w-full transform transition-all ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
                onClick={e => e.stopPropagation()}
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
            </div>
        </div>
    );
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

    if (!isOpen || !category) return null;

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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
            <div 
                className={`bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 m-4 max-w-2xl w-full transform transition-all ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
                onClick={e => e.stopPropagation()}
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
            </div>
        </div>
    );
};

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

const Header = ({ lang, user, searchQuery, onSearchChange }) => {
  return (
    <header className="bg-gray-50/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-10 py-6 px-8">
        <div className="flex justify-between items-center">
            <div>
                <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">{translations[lang].hello} {user.name}!</h1>
                <p className="text-gray-500 dark:text-gray-400">{translations[lang].yourNotes}</p>
            </div>
            <div className="flex items-center gap-6">
                <div className="relative">
                    <SearchIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2"/>
                    <input 
                        type="text" 
                        placeholder={translations[lang].search} 
                        value={searchQuery}
                        onChange={(e) => onSearchChange(e.target.value)}
                        className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 dark:text-gray-200 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"/>
                </div>
                <img src={user.avatar} alt="User Profile" className="w-10 h-10 rounded-full object-cover"/>
            </div>
        </div>
    </header>
  );
};

const StatCard = ({ title, value, icon, color }) => {
    const colors = {
        blue: 'bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400',
        green: 'bg-green-100 text-green-600 dark:bg-green-900/50 dark:text-green-400',
        yellow: 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/50 dark:text-yellow-400',
        purple: 'bg-purple-100 text-purple-600 dark:bg-purple-900/50 dark:text-purple-400',
    };
    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm hover:shadow-md dark:shadow-none dark:hover:bg-gray-700/50 transition-all flex items-start justify-between">
            <div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{title}</p>
                <p className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-1">{value}</p>
            </div>
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${colors[color]}`}>
                {icon}
            </div>
        </div>
    );
};

const NoteTag = ({ tag }) => {
    const tagColors = {
        blue: 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300',
        green: 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300',
        purple: 'bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300',
        yellow: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-300',
        red: 'bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300',
        indigo: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300',
        pink: 'bg-pink-100 text-pink-700 dark:bg-pink-900/50 dark:text-pink-300',
        teal: 'bg-teal-100 text-teal-700 dark:bg-teal-900/50 dark:text-teal-300',
    };
    return (<span className={`text-xs font-medium px-2 py-1 rounded-md ${tagColors[tag.color] || 'bg-gray-100 text-gray-700'}`}>{tag.name}</span>);
};

const NoteCard = ({ note, onToggleFavorite, onArchive, onEdit }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm hover:shadow-lg dark:shadow-none dark:hover:ring-1 dark:hover:ring-gray-700 transition-all duration-300 flex flex-col h-full">
        <div className="flex justify-between items-start mb-3">
            <h3 className="font-bold text-gray-800 dark:text-gray-100 flex-grow pr-2 truncate">{note.title}</h3>
            {note.isPinned && <PinIcon className="w-5 h-5 text-gray-400 dark:text-gray-500 flex-shrink-0" />}
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow">{note.content}</p>
        <div className="flex items-center justify-between">
            <div className="flex gap-2 flex-wrap">{note.tags.map(tag => <NoteTag key={tag.name} tag={tag} />)}</div>
            <div className="flex items-center gap-2">
                <button onClick={() => onEdit(note)} className="text-gray-400 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"><EditIcon className="w-5 h-5"/></button>
                <button onClick={() => onArchive(note.id)} className="text-gray-400 dark:text-gray-500 hover:text-red-600 dark:hover:text-red-400 transition-colors"><ArchiveIcon className="w-5 h-5"/></button>
                 <button onClick={() => onToggleFavorite(note.id)} className={`transition-colors ${note.isFavorite ? 'text-yellow-500' : 'text-gray-400 dark:text-gray-500 hover:text-yellow-500'}`}>
                    <StarIcon className="w-5 h-5" solid={note.isFavorite} />
                </button>
            </div>
        </div>
    </div>
  );
};

const PageTitle = ({ title }) => <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-6">{title}</h2>;

const NotesPage = ({ notes, categories, onToggleFavorite, onArchive, onEdit, lang }) => (
    <>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <StatCard title={translations[lang].totalNotes} value={notes.length} icon={<NotesIcon className="w-5 h-5" />} color="blue"/>
            <StatCard title={translations[lang].pinned} value={notes.filter(n => n.isPinned).length} icon={<PinIcon className="w-5 h-5" />} color="green"/>
            <StatCard title={translations[lang].favorites} value={notes.filter(n => n.isFavorite).length} icon={<StarIcon className="w-5 h-5" />} color="yellow"/>
            <StatCard title={translations[lang].totalFolders} value={categories.length} icon={<FolderIcon className="w-5 h-5" />} color="purple"/>
        </section>
        
        <section>
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-6">{translations[lang].recentNotes}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {notes.map(note => (
              <NoteCard key={note.id} note={note} onToggleFavorite={onToggleFavorite} onArchive={onArchive} onEdit={onEdit} />
            ))}
          </div>
        </section>
    </>
);

const FavoritesPage = ({ notes, onToggleFavorite, onArchive, onEdit, lang }) => {
    const favoriteNotes = notes.filter(note => note.isFavorite);
    return (
        <div>
            <PageTitle title={translations[lang].pageTitleFavorites} />
            {favoriteNotes.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {favoriteNotes.map(note => (
                        <NoteCard key={note.id} note={note} onToggleFavorite={onToggleFavorite} onArchive={onArchive} onEdit={onEdit} />
                    ))}
                </div>
            ) : (
                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl text-center text-gray-500 dark:text-gray-400">
                   {translations[lang].noFavorites}
                </div>
            )}
        </div>
    );
};

const CategoryCard = ({ category, notesCount, lang, onClick }) => {
    const colors = {
        blue: 'border-blue-500',
        purple: 'border-purple-500',
        yellow: 'border-yellow-500',
        indigo: 'border-indigo-500',
        teal: 'border-teal-500',
        red: 'border-red-500',
        pink: 'border-pink-500',
    };
    const textColors = {
        blue: 'text-blue-500 dark:text-blue-400',
        purple: 'text-purple-500 dark:text-purple-400',
        yellow: 'text-yellow-500 dark:text-yellow-400',
        indigo: 'text-indigo-500 dark:text-indigo-400',
        teal: 'text-teal-500 dark:text-teal-400',
        red: 'text-red-500 dark:text-red-400',
        pink: 'text-pink-500 dark:text-pink-400',
    };

    return (
        <div onClick={() => onClick(category)} className={`relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm hover:shadow-lg dark:shadow-none transition-all duration-300 border-l-4 ${colors[category.color]} flex items-center justify-between gap-4 cursor-pointer`}>
            <div className="flex items-center gap-4 min-w-0 flex-grow">
                <category.icon className={`w-8 h-8 flex-shrink-0 ${textColors[category.color]}`} />
                <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100 truncate">{category.name}</h3>
            </div>
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-md flex-shrink-0">{notesCount} {translations[lang].notesCount}</span>
        </div>
    );
};

const TagsPage = ({ categories, notes, lang, onCategoryClick }) => {
    const getNotesCountForCategory = (categoryName) => {
        return notes.filter(note => note.tags.some(tag => tag.name === categoryName)).length;
    };

    return (
        <div>
            <PageTitle title={translations[lang].pageTitleTags} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map(category => (
                    <CategoryCard
                        key={category.id}
                        category={category}
                        notesCount={getNotesCountForCategory(category.name)}
                        lang={lang}
                        onClick={onCategoryClick}
                    />
                ))}
            </div>
        </div>
    );
};

const ArchivedNoteCard = ({ note, onRestore, onDeletePermanently, lang }) => {
    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm hover:shadow-lg dark:shadow-none dark:hover:ring-1 dark:hover:ring-gray-700 transition-all duration-300 flex flex-col h-full opacity-70">
            <h3 className="font-bold text-gray-500 dark:text-gray-400 flex-grow pr-2 line-through truncate">{note.title}</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm my-4 flex-grow">{note.content}</p>
            <div className="flex items-center justify-between">
                <div className="flex gap-2 flex-wrap">{note.tags.map(tag => <NoteTag key={tag.name} tag={tag} />)}</div>
                <div className="flex items-center gap-2">
                    <button onClick={() => onRestore(note.id)} title={translations[lang].restore} className="text-gray-400 dark:text-gray-500 hover:text-green-600 dark:hover:text-green-400 transition-colors"><RestoreIcon className="w-5 h-5"/></button>
                    <button onClick={() => onDeletePermanently(note.id)} title={translations[lang].deletePermanently} className="text-gray-400 dark:text-gray-500 hover:text-red-600 dark:hover:text-red-400 transition-colors"><TrashIcon className="w-5 h-5"/></button>
                </div>
            </div>
        </div>
    );
};

const ArchivePage = ({ archivedNotes, onRestore, onDeletePermanently, lang }) => {
    return (
        <div>
            <PageTitle title={translations[lang].pageTitleArchive} />
            {archivedNotes.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {archivedNotes.map(note => (
                        <ArchivedNoteCard 
                            key={note.id} 
                            note={note} 
                            onRestore={onRestore} 
                            onDeletePermanently={onDeletePermanently}
                            lang={lang}
                        />
                    ))}
                </div>
            ) : (
                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl text-center text-gray-500 dark:text-gray-400">
                   {translations[lang].noArchivedNotes}
                </div>
            )}
        </div>
    );
};

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

const Dashboard = ({ user, onUserUpdate, onLogout }) => {
    const [currentPage, setCurrentPage] = useState('notes');
    const [theme, setTheme] = useState('light');
    const [language, setLanguage] = useState('ru');
    const [notes, setNotes] = useState(mockNotes);
    const [categories, setCategories] = useState(initialCategories);
    const [archivedNotes, setArchivedNotes] = useState([]);
    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
    const [isCreationModalOpen, setIsCreationModalOpen] = useState(false);
    const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [modalMode, setModalMode] = useState('createNote');
    const [noteToEdit, setNoteToEdit] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
  
    useEffect(() => {
      const root = document.documentElement;
      if (theme === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    }, [theme]);
  
    const handleToggleFavorite = (id) => {
      setNotes(notes.map(note =>
        note.id === id ? { ...note, isFavorite: !note.isFavorite } : note
      ));
    };
  
    const handleArchiveNote = (id) => {
      const noteToArchive = notes.find(note => note.id === id);
      if (noteToArchive) {
        setArchivedNotes([...archivedNotes, noteToArchive]);
        setNotes(notes.filter(note => note.id !== id));
      }
    };
  
    const handleRestoreNote = (id) => {
      const noteToRestore = archivedNotes.find(note => note.id === id);
      if (noteToRestore) {
        setNotes([...notes, noteToRestore]);
        setArchivedNotes(archivedNotes.filter(note => note.id !== id));
      }
    };
  
    const handleDeletePermanently = (id) => {
      setArchivedNotes(archivedNotes.filter(note => note.id !== id));
    };
  
    const handleClearArchive = () => {
      setArchivedNotes([]);
      setIsConfirmModalOpen(false);
    };
  
    const handleSave = (data) => {
      if (modalMode === 'createCategory') {
        const newCategory = { id: Date.now(), name: data.name, color: data.color, icon: FolderIcon };
        setCategories([...categories, newCategory]);
      } else if (modalMode === 'editNote') {
        setNotes(notes.map(n => n.id === data.id ? { ...n, ...data } : n));
      } else {
        const newNote = { id: Date.now(), ...data };
        setNotes([newNote, ...notes]);
      }
      setIsCreationModalOpen(false);
      setNoteToEdit(null);
    };
  
    const handleOpenEditModal = (note) => {
      setNoteToEdit(note);
      setModalMode('editNote');
      setIsCreationModalOpen(true);
    };
  
    const handleDeleteCategory = (categoryId) => {
      const categoryToDelete = categories.find(c => c.id === categoryId);
      if (!categoryToDelete) return;
  
      setCategories(categories.filter(c => c.id !== categoryId));
      setNotes(notes.map(note => ({
        ...note,
        tags: note.tags.filter(tag => tag.name !== categoryToDelete.name)
      })));
      setIsCategoryModalOpen(false);
    };
  
    const handleUpdateCategory = (updatedCategory) => {
      const oldCategory = categories.find(c => c.id === updatedCategory.id);
      if (!oldCategory) return;
  
      setCategories(categories.map(c => c.id === updatedCategory.id ? updatedCategory : c));
  
      setNotes(notes.map(note => {
        const tagIndex = note.tags.findIndex(t => t.name === oldCategory.name);
        if (tagIndex > -1) {
          const newTags = [...note.tags];
          newTags[tagIndex] = { name: updatedCategory.name, color: updatedCategory.color };
          return { ...note, tags: newTags };
        }
        return note;
      }));
      setIsCategoryModalOpen(false);
    };
  
    const handleOpenCategoryModal = (category) => {
      setSelectedCategory(category);
      setIsCategoryModalOpen(true);
    };
  
    const handleActionButtonClick = () => {
      setNoteToEdit(null);
      switch (currentPage) {
        case 'notes':
          setModalMode('createNote');
          setIsCreationModalOpen(true);
          break;
        case 'tags':
          setModalMode('createCategory');
          setIsCreationModalOpen(true);
          break;
        case 'favorites':
          setModalMode('createFavoriteNote');
          setIsCreationModalOpen(true);
          break;
        case 'archive':
          if (archivedNotes.length > 0) setIsConfirmModalOpen(true);
          break;
        case 'settings':
          onLogout();
          break;
        default:
          break;
      }
    };
  
    const filteredNotes = notes.filter(note =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.content.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    const renderContent = () => {
      switch (currentPage) {
        case 'notes': return <NotesPage notes={filteredNotes} categories={categories} onToggleFavorite={handleToggleFavorite} onArchive={handleArchiveNote} onEdit={handleOpenEditModal} lang={language} />;
        case 'tags': return <TagsPage categories={categories} notes={notes} lang={language} onCategoryClick={handleOpenCategoryModal} />;
        case 'favorites': return <FavoritesPage notes={filteredNotes} onToggleFavorite={handleToggleFavorite} onArchive={handleArchiveNote} onEdit={handleOpenEditModal} lang={language} />;
        case 'archive': return <ArchivePage archivedNotes={archivedNotes} onRestore={handleRestoreNote} onDeletePermanently={handleDeletePermanently} lang={language} />;
        case 'settings': return <SettingsPage user={user} onUserUpdate={onUserUpdate} theme={theme} setTheme={setTheme} language={language} setLanguage={setLanguage} lang={language} />;
        default: return <NotesPage notes={filteredNotes} categories={categories} onToggleFavorite={handleToggleFavorite} onArchive={handleArchiveNote} onEdit={handleOpenEditModal} lang={language} />;
      }
    };
  
    return (
      <>
        <ConfirmationModal
          isOpen={isConfirmModalOpen}
          onClose={() => setIsConfirmModalOpen(false)}
          onConfirm={handleClearArchive}
          lang={language}
        />
        <CreationModal
          isOpen={isCreationModalOpen}
          onClose={() => { setIsCreationModalOpen(false); setNoteToEdit(null); }}
          onSave={handleSave}
          mode={modalMode}
          lang={language}
          allCategories={categories}
          noteToEdit={noteToEdit}
        />
        <CategoryDetailModal
          isOpen={isCategoryModalOpen}
          onClose={() => setIsCategoryModalOpen(false)}
          category={selectedCategory}
          notesInCategory={notes.filter(note => note.tags.some(tag => tag.name === selectedCategory?.name))}
          onSave={handleUpdateCategory}
          onDelete={handleDeleteCategory}
          lang={language}
        />
        <Sidebar
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          lang={language}
          onActionButtonClick={handleActionButtonClick}
        />
        <main className="ml-20 lg:ml-24 transition-all duration-300">
          <Header lang={language} user={user} searchQuery={searchQuery} onSearchChange={setSearchQuery} />
          <div className="p-8">
            {renderContent()}
          </div>
        </main>
      </>
    );
};

// --- КОМПОНЕНТ СТРАНИЦЫ ВХОДА (LANDING PAGE) ---

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


// --- ГЛАВНЫЙ КОМПОНЕНТ ПРИЛОЖЕНИЯ ---

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  // Mock login/register handlers
  const handleLogin = (credentials) => {
    console.log('Logging in with', credentials);
    setUser({ name: 'Алекс', avatar: 'https://placehold.co/40x40/E2E8F0/4A5568?text=A' });
    setIsLoggedIn(true);
  };

  const handleRegister = (details) => {
    console.log('Registering with', details);
    setUser({ name: details.name, avatar: 'https://placehold.co/40x40/E2E8F0/4A5568?text=A' });
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  const handleUserUpdate = (newUserData) => {
      setUser(newUserData);
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen font-sans">
      {isLoggedIn ? (
        <Dashboard user={user} onUserUpdate={handleUserUpdate} onLogout={handleLogout} />
      ) : (
        <LandingPage onLogin={handleLogin} onRegister={handleRegister} />
      )}
    </div>
  );
}
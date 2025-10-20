import React, { useState } from 'react';

// === Раздел: Утилиты (Иконки) ===

const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 48 48">
    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
    <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
    <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.222,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
    <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571l6.19,5.238C42.021,35.596,44,30.138,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
  </svg>
);
const PlusIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>;
const PencilIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L15.232 5.232z" /></svg>;
const TrashIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>;
const LogoutIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>;
const ArrowRightIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>;
const FolderIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>;
const XIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>;


// Иконка звезды для избранного
const StarIcon = ({ fill = 'none' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" 
    className="h-4 w-4" 
    fill={fill === 'currentColor' ? 'currentColor' : 'none'} 
    viewBox="0 0 24 24" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round">
    {/* Чистый путь на основе Polygon, который не должен обрезаться */}
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);


// === Раздел: Компоненты Авторизации и Вступительной Страницы ===

// --- Компонент: Вступительная страница ---
const LandingPage = ({ onNavigateToAuth }) => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="relative w-full max-w-5xl h-[600px] grid lg:grid-cols-2 items-center bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="p-8 md:p-12 h-full flex flex-col justify-center text-center lg:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4 animate-fade-in-down">
                        Ваши идеи. <span className="text-blue-600">Организованно.</span>
                    </h1>
                    <p className="text-gray-600 text-lg mb-8 animate-fade-in-up">
                        Простое и удобное приложение для заметок, которое поможет вам сосредоточиться на главном.
                    </p>
                    <div className="flex justify-center lg:justify-start">
                        <button 
                            onClick={onNavigateToAuth}
                            className="flex items-center gap-2 py-3 px-8 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 animate-fade-in-up"
                            style={{ animationDelay: '0.2s' }}
                        >
                            Начать <ArrowRightIcon />
                        </button>
                    </div>
                </div>
                <div className="hidden lg:block h-full w-full relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-80"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop" 
                      alt="Рабочее место с заметками" 
                      className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

// --- Компонент: Форма входа ---
const LoginForm = ({ onSwitchToRegister, onLogin }) => {
  return (
    <div className="w-full animate-bounce-in">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">С возвращением!</h2>
      <p className="text-gray-600 mb-6">Пожалуйста, войдите в свой аккаунт.</p>
      <form onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="login-email">Email</label>
          <input className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition" id="login-email" type="email" placeholder="you@example.com"/>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="login-password">Пароль</label>
          <input className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition" id="login-password" type="password" placeholder="••••••••"/>
        </div>
        <button type="submit" className="w-full py-3 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Войти</button>
      </form>
      <div className="flex items-center my-4"><hr className="w-full border-gray-300" /><span className="px-2 text-sm text-gray-500">ИЛИ</span><hr className="w-full border-gray-300" /></div>
      <button onClick={onLogin} type="button" className="w-full py-3 font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400">
        <GoogleIcon /><span>Войти с Google</span>
      </button>
      <p className="text-center text-sm text-gray-600 mt-8">
        Еще нет аккаунта? <button onClick={onSwitchToRegister} className="font-medium text-blue-600 hover:underline focus:outline-none">Зарегистрироваться</button>
      </p>
    </div>
  );
};

// --- Компонент: Форма регистрации ---
const RegisterForm = ({ onSwitchToLogin }) => {
  return (
    <div className="w-full animate-bounce-in">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Создать аккаунт</h2>
      <p className="text-gray-600 mb-6">Присоединяйтесь к нам! Это быстро и легко.</p>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="register-email">Email</label>
            <input className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition" id="register-email" type="email" placeholder="you@example.com"/>
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="register-password">Пароль</label>
            <input className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition" id="register-password" type="password" placeholder="••••••••"/>
        </div>
        <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="confirm-password">Подтвердите пароль</label>
            <input className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition" id="confirm-password" type="password" placeholder="••••••••"/>
        </div>
        <button type="submit" className="w-full py-3 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Зарегистрироваться</button>
      </form>
      <p className="text-center text-sm text-gray-600 mt-8">
        Уже есть аккаунт? <button onClick={onSwitchToLogin} className="font-medium text-blue-600 hover:underline focus:outline-none">Войти</button>
      </p>
    </div>
  );
};

// --- Компонент: Страница авторизации ---
const AuthPage = ({ onLogin }) => {
    // Переключение между входом и регистрацией
    const [isLoginView, setIsLoginView] = useState(true);
    const switchToRegister = () => setIsLoginView(false);
    const switchToLogin = () => setIsLoginView(true);

    return (
        <div className="min-h-screen flex items-center justify-center p-4 animate-fade-in">
            <div className="grid lg:grid-cols-2 max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="hidden lg:block relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-80"></div>
                    <img src="https://images.unsplash.com/photo-1585079542156-2755d9c8a094?q=80&w=1974&auto=format&fit=crop" alt="Абстрактный фон" className="w-full h-full object-cover"/>
                    <div className="absolute inset-0 flex flex-col justify-end p-12 text-white">
                        <h1 className="text-4xl font-bold leading-tight mb-4">Начните свой путь с нами</h1>
                        <p className="text-lg">Откройте для себя мир новых возможностей.</p>
                    </div>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                    {isLoginView ? <LoginForm onSwitchToRegister={switchToRegister} onLogin={onLogin} /> : <RegisterForm onSwitchToLogin={switchToLogin} />}
                </div>
            </div>
        </div>
    );
};


// === Раздел: Компоненты Приложения Заметок ===

// --- Компонент: Модальное окно создания/редактирования заметки ---
const NoteModal = ({ note, onSave, onClose, folders }) => {
    const [title, setTitle] = useState(note?.title || '');
    const [content, setContent] = useState(note?.content || '');
    // Добавляем состояние для папки, по умолчанию 'all' или существующая папка
    const [folderId, setFolderId] = useState(note?.folderId || 'all'); 

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ ...note, title, content, folderId }); // Передаем ID папки
    };

    const availableFolders = folders.filter(f => f.id !== 'all');

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fade-in-fast">
            <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md m-4 animate-modal-pop">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">{note?.id ? 'Редактировать заметку' : 'Создать заметку'}</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="title">Заголовок</label>
                        <input id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="folder">Папка</label>
                        <select 
                            id="folder" 
                            value={folderId} 
                            onChange={(e) => setFolderId(e.target.value)} 
                            className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        >
                            <option value="all">Без папки</option>
                            {availableFolders.map(f => (
                                <option key={f.id} value={f.id}>{f.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="content">Содержание</label>
                        <textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition h-32 resize-none" required />
                    </div>
                    <div className="flex justify-end gap-4">
                        <button type="button" onClick={onClose} className="py-2 px-4 font-semibold text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">Отмена</button>
                        <button type="submit" className="py-2 px-4 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">Сохранить</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

// --- Компонент: Карточка заметки ---
const NoteCard = ({ note, onEdit, onDelete, onToggleFavorite, index, folderName }) => {
    // Функция для форматирования ISO-строки даты в понятный вид
    const formatDate = (isoString) => {
        const date = new Date(isoString);
        // Проверяем, что date валидна
        if (isNaN(date.getTime())) return 'Нет даты'; 
        return date.toLocaleDateString('ru-RU', { 
            year: 'numeric', month: 'short', day: 'numeric', 
            hour: '2-digit', minute: '2-digit' 
        });
    };

    return (
        // Используем animate-card-slide для плавного появления с задержкой
        <div 
            className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition-shadow animate-card-slide"
            style={{ animationDelay: `${index * 0.05}s` }}
        >
            <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-gray-800">{note.title}</h3>
                <button 
                    onClick={() => onToggleFavorite(note.id, note.isFavorite)}
                    className={`rounded-full transition-colors flex items-center justify-center w-8 h-8 ${
                        note.isFavorite 
                            ? 'text-yellow-500 hover:text-yellow-600 bg-yellow-100' 
                            : 'text-gray-400 hover:text-yellow-500 hover:bg-gray-50'
                    }`}
                    title={note.isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}
                >
                    <StarIcon fill={note.isFavorite ? 'currentColor' : 'none'} />
                </button>
            </div>
            <p className="text-gray-600 whitespace-pre-wrap flex-grow">{note.content}</p>
            
            <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center text-xs">
                <span className="text-gray-400">
                    {folderName && <span className="text-blue-600 font-medium mr-2">{folderName}</span>}
                    {formatDate(note.timestamp)}
                </span>
                <div className="flex justify-end gap-2">
                    <button onClick={() => onEdit(note)} className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-100 rounded-full transition-colors" title="Редактировать"><PencilIcon /></button>
                    <button onClick={() => onDelete(note.id)} className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-100 rounded-full transition-colors" title="Удалить"><TrashIcon /></button>
                </div>
            </div>
        </div>
    );
};

// --- Компонент: Боковое меню с папками ---
const FolderSidebar = ({ folders, currentFolderId, onSelectFolder, onAddFolder, onDeleteFolder }) => {
    const [newFolderName, setNewFolderName] = useState('');

    const handleAdd = () => {
        if (newFolderName.trim()) {
            onAddFolder(newFolderName.trim());
            setNewFolderName('');
        }
    };

    return (
        <div className="bg-white border-r border-gray-200 p-4 h-full flex flex-col animate-sidebar-slide">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Папки</h2>
            
            <div className="flex-grow space-y-1 overflow-y-auto pr-2">
                {folders.map(folder => (
                    <div 
                        key={folder.id}
                        className={`
                            flex justify-between items-center p-2 rounded-lg transition-colors cursor-pointer 
                            ${currentFolderId === folder.id 
                                ? 'bg-blue-100 text-blue-700 font-semibold' 
                                : 'text-gray-700 hover:bg-gray-50'
                            }
                        `}
                        onClick={() => onSelectFolder(folder.id)}
                    >
                        <div className="flex items-center gap-2 truncate">
                            <FolderIcon className="w-5 h-5" />
                            <span className="truncate">{folder.name}</span>
                        </div>
                        
                        {/* Кнопка удаления (только для пользовательских папок) */}
                        {!folder.isDefault && (
                            <button 
                                onClick={(e) => { e.stopPropagation(); onDeleteFolder(folder.id); }}
                                className="p-1 text-gray-400 hover:text-red-600 hover:bg-red-100 rounded-full transition-colors ml-2 flex-shrink-0"
                                title="Удалить папку"
                            >
                                <XIcon />
                            </button>
                        )}
                    </div>
                ))}
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200 flex flex-col gap-2">
                <input 
                    type="text" 
                    placeholder="Название новой папки" 
                    value={newFolderName}
                    onChange={(e) => setNewFolderName(e.target.value)}
                    onKeyPress={(e) => { if (e.key === 'Enter') handleAdd(); }}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button 
                    onClick={handleAdd}
                    className="w-full py-2 font-semibold text-white bg-green-500 rounded-lg hover:bg-green-600 transition-colors"
                >
                    Добавить папку
                </button>
            </div>
        </div>
    );
};

// --- Компонент: Главная страница заметок (на локальном состоянии) ---
const NotesPage = ({ onLogout }) => {
    // Исходные папки
    const initialFolders = [
        { id: 'all', name: 'Все заметки', isDefault: true },
        { id: 'work', name: 'Работа' },
        { id: 'personal', name: 'Личное' },
    ];
    // Мокированные данные для начала
    const [folders, setFolders] = useState(initialFolders);
    const [notes, setNotes] = useState([
        { id: 1, title: 'Идея для проекта', content: 'Создать приложение для управления задачами с использованием React и Tailwind CSS.', isFavorite: true, timestamp: new Date().toISOString(), folderId: 'work' },
        { id: 2, title: 'Список покупок', content: '- Молоко\n- Хлеб\n- Яйца', isFavorite: false, timestamp: new Date(Date.now() - 86400000).toISOString(), folderId: 'personal' },
        { id: 3, title: 'Цитата дня', content: '"Лучший способ предсказать будущее — это создать его." - Питер Друкер', isFavorite: false, timestamp: new Date(Date.now() - 172800000).toISOString(), folderId: 'all' },
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingNote, setEditingNote] = useState(null);
    const [sortBy, setSortBy] = useState('favorite'); 
    const [currentFolderId, setCurrentFolderId] = useState('all'); // ID выбранной папки

    // --- ЛОГИКА ЗАМЕТОК ---

    // 1. СОХРАНЕНИЕ / ОБНОВЛЕНИЕ ЗАМЕТКИ (CRUD: CREATE/UPDATE)
    const handleSaveNote = (savedNote) => {
        const noteData = {
            title: savedNote.title,
            content: savedNote.content,
            isFavorite: savedNote.isFavorite || false, 
            folderId: savedNote.folderId || 'all', // Используем переданный folderId
            timestamp: new Date().toISOString(), // Обновляем дату при сохранении
        };

        if (savedNote.id) {
            // UPDATE: Обновление существующей заметки
            setNotes(prevNotes => prevNotes.map(n => 
                n.id === savedNote.id ? { ...n, ...noteData } : n
            ));
        } else {
            // CREATE: Создание новой заметки
            setNotes(prevNotes => [{ ...noteData, id: Date.now() }, ...prevNotes]);
        }
        
        setIsModalOpen(false);
        setEditingNote(null);
    };
    
    // 2. УДАЛЕНИЕ ЗАМЕТКИ (CRUD: DELETE)
    const handleDelete = (id) => {
        setNotes(prevNotes => prevNotes.filter(n => n.id !== id));
    };
    
    // 3. ПЕРЕКЛЮЧЕНИЕ ИЗБРАННОГО (CRUD: UPDATE)
    const handleToggleFavorite = (id, currentStatus) => {
        setNotes(prevNotes => prevNotes.map(n => 
            n.id === id ? { ...n, isFavorite: !currentStatus } : n
        ));
    };

    // --- Вспомогательные функции UI (для модального окна и FAB) ---
    const handleEdit = (note) => {
        setEditingNote(note);
        setIsModalOpen(true);
    };

    const handleAddNew = () => {
        // Устанавливаем note=null для создания новой заметки
        setEditingNote(null);
        setIsModalOpen(true);
    };
    // --- КОНЕЦ Вспомогательных функций UI ---


    // --- ЛОГИКА ПАПОК ---

    const handleAddFolder = (name) => {
        const newFolder = {
            id: Date.now().toString(),
            name,
        };
        setFolders(prev => [...prev, newFolder]);
    };

    const handleDeleteFolder = (id) => {
        // Удаляем папку
        setFolders(prev => prev.filter(f => f.id !== id));
        // Перемещаем заметки из удаленной папки в папку 'all'
        setNotes(prev => prev.map(n => 
            n.folderId === id ? { ...n, folderId: 'all' } : n
        ));
        // Сбрасываем фильтр, если удалили активную папку
        if (currentFolderId === id) {
            setCurrentFolderId('all');
        }
    };
    
    // --- ФИЛЬТРАЦИЯ И СОРТИРОВКА ---

    const getFilteredAndSortedNotes = () => {
        // 1. Фильтрация
        let filtered = notes;
        if (currentFolderId !== 'all') {
            filtered = notes.filter(note => note.folderId === currentFolderId);
        }
        
        // 2. Сортировка
        const sorted = [...filtered];
        
        sorted.sort((a, b) => {
            // Приоритет: Избранное всегда вверху
            if (a.isFavorite && !b.isFavorite) return -1;
            if (!a.isFavorite && b.isFavorite) return 1;
            
            // Внутри групп сортируем по выбранному критерию
            if (sortBy === 'date') {
                return new Date(b.timestamp) - new Date(a.timestamp); // Новые сверху
            }
            if (sortBy === 'title') {
                return a.title.localeCompare(b.title); // А-Я
            }
            return 0; // Сохраняем порядок
        });

        return sorted;
    };

    const sortedNotes = getFilteredAndSortedNotes();
    const currentFolderName = folders.find(f => f.id === currentFolderId)?.name || 'Все заметки';

    return (
        <div className="min-h-screen bg-gray-100 animate-fade-in">
            <header className="bg-white shadow-sm p-4 flex flex-col sm:flex-row justify-between items-center sticky top-0 z-20">
                <h1 className="text-2xl font-bold text-gray-800 mb-2 sm:mb-0">
                    Приложение для Заметок
                </h1>
                <div className="flex items-center gap-4">
                    {/* Выбор сортировки */}
                    <div className="flex items-center gap-2">
                        <label htmlFor="sort-select" className="text-sm text-gray-500 hidden sm:block">Сортировать:</label>
                        <select 
                            id="sort-select" 
                            value={sortBy} 
                            onChange={(e) => setSortBy(e.target.value)}
                            className="p-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:ring-blue-500 focus:border-blue-500 transition cursor-pointer"
                        >
                            <option value="favorite">Избранное (Сначала)</option>
                            <option value="date">Дате (Новые)</option>
                            <option value="title">Названию (А-Я)</option>
                        </select>
                    </div>

                    <button onClick={onLogout} className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-100 rounded-full transition-colors" title="Выйти">
                        <LogoutIcon />
                    </button>
                </div>
            </header>
            
            <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] min-h-[calc(100vh-68px)]">
                {/* Боковая панель (Сайдбар) */}
                <div className="hidden md:block sticky top-16 h-[calc(100vh-68px)]">
                    <FolderSidebar 
                        folders={folders}
                        currentFolderId={currentFolderId}
                        onSelectFolder={setCurrentFolderId}
                        onAddFolder={handleAddFolder}
                        onDeleteFolder={handleDeleteFolder}
                    />
                </div>
                
                {/* Основное содержимое */}
                <main className="p-4 md:p-8">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">{currentFolderName}</h2>
                        
                        {
                            sortedNotes.length === 0 ? (
                                <div className="text-center p-10 text-gray-500 bg-white rounded-xl shadow-lg">
                                    <h3 className="text-xl font-semibold mb-2">Заметок в этой папке пока нет!</h3>
                                    <p>Нажмите на синюю кнопку "+" внизу, чтобы добавить новую заметку.</p>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                    {sortedNotes.map((note, index) => (
                                        <NoteCard 
                                            key={note.id} 
                                            note={note} 
                                            onEdit={handleEdit} 
                                            onDelete={handleDelete}
                                            onToggleFavorite={handleToggleFavorite}
                                            index={index} // Передача индекса для задержки анимации
                                            folderName={folders.find(f => f.id === note.folderId)?.name}
                                        />
                                    ))}
                                </div>
                            )
                        }
                    </div>
                </main>
            </div>

            {/* Кнопка добавления новой заметки */}
            <button onClick={handleAddNew} className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 z-30" title="Добавить заметку">
                <PlusIcon />
            </button>
            {isModalOpen && <NoteModal note={editingNote} onSave={handleSaveNote} onClose={() => setIsModalOpen(false)} folders={folders} />}
        </div>
    );
};


// === Главный компонент: Роутер приложения (без Firebase) ===

export default function App() {
  const [currentView, setCurrentView] = useState('landing'); 
  
  const renderContent = () => {
    
    switch(currentView) {
        case 'auth':
            return <AuthPage onLogin={() => setCurrentView('notes')} />;
        case 'notes':
            // Передаем только onLogout, так как данные локальны
            return <NotesPage onLogout={() => setCurrentView('auth')} />;
        case 'landing':
        default:
            return <LandingPage onNavigateToAuth={() => setCurrentView('auth')} />;
    }
  }

  return (
    <main className="bg-gray-100 font-sans">
      {renderContent()}

      {/* Глобальные стили для анимаций и шрифтов */}
      <style>{`
        /* Основные анимации */
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        
        /* Появление модального окна (Pop) */
        @keyframes modalPop {
          0% { opacity: 0; transform: scale(0.9) translateY(20px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }

        /* Появление формы авторизации (Bounce-In) */
        @keyframes bounceIn {
          0% { opacity: 0; transform: scale(0.8) translateY(20px); }
          80% { opacity: 1; transform: scale(1.02); }
          100% { transform: scale(1); }
        }

        /* Появление элементов списка (Slide up) */
        @keyframes cardSlide {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
        }
        
        /* Появление бокового меню */
        @keyframes sidebarSlide {
            0% { opacity: 0; transform: translateX(-20px); }
            100% { opacity: 1; transform: translateX(0); }
        }

        /* Плавные анимации лендинга */
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        /* Применение классов */
        .animate-fade-in { animation: fadeIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94); }
        .animate-modal-pop { animation: modalPop 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards; }
        .animate-bounce-in { animation: bounceIn 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; }
        .animate-card-slide { animation: cardSlide 0.4s ease-out forwards; opacity: 0; } /* opacity: 0 важен для задержки */
        .animate-sidebar-slide { animation: sidebarSlide 0.4s ease-out forwards; }


        /* Сохраняем анимации лендинга */
        .animate-fade-in-down { animation: fadeInDown 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; }
        .animate-fade-in-up { animation: fadeInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; }


        body { font-family: 'Inter', sans-serif; }
      `}</style>
       <link rel="preconnect" href="https://fonts.googleapis.com"/>
       <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
       <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"/>
    </main>
  );
}
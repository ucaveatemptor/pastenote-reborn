import React, { useState } from 'react';

// --- Иконки (SVG-компоненты) ---
// Для простоты и самодостаточности файла, иконки определены как React-компоненты.
const NotesIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  </svg>
);

const TagIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5a2 2 0 012 2v5a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2zm0 0v11a2 2 0 002 2h5a2 2 0 002-2v-5a2 2 0 00-2-2H7z" />
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

const BellIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
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

const DeleteIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.134-2.033-2.134H8.033c-1.12 0-2.033.954-2.033 2.134v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
    </svg>
);

// --- Моковые данные ---
const mockNotes = [
  {
    id: 1,
    title: 'Идеи для квартального отчета',
    content: 'Необходимо проанализировать данные по продажам за Q3, выделить ключевые метрики роста и подготовить визуализацию для презентации...',
    tags: [{ name: 'Работа', color: 'blue' }, { name: 'Отчеты', color: 'green' }],
    isPinned: true,
    isFavorite: true,
  },
  {
    id: 2,
    title: 'План на выходные',
    content: '1. Сходить в спортзал. 2. Прочитать новую книгу по дизайну. 3. Встретиться с друзьями в центре города...',
    tags: [{ name: 'Личное', color: 'purple' }],
    isPinned: false,
    isFavorite: false,
  },
  {
    id: 3,
    title: 'Рецепт пасты Карбонара',
    content: 'Ингредиенты: спагетти, гуанчале, яичные желтки, сыр пекорино романо, черный перец. Главное — не добавлять сливки!',
    tags: [{ name: 'Рецепты', color: 'yellow' }],
    isPinned: false,
    isFavorite: true,
  },
  {
    id: 4,
    title: 'Список покупок',
    content: 'Молоко, хлеб, яйца, авокадо, куриное филе, оливковое масло.',
    tags: [{ name: 'Быт', color: 'red' }],
    isPinned: false,
    isFavorite: false,
  },
    {
    id: 5,
    title: 'Мысли о редизайне проекта',
    content: 'Обновить цветовую палитру, использовать более современный шрифт, упростить навигацию. Собрать референсы с Dribbble.',
    tags: [{ name: 'Проект X', color: 'indigo' }, { name: 'Дизайн', color: 'pink' }],
    isPinned: true,
    isFavorite: false,
  },
  {
    id: 6,
    title: 'Подготовка к отпуску',
    content: 'Купить билеты, забронировать отель, составить маршрут по достопримечательностям, собрать аптечку.',
    tags: [{ name: 'Путешествия', color: 'teal' }],
    isPinned: false,
    isFavorite: true,
  },
];

// --- Компоненты UI ---

const Sidebar = ({ activeItem, setActiveItem }) => {
  const menuItems = [
    { id: 'notes', icon: NotesIcon, label: 'Заметки' },
    { id: 'tags', icon: TagIcon, label: 'Теги' },
    { id: 'favorites', icon: StarIcon, label: 'Избранное' },
    { id: 'archive', icon: ArchiveIcon, label: 'Архив' },
    { id: 'settings', icon: SettingsIcon, label: 'Настройки' },
  ];

  return (
    <aside className="bg-white w-20 lg:w-24 h-screen flex flex-col items-center py-8 fixed left-0 top-0 border-r border-gray-200">
      <div className="text-blue-600 font-bold text-2xl">N.</div>
      <nav className="flex flex-col items-center gap-6 mt-16 flex-grow">
        {menuItems.map(item => (
          <button
            key={item.id}
            onClick={() => setActiveItem(item.id)}
            className={`p-3 rounded-xl transition-colors duration-200 ${
              activeItem === item.id 
                ? 'bg-blue-100 text-blue-600' 
                : 'text-gray-500 hover:bg-gray-100'
            }`}
            aria-label={item.label}
          >
            <item.icon className="w-6 h-6" />
          </button>
        ))}
      </nav>
      <button className="bg-blue-600 text-white w-12 h-12 rounded-2xl flex items-center justify-center hover:bg-blue-700 transition-colors shadow-lg hover:shadow-blue-300">
        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </button>
    </aside>
  );
};

const Header = () => {
  return (
    <header className="bg-gray-50/80 backdrop-blur-sm sticky top-0 z-10 py-6 px-8">
        <div className="flex justify-between items-center">
            <div>
                <h1 className="text-2xl font-bold text-gray-800">Hello, Alex!</h1>
                <p className="text-gray-500">Here are your latest notes.</p>
            </div>
            <div className="flex items-center gap-6">
                <div className="relative">
                    <SearchIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2"/>
                    <input type="text" placeholder="Search notes..." className="bg-white border border-gray-200 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"/>
                </div>
                <button className="text-gray-500 hover:text-gray-800 relative">
                    <BellIcon className="w-6 h-6"/>
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
                <img src="https://placehold.co/40x40/E2E8F0/4A5568?text=A" alt="User Profile" className="w-10 h-10 rounded-full object-cover"/>
            </div>
        </div>
    </header>
  );
};

const StatCard = ({ title, value, icon, color }) => {
    const colors = {
        blue: 'bg-blue-100 text-blue-600',
        green: 'bg-green-100 text-green-600',
        yellow: 'bg-yellow-100 text-yellow-600',
        purple: 'bg-purple-100 text-purple-600',
    };
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex items-start justify-between">
            <div>
                <p className="text-gray-500 text-sm">{title}</p>
                <p className="text-2xl font-bold text-gray-800 mt-1">{value}</p>
            </div>
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${colors[color]}`}>
                {icon}
            </div>
        </div>
    );
};

const NoteTag = ({ tag }) => {
    const tagColors = {
        blue: 'bg-blue-100 text-blue-700',
        green: 'bg-green-100 text-green-700',
        purple: 'bg-purple-100 text-purple-700',
        yellow: 'bg-yellow-100 text-yellow-700',
        red: 'bg-red-100 text-red-700',
        indigo: 'bg-indigo-100 text-indigo-700',
        pink: 'bg-pink-100 text-pink-700',
        teal: 'bg-teal-100 text-teal-700',
    };
    return (
        <span className={`text-xs font-medium px-2 py-1 rounded-md ${tagColors[tag.color] || 'bg-gray-100 text-gray-700'}`}>
            {tag.name}
        </span>
    );
};

const NoteCard = ({ note }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full">
        <div className="flex justify-between items-start mb-3">
            <h3 className="font-bold text-gray-800 flex-grow pr-2">{note.title}</h3>
            {note.isPinned && <PinIcon className="w-5 h-5 text-gray-400 flex-shrink-0" />}
        </div>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{note.content}</p>
        <div className="flex items-center justify-between">
            <div className="flex gap-2 flex-wrap">
                {note.tags.map(tag => <NoteTag key={tag.name} tag={tag} />)}
            </div>
            <div className="flex items-center gap-2">
                <button className="text-gray-400 hover:text-blue-600 transition-colors">
                    <EditIcon className="w-5 h-5"/>
                </button>
                <button className="text-gray-400 hover:text-red-600 transition-colors">
                    <DeleteIcon className="w-5 h-5"/>
                </button>
                 <button className={`transition-colors ${note.isFavorite ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'}`}>
                    <StarIcon className="w-5 h-5" solid={note.isFavorite} />
                </button>
            </div>
        </div>
    </div>
  );
};


// --- Основной компонент приложения ---
export default function App() {
  const [activeItem, setActiveItem] = useState('notes');

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-900">
      <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
      
      <main className="ml-20 lg:ml-24">
        <Header />
        
        <div className="p-8">
            {/* Секция статистики */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                <StatCard title="Total Notes" value="128" icon={<NotesIcon className="w-5 h-5" />} color="blue"/>
                <StatCard title="Pinned" value="4" icon={<PinIcon className="w-5 h-5" />} color="green"/>
                <StatCard title="Favorites" value="12" icon={<StarIcon className="w-5 h-5" />} color="yellow"/>
                <StatCard title="Drafts" value="7" icon={<EditIcon className="w-5 h-5" />} color="purple"/>
            </section>
            
            {/* Секция недавних заметок */}
            <section>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-800">Recent Notes</h2>
                <a href="#" className="text-sm font-medium text-blue-600 hover:underline">See all</a>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {mockNotes.map(note => (
                  <NoteCard key={note.id} note={note} />
                ))}
              </div>
            </section>
        </div>
      </main>
    </div>
  );
}
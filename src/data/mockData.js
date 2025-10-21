import { FolderIcon } from '../components/Icons';

export const mockNotes = [
  { id: 1, title: 'Идеи для квартального отчета с очень длинным названием, которое не помещается в одну строку', content: 'Необходимо проанализировать данные по продажам за Q3, выделить ключевые метрики роста и подготовить визуализацию для презентации...', tags: [{ name: 'Работа', color: 'blue' }], isPinned: true, isFavorite: true },
  { id: 2, title: 'План на выходные', content: '1. Сходить в спортзал. 2. Прочитать новую книгу по дизайну. 3. Встретиться с друзьями в центре города...', tags: [{ name: 'Личное', color: 'purple' }], isPinned: false, isFavorite: false },
  { id: 3, title: 'Рецепт пасты Карбонара', content: 'Ингредиенты: спагетти, гуанчале, яичные желтки, сыр пекорино романо, черный перец. Главное — не добавлять сливки!', tags: [{ name: 'Рецепты', color: 'yellow' }], isPinned: false, isFavorite: true },
  { id: 4, title: 'Список покупок', content: 'Молоко, хлеб, яйца, авокадо, куриное филе, оливковое масло.', tags: [{ name: 'Быт', color: 'red' }], isPinned: false, isFavorite: false },
  { id: 5, title: 'Мысли о редизайне проекта', content: 'Обновить цветовую палитру, использовать более современный шрифт, упростить навигацию. Собрать референсы с Dribbble.', tags: [{ name: 'Проект X', color: 'indigo' }, { name: 'Дизайн', color: 'pink' }], isPinned: true, isFavorite: false },
  { id: 6, title: 'Подготовка к отпуску', content: 'Купить билеты, забронировать отель, составить маршрут по достопримечательностям, собрать аптечку.', tags: [{ name: 'Путешествия', color: 'teal' }], isPinned: false, isFavorite: true },
];

export const initialCategories = [
  { id: 1, name: 'Работа', color: 'blue', icon: FolderIcon },
  { id: 2, name: 'Личное', color: 'purple', icon: FolderIcon },
  { id: 3, name: 'Очень длинное название категории для проверки обрезки текста', color: 'yellow', icon: FolderIcon },
  { id: 4, name: 'Проект X', color: 'indigo', icon: FolderIcon },
  { id: 5, name: 'Путешествия', color: 'teal', icon: FolderIcon },
  { id: 6, name: 'Быт', color: 'red', icon: FolderIcon },
  { id: 7, name: 'Дизайн', color: 'pink', icon: FolderIcon },
];
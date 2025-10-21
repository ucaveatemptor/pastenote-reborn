import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import NotesPage from './NotesPage';
import FavoritesPage from './FavoritesPage';
import TagsPage from './TagsPage';
import ArchivePage from './ArchivePage';
import SettingsPage from './SettingsPage';
import ConfirmationModal from './modals/ConfirmationModal';
import CreationModal from './modals/CreationModal';
import CategoryDetailModal from './modals/CategoryDetailModal';
import { mockNotes, initialCategories } from '../data/mockData';
import { translations } from '../utils/translations';
import { FolderIcon } from './Icons';

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

export default Dashboard;
import React from 'react';
import { translations } from '../utils/translations';
import PageTitle from './PageTitle';
import CategoryCard from './CategoryCard';

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

export default TagsPage;
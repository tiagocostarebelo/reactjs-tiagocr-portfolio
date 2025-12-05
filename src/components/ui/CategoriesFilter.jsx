import React from 'react'

const CategoriesFilter = ({ activeCategory, setActiveCategory, allCategories }) => {
    return (
        <>
            <div className="hidden md:flex gap-2 justify-start mb-12">
                {allCategories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-3 py-1 text-base cursor-pointer rounded-full transition ${activeCategory === cat
                            ? "bg-mustard text-black "
                            : "text-gray-600 border border-gray-300 hover:text-black"}`}>
                        {cat}
                    </button>
                ))}
            </div>
            <div className="md:hidden mb-8">
                <select
                    value={activeCategory}
                    onChange={(e) => setActiveCategory(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-3 bg-white">
                    {allCategories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                    ))}
                </select>
            </div>
        </>
    )
}

export default CategoriesFilter
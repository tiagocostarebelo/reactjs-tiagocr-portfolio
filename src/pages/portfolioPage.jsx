import React from 'react'
import { useState } from 'react';
import Button from '../components/ui/Button';
import projectDetails from '../content/projects';
import ProjectCard from '../components/ui/ProjectCard';
import Contact from '../components/sections/Contact';
import FeaturedProject from '../components/ui/FeaturedProject';

const PortfolioPage = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const featuredProject = projectDetails.find(proj => proj.isFeatured) ?? projectDetails[0];

    const allCategories = ["All", ...new Set(projectDetails.flatMap(project => project.category))];
    const filteredProjects = activeCategory === "All" ? projectDetails : projectDetails.filter(project => project.category.includes(activeCategory));


    return (
        <>
            <section className="w-full h-auto py-24 bg-white space-y-12">
                <h1 className="text-3xl font-bold uppercase tracking-tight leading-tight">Work that combines identity, design, and development</h1>
                <div className="space-y-6">
                    <p className="text-base text-gray-dark md:w-[1200px]">A curated selection of brand identities, websites, and digital projects — crafted with clarity, intention, and care.</p>
                </div>
            </section>
            <FeaturedProject project={featuredProject} />


            <section className="w-full h-auto flex flex-col text-center py-24">
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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {filteredProjects
                        .filter(proj => proj.id !== featuredProject.id)
                        .map(proj => <ProjectCard key={proj.id} project={proj} />)}
                </div>
            </section>
            <Contact
                heading="Let's Talk"
                text="Whether you need help with your brand, website, or support on a digital project, I’m here to help bring clarity and direction to your idea."
                buttonLabel="Get in Touch"
            />
        </>
    )
}

export default PortfolioPage;
import React from 'react'
import { useState } from 'react';
import Button from '../components/ui/Button';
import projectDetails from '../content/projects';
import ProjectCard from '../components/ui/ProjectCard';
import Contact from '../components/sections/Contact';
import FeaturedProject from '../components/ui/FeaturedProject';
import CategoriesFilter from '../components/ui/CategoriesFilter';
import SectionsHero from '../components/ui/SectionsHero';

const PortfolioPage = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const featuredProject = projectDetails.find(proj => proj.isFeatured) ?? projectDetails[0];

    const allCategories = ["All", ...new Set(projectDetails.flatMap(project => project.category))];
    const filteredProjects = activeCategory === "All" ? projectDetails : projectDetails.filter(project => project.category.includes(activeCategory));


    return (
        <>
            <SectionsHero
                buttonLabel='' />


            <FeaturedProject project={featuredProject} />

            <section className="w-full h-auto flex flex-col text-center py-24">
                <CategoriesFilter
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                    allCategories={allCategories}
                />

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
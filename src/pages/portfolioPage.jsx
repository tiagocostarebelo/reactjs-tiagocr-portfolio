import React from 'react'
import { useState } from 'react';
import Button from '../components/ui/Button';
import projectDetails from '../content/projects';
import ProjectCard from '../components/ui/ProjectCard';
import Contact from '../components/sections/Contact';

const PortfolioPage = () => {
    const featuredProject = projectDetails.find(proj => proj.isFeatured) ?? projectDetails[0];

    return (
        <>
            <section className="w-full h-auto py-24 bg-white space-y-12">
                <h1 className="text-3xl font-bold uppercase tracking-tight leading-tight">Work that combines identity, design, and development</h1>
                <div className="space-y-6">
                    <p className="text-base text-gray-dark md:w-[1200px]">A curated selection of brand identities, websites, and digital projects — crafted with clarity, intention, and care.</p>
                </div>
            </section>

            <section className="w-full h-auto py-24 bg-gray-light">
                {/* outside container */}
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                    {/* left column */}
                    <div className="flex flex-col justify-center order-2 md:order-2 text-left">
                        <h2 className="text-2xl md:text-3xl font-bold text-black-rich uppercase mb-6 tracking-tight leading-tight">{featuredProject.title}</h2>
                        <div className="space-y-6 leading-relaxed max-w-xl">
                            <p className="text-base text-gray-dark">{featuredProject.shortDescription}</p>
                        </div>
                        <div className="mt-12 md:mt-14">
                            <Button as="link" to={featuredProject.url} className="btn-primary">View Case Study</Button>
                        </div>
                    </div>
                    {/* right column */}
                    <div className="order-1 md:order-1 h-full min-h-[400px] w-full relative group overflow-hidden rounded-lg">
                        <img src={featuredProject.thumbnail} alt={featuredProject.id} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105" />
                    </div>
                </div>
            </section>

            <section className="w-full h-auto flex flex-col text-center py-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {projectDetails
                        .filter(proj => proj.id !== featuredProject.id)
                        .map(proj => <ProjectCard key={proj.id} project={proj} />)}
                </div>
            </section>
            <Contact
                heading="Let's work together!"
                text="Whether you need help with your brand, website, or support on a digital project, I’m here to help bring clarity and direction to your idea."
                buttonLabel="Get in Touch"
            />
        </>
    )
}

export default PortfolioPage;
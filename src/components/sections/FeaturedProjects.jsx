import React from 'react'
import Button from '../ui/Button'
import ProjectCard from '../ui/ProjectCard'
import FadeIn from "../animation/FadeIn"

const FeaturedProjects = ({ projectDetails }) => {
    const projectCount = projectDetails.length

    // Determine grid layout based on number of projects
    const getGridClasses = () => {
        if (projectCount === 1) {
            return "grid grid-cols-1 md:grid-cols-1 gap-12 mb-12 md:max-w-md md:mx-auto"
        } else if (projectCount === 2) {
            return "grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 md:max-w-4xl md:mx-auto"
        } else {
            return "grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
        }
    }

    return (
        <section className="bg-white py-24">

            <div className="mb-14">
                <p className="font-body text-xs tracking-[0.22em] uppercase text-gray-dark/40 mb-8">
                    Selected Work
                </p>
                <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl uppercase tracking-tight leading-none text-black-rich max-w-5xl">
                    A Selection of Recent Work From Brand Identity, Web Design, and Web Development
                </h2>
            </div>

            <div className={getGridClasses()}>
                {projectDetails.map((proj, index) =>
                    <FadeIn key={proj.id} delay={index * 120} className="h-full">
                        <ProjectCard project={proj} compact={projectCount < 3} />
                    </FadeIn>
                )}
            </div>

            <div className="flex justify-end">
                <Button as="link" to="/portfolio" className="btn-ghost w-full md:w-auto">
                    View full Portfolio
                </Button>
            </div>
        </section>
    )
}

export default FeaturedProjects


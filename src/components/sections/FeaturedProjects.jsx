import React from 'react'
import Button from '../ui/Button'
import ProjectCard from '../ui/ProjectCard'
import FadeIn from "../animation/FadeIn"

const FeaturedProjects = ({ projectDetails }) => {
    return (
        <section className="w-full h-auto flex flex-col text-center py-24">
            <FadeIn>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight uppercase mb-24">A selection of recent work from brand identity, web design, and web development</h2>

            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                {projectDetails.map((proj, index) =>
                    <FadeIn key={proj.id} delay={index * 120} className="h-full">
                        <ProjectCard project={proj} />
                    </FadeIn>
                )}
            </div>
            <div className="flex justify-end">
                <Button as="link" to="/portfolio" className="btn-primary w-full md:w-auto">View full Portfolio</Button>
            </div>
        </section>
    )
}

export default FeaturedProjects
import React from 'react'
import Button from '../ui/Button'
import ProjectCard from '../ui/ProjectCard'

const FeaturedProjects = () => {
    return (
        <section className="w-full h-auto flex flex-col text-center py-24">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight uppercase mb-24">A selection of recent work from brand identity, web design, and web development</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
            <div className="items-right">
                <Button as="link" to="/portfolio" className="btn-primary w-full md:w-auto">View full Portfolio</Button>
            </div>
        </section>
    )
}

export default FeaturedProjects
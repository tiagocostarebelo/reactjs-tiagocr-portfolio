import React from 'react'
import Button from './Button'

const FeaturedProject = ({ project }) => {
    return (
        <section className="w-full h-auto py-24 bg-gray-light">
            {/* outside container */}
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                {/* left column */}
                <div className="flex flex-col justify-center order-2 md:order-2 text-left">
                    <h2 className="text-2xl md:text-3xl font-bold text-black-rich uppercase mb-6 tracking-tight leading-tight">{project.title}</h2>
                    <div className="space-y-6 leading-relaxed max-w-xl">
                        <p className="text-base text-gray-dark">{project.shortDescription}</p>
                    </div>
                    <div className="mt-12 md:mt-14">
                        <Button as="link" to={`/portfolio/${project.slug}`} className="btn-primary">View Work</Button>
                    </div>
                </div>
                {/* right column */}
                <div className="order-1 md:order-1 h-full min-h-[400px] w-full relative group overflow-hidden rounded-lg">
                    <img src={project.thumbnail} alt={project.id} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105" />
                </div>
            </div>
        </section>
    )
}

export default FeaturedProject
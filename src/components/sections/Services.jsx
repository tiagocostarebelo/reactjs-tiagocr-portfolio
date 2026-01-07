import React from 'react'
import ServiceCard from '../ui/ServiceCard'
import services from '../../content/services'
import FadeIn from "../animation/FadeIn"

const Services = () => {
    return (
        <section className="w-full h-auto text-center py-24 bg-gray-light">
            <FadeIn>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight uppercase mb-12">I help businesses elevate their brands with strong visuals and modern web experiences.</h2>
            </FadeIn>
            <div className="flex flex-col lg:flex-row gap-x-10">
                {services.map(({ title, description }, index) => (
                    <FadeIn key={title} delay={index * 120} className="flex-1">
                        <ServiceCard title={title} description={description} borderColor='border-teal' />
                    </FadeIn>
                ))}

            </div>
        </section>
    )
}

export default Services
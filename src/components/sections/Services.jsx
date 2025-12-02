import React from 'react'
import ServiceCard from '../ui/ServiceCard'
import services from '../../content/services'

const Services = () => {
    return (
        <section className="w-full h-auto text-center pb-24 bg-gray-light">
            <h2 className="text-2xl md:text-3xl font-bold uppercase my-24">I help businesses elevate their brands with strong visuals and modern web experiences.</h2>
            <div className="flex flex-col lg:flex-row gap-x-10">
                {services.map(({ title, description }) => (
                    <ServiceCard key={title} title={title} description={description} />
                ))}

            </div>
        </section>
    )
}

export default Services
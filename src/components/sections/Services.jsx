import React from 'react'

const Services = () => {
    return (
        <section className="w-full h-auto text-center pb-24 bg-gray-light">
            <h2 className="text-2xl md:text-3xl font-bold uppercase my-24">I help businesses elevate their brands with strong visuals and modern web experiences.</h2>
            <div className="flex flex-col lg:flex-row gap-x-10">
                <div className="my-8 flex-1 group">
                    <h3 className="text-2xl font-bold uppercase transition-transform duration-700 ease-out group-hover:scale-105">Brand Design</h3>
                    <p className="text-base text-justify transition-transform duration-700 ease-out group-hover:scale-105">Distinctive logos and identity systems built with clarity and personality. From strategy to final assets, everything is crafted to feel intentional and adaptable.</p>
                </div>
                <div className="my-8 flex-1 group">
                    <h3 className="text-2xl font-bold uppercase transition-transform duration-700 ease-out group-hover:scale-105">Web Development</h3>
                    <p className="text-base text-justify transition-transform duration-700 ease-out group-hover:scale-105">Thoughtful interfaces and fast, responsive websites using modern tools like React, Tailwind, and page animations. Designed to look great and perform even better.</p>
                </div>
                <div className="my-8 flex-1 group">
                    <h3 className="text-2xl font-bold uppercase transition-transform duration-700 ease-out group-hover:scale-105">Email Development</h3>
                    <p className="text-base text-justify transition-transform duration-700 ease-out group-hover:scale-105">Thoughtful interfaces and fast, responsive websites using modern tools like React, Tailwind, and page animations. Designed to look great and perform even better.</p>
                </div>
            </div>
        </section>
    )
}

export default Services
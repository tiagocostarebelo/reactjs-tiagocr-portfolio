import React from 'react'
import { useState } from 'react';
import Button from '../components/ui/Button';
import projectDetails from '../content/projects';

const PortfolioPage = () => {
    const [featured, setFeatured] = useState(() => projectDetails.find((proj) => proj.featured))
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
                        <h2 className="text-2xl md:text-3xl font-bold text-black-rich uppercase mb-6 tracking-tight leading-tight">{featured.title}</h2>
                        <div className="space-y-6 leading-relaxed max-w-xl">
                            <p className="text-base text-gray-dark">{featured.shortDescription}</p>
                        </div>
                        <div className="mt-12 md:mt-14">
                            <Button as="link" to={featured.url} className="btn-primary">View Case Study</Button>
                        </div>
                    </div>
                    {/* right column */}
                    <div className="order-1 md:order-1 h-full min-h-[400px] w-full relative group overflow-hidden rounded-lg">
                        <img src={featured.thumbnail} alt={featured.id} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default PortfolioPage;
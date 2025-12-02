import React from 'react';
import Hero from '../components/sections/Hero';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import Services from '../components/sections/Services';
import About from '../components/sections/About';
import Contact from '../components/sections/Contact';

const HomePage = () => {
    return (
        <>
            <Hero />
            <FeaturedProjects />
            <Services />
            <About />
            <Contact />
        </>
    )
}

export default HomePage
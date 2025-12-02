import React from 'react';
import Hero from '../components/sections/Hero';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import Services from '../components/sections/Services';
import About from '../components/sections/About';

const HomePage = () => {
    return (
        <>
            <Hero />
            <FeaturedProjects />
            <Services />
            <About />
            <section>
                <h2>Let’s build something great.</h2>
                <p>Whether you need a new brand, a website, or support on a digital project, I’m always open to conversations.</p>
                <button>Get in Touch</button>
            </section>
        </>
    )
}

export default HomePage
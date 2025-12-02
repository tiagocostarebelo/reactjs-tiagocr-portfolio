import React from 'react';
import Hero from '../components/sections/Hero';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import Services from '../components/sections/Services';

const HomePage = () => {
    return (
        <>
            <Hero />
            <FeaturedProjects />
            <Services />
            <section>
                <h2>A designer-dev with a focus on clarity and craft.</h2>
                <p>I’m a Designer turned Full Stack Developer who combines brand thinking with clean, modular code. I care about usability, consistency, and the small details that make something feel right.

                    I work closely with clients to create simple, intentional experiences — whether that’s a brand identity, a marketing site, or a full-stack web app.</p>
                <button>More about me</button>
            </section>
            <section>
                <h2>Let’s build something great.</h2>
                <p>Whether you need a new brand, a website, or support on a digital project, I’m always open to conversations.</p>
                <button>Get in Touch</button>
            </section>
        </>
    )
}

export default HomePage
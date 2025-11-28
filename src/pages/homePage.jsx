import React from 'react';
import Hero from '../components/sections/Hero';

const HomePage = () => {
    return (
        <>
            <Hero />
            <section>
                <h2>A selection of recent work blending brand identity, web design, and clean, modular development.</h2>
                <button>View full Portfolio</button>
            </section>
            <section>
                <h2>I help businesses bring their ideas to life through strong visuals and functional, modern web experiences.</h2>
                <div>
                    <h3>Brand Design</h3>
                    <p>Distinctive logos and identity systems built with clarity and personality. From strategy to final assets, everything is crafted to feel intentional and adaptable.</p>
                </div>
                <div>
                    <h3>Web Design & Development</h3>
                    <p>Thoughtful interfaces and fast, responsive websites using modern tools like React, Tailwind, and page animations. Designed to look great and perform even better.</p>
                </div>
                <div>
                    <h3>Full Stack Development</h3>
                    <p>Custom builds powered by Node.js, Express. APIs, integrations, and backend logic that keep your product reliable, scalable, and secure.</p>
                </div>
            </section>
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
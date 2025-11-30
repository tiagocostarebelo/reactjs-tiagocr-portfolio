import React from 'react'
import Button from '../ui/Button'

const Hero = () => {
    return (
        <section className="w-full h-[80dvh] flex flex-col items-center justify-center text-center">
            <h2 className="text-2xl md:text-3xl font-bold uppercase">I design distinctive brands and<br /> build modern, fast websites.</h2>
            <p className="text-lg mt-4">Brand identity + Web Development for small businesses, <br />creators and founders who want to stand out.</p>
            <div className="flex space-x-8 mt-16">
                <Button as="navlink" to="/projects" className="btn-primary">View My Work</Button>
                <Button as="navlink" to="/contact" className="btn-secondary">Get in Touch</Button>
            </div>

        </section>
    )
}

export default Hero
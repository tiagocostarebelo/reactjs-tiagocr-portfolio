import React from 'react'
import Button from '../ui/Button'

const Contact = () => {
    return (
        <section className="w-full h-auto py-24 bg-gray-light text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-black-rich tracking-tight leading-tight uppercase mb-6">Let’s build something great.</h2>
            <p className="text-base">Whether you need a new brand, a website, or support on a digital project.</p>
            <p className="text-base">I’m always open to conversations.</p>
            <div className="mt-12 md:mt-14">
                <Button as="navlink" to="/contact" className="btn-primary">Get in Touch</Button>
            </div>
        </section>
    )
}

export default Contact
import React from 'react'
import Button from '../ui/Button'

const Contact = ({
    heading = "Let's build something great!",
    text = "Whether you need help with your brand, a website, or support on a digital project. I’m always open to conversations.",
    buttonLabel = "Get in Touch"
}) => {

    return (
        <section className="w-full h-auto py-24 bg-gray-light text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-black-rich tracking-tight leading-tight uppercase mb-6">{heading}</h2>
            <p className="text-base">{text}</p>

            <div className="mt-12 md:mt-14">
                <Button as="link" to="/contact" className="btn-secondary">{buttonLabel}</Button>
            </div>
        </section>
    )
}

export default Contact
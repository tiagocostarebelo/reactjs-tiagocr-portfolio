import React from 'react'
import Button from '../ui/Button'
import FadeIn from '../animation/FadeIn'

const Contact = ({
    heading = "Build a Brand and Website that do your business justice",
    text = "",
    buttonLabel = "Start a Project",
    bg = "bg-mustard"
}) => {

    return (
        <section id="contact" className={`flex flex-col lg:flex-row justify-between items-center gap-20 py-24 ${bg}`}>
            <FadeIn delay={120}>
                <h2 className={`font-display font-bold text-2xl md:text-3xl lg:text-4xl uppercase tracking-tight leading-none text-black-rich max-w-5xl`}>{heading}</h2>
                <p className={`text-base text-gray-dark`}>{text}</p>
            </FadeIn>

            <div className="flex-shrink-0">
                <FadeIn delay={180}>
                    <Button as="link" to="/contact" className="btn-black-rich">{buttonLabel}</Button>
                </FadeIn>
            </div>
        </section>
    )
}

export default Contact
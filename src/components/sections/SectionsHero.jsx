import React from 'react'
import Button from '../ui/Button'
import FadeIn from '../animation/FadeIn'

const SectionsHero = ({
    heading = "Work that combines identity, design, and development",
    text = "A curated selection of brand identities, websites, and digital projects, crafted with clarity, intention, and care.",
    text2 = "",
    buttonLabel = "Get in Touch"
}) => {


    return (
        <section className="w-full h-auto py-24 bg-white space-y-12">
            <FadeIn>
                <h1 className="text-3xl font-bold uppercase text-black-rich tracking-tight leading-tight">{heading}</h1>
            </FadeIn>
            <div className="space-y-6">
                <FadeIn delay={120}>
                    <p className="text-base text-gray-dark md:max-w-[1200px]">{text}</p>
                </FadeIn>
                <FadeIn delay={240}>
                    {text2 ? <p className="text-base text-gray-dark md:max-w-[1200px]">{text2}</p> : null}
                </FadeIn>

            </div>

            {buttonLabel ? <div className="mt-12 md:mt-14">
                <FadeIn delay={360}>
                    <Button as="link" to="/contact" className="btn-secondary">{buttonLabel}</Button>
                </FadeIn>
            </div> : null}
        </section>
    )
}


export default SectionsHero
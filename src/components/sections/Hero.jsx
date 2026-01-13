import React from 'react'
import Button from '../ui/Button'
import FadeIn from '../animation/FadeIn'
import PatternBg from '../ui/PatternBg'
import PatternSvg from '../../assets/bg_pattern.svg?react'

const Hero = () => {

    return (
        <section className="relative overflow-hidden bg-black-rich text-white border mt-[6rem] w-full">
            <PatternBg Svg={PatternSvg} />

            <div className="relative z-10 w-full h-[80dvh] flex flex-col items-start justify-center">
                <FadeIn delay={120}>
                    <h2 className="text-2xl md:text-3xl tracking-tight leading-tight font-bold uppercase">I design distinctive brands<br />  and build modern websites.</h2>
                    <p className="text-base mt-4">Brand identity & Web Development for businesses, <br />creators and founders who want to stand out.</p>
                </FadeIn>
                <div className="flex flex-col md:flex-row space-y-6 md:space-x-16 md:space-y-0 mt-16 transition-all duration-500">
                    <FadeIn delay={240} >
                        <Button as="link" to="/portfolio" className="btn-primary">View My Work</Button>
                    </FadeIn>
                    <FadeIn delay={300}>
                        <Button as="link" to="/contact" className="btn-secondary">Get in Touch</Button>
                    </FadeIn>

                </div>
            </div>
        </section>
    )
}

export default Hero
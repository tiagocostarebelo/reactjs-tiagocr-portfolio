import React from 'react'
import Button from '../ui/Button'

const Hero = () => {
    return (
        <section className="bg-[url(assets/tcr_pattern_gray.svg)] bg-cover bg-black-rich text-white border mt-[6rem]">
            <div className="w-full h-[80dvh] flex flex-col items-left justify-center">
                <h2 className="text-2xl md:text-3xl tracking-tight leading-tight font-bold uppercase">I design distinctive brands<br />  and build modern websites.</h2>
                <p className="text-base mt-4">Brand identity & Web Development for businesses, <br />creators and founders who want to stand out.</p>
                <div className="flex flex-col md:flex-row space-y-16 md:space-x-16 md:space-y-0 mt-16 transition-all duration-500">
                    <Button as="link" to="/portfolio" className="btn-primary">View My Work</Button>
                    <Button as="link" to="/contact" className="btn-secondary">Get in Touch</Button>
                </div>
            </div>
        </section>
    )
}

export default Hero
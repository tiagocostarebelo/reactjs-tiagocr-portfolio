import React from 'react'
import photo from '../../assets/me_2.jpg'
import Button from '../ui/Button'
import FadeIn from "../animation/FadeIn"

const About = () => {
    return (
        <section className="w-full h-auto py-24">
            {/* outside container */}
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                {/* left column */}
                <div className="flex flex-col justify-center order-2 md:order-1 text-left">
                    <FadeIn>
                        <h2 className="text-2xl md:text-3xl font-bold text-black-rich uppercase mb-6 tracking-tight leading-tight">A designer-dev with a focus on clarity and craft</h2>
                    </FadeIn>
                    <div className="space-y-6 leading-relaxed max-w-xl">
                        <FadeIn delay={120}>
                            <p className="text-base text-gray-dark">I’m a Designer turned Developer who combines brand thinking with clean, modular code. I care about usability, consistency, and the small details that make something feel right.</p>
                        </FadeIn>
                        <FadeIn delay={180}>
                            <p className="text-base text-gray-dark">I work closely with clients to create simple, intentional experiences, whether that’s a brand identity, a marketing site, or a full-stack web app.</p>
                        </FadeIn>
                    </div>
                    <div className="mt-12 md:mt-14">
                        <FadeIn delay={240}>
                            <Button as="link" to="/about" className="btn-ghost">More about me</Button>
                        </FadeIn>
                    </div>

                </div>
                {/* right column */}
                <div className="order-1 md:order-2 h-full min-h-[400px] w-full relative group overflow-hidden rounded-lg">
                    <FadeIn delay={240} className="order-1 md:order-2 h-full min-h-[400px] w-full relative group overflow-hidden rounded-lg">
                        <img src={photo} alt="Tiago photo" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105" />
                    </FadeIn>
                </div>

            </div>
        </section>
    )
}

export default About
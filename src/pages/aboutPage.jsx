import React from 'react'
import tiagoPhoto from '../assets/tiago_.webp'
import Button from '../components/ui/Button'
import Contact from '../components/sections/Contact'
import SectionsHero from '../components/sections/SectionsHero'
import ServiceCard from '../components/ui/ServiceCard'
import values from '../content/values.js';

const AboutPage = () => {
    return (
        <>
            <SectionsHero
                heading="Designer. Developer. Problem-solver."
                text="I’m a Designer turned Developer who enjoys building things that look good and make sense."
                text2="My background in design helps me think visually, while development gives me the structure and tools to bring ideas to life."
                buttonLabel=''
            />
            <section className="w-full h-auto py-24 bg-gray-light">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                    <div className="order-2 md:order-1 h-full min-h-[600px] w-full relative group overflow-hidden">
                        <img src={tiagoPhoto} alt="" className="absolute w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-125" />
                    </div>
                    <div className="flex flex-col space-y-6 justify-center order-1 md:order-2 text-left">

                        <h2 className="text-2xl md:text-3xl font-bold text-black-rich uppercase mb-6 tracking-tight leading-tight">How I work</h2>
                        <p className="text-base text-gray-dark">I care about simplicity, intention, and craft. My process is grounded in understanding the problem first, then designing or coding solutions that feel clean, consistent, and user-friendly.</p>
                        <p className="text-base text-gray-dark">Whether it’s a logo, a website, or an app, I build with equal attention to aesthetics and functionality.</p>

                        <div>
                            <Button as="navlink" to="/portfolio" className="btn-primary">View My Work</Button>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-black-rich uppercase mb-6 tracking-tight leading-tight mt-8">Why hire me</h2>
                        <p className="text-base text-gray-dark">I am someone who understands design thinking and development. Someone who can take an idea from concept to execution without losing clarity or quality along the way.</p>
                        <p className="text-base text-gray-dark"> My goal is always the same: help people make things that stand out and work beautifully.</p>
                    </div>
                </div>
            </section >
            <section className="w-full h-auto text-center py-24 bg-white">
                <h2 className="text-2xl md:text-3xl font-bold text-black-rich uppercase mb-6 tracking-tight leading-tight">What I value</h2>
                <div className="flex flex-col lg:flex-row gap-x-10">
                    {values.map(({ title, description }) => (
                        <ServiceCard key={title} title={title} description={description} borderColor='border-mustard' />
                    ))}
                </div>
            </section>
            <Contact
                heading="Let’s make great work together!"
                text="Whether you need help with your brand, website, or support on a digital project, I’m here to help bring clarity and direction to your idea."
                buttonLabel="Get in Touch"
            />
        </>
    )
}

export default AboutPage
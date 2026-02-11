import { useEffect } from "react";
import tiagoPhoto from '../assets/tiago_.webp';
import Button from '../components/ui/Button';
import Contact from '../components/sections/Contact';
import SectionsHero from '../components/sections/SectionsHero';
import ServiceCard from '../components/ui/ServiceCard';
import values from '../content/values.js';
import FadeIn from '../components/animation/FadeIn.jsx';
import { setCanonical } from "../utils/seo";

const AboutPage = () => {
    useEffect(() => {
        setCanonical("/about");
    }, []);
    return (
        <>
            <SectionsHero
                heading="Designer. Developer. Problem-solver."
                text="I’m a Designer turned Developer who enjoys building things that look good and make sense. I’ve worked professionally as a designer for several years, including roles at a magazine in Portugal and a design and marketing agency in Angola, alongside freelance projects across branding and web."
                text2="My background in design helps me think visually, while development gives me the structure and tools to bring ideas to life."
                buttonLabel=''
            />
            <section className="w-full h-auto py-24 bg-gray-light">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                    <FadeIn className="order-2 md:order-1 h-full min-h-[600px] w-full relative group overflow-hidden">
                        <img src={tiagoPhoto} alt="" className="absolute w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-125" />
                    </FadeIn>
                    <div className="flex flex-col space-y-6 justify-center order-1 md:order-2 text-left">
                        <FadeIn delay={120}>
                            <h2 className="text-2xl md:text-3xl font-bold text-black-rich uppercase mb-6 tracking-tight leading-tight">How I work</h2>
                            <p className="text-base text-gray-dark">I care about simplicity, intention, and craft. My process is grounded in understanding the problem first, then designing or coding solutions that feel clean, consistent, and user-friendly.</p>
                            <p className="text-base text-gray-dark">Whether it’s a logo, a website, or an app, I build with equal attention to aesthetics and functionality.</p>
                        </FadeIn>

                        <FadeIn delay={240}>
                            <div>
                                <Button as="navlink" to="/portfolio" className="btn-primary">View My Work</Button>
                            </div>
                        </FadeIn>


                        <FadeIn delay={360}>
                            <h2 className="text-2xl md:text-3xl font-bold text-black-rich uppercase mb-6 tracking-tight leading-tight mt-8">Why hire me</h2>
                            <p className="text-base text-gray-dark">I am someone who understands design thinking and development. Someone who can take an idea from concept to execution without losing clarity or quality along the way.</p>
                        </FadeIn>
                        <FadeIn delay={480}>
                            <p className="text-base text-gray-dark"> My goal is always the same: help people make things that stand out and work beautifully.</p>
                        </FadeIn>
                    </div>
                </div>
            </section >
            <section className="w-full h-auto text-center py-24 bg-white">
                <FadeIn>
                    <h2 className="text-2xl md:text-3xl font-bold text-black-rich uppercase mb-6 tracking-tight leading-tight">What I value</h2>
                </FadeIn>
                <div className="w-full grid gap-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                    {values.map(({ title, description }, index) => (
                        <FadeIn key={title} delay={index * 120} >
                            <div className="w-full h-full">
                                <ServiceCard title={title} description={description} borderColor='border-mustard' />
                            </div>
                        </FadeIn>
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
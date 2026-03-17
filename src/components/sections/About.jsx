import photo from '../../assets/me_2.jpg'
import Button from '../ui/Button'
import FadeIn from "../animation/FadeIn"

const About = () => {
    return (
        <section id="about" className="w-full bg-black-rich grid md:grid-cols-2 gap-0 min-h-[600px] py-0 px-0">
            {/* CONTENT */}
            <div className="order-2 md:order-1 flex flex-col justify-center py-24 pl-6 md:pl-16 lg:pl-34 pr-6 md:pr-8 lg:pr-26">
                <FadeIn delay={120}>
                    <p className="font-body text-xs tracking-[0.22em] uppercase text-teal mb-8">
                        About
                    </p>
                    <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl uppercase tracking-tight leading-none text-white mb-8">
                        One Person. <br /> Brand and Website, Built Together.
                    </h2>
                </FadeIn>
                <FadeIn delay={140}>
                    <p className="font-light text-sm text-white/60 leading-loose mb-5">
                        I'm Tiago Costa Rebelo, a Brand Designer and Web Developer working directly with founder-led service businesses. No account managers, no handoffs, no briefing three different people and hoping it coheres at the end. One person holds the full picture, from identity to website, and builds it as one system.
                    </p>
                </FadeIn>
                <FadeIn delay={160}>
                    <p className="font-light text-sm text-white/60 leading-loose mb-5">
                        Most businesses treat brand and website as separate problems to be solved separately. I treat them as one. The result is more consistent, more intentional, and built to reflect the real quality of what you've built, not assembled from disconnected parts.
                    </p>
                </FadeIn>
                <div className="mt-6">
                    <FadeIn delay={220}>
                        <Button as="link" to="/about" className="btn-ghost-light w-full">More about me</Button>
                    </FadeIn>
                </div>
            </div>
            {/* PHOTO */}
            <div className="relative overflow-hidden order-1 md:order-2">
                <div className="absolute top-10 left-0 w-0.5 h-16 bg-teal z-10" />
                <FadeIn delay={220} className="w-full h-full min-h-[560px] flex items-end p-10">
                    <img src={photo} alt="Tiago photo" className="absolute inset-0 w-full h-full object-cover grayscale-50 transition-all duration-700 ease-in-out hover:grayscale-0" />
                </FadeIn>
            </div>
        </section>
    )
}

export default About


{/* outside container */ }
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
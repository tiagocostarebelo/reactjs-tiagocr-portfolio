import { useEffect } from "react";
import { setCanonical } from "../utils/seo";
import { story, why, process } from '../content/about';
import photo from '../assets/me_2.jpg'
import Button from '../components/ui/Button';
import FadeIn from '../components/animation/FadeIn.jsx';

const AboutPage = () => {
    useEffect(() => {
        setCanonical("/about");
    }, []);

    return (
        <>
            <section
                id="hero"
                className="relative bg-black-rich min-h-[68vh] flex flex-col justify-end overflow-hidden pt-24"
            >
                <span
                    aria-hidden="true"
                    className="absolute right-[-20px] top-1/2 -translate-y-[52%] font-display font-bold uppercase leading-none pointer-events-none select-none z-0 text-transparent"
                    style={{
                        fontSize: 'clamp(140px, 20vw, 300px)',
                        letterSpacing: '-0.02em',
                        WebkitTextStroke: '1px rgba(255,255,255,0.04)',
                        whiteSpace: 'nowrap',
                    }}
                >
                    TRUST
                </span>

                <div className="relative z-10 max-w-4xl">
                    <div className="w-11 h-0.5 bg-mustard mb-8" />
                    <FadeIn delay={80}>
                        <p className="font-body text-xs tracking-[0.22em] uppercase text-white/25 mb-6">
                            About
                        </p>
                    </FadeIn>
                    <FadeIn delay={120}>
                        <h1
                            className="relative z-10 font-display font-black text-white text-3xl md:text-4xl lg:text-5xl tracking-tighter uppercase mb-8">
                            Design by Instinct.
                            <span
                                id="headline-outline">
                                Development by Choice.
                            </span>
                        </h1>
                    </FadeIn>
                    <FadeIn delay={160}>
                        <p className="font-light text-sm text-white/40 leading-loose max-w-lg">
                            Not two separate skills bolted together. One person who thinks in both,
                            and uses both to build something that holds together.
                        </p>
                    </FadeIn>
                </div>
            </section>

            <section id="about" className="w-full bg-black-rich grid md:grid-cols-2 gap-0 min-h-[600px] py-0 px-0">
                {/* CONTENT */}
                <div className="order-2 md:order-1 flex flex-col justify-center py-24 pl-6 md:pl-16 lg:pl-34 pr-6 md:pr-8 lg:pr-26">
                    <FadeIn delay={120}>
                        <p className="font-body text-xs tracking-[0.22em] uppercase text-teal mb-8">
                            {story.label}
                        </p>
                        <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl uppercase tracking-tight leading-none text-white mb-8">
                            {story.headline[0]} <br /> {story.headline[1]}
                        </h2>
                    </FadeIn>
                    <FadeIn delay={140}>
                        <p className="font-light text-sm text-white/60 leading-loose mb-5">
                            {story.paragraphs[0]}
                        </p>
                    </FadeIn>
                    <FadeIn delay={160}>
                        <p className="font-light text-sm text-white/60 leading-loose mb-5">
                            {story.paragraphs[1]}
                        </p>
                    </FadeIn>
                    <FadeIn delay={180}>
                        <p className="font-light text-sm text-white/60 leading-loose mb-5">
                            {story.paragraphs[2]}
                        </p>
                    </FadeIn>
                </div>
                {/* PHOTO */}
                <div className="relative overflow-hidden order-1 md:order-2">
                    <div className="absolute top-10 left-0 w-0.5 h-16 bg-teal z-10" />
                    <FadeIn delay={220} className="w-full h-full min-h-[560px] flex items-end p-10">
                        <img src={photo} alt="Tiago photo" className="absolute inset-0 w-full h-full object-cover grayscale-50 transition-all duration-700 ease-in-out hover:grayscale-0" />
                    </FadeIn>
                </div>
            </section>


            <section
                className="bg-white py-24"
            >
                <div className="grid lg:grid-cols-2 gap-16 items-start max-w-5xl">
                    {why.paragraphs.map((para, i) => (
                        <FadeIn key={i} delay={i * 120}>
                            <p
                                className="font-light leading-loose text-gray-dark/65"
                                style={{
                                    fontSize: i === 0 ? 'var(--text-lg)' : 'var(--text-sm)',
                                    fontWeight: i === 0 ? 400 : 300,
                                }}
                            >
                                {para}
                            </p>
                        </FadeIn>
                    ))}
                </div>
            </section>

            <section
                className="bg-gray-light py-24"
            >
                {/* Header */}
                <div className="grid lg:grid-cols-2 gap-12 items-end mb-20">
                    <FadeIn delay={80}>
                        <p className="font-body text-xs tracking-[0.22em] uppercase text-gray-dark/40 mb-6">
                            {process.label}
                        </p>
                        <h2
                            className="font-display font-bold text-2xl md:text-3xl lg:text-4xl uppercase tracking-tight leading-none text-black-rich">
                            {process.headline[0]}<br />{process.headline[1]}
                        </h2>
                    </FadeIn>
                </div>

                {/* Steps — same service-row pattern, consistent with homepage */}
                <div className="border-t border-gray-dark/10">
                    {process.steps.map(({ num, title, body, note }, i) => (
                        <FadeIn
                            key={num}
                            delay={i * 100}
                            className="service-row grid lg:grid-cols-[52px_1fr] items-start gap-10 py-11 border-b border-gray-dark/10 hover:bg-white/60 transition-all duration-500"
                        >
                            <span className="font-body text-xs tracking-[0.15em] text-gray-dark/30 pt-1 pl-2 lg:pl-4">
                                {num}
                            </span>
                            <div>
                                <h3
                                    className="font-display font-bold text-lg md:text-2xl lg:text-3xl uppercase tracking-wide leading-none text-black-rich mb-3 pl-2"
                                    style={{ fontSize: 'clamp(20px, 2.2vw, 32px)', letterSpacing: '-0.01em' }}
                                >
                                    {title}
                                </h3>
                                <p className="font-light text-sm text-gray-dark/55 leading-relaxed max-w-xl pl-2">
                                    {body}
                                </p>
                                {note && (
                                    <p className="font-light text-xs text-teal mt-2 pl-2 tracking-wide">
                                        {note}
                                    </p>
                                )}
                            </div>
                        </FadeIn>
                    ))}
                </div>

                {/* Timeline note */}
                <FadeIn delay={200}>
                    <p className="font-light text-xs text-gray-dark/40 leading-loose mt-12 max-w-lg">
                        {process.timeline}
                    </p>
                </FadeIn>
            </section>

            <section
                className="bg-mustard grid lg:grid-cols-[1fr_auto] gap-16 items-center py-24">
                <FadeIn>
                    <h2
                        className="font-display font-bold uppercase text-black-rich"
                        style={{
                            fontSize: 'clamp(40px, 5.5vw, 84px)',
                            letterSpacing: '-0.03em',
                            lineHeight: 0.93,
                        }}
                    >
                        Ready to Close<br />the Gap?
                    </h2>
                </FadeIn>
                <FadeIn delay={120}>
                    <Button as="link" to="/contact" className="btn-black-rich">
                        Start a Project
                    </Button>
                </FadeIn>
            </section>

        </>
    )
}

export default AboutPage
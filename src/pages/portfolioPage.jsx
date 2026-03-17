import { useEffect } from 'react';
import projectDetails from '../content/projects';
import ProjectCard from '../components/ui/ProjectCard';
import FadeIn from '../components/animation/FadeIn';
import Button from '../components/ui/Button';
import { setCanonical } from '../utils/seo';

const PortfolioPage = () => {

    useEffect(() => {

        setCanonical(`/portfolio`);
    }, []);
    const featured = projectDetails.find(p => p.featured) ?? projectDetails[0];
    const rest = projectDetails.filter(p => p.id !== featured.id);

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
                    WORK
                </span>

                <div className="relative z-10 max-w-4xl py-24">
                    <div className="w-11 h-0.5 bg-mustard mb-8" />
                    <FadeIn delay={80}>
                        <p className="font-body text-xs tracking-[0.22em] uppercase text-white/25 mb-6">
                            Selected Work
                        </p>
                    </FadeIn>
                    <FadeIn delay={120}>
                        <h1
                            className="font-display font-black text-white text-3xl md:text-4xl lg:text-5xl tracking-tighter uppercase mb-8">
                            Work That Closes
                            <span
                                id="headline-outline"
                            >
                                the Gap.
                            </span>
                        </h1>
                    </FadeIn>
                    <FadeIn delay={160}>
                        <p className="font-light text-sm text-white/40 leading-loose max-w-lg">
                            Brand identity, web design, and development — built to reflect the real
                            quality of the businesses behind them.
                        </p>
                    </FadeIn>
                </div>
            </section>


            <section
                className="bg-white py-24"
            >
                {/* Hero card — full width */}
                <FadeIn delay={80}>
                    <div className="mb-3">
                        <ProjectCard project={featured} featured={true} />
                    </div>
                </FadeIn>

                {/* Two-column grid */}
                <div className="grid md:grid-cols-2 gap-3">
                    {rest.map((proj, i) => (
                        <FadeIn key={proj.id} delay={i * 120}>
                            <ProjectCard project={proj} />
                        </FadeIn>
                    ))}
                </div>
            </section>
            <section
                className="bg-mustard grid lg:grid-cols-[1fr_auto] gap-16 items-center py-24"
            >
                <FadeIn>
                    <h2
                        className="font-display font-bold text-2xl md:text-3xl lg:text-4xl uppercase tracking-tight leading-none text-black-rich">
                        Seen Enough?<br />Let's Build Yours.
                    </h2>
                </FadeIn>
                <FadeIn delay={120}>
                    <Button as="link" to="/contact" className="btn-black-rich">
                        Start a Project
                    </Button>
                </FadeIn>
            </section>
        </>
    );
}

export default PortfolioPage;
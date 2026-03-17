import { flagship, supporting, addon } from '../content/servicesOffers';
import FadeIn from '../components/animation/FadeIn';
import Button from '../components/ui/Button';

/* ── Page Hero ──────────────────────────────────────────────── */
const Services = () => {
    return (
        <>
            <section
                id="hero"
                className="relative bg-black-rich min-h-[68vh] flex flex-col justify-end overflow-hidden pt-24"
            >
                {/* Watermark */}
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

                <div className="relative z-10 max-w-6xl py-24">
                    {/* Mustard rule */}
                    <div className="w-11 h-0.5 bg-mustard mb-8" />

                    <FadeIn delay={80}>
                        <p className="font-body text-xs tracking-[0.22em] uppercase text-white/25 mb-6">
                            Services
                        </p>
                    </FadeIn>

                    <FadeIn delay={120}>
                        <h1
                            className="relative z-10 font-display font-black text-white text-3xl md:text-4xl lg:text-5xl tracking-tighter uppercase mb-8">
                            Brand. Website. Both.
                            <span
                                id="headline-outline">
                                Choose What Your Business Needs.
                            </span>
                        </h1>
                    </FadeIn>

                    <FadeIn delay={160}>
                        <p className="font-light text-sm text-white/40 leading-loose max-w-lg">
                            Every project starts in a different place. The right offer depends on
                            where the gap is, and what the business needs to move.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/*FLAGSHIP OFFER*/}
            <section className="bg-white py-24" >
                {/* Full-width mustard rule — key visual signal for flagship */}
                <FadeIn>
                    <div className="w-full h-0.5 bg-mustard mb-12" />
                </FadeIn>

                {/* Header row */}
                <FadeIn delay={80} className="flex flex-wrap justify-between items-start gap-8 mb-12">
                    <div className="flex flex-col">
                        <span className="font-body text-xs tracking-[0.22em] uppercase text-teal mb-4">
                            {flagship.eyebrow}
                        </span>
                        <h2
                            className="font-display font-bold text-2xl md:text-3xl lg:text-4xl uppercase tracking-tight leading-none text-black-rich mb-8">
                            {flagship.title}
                        </h2>
                    </div>
                    <span
                        className="font-body text-xs font-semibold tracking-[0.18em] uppercase text-mustard self-start mt-2 px-4 py-1.5 rounded-full border-1" >
                        {flagship.badge}
                    </span>
                </FadeIn>

                {/* Body: copy left, scope panel right */}
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <FadeIn delay={120}>
                        <div className="flex flex-col gap-6">
                            {flagship.copy.map((para, i) => (
                                <p key={i} className="font-light text-sm text-gray-dark/65 leading-loose">
                                    {para}
                                </p>
                            ))}
                            <div className="mt-4">
                                <Button as="link" to="/contact" className="btn-primary">
                                    Start a Project
                                </Button>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={200}>
                        <div className="bg-gray-light rounded-lg p-8">
                            <span className="font-body text-xs font-medium tracking-[0.18em] uppercase text-gray-dark/35 block mb-6">
                                What This Covers
                            </span>
                            {flagship.scope.map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-3 py-4 font-display font-semibold uppercase text-black-rich text-base">
                                    {/* Mustard dash */}
                                    <span className="inline-block w-4 h-0.5 bg-mustard flex-shrink-0" />
                                    {item}
                                </div>
                            ))}
                            <p className="mt-6 font-light text-xs text-gray-dark/38 leading-relaxed">
                                {flagship.scopeNote}
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>


            {/*SUPPORTING OFFERS*/}
            <section className="bg-gray-light py-24">
                <div className="grid lg:grid-cols-2 gap-12 items-end mb-20">
                    <FadeIn delay={80}>
                        <p className="font-body text-xs tracking-[0.22em] uppercase text-gray-dark/40 mb-6">
                            Supporting Offers
                        </p>
                        <h2
                            className="font-display font-bold text-2xl md:text-3xl lg:text-4xl uppercase tracking-tight leading-none text-black-rich mb-8">
                            If the Gap Is<br />in One Place
                        </h2>
                    </FadeIn>
                    <FadeIn delay={120}>
                        <p className="font-light text-sm text-gray-dark/60 leading-loose">
                            If your brand is strong but your website isn't working, or your identity
                            needs clarity without a full website build. These offers address the specific gap.
                        </p>
                    </FadeIn>
                </div>

                <div className="border-t border-gray-dark/10">
                    {supporting.map(({ num, title, body, tag }, i) => (
                        <FadeIn
                            key={num}
                            delay={i * 120}
                            className="service-row grid lg:grid-cols-[52px_1fr_auto] items-center gap-10 py-11 border-b border-gray-dark/10 hover:bg-white/60 transition-all duration-500"
                        >
                            <span className="font-body text-xs tracking-[0.15em] text-gray-dark/30 pl-2 lg:pl-4">
                                {num}
                            </span>
                            <div>
                                <h3
                                    className="font-display font-bold text-lg md:text-xl lg:text-2xl uppercase tracking-wide text-black-rich leading-tight mb-2.5 pl-2"

                                >
                                    {title}
                                </h3>
                                <p className="font-light text-sm text-gray-dark/55 leading-relaxed max-w-xl pl-2">
                                    {body}
                                </p>
                            </div>
                            <span className="font-body text-xs font-medium tracking-[0.15em] uppercase text-teal whitespace-nowrap pr-2">
                                {tag}
                            </span>
                        </FadeIn>
                    ))}
                </div>
            </section>

            {/* ADD ON OFFER*/}
            <section className="bg-black-rich py-24">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <FadeIn delay={80}>
                        <span className="font-body text-xs tracking-[0.22em] uppercase text-white/25 block mb-6">
                            {addon.eyebrow}
                        </span>
                        <h2
                            className="font-display font-bold text-2xl md:text-3xl lg:text-4xl uppercase tracking-tight leading-none text-white mb-8">
                            {addon.title}
                        </h2>
                    </FadeIn>
                    <FadeIn delay={160}>
                        <p className="font-light text-sm text-white/40 leading-loose">
                            {addon.body}
                        </p>
                        <span
                            className="inline-block mt-6 font-body text-xs font-medium tracking-[0.18em] uppercase text-teal px-3.5 py-1.5 rounded-full border-1" >
                            {addon.pill}
                        </span>
                    </FadeIn>
                </div>
            </section>

            <section
                className="bg-mustard grid lg:grid-cols-[1fr_auto] gap-16 items-center py-24">
                <FadeIn>
                    <h2
                        className="font-display font-bold text-2xl md:text-3xl lg:text-4xl uppercase tracking-tight leading-none text-black-rich mb-8">
                        Work With a Designer<br />Who Builds It Too.
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
};


export default Services;
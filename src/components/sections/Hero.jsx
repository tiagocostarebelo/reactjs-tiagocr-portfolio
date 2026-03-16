import React from 'react'
import Button from '../ui/Button'
import FadeIn from '../animation/FadeIn'

const Hero = () => {

    return (
        <section id="hero" className="relative min-h-screen flex flex-col justify-end bg-black-rich overflow-hidden pt-24">
            {/* Ghost watermark */}
            <span
                aria-hidden="true"
                className="absolute right-0 top-1/2 -translate-y-1/2 font-display font-black uppercase leading-none select-none pointer-events-none whitespace-nowrap z-0"
                style={{
                    fontSize: 'clamp(140px, 20vw, 320px)',
                    color: 'transparent',
                    WebkitTextStroke: '1px rgba(255,255,255,0.04)',
                    letterSpacing: '-0.02em',
                    right: '-20px',
                }}
            >
                CRAFT
            </span>
            <FadeIn delay={120}>
                <div className="relative z-10 w-[50px] h-[4px] bg-mustard mb-8 rounded"></div>
                <h1 className="relative z-10 font-display font-black text-white text-3xl md:text-4xl lg:text-5xl tracking-tighter uppercase mb-8">BRAND DESIGNER<br /> <span id="headline-outline">&amp; WEB DEVELOPER</span></h1>
            </FadeIn>


            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-end pb-20">
                <div>
                    <FadeIn delay={160}>
                        <h2 className="text-white text-base md:text-lg  lg:text-xl tracking-tight leading-relaxed font-medium uppercase mb-3">Brand identities and websites that reflect the real quality of your business.</h2>
                        <p className="text-white/70 text-sm font-thin mt-4">I work with founder-led service businesses that need a stronger visual presence, building brands and websites that feel clearer, more credible, and more aligned with the standard of the work behind them.</p>
                    </FadeIn>
                </div>
                <div className="flex flex-col md:items-end lg:justify-end space-y-6 transition-all duration-500">
                    <FadeIn delay={200} >
                        <Button as="link" to="/contact" className="btn-primary">Start a Project</Button>
                    </FadeIn>
                    <FadeIn delay={200}>
                        <Button as="link" to="/portfolio" className="btn-ghost-light">View Selected Work</Button>
                    </FadeIn>

                </div>
            </div>
        </section>
    )
}

export default Hero
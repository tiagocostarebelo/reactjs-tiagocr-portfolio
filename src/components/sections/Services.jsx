import services from '../../content/services'
import Button from '../ui/Button'
import FadeIn from "../animation/FadeIn"

const Services = () => {
    return (
        <section id="services" className="bg-gray-light py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-end mb-20">
                <div>
                    <FadeIn delay={120}>
                        <p className="font-body text-xs tracking-[0.22em] uppercase text-gray-dark/40 mb-8">
                            What I Do
                        </p>
                        <h2
                            className="font-display font-bold text-2xl md:text-3xl lg:text-4xl uppercase tracking-tight leading-none text-black-rich"
                        >
                            How I Can Help
                        </h2>
                    </FadeIn>
                </div>
                <FadeIn delay={160}>
                    <p className="font-light text-sm text-gray-dark/60 leading-loose">
                        Whether the gap is in the brand, the website, or both, the goal is the
                        same: to create a more aligned, credible presence that supports the next
                        stage of the business.
                    </p>
                </FadeIn>
            </div>

            {/* Service rows */}
            <div className="border-t border-gray-dark/10">
                {services.map(({ num, title, body, tag }, i) => (
                    <FadeIn
                        key={num}
                        delay={i * 200}
                        className="service-row grid lg:grid-cols-[52px_1fr_auto] items-center gap-10 py-11 border-b border-gray-dark/10 hover:bg-white/60 transition-all duration-500"
                    >
                        <span className="font-body text-xs tracking-[0.15em] text-gray-dark/30 pl-2 lg:pl-4">
                            {num}
                        </span>
                        <div>
                            <h3
                                className="font-display font-bold text-lg md:text-2xl lg:text-3xl uppercase tracking-wide text-black-rich leading-none mb-2.5 pl-2"
                            >
                                {title}
                            </h3>
                            <p className="font-light text-sm text-gray-dark/55 leading-relaxed max-w-xl pl-2">
                                {body}
                            </p>
                        </div>
                        <span className="font-body text-xs font-medium tracking-[0.15em] uppercase text-teal whitespace-nowrap pl-2">
                            {tag}
                        </span>
                    </FadeIn>
                ))}
            </div>

            <div className="mt-14">
                <FadeIn delay={220}>
                    <Button as="link" to="/services" className="btn-primary">Explore Services</Button>
                </FadeIn>
            </div>
        </section>
    )
}

export default Services
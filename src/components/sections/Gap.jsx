import gaps from '../../content/gaps';
import FadeIn from '../animation/FadeIn'

const Gap = () => {
    return (
        <section id="gap" className="bg-white py-24">
            <div className="mb-12">
                <FadeIn delay={120}>
                    <p className="font-body text-xs tracking-[0.22em] uppercase text-gray-dark/40 mb-8">
                        The Gap
                    </p>
                    <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl uppercase tracking-tight leading-none text-black-rich mb-8">
                        Your Business Has Grown.<br />
                        Your Brand &amp; Website Should Too.
                    </h2>
                </FadeIn>
                <FadeIn delay={160}>
                    <p className="font-light text-sm text-gray-dark/60 leading-loose max-w-2xl">
                        A weak visual presence does more than look outdated. It makes a good business feel
                        less established, less credible, and less valuable than it is, and that gap has real
                        costs. I close it through aligned brand and website work, built to match the standard
                        of the business behind it.
                    </p>
                </FadeIn>
            </div>
            {/* LIST */}
            <div className="border-t border-gray-light/80">
                {gaps.map(({ num, title, body }, i) => (

                    <FadeIn
                        key={num}
                        delay={i * 180}
                        className="gap-item flex gap-2 md:gap-4 border-b border-gray-light/80 py-12 items-start gap-0"
                    >
                        <span
                            className="font-display font-black text-4xl text-mustard leading-none"
                        >
                            {num}
                        </span>
                        <div className="pt-1">
                            <h3
                                className="font-display font-bold text-lg md:text-2xl lg:text-3xl uppercase tracking-wide text-black-rich mb-3"
                            >
                                {title}
                            </h3>
                            <p className="font-light text-sm text-gray-dark/60 leading-relaxed max-w-md">
                                {body}
                            </p>
                        </div>
                    </FadeIn>
                ))}
            </div>

        </section>
    )
}

export default Gap;
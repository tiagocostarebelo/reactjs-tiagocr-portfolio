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
                    <h2 className="font-display font-bold text-3xl lg:text-4xl uppercase tracking-tight leading-none text-black-rich mb-8">
                        Your Business Has Grown.<br />
                        Your Brand &amp; Website Should Too.
                    </h2>
                </FadeIn>
                <FadeIn delay={160}>
                    <p className="font-light text-sm text-gray-dark/60 leading-loose max-w-2xl">
                        A weak visual presence does more than look outdated. It can make a good
                        business feel less established, less clear, and less credible than it
                        really is. That gap affects how confidently you promote your work, how
                        potential clients perceive your value, and how well your business supports
                        its next stage of growth. I help close that gap through thoughtful brand
                        and website work that brings everything into alignment, so the business
                        looks as credible as the work behind it.
                    </p>
                </FadeIn>
            </div>
            {/* LIST */}
            <div className="border-t border-gray-light/80">
                {gaps.map(({ num, title, body }, i) => (

                    <FadeIn
                        key={num}
                        delay={i * 180}
                        className="gap-item flex gap-4 border-b border-gray-light/80 py-12 items-start gap-0"
                    >
                        <span
                            className="font-display font-black text-4xl text-mustard leading-none"
                        >
                            {num}
                        </span>
                        <div className="pt-1">
                            <h3
                                className="font-display font-bold text-lg md:text-xl uppercase tracking-wide text-black-rich mb-3"
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
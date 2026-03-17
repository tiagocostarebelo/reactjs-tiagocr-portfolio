import cards from '../../content/approach';
import FadeIn from '../animation/FadeIn';

const Approach = () => {
    return (
        <section id="approach" className="bg-black-rich py-24">
            <div className="lg:flex justify-between items-end gap-12 items-end mb-20">
                <div>
                    <FadeIn delay={120}>
                        <p className="font-body text-xs tracking-[0.22em] uppercase text-white/40 mb-8">
                            How I Work
                        </p>
                        <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl uppercase tracking-tight leading-none text-white mb-4 lg:mb-0">
                            A More Aligned <br />Approach
                        </h2>
                    </FadeIn>
                </div>
                <FadeIn delay={160}>
                    <p className="font-light text-sm text-white/60 leading-loose lg:text-right max-w-sm">
                        I work directly with you to shape a brand and website presence that feels intentional, aligned, and built around the business as a whole.
                    </p>
                </FadeIn>
            </div>

            <div className="grid lg:grid-cols-2 grid-rows-2 gap-y-4 lg:gap-y-0 lg:gap-x-4">
                {cards.map(({ num, title, body }, i) => (
                    <div
                        key={num}
                        className="card-dark relative rounded-none border-0 border-l-3 border-mustard pl-2 lg:pl-4"
                    >
                        <span className="font-body text-xs font-medium tracking-[0.15em] text-mustard/50 block mb-6">
                            {num}
                        </span>
                        <h3
                            className="font-display font-bold text-lg md:text-xl lg:text-2xl uppercase tracking-wide text-white leading-tight mb-4"
                        >
                            {title}
                        </h3>
                        <p className="font-light text-sm text-white/35 leading-relaxed">
                            {body}
                        </p>
                    </div>
                ))}
            </div>

        </section>
    )
};

export default Approach;
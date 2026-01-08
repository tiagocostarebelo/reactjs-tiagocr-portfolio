import Button from "../ui/Button"
import FadeIn from '../animation/FadeIn'

const MediaTextSection = ({
    title,
    subheading,
    paragraphs = [],
    ctaText,
    ctaLink = "/contact",
    ctaVariant = "btn-secondary",
    bgColor = "bg-gray-light",
    imgSrc,
    altText,
    reverse = false
}) => {

    const textOrder = reverse ? "order-1 md:order-2" : "order-1 md:order-1";
    const imageOrder = reverse ? "order-2 md:order-1" : "order-2 md:order-2";

    return (
        <section className={`w-full h-auto py-24 ${bgColor}`}>
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                <FadeIn className={`${imageOrder} h-full min-h-[600px] w-full relative group overflow-hidden`}>
                    <img src={imgSrc} alt={altText} className="absolute w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-125" />
                </FadeIn>
                <div className={`${textOrder} flex flex-col space-y-6 justify-center text-left`}>
                    <FadeIn delay={120}>
                        <h2 className="text-2xl md:text-3xl font-bold text-black-rich uppercase tracking-tight leading-tight">{title}</h2>
                    </FadeIn>
                    {subheading ? (
                        <FadeIn delay={240}>
                            <p className="text-base font-bold text-gray-dark">{subheading}</p>
                        </FadeIn>
                    ) : null}

                    {paragraphs.map((paragraph, index) => (
                        <FadeIn key={index} delay={360}>
                            <p className="text-base text-gray-dark">{paragraph}</p>
                        </FadeIn>
                    ))}

                    {ctaText ? (
                        <FadeIn delay={480}>
                            <div>
                                <Button as="navlink" to={ctaLink} className={ctaVariant}>
                                    {ctaText}
                                </Button>
                            </div>
                        </FadeIn>
                    ) : null}

                </div>
            </div>
        </section >
    )
}

export default MediaTextSection
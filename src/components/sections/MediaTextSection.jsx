import Button from "../ui/Button"

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
    // const textAlign = reverse ? "text-right" : "text-left";

    return (
        <section className={`w-full h-auto py-24 ${bgColor}`}>
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                <div className={`${imageOrder} h-full min-h-[600px] w-full relative group overflow-hidden`}>
                    <img src={imgSrc} alt={altText} className="absolute w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-125" />
                </div>
                <div className={`${textOrder} flex flex-col space-y-6 justify-center text-left`}>
                    <h2 className="text-2xl md:text-3xl font-bold text-black-rich uppercase mb-6 tracking-tight leading-tight">{title}</h2>
                    {subheading && (
                        <p className="text-base font-bold text-gray-dark">Strong identities built with clarity, strategy, and craft.</p>
                    )}

                    {paragraphs.map((paragraph, index) => (
                        <p key={index} className="text-base text-gray-dark">{paragraph}</p>

                    ))}

                    {ctaText && (
                        <div>
                            <Button as="navlink" to={ctaLink} className={ctaVariant}>{ctaText}</Button>
                        </div>
                    )}

                </div>
            </div>
        </section >
    )
}

export default MediaTextSection
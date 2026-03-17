import { useEffect } from "react";
import FadeIn from "../components/animation/FadeIn";
import ContactForm from "../components/ui/ContactForm";
import { setCanonical } from "../utils/seo";

const steps = [
    { num: "01", text: "I review your enquiry and respond within two business days." },
    { num: "02", text: "I send a short brief to understand the project properly." },
    { num: "03", text: "We book a discovery call to align on goals, scope, and next steps." },
];


const ContactPage = () => {
    useEffect(() => {
        document.title = "Contact — TiagoCR | Brand Designer & Web Developer";
        setCanonical("/contact");
    }, []);

    return (
        <>
            <section
                id="hero"
                className="relative bg-black-rich min-h-[68vh] flex flex-col justify-end overflow-hidden py-24"
            >

                <span
                    aria-hidden="true"
                    className="absolute right-[-20px] top-1/2 -translate-y-[52%] font-display font-bold uppercase leading-none pointer-events-none select-none z-0 text-transparent"
                    style={{
                        fontSize: "clamp(140px, 20vw, 300px)",
                        letterSpacing: "-0.02em",
                        WebkitTextStroke: "1px rgba(255,255,255,0.04)",
                        whiteSpace: "nowrap",
                    }}
                >
                    START
                </span>

                <div className="relative z-10 max-w-4xl">
                    <div className="w-11 h-0.5 bg-mustard mb-8" />
                    <FadeIn delay={80}>
                        <p className="font-body text-xs tracking-[0.22em] uppercase text-white/25 mb-6">
                            Contact
                        </p>
                    </FadeIn>
                    <FadeIn delay={120}>
                        <h1
                            className="font-display font-black text-white text-3xl md:text-4xl lg:text-5xl tracking-tighter uppercase text-white mb-8">
                            Let's See If
                            <span id="headline-outline"
                            >
                                We're a Fit.
                            </span>
                        </h1>
                    </FadeIn>
                    <FadeIn delay={160}>
                        <p className="font-light text-sm text-white/40 leading-loose max-w-lg">
                            I work with a small number of businesses at a time. Tell me about
                            yours and what needs to change, and we'll take it from there.
                        </p>
                    </FadeIn>
                </div>
            </section>

            <section className="py-24">
                <div className="grid lg:grid-cols-[1fr_1.4fr] gap-24 items-start">

                    {/* Left — context */}
                    <FadeIn delay={80}>
                        <span className="font-body text-xs tracking-[0.22em] uppercase text-gray-dark/40 block mb-6">
                            Get in Touch
                        </span>
                        <h2
                            className="font-display font-bold uppercase text-black-rich mb-8"
                            style={{
                                fontSize: "clamp(32px, 4vw, 56px)",
                                letterSpacing: "-0.03em",
                                lineHeight: 0.95,
                            }}
                        >
                            The Right Start Makes All the Difference.
                        </h2>
                        <p className="font-light text-sm text-gray-dark/60 leading-loose mb-6">
                            Fill in the form and give me a clear picture of where your business
                            is and what needs to move. The more specific you are, the more
                            useful my response will be.
                        </p>
                        <p className="font-light text-sm text-gray-dark/60 leading-loose">
                            I'll follow up with a short brief so I can understand
                            the project properly before we talk.
                        </p>

                        {/* What happens next — desktop only */}
                        <div className="hidden lg:block mt-12 pt-8 border-t border-gray-dark/8">
                            <span className="font-body text-xs tracking-[0.22em] uppercase text-gray-dark/35 block mb-6">
                                What happens next
                            </span>
                            {steps.map(({ num, text }) => (
                                <div
                                    key={num}
                                    className="grid grid-cols-[28px_1fr] gap-4 mb-4 items-start"
                                >
                                    <span className="font-body text-xs font-medium text-mustard tracking-wider pt-0.5">
                                        {num}
                                    </span>
                                    <p className="font-light text-xs text-gray-dark/50 leading-relaxed">
                                        {text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </FadeIn>

                    {/* Right — form */}
                    <ContactForm />

                </div>
            </section>
        </>
    );
};

export default ContactPage;
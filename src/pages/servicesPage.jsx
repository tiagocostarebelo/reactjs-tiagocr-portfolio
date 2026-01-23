import React from 'react'
import SectionsHero from '../components/sections/SectionsHero'
import MediaTextSection from '../components/sections/MediaTextSection'
import Contact from '../components/sections/Contact'
import brandDesignImg from "../assets/tcr_tiled_deck.webp"
import webDevImg from "../assets/web_dev_tiledeck.webp"
import emailDevImg from "../assets/emailDev_tile_deck.webp"

const ServicesPage = () => {
    return (
        <>
            <SectionsHero
                heading="What can I do for you?"
                text="I help brands, creators, and small businesses stand out through strong visuals and clean, modern digital experiences."
                text2="Whether you need a brand, a website, I can help."
                buttonLabel=""
            />

            <MediaTextSection
                title="Brand Design"
                subheading="Strong identities built with clarity, strategy, and craft."
                paragraphs={[
                    "Your brand is more than a logo, it’s how people recognise you, remember you, and trust you.",
                    "I create visual identity systems that feel intentional, distinctive, and aligned with what your business stands for.",
                    "Everything is built to be flexible, scalable, and easy to use across digital and print.",
                ]}
                ctaText="Get in Touch"
                ctaLink="/contact"
                ctaVariant="btn-secondary"
                imgSrc={brandDesignImg}
                altText="Brand Design"
                reverse={true}
            />

            <MediaTextSection
                title="Web Development"
                subheading="Clean, modern websites built to perform."
                paragraphs={[
                    "I design and build fast, responsive websites with a component-driven approach, choosing the right stack for your goals, from lightweight front-ends to modern React builds.",
                    "My design know-how means I care deeply about layout, structure, and visual consistency. Your website won’t just work well. It’ll look and feel right.",
                    "From landing pages to full web apps, I build interfaces that are intuitive, accessible, and easy to maintain over time.",
                ]}
                bgColor="bg-white"
                ctaText="Get in Touch"
                ctaLink="/contact"
                ctaVariant="btn-secondary"
                imgSrc={webDevImg}
                altText="Web Development"
                reverse={false}
            />

            <MediaTextSection
                title="Email Development"
                subheading="Responsive, reliable, campaign-ready emails."
                paragraphs={[
                    "My email development experience lets me build accessibility-focused templates that render consistently across major clients, including Outlook, Gmail, and Apple Mail.",
                    "I use clean, bulletproof HTML and modular, reusable sections, so your team can update content quickly without breaking layout.",
                    "If you need reliable campaign templates, branded newsletters, or a scalable email design system, I’ll help you ship faster with confidence.",
                ]}
                ctaText="Get in Touch"
                ctaLink="/contact"
                ctaVariant="btn-secondary"
                imgSrc={emailDevImg}
                altText="Email Development"
                reverse={true}
            />
            <Contact
                heading="Let’s talk about your project!"
                text="If you need branding, a website, or support with a digital project, I’d love to help. Get in touch and let’s make something great."
                buttonLabel="Get in Touch"
                bg="bg-white"
            />
        </>
    )
}

export default ServicesPage
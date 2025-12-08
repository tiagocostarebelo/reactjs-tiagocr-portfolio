import React from 'react'
import SectionsHero from '../components/sections/SectionsHero'
import MediaTextSection from '../components/sections/MediaTextSection'
import Contact from '../components/sections/Contact';

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
                    "Your brand is more than a logo — it’s how people recognise you, remember you, and trust you.",
                    "I create identity systems that feel intentional, distinctive, and aligned with what your business stands for.",
                    "Everything is built to be flexible, scalable, and easy to use across digital and print.",
                ]}
                ctaText="Get in Touch"
                ctaLink="/contact"
                ctaVariant="btn-secondary"
                imgSrc="/images/brand.jpg"
                altText="Brand Design"
                reverse="true"
            />

            <MediaTextSection
                title="Web Development"
                subheading="Clean, modern websites built to perform."
                paragraphs={[
                    "I design and develop responsive, fast, modern websites using React, Tailwind, and a component-driven approach. Every build is clean, scalable, and focused on usability.",
                    "My background in design means I care deeply about layout, structure, and visual consistency. Your website won’t just work well — it will look and feel right.",
                    "Whether it's a landing page, a marketing site, or a full web app, I build interfaces that are simple to navigate, accessible, and easy to maintain.",
                ]}
                bgColor="bg-white"
                ctaText="Get in Touch"
                ctaLink="/contact"
                ctaVariant="btn-secondary"
                imgSrc="/images/webdev.jpg"
                altText="Web Development"
                reverse="false"
            />

            <MediaTextSection
                title="Email Development"
                subheading="Responsive, reliable, campaign-ready emails."
                paragraphs={[
                    "I design and code responsive, accessibility-focused email templates that render beautifully across all major clients — including Outlook, Gmail, and Apple Mail.",
                    "Using clean, bulletproof HTML and modular layouts, I create emails that are easy to update, reuse, and integrate into your marketing workflow.",
                    "If you need consistent campaign templates, branded newsletters, or high-converting launches, I can help you ship with confidence.",
                ]}
                ctaText="Get in Touch"
                ctaLink="/contact"
                ctaVariant="btn-secondary"
                imgSrc="/images/emaildev.jpg"
                altText="Email Development"
                reverse="true"
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
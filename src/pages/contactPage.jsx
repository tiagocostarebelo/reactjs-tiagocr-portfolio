import React from 'react'
import SectionsHero from '../components/sections/SectionsHero';
import ContactForm from '../components/ui/ContactForm';

const ContactPage = () => {
    return (
        <>
            <SectionsHero
                heading="Let's talk."
                text="Whether you’re starting a new project or just want to discuss an idea, I’d love to hear from you."
                text2="Tell me a bit about what you need and I’ll get back to you soon."
                buttonLabel=''
            />

            <ContactForm />
        </>
    )
}

export default ContactPage
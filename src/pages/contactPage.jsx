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
            {/* Netlify form detection (hidden, static) */}
            <form
                aria-hidden="true"
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                hidden
            >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="firstName" />
                <input type="hidden" name="lastName" />
                <input type="hidden" name="email" />
                <input type="hidden" name="projectType" />
                <input type="hidden" name="message" />
            </form>

            <ContactForm />
        </>
    )
}

export default ContactPage
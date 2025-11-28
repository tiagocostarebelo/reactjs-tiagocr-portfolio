import React from 'react'
import Button from '../ui/Button'

const Hero = () => {
    return (
        <section>
            <h2 className="">I design distinctive <span className="text-mustard">brands</span> and build modern, fast websites.</h2>
            <p>Brand identity + Web Development for small businesses, creators and founders who want to stand out.</p>
            <Button className="btn-primary">View My Work</Button>
            <Button className="btn-secondary">Get in Touch</Button>
        </section>
    )
}

export default Hero
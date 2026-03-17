import { useEffect } from 'react';
import Hero from '../components/sections/Hero';
import Gap from '../components/sections/Gap';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import Services from '../components/sections/Services';
import About from '../components/sections/About';
import Contact from '../components/sections/Contact';
import projectDetails from '../content/projects';
import { setCanonical } from '../utils/seo';

const HomePage = () => {
    useEffect(() => {
        setCanonical("/");
    }, []);

    const filteredFeatured = projectDetails.filter(project => project.featured);
    return (
        <>
            <Hero />
            <Gap />
            <About />
            <Services />
            {projectDetails.length > 0 &&
                <FeaturedProjects projectDetails={filteredFeatured} />
            }
            <Contact />
        </>
    )
}

export default HomePage
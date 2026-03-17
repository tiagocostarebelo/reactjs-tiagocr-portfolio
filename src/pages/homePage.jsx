import { useEffect } from 'react';
import Hero from '../components/sections/Hero';
import Gap from '../components/sections/Gap';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import Approach from '../components/sections/Approach';
import FeaturedProjects from '../components/sections/FeaturedProjects';
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
            <Approach />
            {projectDetails.length > 0 &&
                <FeaturedProjects projectDetails={filteredFeatured} />
            }
            <Contact />
        </>
    )
}

export default HomePage
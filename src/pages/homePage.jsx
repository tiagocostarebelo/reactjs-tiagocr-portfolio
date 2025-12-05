import Hero from '../components/sections/Hero';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import Services from '../components/sections/Services';
import About from '../components/sections/About';
import Contact from '../components/sections/Contact';
import projectDetails from '../content/projects';

const HomePage = () => {
    const filteredFeatured = projectDetails.filter(project => project.featured);
    return (
        <>
            <Hero />
            <FeaturedProjects projectDetails={filteredFeatured} />
            <Services />
            <About />
            <Contact />
        </>
    )
}

export default HomePage
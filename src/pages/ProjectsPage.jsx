import { useEffect } from "react";
import { useParams } from "react-router";
import projects from "../content/projects";
import NotFound from "./NotFound";
import WorkPageTemplate from "./workPageTemplate";

const ProjectPage = () => {
    const { slug } = useParams();

    const project = projects.find((p) => p.slug === slug);

    useEffect(() => {
        const formattedTitle = slug
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

        document.title = `TiagoCR | ${formattedTitle}`;
    }, [slug]);

    if (!project) {
        return (<NotFound />
        );
    }


    return <WorkPageTemplate project={project} />;


};

export default ProjectPage;

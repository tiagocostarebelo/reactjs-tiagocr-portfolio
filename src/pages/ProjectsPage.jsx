import { useParams } from "react-router";
import projects from "../content/projects";
import NotFound from "./NotFound";
import WorkPageTemplate from "./WorkPageTemplate";

const ProjectPage = () => {
    const { slug } = useParams();

    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return (<NotFound />
        );
    }

    // Case Study

    return <WorkPageTemplate project={project} />;


};

export default ProjectPage;

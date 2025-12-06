import { useParams } from "react-router";
import projects from "../content/projects";
import NotFound from "./NotFound";
import CaseStudyTemplate from "../components/case-study/CaseStudyTemplate";
import SimpleProjectTemplate from "../components/simple-project/SimpleProjectTemplate";

const ProjectPage = () => {
    const { slug } = useParams();

    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return (<NotFound />
        );
    }

    // Case Study
    if (project.type === "case-study") {
        return <CaseStudyTemplate project={project} />;
    }

    // Simple Project Page
    if (project.type === "simple") {
        return <SimpleProjectTemplate project={project} />;
    }

};

export default ProjectPage;

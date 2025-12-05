import { useParams } from "react-router";
import projects from "../content/projects";
import NotFound from "./NotFound";
// import CaseStudyTemplate from "../components/case-study/CaseStudyTemplate";
// import SimpleProjectTemplate from "../components/simple-project/SimpleProjectTemplate";

const ProjectPage = () => {
    const { slug } = useParams();

    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return (<NotFound />
        );
    }

    // Case Study
    if (project.type === "case-study") {
        // return <CaseStudyTemplate project={project} />;
        return <h1>Case Study</h1>
    }

    // Simple Project Page
    //   return <SimpleProjectTemplate project={project} />;
    return <h1>Simple Work</h1>
};

export default ProjectPage;

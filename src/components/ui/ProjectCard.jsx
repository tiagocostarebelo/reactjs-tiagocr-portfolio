import { Link } from 'react-router'

const ProjectCard = ({ project, compact = false }) => {
    // Use a more reasonable aspect ratio when there are fewer cards
    const aspectRatio = compact ? "aspect-[16/10]" : "aspect-[16/16]"

    return (
        <Link
            to={`/portfolio/${project.slug}`}
            onClick={() => window.scrollTo(0, 0)}
            className="group block"
        >
            <div className="relative overflow-hidden bg-white rounded-lg">
                <div className={`${aspectRatio} overflow-hidden`}>
                    <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black-rich via-black-rich/40 to-transparent" />

                <div className="absolute bottom-0 left-0 w-full py-12 px-4 flex flex-col gap-1 duration-500 ease-out group-hover:scale-110">
                    <h3 className="text-white text-xl font-semibold">
                        {project.title}
                    </h3>
                    <span className="text-white/90 text-sm font-medium transition-all duration-500 ease-out group-hover:text-mustard group-hover:text-md">
                        View Work
                    </span>
                </div>
            </div>
        </Link>
    )
}

export default ProjectCard
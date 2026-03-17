import { Link } from 'react-router'

const ProjectCard = ({ project, featured = false }) => {
    return (
        <Link
            to={`/portfolio/${project.slug}`}
            onClick={() => window.scrollTo(0, 0)}
            className="group block"
        >
            <div className="relative overflow-hidden rounded-lg bg-black">
                <div className={`${featured ? 'aspect-[16/9]' : 'aspect-[4/3]'} overflow-hidden`}>
                    <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                {/* Card footer */}
                <div className="absolute bottom-0 left-0 w-full px-8 py-8 flex flex-col gap-1.5">
                    {/* Category tag */}
                    <span className="font-body text-xs font-medium tracking-[0.15em] uppercase text-teal mb-1">
                        {project.category[0]}
                    </span>
                    <h3 className="font-display font-semibold text-white uppercase tracking-tight leading-none"
                        style={{ fontSize: featured ? 'var(--text-xl)' : 'var(--text-lg)' }}
                    >
                        {project.title}
                    </h3>
                    {/* Animated arrow link */}
                    <div className="flex items-center gap-2 mt-1">
                        <span className="font-body text-xs font-medium tracking-[0.15em] uppercase text-white/60 transition-colors duration-300 group-hover:text-teal">
                            View Work
                        </span>
                        <span className="inline-block h-px bg-teal w-0 transition-all duration-300 ease-out group-hover:w-[22px]" />
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProjectCard
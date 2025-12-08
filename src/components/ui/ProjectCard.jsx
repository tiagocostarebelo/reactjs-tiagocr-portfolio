import React from 'react'
import { Link } from 'react-router'
import blnkCover from '../../assets/blnk_cover.webp'

const ProjectCard = ({ project }) => {
    console.log(project)
    return (
        <Link to={`/portfolio/${project.slug}`} onClick={() => window.scrollTo(0, 0)} className="group block">
            <div className="relative overflow-hidden bg-white rounded-lg">
                <div className="aspect-[16/16] overflow-hidden">
                    <img src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                </div>
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
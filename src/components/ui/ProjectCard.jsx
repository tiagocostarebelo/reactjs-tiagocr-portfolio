import React from 'react'
import { Link } from 'react-router'
import blnkCover from '../../assets/blnk_cover.webp'

const ProjectCard = () => {
    return (
        <Link to={`/projects/projectId`} className="group block">
            <div className="relative overflow-hidden bg-white rounded-lg">
                <div className="aspect-[16/16] overflow-hidden">
                    <img src={blnkCover}
                        alt="BLNK logo"
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                </div>
                <div className="absolute bottom-0 left-0 w-full p-4 flex flex-col gap-1 duration-500 ease-out group-hover:scale-110">

                    <h3 className="text-white text-xl font-semibold">
                        Project Name
                    </h3>

                    <span className="text-white/90 text-sm font-medium transition-all duration-500 ease-out group-hover:text-mustard group-hover:text-md">
                        View Project
                    </span>
                </div>
            </div>
        </Link>
    )
}

export default ProjectCard
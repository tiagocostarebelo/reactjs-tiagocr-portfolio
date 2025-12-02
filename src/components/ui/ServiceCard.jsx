import React from 'react'

const ServiceCard = ({ title, description }) => {
    return (
        <div className="flex-1 my-8 group mx-auto">
            <h3 className="text-2xl font-bold uppercase transition-transform duration-700 ease-out group-hover:scale-105">{title}</h3>
            <p className="text-base transition-transform duration-700 ease-out group-hover:scale-105">{description}</p>
        </div>
    )
}

export default ServiceCard
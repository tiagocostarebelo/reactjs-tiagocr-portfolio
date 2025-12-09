import React from 'react'

const ServiceCard = ({ title, description, borderColor = "border-teal" }) => {
    return (
        <div className={`my-8 group mx-auto py-8 px-4 lg:px-8 rounded-lg border-solid border-2 ${borderColor} hover:border-4 transition-all duration-700 ease-out`}>
            <h3 className="text-2xl text-black-rich font-bold uppercase transition-transform duration-700 ease-out group-hover:scale-115">{title}</h3>
            <p className="text-base text-gray-dark transition-transform duration-700 ease-out group-hover:scale-102">{description}</p>
        </div>
    )
}

export default ServiceCard
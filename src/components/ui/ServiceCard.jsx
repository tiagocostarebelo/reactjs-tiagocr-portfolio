import React from 'react'

const ServiceCard = ({ title, description, borderColor = "border-teal" }) => {
    return (
        <div className={`w-full h-full overflow-hidden my-4 group py-8 px-4 lg:px-8 rounded-lg border-solid border-2 ${borderColor} hover:border-4 transition-all duration-700 ease-out`}>
            <h3 className="text-xl sm:text-2xl text-black-rich font-bold uppercase transition-transform duration-700 ease-out md:group-hover:scale-110">{title}</h3>
            <p className="text-base text-gray-dark transition-transform duration-700 ease-out group-hover:scale-102">{description}</p>
        </div>
    )
}

export default ServiceCard
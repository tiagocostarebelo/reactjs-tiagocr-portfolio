import React from 'react'
import logoHrz from '../../assets/tcr_logo_hrz.svg';
import { NavLink } from 'react-router';

const Footer = () => {
    return (
        <footer className="w-full h-auto flex flex-col gap-y-12 text-center py-24 px-6 md:px-12" >
            <div className="flex flex-col gap-y-12 md:flex-row gap-y-0 items-start justify-between">
                <div>
                    <a href="/">
                        <img className="w-40 md:w-50" src={logoHrz} alt="TiagoCR Logo" />
                    </a>
                </div>
                <div className="flex flex-col text-left space-x-4 text-sm">
                    <NavLink to="/" className="text-gray-dark">Home</NavLink>
                    <NavLink to="/about" className="text-gray-dark">About</NavLink>
                    <NavLink to="/projects" className="text-gray-dark">Projects</NavLink>
                    <NavLink to="/contact" className="text-gray-dark">Contact</NavLink>
                </div>
            </div>
            <p className="text-base text-dark-gray text-left">© Tiago Costa Rebelo - All rights reserved.</p>
        </footer>
    )
}

export default Footer
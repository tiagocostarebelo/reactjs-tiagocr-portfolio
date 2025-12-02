import { useState } from 'react'
import { NavLink } from 'react-router';
import { FaTimes, FaBars } from 'react-icons/fa';
import logoHrz from "../../assets/tcr_logo_hrz.svg";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const baseClasses = 'text-gray-dark text-base transition hover:text-mustard';
    const activeClasses = 'text-gray-dark text-base text-mustard font-semibold';

    return (
        <header className="sticky top-0 z-50 bg-white flex items-center justify-between py-6 px-6 md:px-12">
            <div className="">
                <a href="/">
                    <img className="w-40 md:w-50" src={logoHrz} alt="TiagoCR Logo" />
                </a>
            </div >
            <nav>
                {/* DESKTOP NAV */}
                <div className="hidden md:flex items-center gap-6">
                    <div className="space-x-4 text-sm text-gray-600">
                        <NavLink className={({ isActive }) => isActive ? activeClasses : baseClasses} to="/">Home</NavLink>
                        <NavLink className={({ isActive }) => isActive ? activeClasses : baseClasses} to="/about">About</NavLink>
                        <NavLink className={({ isActive }) => isActive ? activeClasses : baseClasses} to="/projects">Projects</NavLink>
                        <NavLink className={({ isActive }) => isActive ? activeClasses : baseClasses} to="/contact">Contact</NavLink>
                    </div>
                </div>

                {/* HAMBURGUER TOGGLE */}
                <div className="md:hidden flex items-center gap-4">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-primary text-xl cursor-pointer" title="Menu">
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </nav>
            {/* MOBILE NAV */}
            {menuOpen && <div className="absolute top-full right-0 w-full bg-white md:hidden flex flex-col items-center px-6 py-4 space-y-5 shadow-md transition">
                <NavLink onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? activeClasses : baseClasses} to="/">Home</NavLink>
                <NavLink onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? activeClasses : baseClasses} to="/about">About</NavLink>
                <NavLink onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? activeClasses : baseClasses} to="/projects">Projects</NavLink>
                <NavLink onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? activeClasses : baseClasses} to="/contact">Contact</NavLink>
            </div>}
        </header >
    )
}

export default Header
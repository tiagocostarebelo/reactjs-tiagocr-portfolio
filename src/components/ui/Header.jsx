import { useState, useEffect } from 'react'
import { NavLink } from 'react-router';
import { FaTimes, FaBars } from 'react-icons/fa';
import logoHrz from "../../assets/tcr_logo_hrz.svg";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const baseClasses = 'text-gray-dark text-base transition hover:text-mustard';
    const activeClasses = 'text-gray-dark text-base text-mustard font-semibold';

    return (
        <header className={`fixed top-0 w-full z-50 z-50 transition-all duration-500 bg-transparent flex items-center justify-between ${isScrolled ? 'bg-white/60 backdrop-blur-md shadow-sm' : 'bg-white/60'}`}>
            <div className="">
                <a href="/">
                    <img className="w-40 md:w-50" src={logoHrz} alt="TiagoCR Logo" />
                </a>
            </div >
            <nav>
                {/* DESKTOP NAV */}
                <div className="hidden lg:flex items-center gap-6">
                    <div className="space-x-4 text-sm">
                        <NavLink className={({ isActive }) => isActive ? activeClasses : baseClasses} to="/" onClick={() => window.scrollTo(0, 0)}>Home</NavLink>
                        <NavLink className={({ isActive }) => isActive ? activeClasses : baseClasses} to="/about" onClick={() => window.scrollTo(0, 0)}>About</NavLink>
                        <NavLink className={({ isActive }) => isActive ? activeClasses : baseClasses} to="/portfolio" onClick={() => window.scrollTo(0, 0)}>Portfolio</NavLink>
                        <NavLink className={({ isActive }) => isActive ? activeClasses : baseClasses} to="/services" onClick={() => window.scrollTo(0, 0)}>Services</NavLink>
                        <NavLink className={({ isActive }) => isActive ? activeClasses : baseClasses} to="/contact" onClick={() => window.scrollTo(0, 0)}>Contact</NavLink>
                    </div>
                </div>

                {/* HAMBURGUER TOGGLE */}
                <div className="lg:hidden flex items-center gap-4">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-primary text-xl cursor-pointer" title="Menu">
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </nav>
            {/* MOBILE NAV */}
            {menuOpen && <div className="absolute top-full right-0 w-full bg-white lg:hidden flex flex-col items-center px-6 py-4 space-y-5 shadow-md transition">
                <NavLink onClick={() => { setMenuOpen(false); window.scrollTo(0, 0) }} className={({ isActive }) => isActive ? activeClasses : baseClasses} to="/">Home</NavLink>
                <NavLink onClick={() => { setMenuOpen(false); window.scrollTo(0, 0) }} className={({ isActive }) => isActive ? activeClasses : baseClasses} to="/about">About</NavLink>
                <NavLink onClick={() => { setMenuOpen(false); window.scrollTo(0, 0) }} className={({ isActive }) => isActive ? activeClasses : baseClasses} to="/portfolio">Portfolio</NavLink>
                <NavLink onClick={() => { setMenuOpen(false); window.scrollTo(0, 0) }} className={({ isActive }) => isActive ? activeClasses : baseClasses} to="/services">Services</NavLink>
                <NavLink onClick={() => { setMenuOpen(false); window.scrollTo(0, 0) }} className={({ isActive }) => isActive ? activeClasses : baseClasses} to="/contact">Contact</NavLink>
            </div>}
        </header >
    )
}

export default Header
import { useState } from 'react'
import { NavLink } from 'react-router';
import { FaTimes, FaBars } from 'react-icons/fa';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header>
            <div>
                <a href="/">
                    <img alt="TiagoCR Logo" />
                </a>
            </div>
            <nav>
                {/* DESKTOP NAV */}
                <div>
                    <div>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/projects">Projects</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                    </div>
                </div>

                {/* HAMBURGUER TOGGLE */}
                <div>
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                {/* MOBILE NAV */}
                {menuOpen && <div>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/projects">Projects</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </div>}
            </nav>
        </header>
    )
}

export default Header
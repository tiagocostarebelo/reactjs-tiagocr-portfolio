import React from 'react'
import { NavLink, Link } from 'react-router'

const Button = ({ as: Component = "button", to, href, children, className }) => {
    if (Component === "navlink") {
        return (
            <NavLink to={to} className={className} onClick={() => window.scrollTo(0, 0)}>
                {children}
            </NavLink>
        )
    }

    if (Component === "link") {
        return (
            <Link to={to} className={className} onClick={() => window.scrollTo(0, 0)}>
                {children}
            </Link>
        )
    }

    if (href) {
        return (
            <a href={href} className={className} target="_blank">
                {children}
            </a>
        )
    }

    return (
        <button className={className}>
            {children}
        </button>
    )
}

export default Button
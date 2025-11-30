import React from 'react'
import { NavLink } from 'react-router'

const Button = ({ as: Component = "button", to, href, children, className, as }) => {
    if (Component === "navlink") {
        return (
            <NavLink to={to} className={className}>
                {children}
            </NavLink>
        )
    }

    if (href) {
        return (
            <a href={href} className={className}>
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
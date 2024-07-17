import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        // <Nav>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/programs">Programs</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/shop">Shop</NavLink>
                </li>
            </ul>
        // </Nav>
    )
}

export default Navbar
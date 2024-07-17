import React from 'react'
import { Link, NavLink } from 'react-router-dom'
// import logo from '.././'

const Header = () => {
    return (
        <nav>
            <img src="/assets/logo.png" class="logo" />
            <ul>
                <li><NavLink to={'/'} activeClassName="active">Home</NavLink></li>
                <li><NavLink to={'/about'} activeClassName="active">About</NavLink></li>
                <li><NavLink to={'/programs'} activeClassName="active">Our Programs</NavLink></li>
                <li><NavLink to={'/contact'} activeClassName="active">Contact us</NavLink></li>
                <li><NavLink to={'/shop'} activeClassName="active">Shop</NavLink></li>
                <li><NavLink to={'/'} activeClassName="active"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                </svg></NavLink></li>
            </ul>
        </nav>
    )
}



export default Header
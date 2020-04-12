import React from 'react';
import {NavLink} from 'react-router-dom'
import './Navbar.css';


const Navbar = () => {
    return(
        <div>
            <nav className="navbar">
            <i id="logo"className="fas fa-dice-d20 fa-3x"></i>
            <ul>
                <li><NavLink to ="/" exact>Home</NavLink></li>
                <li><NavLink to ="/services" >Services</NavLink></li>
                <li><NavLink to ="/contact" >Contact Us</NavLink></li>
            </ul>
        </nav>
        </div>
    )
}

export default Navbar
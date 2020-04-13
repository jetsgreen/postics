import React from 'react';
import {NavLink} from 'react-router-dom'
import './Navbar.css';


const Navbar = () => {
    return(
        <div>
            <nav className="navbar">
            <i id="logo"className="fas fa-dice-d20 fa-3x"></i><span><h2 style={{margin: '0', padding: '5px', color: 'white'}}>Felix Luxury Limo</h2></span>
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
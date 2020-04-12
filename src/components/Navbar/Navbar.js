import React from 'react';
import {NavLink} from 'react-router-dom'
import './Navbar.css';


const Navbar = () => {
    return(
        <div>
            <nav class="navbar">
           
            <ul>
                
                <li><NavLink to ="/" exact>Home</NavLink></li>
                <li><NavLink to ="/services" >Services</NavLink></li>
                <li><NavLink to ="/contact" >Contact Me</NavLink></li>
            </ul>
        </nav>
        </div>
    )
}

export default Navbar
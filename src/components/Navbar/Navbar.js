import React from 'react';
// import AppBar from '@material-ui/core/AppBar';
// import Typography from '@material-ui/core/Typography';
// import Toolbar from '@material-ui/core/Toolbar';
import { NavLink } from 'react-router-dom'
import './Navbar.css';


const Navbar = () => {
    return (
        <div className="navbar_container">
            
           
            <nav className="navbar">
            <h1>Felix Luxury Limo</h1>
                     <div className="navbar-links">
                        <NavLink to="/" className="links">
                           Home
                        </NavLink>
                        <NavLink to="/about" className="links">
                           About 
                        </NavLink>

                        <NavLink to="/services" className="links">
                           Services
                        </NavLink>

                        <NavLink to="/contact" className="links">
                           Contact
                        </NavLink>
                     </div>
                  

           </nav>  
           </div>  
    )
}

export default Navbar
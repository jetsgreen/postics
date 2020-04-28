import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { NavLink } from 'react-router-dom'
import './Navbar.css';


const Navbar = () => {
    return (
        <div className="toolbar">
            <AppBar position="static" >
                <Toolbar xs={3} md={12}>

                    <Typography variant="h6" className="navbar">
                        <NavLink to="/" style={{ color: "white", textDecoration: "none" }}>Home</NavLink>
                
                        <NavLink to="/services" style={{ color: "white", textDecoration: "none" }}>Services</NavLink>
                
                        <NavLink to="/contact" style={{ color: "white", textDecoration: "none" }}>Contact</NavLink>
                    </Typography>
                    
                </Toolbar>
            </AppBar>

        </div>
    )
}

export default Navbar
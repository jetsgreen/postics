import React from 'react';
import './Jumbotron.css';

import { NavLink } from 'react-router-dom'


const Jumbotron = () => {
    return (

        <React.Fragment>
            
             
            <section className="showcase">
                
                <div className="video-container">
                    {/* <video src="../../video/main.mp4" autoPlay loop></video> */}
                    <img src="https://images.unsplash.com/photo-1559075403-a91eebbc7d03?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1190&q=80" alt="substitute"/>
                    
                </div>
                <div className="content">
                    <h1>Felix Luxury Limo</h1>
                    <h3>We Can Get You There</h3>
                   
                    <NavLink to="/contact" className="btn">Make a Reservation</NavLink>
                    <NavLink to="/about" className="btn">Learn More</NavLink>
                   
                </div>
            </section>
            
        </React.Fragment>

    )

}

export default Jumbotron


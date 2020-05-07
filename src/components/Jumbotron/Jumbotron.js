import React from 'react';
import './Jumbotron.css';
import videoMP4 from '../../video/main.mp4';
import { NavLink } from 'react-router-dom'


const Jumbotron = () => {
    return (

        <React.Fragment>
            <section className="showcase">
                
                <div className="video-container">
                    <video src={videoMP4} autoPlay loop></video>

                </div>
                <div className="content">
                    <h2>Felix Luxury Limo</h2>
                    <h4>We Can Get You There</h4>
                   
                    <NavLink to="/contact" className="btn">Make a Reservation</NavLink>
                    <NavLink to="/about" className="btn">Learn More</NavLink>
                   
                </div>
            </section>
            
        </React.Fragment>

    )

}

export default Jumbotron


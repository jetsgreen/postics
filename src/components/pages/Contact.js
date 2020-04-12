import React from 'react';
import './Contact.css'

const Contact = () => {
    return(
        <div className="section" id="contact">
            <h1>Contact Us</h1>
            <p>
                Don't hesitate to call or call
            </p>
            <div className="info">
                <div className="contact-links">

                    <p id="phone-number"><a href="tel:973-896-9924">Cell: (973) 896-9924</a></p>
                    <p id="email"><a
                            href="mailto:fernandezfelix460@gmail.com? subject=subject text">fernandezfelix460@gmail.com</a>
                    </p>

                </div>
            </div>
        </div>
    )
}

export default Contact
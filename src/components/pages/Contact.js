import React from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import './Contact.css'


const Contact = () => {
    return(
       <section id="contact-section">
           <Container className="container">
             
               <h1>Contact Us</h1>
               <p>Email us</p>
               <div className="contact-form">
                   <i className="fa fa-map-marker"></i><span className="form-info">Tri-State Area</span>
                   <i className="fa fa-phone"></i><span className="form-info">973-896-9924</span>
                   <div className="email">
                   <i className="fa fa-envelope"></i><span className="form-info">fernandezfelix460@gmail.com</span>
                   </div>
               </div>

               <div className="div-form">
                   <form>
                    <input type="text" placeholder="Your Name" required/>
                    <input type="text" placeholder="Last Name" required/>
                    <input type="text" placeholder="Email" required/>
                    <input type="text" placeholder="Subject" required/>
                    <textarea name="message" placeholder="Message" rows="5" required></textarea>
                   </form>
                   <Button variant="contained" style={{marginTop: "10px",}}>
                   Send
                   </Button>
               </div>
              
           </Container>
       </section>
    )
}

export default Contact

 // <div className="section" id="contact">
        //     <h1>Contact Us</h1>
        //     <p>
        //         Don't hesitate to call or call
        //     </p>
           
        //         <div className="contact-links">
        //                 <h3>Felix Fernandez</h3>
        //             <p id="phone-number"><a href="tel:973-896-9924"> Cell: (973) 896-9924</a></p>
        //             <p id="email"><a
        //                     href="mailto:fernandezfelix460@gmail.com? subject=subject text">fernandezfelix460@gmail.com</a>
        //             </p>

        //         </div>
            
        // </div>
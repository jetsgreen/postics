import React from 'react';
import './HomeContainer.css';
import Container from '@material-ui/core/Container';


const HomeContainer = () => {
    return (
      
        <Container>
            <div className="home-header">
                <h1>WE CAN TAKE YOU ANYWHERE</h1>
                <p>Whether it's a party, wedding, casino, birthday celebration, prom, or just a night on the town, 
                    we can take you anywhere you need to go in stlye and confort.
                </p>
            </div>
            <div>
        <div>
            <div class="home-container">
                <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mb-metris-gallery-passenger-van-02-1578419740.jpg?crop=0.752xw:1.00xh;0.0529xw,0&resize=640:*" alt="image" class="image" />
                <div class="overlay overlayFade">
                    <div class="text">
                        <p>Whether you are on a business trip, vacation, or have a special occasion, Empire Limousine is at your service. 
                            We have a number of different fleet options, 
                            so you are sure to find a vehicle within your budget to meet your needs.</p>
                    </div>
                </div>
            </div>
            <div class="home-container">
                <img src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="image" class="image" />
                <div class="overlay overlayFade">
                    <div class="text">
                        <p>At Felix Luxury Limo, we have a team of qualified and experienced chauffeurs for providing a smooth ride. 
                            A skillful professional training is provided to our
                             drivers only after which they qualify to serve you.</p>
                    </div>
                </div>
            </div>
            <div class="home-container">
                <img src="https://images.unsplash.com/photo-1464038008305-ee8def75f234?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="image" class="image" />
                <div class="overlay overlayFade">
                    <div class="text">
                        <p>Empire Limousine offers a luxurious chauffeur service right within your budget. 
                            Choose an airport anywhere in the Try-State area and you will have our airport
                             transfer service which is completely reliable and safe.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
            
       </Container>
       

    )
}

export default HomeContainer



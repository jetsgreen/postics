import React from 'react';
import './Jumbotron.css'


const Jumbotron =() => {
    return (
        
<div className="top-container">
            <header className="showcase">
                <h1>Let Us Take You There</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium fuga molestiae veritatis possimus, saepe dolores,

                </p>
                <button className="btn">Read more</button>
            </header>
            <div className="top-box top-box-a">
                <h4>Membership</h4>
                <p className="price">$199/mo</p>
               
            </div>
            <div className="top-box top-box-b">
                <h4>Pro-Membership</h4>
                <p className="price">$299/mo</p>
                
            </div>
        </div>

    
       
    )
    
}

export default Jumbotron
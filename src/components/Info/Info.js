import React from 'react';
import Container from '@material-ui/core/Container'
import './Info.css';


const Info = () => {
    return (
     
        <div className="info">
            <Container className="info-container">
            <div className="text">
            <h1>We only hire the best drivers</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium fuga molestiae veritatis possimus, saepe dolores
                ,Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium fuga molestiae veritatis possimus, saepe dolores,
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium fuga molestiae veritatis possimus, saepe dolores,
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium fuga molestiae veritatis possimus, saepe dolores,
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium fuga molestiae veritatis possimus, saepe dolores,
            </p>
            </div>
            <img className="img" alt="" src="https://images.unsplash.com/photo-1542176482-88bc4b4dbaf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=748&q=80" height="250px" width="250px"/>
            </Container>
        </div>
        
        
    )
}


export default Info
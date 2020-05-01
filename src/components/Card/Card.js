import React from "react";
import "./Card.css";


const Card = (props) =>{
  return (
    
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
             <h1>{props.name}</h1>
          </li>
          <li>
             {props.title}
          </li>
          <li>
             {props.description}
          </li>
          
          
        </ul>
      </div>
    
    </div>
  
  );
}

export default Card;
import React, { Component } from 'react';
import Card from '../Card/Card';
import services from "../../services.json";

export class Services extends Component {
    state = {
        services
    }
    render() {

        return (

            <div>
                 <p>We offer many different services such as airport transportation, private aviation services, pier & cruise transportation, wedding & prom transportation, drives to casinos or business travel, family travel, and many more! Empire Limousine is your one-stop destination for all your transportation needs.
                           If you are a travel agent, book your client with Felix Luxury Limo and get a 5% commission on every ride.</p>        
                {this.state.services.map(service => (
                  <Card
                  id={service.id}
                  key={service.key}
                  image={service.image}
                  name={service.name}
                  title={service.title}
                  description={service.descripiton}/>
                  
            ))}

            </div>
        )
    }
}

export default Services




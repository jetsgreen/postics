import React, { Component } from 'react';
import Card from '../Card/Card';
import services from "../../services.json";
import ServiceDiv from '../ServiceDiv/ServiceDiv'

export class Services extends Component {
    state = {
        services
    }
    render() {

        return (

            <div>
                 <ServiceDiv/>        
                {this.state.services.map(service => (
                  <Card
                  id={service.id}
                  key={service.id}
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




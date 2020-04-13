import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Layout from './components/Layout/Layout';
import services from './services.json';


export class Container extends Component {
    state= {
        services
    }
    render() {
        return (
            <div>
                <Navbar />
                <Layout>
                   

                </Layout>
            </div>
        )
    }
}

export default Container

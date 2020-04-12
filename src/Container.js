import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Layout from './components/Layout/Layout';


export class Container extends Component {
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

import React, { Component } from 'react';
import MainLayout from '../components/layouts/mainLayout';
import Message from '../components/includes/message';
import Router from 'next/router';

class About extends Component {

    handleRouteStart = url => {
        console.log('App is changing to: ', url)
    }

    handleRouteChangeComplete = url => {
        console.log('App changed: ', url)
    }

    componentDidMount(){
        Router.events.on('routeChangeStart', this.handleRouteStart);
        Router.events.on('routeChangeComplete', this.handleRouteChangeComplete);
    }



    render() {
        return (
            <>
                <MainLayout>
                    <h1>Welcome to my about page</h1>
                    <h1>About</h1>
                    <Message />
                    <br/>
                    <span onClick={()=> Router.push('/users/profile/1')}>
                        Click mew now!!!
                    </span>
                </MainLayout>
            </>
        )
    }
}

export default About;
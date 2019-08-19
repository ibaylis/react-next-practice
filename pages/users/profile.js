import React, { Component } from 'react';
import MainLayout from '../../components/layouts/mainLayout';
import axios from 'axios';

class Profile extends Component {
    static async getInitialProps({query}) {
        let user;

        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${query.userId}`);
            user = response.data
        } catch (error) {
            console.error(error);
        }
        return {user}
    }

      showUser = (user) => (
            <div>
                <div>Name: {user.name}</div>
                <div>Phone: {user.phone}</div>
                <div>Email: {user.email}</div>
            </div>
        ) 
    
        render(){
                return (
                    <MainLayout>
                        <br />
                        <h1>User Profile</h1>
                        <br />
                        <h1>Welcome to the profile page</h1>
                        <br />
                        {this.showUser(this.props.user)}
                    </MainLayout>
            )
        }
    }

    Profile.getInitialProps = async ({req}) => {
        return { values: '1,2,3,4,5'}
    }

export default Profile;
import React, { Component } from 'react';
import axios from 'axios';
import MainLayout from '../components/layouts/mainLayout';
import Link from 'next/link';
import MyStyle from '../styles/main.css';

class Home extends Component {
    static async getInitialProps({pathname, query, asPath, req, res}){
        let userData;

        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            userData = response.data;
        } catch {
            console.log('error');
        }
        return {
            user: {
                name: 'Francis',
                lastname: 'Jones'
            },
            userData
        }
    }

    constructor(props) {
        super(props);
    }

    renderUserList = (users) => (
        users.map((user, i) => (
            <li className="list-group-item" key={i}>
                <Link href={{
                    pathname: `/users/profile`,
                    query: {
                        userId: user.id
                    }
                }}>
                    <a>{user.name}</a>
                </Link>
            </li>
        ))
    )

    render() {
        return (
            <>
                <MainLayout>
                    <h1>Pick a user</h1>
                    <ul className="list-group">
                        {this.renderUserList(this.props.userData)}
                    </ul>
                </MainLayout>
            </>
        )
    }
}

export default Home;
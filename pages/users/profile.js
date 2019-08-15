import React from 'react';
import MainLayout from '../../components/layouts/mainLayout';

const Profile = (props) => {
        console.log(props)

        return (
            <>
                <MainLayout>
                    <h1>Welcome to the profile page</h1>
                </MainLayout>
            </>
        )
    }

    Profile.getInitialProps = async ({req}) => {
        return { values: '1,2,3,4,5'}
    }

export default Profile;
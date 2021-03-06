import React, { Component } from 'react';
import MainLayout from '../components/layouts/mainLayout';

class Contact extends Component {
    render() {
        return (
            <>
                <MainLayout>
                    <h1>Welcome to my contact page</h1>
                    <div className="jsxStyled">
                        Hello guys
                    </div>
                    <style jsx>
                        {`
                            .jsxStyled {
                                color: blue
                            }

                        `}
                    </style>
                    <div className="contact_static">
                            Styles with static css
                    </div>
                    <div>
                        <img src="/static/images/knicks.jpeg" />
                    </div>
                </MainLayout>
            </>
        )
    }
}

export default Contact;
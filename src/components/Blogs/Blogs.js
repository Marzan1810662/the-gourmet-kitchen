import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div>
            <div className='my-2 py-2 my-md-4 py-md-4 '>
                <h2 className='services-title'>Question and Answers</h2>
                <div className='title-underline-div'></div>
            </div>
            <div className='d-flex container qna-container'>
                <div>
                    <h4>Q1. Difference between authorization and authentication?</h4>
                    <p>Authentication is the process of verifying a user's identity, whereas authorization is the act of providing a user access to specified features. Authentication is a digital security process that ensures user's identity. After the authentication process, authorization is used to grant the user access to  information and to do certain tasks, based on previously defined criteria.  The authentication process, validates user's identity for example a website's login process. On the other hand, authorization process determines the user's level of access to various portions of the website. For example, an administrator has more access to the website than an ordinary user.</p>
                </div>
                <div>
                    <h4>Q2.Why are you using firebase? What other options do you have to implement authentication?</h4>
                    <p>We are using firebase for user authentication and hosting. Firebase is one of the popular services for authentication. Some other alternative options are listed below:</p>
                    <span className='d-flex ms-2'>
                        <ul>
                            <li>Auth0</li>
                            <li>Okta</li>
                            <li>Passport</li>
                            <li>MongoDB </li>
                        </ul>
                        <ul>
                            <li>Amazon Cognito</li>
                            <li>Keycloak</li>
                        </ul>
                    </span>
                </div>
                <div>
                    <h4>Q3. What other services does firebase provide other than authentication</h4>
                    <p>Firebase offers a variety of features that aid in the development of high-quality mobile and online applications. It works with web browsers and other operating systems. Firebase is a complete solution for developing mobile and online applications faster and more efficiently with fewer resources. Other than authentication, Firebase offers a variety of features to make developers' lives easier. The following are some of the services provided by Firebase:</p>
                    <span className='d-flex ms-2'>
                        <ul>
                            <li>Hosting</li>
                            <li>Google Storage</li>
                            <li>Google Analytics</li>
                            <li>Cloud Messaging</li>
                            <li>Cloud Firestore</li>
                        </ul>
                        <ul>
                            <li>Dynamic Links</li>
                            <li>Remote Config</li>
                            <li>Predictions</li>
                            <li>Cloud Functions</li>
                        </ul>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
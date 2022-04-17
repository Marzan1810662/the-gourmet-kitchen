import React from 'react';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Sociallogin.css';

const SocialLogin = () => {
    return (
        <div className='d-flex flex-column align-items-center social-container'>
                <button className='google-login-btn'><FontAwesomeIcon className='me-2'  icon={faGoogle}></FontAwesomeIcon>Continue with Google</button>
                <button className='facebook-login-btn'><FontAwesomeIcon className='me-2' icon={faFacebook}></FontAwesomeIcon>Continue with Facebook</button>
            </div>
    );
};

export default SocialLogin;
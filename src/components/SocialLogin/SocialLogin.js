import React from 'react';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import './Sociallogin.css';
import auth from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const from = location?.state?.from.pathname || '/';
    if (user) {
        navigate(from, { replace: true });
    }
    let errorElement;
    if(error){
        console.log(error.message);
        errorElement = <p className='text-danger'>{error.message}</p>

    }
    return (
        <div className='d-flex flex-column align-items-center social-container'>
            {errorElement}
            <button onClick={() => signInWithGoogle()} className='google-login-btn'><FontAwesomeIcon className='me-2' icon={faGoogle}></FontAwesomeIcon>Continue with Google</button>
            <button className='facebook-login-btn'><FontAwesomeIcon className='me-2' icon={faFacebook}></FontAwesomeIcon>Continue with Facebook</button>
        </div>
    );
};

export default SocialLogin;
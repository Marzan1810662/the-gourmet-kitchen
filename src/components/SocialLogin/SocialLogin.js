import React from 'react';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import './Sociallogin.css';
import auth from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [signInWithGoogle, googleUser, googleLoading, googleSigninError] = useSignInWithGoogle(auth);
    const [signInWithFacebook, facebookUser, facebookLoading, facebookSigninError] = useSignInWithFacebook(auth);

    const from = location?.state?.from.pathname || '/';

    if (googleUser || facebookUser) {
        navigate(from, { replace: true });
    }
    let errorElement;
    if(googleSigninError || facebookSigninError){
        console.log(googleSigninError.message);
        errorElement = <p className='text-danger'>{googleSigninError?.message}{facebookSigninError?.message}</p>

    }
    return (
        <div className='d-flex flex-column align-items-center social-container'>
            {errorElement}
            <button onClick={() => signInWithGoogle()} className='google-login-btn'><FontAwesomeIcon className='me-2' icon={faGoogle}></FontAwesomeIcon>Continue with Google</button>
            <button onClick={() => signInWithFacebook()} className='facebook-login-btn'><FontAwesomeIcon className='me-2' icon={faFacebook}></FontAwesomeIcon>Continue with Facebook</button>
        </div>
    );
};

export default SocialLogin;
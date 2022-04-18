import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Signup.css';

const Signup = () => {
    const [agree, setAgree] = useState(false);
    const [emailError, setEmailError]= useState('');
    const [passwordError, setPasswordError] = useState('');
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const confirmPasswordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        createUserError,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    const [updateProfile, updating, updatingProfileError] = useUpdateProfile(auth);


    const handleSignUp = async (event) => {
        event.preventDefault();

        const displayName = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;

        const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!emailRegEx.test(email)){
            console.log('blabla');
            setEmailError('Enter a valid email');
            return;
        }

        if (password !== confirmPassword) {
            setPasswordError('Passwords do not Match');
            return;
        }

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName });
        // alert('profile updated');

    }
    if (loading || updating) {
        console.log('spiner from sign up');
        return <LoadingSpinner></LoadingSpinner>;
    }
    const from = location?.state?.from?.pathname || '/';
    if (user) {
        console.log(user);
        navigate(from, { replace: true });
    }
    let errorElement;
    if (createUserError || updatingProfileError) {
        console.log(createUserError.message);
        console.log(updatingProfileError.message);
        errorElement = <p className='text-danger'>{(createUserError.message)(updatingProfileError.message)}.</p>
    }
    return (
        <div className='container signup-form-container'>
            <div className='form-title-container'>
                <h2 className='form-title'>Sign Up</h2>
            </div>
            <Form onSubmit={handleSignUp} className='login-form'>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control type="text" ref={nameRef} placeholder="Enter name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" ref={emailRef} placeholder="Enter email" required />
                </Form.Group>
                <p className='text-danger'>{emailError? emailError : ''}</p>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" ref={passwordRef} placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Control type="password" ref={confirmPasswordRef} placeholder="Confirm Password" required />
                </Form.Group>
                <p className='text-danger'>{passwordError? passwordError : ''}</p>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={() => setAgree(!agree)} type="checkbox" label="I Agree to the Terms and Conditions" />
                </Form.Group>
                {errorElement}
                <div className='text-center mb-3'>
                    <Button className='login-btn' type="submit" disabled={!agree}>
                        Sign Up
                    </Button>
                </div>
                <p>Already Have An Account? <Link to='/login'>Login</Link> </p>
            </Form>
            <div className='mt-2 d-flex align-items-center divider-div'>
                <div></div>
                <p>Or</p>
                <div></div>
            </div>
            <SocialLogin />
        </div>
    );
};

export default Signup;
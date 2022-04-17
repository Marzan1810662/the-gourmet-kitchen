import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../../SocialLogin/SocialLogin';
import './Signup.css';

const Signup = () => {
    const [agree, setAgree] = useState(false);
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
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const handleSignUp = (event) => {
        event.preventDefault();

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;

        createUserWithEmailAndPassword(email, password);

    }
    const from = location?.state?.from?.pathname || '/';
    if(user)
    {
        navigate(from , {replace:true});
    }
    let errorElement;
    if(error){
        if(error){
            console.log(error.message);
            errorElement = <p className='text-danger'>An Error Occured. Please try again.</p>
    
        }
    }
    return (
        <div className='container signup-form-container'>
            <div className='form-title-container'>
                <h2 className='form-title'>Sign Up</h2>
            </div>
            <Form onSubmit={handleSignUp} className='login-form'>
            <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control type="text" ref={nameRef} placeholder="Enter name" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" ref={emailRef} placeholder="Enter email" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" ref={passwordRef} placeholder="Password" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Control type="password" ref={confirmPasswordRef} placeholder="Confirm Password" required/>
                </Form.Group>
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
            <SocialLogin/>
        </div>
    );
};

export default Signup;
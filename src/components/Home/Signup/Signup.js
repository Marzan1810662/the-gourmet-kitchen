import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialLogin from '../../SocialLogin/SocialLogin';
import './Signup.css';

const Signup = () => {
    const [agree, setAgree] = useState(false);
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passworsRef = useRef('');
    const confirmPasswordRef = useRef('');
    const handleSignUp = (event) => {
        event.preventDefault()
    }
    return (
        <div className='container signup-form-container'>
            <div className='form-title-container'>
                <h2 className='form-title'>Sign Up</h2>
            </div>
            <Form onSubmit={handleSignUp} className='login-form'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Enter name" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Confirm Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={() => setAgree(!agree)} type="checkbox" label="I Agree to the Terms and Conditions" />
                </Form.Group>
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
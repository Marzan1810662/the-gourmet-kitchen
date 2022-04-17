import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../../SocialLogin/SocialLogin';
import './Login.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const handleLogIn = (event) => {
        event.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password)
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
        <div className='container login-form-container'>
            <div className='form-title-container'>
                <h2 className='form-title'>Login</h2>
            </div>
            <Form onSubmit={handleLogIn} className='login-form'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <p>Don't Have An Account? <Link to='/signup'>Sign up</Link> </p>
                {errorElement}
                <div className='text-center'>
                    <Button className='login-btn' type="submit">
                        Login
                    </Button>
                </div>
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

export default Login;
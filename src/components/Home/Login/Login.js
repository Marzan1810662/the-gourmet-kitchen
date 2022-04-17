import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialLogin from '../../SocialLogin/SocialLogin';
import './Login.css';

const Login = () => {
    return (
        <div className='container login-form-container'>
            <div className='form-title-container'>
                <h2 className='form-title'>Login</h2>
            </div>
            <Form className='login-form'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    {/* <Form.Label>Email address</Form.Label> */}
                    <Form.Control type="email" placeholder="Enter email"  required/>
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    {/* <Form.Label>Password</Form.Label> */}
                    <Form.Control type="password" placeholder="Password" required/>
                </Form.Group>
                <p>Don't Have An Account? <Link to='/signup'>Sign up</Link> </p>
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
            <SocialLogin/>
        </div>
    );
};

export default Login;
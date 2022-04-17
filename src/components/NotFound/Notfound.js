import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';

const Notfound = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className='notfound-banner-img'>
                <div className='notfound-banner-text'>
                    <h1>Sorry! page Not Found</h1>
                    <button onClick={() => navigate('/')}>Back To Home Page</button>
                </div>
            </div>
        </div>
    );
};

export default Notfound;
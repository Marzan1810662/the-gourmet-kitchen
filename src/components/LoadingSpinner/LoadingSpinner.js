import React from 'react';
import { Spinner } from 'react-bootstrap';

const LoadingSpinner = () => {
    return (
        <div className='w-100 my-5 py-5'>
           <Spinner animation="border" variant="light" />
        </div>
    );
};

export default LoadingSpinner;
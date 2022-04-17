import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const {name, picture,description, price} = service;
    return (
        <div className='pb-3 service'>
            <img className='img-fluid' src={picture} alt="" />
            <h2 className='my-2'>{name}</h2>
            <p className='mb-2'>{description}</p>
            <p className='mb-2'>Price:{price} per meal</p>
            <button className='book-btn'>Book</button>
            {name === 'Dessert'?<div className='new-badge'>New</div>: <></>}
        </div>
    );
};

export default Service;
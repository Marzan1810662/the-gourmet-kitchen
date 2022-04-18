import React from 'react';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const { services } = useServices();
    // console.log(services);
    return (
        <div className='my-1 py-2 my-md-2 py-md-2'>
            <div className='my-2 py-2 my-md-4 py-md-4 '>
                <h2 className='services-title'>All Services</h2>
                <div className='title-underline-div'></div>
            </div>
            <div className='container services-container'>
            {
                services.map(service => <Service key={service._id} service={service} />)
            }
        </div>
        </div>
    );
};

export default Services;
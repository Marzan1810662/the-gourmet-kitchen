import React from 'react';
import './About.css';
import developer from '../../images/developer.jpg'

const About = () => {
    return (
        <div >
            <div className='my-2 py-2 my-md-4 py-md-4 '>
                <h2 className='services-title'>About The Developer</h2>
                <div className='title-underline-div'></div>
            </div>
            <div className='d-md-flex justify-content-space-evenly align-items-center container about-container'>
                <div className='description-div'>
                    <h3>Hi! I am <br /> <span  className='fw-bold'> Marzan Binte Hassan</span></h3>
                    <p>I am an aspiring developer. I am very passionate about web development and want to persue my career as a developer. Currently I am learning React js - a javascript library. As react is easier and popular among other js libraries, I am preparing myself to join the industry as a react developer. </p>
                </div>
                <div className='img-div'>
                    <img className='img-fluid' src={developer} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;
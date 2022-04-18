import { faFacebook, faInstagramSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className='mt-md-3 footer-main-container'>
            <div className='mt-2 container footer-sub-container'>
                <div className='order-0 order-md-1 quick-link-container'>
                    <h5>Quick Links</h5>
                    <Link to='/'>Home</Link>
                    <Link to='/blogs'>Blogs</Link>
                    <Link to='/about'>About</Link>
                </div>
                <div className='order-2 order-md-2'>
                    <div className='my-2 my-md-3'>
                        <FontAwesomeIcon className='me-4 fs-3' icon={faFacebook}></FontAwesomeIcon>
                        <FontAwesomeIcon className='me-4 fs-3' icon={faInstagramSquare}></FontAwesomeIcon>
                        <FontAwesomeIcon className='me-4 fs-3' icon={faYoutubeSquare}></FontAwesomeIcon>
                    </div>
                    <div className='subscription-container'>
                        <input type="email" placeholder='Email' />
                        <br />
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className='mt-3 mt-md-4'>
                <h6>copyright &copy; {year} The Gourmet Kitchen</h6>
            </div>
        </div>
    );
};

export default Footer;
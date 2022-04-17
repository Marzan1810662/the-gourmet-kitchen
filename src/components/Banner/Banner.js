import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner1 from '../../images/banner/banner1.jpg';
import banner2 from '../../images/banner/banner2.jpg';
import banner3 from '../../images/banner/banner3.jpg';
import logo from '../../images/logo1.png';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="img-fluid d-block"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <Link to='/'><img className='logo' src={logo} alt="" /></Link>
                        <h3>Fresh and Healthy Ingredients</h3>
                        <p>Ingredient are carefully handpicked.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="img-fluid d-block"
                        src={banner2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <Link to='/.'><img className='logo' src={logo} alt="" /></Link>
                        <h3>Home Made</h3>
                        <p>All the foods are prepared at my kitchen.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="img-fluid d-block"
                        src={banner3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <Link to='/.'><img className='logo' src={logo} alt="" /></Link>
                        <h3>Cooked with love</h3>
                        <p>You get the taste of home cooked meals.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;
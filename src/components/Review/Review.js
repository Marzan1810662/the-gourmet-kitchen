import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Rating from 'react-rating';
import './Review.css';

const Review = ({ review }) => {
    const { picture, name, reviewText, rating } = review;
    return (
        <div className=' text-center d-flex review-container'>
            <div className='user-img-div'><img className='img-fluid' src={picture} alt="" /></div>
            <div className='user-review-div'>
                <h5>{name}</h5>
                <p><i>{reviewText}</i> </p>
                <p className='mb-0'><Rating
                    initialRating={rating}
                    emptySymbol={<FontAwesomeIcon icon={faStar} />}
                    fullSymbol={<FontAwesomeIcon style={{ color: '#efd289' }} icon={faStar} />}
                    readonly
                ></Rating></p>
            </div>
        </div>
    );
};

export default Review;
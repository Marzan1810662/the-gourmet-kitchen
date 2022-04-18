import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {
    const { reviews } = useReviews();
    return (
        <div>
            <div className='my-2 py-2 my-md-4 py-md-4 '>
                <h2 className='services-title'>What Clients Say</h2>
                <div className='title-underline-div'></div>
            </div>
            <div className='my-3'>
                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;
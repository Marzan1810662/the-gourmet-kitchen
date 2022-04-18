import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import swal from 'sweetalert';
import auth from '../../firebase.init';
import './Checkout.css';

const Checkout = () => {
    const [user, loading, error] = useAuthState(auth);
    
    const handleCheckoutSubmit =(event) => {
        event.preventDefault();

        swal({
            title: "The Gourmet Kitchen",
            text: "Thank You for Choosing The Gourmwet Kitchen!",
            icon: 'success',
          });
    }
    return (
        <div>
            <div className='checkout-form-container'>
            <h2>Checkout</h2>
               <form onSubmit={handleCheckoutSubmit}>
               <input type="text" name="name" id="name" value={user.displayName}/>
                <input type="text" name="email" id="email" value= {user.email} readOnly/>
                <input type="text" name="phone" id="phone" placeholder='Phone Number' required/>
                <input type="text" name="address" id="address" placeholder='Address' required/>
                <button>Submit</button>
               </form>
            </div>
        </div>
    );
};

export default Checkout;
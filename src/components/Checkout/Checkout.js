import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Checkout.css';

const Checkout = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div>
            <div className='checkout-form-container'>
            <h2>Checkout</h2>
               <form>
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
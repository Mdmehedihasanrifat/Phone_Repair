import React from 'react';
import {Elements,CardElement} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SimpleCardFrom from "./SimpleCardFrom";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51IexpBHZx2nFHRt8DUC2tU2bCCYB4Wq0TgxjdZEpmst9BqLpQqv9fGUhKlhP0EapIlcBbPqSPvGrFjql4aF20rDN00bqIsEVmJ');


const ProcessPayment = () => {
    return (
        <div>
            <Elements stripe={stripePromise}>
              <SimpleCardFrom></SimpleCardFrom>
            </Elements>
        </div>
    );
};

export default ProcessPayment;
import React from 'react';
import { useForm } from 'react-hook-form';
import './Shipment.css';
import { useContext } from 'react';
import { userContext } from '../../App';
import ProcessPayment from "../processPayment/processPayment";

const Shipment = () => {

  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const onSubmit = data => {
      console.log('form submitted', data)
    };



  return (
      <div className="row">
          <form className="ship-form">
          <input name="name"  placeholder="Your Name"/>
          <span className="error">Name is required</span>

          <input name="email" defaultValue={loggedInUser.email} placeholder="Your Email"/>
          <span className="error">Email is required</span>

          <input name="address"  placeholder="Your Address" />
          <span className="error">Address is required</span>

          <input name="phone" placeholder="Your Phone Number"/>
          <span className="error">Phone Number is required</span>

          <input type="submit" />

          </form>
          <div className="col-5">
          <h2>Pay</h2>
             <ProcessPayment></ProcessPayment>
          </div>
      </div>
  );
};

export default Shipment;
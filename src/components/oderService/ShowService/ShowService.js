import React, {useState} from 'react';
import {Link} from "react-router-dom";
;

const ShowService = (props) => {
    const Style={

        "width":"250px",
        "height":"250px"
    }
const [Cart,SetCart]=useState([])
    let ShowaddCart=props.showAddToCart;
    const handleAddcart=(product)=>{
         const newCart={...Cart,product}
         SetCart(newCart);
         ShowaddCart=true;

    }


    const {name,price,photo}=props.sc;

    return (

            <div className="col-md-4">
                <div className="card w-100 text-white my-2 align-items-center justify-content-center" id="bgDark">
                    <img className="card-img-top text-white" style={Style} src={photo}alt="Card image cap"/>
                    <div className="card-body">
                        <h1>{name}</h1>
                        <p className="card-text">Some quick example text to build on the card title and make up the
                            bulk of the card's content.</p>
                        <p>${price}</p>

                        <Link to="/Shipment" className="btn btn-primary" >Buy Service</Link>


                    </div>
                </div>
            </div>

    );
};

export default ShowService;
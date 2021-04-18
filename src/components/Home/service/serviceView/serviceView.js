import React from 'react';
import ShowService from "../../../oderService/ShowService/ShowService";
import img2 from "../serviceImg/smartphone (1).png";

const ServiceView = (props) => {
    const {name,price,photo}=props.sc;
    const Style={

        "width":"250px",
        "height":"250px"
    }
    return (

            <div className="col-md-4">

                <div className="card w-100 text-white my-2 align-items-center justify-content-center" id="bgDark">
                    <img className="card-img-top text-white" style={Style}  src={photo}alt="Card image cap"/>
                    <div className="card-body">
                        <h1>{name}</h1>
                        <p className="card-text">Some quick example text to build on the card title and make up the
                            bulk of the card's content.</p>
                        <p>${price}</p>

                    </div>
                </div>

        </div>
    );
};

export default ServiceView;
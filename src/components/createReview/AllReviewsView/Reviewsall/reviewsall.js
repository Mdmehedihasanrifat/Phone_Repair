import React from 'react';
import {Link} from "react-router-dom";

const Reviewsall = (props) => {
    const{name,photo,reviews}=props.re;
    return (
        <div>
            <div className="col-md-4">
                <div className="card" >

                    <div className="card-body">

                        <p className="card-text">Some quick example text to build on the card title and make up the bulk
                            of the card's content.</p>
                        <p className="font-weight-bolder">{reviews}</p>
                    </div>
                    <div className="card-footer d-flex d-inline-block float-right">
                        <img src={photo} className="img-thumbnail img"/>
                        <h2 className="d-flex m-4 align-items-center justify-content-center">{name}</h2>

                    </div>

                </div>


            </div>


        </div>
    );
};

export default Reviewsall;
import React, {useEffect, useState} from 'react';
import CreateReviews from "../createReviews";
import img3 from "../../Home/review/review.jpg";
import {Link} from "react-router-dom";
import Navbar from "../../Home/navbar/navbar";
import Footer from "../../Home/Footer/Footer";
import AllReviewsView from "../AllReviewsView/AllReviewsView";

const AllReviews = (props) => {
    const{name,photo,reviews}=props.re;


    return (
        <div>

        <div className="row m-4">

            <div className="col-md-4">
                <div className="card" >

                    <div className="card-body">

                        <p className="card-text">Some quick example text to build on the card title and make up the bulk
                            of the card's content.</p>
                        <p className="card-text font-weight-bolder">{reviews}</p>
                    </div>
                    <div className="card-footer d-flex d-inline-block float-right">
                        <img src={photo} className="img-thumbnail img"/>
                        <h2 className="d-flex m-4 align-items-center justify-content-center">{name}</h2>

                    </div>
                    <Link to="/AllreviewsView" className="btn btn-primary">More</Link>
                </div>


            </div>



        </div>

        </div>







    );
};

export default AllReviews;
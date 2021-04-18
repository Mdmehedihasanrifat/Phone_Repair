import React, {useEffect, useState} from 'react';
import Navbar from "../../Home/navbar/navbar";
import Footer from "../../Home/Footer/Footer";
import {Link} from "react-router-dom";
import Reviewsall from "./Reviewsall/reviewsall";

const AllReviewsView = (props) => {

    const[review,Setreviews]=useState([])

    useEffect(()=>{



        fetch('https://floating-harbor-76845.herokuapp.com/Allreviews')
            .then(res=>res.json())
            .then(reviews=>{
                console.log(reviews)
                Setreviews(reviews)







            })
    },[])
    return (
        <div>
            <Navbar></Navbar>
            <div className="row">

            {

                review.map(re=><Reviewsall re={re}></Reviewsall>)
            }

            </div>
            <Link to="/createReviews" className="btn btn-danger form-control w-75">Create Reviews</Link>
          <Footer></Footer>
        </div>
    );
};

export default AllReviewsView;
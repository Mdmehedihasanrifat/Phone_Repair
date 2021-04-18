import React, {useEffect, useState} from 'react';
import img1 from './female.jpg'
import img2 from './index.jpg'
import img3 from './review.jpg'
import './review.css'
import {Link} from "react-router-dom";
import AllReviews from "../../createReview/Allreviews/AllReviews";
const Review = () => {
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
        <div className="container bg-white text-dark w-100">

            {
            review.map(re=><AllReviews re={re}></AllReviews>)
            }
        {/*    <h1 className="display-4 my-5 text-center"> Reviews</h1>*/}

        {/*<div className="row mt-5 p-4 text-center ">*/}

        {/*    <div className="col-md-4">*/}
        {/*        <div className="card" >*/}

        {/*            <div className="card-body">*/}

        {/*                <p className="card-text">Some quick example text to build on the card title and make up the bulk*/}
        {/*                    of the card's content.</p>*/}

        {/*            </div>*/}
        {/*            <div className="card-footer d-flex d-inline-block float-right">*/}
        {/*                <img src={img1} className="img-thumbnail img"/>*/}
        {/*                <h2 className="d-flex m-4 align-items-center justify-content-center">Ema</h2>*/}
        {/*            </div>*/}
        {/*            <Link to="/Allreviews" className="btn btn-primary">More</Link>*/}

        {/*        </div>*/}


        {/*</div>*/}


        {/*    <div className="col-md-4">*/}
        {/*        <div className="card" >*/}

        {/*            <div className="card-body">*/}

        {/*                <p className="card-text">Some quick example text to build on the card title and make up the bulk*/}
        {/*                    of the card's content.</p>*/}

        {/*            </div>*/}
        {/*            <div className="card-footer d-flex d-inline-block float-right">*/}
        {/*                <img src={img2} className="img-thumbnail img"/>*/}
        {/*                <h2 className="d-flex m-4 align-items-center justify-content-center">jhon</h2>*/}

        {/*            </div>*/}
        {/*            <Link to="/Allreviews" className="btn btn-primary">More</Link>*/}
        {/*        </div>*/}


        {/*    </div>*/}


        {/*    <div className="col-md-4">*/}
        {/*        <div className="card" >*/}

        {/*            <div className="card-body">*/}

        {/*                <p className="card-text">Some quick example text to build on the card title and make up the bulk*/}
        {/*                    of the card's content.</p>*/}

        {/*            </div>*/}
        {/*            <div className="card-footer d-flex d-inline-block float-right">*/}
        {/*                <img src={img3} className="img-thumbnail img"/>*/}
        {/*                <h2 className="d-flex m-4 align-items-center justify-content-center">Mike</h2>*/}

        {/*            </div>*/}
        {/*            <Link to="/Allreviews" className="btn btn-primary">More</Link>*/}
        {/*        </div>*/}


            {/*</div>*/}







        {/*</div>*/}
        </div>
    );
};

export default Review;
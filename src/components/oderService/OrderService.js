import React, {useEffect, useState} from 'react';
import Navbar from "../Home/navbar/navbar";
import Footer from "../Home/Footer/Footer";
import AllService from "./Allservice/AllService";
import ShowService from "./ShowService/ShowService";

const OrderService = () => {
    const [service,Setservice]=useState([])
    useEffect(()=>{



        fetch('https://floating-harbor-76845.herokuapp.com/services')
            .then(res=>res.json())
            .then(services=>{
                console.log(services)
                Setservice(services)




            })
    },[])
    return (
        <div>
            <Navbar></Navbar>
            <div className="container">
                <div className="row">
                    <div  className="col-md-8">
            {
                service.map(sc=><ShowService  showAddToCart={false}  sc={sc}></ShowService>)
            }
                    </div>

                    </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default OrderService;
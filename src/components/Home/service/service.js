import React, {useEffect, useState} from 'react';
import img1 from '../service/serviceImg/phone.png'
import img2 from '../service/serviceImg/smartphone (1).png'
import img3 from  '../service/serviceImg/smartphone.png'
import './service.css'
import {Link} from "react-router-dom";
import ShowService from "../../oderService/ShowService/ShowService";
import ServiceView from "./serviceView/serviceView";
const Service = () => {
    const Style={

        "width":"250px",
        "height":"250px"
    }

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
            <div className="row mt-3">

                    {
                        service.map(sc=><ServiceView sc={sc}></ServiceView>)
                    }


            </div>


               <Link to="/orderservice" className="btn btn-success btn-lg p-3 d-block my-0 mx-auto w-50 ">Click  for service</Link>
            </div>




    );
};

export default Service;
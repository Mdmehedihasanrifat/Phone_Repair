import React, {useContext, useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './admin.css'
import {userContext} from "../../App";
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Service from "../Home/service/service";
import AllService from "../oderService/Allservice/AllService";
import Navbar from "../Home/navbar/navbar";

const Admin = () => {

    const  [loggenInuser,SetloginUser]=useContext(userContext);
    const [imageUrl,setUrl]=useState(null)
    const Email="programminghero001@gmail.com";
 const admin=loggenInuser.email===Email?true:false;
    let [Udata, setUserData] = useState({

        email:loggenInuser.email,
        name: '',
        price:'',
        quantity:'',
        photo:''

    })

    const handlechange=(event)=>{

        const newInfo={...Udata};
        newInfo[event.target.name]=event.target.value;

        setUserData(newInfo);
    }


    const handleImg=(event)=>{
        console.log(event.target.files[0]);
        const imgData=new FormData();
        imgData.set('key','77663410e280f25d5a5976d7afd6ad94');
        imgData.append('image',event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload',imgData)
            .then(function (response) {
                Udata.photo=response.data.data.display_url;
                console.log(response.data.data.display_url);

                setUrl(response.data.data.display_url);

            })
            .catch(function (error) {
                console.log(error);
            });

    }


    console.log(Udata);

    const handleData=()=>{
        const data={...Udata}
        console.log(data)
        fetch('https://floating-harbor-76845.herokuapp.com/addService',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data)
        })
            .then(res=>res.json())
            .then(res=>{

                console.log(res);
            })

    }

    const [newShow,setShow]=useState(true);
    const [newManage,setManage]=useState(true);
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
                <div className="container bg-dark">
                    <div className="row">
                        <div className="col-3 m-5">
                            <ul>
                                <li  className="text-decoration-none d-block"> User Order</li>
                                <li  onClick={()=>{setManage(!newManage)}} className="text-decoration-none d-block">ManageService</li>
                                {admin && < li   onClick={()=>{setShow(!newShow)}} className="text-decoration-none d-block">AddService</li>}
                                {admin &&   <Link to="/services" className="text-decoration-none d-block">All service</Link>}
                                </ul>
                        </div>



                        <div className="col-7" >


                            {newManage&& <div id="ManageService">
                                <table className="table bg-light mt-5">
                                    <thead>All Service</thead>
                                {
                                    service.map(pd=><AllService pd={pd}></AllService>)


                                    }
                                </table>

                            </div>}

                            {newShow &&<div id="AddService mt-5 bg-dark">

                                <form action='/' method='POST' className="mt-5">
                                    <input onChange={handlechange}   className="form-control"  type="text" name="name" id="name" placeholder="name"/>
                                    <input onChange={handlechange}   className="form-control"  type="text" name="price" id="price" placeholder="price"/>
                                    <input  onChange={handlechange} className="form-control" type="text" name="quantity" id="quantity" placeholder="quantity"/>

                                    <label onChange={handlechange} htmlFor="formFile" className="form-label">photo</label>
                                    <input  onChange={handleImg}  className="form-control" type="file" id="formFile"/>
                                    <button type="submit" onClick={handleData} className="btn btn-success mt-3" >Submit</button>


                                </form>



                            </div>}




                        </div>

                    </div>


                </div>


            </div>

    );
};

export default Admin;
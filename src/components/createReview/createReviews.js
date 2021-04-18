import React, {useContext, useEffect, useState} from 'react';
import {userContext} from "../../App";
import Navbar from "../Home/navbar/navbar";
import AbstractNav from "react-bootstrap/AbstractNav";
import AllReviews from "./Allreviews/AllReviews";
import axios from "axios";
import AllReviewsView from "./AllReviewsView/AllReviewsView";

const CreateReviews = () => {
    const  [loggenInuser,SetloginUser]=useContext(userContext);
    const [imageUrl,setUrl]=useState(null)
     let [Udata, setUserData] = useState({

        email:loggenInuser.email,
        name: loggenInuser.displayName,
         reviews:''


    })
    const[review,Setreviews]=useState([])

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
        fetch('https://floating-harbor-76845.herokuapp.com/addReviews',{
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

          <div className="container">
              <div className="row">
                  <div className="col-md-8">

                  </div>
                  <div className="col-md-4">
            <div id="AddService mt-5 bg-dark">

                <form action='/addReviews' method='POST' className="mt-5">
                    <input onChange={handlechange}   className="form-control"  type="text" name="reviews" id="reviews" placeholder="reviews"/>
                    <input  onChange={handleImg}  className="form-control" type="file" id="formFile"/>

                    <button type="submit" onClick={handleData} className="btn btn-success mt-3" >Submit</button>


                </form>



            </div>
                  </div>
          </div>
          </div>
        </div>
    );
};

export default CreateReviews;
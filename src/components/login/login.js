import React, {useContext} from 'react';
import firebaseConfig from "../../firebaseConfig";
import firebase from "firebase/app";
import "firebase/analytics";
import { useHistory,useLocation } from "react-router-dom";
import "firebase/auth";
import "firebase/firestore";
import {useState} from "react";
import {userContext} from "../../App";
import './log.css'
if( firebase.apps.length === 0 ){
    firebase.initializeApp(firebaseConfig);
}

function Login() {
    const [newUser,setUser]=useState(false);
    const provider = new firebase.auth.GoogleAuthProvider();
    let [Data, setUserData] = useState({


        isSignin:false,
        displayName: '',
        email: '',
        password:'',
        error:'',
        success:false

    })

    const history=useHistory();
    const location=useLocation()
    let { from } = location.state || { from: { pathname: "/" } };

    const  [loggenInuser,SetloginUser]=useContext(userContext);
    const handlesignout=()=>{

        firebase.auth().signOut().then(() => {
            // Sign-out successful.

            const user=   {
                isSignin:false,
                displayName: '',
                email: '',
                password:''

            }
            setUserData(user);
        }).catch((error) => {
            // An error happened.
        });
    }
    const handleSignin = () => {
        console.log("hello");

        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;


                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                // ...

                const {displayName, email} = user;
                setUserData({
                    isSignin:true,
                    displayName: displayName,
                    email: email
                })

                SetloginUser({

                    isSignin:true,
                    displayName: displayName,
                    email: email
                })
                history.replace(from);

            }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            console.log(errorMessage)
            // ...
        });
    }


    const handlechange=(event)=>{
        let isFromValid=true;






        if(event.target.name==='email'){
            isFromValid= /\S+@\S+\.\S+/.test(event.target.value);

        }


        if(event.target.name==='password'){

            isFromValid=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(event.target.value);

        }


        if(isFromValid){


            const newInfo={...Data};
            newInfo[event.target.name]=event.target.value;

            setUserData(newInfo);
        }








    }


    const handleSubmit=(e)=>{

        if (newUser&&Data.email &&Data.password){
            firebase.auth().createUserWithEmailAndPassword(Data.email, Data.password)
                .then((userCredential) => {
                    console.log("ok");

                    const newInfo={...Data}
                    newInfo.error='';
                    newInfo.success=true;
                    setUserData(newInfo);
                    var user = userCredential.user;

console.log(loggenInuser.email);
                    // ...
                })
                .catch((error) => {
                console.log(error.message)
                    console.log("error")
                    const newInfo={...Data}
                    newInfo.error=error.message;
                    newInfo.success=false
                    setUserData(newInfo);
                    var errorCode = error.code;
                    var errorMessage = error.message;
                });
            if(!newUser && Data.email && Data.password){

                firebase.auth().signInWithEmailAndPassword(Data.email,Data.password)
                    .then((userCredential) => {
                        // Signed in
                        var user = userCredential.user;
                        // ...
                        const newInfo={...Data}
                        newInfo.error='';
                        newInfo.success=true;
                        setUserData(newInfo);
                        var user = userCredential.user;
                        SetloginUser(newInfo);
                        history.replace(from);
                    })
                    .catch((error) => {
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        console.log("error")
                        const newInfo={...Data}
                        newInfo.error=error.message;
                        newInfo.success=false
                        setUserData(newInfo)
                    });
            }
            e.preventDefault()
        }

    }

    return (
        <div className="App">







<div className="container">
    <h3 className="text-center">Sign up </h3>


            <form className="w-50 mx-auto">
                <div className="form-check">
                    <input type="checkbox" onChange={()=>setUser(!newUser)} className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">New user Register</label>
                </div>

                {newUser&& <div className="form-group">
                    <label htmlFor="exampleInputName">Name</label>
                    <input type="text"  name="name" onChange={handlechange} className="form-control" id="exampleInputName" aria-describedby="emailHelp"
                           placeholder="Enter name"/>

                </div>}

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email"  name="email" onChange={handlechange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                           placeholder="Enter email"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                            else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password"  onChange={handlechange} name="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>

                {
                    newUser&&<div className="form-group">
                    <label htmlFor="exampleInputPassword1">Confirm Password</label>
                    <input type="password" onChange={handlechange} name="cpassword" className="form-control" id="exampleInputPassword2" placeholder="Password"/>
                </div>}

                <button  name="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>


            </form>



    <div className="d-flex justify-content-center align-items-center">

        {
            Data.isSignin ? <button  onClick={handlesignout} className="btn btn-danger">Sign out</button>:<button className="btn btn-danger" onClick={handleSignin}>Sign in Google</button>
        }
    </div>


</div>




        </div>

    );

}




export default Login;;
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import React, {useContext, useState} from 'react';
import './navbar.css'
import firebaseConfig from '../../../firebaseConfig';
import { useHistory } from "react-router-dom";
import 'react-bootstrap'
import {userContext} from "../../../App";
import img from './500_F_232924090_BYZFDs39FgyXjzROIXzGKy5Y5hdumjhn.jpg';
const Navbar = () => {
    const history=useHistory();
    const style={
        "width":"40px",
        "height":"40px",
        "background-color":"white"
    }
    const handleRoute=()=>{

        history.push('/login');
    }
    const  [loggenInuser,SetloginUser]=useContext(userContext);

    return (



                <nav className="navbar navbar-expand-lg navbar-light text-white w-100">
                    <h2> <img src={img} style={style}/>FixPhone</h2>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav d-inline-block">
                            <li className="nav-item">
                                <Link className="nav-link" exact  to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link   to="/Admin"className="nav-link" >Admin</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/AllreviewsView">AllReviews</Link>
                            </li>
                            {

                                loggenInuser.email?<li className="nav-item ">
                                        <button className="btn btn-success" id="btnL" onClick={()=>SetloginUser({})}>Log out </button>
                                    </li>

                                    :<li className="nav-item ">
                                        <button className="btn btn-danger " id="btnLO" onClick={handleRoute}>Log in </button>
                                    </li>
                            }
                            {

                                loggenInuser.email&&<li className="my-auto nav-item">{loggenInuser.displayName}</li>
                            }



                        </ul>
                    </div>
                </nav>


    );
};

export default Navbar;
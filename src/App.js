import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Login from "./components/login/login";

import 'bootstrap/dist/css/bootstrap.css';

import {createContext, useState} from "react";
import PrivateRoute from "./components/PrivateRoute/privateRoute";
import Notfound from "./components/Notfound/notfound";
import Home from "./components/Home/Home";
import firebaseConfig from "./firebaseConfig";
import OrderService from "./components/oderService/OrderService";
import Admin from "./components/Admin/Admin";
import CreateReviews from "./components/createReview/createReviews";
import AllReviews from "./components/createReview/Allreviews/AllReviews";
import Service from "./components/Home/service/service";
import ShowService from "./components/oderService/ShowService/ShowService";
import AllReviewsView from "./components/createReview/AllReviewsView/AllReviewsView";
import Shipment from "./components/Shipment/Shipment";


export const userContext=createContext();
function App() {
    const [loggenInuser,SetloginUser]=useState({});
    return (
        <userContext.Provider value={[loggenInuser,SetloginUser]}>
            <div className="App">

                <Router>

                    <Switch>
                        <Route exact path="/">
                          <Home></Home>
                        </Route>
                        <Route  path="/login">
                            <Login></Login>
                        </Route>
                        <Route path="/orderservice">
                            <OrderService></OrderService>
                        </Route>
                        <Route path="/AllreviewsView">
                           <AllReviewsView></AllReviewsView>
                        </Route>
                        <Route path="/services">
                            <OrderService/>
                        </Route>
                        <PrivateRoute path="/Shipment">
                              <Shipment></Shipment>
                        </PrivateRoute>
                        <PrivateRoute path="/createReviews">
                            <CreateReviews></CreateReviews>
                        </PrivateRoute>

                        <PrivateRoute path="/Admin">
                            <Admin></Admin>
                        </PrivateRoute>

                        <Route path="/*">
                            <Notfound></Notfound>

                        </Route>
                    </Switch>
                </Router>
            </div>
        </userContext.Provider>
    )
}
export default App;

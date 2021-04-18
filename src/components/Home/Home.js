import React from 'react';
import Header from "./header/Header";
import Service from "./service/service";
import About from "./About/About";
import Info from "./info/info"
import Footer from "./Footer/Footer";
import Review from "./review/review";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Service></Service>
            <About></About>
            <Info></Info>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;
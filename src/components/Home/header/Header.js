import React from 'react';
import Navbar from "../navbar/navbar";
import HeaderMain from "./headerMain/HeaderMain";

const Header = () => {
    return (
       <div>
            <Navbar></Navbar>
           <HeaderMain></HeaderMain>
     </div>
    );
};

export default Header;
import React from "react";
import "./Navbar.css";
import logo from '../../images/icon.png'


const Navbar_ = () => {
    return (
        <div class="topnav">
            <img src= {logo} alt="LOGO" />
            <button>Home</button>
            <button>FAQs</button>
        </div>
    );
};

export default Navbar_;

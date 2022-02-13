import React from "react";
import logo from "../images/icon.png";
import './statnav.css'

const StatNavbar = () => {
    return (
        <div class="topnav">
            <img src={logo} alt="LOGO" />
            <button>Home</button>
            <button>FAQs</button>
        </div>
    );
};

export default StatNavbar;

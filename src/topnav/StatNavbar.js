import React from "react";
import logo from "../images/icon.png";
import './statnav.css'
import { Button } from "@mui/material";


const StatNavbar = () => {
    return (
        <div class="topnav">
            <img src={logo} alt="LOGO" />
            <Button variant = "text">Home</Button>
            <Button variant = "text">FAQs</Button>
        </div>
    );
};

export default StatNavbar;

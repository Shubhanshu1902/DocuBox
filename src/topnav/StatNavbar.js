import React from "react";
import logo from "../images/icon.png";
import "./statnav.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const StatNavbar = () => {
    return (
        <div class="topnav">
            <Link to="/">
                <img src={logo} alt="LOGO" />
            </Link>

            <Button variant="text">Home</Button>
            <Button variant="text">FAQs</Button>
        </div>
    );
};

export default StatNavbar;

import React from "react";
import "./Navbar.css";
import logo from "../../images/icon.png";
import { Link } from "react-router-dom";

const Navbar_ = () => {
    return (
        <div class="topnav-new">
            <img src={logo} alt="LOGO" />
            <Link to="/home">
                <button type="button">Home</button>
            </Link>
            <button>Login</button>
        </div>
    );
};

export default Navbar_;

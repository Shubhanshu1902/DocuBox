import Stack from "@mui/material/Stack";
import React from "react";
import Button_nav from "./Button_nav";

import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar-setting">
                <Button_nav text="icon" />
            </nav>
        </div>
    );
};

export default Navbar;

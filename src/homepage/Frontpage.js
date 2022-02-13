import React from "react";
import Bggradient from "./components/Bggradient";
import Centericon from "./components/Centericon";
import Navbar_ from "./components/Navbar";
import "./frontpage.css";

const Frontpage = () => {
    return (
        <div className="frontpage">
            <Bggradient />
            <Navbar_ />
            <Centericon />
        </div>
    );
};

export default Frontpage;

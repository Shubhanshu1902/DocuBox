import React from "react";
import Bggradient from "./components/Bggradient";
import Centericon from "./components/Centericon";
import Navbar from "./components/Navbar";
import "./frontpage.css";
import "./components/bggradient.css"

const Frontpage = () => {
    return (
        <div className="frontpage">
            {/* <div className="bggradient"> */}

            {/* </div> */}
            {/* <Bggradient /> */}
            <Navbar />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height:'100%', width:'100%'}}>
                <Centericon />
            </div>
        </div>
    );
};

export default Frontpage;

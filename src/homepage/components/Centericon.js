import React from "react";
import "./centericon.css";
import upperlock from "../../images/upperlock.png";
import lowerlock from "../../images/lowerlock.png";

const Centericon = () => {
    return (
        <div>
            <div className="centericon">
                <div className="upperlock">
                    <img src={upperlock} alt="upperlock" />
                </div>

                <div className="docubox">
                    DocuBox
                    <div className="box" />
                </div>

                <div className="intro">Your document locker</div>
                <div className="intro-sol">solution</div>

                <div className="lowerlock">
                    <img src={lowerlock} alt="lowerlock" />
                </div>
            </div>
        </div>
    );
};

export default Centericon;

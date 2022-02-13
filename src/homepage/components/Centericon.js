import React, { useState } from "react";
import "./centericon.css";
import upperlock from "../../images/upperlock.png";
import lowerlock from "../../images/lowerlock.png";

const cirleradius = 947/1080 * window.innerHeight;

const Centericon = () => {
    const BoxText = () => {
        return (
            <div className="box">Box</div>
        )
    }
    return (
        <div style={{ width: cirleradius, height: cirleradius, display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
            <div className="centericon" style={{ alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }}>
                <img className="lock" src={upperlock} alt="upperlock" />
                
                <div className="docubox" style={{ display: 'inline-flex', marginTop: 20 }}>
                    <div >Docu</div>
                    <BoxText />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }} >
                    <div className="intro">Your document locker</div>
                    <div className="intro">solution</div>
                </div>

                <img className="lock" src={lowerlock} alt="lowerlock" />
            </div>
        </div>
    );
};

export default Centericon;

import React, { useEffect, useState } from "react";
import "./centericon.css";
import upperlock from "../../images/upperlock.png";
import lowerlock from "../../images/lowerlock.png";

const cirleradius = (947 / 1080) * window.innerHeight;

const Centericon = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        changeVisibilty();
    }, []);

    const changeVisibilty = () => {
        setTimeout(() => {
            setIsVisible(true);
        }, 3000);
    };

    const BoxText = () => {
        return <div className="box">Box</div>;
    };
    return (
        <div
            style={{
                width: cirleradius,
                height: cirleradius,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <div
                className="centericon"
                style={{
                    alignItems: "center",
                    flexDirection: "column",
                    justifyContent: "center",
                }}
            >
                <img className="lock" src={upperlock} alt="upperlock" />

                <div style={{ display: isVisible ? "flex" : "none" , marginTop: 20,marginBottom:20,flexDirection:'column',transition:"ease-in"}}>
                    <div
                        className="docubox"
                        style={{ display: "inline-flex", marginTop: 20 }}
                    >
                        <div>Docu</div>
                        <BoxText />
                    </div>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            marginBottom: 20,
                        }}
                    >
                        <div className="intro">Your document locker</div>
                        <div className="intro">solution</div>
                    </div>
                </div>
                <img className="lock" src={lowerlock} alt="lowerlock" />
            </div>
        </div>
    );
};

export default Centericon;

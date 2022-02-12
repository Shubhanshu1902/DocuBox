// import React from 'react'
import './Animation.css'
import Lottie from "lottie-react";
import lockanimation from "./lockanimation.json";

const AnimationEnd = () =>{
    console.log('end animation')
}

const Animation = (props) => {

    

    return (
        <center>
            <div className="animation">
                <Lottie animationData={lockanimation} onAnimationEnd = {AnimationEnd}/>
            </div>
        </center>
    );
};

export default Animation;



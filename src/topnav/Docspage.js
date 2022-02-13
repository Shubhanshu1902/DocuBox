import React from "react";
import PermanentDrawerLeft from "./PermanantLeftDrawer";
import StatNavbar from "./StatNavbar";

import './Docspage.css'

const Docspage = () => {
    return (
        <div>
            <div>
                <StatNavbar />
            </div>

            <div className="leftdrawer">
                <PermanentDrawerLeft />
            </div>
        </div>
    );
};

export default Docspage;

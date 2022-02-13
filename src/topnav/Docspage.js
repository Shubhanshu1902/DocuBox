import React from "react";
import PermanentDrawerLeft from "./PermanantLeftDrawer";
import StatNavbar from "./StatNavbar";

import "./Docspage.css";
import PermanantLeftDrawer from "./PermanantLeftDrawer";
// import { Box } from "@mui/system";

const Docspage = () => {
    return (
        <div>
            <StatNavbar />
            
            <div className="docpage">
                <PermanantLeftDrawer />

                <div className="titleofdoc">
                    My Docs
                    <hr />
                </div>


            </div>
        </div>
    );
};

export default Docspage;

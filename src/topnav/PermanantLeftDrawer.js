import React from "react";
import { Button } from "@mui/material";



const PermanantLeftDrawer = () => {
    return (
        <div>
            <div className="left-nav">
                <Button variant="text">My Docs</Button>
                <Button variant="text">Shared Devices</Button>
                <Button variant="text">Favorites</Button>
                <hr />
            </div>
        </div>
    );
};

export default PermanantLeftDrawer;

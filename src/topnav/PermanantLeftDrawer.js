import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const PermanantLeftDrawer = () => {
    return (
        <div>
            <div className="left-nav">
                <Link to="/addDoc" style = {{textDecoration:'none'}}>
                    <Button variant="text">Add Doc</Button>
                </Link>
                <Button variant="text">My Docs</Button>
                <Button variant="text">Shared Devices</Button>
                <Button variant="text">Favorites</Button>

                <hr />
            </div>
        </div>
    );
};

export default PermanantLeftDrawer;

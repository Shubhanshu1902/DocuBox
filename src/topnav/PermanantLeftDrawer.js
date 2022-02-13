import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { ethers } from "ethers";
import document from "../ipfs/document.json";

const docType = "aaaaaa";
const docAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
}

async function downloadDocument() {
    if (!docType) return;
    if (typeof window !== "undefined") {
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
           
            const signer = provider.getSigner();

            
            const contract = new ethers.Contract(
                docAddress,
                document.abi,
                signer
            );
            console.log(provider);
            const data = await contract.download(docType);
            // requestedImageHash = data.
            console.log("Downloaded data : " + data);
        } catch (error) {
            console.log("error");
        }
    }
}

const PermanantLeftDrawer = () => {
    return (
        <div>
            <div className="left-nav">
                <Link to="/addDoc" style={{ textDecoration: "none" }}>
                    <Button variant="text">Add Doc</Button>
                </Link>
                <Button variant="text">My Docs</Button>
                <Button variant="text">Shared Devices</Button>
                <Button variant="text" onClick={downloadDocument}>
                    Favorites
                </Button>

                <hr />
            </div>
        </div>
    );
};

export default PermanantLeftDrawer;

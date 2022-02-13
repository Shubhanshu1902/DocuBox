import React, { Component } from "react";
import { Buffer } from "buffer";
import { create } from "ipfs-http-client";
import "./AddDocumnet.css";
import { Link, Route } from "react-router-dom";
import { ethers } from "ethers";
import document from "./document.json";


const client = create({
    host: "ipfs.infura.io",
    port: 5001,
    protocol: "https",
    apiPath: "/api/v0",
});

class AddDocument extends Component {
    constructor(props) {
        super(props);
        this.state = { buffer: null, filetype: null, fileHash: null };
    }
    
    documentAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'

    getTitle = event => {
        event.preventDefault();
        this.setState({ filetype: event.target.value });
    };

    captureFile = event => {
        event.preventDefault();

        // process file for ipfs

        const file = event.target.files[0];
        // console.log(file);

        const reader = new window.FileReader();
        reader.readAsArrayBuffer(file);
        reader.onloadend = () => {
            this.setState({ buffer: Buffer(reader.result) });
        };
    };

    requestAccount = async() => {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
    }

    uploadDocument = async () => {
        if (!this.state.fileHash) return;
        if (!this.state.filetype) return;
        if (typeof window !== "undefined") {
            await this.requestAccount();
            const provider = new ethers.providers.Web3Provider(
                window.ethereum
            );
            const signer = provider.getSigner();
            console.log(signer);
            const contract = new ethers.Contract(
                this.documentAddress,
                document.abi,
                signer
            );  
            const transaction = await contract.upload(this.state.fileHash, this.state.filetype);
            await transaction.wait();

            console.log("File Uploaded");
        }
    };

    url = "https://ipfs.infura.io/ipfs/";

    onSubmit = async e => {
        e.preventDefault();
        try {
            const created = await client.add(this.state.buffer);
            this.setState({ fileHash: created.path });
            this.url = this.url + this.state.fileHash;
            await this.uploadDocument()
            console.log(this.state);
        } catch (error) {
            console.error(error);
        }
    };

    render() {
        return (
            <div className="main">
                <div className="center-add">
                    <h1>Welcome to DocuBox</h1>
                    <form>
                        <div className="inputbox">
                            <input
                                type="text"
                                required="required"
                                onChange={this.getTitle}
                            />
                            <span>File type</span>
                        </div>
                        <input
                            type="file"
                            required="required"
                            onChange={this.captureFile}
                        />

                        <div class="inputbox">
                            <Link to="/home">
                                <input
                                    type="button"
                                    value="submit"
                                    onClick={this.onSubmit}
                                />
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddDocument;

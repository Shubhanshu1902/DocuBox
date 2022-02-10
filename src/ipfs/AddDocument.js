import React, { Component } from "react";
import { Buffer } from "buffer";
import { create } from "ipfs-http-client";
import { TextField } from "@mui/material";


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

    onSubmit = async e => {
        e.preventDefault();
        try {
            const created = await client.add(this.state.buffer);
            this.setState({fileHash: created.path})
            // console.log(this.state);
        } catch (error) {
            console.error(error);
        }
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <TextField id = "filetype" required = 
                    <input type="text" onChange={this.getTitle} />
                    <input type="file" onChange={this.captureFile} />
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

export default AddDocument;

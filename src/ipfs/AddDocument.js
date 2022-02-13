import React, { Component } from "react";
import { Buffer } from "buffer";
import { create } from "ipfs-http-client";
import "./AddDocumnet.css";

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

    url = "https://ipfs.infura.io/ipfs/";

    onSubmit = async e => {
        e.preventDefault();
        try {
            const created = await client.add(this.state.buffer);
            this.setState({ fileHash: created.path });
            this.url = this.url + this.state.fileHash;
            console.log(this.state);
        } catch (error) {
            console.error(error);
        }
    };

    render() {
        return (
            <div class="center">
                <h1>Welcome to DocuBox</h1>
                <form>
                    <div class="inputbox">
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
                        <input
                            type="button"
                            value="submit"
                            onClick={this.onSubmit}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default AddDocument;

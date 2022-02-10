import React, { Component } from "react";
import { Buffer } from "buffer";
import { create } from "ipfs-http-client";

const client = create({host:'ipfs.infura.io',port:5001,protocol:'https',apiPath: '/api/v0'});

class AddDocument extends Component {
    constructor(props) {
        super(props);
        this.state = { buffer: null };
    }
    
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

    onSubmit = async(e) => {
        e.preventDefault();
        try{
            const created = await client.add(this.state.buffer);
            console.log(created.path);
        }

        catch(error)
        {
            console.log(error)
        }
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type="file" onChange={this.captureFile} />
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

export default AddDocument;
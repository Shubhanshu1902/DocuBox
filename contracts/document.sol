//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract document{
    struct doc{
        string type_name; 
        string hash_data; // ipvf hash
        
        
    }

    struct user{
        doc[] docs;
        uint nDocs;

    }

    constructor() payable {

    }

    

    // mapping(address => doc_detail) particular_docs;
    mapping(address => user) users;
    


    

    // Upload(docum) : particular_docs[(this.address)] -> docum
    function upload(string memory docum , string memory docType) public view{
        // users[msg.sender].docs.push(docum);
        // users[msg.sender].docs[users[msg.sender].nDocs++].type_name = docType;
        // users[msg.sender].docs[msg.sender.nDocs++].hash_data = docum;

        user memory sender = users[msg.sender];
        bool flagExists = false;


        // sender.docs[sender.nDocs].type_name = docType;
        // sender.docs[sender.nDocs++].hash_data = docum;

        for (uint i = 0; i < users[msg.sender].nDocs; i++){
            // if (sender.docs[i].type_name == docType){
                
            // }
            if (keccak256(bytes(sender.docs[i].type_name)) == keccak256(bytes(docType))){
                flagExists = true;
            }
        }

        require(!flagExists, 'Document Already Exists');
        
        sender.docs[sender.nDocs].type_name = docType;
        sender.docs[sender.nDocs++].hash_data = docum;


    }   

    
    
    // Download(docum)

    function download(string memory docType) public view returns(string memory) {
        user memory sender = users[msg.sender];
        bool flagExists = false;
        uint docLocation;

        for (uint i = 0; i < users[msg.sender].nDocs; i++){
            if (keccak256(bytes(sender.docs[i].type_name)) == keccak256(bytes(docType))){
                flagExists = true;
                docLocation = i;
            }
        }

        require(flagExists, 'No such Document exists');
        return sender.docs[docLocation].hash_data;

    }



}

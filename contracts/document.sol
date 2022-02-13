//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract document{
    
    uint totalDocs = 0;

    
    struct doc{
        string type_name; // eg. aadhaar card, pan card, etc.
        string hash_data; // ipvf hash
        
        
    }

    struct user{
        // doc[] docs; // Mapping of uploaded Documents
        mapping(string => string) docs; // type -> hash
        uint nDocs; // number of uploaded Documents

    }

    mapping(address => user) users;

    constructor(){
        console.log("totalDocs is " , totalDocs);
    }

    

    

    // mapping(address => doc_detail) particular_docs;
    
    


    

    // Upload(docum) : particular_docs[(this.address)] -> docum
    function upload(string memory docum , string memory docType) external { // vm error : revert ..... why ? no but why?.....i need help
        

        // user memory sender = users[msg.sender];
        // bool flagExists = false;


        // sender.docs[sender.nDocs].type_name = docType;
        // sender.docs[sender.nDocs++].hash_data = docum;

        // for (uint i = 0; i < users[msg.sender].nDocs; i++){
        //     // if (sender.docs[i].type_name == docType){
                
        //     // }
        //     if (keccak256(bytes(users[msg.sender].docs[i].type_name)) == keccak256(bytes(docType))){
        //         flagExists = true;
        //     }
        // }

        // require(!flagExists, 'Document Already Exists');
        
        // users[msg.sender].docs[users[msg.sender].nDocs].type_name = docType;
        // users[msg.sender].docs[users[msg.sender].nDocs++].hash_data = docum;
        users[msg.sender].docs[docType] = docum;
        totalDocs++;

        // For now if same type entered, it replaces old doc corresponding to the type


    }   

    
    
    // Download(docum)

    function download(string memory docType) external view returns(string memory) {
        // user memory sender = users[msg.sender];
        // bool flagExists = false;
        // uint docLocation;

        // for (uint i = 0; i < users[msg.sender].nDocs; i++){
        //     if (keccak256(bytes(sender.docs[i].type_name)) == keccak256(bytes(docType))){
        //         flagExists = true;
        //         docLocation = i;
        //     }
        // }

        // require(flagExists, 'No such Document exists');
        // return sender.docs[docLocation].hash_data;
        // string memory s = users[msg.sender].docs[docType];
        // if (s)
        if (keccak256(bytes(users[msg.sender].docs[docType])) == keccak256(bytes(''))){return '-1';}

        return users[msg.sender].docs[docType];

    }



}

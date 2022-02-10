//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract document{
    struct doc_detail{
        string type_name;
        string hash_data;
        string file_password;
    }

    mapping(address => doc_detail) particular_docs;

    

}

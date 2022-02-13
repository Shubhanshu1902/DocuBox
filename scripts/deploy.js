const { ethers } = require("hardhat");
const fs = require("fs");

async function main() {

    const [deployer] = await ethers.getSigners();
    console.log(`Deploying Contract with account : ${deployer.address}`);

    const Document = await ethers.getContractFactory('document');
    const doc = await Document.deploy();
    console.log(`Document address ${doc.address}`);

    const data = {
        address: doc.address,
        abi: JSON.parse(doc.interface.format('json'))
    };
    fs.writeFileSync('src/document.json' , JSON.stringify(data));

}

main()
    .then(() =>  process.exit(0))
    .catch(err =>{
        console.log(err);
        process.exit(1);
    });
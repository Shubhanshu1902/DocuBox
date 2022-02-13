const { expect } = require('chai');

describe('Document contract', ()=>{
    let doc , Document , user1 , user2 , user3;

    beforeEach(async ()=>{
        Document = await ethers.getContractFactory('document');
        doc = await Document.deploy();
        [user1, user2 , user3, _] = await ethers.getSigners();

    });

    // describe('Deployment' , ()=>{
    //     it('Should initialize total docs initially to 0',async ()=>{
    //         td = await doc.totalDocs;
    //         console.log(td);
    //         expect(td).to.equal(0);
    //     });

        
    // });

    describe('File uploads/downloads' , ()=>{
        it('Should upload document type a with address abc' , async ()=>{
            await doc.connect(user1).upload('abc' , 'a');
            d = await doc.connect(user1).download('a');
            expect(d).to.equal('abc');
        });
    });

    describe('U/D test 2' , ()=>{
        it('Should upload type a with address abc on user1, type b with address bcd on user1 , type a with address cde on user2 , type c with address def on user2' , async ()=>{
            await doc.connect(user1).upload('abc' , 'a');
            await doc.connect(user1).upload('bcd' , 'b');
            await doc.connect(user2).upload('cde' , 'a');
            d1a = await doc.connect(user1).download('a');
            await doc.connect(user2).upload('def' , 'c');
            d2a = await doc.connect(user2).download('a');
            d1b = await doc.connect(user1).download('b');
            d2c = await doc.connect(user2).download('c');

            expect(d1a).to.equal('abc');
            expect(d1b).to.equal('bcd');
            expect(d2a).to.equal('cde');
            expect(d2c).to.equal('def');
        });
    });
});
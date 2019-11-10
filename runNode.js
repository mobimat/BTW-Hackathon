const Blockchain = require('./Blockchain.js');
const Block = require('./Block.js');
const Transaction = require('./Transaction.js');

const blockchain = new Blockchain();
console.log("This my blockchain");
index = 1;


//---------------FOR TRANSFER------------------

//---------------Proof of Work-----------------

var previous = blockchain.chain[index-1].hash;

var dummyData = [
    {
        txId: '19874',
        prodID: 'Salm-A1',
        prevProdID: 'Prev ID',
        quantity: 1000,
        msg: 'Fresh from Cape Cod',
        imgURL: 'https://images.app.goo.gl/4Zo2nic6dnavZyCC8',
        senderPub: 'Pub_Key',
        receiverPub: 'Rec_Key',
        senderSig: 'Send_Sig',
        recieverSig: 'Rec_Sig'

    }
]
console.log(blockchain.proofOfWork(previous, dummyData))
var nonce = blockchain.proofOfWork(previous, dummyData)

//---------------Generate HASH-----------------
var newHash = blockchain.hashBlock(previous, dummyData, nonce)

//---------------Instantiate Block-------------
index = blockchain.countIndex();
var block = new Block(nonce, previous, newHash, index);
console.log("This is my Transfer Block " + block.hash);

//---------------Add Transaction to Block------
block.addTransactionToBlock("19874","Salm-A1", "Prev ID",1000, "Fresh from Cape Cod", "https://images.app.goo.gl/4Zo2nic6dnavZyCC8", "Pub_Key", "Rec_Key", "Send_Sig", "Rec_Sig");
console.log("Transaction added. Length: " + block.transactions.length);

//---------------Add Block to Chain------------
blockchain.addToBlockChain(block);
console.log("Added Block to Blockchain");


//---------------FOR CREATE--------------------

//---------------Proof of Work-----------------

var previous = blockchain.chain[index-1].hash;

var dummyData = [
    {
        txId: '19875',
        prodID: 'Bass-B1',
        quantity: 1000,
        msg: 'Prev ID',
        imgURL: 'Fresh from LI Sound',
        vendorPub: 'https://images.app.goo.gl/4Zo2nic6dnavZyCC8',
        vendorSig: 'Vend_Sig'

    }
]
console.log(blockchain.proofOfWork(previous, dummyData))
var nonce = blockchain.proofOfWork(previous, dummyData)

//---------------Generate HASH-----------------
var newHash = blockchain.hashBlock(previous, dummyData, nonce)

//---------------Instantiate Block-------------
index = blockchain.countIndex();
var block = new Block(nonce, previous, newHash, index);
console.log("This is my Create Block " + block.hash);

//---------------Add Transaction to Block------
block.addCreateToBlock("19875","Bass-B1",1000, "Prev ID", "Fresh from LI Sound", "https://images.app.goo.gl/4Zo2nic6dnavZyCC8", "Vend_Sig");
console.log("Create added. Length: " + block.transactions.length);

//---------------Add Block to Chain------------
blockchain.addToBlockChain(block);
console.log("Added Block to Blockchain");

//---------------FOR BUY------------------

//---------------Proof of Work-----------------

var previous = blockchain.chain[index-1].hash;
var dummyData = [
    {
        txId: '19877',
        prodID: 'Porgy-P1',
        quantity: 1000,
        prevProdID: 'Fresh from offshore',
        msg: 'https://images.app.goo.gl/4Zo2nic6dnavZyCC8',
        imgURL: 'Pub_Key',
        vendorSig: 'Signature'

    }
]
console.log(blockchain.proofOfWork(previous, dummyData))
var nonce = blockchain.proofOfWork(previous, dummyData)

//---------------Generate HASH-----------------
var newHash = blockchain.hashBlock(previous, dummyData, nonce)

//---------------Instantiate Block-------------
index = blockchain.countIndex();
var block = new Block(nonce, previous, newHash, index);
console.log("This is my Buy Block " + block.hash);

//---------------Add Transaction to Block------
block.addBuyToBlock("19877","Porgy-P1",1000, "Fresh from offshore", "https://images.app.goo.gl/4Zo2nic6dnavZyCC8", "Pub_Key", "Signature");
console.log("Create added. Length: " + block.transactions.length);

//---------------Add Block to Chain------------
blockchain.addToBlockChain(block);
console.log("Added Block to Blockchain");

console.log("Write All Transactions: ");

console.log(blockchain.chain)
for(index=1; index < blockchain.chain.length; index++) {
     
             console.log(blockchain.chain[index].transactions);
     }
 

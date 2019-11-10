const Block = require('./Block.js');
const Transaction = require('./Transaction.js');

const sha256 = require("sha256");

function Blockchain() {
    this.name = "MuTech Blockchain";
    this.chain = [];
    const block = new Block(100,"0","HASH", 1);
    chainLength = 1;
    this.chain.push(block);  //push genesis block to the block chain
}

Blockchain.prototype.getAllTransactions = function() {
    for(index=1; index < this.chain.length; index++) {
       for(index2=0; index2 < this.chain[index].transactions.length; index2++) {
         console.log("Block Transaction Sender: " + this.chain[index].transactions[index2].sender);
         console.log("Block Transaction Recipient: " + this.chain[index].transactions[index2].recipient);
         console.log("Block Transaction Amount: " + this.chain[index].transactions[index2].amount);
       }        
    }
}

Blockchain.prototype.addToBlockChain = function(block) {
 this.chain.push(block);

}

Blockchain.prototype.countIndex = function(){
    chainLength = this.chain.length + 1;
    console.log(chainLength);
    return chainLength;
}

Blockchain.prototype.hashBlock = function(previousBlockHash, currentBlockData, nonce) {
    const data = 
        previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
    const hash = sha256(data);
    
    return hash;
}

Blockchain.prototype.proofOfWork = function( //when should proof of work run?
    previousBlockHash, 
    currentBlockData
) {
    let nonce = 0;
    let hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
    while (hash.substring(0, 1) !== "0") {
        nonce++;
        hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
        console.log(hash);
    }
    console.log(nonce);
    return nonce;
}

module.exports = Blockchain;
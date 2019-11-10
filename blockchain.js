const Block = require('./Block.js');
const Transaction = require('./Transaction.js');

function Blockchain() {
    this.name = "MuTech Blockchain";
    this.chain = [];
    const block = new Block(100,"0","0");
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
    chainLength = this.chain.length;
    console.log(chainLength)
    return this.chain.length;
}

module.exports = Blockchain;
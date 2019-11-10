const sha256 = require("sha256");

function Blockchain() {  //Main Constructor
    this.chain = [];    //Array that stores blocks
    this.pendingTransactions = []; //Transactions are being stored in this.pendingTransactions instead of the chain
// how to put this ^ array inside of chain
    this.createNewBlock(100, "0", "0"); //Genesis block
}

Blockchain.prototype.createNewBlock = function(
    nonce, previousBlockHash, hash
) {
    const newBlock = {
        index: this.chain.length + 1,
        timestamp: Date.now(),
        transactions: this.pendingTransactions, //add any pending transactions
        nonce: nonce,
        hash: hash,
        previousBlockHash: previousBlockHash
    }

    this.pendingTransactions = []; //how to put this array inside of the newBlock

    this.chain.push(newBlock); //add block to the chain array

    return newBlock;
}

Blockchain.prototype.createNewTransaction = function(
    sender, recipient, amount, productId, location
) {
    const newTransaction = {
        timestamp: Date.now(),
        sender: sender,
        recipient: recipient,
        amount: amount,
        productId : productId,
        location : location
    }

    this.pendingTransactions.push(newTransaction);
}

Blockchain.prototype.getAllBlocks = function(){
    for (index = 0; index <= this.chain.length; index++) {
      for(index2 = 0; index2 <= this.chain[index].transactions[index2]; index2++) {
        console.log(index)
        console.log(index2)  
        console.log(this.chain[index].transactions[index2]); 
      }
    } 
  }

Blockchain.prototype.hashBlock = function(
    previousBlockHash,
    currentBlockData,
    nonce
) {
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
    while (hash.substring(0, 4) !== "0000") {
        nonce++;
        hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
        console.log(hash);
    }
    console.log(nonce);
    return nonce;
}

module.exports = Blockchain;
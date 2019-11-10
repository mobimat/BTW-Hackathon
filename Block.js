const Transaction = require('./Transaction.js');
const Blockchain = require('./Blockchain.js')

function Block(nonce, previousBlockHash, hash) {
        this.index = Blockchain.countIndex + 1,
        this.timestamp = Date.now();
        this.transactions = [];
        this.nonce = nonce;
        this.hash = hash;
        this.previousBlockHash = previousBlockHash;
}

Block.prototype.addTransactionToBlock = function(sender, recipient, amount) {
    const newTransaction =  new Transaction(sender, recipient, amount);
    this.transactions.push(newTransaction);
}

module.exports = Block;

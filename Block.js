const Transaction = require('./Transaction.js');
const Create = require('./Create.js');
const Buy = require('./Buy.js');
const Blockchain = require('./Blockchain.js');

function Block(nonce, previousBlockHash, hash, index) {
        this.index = index;
        this.timestamp = Date.now();
        this.transactions = [];
        this.nonce = nonce;
        this.hash = hash;
        this.previousBlockHash = previousBlockHash;
}

Block.prototype.addTransactionToBlock = function(txId, prodID, prevProdID, quantity, msg, imgURL, senderPub, receiverPub, senderSig, recieverSig) {
    const newTransaction =  new Transaction(txId, prodID, prevProdID, quantity, msg, imgURL, senderPub, receiverPub, senderSig, recieverSig);
    this.transactions.push(newTransaction);
}

Block.prototype.addCreateToBlock = function(txId, prodID, quantity, msg, imgURL, vendorPub, vendorSig) {
    const newCreate =  new Create(txId, prodID, quantity, msg, imgURL, vendorPub, vendorSig);
    this.transactions.push(newCreate);
}

Block.prototype.addBuyToBlock = function(txId, prodID, quantity, prevProdID, msg, imgURL, vendorSig) {
    const newBuy =  new Buy(txId, prodID, quantity, prevProdID, msg, imgURL, vendorSig);
    this.transactions.push(newBuy);
}

module.exports = Block;

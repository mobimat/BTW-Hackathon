function Transaction(txId, prodID, prevProdID, quantity, msg, imgURL, senderPub, receiverPub, senderSig, recieverSig) {
    this.timestamp = Date.now();
    this.txId = txId;
    this.prodID = prodID;
    this.prevProdID = prevProdID;
    this.quantity = quantity;
    this.msg = msg;
    this.imgURL = imgURL;
    this.senderPub = senderPub;
    this.receiverPub = receiverPub;
    this.senderSig = senderSig;
    this.recieverSig = recieverSig;

}

module.exports = Transaction;
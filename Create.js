function Create(txId, prodID, quantity, msg, imgURL, vendorPub, vendorSig) {
    this.timestamp = Date.now();
    this.txId = txId;
    this.prodID = prodID;
    this.quantity = quantity;
    this.msg = msg;
    this.imgURL = imgURL;
    this.vendorPub = vendorPub;
    this.vendorSig = vendorSig;

}

module.exports = Create;
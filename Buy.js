function Buy(txId, prodID, quantity, prevProdID, msg, imgURL, vendorSig) {
    this.timestamp = Date.now();
    this.txId = txId;
    this.prodID = prodID;
    this.quantity = quantity;
    this.prevProdID = prevProdID;
    this.msg = msg;
    this.imgURL = imgURL;
    this.vendorSig = vendorSig;

}

module.exports = Buy;
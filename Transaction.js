function Transaction(sender, recipient, amount, productId, location) {
    this.timestamp = Date.now();
    this.sender = sender;
    this.recipient = recipient;
    this.amount = amount;
    this.productID = productId;
    this.location = location;
}

module.exports = Transaction;
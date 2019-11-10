const Blockchain = require('./Blockchain.js');
const Block = require('./Block.js');
const Transaction = require('./Transaction.js');

const blockchain = new Blockchain();
console.log("This my blockchain");
const block = new Block(3312, "A0NQ30F9ASNDVOAS", "ASODIFNQ309AFN");
console.log("This is my Block " + block.hash);
block.addTransactionToBlock("Atlantic Fishery","FedEx",1000);
console.log("Transaction added. Length: " + block.transactions.length);
block.addTransactionToBlock("FedEx","Wholefoods",5000);
console.log("Transaction added. Length: " + block.transactions.length);
console.log("Add Block to Blockchain");
blockchain.addToBlockChain(block);




console.log("Write All Transactions: ");

console.log(blockchain.chain)

blockchain.getAllTransactions();
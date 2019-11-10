  
const Blockchain = require('./Blockchain');

const btw = new Blockchain();

btw.createNewBlock(3312, "A0NQ30F9ASNDVOAS", "ASODIFNQ309AFN");
btw.createNewTransaction("Nature's Fishery", "FedEx", 20, 'Salmon-A1', 'Cape Cod');
btw.createNewTransaction("FedEx", "Wholefoods", 12, 'Salmon-A1', 'Providence');
btw.createNewTransaction("FedEx", "Market Basket", 8, 'Salmon-A1', 'Boston');

//console.log(btw.proofOfWork(btw.chain[1].previousBlockHash, btw.pendingTransactions[1]))

console.log(btw.chain);
console.log(btw.pendingTransactions);
//btw.getAllBlocks();

/*
const previous = "ASODIFNQ309NDAF";
const dummyData = [
    {
        amount: 32,
        sender: 'ASD0F9NQ30',
        recipient: "Q304NDF0NQ"
    ,
    
        amount: 148,
        sender: 'A09WENFASOID',
        recipient: "AP8VNASD9A0ER"
    }
]

console.log(btw.proofOfWork(previous, dummyData))
*/
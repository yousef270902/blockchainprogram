const SHA256 = CryptoJS.SHA256;

        class Block {
            constructor(index, timestamp, data, previousHash = "") {
                this.index = index;
                this.timestamp = timestamp;
                this.data = data;
                this.previousHash = previousHash;
                this.hash = this.calculateHash();
            }

            calculateHash() {
                return SHA256(this.index + this.timestamp + this.previousHash + JSON.stringify(this.data)).toString();
            }
             
        }

        class Blockchain {
            constructor() {
                this.chain = [this.createGenesisBlock()];
            }

            createGenesisBlock() {
                return new Block(0, Date.now(), "Genesis block", "0");
            }

            getLatestBlock() {
                return this.chain[this.chain.length - 1];
            }

            addBlock(newBlock) {
                newBlock.previousHash = this.getLatestBlock().hash;
                newBlock.hash = newBlock.calculateHash();
                this.chain.push(newBlock);
            }
        }

        function submitData() {
            let index = document.getElementById("index").value;
            let date = document.getElementById("date").value;
            let amount = document.getElementById("amount").value;
            let myBlockchain = new Blockchain();
            myBlockchain.addBlock(new Block(index,date,amount));
            alert(JSON.stringify(myBlockchain,null,4));
        }

const SHA256= require("crypto-js/sha256");
class block
{
    constructor(index,timestamp,data,pervioushash=" ")
    {
        this.index=index;
        this.timestamp=timestamp;
        this.data=data;
        this.pervioushash=pervioushash;
        this.hash=this.calculatehash();
    }
    calculatehash()
    {
return SHA256(this.index+this.timestamp+this.pervioushash+JSON.stringify(this.data)).toString();
    }
}
class blockchain
{

    constructor()
    {
        this.chain=[this.createfristblock()];
    }
    createfristblock()
    {
        return new block(0,Date.now(),"Gensis block","0");
    }
    getlatestBlock()
    {
        return(this.chain[this.chain.length-1]);

    }
    addblock(newblock)
    {
newblock.pervioushash=this.getlatestBlock().hash;
newblock.hash=newblock.calculatehash();
this.chain.push(newblock);
    }
}
function submit(index,date,amount)
{
    let x=document.getElementById("index");
    let z=document.getElementById("date");
    let f= document.getElementById("amount");
    let y=new blockchain();
    y.addblock(new block (x , z,f ));
    alert(JSON.stringify(y.getlatestBlock(),null,4));
}
 

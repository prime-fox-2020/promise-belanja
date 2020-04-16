const beli=require('./beli')

class Item{
    constructor(item,harga,waktu){
        this.item=item
        this.harga=harga
        this.waktu=waktu
    }
}

let permen = new Item('permen', 1000, 1000)
let biskuit = new Item('roti', 3000, 3000)
let cola = new Item('snack', 10000, 3000)
let riceCooker = new Item('nasi', 40000, 4000)
let chitato = new Item('lauk', 5000, 1000)

beli(100000,permen)
.then(res=>{
    return beli(res,biskuit)
})
.then(res=>{
    return beli(res,cola)
})
.then(res=>{
    return beli(res,riceCooker)
})
.then(res=>{
    return beli(res,chitato)
})
.catch(err=>{
    console.log('ini error',err)
})
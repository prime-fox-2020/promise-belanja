const beli = require('./beli.js')

class Item{
    constructor(item, harga, waktu){
        this.item = item
        this.harga = harga
        this.waktu = waktu
    }
}

let permen = new Item('permen', 2000, 1000)
let roti = new Item('roti', 3000, 3000)
let snack = new Item('snack', 5000, 2000)
let nasi = new Item('nasi', 6000, 2000)
let lauk = new Item('lauk', 7000, 4000)

beli(25000, permen)
.then( (uang) => {
    return beli(uang, roti)
})
.then( (uang) => {
    return beli(uang, snack)
})
.then( (uang) => {
    return beli(uang, nasi)
})
.then( (uang) => {
    return beli(uang, lauk)
})
.then( () => {
})
.catch( (emsg) => {
    console.log(emsg)
})
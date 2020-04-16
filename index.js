const beli = require('./beli')
class Food {
    constructor(item, harga, waktu) {
        this.item = item
        this.harga = harga
        this.waktu = waktu
    }
}

let bakwan = new Food('bakwan', 1000, 500)
let tahu = new Food('tahu', 2000, 800)
let martabak = new Food('martabak', 10000, 1000)
let mie = new Food('mie', 7500, 600)
let bakso = new Food('bakso', 8000, 400)

beli(25000, bakwan)
    .then((uang) => {
        return beli(uang, tahu)
    })
    .then((uang) => {
        return beli(uang, martabak)
    })
    .then((uang) => {
        return beli(uang, mie)
    })
    .then((uang) => {
        return beli(uang, bakso)
    })
    .then(()=>{
        console.log(`Semua barang sudah dibeli`);
    })
    .catch(() => {
        console.log(`uang kurang`);
    })
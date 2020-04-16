const beli = require("./beli.js")

class Barang {
    constructor(item, harga, waktu) {
        this.item = item,
        this.harga = harga,
        this.waktu = waktu
    }
}

let roti = new Barang('Roti', 5000, 300)
let susu = new Barang('Susu', 7000, 200)
let permen = new Barang('Permen', 3000, 100)


// console.log(roti)

beli(14000, roti)
    .then(data => {
        return beli(data.kembalian, susu)
    })
    .then(data => {
        return beli(data.kembalian, permen)
    })
    .catch(err => {
        console.log(err)
    })
const beli = require('./beli')

class barang{
    constructor(namabarang, harga, waktu){
        this.nama_barang = namabarang
        this.harga = harga
        this.waktu = waktu
    }
}

let uang = 50000
let korek = new barang('korek', 2000, 2000)
let kopi = new barang('kopi', 3000, 2000)
let kebab = new barang('kebab', 10000, 2000)
let esteh = new barang('esteh', 2000, 2000)

// console.log(korek)

beli(uang, korek)
.then(res => {return beli(res, kopi)} )
.then(res => {return beli(res, kebab)})
.then(res => {return beli(res,esteh)})
.catch(rej => {return `ini errornya ${err}`})
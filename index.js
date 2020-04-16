let beli = require('./beli')

class BarangBelanjaan {
    constructor(item, harga, waktu) {
        this.item = item
        this.harga = harga
        this.waktu = waktu
    }
}

let permen = new BarangBelanjaan("Permen", 10000, 1000)
let roti = new BarangBelanjaan("Roti", 18000, 1000)
let sabun = new BarangBelanjaan("Sabun", 30000, 1000)
let shampo = new BarangBelanjaan("Shampo", 50000, 1000)
let rokok = new BarangBelanjaan("Rokok", 25000, 1000)

let uang = 100000
beli(uang, permen)
  .then(kembalian => {
    return beli(kembalian, roti)
  })
  .then((kembalian) => {
    return beli(kembalian, sabun)
  })
  .then((kembalian) => {
    return beli(kembalian, shampo)
  })
  .then((kembalian) => {
    return beli(kembalian, rokok)
  })
  .then((kembalian) => {
    console.log(`Sudah selesai belanja sisa uang: ${kembalian}`)
  })
  .catch((err) => {
    console.log(err)
  }) 
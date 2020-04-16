const beli = require('./beli')

class Belanja{
    constructor(item, harga, waktu){
        this.item = item
        this.harga = harga
        this.waktu = waktu
    }
}

let uang = 100000
const belanja1 = new Belanja('Permen', 5000, 1000)
const belanja2 = new Belanja('Kopi', 23000, 2000)
const belanja3 = new Belanja('kue Coklat', 10000, 3000)
const belanja4 = new Belanja('Kue Keju', 12000, 2000)
const belanja5 = new Belanja('kue kacang', 8000, 1000)

beli(uang, belanja1)
.then(kembalian => {
  return beli(kembalian, belanja2)
})
.then(kembalian => {
  return beli(kembalian, belanja3)
})
.then(kembalian => {
  return beli(kembalian, belanja4)
})
.then(kembalian => {
  return beli(kembalian, belanja5)
})
.then(kembalian => {
  console.log(`semua barang sudah dibeli, sisa uang kembalian : ${kembalian}`)
})
.catch((err) => {
  console.log(err)
})
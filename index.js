const beli = require('./beli')

class Groceries {
  constructor(item, harga, waktu){
    this.item = item
    this.harga = harga
    this.waktu = waktu
  }
}

let permen = new Groceries('permen', 1000, 1000)
let roti = new Groceries('roti', 2000, 2000)
let chiki = new Groceries('chiki', 3000, 2000)
let esKrim = new Groceries('es krim', 7000, 2000)
let coklat = new Groceries('coklat', 10000, 3000)

beli(23000, permen)
.then((kembalian)=>{
  return beli(kembalian, roti)
})
.then((kembalian)=>{
  return beli(kembalian, chiki)
})
.then((kembalian)=>{
  return beli(kembalian, esKrim)
})
.then((kembalian)=>{
  return beli(kembalian, coklat)
})
.catch((rej)=>{
  console.log(rej);
})
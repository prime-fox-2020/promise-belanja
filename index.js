'use strict'

const beli = require('./beli.js')
const fs = require('fs')

class Barang {
  constructor(item, harga, waktu) {
    this.item = item
    this.harga = harga
    this.waktu = waktu
  }
}

fs.promises.readFile('./belanjaan.txt', 'utf8')
  .then(data => {
    const list = data.split(/\r\n|\n/g)
      .map(el => el.split(','))
      .map(el => new Barang(el[ 0 ], Number(el[ 1 ]), Number(el[ 2 ])))

    console.log('Barang yang akan dibeli =\n', list)
    beli(27000, list[0])
      .then(kembalian => beli(kembalian, list[1]))
      .then(kembalian => beli(kembalian, list[2]))
      .then(kembalian => beli(kembalian, list[3]))
      .then(kembalian => beli(kembalian, list[4]))
      .then(kembalian => beli(kembalian, list[5]))
      .then(kembalian => beli(kembalian, list[6]))
      .catch(error => console.log(error))
  })
  .catch(error => console.log(error))
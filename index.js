const beli = require('./beli');

const permen = {
  item: "permen",
  harga: "2000",
  waktu: 1000
}

let roti = {
    item: "roti",
    harga: "5000",
    waktu: 3000
  }
let tempe = {
    item: "tempe",
    harga: "4000",
    waktu: 1000
  }

let coklat = {
    item: "coklat",
    harga: "5000",
    waktu: 1000
  }

let ikan = {
    item: "ikan",
    harga: "4500",
    waktu: 1000
  }

  let uang = 50000;

  beli(uang, permen)
  .then((kembalian) => {
    return beli(kembalian, roti);
  })
  .then((kembalian) => {
    return beli(kembalian, tempe);
  })
  .then((kembalian) => {
    return beli(kembalian, coklat);
  })
  .then((kembalian) => {
    return beli(kembalian, ikan);
  })
  .then((kembalian) => {
    console.log(`Total belanjaannya adalah ${uang - kembalian}`)
  })
  .catch(err => {
      console.log(error);
  })

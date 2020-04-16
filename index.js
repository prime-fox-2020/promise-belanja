const beli = require('./beli');

let sayur = {
  item: 'sayur',
  harga: 5000,
  waktu: 1000
}

let permen = {
  item: 'permen',
  harga: 500,
  waktu: 2500
}

let roti = {
  item: 'roti',
  harga: 2000,
  waktu: 1500
}

let air = {
  item: 'air',
  harga: 1000,
  waktu: 900
}

let micin = {
  item: 'micin',
  harga: 1500,
  waktu: 1800
}

beli(15000, sayur)
  .then(uang => {
    return beli(uang, permen);
  })
  .then(uang => {
    return beli(uang, sayur);
  })
  .then(uang => {
    return beli(uang, roti);
  })
  .then(uang => {
    return beli(uang, air);
  })
  .then(uang => {
    return beli(uang, micin);
  })
  .catch(uang => {})
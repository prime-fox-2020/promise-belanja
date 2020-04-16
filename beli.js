function belanja(uang){ // list of belanjaan
  return new Promise ((resolve, reject) => {
    let obj = { 
        item: 'Nasi Padang',
        harga: 15000,
        banyak: 2
      };
    if(uang > (obj.harga * obj.banyak)){
      let sisaUang = uang - (obj.harga * obj.banyak);
      let bawaan = {
        item: obj.item,
        banyak: obj.banyak,
        sisaUang: sisaUang
      };
      resolve(bawaan);
    }else{
      reject(uang);
    }
  })
}

function beliNasgor(sisaUang){
  return new Promise((resolve, reject) => {
    let obj = {
        item: 'Nasi Goreng',
        harga: 10000,
        banyak: 5
      };
    if(sisaUang > (obj.harga * obj.banyak)){
      sisaUang -= (obj.harga * obj.banyak);
      let bawaan = {
        item: obj.item,
        banyak: obj.banyak,
        sisaUang: sisaUang
      };
      resolve(bawaan);
    }else{
      reject(sisaUang);
    }
  })
}


function beliNasduk(sisaUang){
  return new Promise((resolve, reject) => {
    let obj = {
      item: 'Nasi Uduk',
      harga: 5000,
      banyak: 5
    }
    if(sisaUang > (obj.harga * obj.banyak)){
      sisaUang -= (obj.harga * obj.banyak)
      let bawaan = {
        item: obj.item,
        banyak: obj.banyak,
        sisaUang: sisaUang
      };
      resolve(bawaan);
    }else{
      reject(sisaUang);
    }
  })
}

function beliMiegor(sisaUang){
  return new Promise((resolve, reject) => {
    let obj = {
      item: 'Mie Goreng',
      harga: 9500,
      banyak: 3
    };
    if(sisaUang > (obj.harga * obj.banyak)){
      sisaUang -= (obj.harga * obj.banyak)
      let bawaan = {
        item: obj.item,
        banyak: obj.banyak,
        sisaUang: sisaUang
      };
      resolve(bawaan);
    }else{
      reject(sisaUang);
    }
  })
}

function beliMiereb(sisaUang){
  return new Promise((resolve, reject) => {
    let obj = {
      item: 'Mie Rebus',
      harga: 9500,
      banyak: 7
    };
    if(sisaUang > (obj.harga * obj.banyak)){
      sisaUang -= (obj.harga * obj.banyak)
      let bawaan = {
        item: obj.item,
        banyak: obj.banyak,
        sisaUang: sisaUang
      };
      resolve(bawaan);
    }else{
      reject(sisaUang);
    }
  })
}

let uang = Math.floor(Math.random() * 500000);

console.log(`Saya mempunyai uang ${uang}`);
belanja(uang)
  .then(data => {
    console.log(data);
    console.log('Uang masih sisa untuk belanja');
    return beliNasgor(data.sisaUang);
  })
  .then(data => {
    console.log(data);
    console.log('Uang masih sisa untuk belanja');
    return beliNasduk(data.sisaUang);
  })
  .then(data => {
    console.log(data)
    console.log('Uang masih sisa untuk belanja');
    return beliMiegor(data.sisaUang);
  })
  .then(data => {
    console.log(data)
    console.log('Uang masih sisa untuk belanja');
    return beliMiereb(data.sisaUang);
  })
  .then(data => {
    console.log(data);
    console.log('Belanja selesai');
  })
  .catch(err => {
    console.log(`Uang sebanyak ${err} tidak cukup untuk belanja lagi`);
  })

module.exports = belanja;

const beli = require('./beli')


const list = [
  {item : 'mobil2an', harga: 6000, waktu:2000},
  {item : 'robot2an', harga: 3000, waktu:1000},
  {item : 'kapal2an', harga: 5000, waktu:2000},
  {item : 'motor2an', harga: 4000, waktu:1000},
  {item : 'botol2an', harga: 1000, waktu:2000}
]

beli(18000, list[0])
.then(ex =>{
  return beli(ex, list[1])
})
.then(ex =>{
  return beli(ex, list[2])
})
.then(ex =>{
  return beli(ex, list[3])
})
.then(ex =>{
  return beli(ex, list[4])
})
.catch(err =>{
  console.log(err);
})
const beli = require('./beli');
const roti = {
    item : "roti",
    harga : 12000,
    waktu : 2000
}
const ikan = {
    item : "ikan",
    harga : 15000,
    waktu : 4000
}
const sayur = {
    item : "sayur",
    harga : 3000,
    waktu : 1000,
}
const buah = {
    item : "buah",
    harga : 7000,
    waktu : 5000,
}
const susu = {
    item : "susu",
    harga : 38000,
    waktu : 2000
}
beli(50000, roti)
.then(kembalian => beli(kembalian, sayur))
.then(kembalian => beli(kembalian, buah))
.then(kembalian => beli(kembalian, susu))
.then(kembalian => beli(kembalian, sayur))
.then(kembalian => beli(kembalian, ikan))
.catch(kembalian => console.log("Uang tidak cukup"))
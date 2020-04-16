const beli = require('./beli')

let obj1 = {
    item : "ikan",
    harga : 10000,
    waktu : 1000
}
let obj2 = {
    item : "snack",
    harga : 2000,
    waktu : 500
}
let obj3 = {
    item : "mie",
    harga : 3000,
    waktu : 1000
}
let obj4 = {
    item : "ayam",
    harga : 8000,
    waktu : 4000
}
let obj5 = {
    item : "sayur",
    harga : 3000,
    waktu : 5000
}


beli(100000, obj1)
.then((uang) => {
    return beli (uang, obj2)
})
.then((uang) => {
    return beli (uang, obj3)
})
.then((uang) => {
    return beli (uang, obj4)
})
.then((uang) => {
    return beli (uang, obj5)
})
.catch((msg) => {
    console.log(msg)
});
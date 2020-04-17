const beli = require('./beli.js')

const permen = {
    item: "permen",
    harga: "2000",
    waktu: 1000
}

const roti = {
    item: "roti",
    harga: "5000",
    waktu: 1000
}

const ayamGeprek = {
    item: "ayam geprek",
    harga: "20000",
    waktu: 5000
}

const boba = {
    item: "boba",
    harga: "15000",
    waktu: 3000
}

const cilok = {
    item: "ikan",
    harga: "5000",
    waktu: 2000
}

let uang = 40000

// beli(uang, permen,(kembalian) => {
//     beli(kembalian, roti, (kembalian) => {
//         beli(kembalian, ayamGeprek, (kembalian) => {
//             beli(kembalian, boba, (kembalian) => {
//                 beli(kembalian, cilok, (kembalian) => {
//                 console.log(`Total belanjaan: ${uang - kembalian}`)
//                 console.log(`Sisa uang: ${kembalian}`)
//                 })
//             })
//         })
//     })
// })
beli(uang, permen)
    .then(kembalian => beli(kembalian, roti))
    .then(kembalian => beli(kembalian, ayamGeprek))
    .then(kembalian => beli(kembalian, boba))
    .then(kembalian => beli(kembalian, cilok))
    .catch(kembalian => console.log('PULANG'))
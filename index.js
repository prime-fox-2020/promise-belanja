const beli = require('./beli');

const belanjaan = [
    {
        item: 'sayur',
        harga: 3000,
        waktu: 3000
    },
    {
        item: 'ayam',
        harga: 34000,
        waktu: 5000
    },
    {
        item: 'ikan',
        harga: 10000,
        waktu: 3000
    },
    {
        item: 'daging',
        harga: 30000,
        waktu: 3000
    },
    {
        item: 'tempe',
        harga: 2000,
        waktu: 3000
    }
]

let uang = 50000;

beli(uang, belanjaan[0])
.then(sisaUang => {
    return beli(sisaUang, belanjaan[1]);
})
.then(sisaUang => {
    return beli(sisaUang, belanjaan[2]);
})
.then(sisaUang => {
    return beli(sisaUang, belanjaan[3]);
})
.then(sisaUang => {
    return beli(sisaUang, belanjaan[4]);
})
.catch(sisaUang => {
    return beli(sisaUang, belanjaan[4]);
})
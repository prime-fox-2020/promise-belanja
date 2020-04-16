const beli = require("./beli")

const items = [
    {
        item: 'rumah',
        harga: 500000,
        waktu: 1000
    },
    {
        item: 'mobil',
        harga: 300000,
        waktu: 1000
    },
    {
        item: 'motor',
        harga: 40000,
        waktu: 1000
    },
    {
        item: 'jet pribadi',
        harga: 700000,
        waktu: 1000
    },
    {
        item: 'rumah sakit',
        harga: 5500000,
        waktu: 1000
    }]

beli(items[0], 5000000)
    .then(data => {
        return beli(items[1], data)
    })
    .then(data1 => {
        return beli(items[2], data1)
    })
    .then(data2 => {
        return beli(items[3], data2)
    })
    .then(data3 => {
        return beli(items[4], data3)
    })
    .catch(error => {
        console.log(`uang tinggal ${error}`)
    })

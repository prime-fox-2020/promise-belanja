const beli = require('./beli')

let benda = [
    {
        item:"boba",
        harga:15000,
        waktu:500
    },
    {
        item:"geprek",
        harga:10000,
        waktu:1000
    },
    {
        item:"sandwich",
        harga:7000,
        waktu:1000
    },
    {
        item:"mcfloat",
        harga:10000,
        waktu:1000
    },
    {
        item:"mcnugget",
        harga:5000,
        waktu:1000
    }
]

beli(50000,benda[0])
.then(kembalian => {
    return beli(kembalian, benda[1])
})
.then(kembalian => {
    return beli(kembalian, benda[2])
})
.then(kembalian => {
    return beli(kembalian, benda[3])
})
.then(kembalian => {
    return beli(kembalian, benda[4])
})
.catch(err =>{
    console.log(err)
})
const beli = require('./beli')

let citaCita = [
    {
        item: 'tempe mendoan',
        harga: 2000,
        waktu: 3000
    },
    {
        item: 'kolak pisang',
        harga: 2500,
        waktu: 4000
    },
    {
        item: 'restu ayah mbak...',
        harga: Infinity,
        waktu: 5000
    },
]

let modal = 5000

beli(modal, citaCita[0])
.then( kembalianBeli => {
    return (beli(kembalianBeli, citaCita[1]))
})
.then( kembalianBeli => {
    return (beli(kembalianBeli, citaCita[2]))
})
.then( kembalianBeli => {
    return (beli(kembalianBeli, citaCita[3]))
})
.catch( error => {
    console.log(error)
})
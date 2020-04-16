let beli = require('./beli.js')

let listBelanja = [
{
    item: 'roti',
    harga: 5000,
    waktu: 5000

},
{
    item: 'susu',
    harga: 10000,
    waktu: 3000
},
{
    item: 'telur',
    harga: 3000,
    waktu: 7000
},
{
    item: 'beras',
    harga: 15000,
    waktu: 5000
},
{
    item: 'ayam',
    harga: 30000,
    waktu: 4000
},
{
    item: 'paprika',
    harga : 90000,
    waktu :5000
}
]

// beli(100000, listBelanja[0], kembalian => {
//     beli(kembalian, listBelanja[1], kembalian => {
//         beli(kembalian, listBelanja[2], kembalian => {
//             beli(kembalian, listBelanja[3], kembalian => {
//                 beli(kembalian, listBelanja[4], kembalian => {
//                     console.log(`uang kembalian adalah ${kembalian}`)
//                 })
//             })
//         })
//     })
// })

beli(listBelanja[0],100000)
.then(kembalian =>{ 
    return beli(listBelanja[1],kembalian)
})
.then(kembalian =>{
    return beli(listBelanja[2],kembalian)
})
.then(kembalian =>{ 
    return beli(listBelanja[3],kembalian)
})
.then(kembalian =>{
    return beli(listBelanja[4],kembalian)
})
.then(kembalian =>{ 
    return beli(listBelanja[5],kembalian)
})
.catch(kembalian =>{
    console.log(`uang gk cukup nih! uang hanya sisa ${kembalian}`)
})

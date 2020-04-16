const beli = require('./beli')

obj1 = {
    item: 'bola',
    harga: 5000,
    waktu: 3000
}
obj2 = {
    item: 'anduk',
    harga: 10000,
    waktu: 3000
}
obj3 = {
    item: 'payung',
    harga: 20000,
    waktu: 3000
}
obj4 = {
    item: 'pulsa',
    harga: 30000,
    waktu: 3000
}
obj5 = {
    item: 'stik ps',
    harga: 50000,
    waktu: 3000
}

beli(15000, obj1)
.then( sisa =>{
    return beli(sisa, obj2)
})
.then( sisa =>{
    return beli(sisa, obj3)
})
.then( sisa =>{
    return beli(sisa, obj4)
})
.then( sisa =>{
    return beli(sisa, obj5)
})
.catch( err =>{
    console.log(err)
})
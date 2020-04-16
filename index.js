const beli = require ('./beli.js')


let obj1 = {
    item : "Zaku",
    harga : 600000,
    waktu : 1000
}

let obj2 = {
    item : "Sengoku Astray",
    harga : 800000,
    waktu : 1000
}

let obj3 = {
    item : "Rx Origin",
    harga : 685000,
    waktu : 1000
}

let obj4 = {
    item : "Exia QQ",
    harga : 1200000,
    waktu : 1000
}

let obj5 = {
    item : "Barbatos Lupus Rex 1/100",
    harga : 450000,
    waktu : 1000
}

beli (3500000,obj1)
    .then(sisa =>{
        return beli(sisa,obj2)
    })
    .then(sisa=>{
        return beli(sisa,obj3)
    })
    .then(sisa=>{
        return beli(sisa,obj4)
    })
    .then(sisa=>{
        return beli(sisa,obj5)
    })
    .catch((err)=>{
        
    })















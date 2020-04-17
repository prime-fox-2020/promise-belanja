let beli = require (`./beli.js`)

class ListBelanja{
    constructor(item,harga,waktu){
        this.item = item 
        this.harga = harga 
        this.waktu = waktu 

    }
}

let beliPermen = new ListBelanja(`Permen`,2000,500);
let beliRoti = new ListBelanja(`Roti`,5000,1000); 
let beliSusu = new ListBelanja(`Susu`,10000,1000);
let beliKacang = new ListBelanja(`Kacang`,3000,500);
let beliIceCream = new ListBelanja(`Ice Cream`,7000,1500);
let beliCoklat = new ListBelanja(`Coklat`,5000,750);

let uang = 50000;

beli(uang,beliPermen)
.then( kembalian =>{
    return beli(kembalian,beliRoti)
})
.then(kembalian =>{
    return beli(kembalian,beliSusu)
})
.then(kembalian =>{
    return beli(kembalian,beliKacang)
})
.then(kembalian =>{
    return beli(kembalian,beliIceCream)
})
.then(kembalian =>{
    return beli(kembalian,beliCoklat)
})
.catch(err =>{
    console.log(`uang tinggal ${err}`)
})




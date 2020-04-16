// uang 5000
//let obj1 = {
//   item : "Zaku1",
//   harga : 1000,
//   waktu : 1000
// }

// let obj2 = {
//   item : "Zaku2",
//   harga : 2000,
//   waktu : 1000
// }

// let obj3 = {
//   item : "Zaku3",
//   harga : 3000,
//   waktu : 1000

// beli (5000,obj1)
//     .then(sisa =>{
//         return beli(sisa,obj2)
//     })
//     .then(sisa=>{
//         return beli(sisa,obj3)
//     })
//     .catch((err)=>{
//         console.log(err)
//     })

function beli(uang, obj){
return new Promise ((resolve,reject)=>{
  setTimeout(function(){
    console.log(`Saya pergi membeli ${obj.item}`)
    setTimeout(function(){
      let kembalian = uang - obj.harga
      if (kembalian > 0) {
        console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
        resolve(kembalian)
      }else{
        console.log(`uang gk cukup nih buat beli ${obj.item} uangnya kurang ${kembalian}`);
        reject(kembalian)
      }
    }, obj.waktu);
  },obj.waktu);
})
}

module.exports = beli;
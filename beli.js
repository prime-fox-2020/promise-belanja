// Callback

// function beli(uang, obj, cb){
//   console.log(`Saya pergi membeli ${obj.item}`)
//   setTimeout(function(){
//     let kembalian = uang - obj.harga
//     if (kembalian > 0) {
//       console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
//       cb(kembalian)
//     }else{
//       console.log(`uang gk cukup nih buat beli ${obj.item} kembaliannya cuma ${kembalian}`);
//       cb(0)
//     }
//   }, obj.waktu);
// }

// Promise

function beli(uang, obj){
  return new Promise((resolve, reject)=>{
    console.log(`Saya pergi membeli ${obj.item}`);
    setTimeout(()=>{
      let kembalian = uang - obj.harga
      if (kembalian >= 0){
        console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
        resolve(kembalian)
      } else {
        reject(`uang gk cukup nih buat beli ${obj.item} kembaliannya cuma ${uang}`)
      }
    }, obj.waktu)
  })
}


module.exports = beli;
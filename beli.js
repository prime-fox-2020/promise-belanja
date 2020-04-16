// function beli(uang, obj, cb){
//   console.log(`Saya pergi membeli ${obj.item}`)
//   setTimeout(function(){
//     let kembalian = uang - obj.harga
//     if (kembalian > 0) {
//       console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
//       cb(kembalian)
//     }else{
//       console.log(`uang gk cukup nih buat beli ${obj.item} kembaliannya cuma ${kembalian}`);
//       cb(uang)
//     }
//   }, obj.waktu);
// }

function beli (obj,uang){
  return new Promise((res,rej) =>{
    console.log(`Saya pergi membeli ${obj.item}`)
    setTimeout(function(){
      let kembalian = uang - obj.harga
      if(kembalian > 0){
        console.log(`Saya sudah membeli ${obj.item}. Uang kembaliannya adalah ${kembalian}`)
        res(kembalian)
      }else{
        rej(uang)
      }
    })
  },obj.waktu)
}
module.exports = beli;

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

function beli(uang, obj) {
  return new Promise((res,rej)=> {
    setTimeout(()=> {
      let kembalian = uang - obj.harga
      if(kembalian > 0){
        console.log(`saya sudah membeli ${obj.item}, uang kembaliannya ${kembalian}`)
        res(kembalian)
      } else {
        // console.log(`uangnya gak cukup untuk beli ${obj.item} karena duitnya sisa ${kembalian}`)
        // rej(kembalian)
        rej(`uangnya gak cukup untuk beli ${obj.item} karena duitnya sisa ${uang}`)
      }
    }, obj.waktu)
  })
}

module.exports = beli;
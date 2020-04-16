function beli(uang, obj){
  return new Promise( (resolve, reject) => {
    console.log(`Saya pergi membeli ${obj.item}`)
    let kembalian = uang - obj.harga
    setTimeout(function(){
      if (kembalian > 0) {
        console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`)
        resolve(kembalian)
      }else{
        reject(`uang gk cukup nih buat beli ${obj.item} kembaliannya cuma ${kembalian}`);
      }
    }, obj.waktu);
  })
}

module.exports = beli;
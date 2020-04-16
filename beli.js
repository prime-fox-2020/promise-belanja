function beli(uang, obj){
  return new Promise( (resolve, reject) => {
    console.log(`Saya pergi membeli ${obj.item}`)
    let kembalian = uang - obj.harga
    setTimeout(function(){
      if (kembalian > 0) {
        resolve([`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`, kembalian])
      }else{
        reject(`uang gk cukup nih buat beli ${obj.item} kembaliannya cuma ${kembalian}`);
      }
    }, obj.waktu);
  })
}

module.exports = beli;
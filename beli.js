function beli(uang, obj){
  return new Promise((res, rej) => {
    console.log(`Saya pergi membeli ${obj.item}`)
    setTimeout(function(){
        let kembalian = uang - obj.harga
        if (uang > obj.harga) {
            console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
            res(kembalian)
        }else if (uang < obj.harga) {
            console.log(`uang gk cukup nih buat beli ${obj.item} kembaliannya cuma ${uang}`);
            res(uang)
        } else {
          rej('Uang Habis!')
        }
    }, obj.waktu);
  })
}



module.exports = beli;




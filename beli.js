function beli(uang, obj){
  return new Promise((res, rej) => {   
    console.log(`Saya pergi membeli ${obj.item}`)
    setTimeout(function(){
      let kembalian = uang - obj.harga
      if (kembalian >= 0) {
        console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
        res(kembalian)
      }else{
        rej(`uang gk cukup nih buat beli ${obj.item} kembaliannya cuma ${uang}, harga ${obj.item} ${obj.harga}`);
      }
    }, obj.waktu);
  })
}

module.exports = beli;
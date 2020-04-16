function beli(uang, obj){
  console.log(`Saya pergi membeli ${obj.item}`)
  
  return new Promise((resolve, reject) => {
    setTimeout(function(){
      let kembalian = uang - obj.harga
      if (kembalian > 0) {
        console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
        // cb(kembalian)
        resolve(kembalian)
      }else{
        console.log(`Tapi uang gak cukup nih buat beli ${obj.item} jadi gak ada kembaliannya karena dirimu ${Math.abs(kembalian)} harganya, tapi aku tak boleh putus asa. Memang saat ini aku masih berjuang dan kuutamakan orang tua dahulu tentunya, barulah dirimu. Tunggu aku ya mbak! #stayathome aja, atau gak #staybymyside juga boleh.`);
        reject(0)
      }
    }, obj.waktu);
    
  })
  
}


module.exports = beli;
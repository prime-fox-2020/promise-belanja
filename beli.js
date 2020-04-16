function beli(obj, uang) {
  return new Promise ((res,rej) => {
      console.log(`Saya pergi membeli ${obj.item}`)
      setTimeout(function () {
          let kembalian = uang - obj.harga
          if (kembalian > 0) {
              console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
              res(kembalian)
          } else {
              console.log(`uang gk cukup nih buat beli ${obj.item} harganya ${obj.harga}`);
              rej(uang)
          }
      }, obj.waktu);
  })
}

module.exports = beli;
const beli = (uang, obj) => {
  console.log(`Saya pergi membeli ${obj.item}`)
  return new Promise((resolve, reject) => {
    let kembalian = uang - obj.harga
    setTimeout(() => {
      if (uang <= 0) reject("Uangnya mana mak?")
      if (kembalian >= 0) {
        console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
        resolve(kembalian)
      } else {
        console.log(`uang gk cukup nih buat beli ${obj.item} kembaliannya cuma ${kembalian}`);
        resolve(uang)
      }
    }, obj.waktu);
  })
}

module.exports = beli;
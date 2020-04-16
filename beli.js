function beli(uang, item) {
  console.log(`Saya pergi membeli ${item.item}`)
  return new Promise((bayar, tidakBeli) => {
    let kembalian = uang - item.harga
    setTimeout(() => {
      if (uang > item.harga) {
        let result =
        {
          kembalian: kembalian,
          item: item.item
        }
        console.log(`Saya sudah membeli ${item.item} uang kembaliannya ${kembalian}`);
        bayar(result)
      } else {
        tidakBeli(`uang gk cukup nih buat beli ${item.item} kembaliannya cuma ${uang}`)
      }
    }, item.time);
  })
}

module.exports = beli;
const beli = require('./beli');

beli(100000, {item: 'Pulsa HP', harga: 15000, waktu: 3000})
.then(kembalian => {
    return beli(kembalian, {item: 'Tiket Film', harga: 30000, waktu: 4000});
}).then(kembalian => {
    return beli(kembalian, {item: 'Baju', harga: 50000, waktu: 2000});
}).then(kembalian => {
    return beli(kembalian, {item: 'Boba Tea', harga: 20000, waktu: 1000});
}).then(kembalian => {
    return beli(kembalian, {item: 'Makaroni', harga: 15000, waktu: 5000});
}).catch(kembalian => {
    
});
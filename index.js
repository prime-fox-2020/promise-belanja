const beli = require('./beli');

let kotak = [
	{ item: 'permen', harga: 1000, waktu: 1000 },
	{ item: 'samsu', harga: 3000, waktu: 1000 },
	{ item: 'keran', harga: 4000, waktu: 1000 },
	{ item: 'bando', harga: 4000, waktu: 1000 },
	{ item: 'batu', harga: 2000, waktu: 1000 },
	{ item: 'sendal', harga: 6000, waktu: 1000 }
];

beli(15000, kotak[0])
	.then((kembalian) => {
		return beli(kembalian, kotak[1]);
	})
	.then((kembalian) => {
		return beli(kembalian, kotak[2]);
	})
	.then((kembalian) => {
		return beli(kembalian, kotak[3]);
	})
	.then((kembalian) => {
		return beli(kembalian, kotak[4]);
	})
	.then((kembalian) => {
		return beli(kembalian, kotak[5]);
	})
	.catch((error) => {
		console.log(error);
	});

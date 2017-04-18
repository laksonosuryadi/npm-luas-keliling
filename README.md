# luas-keliling

npm package ini dapat digunakan untuk menghitung luas dan keliling dari bangun datar (2 dimensi).
<br><br>
Bangun datar yang terdaftar di dalam npm package ini:
* Persegi Panjang
* Bujur Sangkar
* Lingkaran
* Segitiga
* Trapesium
* Layang-Layang


### Install
```
npm install --save luas-keliling
```

### Penggunaan
```javascript
luasPersegiPanjang(panjang, lebar)
kelilingPersegiPanjang(panjang, lebar)

luasBujurSangkar(sisi)
kelilingBujurSangkar(sisi)

luasLingkaran(radius)
kelilingLingkaran(radius)

luasSegitiga(alas, tinggi)
kelilingSegitiga(sisi1, sisi2, sisi3)

luasTrapesium(sisiSejajar1, sisiSejajar2, tinggi)
kelilingTrapesium(sisi1, sisi2, sisi3, sisi4)

luasLayangLayang(diagonal1, diagonal2)
kelilingLayangLayang(sisiSamaPanjang1, sisiSamaPanjang2)
```


### Contoh Penggunaan
```javascript
var hitung = require('luas-keliling')

console.log(hitung.luasPersegiPanjang(3,10)); // 30
console.log(hitung.kelilingPersegiPanjang(3,10)); // 26
console.log(hitung.luasBujurSangkar(3)); // 9
console.log(hitung.kelilingBujurSangkar(3)); // 12
console.log(hitung.luasLingkaran(6)); // 226.1946710584651
console.log(hitung.kelilingLingkaran(6)); // 37.69911184307752
console.log(hitung.luasSegitiga(3,4)); // 6
console.log(hitung.kelilingSegitiga(3,3,3)); // 9
console.log(hitung.luasTrapesium(4,9,12)); // 78
console.log(hitung.kelilingTrapesium(9,15,4,15)); // 43
console.log(hitung.luasLayangLayang(15,30)); // 225
console.log(hitung.kelilingLayangLayang(25,10)); // 70

```

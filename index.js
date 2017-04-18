function luasPersegiPanjang(p, l) {
  return p * l
}

function kelilingPersegiPanjang(p, l){
  return 2 * (p+l)
}

function luasBujurSangkar(s) {
  return s * s
}

function kelilingBujurSangkar(s) {
  return 4 * s
}

function luasLingkaran(r) {
  return 2 * Math.PI * Math.pow(r,2)
}

function kelilingLingkaran(r) {
  return 2 * Math.PI * r
}

function luasSegitiga(a, t) {
  return (a * t) / 2
}

function kelilingSegitiga(s1, s2, s3) {
  return s1 + s2 + s3
}

function luasTrapesium(sisiSejajar1, sisiSejajar2, t) {
  return 0.5 * (sisiSejajar1 + sisiSejajar2) * t
}

function kelilingTrapesium(s1, s2, s3, s4) {
  return s1 + s2 + s3 + s4
}

function luasLayangLayang(diagonal1, diagonal2){
  return 0.5 * diagonal1 * diagonal2
}

function kelilingLayangLayang(sisiSamaPanjang1, sisiSamaPanjang2){
  return 2 * (sisiSamaPanjang1 + sisiSamaPanjang2)
}

module.exports = {
  luasPersegiPanjang,
  kelilingPersegiPanjang,
  luasBujurSangkar,
  kelilingBujurSangkar,
  luasLingkaran,
  kelilingLingkaran,
  luasSegitiga,
  kelilingSegitiga,
  luasTrapesium,
  kelilingTrapesium,
  luasLayangLayang,
  kelilingLayangLayang
}

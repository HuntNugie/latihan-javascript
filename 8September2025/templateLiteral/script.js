// template literal merupakan salah satu pembentuk string dimana kita dapat memasukan langsung expression di dalam string tanpa concat dengan tand plus ataupun kita dapat membangun struktur element html di dalam nya untuk di tambahkan ke dalam dom html nya

// membuat string literal
let nama = "Nugie kurniawan"
let teks = `Nama saya adalah ${nama}`
console.log(teks)

// bisa langsung menambahkan operasi expression
let hasil = `hasil dari 1 + 1 adalah ${1+1}`
console.log(hasil)
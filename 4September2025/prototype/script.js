// prototype merupakan wadah untuk dapat menyimpan property atau method mau itu property bawaan javscript ataupun property atau method dari object lain
// prototype mempunyai pointer __proto__ yang akan menunjuk kepada object perwarisan sehingga object nya dapat menggunakan property atau method dari object lain

function Manusia(nama,umur){
    this.nama = nama
    this.umur = umur
}
Manusia.prototype.makan = function(porsi = 0){
    console.log(`${this.nama} sedang makan ${porsi} porsi`)
}
let nugie = new Manusia("Nugie kurniawan",21)

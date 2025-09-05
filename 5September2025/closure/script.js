// belajar closure
// closure merupakan kondisi dimana local scope itu memerlukan nilai dari lexical scope nya dalam hal ini contoh nya variabel
// lexical scope merupakan scope dimana function itu di tulis

// contoh program counter
let tambah = (function(){
    let counter = 0 //nah ini lah nilai yang di perlukan inner function sehingga bisa di sebut closure
    return function(){
        return ++counter // disini function tanpa nama ini memerlukan variabel counter yang ada di lexical scope nya karna di local scope dan argument/parameter tidak ada
    }
})()

console.log(tambah())
console.log(tambah())
console.log(tambah())

// contoh ke dua program HalloSelamat
function halo(waktu){
    return function(nama){
         console.log(`halo selamat ${waktu} ${nama}`)
    }
}

let selamatPagi = halo("pagi")
let selamatMalam = halo("Malam")
let selamatSore = halo("sore")

selamatPagi("Nugie kurniawan")
selamatSore("alexander kurniawan")
selamatMalam("Muhammad nadin nugraha")
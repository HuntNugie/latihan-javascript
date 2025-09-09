// destructuring assigment merupakan membongkar array atau object untuk di masukan nilai nya ke dalam variabel baru

// destructuring array
const angka = [1,2,3,4,5,6,7,8,9,10]

const [satu,dua] = angka
console.log(satu,dua)

// skip item
const [,,tiga,empat] = angka
console.log(tiga,empat)

// return dari function
function tes(){
    return [1,2]
}
const [one,two] = tes()
console.log(one,two);

// menukar item
let a = 10
let b = 5
console.log(a);
console.log(b);
[a,b] = [b,a]
console.log(a);
console.log(b);

// destructuring object
let mhs = {
    nama:"Nugie kurniawan",
    prodi:"teknik informatika",
    kelas:"A2024",
}
const {nama,prodi,kelas} = mhs // harus sama nama variabel dengan properti yang ada di dalam object nya
console.log(nama,prodi,kelas)

// jika ingin beda
const {nama:name,prodi:pro,kelas:klass} = mhs
console.log(name,pro,klass)

// bisa membongkar langsung di function
function coba({prodi}){
    return prodi
}

console.log(coba(mhs))

// bisa di tampung ke dalam rest parameter
// kalau array
const [hiji,...sisa] = angka
console.log(sisa)

// kalau object
const {nama:names,...sesa} = mhs
console.log(nama,sesa)
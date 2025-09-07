// latihan method filter,map,reduce

// filter berfungsi untuk memfilter element apa saja yang di ambil dari array nya dan akan mengembalikan array kembali

// const angka = [-1,2,3,5,4,-2,-4,6,8,-9,7]
// // ambil lebih dari 3

// let baru = angka.filter(ang => ang > 3)

// // map berfungsi untuk memetakan dan bisa mengubah atau memanipulasi isi array nya dan akan mengembalikan array baru

// // ingin semua nya itu di kalikan 3
// let mapBaru = angka.map(angk => angk * 3)
// console.log(mapBaru)

// // reduce berfungsi untuk menjumlahkan seluruh element array 

// // menambahkan seluruh element array 
// let redBaru = angka.reduce((acc,curr)=>acc + curr)
// console.log(redBaru)

// menggabungkan dengan chaining
const angka = [-1,2,3,5,4,-2,-4,6,8,-9,7]

// pertama di carikan dulu bilangan yang tidak negatif
let hasil = angka.filter(a => a > 0)
// kalikan 5 seluruhnya 
    .map(a => a * 5)
// sorting dari yang terkecil
    .sort((a,b) => a-b)
// tambahkan
    .reduce((acc,curr) => acc + curr)
console.log(hasil)
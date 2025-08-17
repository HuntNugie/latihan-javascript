// latihan dan mengulang materi memanipulasi array
// membuat array
let mahasiswa = ["Nugie kurniawan","Slamet","Asep","Raka sagraha"]
let angka = [22,34,1,2,4,3,5,7,5,8,9,10]

// menambahkan secara manual
mahasiswa[mahasiswa.length] = "Muhammad nadin nugraha"
console.log(mahasiswa.join())

// menghapus secara manual(di ubah menjadi nilai defaul yaitu undifined)
mahasiswa[mahasiswa.length-1] = undefined
console.log(mahasiswa)

// mengganti secara manual
mahasiswa[mahasiswa.length-1] = "Alexander kurniawan"
console.log(mahasiswa)

// menggunakan method method di object array pada javascript
// join berfungsi untuk menyambung element array menjadi 1 string
console.log(mahasiswa.join("|"))

// push berfungsi untuk menambahkan data element array ke yang paling terakhir di element array
mahasiswa.push("Alexandria kurniawati")
console.log(mahasiswa.join("|"))

// pop berfungsi untuk menghapus data element array yang berada di paling terakhir
mahasiswa.pop()
console.log(mahasiswa.join("|"))

// unshift berfungsi untuk menambahkan data element array ke yang paling awal
mahasiswa.unshift("alexandria kurniawati")
console.log(mahasiswa.join("|"))

// shift berfungsi untuk menghapus element array yang paling awal
mahasiswa.shift()
console.log(mahasiswa.join("|"))

// splice berfungsi untuk menambahkan/menghapus/mengganti element array yang di pilih
// splice(index awal,mau berapa yang di hapus,datanya)
// jika tidak ada yang di hapus akan di tambahkan sebelaum index awal, jika ada yang di hapus maka akan di mulai dari index awal nya
mahasiswa.splice(1,0,"Alexandria kurniawati")
console.log(mahasiswa.join("|"))

// slice berfungsi untuk membuat array baru dari element array yang sudah di pilih
// index akhir nya tidak akan terbawa
let arrayBaru = mahasiswa.slice(1,5)
console.log(arrayBaru.join())

// forEach berfungsi untuk mengulang array dan menjalankan apapun isi kode yang ada di block callback function nya 
// array.forEach(callback function(element,index,array))
// forEach tidak ada hasil kembali jadi hanya murni menjalankan array saja apa yang ada di callback function dan hanya mengembalikan nilai undifined
mahasiswa.forEach((e) => {
    console.log(e)
})

// map berfungsi untuk menjalankan array mirip dengan forEach hanya saja dapat mengembalikan nilai untuk memanipulasi data atau transformasi element array nya dan map juga mengembalikan array baru serta wajib menggunakan return karna untuk mengembalikan element array nya agar array baru nya tidak undifined
// let variable = array.map(callback function(element,index,array))
let baru = angka.map((e) => {
    return e*100
})
baru.forEach((e) => console.log(e))

// sort berfungsi untuk mengurutkan element array sesuai keinginan developer secara default sort akan mengurutkan berdasarkan ascending dari karakter huruf string jika ingin berdasarkan numerik maka harus return nilai hasil yang di inginkan
// negatif -> ascending numeric
// positif -> descending numeric
// 0 -> posisi tidak berubah
// sort tidak akan membuat array baru sehingga akan mengurutkan array yang sedang di pakai sekarang
// dan paramter di callback function nya hanya menampung 2 parameter saja untuk pembanding

angka.sort() // akan mengurutkan secara ascending karakter string
console.log(angka.join("|"))
angka.sort(function(a,b){
    return a-b // ini akan mengurutkan secara ascending numeric
})

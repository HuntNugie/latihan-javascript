// ulang pembelajaran object

// object merupakan sebuah struktur data yang berpasangan key dan value yang mirip dengan array tetapi key pada object bisa di custom, dan kita bisa menginisialisasi nilainya langsung dalam block object nya

// variable di object di sebut dengan properti
// function di object di sebut dengan method

// membuat object
let mahasiswa = {
    // membuat properti
    nama : "Nugie kurniawan",
    prodi : "Teknik informatika D3",
    kelas : "A2024",
    // membuat array di object
    ips : [3.67,4.0],
    // membuat object di dalam object
    alamat : {
        rumah : "Perumahan bumi sangkuriang 4 block C3",
        kec : "Tanjungsari",
        kab : "Kab sumedang",
        display : function(){
            let text = `${this.rumah} ${this.kec} ${this.kab} `
            return text
        }
    },
    // membuat method di object mempunyai 2 cara bisa dengan langsung menulis function nya atau kita buat seperti expression function
    // membuat seperti function pada umumnya hanya saja tanpa keyword function
    akumulatif(){
        let hasil = 0
        this.ips.forEach((e) => {
            hasil += e
        })
        return hasil / this.ips.length
    },
    // membuat method seperti function expression
    display : function(){
        let text = `Data mahasiswa \nNama \t\t\t: ${this.nama} \nAlamat \t\t\t: ${this.alamat.display()} \nProdi \t\t\t: ${this.prodi} \nKelas \t\t\t: ${this.kelas} \nIpk akumulatif \t: ${this.akumulatif()} `
        return text
    }
}   

// menjalankan properti
console.log(mahasiswa.nama)
// mendapatkan properti/object di dalam object yang berada di object
console.log(mahasiswa.alamat.display())
// mendapatkan data array
console.log(`semester ke 1 ips nya adalah ${mahasiswa.ips[0]}`)

console.log("===========Data lengkap=============")
// menjalankan method
console.log(mahasiswa.display())
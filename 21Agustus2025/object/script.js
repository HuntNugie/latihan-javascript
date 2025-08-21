// membuat object ada 3 cara

// dengan object literal
let mhs = {
    nama:"Nugie kurniawan",
    prodi:"Teknik informatika",
    nim : 24010004
}
// menjalankan 
console.log(mhs.nama)

// dengan function declaration
function buatObjek(nama,nim,prodi){
    let obj = {}
    obj.nama = nama
    obj.nim = nim
    obj.prodi = prodi
    return obj
}

// membuat instance obj nya
let mhs2 = buatObjek("Nadin nugraha",24010010,"Teknik kerja lapangan")

// menjalankan nya
console.log(mhs2.nama)


// dengan function constructor
function Mahasiswa(nama,nim,prodi){
    this.nama = nama
    this.nim = nim
    this.prodi = prodi
}

// membuat instance object nya
let mhs3 = new Mahasiswa("Azib alamzida",24010005,"Teknik mesin")

// menjalankan nya
console.log(mhs3.nama)

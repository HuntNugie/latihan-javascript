// object create itu adalah sebuah method yang berfungsi untuk membuat object baru dan parameter nya dapat di isi dengan object yang dapat di jadikan perwarisan sehingga method dan property nya dapat di gunakan dan di simpan di prototype

let method = {
    uas(nilai){
        return this.nilai.push(nilai)
    },
    uts(nilai){
        return this.nilai.push(nilai)
    },
    tugas(nilai){
        return this.nilai.push(nilai)
    },
    akumulasi(){
        let hasil = 0
        this.nilai.forEach((e)=>{
             hasil += e    
        })
        return this.ipk =  Math.round(hasil / this.nilai.length)
    },
    display(){
        console.log(`nama : ${this.nama}\nnim : ${this.nim}\nprodi : ${this.prodi}\nipk : ${this.ipk}`)
    }
    
}

function Mahasiswa(nama,nim,prodi){
    let obj = Object.create(method) // jadi intinya disini tuh sebenernya membuat object kosong dengan ada prototype dari obeject method sehingga object baru ini dapat menggunakan method method yang ada di object method perwarisan
    obj.nama = nama
    obj.nim = nim
    obj.prodi = prodi
    obj.nilai = []
    obj.ipk = 0
    return obj
}

let nugie = Mahasiswa("Nugie kurniawan",24010004,"Teknik informatika")
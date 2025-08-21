// juragan angkot dengan objek
// bisa menentukan berapa angkot yang mau di buat
// trus penumpang bisa menentukan mau naik angkot yang mana

let terminal = []

function Angkot(nama,jurusan){
    this.nama = nama
    this.jurusan = jurusan
    this.penumpang = []
}

// inputan untuk menentukan mau berapa angkot yang ada di terminal
let admin = parseInt(prompt("Masukan mau berapa angkot yang ada di dalam terminal (minimal isi 1): "))

// membuat function untuk memasukan object ke dalam array terminal
let masuk = function(nama,jurusan){
    // membuat instance object nya 
    nama = new Angkot(nama,jurusan)
    
    // masukan ke dalam terminal
    return terminal.push(nama)
}
// mengulang untuk admin memasukan angkot apa aja yang berada di terminal
for(let i = 1; i<=admin;i++){
    let namaAngkot = prompt(`Masukan nama angkot ke ${i} : `)
    let jurusan = prompt(`Masukan jurusan angkot ke ${i} : `)
    masuk(namaAngkot,jurusan)
}
let daftarNama = []
let angka = []
// membuat function untuk penumpang bisa memilih angkot yang mana yang mau dia pilih
for(let i = 0;i<terminal.length;i++){
    daftarNama.push(terminal[i].nama)
    angka.push(i)
}
let text = daftarNama.map((e,i) => `${i+1} ${e}`).join("\n")
function masukPenumpang(){
    let pilih = parseInt(prompt(`angkot yang bisa anda pilih :\n ${text} \nMasukan pilihan anda (number)`))
    let angkot = terminal[pilih-1]
    let nama = prompt("Masukan nama penumpang nya : ")
    if(angkot.penumpang.length == 0){
        let array = terminal[pilih-1].penumpang.unshift(nama)
        return alert(`${nama} sudah berhasil masuk di angkot ${terminal[pilih-1].nama}`)

    }else{
        // cari index undefined jika ada
        let index = angkot.findIndex((e) => e == undefined)
        if(angkot.penumpang.includes(undefined) && !angkot.penumpang.includes(nama)){
            angkot.penumpang.splice(index,1,nama)
            return alert(`${nama} sudah berhasil masuk di angkot ${terminal[pilih-1].nama}`)
        }else if(angkot.penumpang.includes(nama)){
            return alert(`${nama} sudah berada dalam angkot ${terminal[pilih-1].nama}`)
        }else{
            angkot.penumpang.push(nama)
            return alert(`${nama} sudah berhasil masuk di angkot ${terminal[pilih-1].nama}`)
        }
    }
}
function cekPenumpang(){
    let pilih = parseInt(prompt(`angkot yang bisa anda pilih :\n ${text} \nMasukan pilihan anda (number)`))
    let daftarPenumpang = terminal[pilih-1].penumpang.map((e,i) => `${i+1} ${e}`).join("\n")

    return alert(`isi dari angkot ${terminal[pilih-1].nama} :\n${daftarPenumpang}`)
}
function turunPenumpang(){
    let pilih = parseInt(prompt(`angkot yang bisa anda pilih :\n ${text} \nMasukan pilihan anda (number)`))
    
    let angkot = terminal[pilih-1]
    let daftarPenumpang = angkot.penumpang.map((e,i) => `${i+1} ${e}`).join("\n")
    let nama = prompt(`daftar isi penumpang dari angkot ${angkot.nama} :\n${daftarPenumpang} \nMasukan nama yang ingin anda turun kan`)
    // cek jika kosong
    if(angkot.penumpang.length == 0){
        return alert("angkot tersebut kosong")
    }else{
        // jika ada
        let index = angkot.penumpang.findIndex((e) => e == nama);
        if(angkot.penumpang.includes(nama)){
            angkot.penumpang.splice(index,1,undefined)
            return alert(`${nama} berhasil turun dari angkot`)
        }else{
            return alert(`${nama} tidak ada di dalam angkot`)
        }
    }
}
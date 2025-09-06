// arrow function merupakan expression function tetapi dalam bentuk sangat simple serta ada sedikit perbedaan dimana arrow function tidak punya konsep this this arrow function itu tergantung lexical scope nya dimana arrow function tersebut di tulis, sedangkan kalau function biasa punya konsep this nya yang mengacu saat dia di panggil oleh siapa, arrow function juga tidak punya arguments, dan arrow function tidak bisa menjadi constructor dalam pembuatan object

// pembuatan arrow function
let hallo = ()=>{
    console.log("Hallo dunia")
}

// this arrow function
let coba = function(){
    this.nama = "Nugie kurniawan"
    this.method = ()=>{
        console.log(this) // this ini akan mengacu ke coba karena arrow function akan mengacu kepada lexical scope nya
    }
}

let cba = new coba()

// jika hanya ada 1 arguments bisa lebih ringkas
let tes = nama => {console.log(`nama saya adalah ${nama}`)}

// jika hanya ada return di block kode nya bisa lebih ringkas juga
let nyoba =  nama => `nama adik saya ${nama}`

// higher order function
// higher order function dimana function dapat menerima parameter function lain atau function tersebut menjadi return dari function lain sehingga bisa menghasilkan namanya functional programming dan abstraksi code

function cetakNama(nama,action){
    return action(`nama saya adalah ${nama}`)
}

cetakNama("Nugie kurniawan",console.log)
cetakNama("Nugie kurniawan",alert)


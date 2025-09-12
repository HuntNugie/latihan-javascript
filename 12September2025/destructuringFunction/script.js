// destructuring function merupakan dimana kita dapat me return array ataupun object di function dan dapat di gunakan untuk destructuring di tangkap variabel nya ataupun kita dapat mendestruturing langsung di parameter nya

// sebagai return value

function kalkulasi(a,b){
    return [a+b,a-b,a*b,a/b]
}

// bisa diberi nilai default
const [tambah,kurang,kali,bagi = "Tidak ada"] = kalkulasi(2,3)
console.log(tambah)


// sebagai parameter
let manusia = {
    nama:"Nugie kurniawan",
    umur:21
}

function cetakNama({nama}){
    return nama
}

console.log(cetakNama(manusia))
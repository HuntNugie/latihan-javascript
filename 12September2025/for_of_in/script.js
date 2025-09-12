// for of berfungsi untuk melooping iterable
let angka = [1,2,43,5]

// pada array
for(ang of angka){
    console.log(ang)
}

// pada string
let nama = "Nugie kurniawan"
for(const char of nama){
    console.log(char)
}

// pada node list
let node = document.querySelectorAll("li")

for(const el of node){
    console.log(el.textContent)
}

// for in itu untuk enurable jadi hanya akan mendapatkan key nya saja seperti object

let mhs = {
    nama:"Nugie kurniawan",
    prodi:"Teknik informatika",
    univ:"Stmik mardira indonesia",
}

for(key in mhs){
    console.log(mhs[key])
}

// rekursif
let hasil = 0
function tambah(n){
    hasil +=n;
    if(n===0)return;
    console.log(n)
    return tambah(n-1)
}
tambah(5)
console.log(hasil)
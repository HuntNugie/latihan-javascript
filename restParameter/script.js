// rest parameter berfungsi untuk menyimpan nilai nilai dari arguments yang dikirim ke parameter dan otomatis berbentuk array

function tampilAngka(satu,dua,...sisa){
    return [satu,dua,sisa] //ini satu dan dua itu akan di tangkap ke dalm vribel sedngkan sisa nya di simpan dalam bentuk array 
}

const angka = tampilAngka(1,2,3,4,5)
console.log(angka)
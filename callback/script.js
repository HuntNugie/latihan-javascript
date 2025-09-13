// asynchronus merupakan mekanisme dimana program berjalan non blocking sehingga task yang asymchronus(biasanya task asynchronus itu yang memerlukan kondisi untuk bisa jalan) yang ada di dalam stack akan di pindahkan di jalankan terpisah di web api dan task lain next nya akan di jalankan nah task asynchronus ini setelah kondisi nya terpenuhi maka akan pindah di call queue dan event loop akan  mengecek apakah ada task di dalam stack jika tidak maka akan ambil task yang ada di call queue

// callback itu istilah dimana kita memanggil function di dalam function
// buat map buatan nugie
Array.prototype.mapNugie = function(callback){
   let arrayBaru = []
    for(let el of this){
       arrayBaru.push(callback(el))
    }
    return arrayBaru;
}

const angka = [1,2,3,4,5]
const baru  = angka.mapNugie((el)=>{
    return el+1
})
console.log(angka)
console.log(baru)
// variable scope

// scope adalah ruang lingkup dimana program berjalan
// javascript menganut function scope pada awal nya dengan menggunaakan var
// tetapi setelah mempunyai let dan const javascript bisa di gunakan dengan blok({}) scope

// function scope
function tes(){
     a = 1 //variable yang di tulis di dalam blok function itu hanya hidup di area function nya saja dengan ketentuan harus menggunakan keyword pembentuk variable seperti var,let, dan const
        // jika variable tersebut tidak menggunakan keyword pembentuk variable karna javascript menghoisting function dengan isinya maka saat fase create akan di buatkan di global scope deklarasi variable nya secara otomatis
}
tes()
console.log(a)

// contoh blok scope
if(a == 1){
    let a = 10
}

console.log(a)
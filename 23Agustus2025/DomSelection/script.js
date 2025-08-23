// Dom selection merupakan istilah dimana kita dapat mencari/menseleksi/mendapatkan node node yang dapat kita gunakan untuk memanipulasi node nya

// getElementById() -> element
// berfungsi untuk mencari/menseleksi/mendapatkan element html yang mempunyai attribute id yang sesuai
// akan menghasilkan 1 element saja

const judul = document.getElementById("judul")
judul.innerHTML = "Nugie kurniawan"
judul.style.color = "purple"
judul.style.backgroundColor = "violet"

// getElementsByTagName() -> htmlCollection(array like object)
// berfungsi untuk mencari/menseleksi/mendapatkan element html berdasarkan Tag html nya sesuai
// akan menghasilkan htmlCollection yaitu mirip dengan array sehingga bisa menghasilkan lebih dari 1 hasil
const paragraph = document.getElementsByTagName("p")
// untuk bisa memanipulasi karna berbentuk array like object sehingga anda bisa menggunakan indexing untuk manipulasi nya
paragraph[0].innerHTML = "Ini di ubah di js"
// bisa menggunakan konversi menjadi array agar bisa menggunakan method method array
Array.from(paragraph).forEach((e) => {
    e.style.color = "lime"
})
// bisa menggunakan looping klasik biasa
for(let i = 0; i<paragraph.length;i++){
    paragraph[i].style.backgroundColor = "darkGreen"
}

// getElementsByClassName() -> htmlCollection(array LIke object)
// berfungsi untuk mencari/menseleksi/mendapatkan element html berdasarkan attribute class yang sesuai
// akan menghasilkan htmlCollection sehingga bisa menghasilkan lebih dari 1 hasil
const p = document.getElementsByClassName("p2")[0]
// walaupun jika hanya mendapatkan 1 hasil saja tetap akan mnejadi htmlCollection yang berbentuk array like object
p.innerHTML = "Alexander kurniawan"
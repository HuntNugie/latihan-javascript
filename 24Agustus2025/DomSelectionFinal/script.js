// Belajar Dom Selection final

// Dom selection berfungsi untuk menseleksi/mencari/mendapatkan node atau element html agar kita bisa memanipulasi element html yang sudah di target

// getElementById() -> element
// berfungsi untuk menseleksi/mencari/mendapatkan element html berdasarkan attribute id yang sesuai
// akan mengembalikan 1 element html saja
const judul = document.getElementById("judul")
judul.style.color = "lime"
judul.innerHTML = "Nugie kurniawan"

// getElementsByTagName() -> htmlCollection
// berfungsi untuk menseleksi/mencari/mendapatkan element html berdasarkakn tag html nya
// akan menghasilkan htmlCollection yaitu array like object jadi bukan array asli sehingga secara default tidak dapat menggunakan method array
const paragraph = document.getElementsByTagName("p")
// bisa konversi ke array untuk menggunakan method array
Array.from(paragraph).forEach((e) => {
    e.style.color = "darkRed"
})
// bisa menggunakan for looping klasik
for(let i = 0;i<paragraph.length;i++){
    paragraph[i].style.backgroundColor = "red"
}

// bisa menggunakan indexing untuk mendapatkan satu element saja di htmlCollection atau nodelist
paragraph[0].innerHTML = "Nugie kurniawan"

// getElementsByClassName() -> htmlCollection
// berfungsi untuk menseleksi/mencari/mendapatkan element html berdasarkan attribute class nya yang sesuai
// akan menghasilkan htmlCollection seperti getElementsByTagName
const p2 = document.getElementsByClassName("p2")[0] //bahkan jika hanya menghasilkan 1 element saja yang di dapat tetap berbentuk htmlCollection dan jika ingin mendapatkan nilainya langsung 1 bisa menggunakan indexing saat inisialisasi target class nya
p2.innerHTML = "Nadin nugraha"

// querySelector() -> element
// berfungsi untuk menseleksi/mencari/mendapatkan element html mengguakan selector seperti selector pada css
// akan menghasilkan 1 element html
const p3 = document.querySelector(".p3")
p3.innerHTML = "Alexander kurniawan"

// querySelectorAll() -> nodelist
// berfungsi untuk menseleksi/mencari/mendapatkan element html menggunakan selector seperti selector pada css dan mirip dengan querySelector()
// akan menghasilkan nodelist yaitu array like object bukan lah array asli sehingga tidak bisa menggunakan method array
const li2 = document.querySelectorAll("section#b ul li:last-child")[0]
li2.style.backgroundColor = "darkGreen"
li2.style.color = "lime"

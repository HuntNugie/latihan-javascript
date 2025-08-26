// Dom manipulation merupakan istilah untuk kita bisa memanipulasi node atau element html yang sudah kita seleksi

// innerHTML
// berfungsi untuk merubah seluruh isi dari element html nya bukan hanya teks doang tetapi kita bisa merangkai elemnt html di dalamnya

const judul = document.getElementById("judul")
judul.innerHTML = "<i>Nugie kurniawan</i>"

// style.<propertie>
// berfungsi untuk menambahkan style css ke element yang di seleksi dimana akan mengisikan inline css
judul.style.color = "lime"
judul.style.backgroundColor = "darkGreen"

// .attribute
// berfungsi untuk memanipulasi attribute yang berada di dalam element html
// ada beberapa method untuk memanipulasi attribute

// setAttribute
// berfungsi untuk menambahkan attribute baru pada element html
judul.setAttribute("name","judul")

// getAttribute
// berfungsi untuk mendapatkan isi value dari attribute 
console.log(judul.getAttribute("name"))

// removeAttribute
// berfungsi untuk menghapus attribute yang berada di element html
judul.removeAttribute("name")

// classList
// berfungsi untuk memanipulasi class yang ada di element html
// ada beberapa method di classList
const p2 = document.querySelector(".p2")

// add()
// berfungsi untuk menambahkan class baru di element html (tidak akan menimpa class yang ada)
p2.classList.add("pink")

// remove()
// berfungsi untuk menghapus class tertentu yang berada di element html
p2.classList.remove("pink")

// toggle()
// berfungsi untuk jika class yang di set ada maka akan menghapus class tersebut dan jika class tersebut tidak ada maka akan menambahkan class tersebut 
p2.classList.toggle("pink")

// item()
// berfungsi untuk mendapatkan value dari class menggunakan mirip seperti indexing array yang di mulai dari 0
console.log(p2.classList.item(1))

// contains()
// berfungsi untuk mengecek apakah suatu class ada di dalam class tersebut jika ada akan menghasilkan true dan jika tidak ada akan menghasilkan false(akan menghasilkan tipe data boolean)
console.log(p2.classList.contains("pink"))

// replace()
// berfungsi untuk menggantikan class yang ada dengan class yang di set
p2.classList.replace("pink","orange")
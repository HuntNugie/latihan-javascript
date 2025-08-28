// belajar dom manipulation part 2

// createElement()
// berfungsi untuk membuat element html baru
const h2Baru = document.createElement("h2")

// createTextNode()
// berfungsi untuk membuat text node
const teks = document.createTextNode("Ini adalah paragraph baru javascript")

// alternatif untuk membuat text string untuk element di banding menggunakan createTextNode()
// pBaru.textContent = "Nugie kurniawan" //langsung menambahkan teks ke element
// pBaru.append("Ini Teks baru paragraph") // langsung menambahkan teks ke element, dan method append ini parameter nya bisa menerima string ataupun node untuk di masukkan ke dalam parent node nya

// appendChild()
// berfungsi untuk menambahkan/memasukan node child ke node parent jika parent node di dalamnya sudah ada node child maka node child yang terbaru akan di tambahkan di paling akhir
h2Baru.appendChild(teks)

const sectionA = document.getElementById("a")
sectionA.appendChild(h2Baru)

// insertBefore()
// berfungsi untuk menambahkan/memasukkan node child ke node parent yang akan di pasang sebelum node child yang ada di dalam node parent

const ul = document.querySelector("section#b ul")
const li2 = ul.querySelector("li:nth-child(2)")

const liBaru = document.createElement("li")
liBaru.append("Li baru")
ul.insertBefore(liBaru,li2)

// removeChild()
// berfungsi untuk menghapus node child yang ada di dalam node parent
sectionA.removeChild(sectionA.querySelector("a"))

const sectionB = document.getElementById("b")
// cloneNode()
// berfungsi untuk mengcopy node yang bisa di pakai lebih dari 1 parent 
const clone = h2Baru.cloneNode(true) // jika true berarti dengan node child nya kalau false hanya node parentnya saja tidak dengan node child nya

// replaceChild()
// berfungsi untuk mengganti node child yang ada dengan node child yang baru di set di parent node
sectionB.replaceChild(clone,sectionB.querySelector("p"))


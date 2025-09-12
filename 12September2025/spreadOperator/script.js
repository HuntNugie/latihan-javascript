// spread operator berfungsi untuk memecah iterable mendaji pecah pecahan element
// array

const angka = [1,2,3,4,5]
const angkaBaru = [...angka] // ini akan menjadi copyan dari angka
console.log(angkaBaru)

// string
const nama = "Muhammd nadin nugraha"
const pisah = [...nama] // ini akan menjadi array dalam bentuk pecah string nya
console.log(pisah)

// nodelist
const node = document.querySelectorAll("li")
const beda = [...node] // ini node list nya akan berubah menjadi array
console.log(beda)

// latihan
const latihan = document.querySelector("h1")
const ubah = [...latihan.textContent].map((el)=>{
    return `<span>${el}</span>`
}).join("")
latihan.innerHTML = ubah

// tangkap
const tankgap = document.querySelectorAll("span")
tankgap.forEach((el)=>{
    el.addEventListener("mouseenter",(event)=>{
        event.target.style.color = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
    })
})
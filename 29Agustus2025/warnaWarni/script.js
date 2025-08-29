// warna warni
const fav = document.getElementById("favorite")

fav.addEventListener("click",() => {
    document.body.classList.toggle("bg-slate-600")
})

// membuat warna random
const random = document.createElement("button")
random.textContent = "RANDOM"
random.classList.add("rounded-full")
random.classList.add("bg-red-400")
random.classList.add("p-3")
random.classList.add("inline-block")
fav.after(random)

// membuat function untuk angka random 0-255
let angkaRandom = function(){
    return Math.floor(Math.random() * 255)
}

random.addEventListener("click",() => {
    let merah = angkaRandom()
    let biru = angkaRandom()
    let hijau = angkaRandom()

    document.body.style.backgroundColor = `rgb(${merah},${hijau},${biru})`
})


// membuat kotak warna
const divMerah = document.createElement("div")
divMerah.classList.add("bg-red-500")
divMerah.classList.add("w-15")
divMerah.classList.add("h-15")
divMerah.classList.add("mx-auto")
divMerah.classList.add("mt-10")
random.after(divMerah)
// membuat range
const inputMerah = document.createElement("input")
inputMerah.setAttribute("type","range")
inputMerah.setAttribute("min","0")
inputMerah.setAttribute("max","255")
inputMerah.classList.add("block")
inputMerah.classList.add("mx-auto")
inputMerah.classList.add("mt-5")
divMerah.after(inputMerah)
// membuat kotak warna
const divHijau = document.createElement("div")
divHijau.classList.add("bg-green-500")
divHijau.classList.add("w-15")
divHijau.classList.add("h-15")
divHijau.classList.add("mx-auto")
divHijau.classList.add("mt-10")
inputMerah.after(divHijau)
// membuat range
const inputHijau = document.createElement("input")
inputHijau.setAttribute("type","range")
inputHijau.setAttribute("min","0")
inputHijau.setAttribute("max","255")
inputHijau.classList.add("block")
inputHijau.classList.add("mx-auto")
inputHijau.classList.add("mt-5")
divHijau.after(inputHijau)
// membuat kotak warna
const divBiru = document.createElement("div")
divBiru.classList.add("bg-blue-500")
divBiru.classList.add("w-15")
divBiru.classList.add("h-15")
divBiru.classList.add("mx-auto")
divBiru.classList.add("mt-10")
inputHijau.after(divBiru)
// membuat range
const inputBiru = document.createElement("input")
inputBiru.setAttribute("type","range")
inputBiru.setAttribute("min","0")
inputBiru.setAttribute("max","255")
inputBiru.classList.add("block")
inputBiru.classList.add("mx-auto")
inputBiru.classList.add("mt-5")
divBiru.after(inputBiru)

let ubahRgb = function(merah,hijau,biru){
    document.body.style.backgroundColor = `rgb(${merah},${hijau},${biru})`
}
let merah = 0
let hijau = 0
let biru = 0
inputMerah.addEventListener("input",function(e){
    merah = e.target.value
    ubahRgb(merah,hijau,biru)
})
inputHijau.addEventListener("input",function(e){
    hijau = e.target.value
    ubahRgb(merah,hijau,biru)
})
inputBiru.addEventListener("input",function(e){
    biru = e.target.value
    ubahRgb(merah,hijau,biru)
})

// menggunakan mouse
document.body.addEventListener("mousemove",(e) => {
    let merah = Math.floor((e.clientX / window.innerWidth) * 255)
    let hijau = Math.floor((e.clientY / window.innerHeight) * 255)
    let biru = angkaRandom()
    
    ubahRgb(merah,hijau,biru)
})

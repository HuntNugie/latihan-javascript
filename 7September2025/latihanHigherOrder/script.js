// tangkap seluruhnya
const semua = document.querySelectorAll("[data-duration]")

let durasiVideo = function(sumber,cari){
return Array.from(sumber).filter(el => el.textContent.includes(cari))
// saya mau ambil aja durasi nya
.map(durasi => durasi.dataset.duration)
// setelah itu kelola agar bisa di jumlahkan
.map(durations => {
    // pisahkan
    let baru = durations.split(":")
    // ubah menjadi float dan hitung menit dan tambahkan menit dan detiknya
    return (parseFloat(baru[0])*60) + parseFloat(baru[1])
})
// jumlahkan
.reduce((acc,curr) => acc + curr)
}

let total = function(sumber,cari){
    return Array.from(sumber).filter(el => el.textContent.includes(cari)).length
}

let jam = function(detik){
    return Math.floor(detik / 3600)
}

let menit = function(detik,jam){
    let rumus = detik-jam*3600
    return Math.floor(rumus/60)
}
let detik = function(sec,jam,menit){
    let rumus = sec - jam * 3600
    return rumus-menit*60
     
}

// ambil yang js
let js = durasiVideo(semua,"JAVASCRIPT LANJUTAN")
let jsJam = jam(js)
let jsMenit = menit(js,jsJam)
let jsDetik = detik(js,jsJam,jsMenit)

// ubah dom
const totalVideoJs = document.querySelector(".jmlh-video-js")
totalVideoJs.textContent = `${total(semua,"JAVASCRIPT LANJUTAN")} video`
const totalDurasiJs = document.querySelector(".jmlh-durasi-js")
totalDurasiJs.textContent = `${jsJam} jam ${jsMenit} menit ${jsDetik} detik`

// ambil yang python
let py = durasiVideo(semua,"PYTHON")
let pyJam = jam(py)
let pyMenit = menit(py,pyJam)
let pyDetik = detik(py,pyJam,pyMenit)

// ubah dom
const totalVideoPy = document.querySelector(".jmlh-video-py")
totalVideoPy.textContent = `${total(semua,"PYTHON")} video`
const totalDurasiPy = document.querySelector(".jmlh-durasi-py")
totalDurasiPy.textContent = `${pyJam} jam ${pyMenit} menit ${pyDetik} detik`

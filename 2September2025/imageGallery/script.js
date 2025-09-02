// inisialisasi
const gambar = document.querySelector("#utama")
const pilihan = document.querySelectorAll("#pilihan div img")


let ubahImage = function(src){
    gambar.setAttribute("src",src)
}
pilihan.forEach((e)=>{
    e.addEventListener("click",(event)=>{
        let src = event.target.getAttribute("src")
        ubahImage(src)
        pilihan.forEach((e)=>{
            e.classList.remove("opacity-50")
        });
        event.target.classList.add("opacity-50")

    })
})
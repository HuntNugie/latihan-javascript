// method preventDefault merupakan sebuah method di event yang berfungsi untuk mencegah aksi bawaan dari element html,os,browser,dan lain lain

// tangkap link
const link = document.querySelectorAll(".close")

// ulang untuk menangkap event dari click dari masing masing link dan hapus parent element nya
link.forEach((e) =>{
    e.addEventListener("click",(event)=>{
        // cegah aksi default link untuk pindah halaman
        event.preventDefault()
        // hapus parent elementnya
        event.target.parentElement.remove()
    })
})
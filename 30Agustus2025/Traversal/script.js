// Traversal merupakan penyelusuran dari element/node yang kita seleksi 

// parentElement -> untuk mendapatkan element parent dari node/element yang di seleksi 
// parentNode -> untuk mendapatkan node parent dari node/element yang di seleksi
// nexSibling -> untuk mendapatkan apapun(bahkan enter spasi pun) di sebelah lanjutan dari element/node yang di seleksi(yang memiliki parent yang sama)
// nextElementSibling -> untuk mendapatkan elemnet nya saja di sebelah lanjutan dari element/node yang di seleksi(yang memiliki parent yang sama)
// previousSibling -> untuk mendapatkan apapun(bahkan spasi pun) di sebelum dari element/node yang di seleksi(yang memiliki parent yang sama)
// previousElementSibling -> untuk mendapatkan element sebelum element/node yang kita seleksi (yang memiliki parent yang sama)

// menanngkap seluruh tombol close
const close = document.querySelectorAll(".close")

// membuat agar menghapus masing masing dari parent element nya
close.forEach((e)=>{
    e.addEventListener("click",(el)=> {
        el.target.parentElement.remove()
    })
})


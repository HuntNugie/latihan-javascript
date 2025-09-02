// event bubbling merupakan sebuah konsep dimana event yang ada di child node itu bergerak ke atas ke parent dan trus ke atas sampai ke document dan ke window sehingga bisa di artikan bahwa event bubbling itu akan menjalankan event yang terjadi child node yang pertama kali di jalankan dan akan bergerak ke atas jika parent memiliki event akan di jalankan setelah nya


// event card
document.querySelectorAll(".card").forEach((e)=>{
    e.addEventListener("click",function(event){
        alert(event.target.textContent)
        
    })
})
// menanngkap close
document.querySelectorAll(".close").forEach((e) =>{
    e.addEventListener("click",(event)=>{
        // menghapus card yang ada
        event.target.parentElement.remove()
        // menggunakan stop propagation agar event yang ada parent element setelah event ini di jalankan bisa di stop tidak di jalankan jika menghit event ini sehingga hanya event ini yang hanya di jalankan
        event.stopPropagation()
    })
})
// events merupakan sebuah kejadian yang di lakukan oleh user seperti menggerakan mouse, mengetik keyboard dan lain lain

// oleh karna itu kita dapat menghandle dari kejdian tersebut akan melakukan apa
// ada 2 cara untuk menghandle events atau kejadian oleh user agar halaman website bisa lebih interaktif

// event handle
// event handle merupakan cara untuk mengatasi kejadian yang di lakukan user 
// dalma event handle terbagi dalam 2 jenis 

// inline html
//  <p class="p3" onclick="ubahWarna()">paragraf 3</p>
const p3 = document.querySelector(".p3")
const ubahWarna = function(){
    p3.classList.toggle("pink")
}

// element method
const p2 = document.querySelector(".p2")
p2.onclick = function(){
    p2.classList.toggle("orange")
}

// addEventListener
// addEventListener merupakan sebuah method untuk menangkap kejadian yang di lakukan oleh user
const p4 = document.querySelector("section#b p")
const ul = document.querySelector("section#b ul")
p4.addEventListener("click",() => {
    const liBaru = document.createElement("li")
    liBaru.textContent = "Ini adalah li baru"
    ul.appendChild(liBaru)
})

// perbedaan antara event handler dengan addEventListener adalah dimana jika event handler memiliki method yang sama seperti sebelumnya sudah mengatasi event click dan akan mendaftakan lagi event click nya maka akan menimpa fungsi yang sebelumnya dan hanya menggunakan fungsi yang terbaru, berbeda dengan addEventListener walaupun mempunyai 2 method untuk mengatasi event yang sama tidak akan menimpa event yang sebelumnya dan akan menambahkan nya
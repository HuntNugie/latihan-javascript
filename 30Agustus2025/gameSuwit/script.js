// game suwit
// gajah kalah sama semut,semut kalah sama manusia, manusia kalah sama gajah
const gambarComp = document.querySelector(".img-komputer")
const info = document.querySelector(".info")
const pilihanUser = document.querySelectorAll("li img")

let pilcomp = function(){
    let comp = Math.floor(Math.random() * 3) + 1
    switch(comp){
        case 1:
            comp =  "gajah"
        break
        case 2:
            comp =  "semut"
        break
        case 3:
            comp =  "orang"
        break
    }
    return comp
}
let tanding = function(user,comp){
    if(user == comp) return "SERI"
    if(user == "gajah") return (comp == "semut") ? "kalah" : "menang!"
    if(user == "semut") return (comp == "manusia") ? "kalah" : "menang!"
    if(user == "orang") return (comp == "gajah") ? "kalah" : "menang"
}
let ubahGambar = function(pilcomp){
    gambarComp.setAttribute("src",`img/${pilcomp}.png`)
}
let putar = function(){
    let counter = 0
    let berhenti = false
    setTimeout(()=>{   
        berhenti = true
    },2000)
    setInterval(() => {
        if(berhenti){
            clearInterval()
            return
        }
      
        ubahGambar(pilihanUser[counter++].className)
        if(counter >= pilihanUser.length){
            counter = 0
        }
    },100)
}


pilihanUser.forEach((e) => {
    e.addEventListener("click",(el) => {
        user = el.target.className
        comp = pilcomp()
        putar()
        setTimeout(()=>{
            ubahGambar(comp)
            let hasil = tanding(user,comp)
            info.textContent = hasil
        },2000)
    })
})
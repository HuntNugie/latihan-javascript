// game tebak angka yang memiliki kesempatan 3 kali untuk menebak
let kesempatan = 3

// alert selamat datang
alert("Selamat datang di tebak angka ")
alert("Anda memiliki 3 kesempatan")
alert("Sudah siap?")
// mendapatkan inputan player
function setPlayer(){
    let player  = parseInt(prompt("Silahkan menebak angka (1-10) \nMasukan pilihan anda : "))
    return player
}
// mendapatkan inputan comp
function setComp(){
    let computer = Math.floor(Math.random() * 10) + 1
    return computer
}
// memvalidasi inputan player 
function validate(player){
    if(player<=10){
        return player
    }
    return false
}
// rules
function rules(player,computer){
    let hasil;
    if(player === computer){
        hasil = "Benar"
        kesempatan = 0
    }else{
        if(player < computer){
            hasil = "Terlalu rendah"
            kesempatan--
        }else{
            hasil = "Terlalu tinggi"
            kesempatan--
        }
    }
    return hasil;
}
// tampilkan
function display(hasil,player){
    alert(`kesempatan ke ${kesempatan+1} \ntebakan anda : ${player} \nHasilnya : ${hasil}`)
}
// main program\
function main(){
    let computer = setComp()
    let player
    let hasil
    while(kesempatan > 0){
        // validasi
        player = setPlayer()
        if(!validate(player)){
            alert("Anda tidak memasukkan angka dengan benar")
            return false
        }   
        hasil = rules(player,computer)
        display(hasil,player)
    }

    if(hasil == "Benar"){
        alert("SELAMAT ANDA BERHASIL MENEBAK ANGKA TERSEBUT \nAngka anda : "+player+"\nAngka yang harus di tebak adalah "+computer)
    }else{
        alert("ANDA GAGAL KESEMPATAN ANDA SUDAH HABIS \nTebakan terakhir anda : "+player+"\nAngka yang harus di tebak adalah "+computer)
    }
}

main();
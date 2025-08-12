// membuat game suwit dimana ada gajah, manusia, dan semut
// gajah kalah lawan semut
// semut kalah lawan manusia
// manusia kalah lawan gajah
// di tambah dengan ronde
// mendapatkan input user

let ronde = 1
let countPlayer = 0
let countComp = 0
// alert selamat datang
alert("Selamat datang di game suwit")
alert("Disini anda akan melakukan 3 ronde pertandingan ")
alert("Sudah siap?")
// mengambil nilai dari player
function setPlayer(){
    let player = parseInt(prompt("Masukkan pilihan(1-3) yang ada di bawah ini \n1.Gajah \n2.Semut \n3.Manusia \nMasukkan pilihan anda : "))
    switch(player){
        case 1:
            player = "gajah"
        break;
        case 2:
            player = "semut"
        break;
        case 3:
            player = "manusia"
        break;
        default :
            alert("Anda tidak memasukkan angka dengan benar ");
            return false
        break;
    }
    return player;
}
// mengambil nilai dari computer
function setComp(){
    let comp = Math.floor(Math.random() * 10) 
    if(comp < 3){
        comp = "gajah"
    }else if(comp < 6){
        comp = "semut"
    }else{
        comp = "manusia"
    }
    return comp;
}
// rules utama dalam program
function rules(player,computer){
    let hasil
    if(player == computer){
        hasil = "imbang"
    }else if(player == "gajah"){
        if(computer == "semut"){
            hasil = "computer menang"
            countComp++
        }else{
            hasil = "player menang"
            countPlayer++
        }
    }else if(player == "semut"){
        if(computer == "manusia"){
            hasil = "computer menang"
            countComp++
        }else{
            hasil = "player menang"
            countPlayer++
        }
    }else if(player == "manusia"){
        if(computer == "gajah"){
            hasil = "computer menang"
            countComp++
        }else{
            hasil = "player menang"
            countPlayer++
        }
    }else{
        return false;
    }

    return hasil;
}
function display(hasil,ronde,player,comp){
    alert(`hasil dari ronde ke ${ronde} adaalah ${hasil} \nAnda memilih ${player} dan computer memilih ${comp}`)
}
function start(ronde){
    // set nilai masing masing player dan computer
    let player = setPlayer();
    let comp = setComp();

    // masukkan ke dalam rules
    let hasil = rules(player,comp)
    return display(hasil,ronde,player,comp);
}
while(ronde<=3){
    start(ronde)
    ronde++
    if(countComp == 2 || countPlayer == 2){
        ronde = 99999
    }

}
if(countComp > countPlayer){
    alert(`Hasil akhirnya computer menang \nComputer : ${countComp} \nPlayer : ${countPlayer} `)
}else if(countPlayer > countComp){
    alert(`Hasil akhirnya Player menang \nPlayer : ${countPlayer} \nComputer : ${countComp} `)
}else{
    alert("Anda tidak menyelasaikan game")
}
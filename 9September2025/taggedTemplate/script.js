// tagged template merupakan  salah satu ke unggulan dari template literal dimana sebuah template literal bisa di gunakan di masukan nilai nya ke dalam function dan otomatis nilai nya di tampung dengan parameter yang ada di dalam function nya dan otomatis terpisahkan string biasa dan expression nya

function tes(strings,...value){
    return strings.reduce((hasil,str,index)=>{
        return `${hasil}${str} <span style="background-color:lightblue;font-weight:bold">${value[index]} </span>`
    },'')
}
let nugie = {
    nama:"Nugie kurniawan",
    umur:21,
    lokasi:"bandung",
    pacar:false
}
const {nama,umur,lokasi,pacar} = nugie
let str = tes `perkenalkan nama saya ${nama || ""}, umur saya ${umur || ""}, saya tinggal di ${lokasi || ""} saya ${pacar ? "sudah punya" : "tidak punya" || "" } pacar`

document.body.innerHTML = str
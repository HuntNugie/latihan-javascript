// belajar juragan angkot membuat function tambah penumpang dan turun penumpang

// array penumpang
let penumpang = []

// function tambah penumpang
let tambahPenumpang = function(nama,array){
    // jika penumpang kosong maka isi dulu pertama
    if(array.length == 0){
        array.unshift(nama)
    }else{
        // jika angkot memiliki penumpang

        // cek apakah ada nilai undefined dan ambil index nya jika ada
        let index = array.findIndex((e) => e == undefined)
        // cek apakah ada nama yang sama jika ada maka tidak bisa masuk  angkot
        let cekNama = array.find((e) => (e == nama) ? true:false)
        
        // verifikasi hasilnya dari pengecekan
        if(array.includes(undefined) && !cekNama){
            array.splice(index,1,nama)
        }else if(cekNama){
            console.log(`nama ${nama} sudah berada di dalam angkot `)
        }else{
            array.push(nama)
        }
    }
    return array
}

// function turun penumpanng
let turunPenumpang = function(nama,array){
    // jika angkot kosong kasih tahu bahwa angkot kosong
    if(array.length == 0){
        console.log("angkot anda sedang kosong")
    }else{
        // jika angkot tidak kosong

        // dapatkan index dari penumpang yang di maksud    
        let index = array.findIndex((e) => e == nama)

        // cek apakah namanya ada atau tidak
        if(array.includes(nama)){
            // jika ada maka ubah menjadi undefined
            array.splice(index,1,undefined)
        }else{
            // jika tidak ada nama yang sama maka kasih tau bahwa nama tersebut tidak ada di angkot
            console.log(`nama ${nama} tidak ada dalam angkot`)
        }
    }
    return array
}
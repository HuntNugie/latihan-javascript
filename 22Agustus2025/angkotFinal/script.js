// angkot final

// menggunakan object literal
let angkot = {
    sopir : "Mang Nugie",
    jurusan : "Bandung-sumedang",
    penumpang : [],
    kas : 0,
    fungsi : {
        tambah : function(nama){
            let penumpang  = angkot.penumpang
            // jika angkot nya kosong maka isi dulu di yang pertama
            if(penumpang.length == 0){
                penumpang.unshift(nama)
            }else{
                // jika angkot ada isinya 

                // ambil index kursi kosong
                let index = penumpang.findIndex((e) => e == undefined)

                // jika nama nya ada yang sama maka tolak
                if(penumpang.includes(nama)){
                    console.log(`${nama} sudah berada di angkot`)
                }else if(penumpang.includes(undefined) && !penumpang.includes(nama)){
                    penumpang.splice(index,1,nama)
                    console.log(`${nama} berhasil masuk ke angkot`)
                }else{
                    penumpang.push(nama)
                    console.log(`${nama} berhasil masuk ke angkot`)
                }
                // jika ada kursi kosong dan nama nya tidak sama dengan yang ada di angkot maka isi terlebih dahulu
            }
            return penumpang
        },
        turun : function(nama,uang){
            let penumpang = angkot.penumpang
            // jika angkot kosong maka kasih tahu
            if(penumpang.length == 0){
                console.log("Angkot anda sedang kosong")
            }else{
                // jika ada isinya

                // cari index nama yang sama
                let index = penumpang.findIndex((e) => e == nama)
                // cek jika nama nya ada yang sama maka akan turun dan tambahkan uang kas 
                if(penumpang.includes(nama)){
                    penumpang.splice(index,1,undefined)
                    angkot.kas += uang
                    console.log(`${nama} berhasil turun di angkot dan membayar Rp.${uang}`)
                }else{
                    // jika tidak ada nama yang cocok
                    console.log(`${nama} tidak berada di angkot ini`)
                }
            }
            return penumpang
        },
        displayKas : function(){
            return `uang kas ${angkot.sopir} Rp.${angkot.kas}`
        },
        display : function(){
            console.log(`Data lengkap\nSopir angkot : ${angkot.sopir}\nJurusan : ${angkot.jurusan}\nJumlah penumpang hari ini : ${angkot.penumpang.length}\nUang kas : ${angkot.kas}`) 
        }   
    }
}
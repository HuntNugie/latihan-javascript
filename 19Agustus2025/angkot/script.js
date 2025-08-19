// juragan angkot

const Penumpang = ["nugie",undefined,"azib"]

let tambahPenumpang = function(nama,array){
    if(array.length == 0){
        array.unshift(nama)
        return array
    }else{
        let indexUndefined = array.findIndex((e) => e == undefined)
        let cekNama = array.find((e) => { return (e === nama) ? true : false })
        // cek jika nilai undefined maka isi terlebih dahulu
        if(array.includes(undefined) && !cekNama){
            array.splice(indexUndefined,1,nama)
            return array
        }else if(cekNama){
            return `nama ${nama} sudah berada di dalam angkot`
        }else{
            array.push(nama)
            return array
        }
    }

}
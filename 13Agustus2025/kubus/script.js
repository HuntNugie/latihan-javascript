// menghitung volume dari 2 kubus dengan function
function hitungVolume(sisi){
    let hasil = sisi*sisi*sisi
    return hasil
}

function Totalvolume(a,b){
    let kubusA = hitungVolume(a)
    let kubusB = hitungVolume(b)

    let hasil = kubusA + kubusB

    return `Hasil dari volume kubus a ${kubusA} + volume kubus b ${kubusB} adalah = ${hasil}`
}

console.log(Totalvolume(8,3))


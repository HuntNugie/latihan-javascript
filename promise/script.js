// promise adalah objek yang mempresentasikan kerbhasilan atau kegagalan dari method asynchronus
/*
-fullfiled -> resolve -> berhasil -> then
-rejected -> reject -> gagal -> catch
-pending ->  sedang menunggu hasil atau gagal
-finally -> setelah fullfiled atau rejected selesai akan di jalankan finally -> finally
*/

let berhasil = false
const janjiSetia = new Promise((resolve,reject)=>{
    if(berhasil){
        resolve("Ini berhasil")
    }else{
        reject("Ini tidak berhasil")
    }
})
janjiSetia
    .then((response=>console.log(response)))
    .catch((response=>console.log(response)))
    
// promise adalah objek yang mempresentasikan kerbhasilan atau kegagalan dari method asynchronus
/*
-fullfiled -> resolve -> berhasil -> then
-rejected -> reject -> gagal -> catch
-pending ->  sedang menunggu hasil atau gagal
-finally -> setelah fullfiled atau rejected selesai akan di jalankan finally -> finally
*/

// let berhasil = false
// const janjiSetia = new Promise((resolve,reject)=>{
//     if(berhasil){
//         resolve("Ini berhasil")
//     }else{
//         reject("Ini tidak berhasil")
//     }
// })
// janjiSetia
//     .then((response=>console.log(response)))
//     .catch((response=>console.log(response)))
    
let getData = function(link){
    return new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest()
        xhr.onload = function(){
            if(xhr.status == 200){
                resolve(JSON.parse(xhr.response))
            }else{
                reject("GAGAL AMBIL DATA YA ANJING")
            }
        }
        xhr.open("GET",link)
        xhr.send()
    })
}
getData("https://bukuacak-9bdcb4ef2605.herokuapp.com/api/v1/book?page=1&year=2023&genre=Self-Improvement&keyword=Berani").then(({books})=>{
    let teks = books.map(el=>`<li>${el.title}</li>`).join("")
    document.body.innerHTML = `<ol>
    ${teks}
    </ol>`
}).catch((reponse=>console.log(response)))
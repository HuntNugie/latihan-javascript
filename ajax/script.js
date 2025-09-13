// ajax

function getBuku(link,callbackSucces){
    const xhr = new XMLHttpRequest()

    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            callbackSucces(JSON.parse(xhr.response))
        }else{
            console.log("gagal dapat")
        }
    }
    xhr.open("GET",link)
    xhr.send()
   
    
}

const buku = getBuku("https://bukuacak-9bdcb4ef2605.herokuapp.com/api/v1/book?page=1&year=2023&genre=Self-Improvement&keyword=Berani",(data)=>{
    let baru = data.books.map(el=>`<li>${el.title}</li>`).reduce((hasil,li)=>{
        return `${hasil}${li}`
    })
    let teks = `<ul>
        ${baru}
    </ul>`
    document.body.innerHTML = teks
})



// latihan template literal
// seandainya ada data api

const data = [
    {nama:"Nugie",
        univ:"Stmik mardira indonesia"
    },
    {nama:"alexander",
        univ:"institut teknologi bandung"
    },
    {nama:"kurniawan",
        univ:"universitas padjajaran"
    },
    {nama:"Nadin",
        univ:"universitas pasundan"
    },
]

// target -> tampilkan data tersebut ke container dengan bentuk list
let tampilkan = function(){
    return data.map(el => 
        `<li>
            <p>Nama : ${el.nama}</p>
            <p>universitas : ${el.univ}</p>
        </li>`
    ).join("")
}

let teks = `<ol>
    ${tampilkan()}
</ol>`

document.querySelector(".container").innerHTML = teks
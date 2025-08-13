// belajar membuat function

// deklarasi function
// tanpa parameter
function hello(){
    return "Hello world"
}
// dengan parameter
function hellow(nama){
    return `Hello ${nama}`
}
console.log(hello())
console.log(hellow("Nugie kurniawan"))

// expressi function
// tanpa parameter
let halo = function(){
    return "Hallo ini expressi function"
}

// dengan paramter
let yok = function(nama){
    return `Hallo nama saya adalah ${nama}`
}

// bentuk singkat dari expressi function (arrow function)
let arrow = ()=>{
    return "Ini adalah arrow function bentuk singkat dari expressi function"
}

console.log(halo())
console.log(yok("Muhammad nadin nugraha"))
console.log(arrow())
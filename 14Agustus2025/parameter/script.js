// parameter dan arguments

// parameter merupakan sebuah tempat untuk menampung nilai yang di kirim ke dalam fungsi
// argument merupakan nilai yang di kirim saat fungsi nya di panggil

function hello(nama){ // ini adalah parameter
    return `Hallo ${nama}`
}

console.log(hello("Nugie kurniawan")) // ini adalah arguments

// jika parameter lebih banyak di bandingkan arguments yang di kirim
function tes(a,b){
    return a+b
}

console.log(tes(8)) // maka parameter yang tidak terisikan nilai tersebut akan di beri nilai default yaitu undifined

// jika arguments nya lebih banyak di bandingkan parameter yang di tulis 
function angka(a){
    return a
}

console.log(angka(8,9,6)) // maka angka yang lebih tersebut akan di abaikan di belakang layar (akan di tampung ke dalam variabel khusus array like object(arguments))

// arguments merupakan sebuah variable khusus di dalam function dimana akan menampung arguments arguments yang di kirim ke dalam parameter dan akan berbentuk seperti array
function arg(){
    return arguments
}
console.table(arg("Nugie kurniawan",1,2,"laurin agnesa putri"))
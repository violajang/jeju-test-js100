let dec = "32";
let dec2 = 160;
let arrBinary = [];

while(dec){
    arrBinary.push(dec % 2)
    dec = Math.floor(dec/2) 
}
console.log(arrBinary.reverse().join(""));

console.log(dec2.toString(2));
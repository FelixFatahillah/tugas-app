// soal 1
// const luaspp = (p, l) =>{
//     luas = p * l
//     return luas
// }

// const kelilingpp = (p, l) =>{
//     keliling = 2 *(p+l)
//     return keliling
// }

// console.log('Luas Persegi Panjang : '+luaspp(4, 5));
// console.log('Keliling Persegi Panjang : '+kelilingpp(4, 5));


// soal 2
// const newFunction = (firstNama, lastName) =>{
//     return{
//         firstNama : firstNama ,
//         lastName : lastName ,
//         fullName = () => {
//             console.log(firstNama + ' ' + lastName);
//         }
//     }
// }

// newFunction('felix', 'fatahillah').fullName()

// soal 3
const newObject = {
    firstName: "Muhammad",
    lastName: "Iqbal Mubarok",
    address: "Jalan Ranamanyar",
    hobby: "playing football",
  }

const { firstName, lastName, address, hobby } = newObject
console.log(firstName, lastName, address, hobby)

// soal 4
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [west, east]
console.log(combined);

// soal 5
const planet = "earth" 
const view = "glass" 
var after = `lorem ${view} dolor sit amet, consectetur adipiscing elit, ${planet}` 
console.log(after);
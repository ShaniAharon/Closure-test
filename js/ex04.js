

// Bonus: Write a mul function which will produce the following 
// outputs when invoked:

console.log(mul(2)(3)(4)); // output : 24 
console.log(mul(4)(3)(4)); // output : 48

//opt 1
// function mul(num) {
//     return function (num2) {
//         var multi = num * num2
//         return function (num3) { return multi * num3 }
//     }
// }

//opt 2
function mul(num) {
    return function (num2) {
        return function (num3) { return num * num2 * num3 }
    }
}
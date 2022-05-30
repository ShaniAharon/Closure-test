var multBy4 = multBy(4)
const res = multBy4(2)
console.log('res', res);



// Write the function multBY
function multBy(num) {
    return function (num2) {
        return num * num2
    }
}
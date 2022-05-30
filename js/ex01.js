
// Use closure to keep track of how many times button was clicked, 
// do not use global variables
function init() {
    var count = 0;
    document.querySelector('button').onclick = function () {
        count++
        console.log('count', count);
    }
}


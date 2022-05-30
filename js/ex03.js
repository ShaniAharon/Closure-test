



// What will be the output of the following code?
// 5 5 5 5 5
// Fix it to work as expected

// for (var i = 0; i < 5; i++) {
//     setTimeout(function () { console.log(i); }, i * 1000);
// }

//opt 1
// for (let i = 0; i < 5; i++) {
//     setTimeout(function () { console.log(i); }, i * 1000);
// }

// opt2
// for (var i = 0; i < 5; i++) {
//     setTimeout((function () {
//         console.log(i);
//     })(i), i * 1000);
// }


//opt3
// for (var i = 0; i < 5; i++) {
    //     setTimeout(getConolseFunc(i), i * 1000);
// }

// function getConolseFunc(num) {
//     return function () {
//         console.log('ConsoleFunc', num);
//     }
// }



//opt 4
// for (var i = 0; i < 5; i++) {
//     setTimeout(
//         function (num) {
//             console.log('num', num);
//         },
//         i * 1000,
//         i // paramter to the func
//     );
// }



//class exmp
// init();
// console.log('Done init');

// function init() {
//   var elBtns = document.querySelectorAll('button');
//   // Closure Pitfall - only happen when creating functions within a loop
//   for (var i = 0; i < elBtns.length; i++) {
//     // console.log('i', i);
//     elBtns[i].onclick = function () {
//       console.log('Thanks!, i:', i);
//     };
//   }

//   // SOLUTION using a named function:
//   for (var i = 0; i < elBtns.length; i++) {
//     elBtns[i].onclick = getFunc(i)
//   }

//   // SOLUTION using an IIFE:
//   for (var i = 0; i < elBtns.length; i++) {
//     elBtns[i].onclick = (function (x) {
//       console.log('Getting you a great function for on click', x, i);
//       return function () {
//         console.log('Thanks!, x:', x, i);
//       };
//     })(i);
//   }
// }

// function getFunc(x) {
//   console.log('GETTING you a FUNC');
//   return function () {
//     console.log('Thanks!, x:', x);
//   };
// }

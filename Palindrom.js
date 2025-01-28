// palindrom

// function palindrom(str) {
//   let reversed = str.split('').reverse().join('');
//   return str === reversed;
// }


// console.log( palindrom("hello")) // false
// console.log(palindrom("racecar")) // true


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let palindromicNumbers = arr.filter(num => {
    let str = num.toString();
    return str === str.split('').reverse().join('');
});

console.log(palindromicNumbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
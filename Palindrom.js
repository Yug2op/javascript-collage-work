// palindrom

function palindrom(str) {
  let reversed = str.split('').reverse().join('');
  return str === reversed;
}


console.log( palindrom("hello")) // false
console.log(palindrom("racecar")) // true

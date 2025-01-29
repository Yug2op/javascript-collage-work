function isGreaterThan5(element, index, array) {
  return element > 5;
    
}

function func() {
    let array = [2,12,5,8,1,4,9];

    let value = array.some(isGreaterThan5);
    console.log(value);
}
// func(); // true

let numbers =[88, 50, 25 , 10];

let sub = numbers.reduce(sunstone);

function sunstone(total, num) {
    return total - num;
}
// console.log(sub); 

let numbers2 = [4,9,16,25];

let sum = numbers2.map(sumstone);

function sumstone(num) {
    return Math.sqrt( num) ;
}   

// console.log(sum);

function isPositive (element, index, array) {
    return element > 0;
}

function func2() {
    let array = [11,89,23,7,98];

    let value = array.every(isPositive);
    console.log(value);
}

func2(); // true




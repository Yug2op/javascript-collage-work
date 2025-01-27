let superHeros = ['shaktiman', 'batman', 'Ironman']
for (const items of superHeros) {
    // console.log(`hello ${items}`);
}



let myObj = {
    Name:"yugank",
    Age: 24,
    Salary:45000
}
for (const key in myObj) {
//    console.log(`Your ${key} is ${myObj[key]}`);
}
let codingLang = ['Java','Ruby','Python','Cpp','Javascript']


codingLang.forEach( (item,index,arrlist) => {
    //  console.log(item,index,arrlist);
    }
  )


let myAlpha = [
{
     langName : 'cpp',
     langFname : 'c++'
},

{
    langName : 'js',
    langFname : 'JavaScript'
},

{
    langName : 'py',
    langFname : 'Python'
}

] 
myAlpha.forEach( (item) =>{
    // console.log(item.langFname);
    
} )


let myNum = [1,2,3,4,5,6,7,8,9]
   const store1 = myNum.filter( (num)=> num>5 
     )
// console.log(store1);

const store2 = myNum.filter( (num) => {
    return num>4;
} )
// console.log(store2);

const store3 = myNum.map( (num) => {
    return num+2
} )
console.log(store3);



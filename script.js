//Print odd numbers in an array
//Function method

const numbers1 = [1,2,3,4,5,10,11,100,1001];
const result1 = [];
function odd1(num){
    for(var i= 0; i<numbers1.length;i++)
    {
        if(numbers1[i]%2!=0)
        {
            result1.push(numbers1[i]);
        }
    }
    return result1;
}
console.log("Output of odd numbers using function - "+odd1(numbers1));

//Anonymous Function method
const numbers2 = [1,2,3,4,5,10,11,100,1001];
const result2 = [];
const odd2 = function(num){
    for(var i= 0; i<numbers2.length;i++)
    {
        if(numbers2[i]%2!=0)
        {
            result2.push(numbers2[i]);
        }
    }
    return result2;
}
console.log("Output of odd numbers using Anonymous function - "+odd2(numbers2));

//Arrow Function method
const numbers3 = [1,2,3,4,5,10,11,100,1001];
const result3 = [];
const odd3 = (num) => {
    for(var i= 0; i<numbers3.length;i++)
    {
        if(numbers3[i]%2!=0)
        {
            result3.push(numbers3[i]);
        }
    }
    return result3;
}
console.log("Output of odd numbers using Arrow function - "+odd3(numbers3));

//IEFE Function method
const numbers4 = [1,2,3,4,5,10,11,100,1001];
const result4 = [];
(function odd4(num){
    for(var i= 0; i<numbers4.length;i++)
    {
        if(numbers4[i]%2!=0)
        {
            result4.push(numbers4[i]);
        }
    }
    console.log("Output of odd numbers using IEFE function - "+ result4);
})(numbers4)


//Making first letter to caps
//Function method
const Str1 = "i am a full stack developer";
const wordsarray1 = [];
function arr2str1(str){
    const arrstr1 = str.split(" ");
    for(let i=0; i<arrstr1.length; i++){
       let words = arrstr1[i].charAt(0).toUpperCase()+arrstr1[i].slice(1);
       wordsarray1.push(words);
    }
    return wordsarray1.join(" ");
}
console.log("First letter of all words in uppercase using function - "+arr2str1(Str1));

//Anonymous Function method
const Str2 = "i am a full stack developer";
const wordsarray2 = [];
let arr2str2 = function(str){
    const arrstr2 = str.split(" ");
    for(let i=0; i<arrstr2.length; i++){
       let words = arrstr2[i].charAt(0).toUpperCase()+arrstr2[i].slice(1);
       wordsarray2.push(words);
    }
    return wordsarray2.join(" ");
}
console.log("First letter of all words in uppercase using Anonymous function - "+arr2str2(Str2));

//Arrow Function method
const Str3 = "i am a full stack developer";
const wordsarray3 = [];
let arr2str3 = (str)=>{
    const arrstr3 = str.split(" ");
        for(let i=0; i<arrstr3.length; i++){
           let words = arrstr3[i].charAt(0).toUpperCase()+arrstr3[i].slice(1);
           wordsarray3.push(words);
        }
        return wordsarray3.join(" ");
}
console.log("First letter of all words in uppercase using Arrow function - "+arr2str3(Str3));


//IEFE Function method
const Str4 = "i am a full stack developer";
const wordsarray4 = [];
(function arr2str4(str){
    const arrstr4= str.split(" ");
        for(let i=0; i<arrstr4.length; i++){
            let words = arrstr4[i].charAt(0).toUpperCase()+arrstr4[i].slice(1);
            wordsarray4.push(words);
        }
        console.log("First letter of all words in uppercase using IEFE function - "+wordsarray4.join(" "));
})(Str4);


//Sum of all numbers in an Array
//Function method
let numforsum1 = [1,2,34,56,789,101112];
function sum1(inp){
    let temp = 0;
    for(let i=0; i<inp.length; i++){
        temp = temp+numforsum1[i];
    }
    return temp;
}
console.log("Sum of numbers in a given array of numbers using function - "+ sum1(numforsum1));

//Anonymous Function method
let numforsum2 = [1,2,34,56,789,101112];
let sum2 = function(inp){
    let temp = 0;
        for(let i=0; i<inp.length; i++){
            temp = temp+numforsum2[i];
        }
        return temp;
}
console.log("Sum of numbers in a given array of numbers using Anonymous function - "+ sum2(numforsum2));

//Arrow Function method
let numforsum3 = [1,2,34,56,789,101112];
let sum3 = (inp) => {
    let temp = 0;
    for(let i=0; i<inp.length; i++){
        temp = temp+numforsum3[i];
    }
    return temp;
}
console.log("Sum of numbers in a given array of numbers using arrow function - "+ sum3(numforsum3));

//IEFE Function method\
let numforsum4 = [1,2,34,56,789,101112];
(function sum4(inp){
    let temp = 0;
    for(let i=0; i<inp.length; i++){
        temp = temp+numforsum4[i];
    }
    console.log("Sum of numbers in a given array of numbers using IEFE function - "+ temp);
})(numforsum4);


//Return all the palindrome in an array
//function method
let palnum1 = [121,134,343,212,"emme","emma"];
function palarr1(arr) {
    return arr.filter(word => {
        const str = String(word);
        return str === str.split('').reverse().join('');
      });
   }
console.log("Palindrome values in the given array using function - "+ palarr1(palnum1));

//anonymous function
let palnum2 = [121,134,343,212,"emme","emma"];
let palarr2 = function(arr){
    return arr.filter(word => {
        const str = String(word);
        return str === str.split('').reverse().join('');
      });
}
console.log("Palindrome values in the given array using anonymous function - "+ palarr2(palnum2));

//arrow function
let palnum3 = [121,134,343,212,"emme","emma"];
let palarr3 = (arr) => {
    return arr.filter(word => {
        const str = String(word);
        return str === str.split('').reverse().join('');
      });
}
console.log("Palindrome values in the given array using arrow function - "+ palarr3(palnum3));

//IEFE function
let palnum4 = [121,134,343,212,"emme","emma"];
(function palarr4(arr){
    console.log("Palindrome values in the given array using IEFE function - " +
    arr.filter(word => {
        const str = String(word);
        return str === str.split('').reverse().join('');
      }));
})(palnum4);
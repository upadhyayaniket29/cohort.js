// console.log("hello world")
// // console.log(a)

// // var a=1;
// // a=2;

// // console.log(a);

// let a=1;
// a=2;
// console.log(a)

// let firstName="Aniket";
// let age="21";
// let funding="false";

// console.log("my name is "+firstName +"my age is "+age +"my funding is "+funding)

// let answer=0;

// for(let i=0;i<=10;i++){
//     answer=answer+i;
// }

// console.log(answer)

// Write a progarm to greet a person with tefir first and last name

// let firstname='aniket';
// let lastname='upadhyay';

// console.log('Hello'+firstname + lastname)

// Write a program that greet a person based on their gender

// let male,female;
// let gender;
// gender=male;

// if(gender=male){
//     console.log('Hello'+firstname+lastname)
// }
// else
// console.log("she is female")

// Write a program that counts from 0 -1000 and prints for loop


// for(let i=0;i<=1000;i++){
//     console.log(i);
    
    
// }

// Arrays in objects

// const person=[{
//     firstname:"ramesh",
//     gender:"male"
// },{
//     secondname:"aniket",
//     gender:"male"
// },{
//     thirdname:"upadhyaya",
//     gender:"male"
// }]

// for(let i=0;i<person.length;i++)
// {
    
//     if(person[i]["gender"]==male){
//         console.log(person[i]["firstname"]);
        
//     }
    
// }

//  Function 
function sum(a,b){
    const ans=a+b;
    return ans;
}

const value=sum(1,2)
console.log(value)

// Callback functions 

function sum(a,b){
    const ans=a+b;
    return ans;
}




function getLength(str) {
    console.log("Original String:", str);
    console.log("Length:", str.length);
  }
  getLength("Hello World");


//   Length
  function getLength(str){
    console.log("orginal string:",str)
    console.log("length:",str.length)
  }
  getLength("Aniket  Upadhyay");

  // indexOf
function findIndexOf(str, target) {
    console.log("Original String:", str);
    console.log("Index:", str.indexOf(target));
  }
  findIndexOf("HelloWorld", "d");

  function findIndexof(str,target)
  {
    console.log("orginal string:",str);
    console.log("index",str.indexof(target));
  }
  findIndexOf("AniketUpadhyay","ket")


  // slice
function getSlice(str, start, end) {
    console.log("Original String:", str);
    console.log("After slice:", str.slice(start, end));
  }
  getSlice("Hello World", 0, 5);


  function getslice(str,start,end){
    console.log("orginal string",str);
    console.log("after slice",str.slice(start,end));
    // Until end element end element is not included

  }
  getslice("AniketUpadhyay",0,5);


  // replace
function replaceString(str, target, replacement) {
    console.log("Original String:", str);
    console.log("After replace:", str.replace(target, replacement));
  }
  replaceString("Hello World", "World", "JavaScript");

  function replaceit(str,target,replacement){
    console.log("orginal string",str);
    console.log("after replacement",str.replace(target,replacement));
  }

  replaceit("aniket","ket","ika");


  // split
function splitString(str, separator) {
    console.log("Original String:", str);
    console.log("After split:", str.split(separator));
  }
  splitString("Hello World", " ");


  function splitstring(str,separator){
    console.log("orginal string",str);
    console.log("after split",str.split(separator));

  }
  splitstring("aniket","t")

  // trim
function trimString(str) {
    console.log("Original String:", str);
    console.log("After trim:", str.trim());
  }
  trimString(" Hello World ");


  function totrim(str){
    console.log("orginal string",str);
    console.log("after trim",str.trim());
  }
  trimString("       AnikeUpadhyay      ")

//   Does not trim the space between letters




// substring
function getSubstring(str, start, end) {
    console.log("Original String:", str);
    console.log("After substring:", str.substring(start, end));
  }
  getSubstring("Hello World", 0, 5);


//   Substring

function getSubstring(str,start,end){
    console.log("orginal string",str);
    console.log("after substring",str.substring(start,end));
}
getSubstring("aniketupadhyay",9,6);

function getSlice(str, start, end) {
    console.log("Original String:", str);
    console.log("After slice:", str.slice(start, end));
  }
  getSlice("aniketupadhyay", -9, 6);
//   !Important

//   difference between slice and substring can be seen when start is greater than stop


function explainParseInt(value) {
  console.log("Original Value:", value);
  let result = parseInt(value);
  console.log("After parseInt:", result);
}

explainParseInt("42");
explainParseInt("42px");
explainParseInt("3.14");


newparse=parseInt("123",48);
console.log(newparse)


function explainParseFloat(value) {
  console.log("Original Value:", value);
  let result = parseFloat(value);
  console.log("After parseFloat:", result);
}

// Example Usage for parseFloat
explainParseFloat("3.14");
explainParseFloat("42");
explainParseFloat("42px");

randomparse=parseFloat("abc")
console.log(randomparse)


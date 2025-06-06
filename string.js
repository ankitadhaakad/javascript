//1.length
let name="ankita dhakad ";

console.log(name.length);
//2.
console.log(name.toUpperCase());
//3.
console.log(name);//modify original
//4.
console.log(name.toLowerCase());
//5
console.log(name.trim());//to remove unwanted space

//6.replace(old to new)//used to replace first value from new provided value
let str="i am cool";
console.log(str.replace("am","you"));

let str1="ankita you are cool ,ankita you smart";
console.log(str1.replace("ankita","siya"));//it only change one first

//7.replaceAll:It change all same 
console.log(str1.replaceAll("ankita","siya"));

//8.includes(substring)
let line="java is object oriented language";
console.log(line.includes("object"));//serc word if available return true eiter false and return boolean value

let line1="javascript is god language";
console.log(line1.includes("script"));//true because if an substring is present in string 
//it is case sensitive and continues string

//9.startswith/endwith
let text = "JavaScript is awesome";
console.log(text.startsWith("Java"));    // true
console.log(text.startsWith("script"));  // false
console.log(text.startsWith("java"));    // false (case-sensitive)

let msg = "Learning is fun";
console.log(msg.endsWith("fun"));     // true
console.log(msg.endsWith("Fun"));     // false (case-sensitive)
console.log(msg.endsWith("is"));      // false

//10.slice :when we have return subpart of an string-support negative value indexing  start with end (-1)

let fruit="orange";
console.log(fruit.slice(2,5));//indexing
console.log(fruit.slice(-2,5));

//11.indexof/lastindexof
let result="hello hello";
console.log(result.indexOf("l"));//..check first index
console.log(result.lastIndexOf("h"));//return last apperence

//12.substring(start,end):not support negative value treated as zero
let y="ankita";
console.log(y.substring(2,6));
console.log(y.substring(3,-2));

//13.substr(start index with spesific )
let a="prit";
console.log(a.substr(1,3));


//14.charAt(index)
const nam="rammy";
console.log(nam.charAt(1));//return character of any perticular index

//15.charCodeAt(index)
let b="Qima";
console.log(b.charCodeAt(0));//ascii value 

//16.concat()merge the 2 String
let first="radhe";
let second="shyam";
console.log(first.concat(" ",second));

//17.split(seprator)
let c="apple,banana,mango";
console.log(c.split(","));

//18.repeat()for repeating a string for specific number of time
let d="TCS";
console.log(d.repeat(3));
console.log(d.lastIndexOf("S"));

//19.padStart()/padEnd
let str4="5";
console.log(str4.padStart(3,"1"));
console.log(str4.padEnd(3,"1"));

//20.match(regex):match through regex
let text1="abc123".match(/\d+/g);
console.log(text1);
let data = "I have 2 apples and 10 bananas.";
console.log(data.match(/\d+/g)); 
  






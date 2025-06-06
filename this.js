//1.this inside js: we use this in global space it will refer to window object.

console.log(this);

//2.this inside a regular function(non strict mode)
function Result(){
    console.log(this);
}
Result();//window-browser me or global object -node js me or online editor pr empty

//3.this in strict mode: "use strict": it will return undefined
"use strict"
function Read(){
    console.log(this);
}
Read();

//this depend how function is called.
function sayHi(){
    console.log(this.name);
}
const user1={name:"annii",sayHi};
const user2={name:"kiwi",sayHi};

user1.sayHi();
user2.sayHi();

//function &method
//use function keyword independently call & object ke under function bnaenge vo method hoga
//method
const Student={
    name:"ridhhi",
    setName:function(){
        console.log(this.name);
    }
}
    Student.setName();//ridhhi

    //this inside in arrow function: apna this nahi bnate.
    //
    const obj={
        name:"rimmi",
        arrowFunction:()=>{
            console.log(this);

        }
    }
obj.arrowFunction();//window

//
const obj1={
    name:"tiku",
    outer:function(){
        const inner=()=>{
            console.log(this.name);
        }
        inner();
    }
}
obj1.outer();//tiku


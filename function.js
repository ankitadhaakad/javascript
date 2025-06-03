//1.function statement/declearation :always hoisted
/*function Hii(){
    console.log("hi how are you");
}
Hii();//global execution contest-hamesha perent lo dekhta hai-chenni 


//2.function expression=jab hum function ko ek variable se assign kr denge,not hoisted


var name=function(){
    console.log("Royal chellenger banglore");
}
name();

//3.anonymous function = jiska koi name ni hoga,callback function ke under use krte h!!

setTimeout(function(){
    console.log(2*3);
},3000);//3 second ke baad chlega*/



//4.Named function expression: named the function 
const Factorial=function fact(n){
    if(n<=1) return 1;
    return n*fact(n-1);
} 
console.log(Factorial(5));

//scope channing: child inherit value of parent
function suman(){
    var b=7;
    function ram(){
        console.log(b);
    }
    ram();
    
}
suman();

//arrow function: same expression but not use function keyword use =>
const arr=()=>{

}




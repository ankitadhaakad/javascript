//1.syntex error
//2.refrence error

//3.range error-> when we want to allocate an invalid space in call stack or try to maximize it,at that time it's known as range error
function name(n){
    console.log(n);
    name(n+1);
}
name(1); //o/p:infinite jb tb stack memory full na ho jae

//2
function recurse(){
    recurse();
}
recurse();  //range error

//4.type error
const n=32;
name(); //we are call function it's not valid(type error)*/

//5
const user={
    name:"ravi",
};
console.log(user.address.city);//type error

//6
let x=5;
if(x=10){
    console.log("x is 10");
} //x is 10


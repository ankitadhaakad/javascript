     //Map Method

const result=[1,2,3,4,5];
const squreResult=result.map(num=>num*num);
console.log(result);
console.log(squreResult);

       //Filter Method
const num=[1,2,3,4,5,6,7,8,9,10];
const test=num.filter(num=>num%2==0);
console.log(test);

        //example
const fruits = ["orange", "grapes", "apple", "mango", "banana", "watermelon"];

const search= fruits.filter(fruit => fruit.includes("app"));

console.log(search);

    //reduce method
    const arr=[1,2,3,4,5];
    const total=arr.reduce((x,curr)=>x+curr,0);
    const total1=arr.reduce((x,curr)=>x*curr,1);
    console.log(total);
    console.log(total1);

    //for each
    const For=["apple","banana","mango","papaya","grapes"];
    For.forEach((x)=>x.uppercase);
    console.log(For);

    //1. object.keys
    const person={
        name:"ankita",
        age:23,
        address:"indore",
    }
    console.log(Object.keys(person));
    //2.object.values
    console.log(Object.values(person));
    //3.object.entries
    console.log(Object.entries(person));
    //5.object.freeze
    console.log(Object.freeze(person));
    //for check  person.name=shyam; =>show error

   //4.object.assign
    const obj1={
        name:"dhakad",
    }
    const obj2={
        age:11,
    }
    const results=Object.assign({},obj1,obj2)
    console.log(results);


//fill method
    let arr2=new Array(5).fill("hii");
    console.log(arr2);
    


    



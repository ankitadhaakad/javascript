//1.
let operator="";

let a=10,b=2;

switch(operator)
{
    case "+":
        console.log(a+b);
        break;
     case "-":
        console.log(a-b);
        break;  
         case "*":
        console.log(a*b);
        break;  
         case "/":
        console.log(a/b);
        break;
         case "%":
        console.log(a%b);
        break;
         case "":
        console.log(a**b);
      
        default:
              console.log("invalid");
              break;
}

//2
let month=5;

switch(month){
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("febuary");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;
    case 5:
        console.log("may");
        break;
    case 6:
        console.log("june");
        break;
    case 7:
        console.log("july");
        break;
    case 8:
        console.log("august");
        break;
    case 9:
        console.log("september");
        break;
    case 10:
        console.log("octomber");
        break;
    case 11:
        console.log("november");
        break;
    case 12:
        console.log("december");
        break;
    default:
        console.log("invalid");
}

console.log(month);

//3

let grade='b';
switch(grade){
    case 'a':
        console.log("excellent");
        break;
    case 'b':
        console.log("grate");
        break;
    case 'c':
        console.log("very good");
        break;
    case 'd':
        console.log("good");
        break;
    case 'e':
        console.log("poor");
        break;
    case 'f':
        console.log("failed");
        break;
    default:
        console.log("no result");
}

//4

let browser="chrome";
switch(browser){
    case "chrome":
        console.log("using  chrome");
        break;
    case "firebox":
        console.log("using firebox");
        break;
    default:
        console.log("not using sny browser");

}

//5
let number=7;

switch(number%2){
    case 0:
        console.log(number+"is even");
        break;
    case 1:
    case -1:
        console.log(number +" is odd ");
        break;
    default:
        console.log("invalid");
}

//6
let role="admin";
let action="edit";

switch(role){
    case "admin":
        console.log("i am admin");
        
    switch(action){
        case "edit":
            console.log("code edit");
            break;
        case "create":
            console.log("code creating");
            break;
        case "delete":
            console.log("code delete");
            break;

    }

    


}
//7
let age=60;

switch(age){
    case age<=12:
        console.log("small");
        break;
    case age<=19:
        console.log("teen");
        break;
    case age<=59:
        console.log("adult");
        break;
    case age<=60:
        console.log("budda");
        break;
    default:
        console.log("invalid");
        
}

//8
let fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("It's an apple!");
  case "banana":
    console.log("It's a banana!");
  case "orange":
    console.log("It's an orange!");
  default:
    console.log("Unknown fruit!");
}

//9
let color = "green";

switch (color) {
  default:
    console.log("Unknown color!");

  case "green":
    console.log("This is green");
    break;

  case "blue":
    console.log("This is blue");
    break;
}

//10
let weatherCode = 2;

switch (weatherCode) {
  case 1:
    console.log("It's a sunny day!");
    break;
  case 2:
    console.log("It's cloudy today.");
    break;
  case 3:
    console.log("Expect some rain.");
    break;
  case 4:
    console.log("Storm alert! Stay safe!");
    break;
  case 5:
    console.log("Snow is falling!");
    break;
  default:
    console.log("Weather data unavailable.");
}

//11
const result=[1,2,3,4,5];
const squreResult=result.map(num=>num*num);
console.log(result);
console.log(squreResult);

//12
const names = ["Alice", "Bob", "Charlotte", "David", "Evelyn", "John"];

const Names = names.filter(name => name.length > 5);

console.log(Names);

//13
const numbers = [1, 2, 3, 4, 5];

const sumOfOdds = numbers.reduce((sum, num) =>
  num % 2 !== 0 ? sum + num : sum
, 0);

console.log(sumOfOdds);

//14
const customMap = (arr, fn) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i]));
  }
  return result;
};


const nums = [1, 2, 3];
const doubled = customMap(nums, x => x * 2);
console.log(doubled);  

//15
const repeat = (fn, n) => {
  for (let i = 0; i < n; i++) {
    fn();
  }
};


const sayHello = () => console.log("Hello!");
repeat(sayHello, 3);

//16
const arr = ['apple', 'banana', 'cherry'];

arr.forEach((value, index) => {
  console.log(`Index: ${index}, Value: ${value}`);
});

//17
const words = ["Hello", "world", "this", "is", "Ankita HERE!"];

const sentence = words.reduce((acc, word) => acc + " " + word);

console.log(sentence);

//18
const word = ["madam", "hello", "racecar", "world", "level"];

const nonPalindromes = word.filter(word => {
  return word !== word.split('').reverse().join('');
});

console.log(nonPalindromes);

//19
const num= [1, 2, 3, 4, 5];

const evenOdd = num.map(num => (num % 2 === 0 ? "Even" : "Odd"));

console.log(evenOdd);

//20
const n = [1, 2, 2, 3, 1, 4, 2];

const counts = n.reduce((acc, num) => {
  acc[num] = (acc[num] || 0) + 1;
  return acc;
}, {});

console.log(counts);


//21
const delay = (fn, time) => setTimeout(fn, time);

const Hello = () => console.log("Hello");

delay(Hello, 2000); 

//22
const sers=[
  {name:"ankita",age:17,},
  {name:"david",age:25,},
  {name:"pritam",age:20,},
  {name:"abbu",age:21,}


]
const adult=sers.filter(user=>user.age>18);
console.log(adult);

//23
const numb= [1, 2, 3, 4];

// Using map()
const d= numb.map(num => num * 2);
console.log(d); 

// Using forEach()
const r= numb.forEach(num => console.log(num * 2));
console.log(r); 


//24
const sum = [1, 2, 3, 4].reduce((acc, curr) => acc + curr, 0);
console.log(sum); 

//25
const greet = name => console.log("Hello, " + name);

const higherOrder = (fn) => fn("Ankita");

higherOrder(greet); 

//26
const bankaccount={
  balance:0,
  deposite(a){this.balance +=a;},
  withdraw(a){
    if(a<=this.balance) this.balance -=a;
    console.log("not enough money");
  }
};
bankaccount.deposite(1000);
bankaccount.withdraw(5000);
console.log(bankaccount.balance);

//27
const person={
  name:"virat",
  sayHello(){
    console.log("the cricketer: "+this.name);
  }
};
person.sayHello();
//28
 const son={
        name:"ankita",
        age:23,
        address:"indore",
    }
    console.log(Object.keys(son));
//29
const numeric={
  a:10,
  b:20,
};
let sums=0;
      for(const val of Object.values(numeric)){
  sums +=val;
}
console.log(sums);

//30 marge
 const obj1={
        name:"dhakad",
    }
    const obj2={
        age:11,
    }
    const results=Object.assign({},obj1,obj2)
    console.log(results);
    

    //31
     const pers={
        name:"ankita",
        age:23,
        address:"indore",
    }
     console.log(Object.freeze(pers));

     //32
     const obj={
      name:"ritthim",
      age:50
     };
Object.seal(obj);
obj.city="new york";//failed
obj.age=87;//update success
console.log(obj);

//33
const obj3={
  name:"robooot",
  salary:200000
};
console.log(obj3.hasOwnProperty("name"));
console.log(obj3.hasOwnProperty("city"));

//34
const calculator={
  value:0,
  add(num){
    this.value +=num;

  },

subtract(num){
  this.value -=num;
}
};
calculator.add(50);
console.log(calculator.value);
calculator.subtract(10);
console.log(calculator.value);

//35
const student = {
  name: "John",
  age: 20,
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
};

console.log(student.getDetails());

//36
const obj4= { a: 1, b: null, c: undefined, d: 4 };

for (const key in obj4) {
  if (obj4[key] == null) { 9
    delete obj4[key];
  }
}

console.log(obj4); 

//37(frreze)
const u = { name: "Alice" };
Object.freeze(u);

u.age = 25;        // Adding not allowed
u.name = "Bob";    // Changing not allowed
delete u.name;     //  Deleting not allowed

console.log(u);    
//seal
const u1 = { name: "Alice" };
Object.seal(u1);

u1.age = 25;        //  Adding not allowed
u1.name = "Bob";    //  Changing allowed
delete u1.name;     //  Deleting not allowed

console.log(u1);    

//38
const obj5 = {
  name: "Alice",
  sallo: () => {
    console.log("Hello, " + this.name);
  }
};

obj5.sallo();

//39
const pe= {
  name: "Alice",
  s() {
    console.log("Hello, " + this.name);
  }
};

setTimeout(pe.s, 1000); 

//40
const u2 = { name: "Alice", age: 25 };

const entries = Object.entries(u2);

console.log(entries);














//global context
const name = "Ram";
function say() {
console.log(this.name);
}
say();

//function inside object
const user = {
name: "Aashi",
greet: function () {
function inner() {
console.log(this.name);
}
inner();
}
};
user.greet();

//arrow function inside the method
const obj = {
name: "Yogita",
show: function () {
const arrow = () => {
console.log(this.name);
};
arrow();
}
};
obj.show();

//arrow function assigned later
const arrow =() => {
console.log(this);
};
const user1 = {
arrowFunc: arrow
};
user.arrowFunc();

//arrow function inside constructor
function Person(name) {
this.name = name;
this.say = () => {
console.log(this.name);
};
}
const p = new Person("Ram");
const sayFn = p.say;
sayFn()

//nested arrow and regular function
const obj1 = {
name: "Guru",
method: function () {
const arrow1 = () => {
function regular() {
console.log(this.name);
}
regular();
};
arrow1();
}
};
obj1.method();

//return a regular function from metod
const person = {
name: "Rahul",
getName: function () {
return function () {
console.log(this.name);
};
}
};
 const fn = person.getName();
fn();

//returning an arrow function from metod
const person1 = {
name: "Raj",
getName: function () {
return () => {
console.log(this.name);
};
}
};
const fn1= person1.getName();
fn1();

//


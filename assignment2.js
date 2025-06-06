//1.
function vowel(str){
    let count =0;
    let vowels="aeiouAEIOU";

    for(let i=0;i<str.length;i++){
        if(vowels.includes(str[i])){
            count++;
        }
    }
    return count;
}
console.log(vowel("world"));

//2.
const isPrime = function(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};
console.log(isPrime(7)); 

//3
function isAnagram(str1, str2) {
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}
console.log(isAnagram("listen", "silent")); // true


//4
setInterval(function() {
    console.log(Date.now());
}, 3000);
//5.
const sumDigits = function sum(n) {
    if (n === 0) return 0;
    return (n % 10) + sum(Math.floor(n / 10));
};
console.log(sumDigits(123)); 

//6
const wordCount = function countWords(str) {
    return str.trim().split(/\s+/).length;
};
console.log(wordCount("Hello world, how are you?")); 

//7
function generateReport(studentName, totalMarks, grade) {
    console.log(`Student: ${studentName}\nTotal Marks: ${totalMarks}\nGrade: ${grade}`);
}
generateReport("Ankita", 90, "A");

//8



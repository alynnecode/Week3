

//1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

let ages = [3,9,23,64,2,8,28,93,102]
  
console.log(ages[ages.length-1] -ages[0]);

//
ages.push([]);


//average age

sum =0;
for(i=0;i<ages.length;i++){
  sum = sum + ages[i];
  averageAge = sum / ages.length
}
console.log(averageAge)




//2. Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.

 let names = ['Sam', 'Tommy', 'Tim','Sally','Buck', 'Bob',]

//2.A 

//average letters per name
sum = 0;
for (i = 0; i<names.length;i++) {
  sum = sum + names [i].length;
}
console.log(sum/names.length);

//2.B 
let tieTogether = names.concat(names );
console.log(tieTogether)

//3. How to access the last element of an array

//4. How to access the first element of an array 

//2.5



let names = ['Maria','Steven','John'];

for(let i =0;i<names.length;i++){
  
  console.log(names[i].length);
}
nameLengths = [5,6,4];


//2.6 

nameLengths = [5,6,4];
let sum =0;
for (let i = 0; i < nameLengths.length; i++) {
  sum += nameLengths[i];
}
console.log(sum)


//2.7


let words = "Hello";
let triple = words.repeat(3);
console.log(triple)


//2.8


function legalName (firsName, lastName) {
return firsName + " " + lastName; 
}
let newName = legalName("Michael", "Jordan");
console.log(newName);



//2.9

let numbers = [50,55];

let result = true;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] <= 0) {
        result = false;
    }
}
console.log(result);


//2.10 Write a function that takes an array of numbers and returns the average of all the elements in the array.

const numbers = [52,50,54,94];
let total = 0;
for( i = 0; i < numbers.length; i++) {
  total += numbers[i];
}
let avg = total / numbers.length;
console.log(avg)


//2.11

   let a = [5, 10, 15, 20];
   let b = [1, 2, 3, 5];
   let average = [];

   for(i = 0; i < a.length; i++){
    average.push((a[i] + b[i]) / 2);
   }
   console.log(average)

   //2.12

//2.12

let isHotOutside = true;
let moneyInPocket = >= 10.20

if (isHotOutside == true)
if (moneyInPocket > 10.50)




   //2.13 Solve my own problem. Let me know when soda is on sale!

   let costOfSoda = 3.99
   if(costOfSoda < 5) {
   
  
   alert("Milk is on sale")
   }else if (costOfSoda > 5 )
   
   alert ("Not on sale, don't buy any")
  

   

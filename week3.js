//1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

let ages = [3,9,23,64,2,8,28,93]
  
console.log(ages[ages.length-1] -ages[0]);

//
ages.push(20);

//average age

let i, sum =0;
for(i=0;i<ages.length;i++){
  sum = sum + ages[i];
}

//2. Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.

let names = ['Sam', 'Tommy', 'Tim','Sally','Buck', 'Bob',]

//average letters per name
let i, sum = 0;
for (i = 0; i<names.length;i++) {
  sum = sum + names [i].length;
}
consoleg.log(sum/names.length);


//5.

nameLengths = []

//#8

let firstName = 'John'
let lastName = 'Travolta'

let result = firstName + ' ' + lastName
console.log(result); 

//#9

const array = [1,2,3,4,5];
let results = 0

for (let i = 0; i < array.length; i++) {
    results += array[i];
  
}
console.log(results);
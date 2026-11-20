let data: (string | number)[] = [
    "Hari",
    100,
    "React",
    200
];

// Array Methods:

// map
console.log("======map=====");

let numbers : number[] = [10,20,30,40,50];
let results = numbers.map((num:number)=> num*2);
console.log(results);

// filters:
console.log("======filters=====");
let ages:number[]=[18,20,22,30,45];
let result = ages.filter((age:number)=>age>=18);
console.log(result);




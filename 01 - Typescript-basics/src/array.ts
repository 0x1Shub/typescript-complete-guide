const arr: number[] = [1, 2, 23, 345, 567];
const arr2 : string[] = ["asa", "asas", "sfdwe"];


const arr3 : Array<string> = ['abc', 'as', 'sadd', 'asdas'];

const arr4: Array<string | number> = [230, "hey"];
console.log(arr4);

// Add new element
arr4[2] = "Shubham"; 
 
console.log(arr4);

// tuple or fixed sized array

const arr5 : [number, number, number] = [1, 2, 3];
console.log(arr5);
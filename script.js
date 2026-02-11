// Task 1: Copy an Array
let fruits = ['apple', 'banana', 'cherry'];
let fruitsCopy = [...fruits];
console.log("Task 1: Copy Array:", fruitsCopy);

// Task 2: Combine Arrays
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let combinedArray = [...array1, ...array2];
console.log("Task 2: Combine Arrays:", combinedArray);

// Task 3: Copy and Modify an Object
let car = { make: 'Toyota', model: 'Corolla', year: 2020 };
let newCar = { ...car, color: 'blue' };
console.log("Task 3: Copy & Modify Object:", newCar);

// Task 4: Merge Objects
let person1 = { name: 'Alice', age: 25 };
let person2 = { job: 'Engineer', country: 'USA' };
let mergedPerson = { ...person1, ...person2 };
console.log("Task 4: Merge Objects:", mergedPerson);

// Additional Practice


function removeDuplicates(array) {
  return [...new Set(array)];
}

const nums = [1, 2, 2, 3, 4, 4, 5];
console.log("Remove Duplicates:", removeDuplicates(nums)); // Output: [1,2,3,4,5]


const arr1 = [7, 8, 9];
const arr2 = [10, 11, 12];
const combinedArr = [...arr1, ...arr2, 13, 14];
console.log("Combined + Added Elements:", combinedArr); // Output: [7,8,9,10,11,12,13,14]


const obj1 = { x: 1, y: 2 };
const obj2 = { z: 3 };
const mergedObj = { ...obj1, ...obj2, w: 10 };
console.log("Merged Object + New Property:", mergedObj); // Output: { x:1, y:2, z:3, w:10 }
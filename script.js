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
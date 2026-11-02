
// ======================================================
// JAVASCRIPT PRACTICE
// MODULE: ARRAY METHODS + SPREAD + REST + DESTRUCTURING
// ======================================================


// ======================================================
// PART 1: ARRAY MANIPULATION METHODS
// ======================================================

console.log("========== PART 1: ARRAY MANIPULATION ==========");


// 1. push()
// Add 3 fruits at the end of an array

let fruits = ["Apple", "Banana", "Mango"];

fruits.push("Orange", "Grapes", "Pineapple");

console.log("Q1:", fruits);


// 2. pop()
// Remove the last element

let numbers1 = [10, 20, 30, 40, 50, 60];

numbers1.pop();

console.log("Q2:", numbers1);


// 3. shift()
// Remove the first element

let names = ["Arun", "Priya", "Karthik", "Divya", "Rahul"];

names.shift();

console.log("Q3:", names);


// 4. unshift()
// Add two numbers at the beginning

let numbers2 = [30, 40, 50, 60];

numbers2.unshift(10, 20);

console.log("Q4:", numbers2);


// 5. splice()
// Remove 2 elements starting from index 1

let arr1 = [10, 20, 30, 40, 50];

arr1.splice(1, 2);

console.log("Q5:", arr1);


// 6. splice()
// Replace 3 with 100

let arr2 = [1, 2, 3, 4, 5];

arr2.splice(2, 1, 100);

console.log("Q6:", arr2);


// 7. fill()
// Replace elements from index 2 to index 4 with hello

let numbers3 = [10, 20, 30, 40, 50];

numbers3.fill("hello", 2, 5);

console.log("Q7:", numbers3);


// ======================================================
// PART 2: ARRAY MERGE AND SEARCH METHODS
// ======================================================

console.log("========== PART 2: MERGE AND SEARCH ==========");


// 8. concat()
// Combine two arrays

let array1 = [10, 20, 30];
let array2 = [40, 50, 60];

let mergedArray = array1.concat(array2);

console.log("Q8:", mergedArray);


// 9. slice()
// Extract elements from index 1 to index 4

let arr3 = [10, 20, 30, 40, 50, 60];

let slicedArray = arr3.slice(1, 5);

console.log("Q9:", slicedArray);


// 10. flat(Infinity)
// Convert nested array into single-level array

let nestedArray = [1, [2, 3], [4, [5, 6]], 7];

let flatArray = nestedArray.flat(Infinity);

console.log("Q10:", flatArray);


// 11. includes()
// Check whether 30 exists

let arr4 = [10, 20, 30, 40, 50];

console.log("Q11:", arr4.includes(30));


// 12. indexOf()
// Find the index of 20

let arr5 = [5, 10, 15, 20, 25];

console.log("Q12:", arr5.indexOf(20));


// 13. lastIndexOf()
// Find the last index of 2

let arr6 = [1, 2, 3, 2, 1, 2];

console.log("Q13:", arr6.lastIndexOf(2));


// 14. sort()
// Arrange numbers in ascending order

let sortNumbers = [50, 10, 40, 20, 30];

sortNumbers.sort((a, b) => a - b);

console.log("Q14:", sortNumbers);


// 15. reverse()
// Reverse the order of 7 numbers

let reverseNumbers = [10, 20, 30, 40, 50, 60, 70];

reverseNumbers.reverse();

console.log("Q15:", reverseNumbers);


// ======================================================
// PART 3: SPREAD AND REST OPERATORS
// ======================================================

console.log("========== PART 3: SPREAD AND REST ==========");


// 16. Spread Operator
// Merge two arrays containing 4 numbers each

let firstArray = [1, 2, 3, 4];
let secondArray = [5, 6, 7, 8];

let combinedArray = [...firstArray, ...secondArray];

console.log("Q16:", combinedArray);


// 17. Spread Operator
// Merge student details and job details

let student = {
    name: "Pavan",
    age: 23,
    cgpa: 8.1
};

let job = {
    role: "Software Developer",
    company: "Stackly",
    location: "Hyderabad"
};

let studentJob = {
    ...student,
    ...job
};

console.log("Q17:", studentJob);


// 18. Rest Operator
// Accept two parameters and collect remaining arguments

function calculate(a, b, ...remaining) {

    console.log("First Value:", a);
    console.log("Second Value:", b);
    console.log("Remaining Values:", remaining);

}

calculate(10, 20, 30, 40, 50, 60);


// 19. Rest Operator
// Add a, b, c[0] and c[1]

function one(a, b, ...c) {

    let sum = a + b + c[0] + c[1];

    console.log("Q19 Sum:", sum);

}

one(10, 20, 30, 40);


// 20. Spread Operator
// Copy elements from first array into a new array

let originalArray = [100, 200, 300, 400];

let copiedArray = [...originalArray];

console.log("Q20 Original:", originalArray);
console.log("Q20 Copied:", copiedArray);


// ======================================================
// PART 4: ARRAY DESTRUCTURING
// ======================================================

console.log("========== PART 4: ARRAY DESTRUCTURING ==========");


// 21. Extract four values into separate variables

let arr7 = [10, 20, 30, 40];

let [a, b, c, d] = arr7;

console.log("Q21 A:", a);
console.log("Q21 B:", b);
console.log("Q21 C:", c);
console.log("Q21 D:", d);


// 22. Nested Array Destructuring

let nested = [1, 2, [3, 4, [5, 6]]];

let [n1, n2, [n3, n4, [n5, n6]]] = nested;

console.log("Q22:", n1, n2, n3, n4, n5, n6);


// 23. Student Array Destructuring

let studentDetails = ["Pavan", 23, 8.1];

let [studentName, studentAge, studentCGPA] = studentDetails;

console.log("Q23 Name:", studentName);
console.log("Q23 Age:", studentAge);
console.log("Q23 CGPA:", studentCGPA);


// ======================================================
// PART 5: OBJECT DESTRUCTURING
// ======================================================

console.log("========== PART 5: OBJECT DESTRUCTURING ==========");


// 24. Basic Object Destructuring


let person = {
    name: "Pavan",
    role: "Developer",
    location: "Hyderabad"
};

// Object destructuring with renamed variables
let {
    name: personName,
    role: personRole,
    location: personLocation
} = person;

console.log("Name:", personName);
console.log("Role:", personRole);
console.log("Location:", personLocation);

// 25. Nested Object Destructuring

let studentInfo = {
    name: "Arun",

    address: {
        city: "Chennai",
        state: "Tamil Nadu"
    }
};

let {
    address: { city, state }
} = studentInfo;

console.log("Q25 City:", city);
console.log("Q25 State:", state);


// 26. Nested Object Destructuring

let employee = {

    name: "Rahul",
    role: "Software Engineer",

    location: {
        mainLocation: "Bangalore",
        currentLocation: "Hyderabad"
    }

};

let {
    name: empName,
    role: empRole,
    location: {
        mainLocation,
        currentLocation
    }
} = employee;

console.log("Q26 Name:", empName);
console.log("Q26 Role:", empRole);
console.log("Q26 Main Location:", mainLocation);
console.log("Q26 Current Location:", currentLocation);


// ======================================================
// PART 6: MIXED PRACTICAL CHALLENGES
// ======================================================

console.log("========== PART 6: PRACTICAL CHALLENGES ==========");


// 27. Array Manipulation Combination

let arr8 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// Remove first element
arr8.shift();

// Remove last element
arr8.pop();

// Add two numbers at beginning
arr8.unshift(5, 15);

console.log("Q27 Final Array:", arr8);


// 28. Duplicate Numbers + Search Methods

let duplicateNumbers = [10, 20, 30, 20, 40, 20, 50];

let selectedNumber = 20;

console.log(
    "Q28 Includes:",
    duplicateNumbers.includes(selectedNumber)
);

console.log(
    "Q28 First Index:",
    duplicateNumbers.indexOf(selectedNumber)
);

console.log(
    "Q28 Last Index:",
    duplicateNumbers.lastIndexOf(selectedNumber)
);


// 29. Merge Two Employee Objects + Destructuring

let employeePersonal = {

    name: "Pavan",
    age: 23

};

let employeeProfessional = {

    role: "Frontend Developer",
    company: "Stackly"

};

// Merge objects
let completeEmployee = {
    ...employeePersonal,
    ...employeeProfessional
};

// Destructure object
let {
    name: finalName,
    role: finalRole
} = completeEmployee;

console.log("Q29 Employee Name:", finalName);
console.log("Q29 Employee Role:", finalRole);


// 30. Flat + Reverse Combination

let numbersNested = [
    1,
    [2, 3],
    [4, [5, 6]],
    [7, [8, 9]]
];

// Convert nested array into single array
let singleArray = numbersNested.flat(Infinity);

// Reverse array
singleArray.reverse();

console.log("Q30 Final Result:", singleArray);


// ======================================================
// END OF JAVASCRIPT PRACTICE
// ======================================================

console.log("========== ALL 30 QUESTIONS COMPLETED ==========");

// creating an array
let cars = ["BMW", "Mehran", "Ferrari"];
console.log(cars);

// printing it's length
console.log(cars.length -1);

// printing specific index value
let last_element = cars.length - 1;
console.log(cars[last_element]);



// printing array elements using for loop
let fruits = ["Mango", "Banana", "Apple", "Orange"];
for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}



// OBJECTS in javascript  or hashmap (Objects are like dictionary)

// Happy = a person who is satisfied
// joy = a person who is satisfied

// happy and joy are keys while their definitions are their values
// so their values can be repeat but the key can't

// it's like array but little bit advance

let person = {firstName: "Dawood", lastName: "Khan", age: 21};
console.log(person);

console.log(Object.keys(person));   // for printing all keys
console.log(Object.values(person));     // for printing all values



// functions in javascript

function add(a, b){
return (a+b);
}

console.log(add(2, 2));
console.log(add(3, 7));
// assigning functions to variables
const addFive = number => {
    return number + 5;
}

let f = addFive;

console.log(addFive(8));

//higher order functions (functions that take other functions as arguments)
let addFiveTimesThree = (f, number) => {
    let aF = f(number);
    return aF * 3;
}

let aFTT = addFiveTimesThree;
let test = aFTT(f, 8);

// Arrays for each

let array1 = [5, 10, 15, 20]

array1.forEach(value => {
    let aFTTValues = aFTT(f, value)
    console.log(aFTTValues);
});

//Arrays filter 

let filteredArray = array1.filter(value => {
    return value <= 10;
});

console.log(filteredArray);

//Arrays Map, this well execute the code for each iteration in the array and push the returned value into a new array
let array3 = ['harry', 'jack', 'ryan']

let mappedArray = array3.map(value => {
    return value + " is now online";
})

console.log(mappedArray);


let testObject = {
    type: 'ball',
    shape: 'round',
    bounciess: 'good'
}

let anotherObject = {
    type: 'toy',
    liquid: 'no',
    dangerous: 'no'
}
console.log(anotherObject);

let objectChanger = (object, property, newProperty) => {
    return object[property] = newProperty;
}

objectChanger(testObject, 'shape', 'sqaure');
console.log(testObject);

objectChanger(anotherObject, 'liquid', 'yes')
console.log(anotherObject);





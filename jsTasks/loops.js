// While Loop]
let i = 0;
while (i < 5){
    console.log(i);
    i++;
};
// For Loop
for (let i = 0; i <= 4; i += 1){
    console.log(i);
}
// Reverse For Loop
let array = ['I', 'am', 'a', 'dog']

for (let i = array.length - 1; i >= 0; i -= 1){
    console.log(array[i]);
}
// Do While Loop
x = 0
i = 0
do {
    x = i;
    console.log(x)
    i++
} while (i <= 10)
// Looping Through Arrays
let myArray = ['shopping', 'clean teeth', 'bake bread'];

for (let i = 0; i < myArray.length; i++){
    console.log('I must ' + myArray[i] + ' today!');
}
// Nested For Loop
let array1 = ['a', 'b', 'c', 'd']; // this is the outer 'o' array, with each iteration of array item in array1, it will iterate through all of array2
let array2 = [1, 2, 3, 4, 5, 6, 7];

for (let o = 0; o < array1.length; o += 1){
    for (let i = 0; i < array2.length; i += 1){
        console.log(`${array1[o]} - ${array2[i]}`);
    }
}

let testArray = [0, 1, 2, 3, 4]

console.log(testArray.length);
console.log(testArray[3]);

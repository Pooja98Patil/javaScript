console.log(`=============================Assignment A Using forEach() with Arrow function and callback================`);


const arrayNumbers = [1,-7,40,502,-77,91,0,108,89,-601];

console.log(`=======================================Step 1===============================`);
console.log(`Given Array => ${arrayNumbers}`);
/////log the array elemeny with its index using for each with arrow and callback function///

arrayNumbers.forEach((element, index) => {
    console.log(`Value=> ${element}, Index No => ${index}` );
})

console.log(`=======================================Step 2===============================`);
///////find out the Positive Numbers from the Array

console.log(`Positive Numbers from Array =>`)
arrayNumbers.forEach((element) => {
    if (element >= 0) {
        console.log(element);
    }
});



console.log(`=======================================Step 3===============================`);
 ////////cerate new array with negative numbers
const negativeNo = [];
arrayNumbers.forEach((element) => {
    if (element < 0) {
        negativeNo.push(element);
    }
})

console.log(`Negative Numbers From Given array =>`);
console.log(negativeNo);

console.log(``);
console.log(`=======================================Step 4===============================`);
///////////////////Even number from the array/////

console.log(`Even Numbers From the Array =>`);
arrayNumbers.forEach((element) => {
    if (element%2 === 0) {
        console.log(element);
    }
})


console.log(``);
console.log(`=======================================Step 5===============================`);
///////////////////The Sum of all elements of array/////
console.log(`The Sum Of All Elements =>`);

let sum = 0;
arrayNumbers.forEach((element) => {
    
    sum = sum + element

})
console.log(sum);

console.log(``);
console.log(`=======================================Step 6===============================`);
///////////////////print even indexs values from the array/////
console.log(`Even Index Values From array =>`)
arrayNumbers.forEach((element,index) => {
    if (index%2 === 0) {

        console.log(`Index => ${index}, Value => ${element}`)
    }
})
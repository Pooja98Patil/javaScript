console.log(`======================================Assignment A ============================`);

const arrayNumbers = [20,11,40,25,23,11,9,31,60,2,19]
console.log(`Given Array => ${arrayNumbers}`);

console.log(``);
console.log(`=====================================Step 1========================================`);
 
console.log(`1.  New array after adding 10 in each element =>`);

const arrayAdd = arrayNumbers.map((currentValue) => {
    return currentValue + 10
});

console.log(arrayAdd);

console.log(``);
console.log(`==========================================Step 2====================================`);


const cubeArray = arrayNumbers.map((currentValue) => {
    return currentValue * currentValue * currentValue
});

console.log(`2. Cube of Array Elements =>`);
console.log(cubeArray);

console.log(``);
console.log(`==========================================Step 3====================================`);

console.log(`3. After adding the index value in its element => `);
const newArray = arrayNumbers.map((currentValue, index) => {
    return currentValue + index;
});
console.log(newArray);
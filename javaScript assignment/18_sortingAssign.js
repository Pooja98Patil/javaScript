const arrayRollNumbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45]
console.log(`Given Array is =>`);   
console.log(arrayRollNumbers);

console.log(``);
console.log(`===================Step 1- Reverse The Array====================`);

const reverseArray = arrayRollNumbers.reverse();
console.log(reverseArray);

console.log(``);
console.log(`===================Step 2- using sort() method====================`);

const sortArray = arrayRollNumbers.sort();
console.log(sortArray);

console.log(``);
console.log(`===================Step 3- Sorting Array In Ascending Order====================`);

const arrayAscending = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45];
console.log(`Given Array is =>`);
console.log(arrayAscending);

arrayAscending.sort((a, b) => {
    return a>b ? 1 : -1 
    
})

console.log(`After Sort in Ascending order =>`)
console.log(arrayAscending);


console.log(``);
console.log(`===================Step 4- Find the Greatest number from the Array ====================`);

//const greatetNumber = arrayAscending[arrayAscending.length-1]
console.log(`Greatest number from array => ${arrayAscending[arrayAscending.length-1]}`);


console.log(``);
console.log(`===================Step 5- Find the Smallest number from the Array ====================`);

console.log(`Smallest number from array => ${arrayAscending[0]}`);

console.log(``);
console.log(`===================Step 6- Remove dublicates numbers from Array ====================`);
const upadtedArray = [];

for (let index = 0; index < arrayRollNumbers.length; index++) {
    if (upadtedArray.indexOf(arrayRollNumbers[index]) === -1) {
        upadtedArray.push(arrayRollNumbers[index]);
      }
    
};

console.log(`After Removing dublicate Value =>`);
console.log(upadtedArray);
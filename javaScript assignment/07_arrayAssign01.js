const fruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`The Given Array is => ${fruits}`);
console.log(`=================================Step 1==========================`);
///////////Finding first and last element from array///////////
const firstElement = fruits[0];
const lastElement = fruits[fruits.length-1]; 
console.log(`The First Element of the array is => "${firstElement}",\nThe Last Element of the array is => "${lastElement}"`);
console.log(' ');


console.log(`=================================Step 2=========================`);
///////////Adding element in the begining///////////
const fruits2 = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`Original array=> ${fruits2}`);
fruits2.unshift("Papaya");
console.log(`After Adding of Papaya => ${fruits2}`);
console.log(' ');


console.log(`=================================Step 3=========================`);
///////////Remove mango From the Array///////////
const fruits3 = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`Original array=> ${fruits3}`);
fruits3.splice(3,1);
console.log(`After Removing Mango => ${fruits3}`);
console.log(' ');

console.log(`=================================Step 4=========================`);
//////////////// Adding the element at last in the array/////////////
const fruits4 = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`Original array=> ${fruits4}`);
fruits4.push("Pineapple");
console.log(`After Adding the 'pineapple'=> ${fruits4}`);
console.log(' ');

console.log(`=================================Step 5=========================`);
//////////////// Adding the element in the middal of the array/////////////
const fruits5 = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`Original array=> ${fruits5}`);
fruits5.splice(4, 0, 'Dragan fruit');
console.log(`After Adding Dragaon fruit => ${fruits5}`);
console.log(' ');

console.log(`=================================Step 6=========================`);
///////////Replacing an element orange with kiwi////////////////
const fruits6 = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`Original array=> ${fruits6}`);
fruits6.splice(1,1,'kiwi');
console.log(`After Replacing Orange with Kiwi => ${fruits6}`);
console.log(' ');

console.log(`=================================Step 7=========================`);
/////////////////log the elements starting from 1 to 4/////////////////
const fruits7 = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`Original array=> ${fruits7}`);
const element = fruits7.slice(1,4);
console.log(`Elements Starting from 1 - 4 => ${element}`);
console.log(' ');


console.log(`=================================Step 8=========================`);
/////////////////only Selecting last elements from array/////////////////
const fruits8 = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`Original array=> ${fruits8}`);
const lastThreeElemnts = fruits8.slice(-3);
console.log(`Last Three Elements of array is => ${lastThreeElemnts}`);
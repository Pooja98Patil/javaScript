const arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];
console.log(`Given Array is => ${arrayNumbers}`);

console.log(`=========================Step 1========================`);
console.log(`1. The total Elements available in the array is => ${arrayNumbers.length}`);

console.log(`   `);
console.log(`=========================Step 2========================`);
const firstEle = arrayNumbers[0];
const lastELe = arrayNumbers[arrayNumbers.length-1];
console.log(`2. The 1st Element => ${firstEle},  And Last Element => ${lastELe}`)

console.log(`   `);
console.log(`=========================Step 3========================`);
const thirdLastELe = arrayNumbers[arrayNumbers.length-3];
console.log(`The Third last Element of the array is => ${thirdLastELe}`);

console.log(`   `);
console.log(`=========================Step 4========================`);
console.log(`The Given array is => ${arrayNumbers} \n The Even No are =>`);

for (const index of arrayNumbers) {
    if (index%2 == 0) {
       const evenNo = index; 
        console.log(evenNo);
    }
};


console.log(`=========================Step 5========================`);
console.log(`The Given array is => ${arrayNumbers} \n The Odd No are =>`);

for (const index of arrayNumbers) {
    if (index%2 == 1) {
       const oddNo = index; 
        console.log(oddNo);
    }
};
///////find the all even posiotned number and then do sum/////

console.log(`=========================Step 6========================`);
console.log(`The Given array is => ${arrayNumbers}`);

let sumOfEven = 0;
for (const evenSum in arrayNumbers) {
  
    if (evenSum%2 == 0) {
        let num = arrayNumbers[evenSum]
        //console.log(`${num}`)
        sumOfEven = sumOfEven + num;

    }
        
    }
    console.log(`The Sum of All Even positioned elements is => ${sumOfEven}`);

console.log(`   `); ///////find the all odd posiotned number and then do sum/////
console.log(`=========================Step 7========================`);

console.log(`The Given array is => ${arrayNumbers}`);

let sumOfOdd = 0;
for (const oddSum in arrayNumbers) {
  
    if (oddSum%2 == 1) {
        let num = arrayNumbers[oddSum]
        //console.log(`${num}`)
        sumOfOdd = sumOfOdd + num;

    }
        
    }
    console.log(`The Sum of All Even positioned elements is => ${sumOfOdd}`);


console.log(`=========================Step 8========================`);
console.log(`The Given array is => ${arrayNumbers}`);

let result = 0;

for (const totalSum of arrayNumbers) {
   result = result + totalSum;
    
}
console.log(`The Sum Of all No is => ${result}`);

console.log(`   `);
console.log(`=========================Step 9========================`);
console.log(`The Given array is => ${arrayNumbers} \n The Numbers which are multiple of 5 =>`);

for (const index of arrayNumbers) {
    if (index%5 == 0) {
       const multiByFive = index; 
        console.log(multiByFive);
    }
};


console.log(`=========================Step 10========================`);

let num = arrayNumbers.includes(115);
console.log(`The 115 number is avilable in the array => ${num}`);

console.log(`   `);
console.log(`=========================Step 11========================`);

let num2 = arrayNumbers.includes(23);
console.log(`The 23 number is avilable in the array => ${num2}`);

console.log(`   `);
console.log(`=========================Step 12========================`);

arrayNumbersNew = [20,31,40,25,23,11,29,9,60,2,11];
console.log(`The Given array is => ${arrayNumbersNew}`)
console.log(`After Adding 55,66 at index 3 the result is =>`);

arrayNumbersNew.splice(3,0,55,66);
console.log(arrayNumbersNew);

console.log(`   `);
console.log(`=========================Step 13========================`);
console.log(`The Given array is => ${arrayNumbers}`)
console.log(`After deleting 3 elemnts from index 4 the result is =>`);

arrayNumbers.splice(4,3);
console.log(arrayNumbers);

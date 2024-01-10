let array = [44, 22, 33, 44, 22, 66, 77];

console.log(array);

// Set

 

const setOfRollNum = new Set();

setOfRollNum.add(44);

setOfRollNum.add(22);

setOfRollNum.add(33);

setOfRollNum.add(44);

setOfRollNum.add(22);

setOfRollNum.add(66);

setOfRollNum.add(77);

console.log(setOfRollNum);

 

console.log(`Size is: ${setOfRollNum.size} `);

 

console.log(`Deleting 66`);

setOfRollNum.delete(66);

console.log(setOfRollNum);

 

console.log(`Is element available`);

console.log(setOfRollNum.has(22));
//////////////////Remove Dublicate Element From Array///////////////////////////////
console.log(`=========Assignment 1- Remove Dublicate Number From Array===================`);
const givenNum = [11, 3, 4, 11, 4, 7, 3];
console.log(`The Given Array => ${givenNum}`);
const updatedArray = [];

for (let i = 0; i < givenNum.length; i++) {
  if (updatedArray.indexOf(givenNum[i]) === -1) {  //array return -1 when its empty
    updatedArray.push(givenNum[i]);
  }
 
}

console.log(`After Removing dublicate Value => ${updatedArray}`);



//////
//var str = "Developer world";
//console.log(str.slice(1,-1))











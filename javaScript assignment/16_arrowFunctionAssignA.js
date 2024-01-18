console.log(`====================================Assignment 0A========================`);
console.log(`==================Step 1=======================`);
///////////////// arrow fun without no arg no return value/////////////////

const message = () => {
   console.log(`Good Morning, Today is Thursday`);
};
message();

console.log(``);
console.log(`==============================Step 2 MultiPlication=========================`);
////////////////arrow fun with arg and no return value (multiplication)///////////////////

const multiply = (n1, n2, n3=1) => {
  console.log(`Given Value=> ${n1},${n2},${n3}`);
  const result = n1 * n2 * n3;

  console.log(`Multilication Of Given Value is => ${result}`);
  console.log(``);
};

multiply(5, 5, 2);
multiply(10, 4);



console.log(`================================step 3 Addition==========================`);
/////////////////arrow function with arg and return value (addition)////////////////////


const addition = (n1, n2, n3, n4, n5) => {
    console.log(`Given Value=> ${n1},${n2},${n3},${n4},${n5}`);
    const result = n1 + n2 + n3 +  n4 + n5;

    console.log(`Addition Of given Values is=> ${result}`);
    console.log(``);
  };
  
  addition(100,100,200,349,756);
  addition("I am ","learning ","ES6 ","features ","in depth ");
  /////////////find the factorial number/////////////

//   function factorialOfNum(num){
//    result = 1;
//    for (let index = 1; index <= num; index++) {
//       result = result * index;

//    }
//    console.log(result);
//   };


//   factorialOfNum(2);
//   factorialOfNum(4);


function factorialNum(num){
    console.log(`The Given No is=> ${num}`);
    if (num == null || num == undefined) {
        
        return `Invalid`;
    }
     if (num<0) {
         return `Invalid, you have Entered negative Number`
     }
    if (num == 1 || num == 0) {
        return 1;
    }

    let result = 1;
    for (let index = 1; index <= num; index++) {
        result = result * index;
        
    }
    return result;
}

//factorialNum(3);
 console.log(`The Factorial of 3 is => ${factorialNum(3)}`);
 console.log(``)
 console.log(`The Factorial of 0 is => ${factorialNum(0)}`);
 console.log(``)
 console.log(`The Factorial of 1 is => ${factorialNum(1)}`);
 console.log(``)
 console.log(`The Factorial of null is => ${factorialNum(null)}`);
 console.log(``)
 console.log(`The Factorial of  is => ${factorialNum()}`);
 console.log(``)
 console.log(`The Factorial of NaN is => ${factorialNum(NaN)}`);
 console.log(``)
 console.log(`The Factorial of undefined is => ${factorialNum(undefined)}`);
 console.log(``)
 console.log(`The Factorial of -3 is => ${factorialNum(-3)}`);
console.log(``)
console.log(`The Factorial of 4 is => ${factorialNum(4)}`);


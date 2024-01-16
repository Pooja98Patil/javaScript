console.log(`================================Assignment A: Factorial Of Number======================`);


function factorialOfNum(num){
    console.log(`The Given No is=> ${num}`);
    if (num == null || num == undefined) {
        
        return `Invalid Input`;
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



   
   console.log(`The Factorial of 5 is => ${factorialOfNum(5)}`);
   console.log(``)
   console.log(`The Factorial of 3 is => ${factorialOfNum(3)}`);
   console.log(``)
   console.log(`The Factorial of null is => ${factorialOfNum(null)}`);
   console.log(``)
   console.log(`The Factorial of 8 is => ${factorialOfNum(8)}`);
   console.log(``)
   console.log(`The Factorial of undefined is => ${factorialOfNum(undefined)}`);
   console.log(``)
   console.log(`The Factorial of 9 is => ${factorialOfNum(9)}`);
   console.log(``)
   console.log(`The Factorial of 0 is => ${factorialOfNum(0)}`);
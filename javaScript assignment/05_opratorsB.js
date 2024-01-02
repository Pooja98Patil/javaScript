console.log(`=======================Step 01======================`);

/////////////function to check Greatest Number///////////
function greaterNumber(num1,num2){
    var result = num1 > num2 ? num1 : num2;
    console.log(` Num1 = ${num1}\n Num2 = ${num2}`);
    console.log(`The Greatest number is ${result}.`);
    console.log(` `);
};

greaterNumber(10,-10);
greaterNumber(800,899);

console.log(`=======================Step 02======================`);
///////////The function to check even and odd number/////////////////
function isEvenOrOddNum(givenNumber){
   var result = givenNumber % 2 === 0 ? "Even" : "Odd";
   console.log(`Value => ${givenNumber}, The given Number is ${result}`);
   console.log(` `);
};
isEvenOrOddNum(29);
isEvenOrOddNum(44);
isEvenOrOddNum(0);
isEvenOrOddNum(101);

console.log(`=======================Step 03======================`);
 
///////////function to check the word length is even or odd///////////
 
function wordLength(word){
   var givenWordLength  = word.length;
   var result = givenWordLength % 2 === 0 ? "Even" : "Odd";

   console.log(`The Given Word is => "${word}", The length of given word is ${givenWordLength}, And its "${result}"`);
   console.log(` `);

}

wordLength("JavaScript");
wordLength("developer");
wordLength("Google");
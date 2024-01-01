console.log('====================Assignment 01 - Date 01/01/2024==============');

console.log('====================Step 1============================');
function squareOfWordLength(str) {

    var result = str.length;
    // var squarelength = result * result
    

    console.log(`The Given word is => ${str}\n The Length of Word is => ${str.length}, The squre of Length is ${str.length*result}.`);
    console.log(" ");
};
squareOfWordLength("JavaScript")
squareOfWordLength("Google Chrome")
squareOfWordLength("Developer Smart")

console.log('====================Step 2===========================');
console.log(" ");

function findstrlength(){
    var str = "I am Angular Developer";
    console.log(`The Given String is "${str}", And the Length of string is ${str.length}.`);
    var word = str.split(" ").length;
    console.log(`The Total number of words in string are ${word}.`);

    var divided = str.length / word;
    console.log(`The Result dividation is ${divided}.` );

    var multi = str.length * word;
    console.log(`The Result Multiplication is ${multi}.` );

}

findstrlength();
////////////////Assignment B- Factorial of a number/////////////////////
console.log(`=========================Assignment B- Factorial of a number===========================`)
function factorialofWordsCount(string) {

    if (string == null || string == undefined) {

        return `Invalid Input`;
    }
    console.log(`Given String => ${string}`);
    var wordCount = string.split(" ").length;
    console.log(`Total no of words in string is=> ${wordCount}  `);
    
    // if (wordCount < 0) {
    //     return `Invalid, you have Entered negative Number`
    // }
    // if (wordCount == 1 || wordCount == 0) {
    //     return 1;
    // }

    let result = 1;
    for (let index = 1; index <= wordCount; index++) {
        result = result * index;

    }
    console.log(`The Factorial Of given Number is => ${result}`);
    console.log(``);
}


factorialofWordsCount("Revision is the mother of Success");
factorialofWordsCount("We never fail, we always learn, Mind it");
console.log(`The Factorial of null is => ${factorialofWordsCount(null)}`)
console.log(``)
factorialofWordsCount("");
factorialofWordsCount("Pooja Umesh Patil");


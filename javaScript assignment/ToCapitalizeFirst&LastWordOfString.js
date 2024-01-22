//////Assignment To convert 1st And last charecter of word in upeerCase/////////////////
console.log(`=====Assignment To convert 1st And last Charecter of word in upeerCase=====`);
function inputString(string){
console.log(`The Given String is => ${string}`);
let outputString = "";

const words = string.split(" ");

for (let i = 0; i < words.length; i++) {
    let word = words[i];

    if (word.length > 1) {
        // Capitalize the first letter
        word = word.charAt(0).toUpperCase() + word.slice(1);
//console.log(word);
        // Capitalize the last letter
        word = word.slice(0, -1) + word.slice(-1).toUpperCase();
        //console.log(word);
    } else {
        // If the word has only one letter, capitalize it
        word = word.toUpperCase();
    }

    outputString += word + " ";
    
}
console.log(`Result => ${outputString}`);
}



inputString("How are you mate      ");
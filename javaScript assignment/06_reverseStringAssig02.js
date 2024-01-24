console.log(`==============Assignment 0B (Reverse String)==============`);

function reverseString(string){
    console.log(`The Given String is => "${string}"`);
let result = "";

for (let index = string.length-1; index >=0; index--) {
  if (string.charAt(index) != " ") {
    result = result + string.charAt(index);
  };
    
    
};
console.log(`The reverse of given String is => ${result}`);
console.log(" ");
};

reverseString("Hard Work Always Pay Back.");
reverseString("Soon I will be Angular It Champ.")



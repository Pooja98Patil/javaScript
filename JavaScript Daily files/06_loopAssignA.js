console.log(`============Assignment 0A==============`);
console.log(`===================Step 1=============`);

//////Calculating the total Number of vowels in given string a,e,i,o,u///////////

function vowelsCount(Str){
    
let string = Str;
console.log(`The Given String is=> ${string}`)
 let totalVowels = 0;

 for (let index = 0; index < string.length; index++) {
    
    let char = string.charAt(index).toLowerCase();

    if (char == "a" || char == "i" || char == "o" || char == "u" || char == "e") {
         
        totalVowels = totalVowels + 1;
 }
};
console.log(`1. In the Given String Total Vowels Available are ==> ${totalVowels}`);
console.log(``);
};

vowelsCount("I am Very Good It Developer");

////////Calculatig the Sum of Cube from 1 to 5 numbers/////////////

console.log(`===================Step 2=============`);

function cubeCalculate(){
    let total = 0;
     for (let index = 1; index <=5; index++) {
          total = total + index * index * index;

          
    }[]
    console.log(`2. The total sum of cube of numbers from 1 to 5 is => ${total}`);
    console.log(``);
    };

 cubeCalculate();


console.log(`===================Step 3=============`);
////////Find the Odd Postionaing charecter from the string//////////////////


function oddPositionedChars(str){
   console.log(`The Given String is => ${str}`);
   console.log('In the given String The charecter Are present on odd Position Are follows')
  
    for (let i = 0; i < str.length; i++) {

      let char = str.charAt(i);
     // let indexof = char.indexOf(i);

      if (i% 2 == 1 && char != " ") {
        
         console.log(char);

      }
     
   }
};

oddPositionedChars("Hard Work always Pays back");
oddPositionedChars("Soon I will be Angular It Champ")


var str = "Hard Work always Pays back";
var strLength = str.length;

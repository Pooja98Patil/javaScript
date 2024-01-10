let array = [11,22,33,44,55,66,77];

console.log('Traversing the array using for in loop...')
for (const index in array) {
    console.log(array[index]);
};


//const element = array[0];
//console.log(element);
console.log('Sum of the array numbers=>')
let sum = 0;
for (const index in array) {
    console.log(array[index]);
    sum = sum + array[index]
 
};
console.log(`Sum of Array elemnets is ${sum}`);

console.log('Even number from the array')

for (const index in array) {
    if (array[index]%2 == 0) {
        
    console.log(array[index]);
    }
};

///////////////for...... in loop for string/////////////
console.log(`For In loop For string`)
const string = "Developer";
for (const i in string) {
    console.log(string[i]);
    
}


console.log(`traversing an array using for... of loop.`);
for (const element of array) {

    console.log(element);
    
};

console.log(`sum of array using for ... of loop`);
const arrayN = [4, 5, 6, 7, 3]; 
let sumtotal = 0;
for (const element of arrayN) {
    console.log(sumtotal);
    sumtotal = sumtotal + element;
   
}
console.log(`Sum of array using for Of loop is ${sumtotal}`);

console.log(`Finding vowels from the given array using for...of loop`);

let str = "Developer UI and Backend";
let vowels = "aeiou";
let count = 0;
for (const char of str) {
    console.log(char);
    if (vowels.includes(char.toLowerCase())) {
        count++;
    }
    
}
console.log(`vowels Count is => ${count}`);

///////////using join/////////
console.log(`used join method`);

let arayFriends = ["Pooja", "Anup", "Rupali","sonali"];
const result = arayFriends.join("-");
console.log(result);
console.log(typeof result);


///////reverse//////
arayFriends.reverse()
console.log(arayFriends);

const word = "Developer Ui and Backend";
// const arrayOfWord = word.split(" "); //////split words by space and coverting it in array/
// console.log(arrayOfWord); ///output array

// const words = word.split(""); ///split word in singal charechers and covert it in to array/
// console.log(words);           /// word array
// const wordReverce = words.reverse();  ////doing array reverce
// console.log(wordReverce);   ////output reverce array of charecters
// const reverceword = wordReverce.join("");   ////join array charcers and convert in to string
// console.log(reverceword);     ///// output reverce string

/////////in short method to do above task//////

const words = word.split("").reverse().join("");
console.log(words)
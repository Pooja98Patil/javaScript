console.log(`==================================Assignment B-  Palidrome And Anagram===================`);
console.log(`=======================Step 1 Palindrome===================`);


const isPalindrom = function(word){
    const reverseWord = word.split('').reverse().join('');
    let result = word === reverseWord ? "True" : "False";
    console.log(`${word} => Is Palindrome  => ${result}`)
};

isPalindrom("madam");
isPalindrom("dad");
isPalindrom("hello");


console.log(``);
console.log(`=======================Step 2 Anagram===================`);

const isAnagram = function(n1, n2){
    
    // const word1 = n1.toLowerCase();
    // const word2 = n2.toLowerCase();
    // console.log(word1)
    // console.log(word2)


    const str1 = n1.toLowerCase().split('').sort().join('');
    const str2 = n2.toLowerCase().split('').sort().join('');
    //console.log(str1)
    //console.log(str2)

    const result = str1 === str2 ? "True" : "False";
    console.log(`Is the Given words are Anagram "${n1}", "${n2}" => ${result}`)
   
}

isAnagram("Silent", "Listen");
isAnagram("Hello", "World");
isAnagram("Such", "much");
// Palindrom

 

const isPalindrome = function(word){
    console.log(word);
 const reverceString = word.split('').reverse().join('');
  
 /////using turnary operator
 let result = word === reverceString ? "True" : "False";
 console.log(`Given Word MADAM Is Palindrome or not: ${result}`);


 //console.log(reverceString)

//////using if else
//  if (word === reverceString) {
//      console.log(`This word is a Palindrome`)
//  }else{
//     console.log(`This word is not a Palindrome`)

//  };
  
}

isPalindrome("MADAM");
isPalindrome("Pooja");




 

// ANAGRAM

// 'heart' and 'earth' are anagrams.



const isAnagram = function(n1, n2){

    const str1 = n1.toLowerCase().split('').sort().join('');
    const str2 = n2.toLowerCase().split('').sort().join('');

    const result = str1 === str2 ? "True" : "False";
    console.log(`Is the Given words are Anagram "${n1}", "${n2}" => ${result}`)
}

isAnagram("heart","earth");

 
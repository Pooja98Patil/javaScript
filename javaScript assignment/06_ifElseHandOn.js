console.log(`=========================Assignment 02================`);
console.log(`=========================Point 1===============`);

var evenOddNum = function (num){

   var returnValue = "";

  if (num % 2 == 0) {
     
    returnValue = "Even";

  } else{
    returnValue = "Odd";   
   }
   console.log(`Given Number: ${num}, Result: ${returnValue}`);

   return returnValue;

   console.log(`Given Number`)
};

evenOddNum(45);
evenOddNum(70);
evenOddNum(67);
evenOddNum(98);

console.log(``);
console.log(`=========================Point 2===============`);

var eligibleForVote = function(age){
returnValue = "";

    if(age >= 18){
      returnValue = ` Age: ${age}\n The person is Eligiable for Vote.`
    }else{
        returnValue = ` Age: ${age}\n The person is not Eligiable for Vote.`
    }
    
    console.log(returnValue);

    return returnValue;
};

eligibleForVote(18);
eligibleForVote(20);
eligibleForVote(17);
eligibleForVote(40);

console.log(``);
console.log(`=========================Point 3===============`);

var charCheck = function(string){
  var returnValue = "";
  if(string.length > 10){
    returnValue = `String: "${string}", The Given String Contains more than 10 character.`
  }else{
    returnValue = `String: "${string}", The Given String does not Contains more than 10 character.`
  }
  console.log(returnValue);
  return returnValue;
}

charCheck("JavaScript-Es6");
charCheck("Html");


console.log(``);
console.log(`=========================Point 4===============`);

var charContain = function(string){
  if(string.startsWith("Java")) {
    console.log(`String: "${string}", The Given String Starts with "Java".`)
  }else{
    console.log(`String: "${string}", The Given String does not Starts with "Java".`)
  }
};

charContain("JavaScript Language");
charContain("Web Developer");

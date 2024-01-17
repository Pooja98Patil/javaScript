console.log(`=========================Assignment 2 Date- 29/12/2023=============================`);
console.log(``);
function stringHandsOn(){
    
    var givenstring = "  Hey you are doing good, keep it up  ";
    console.log(`1. The Given String is ==> "${givenstring}."`)

    ///////////////////////////used .length//////////////////////////////////////

    console.log(`2. Total length of string is ${givenstring.length}.`);

   ////////////////////////////// used .trim();////////////////////////////////////////////////

    var trimedString = givenstring.trim( );
    console.log(`3. After Removing extra spaces from the string is \n   String :- "${trimedString}",\n   Length :- ${trimedString.length}`);

    ////////////////////////////// used .trim();////////////////////////////////////////////////

    var removedSpaces = givenstring.length - givenstring.trim().length;
    console.log(`4. Total number Of removed spaces from string is ${removedSpaces}.`);

    ////////////////////////////// used .charAt();////////////////////////////////////////////////

    var firstChar = trimedString.charAt(0);
    var lastChar =  trimedString.charAt(trimedString.length-1);
    console.log(`5. The 1st and Last character of string after trim is :- ${firstChar}, ${lastChar}.`);

    ////////////////////////////// used .split(" ");////////////////////////////////////////////////

    console.log(`6. The total words available in the string are ${trimedString.split(" ").length}.`)

    ////////////////////////////// used .indexOf( );////////////////////////////////////////////////

    console.log(`7. The index of word "Good" in the string is ${trimedString.indexOf("good")}.`);

    ////////////////////////////// used .substring() and slice(); ////////////////////////////////////////////////

    console.log(`8. The substring starting from index 22 is \n   a) Using substring => "${trimedString.substring(22)} \n 
     b) Using slice ${trimedString.slice(22)}"`);

    ////////////////////////////// used .endsWith(" ") ////////////////////////////////////////////////
    
    console.log(`9. Is String ends with word "up" => ${trimedString.endsWith("up")}`);

    ////////////////////////////// used .startsWith(" ") ////////////////////////////////////////////////
    
    console.log(`10. Is string Starts with word "Hey" => ${trimedString.startsWith("Hey")}`);

};

stringHandsOn();


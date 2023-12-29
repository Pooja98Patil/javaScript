console.log(`=========================Assignment 2 Date- 29/12/2023=============================`);
console.log(``);
function stringHandsOn(){
    var string = "  Hey you are doing good, keep it up  ";
    console.log(`1. The Given String is ==> "${string}."`)
    
    var totalLength = string.length;
    console.log(`2. Total length of string is ${totalLength}.`);
    
    var stringTream = string.trim( );
    var treamLength = stringTream.length;
    console.log(`3. After Removing extra spaces from the string is \n   String :- "${stringTream}",\n   Length :- ${treamLength}`);
    
    var removedSpace = totalLength - treamLength;
    console.log(`4. Total number Of removed spaces from string is ${removedSpace}.`);

    var firstChar = stringTream.charAt(0);
    var lastChar = stringTream.charAt(stringTream.length-1);
    console.log(`5. The 1st and Last character of string after trim is :- ${firstChar}, ${lastChar}.`);

    var wordCount = stringTream.split(" ");
    console.log(`6. The total words available in the string are ${wordCount.length}.`)

    var indexOfGood = stringTream.indexOf("good");
    console.log(`7. The index of word "Good" in the string is ${indexOfGood}.`);

    // var substring = stringTream.substring(22);
    console.log(`8. The substring starting from index 22 is \n   a) Using substring => "${stringTream.substring(22)} \n   b) Using slice ${stringTream.slice(22)}"`);

    var endtWith = stringTream.endsWith("up");
    console.log(`9. Is String ends with word "up" => ${endtWith}`);

    var startWith = stringTream.startsWith("Hey");
    console.log(`10. Is string Starts with word "Hey" => ${startWith}`);

};

stringHandsOn();


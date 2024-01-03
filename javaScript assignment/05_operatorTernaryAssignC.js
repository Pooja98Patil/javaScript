console.log(`==================Assignment 01==========Date 03/01/2024============`);
console.log(`================================Step 01=============================`);


function maleMarriageEligibility(gender,age,boyName){
    var result = gender == "Male" && age >= 21 
    ? `Hey, ${boyName} you are Eligible for Marriage.` : `Unfortunately - ${boyName} You are not Eligible, Please try next time.`
    console.log(result);

};

maleMarriageEligibility("Male", 25,"Bill gates");
maleMarriageEligibility("Male",17,"Stew Jobs");

console.log(` `);
console.log(`============================step 2============================`);


function femaleMarriageEligibility(gender,age,girlName){
    var result = gender == "Female" && age >= 18 
    ? `Hey, ${girlName} you are Eligible for Marriage.` : `Unfortunately - ${girlName} You are not Eligible, Please try next time.`
    console.log(result);
}

femaleMarriageEligibility("Female",16,"Jenifer");
femaleMarriageEligibility("Female",27,"Malinda Gates");

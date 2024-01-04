console.log(`=====================Assignment 02========================`);

// // Function to check marriage eligibility

function checkEligibility(gender, age) {
    console.log(`Gender: ${gender}, Age:${age}`);
    if (age<=0 || age==null  || age==undefined || isNaN(age)) { // Invalid Input
        console.log(`Sorry you have entered invalid inputs`);
 }else{
    if(gender == "Male" && age >= 21 || gender == "Female" && age >= 18){
        console.log(`Yes, This Person is Eligibale for Marriage!`);
    }else{
        console.log(`This Person is not Eligiable For Marriage`);
    };

};
};

checkEligibility("Male",17);
checkEligibility("Male",25);
checkEligibility("Female",28);
checkEligibility("Female",16);
checkEligibility("Other",35);
checkEligibility("Other",41);
checkEligibility("Female",-18);
checkEligibility("Male",-21);




//////////Step 1 crated object banksbi

console.log(`===============================Created the Object bankSbi==================`);
const bankSbi =  {
    bankName : "SBI Bank",
    branchName : "Pune",
    subBranch : 3,
};
 
console.log(bankSbi);
console.log("");
console.log(`===============================Created the Object bankLocation==================`);
//////////step 2 create aobject 2 
const bankLocation = {
    street : "107",
    city : "Pune",
    pin : "432167",
};

console.log(bankLocation);
console.log("");
console.log(`===============================Cloned Object==================`);
////step 3clone of objects 

const newBankObject = Object.assign(bankSbi,bankLocation)

console.log(`After cloning the bankSbi and bankLocation the result is =>`);
console.log( JSON.stringify(newBankObject));


//////////created object rateOfInterest
const rateOfInterest = {
    homeLoanInterest : 1.5,
    personalLoanInterest : 2,
    dueInterest : 2,

};
console.log("");
console.log(`===============================Merged all 3 objects in to 1 => sbiDetails==================`);

const sbiDetails = Object.assign({}, bankSbi, bankLocation, rateOfInterest );

console.log(`The Bank Name is ${sbiDetails.bankName}, The Branch Name is ${sbiDetails.branchName}, They have ${sbiDetails.subBranch} subBranch, The street: ${sbiDetails.street}, city: ${sbiDetails.city}, pinCode: ${sbiDetails.pin}
They Have different types of loan interest, Home Loan Interest: ${sbiDetails.homeLoanInterest}, Personal Loan Interest: ${sbiDetails.personalLoanInterest}, Due Interest: ${sbiDetails.dueInterest}.`);

console.log("");
console.log(`===============================Traversing the object==================`);

for (const key in sbiDetails) {

    if (Object.hasOwnProperty.call(sbiDetails, key)) {

        const element = sbiDetails[key];

        console.log(`key ==> ${key}, Value ==> ${element}`);

    }

};

/////created the function consterctor bank
console.log(`====================Assignment Constructor Function==============================`);
function Bank(bankName, location, ifscCode, branchCode) {
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;

};

console.log(`===================Step 1,2=======================`);
////cerated the 4 objects
const yesBank = new Bank("Yes Bank", "Pune", "YES900020", 4098);
console.log(`The Bank Name is "${yesBank.bankName}", Location: ${yesBank.location}, IFSC COde: ${yesBank.ifscCode}, Branch COde: ${yesBank.branchCode}`)

const sbiBank = new Bank("SBI Bank", "New Mumbai", "SBI000023", 9870 );
console.log(`The Bank Name is "${sbiBank.bankName}", Location: ${sbiBank.location}, IFSC COde: ${sbiBank.ifscCode}, Branch COde: ${sbiBank.branchCode}`)

const mahBank = new Bank("MAH Bank", "Jalgaon", "MAH000045", 1234);
console.log(`The Bank Name is "${mahBank.bankName}", Location: ${mahBank.location}, IFSC COde: ${mahBank.ifscCode}, Branch COde: ${mahBank.branchCode}`)

const axisBank = new Bank("Axis Bank", "Nashik", "Axis0000034", 32145);
console.log(`The Bank Name is "${axisBank.bankName}", Location: ${axisBank.location}, IFSC COde: ${axisBank.ifscCode}, Branch COde: ${axisBank.branchCode}`)

//////////adding the Data Member

Bank.prototype.openTime = "9 AM IST"
Bank.prototype.closeTime = "6 PM IST"
console.log(``);
console.log(`============================Step 5 ==============================`);

console.log(`The Opening Time Of ${sbiBank.bankName} is "${sbiBank.openTime}" And Closing Time is "${sbiBank.closeTime}"`);

console.log(``);
console.log(`============================Step 6 ==============================`);
console.log(`The closing Time Of ${axisBank.bankName} is "${sbiBank.closeTime}"`);
console.log(``);

console.log(`============================Step 7 ==============================`);
console.log(`The ${yesBank.bankName} has Branch Code: ${yesBank.branchCode}, Open time is : ${yesBank.openTime}`);
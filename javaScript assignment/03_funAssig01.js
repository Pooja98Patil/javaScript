console.log("==========================Assignment 01 (Functions) Date- 28/12/2023=================================");
console.log("");

console.log("==========================Step 1 (Function without arguments and no return value)====================");
console.log(" ");

function sent01() {
  console.log("This is the Output of function 1 with no aruguments and no return value.");
}
sent01();

function sent02() {
  console.log("This is the Output of function 2 with no aruguments and no return value.");
}
sent02();
console.log(
  "                                                                     "
);

console.log(
  "=================================Step 2 (Function with arguments)========================"
);
console.log(
  "                                                                     "
);
function personalDetails(firstName, lastName, collegeName) {
  console.log("My First Name is", firstName);
  console.log("My Last Name is", lastName);
  console.log("My College Name is", collegeName);
}
personalDetails("Pooja", "Patil", "North Maharashtra University Jalgaon");
console.log("      ");
console.log(
  "=================================Step 3 (Function with arguments and no return)======================"
);
console.log("      ");
function swapValues(value1, value2) {
  console.log("Before Swap the Values are : ");
  console.log("value1 ==>", value1);
  console.log("value2 ==>", value2);
  var numtemp = value1;
  value1 = value2;
  value2 = numtemp;
  console.log("      ");
  console.log("After Swap the Values are :");

  console.log("value1 is", value1);
  console.log("value2 is", value2);
}

swapValues("Virat", "Anushka");
swapValues("1000", "2000");
console.log(
  "=================================Step 4 function with 3 paramenter addition========================================"
);

console.log("      ");
function addThreeValues(num1, num2, num3) {
  var addValue = num1 + num2 + num3;
  console.log("1st value ==>", num1);
  console.log("2nd value ==>", num2);
  console.log("3rd value ==>", num3);
  console.log("The Addition of three values are :", addValue);
  console.log("      ");
}
addThreeValues(10.23, 600, 40);
addThreeValues("Hello ", "Good ", "Morning");

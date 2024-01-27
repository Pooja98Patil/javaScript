const arrayNums = [20,3,4,56,90,400,49];
console.log(`Given Array => ${arrayNums}`);

console.log(``);
console.log(`==============================================Step 1==============================================`);

const arrayNums1 = [20,3,4,56,90,400,49];
console.log(`Original Array => ${arrayNums1}`);

const shallowArray = arrayNums1; ///////////shallow Cloning
shallowArray.push(55,66);

console.log(`After shallow Cloning and adding the value 55 and 66 in the array, The Updated Array is=>`);
console.log(shallowArray);


console.log(``);
console.log(`==============================================Step 2==============================================`);

console.log(`Original Array => ${arrayNums}`);


const deepCloneArray = [...arrayNums];  // Deep Clone using Spread Operator
deepCloneArray.splice(4, 0, 10, 25)

console.log(`After Deep Cloning and adding the value 10 and 25 before 90 in the array, The Updated Array is=>`);
console.log(deepCloneArray);


console.log(``);
console.log(`==============================================Step 3==============================================`);

const arrayEven =[2, 30, 14, 8];

console.log(`Original Array 1 => ${arrayNums}`);
console.log(`Original Array 2 => ${arrayEven}`);

const mergedArray = [...arrayNums, ...arrayEven];
console.log(`After Merging Both the array, The Output is =>`);
console.log(mergedArray);




console.log(``);
console.log(`==============================================Step 4==============================================`);

const employee_info = {
    emp_id: 27,
    emp_name: "John Doe",
    salary: {
        july_month: "40,0000INR",
        aug_month: "50,0000INR",
        jun_month: "65,0000INR"
    },
    address: {
        locality: {
            colony: "Om Vrindavan Society",
            street: "Kanch pokli, 431202",
        },
        city: "Mumbai",
        state: "Maharashtra",
        country: "India"
    },
    mobiles: ["+91 8600 3456 88", "1800- 4567 32", "+91- 9096 5678 77"]
};

console.log("The given Employee object is => " + JSON.stringify(employee_info) );

console.log(``);
console.log(`==============================================Step 5==============================================`);

//console.log(`a. Address:- Locality- \n Colony:- ${JSON.stringify(employee_info.address.locality)} \n Street:- ${employee_info.address.locality.street}`);
//console.log(` City: ${employee_info.address.city}\n State: ${employee_info.address.state} \n Country: ${employee_info.address.country}`);
//console.log(JSON.stringify(employee_info.address.locality));

console.log(`a. Address:- `);
console.log(JSON.stringify(employee_info.address));   console.log(``);

console.log(`b. Mobile Numbers :-`);
console.log(JSON.stringify(employee_info.mobiles));

console.log(``);
console.log(`==============================================Step 6 Deep Cloning using json.stringify==============================================`);


const copyemployee_info = JSON.parse(JSON.stringify(employee_info));  //////deep cloning using json.stringify

console.log(`Before Updating the Values for original and cloned object =>`);
console.log(`Salary for July Month => ${JSON.stringify(copyemployee_info.salary.july_month)}`);
console.log(`Country value is  => ${JSON.stringify(employee_info.address.country)}`);

//////updating the Values
copyemployee_info.salary.july_month = "80,0000INR";
employee_info.address.country = "United Kingdom";

console.log(``);
console.log(`After Updating the Values for original and cloned object =>`);

console.log(`Salary for July Month => ${JSON.stringify(copyemployee_info.salary.july_month)}`);
console.log(`Country value is  => ${JSON.stringify(employee_info.address.country)}`);
console.log(`======================================== Assignment A By using Filter method() =============================`);
console.log(``);

class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;

    }
    getDetails(){

        console.log(`ID: ${this.emp_id }, Name: ${this.emp_name}, Department: ${this.emp_dept}, Salary: ${this.emp_salary}, Company: ${this.emp_company}`);
 
     } 
}

const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(22, "Mahesh", "HR", 85000, "Infy");


const arrayEmployee = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log(`The Given Details Of Employee are =>`);

arrayEmployee.filter((element) => {
    element.getDetails()
});


console.log(``);
console.log(`===================================Step 1=================================`);

console.log(`1. Employees Working in TCS => `);
/////////////find the all employee from tcs
//way 1
// arrayEmployee.filter((element) => {
//     if (element.emp_company === "TCS") {
        
//     console.log(`Name: ${element.emp_name}, Company: ${element.emp_company}`);
//     }
// })

///way 2=>
const newArray = arrayEmployee.filter((element) => {
    return element.emp_company === "TCS";
    
})

 newArray.filter((element) => {
    console.log(`Employee name: ${element.emp_name}, Company name: ${element.emp_company}`);
});

console.log(``);
console.log(`===================================Step 2=================================`);

console.log(`2. Average Salary of Employee Working In wipro =>`);

const wiproArray = arrayEmployee.filter((element) => {
    return element.emp_company === "Wipro";
})

 let sum = 0;
 wiproArray.filter((element) =>{
    
   sum = sum + element.emp_salary
 });
 const result = sum/wiproArray.length;
 console.log(result);


 console.log(``);
console.log(`===================================Step 3=================================`);
    
console.log(`3. Average Salary of Employee from company wipro and Infy =>`);

const avarageSalaryArray = arrayEmployee.filter((element) => {
    return element.emp_company === "Wipro" || element.emp_company === "Infy"; 

});

let sumOfSalary = 0;
avarageSalaryArray.filter((element) =>{
    
    sumOfSalary = sumOfSalary + element.emp_salary
    //console.log(element)
 });
 const resultAvarage = sumOfSalary/avarageSalaryArray.length;
 console.log(resultAvarage);
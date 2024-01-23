console.log(`====================================Assignment D using Filter() and reduce()==========================`);
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
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");


const arrayEmployee = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log(`The Given Details Of Employee are =>`);

arrayEmployee.filter((element) => {
    element.getDetails()
});

console.log(`============================Step 1=====================================`);
///find all th employee from wipro/////////////

console.log(`1. List of employees working in wipro =>`)
arrayEmployee.filter((element) => {
    if (element.emp_company === "Wipro") {
        element.getDetails();
    }
    
});
console.log(``);
console.log(`============================Step 2=====================================`);
//////////////find all employeee fron IT or HR

console.log(`2. List of Employees from IT or HR Department =>`);
arrayEmployee.filter((element) => {
    if (element.emp_dept === "IT" || element.emp_dept === "HR") {
        element.getDetails();
    }
});

console.log(``);
console.log(`============================Step 3=====================================`);
//////////////fins the employees whosr id grter than 50

console.log(`3. Employees Whose ID is greater than 50 =>`);

arrayEmployee.filter((element) => {
    if (element.emp_id > 50) {
        element.getDetails();
    }
});

console.log(``);
console.log(`============================Step 4=====================================`);

////////find the empoyees whos name start with A,V,M
console.log(`4. List Of Employees Whose Name Start with "A", "V", "M" =>`);

arrayEmployee.filter((element) => {
     if (element.emp_name.startsWith("A") || element.emp_name.startsWith("V") || element.emp_name.startsWith("M")) {
         return element.getDetails();
    }
  })

 
console.log(``);
console.log(`============================Step 5=====================================`);

const sumOFSalary = arrayEmployee.reduce((rt, element) => rt + element.emp_salary, 0);

console.log(`Total Salary of all employee is ${sumOFSalary}, and total number of employees are ${arrayEmployee.length}`);
console.log(`5. The Avarage Salary of all the Employees is =>${sumOFSalary/arrayEmployee.length}`);


console.log(``);
console.log(`============================Step 6=====================================`);

const arrayItDepart = arrayEmployee.filter(element => element.emp_dept === "IT");

const SumOfSalary = arrayItDepart.reduce((currentValue, element) => currentValue + element.emp_salary, 0);

console.log(`Total employee working In IT Department are => ${arrayItDepart.length}, and total salary of these employees are => ${SumOfSalary}`);
console.log(`6. The Avarage Salary of IT Employees is => ${SumOfSalary/arrayItDepart.length}`);


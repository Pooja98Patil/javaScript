console.log(`=============================Assignment 0B================`);
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

for (const employee of arrayEmployee) {
     employee.getDetails();
    
};

console.log(``);
console.log(`================================Step 1 Employee Working In TCS ================================`);
///////find the all employee working in Tcs////

for (const employee of arrayEmployee) {
     
    if (employee.emp_company === "TCS") {
       
        console.log(`Name: ${employee.emp_name}, Company: ${employee.emp_company}`);

}
};

console.log(``);
console.log(`================================Step 2  Employee Working In Finance Department================================`);
///////find the all employee working Finance Department////
for (const employee of arrayEmployee) {
     
    if (employee.emp_dept === "Finance") {
       
        console.log(`Name: ${employee.emp_name}, Department: ${employee.emp_dept}`);
}
};

console.log(``);
console.log(`================================Step 3  Employee whose name start with "R"================================`);
for (const employee of arrayEmployee) {
     
    if (employee.emp_name.startsWith('R')) {
       
        employee.getDetails();
}
};

console.log(``);
console.log(`================================Step 4  Employee whose Salary is greater than 75000================================`);

for (const employee of arrayEmployee) {
     
    if (employee.emp_salary > 75000) {
       
        console.log(`Name: ${employee.emp_name}, Company: ${employee.emp_company}, Salary: ${employee.emp_salary}`);
}
};

console.log(``);
console.log(`================================Step 5  Employee whose Salary is greater equal to  50000 and departmet is IT================================`);

for (const employee of arrayEmployee) {
     
    if (employee.emp_salary >= 50000 && employee.emp_dept === "IT") {
       
        employee.getDetails();
}
};

console.log(``);
console.log(`================================Step 6  Employee from Infy Company================================`);

for (const employee of arrayEmployee) {
     
    if (employee.emp_company === "Infy") {
       
        employee.getDetails();
}
};

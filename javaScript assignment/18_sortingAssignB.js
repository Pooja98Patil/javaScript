console.log(`======================================== Assignment B Sorting=================================`);
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


const arrayEmployees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log(`====================================Step 1============================`);
console.log(`Employees id's in Descending order =>`);

arrayEmployees.sort((a, b) => {
    return a<b ? 1 : -1 
 });

 arrayEmployees.filter((element) => {
    console.log(`Employee ID: ${element.emp_id}, Employee Name: ${element.emp_name}, Employee Department: ${element.emp_dept}`);
 })

 console.log(``);
 console.log(`====================================Step 2============================`);
 console.log(`Employees Department in Ascending order =>`);
 
 
 arrayEmployees.sort((dept1, dept2) => {
    return dept1.emp_dept >= dept2.emp_dept ? 1 : -1 
 });

 arrayEmployees.filter((element) => {
    console.log(`Employee ID: ${element.emp_id}, Employee Department: ${element.emp_dept}, Company: ${element.emp_company}`);
 })


 console.log(``);
 console.log(`====================================Step 3============================`);
 console.log(`Employees Salary in Descending order =>`);

 arrayEmployees.sort((salary1, salary2) => {
    return salary1.emp_salary < salary2.emp_salary ? 1 : -1 
 });

 arrayEmployees.filter((element) => {
    console.log(`Employee Name: ${element.emp_name}, Employee Salary: ${element.emp_salary}, Company: ${element.emp_company}`);
 })
console.log(`======================================== Assignment B =============================`);
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

arrayEmployee.map((element) => {
    element.getDetails()
})

console.log(``);
console.log(`=============================Step 1==============================`);

const arraySalary = arrayEmployee.map((element) => {
    return element.emp_salary;
})

console.log(`1. Employee Salary List =>`);
console.log(arraySalary)

console.log(``);
console.log(`=============================Step 2==============================`);

const arrayDepart = arrayEmployee.map((element)=> {
    return element.emp_dept
})
console.log(`2. Employee Department List =>`);
console.log(arrayDepart)

console.log(``);
console.log(`=============================Step 3==============================`);

const arrayId = arrayEmployee.map((element)=> {
    return element.emp_id
})
console.log(`3. Employee Id's List =>`);
console.log(arrayId)
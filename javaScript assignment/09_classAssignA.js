

console.log(`=========================Assignment 0A=======================`);

class Vehicle{
    vehicleName;
    type;
    year;
    color;
    seater;
    constructor(vehicleName, type, year, color, seater){

        this.vehicleName = vehicleName;

        this.type = type;

        this.year = year;

        this.color = color;

        this.seater = seater;

    }
    getDetails(){

        console.log(`Vehicle Name: ${this.vehicleName}, Type: ${this.type}, Year: ${this.year}, Color: ${this.color}, Seater: ${this.seater}`);
 
     }
};

const mahindra = new Vehicle("Mahindra", "Car", 2001, "Red", 4);
const tata = new Vehicle("Tata", "Car", 2004, "Black", 5);
const kia = new Vehicle("Kia", "Car", 2002, "Red", 4);
const honda = new Vehicle("Honda", "Car", 2001, "White", 5);
const marutiSuzuki = new Vehicle("Maruti Suzuki", "Car", 2003, "Red", 5);


console.log(`=====================Step 1   Traversing array of Object=======================`);

const arrayOfVehicles = [ mahindra, tata, kia, honda, marutiSuzuki  ];

for (const element of arrayOfVehicles) {

    console.log(`The Car Name is:${element.vehicleName}, The Type: ${element.type}, Car Color is: ${element.color}, The car manufactured Year is: ${element.year}, Car-Seater: ${element.seater}`);
  //element.getDetails();
};

console.log(``);
console.log(`========================================Step 2 ==================================`);

class College {
    collegeName;
    location;
    noOfTeachers;
    degree;

    constructor(collegeName, location, noOfTeachers, degree){
        this.collegeName= collegeName;
        this.location = location;
        this.noOfTeachers = noOfTeachers;
        this.degree = degree;
    }
        getDisplay(){
            console.log(`College Name=> ${this.collegeName}, Location=> ${this.location}, No Of Techers=> ${this.noOfTeachers}, Degree=> ${this.degree}`);
        }

};

const rlCollege = new College("R.L. College", "Jalgaon", 12, "MBA");
const mjCollege = new College("M.J College", "Jalgaon", 10, "Engineering");
const kisanCollege = new College("Kisan College", "Pune", 13, "Medical");
const SBMCollege = new College("S.B.M College", "Nashik", 14, "AgreeCluture");

rlCollege.getDisplay();
mjCollege.getDisplay();
kisanCollege.getDisplay();
SBMCollege.getDisplay();


console.log(``);
console.log(`========================================Step 3 ==================================`);


function traverseObject(arg){

    for (const key in arg) {
        if (Object.hasOwnProperty.call(arg, key)) {
            
            const element = arg[key];
            console.log(`Key==> ${key} Element==> ${element}`);
            
        } 
    }console.log(``);
};

traverseObject(rlCollege);
traverseObject(mjCollege);
traverseObject(kisanCollege);
traverseObject(SBMCollege);






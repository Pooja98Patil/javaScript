////////////object//////


let person = {

    firstName: "Gajanan",

    age: 32,

    isMarried: true

}

console.log(person);

person.age = 33; // Updating the value

console.log(person);

 const entr = Object.entries(person);////to find entries from the object
 console.log(entr);
const key = Object.keys(person); ////to find all keys from object
console.log(key);
const per = Object.values(person); ///to fins all values from object
console.log(per);
person.isMarried = false;

let isPresent = "age" in person ///to find the value is present on the object or not
console.log(isPresent);

let isPresents = "city" in person
console.log(isPresents);


//console.table(person);

 

delete person.designation;

console.table(person);

   //////type of accessing value in object

console.log(`Dot Notation`);

console.log(person.firstName); // 

console.log(`Square bracket Notation`);

console.log(person["firstName"]); // 

 /////////adding the value in object

person.designation = "Tech Arch";

console.log(person);

console.log(`Empty Object....`);

const address ={

 

}
address.city = "Pune";
console.log(address);



let user = {

    userName: "Jenny",

    country: "USA",

    address: {

        city: "Pune",

        street: "Wakad",

        pin: 411057,

        getAddress: function(){

           console.log(`Complete Address: ${this.flatNo}, ${this.street}, ${this.city}, ${this.pin}`); 

        }

    },

    show: function(){

        console.log(`Inside show function`);

    }

}

console.log(user);

let country = user.country;

console.log(country);

user.show();

 

console.log(user.address.pin);

user.address.flatNo = 308;

console.log(user.address);

 

user.address.getAddress();


console.log(`====== Traversing an object ========`);

let developer = {

    firstName: "Gajanan",

    age: 32,

    isMarried: true,

    skills: ["C", "CPP", "Core Java", "JavaScript", "Microservices" ]

}

for (const key in developer) {

    if (Object.hasOwnProperty.call(developer, key)) {

        const element = developer[key];

        console.log(`Key ==> ${key}, Value ==> ${element}`);

    }

}

 

console.log(developer.skills);
developer.skills.push("HTML");///adding at last element
console.log(developer.skills);
developer.skills.shift("C"); ///remove first element
console.log(developer.skills);
developer.skills.pop("HTML"); // remove last element
console.log(developer.skills);
developer.skills.unshift("C"); // adding first elementn 
console.log(developer.skills);


const keys = Object.keys(developer);

console.log(keys);

 

const values = Object.values(developer);

console.log(values);

console.log(`Is 'values' array ==>  ${Array.isArray(values)}`);

for (const element of values) {

    console.log(element);  

}

 

console.log(`Object entries....`);

const entries= Object.entries(developer);

for (const element of entries) {

    console.log(element);

}

console.log(`Accessing nested array element using double [] [] brackets`);

console.log(entries[0][0]);

console.log(entries[0][1]);

console.log(`==== in operator =====`);

const isAgeAvailable = "age" in developer;

console.log(`Is age Available: ${isAgeAvailable}`);

const isCityAvailable = "city" in developer;

console.log(`Is city Available: ${isCityAvailable}`);
let professor = {
    name : "Codemind",
    subject : "React Js",
     age: 32,
    student: 50,
    address: "Pune",
    ismarried: true,
}

console.log(`================Step 1====================`);
console.log(`Given Array =>`);
console.log(professor);

console.log(``);
console.log(`================Step 2====================`);
console.log(`After Adding Nested object: degrees`);

professor.degrees = {engineering : "CSC",Masters : "MTech",PHD : "Adv Computing" }
console.log(professor.degrees);

console.log(``);
console.log(`================Step 3====================`);
console.log(`After Adding array: certification`);

professor.certificate = ['Hacker Rank Participation', 'Certificate in IFE course', 'certificate in Adv Programming']
console.log(professor.certificate);

console.log(``);
console.log(`================Step 4====================`);
console.log(`Added new Property: totalExperience`);

professor.totalExperience = "14 years";
console.log(professor.totalExperience);

console.log(``);
console.log(`================Step 5====================`);
console.log(`Before modify the value of student is => ${professor.student}`);
professor.student = 100;
console.log(`After modify the value of student is => ${professor.student}`);

console.log(``);
console.log(`================Step 6====================`);
console.log(`Before Adding certicated value the array is =>`); 
console.log(professor.certificate)

professor.certificate.splice(2,0,"Oracle Certificates");
console.log(`After Adding certicated value the array is =>`);
console.log(professor.certificate);

console.log(``);
console.log(`================Step 7====================`);
console.log(`Last Element of the array is =>`);
let lastElement = professor.certificate[3]
console.log(lastElement);

console.log(``);
console.log(`================Step 8====================`);
console.log(`The complete Object is =>`);

for (const key in professor) {

    if (Object.hasOwnProperty.call(professor, key)) {

        const element = professor[key];

        console.log(`key ==> ${key}, Value ==> ${element}`);

    }

};

console.log(``);
console.log(`================Step 9====================`);
console.log(`Traverse array certificate`);



for (const key in professor.certificate) {

    if (Object.hasOwnProperty.call(professor.certificate, key)) {

        const element = professor.certificate[key];

        console.log(`key ==> ${key}, Value ==> ${element}`);

    }

};





const developer = {

    firstName: "Gajanan",

    age: 32,

    isMarried: true

}

console.log(developer);

developer.age = 34;

console.log(developer);

 

// Not allowed

// developer = {

 

// }

console.log(`====== Object Freezing === `);

Object.freeze(developer);

developer.isMarried = false;

developer.firstName = "Jenny";

console.log(developer);


console.log(`======= const array ============`);

const array = [2, 3,4, 5];

console.log(array);

array[0] = 100;

console.log(array);

// array = [ 99, 77, 88 ]; // Not allowed

 

console.log(`=== Freezing an array ======`);

Object.freeze(array);

array[1] = 777;

console.log(array);


const developer = {

    firstName: "Gajanan",

    age: 32,

    isMarried: true

}

 

const newDeveloper = Object.assign({}, developer)

newDeveloper.firstName = "Jenny";

console.log(newDeveloper);

console.log(developer);

 

console.log(`====== Object merge ===========`);

const user = {

    name: "Bill",

    designation: "CEO"

}

const address = {

    city: "LA",

    country: "USA",

    pin: 112233

}

 

const mergeObj = Object.assign({}, user, address );

console.log(user);

console.log(address);

console.log(mergeObj);


const developer = {

    firstName: "Gajanan",

    age: 32,

    isMarried: true

}

 

const newDeveloper = Object.assign({}, developer)

newDeveloper.firstName = "Jenny";

console.log(newDeveloper);

console.log(developer);

 

console.log(`====== Object merge ===========`);

const user1 = {

    name: "Bill",

    designation: "CEO"

}
const address1 = {

    city: "LA",

    country: "USA",

    pin: 112233

}

 

//const mergeObj = Object.assign({}, user, address,  );

console.log(user);

console.log(address);

console.log(mergeObj);
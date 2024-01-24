const projectName = document.getElementById("projectName");

console.log(projectName);

console.log(projectName.innerHTML);

 

console.log(`==========getElementsByTagName() API ==========`);

const liElements = document.getElementsByTagName('li');

console.log(liElements[0].innerHTML);

console.log(liElements[1].innerHTML);

console.log(liElements[2].innerHTML);

 

console.log(`==========getElementsByClassName() API ==========`);

const liRoles = document.getElementsByClassName("roles");

console.log(liRoles[0].innerHTML);

console.log(liRoles[1].innerHTML);

 

console.log(`==========querySelector() API with Tag or element name==========`);

const elementP = document.querySelector("p");

console.log(typeof elementP);

console.log(elementP.innerHTML);

console.log(`==========querySelector() API with id ==========`);

const elementLiFirst = document.querySelector("#firstRole");

console.log(elementLiFirst.innerHTML);

 

console.log(`==========querySelector() API with class ==========`);

const elementsRole = document.querySelector(".roles");

console.log(elementsRole.innerHTML);

 

console.log(`==========querySelectorAll() API with element name or Tag name ==========`);

const elementsP = document.querySelectorAll('p');

for (const element of elementsP) {

    console.log(element.innerHTML);

}

 

console.log(`==========querySelectorAll() API with element name or Tag name ==========`);

const elementsRoles = document.querySelectorAll('.roles');

for (const element of elementsRoles) {

    console.log(element.innerHTML);

}



console.log(`==== Changing Project name========`);

const projectElement = document.querySelector('#projectName');

projectElement.innerHTML = "Project Title: College Management System";


console.log(`==== Applying CSS properties ========`);

projectElement.style.color = "red";

 

elementP.style.fontSize = 'large';

elementP.style.fontWeight = 'bold';


console.log(`==== Changing Attribute ========`);

const elementLink = document.querySelector('#visitLink');

elementLink.setAttribute('href', "https://www.w3schools.com/");

elementLink.setAttribute('target', "_self");
/////////////////getting values from html by using queryselctor///////////////////

const value1 = document.querySelector("#value1");
const value2 = document.querySelector("#value2");
const addition = document.querySelector("#addition");
const subtraction = document.querySelector("#subtraction");
const multiplication = document.querySelector("#multiplication");
const division = document.querySelector("#division");
const clearValue = document.querySelector("#clear");
const resultValue = document.querySelector("#result");


////////////Code for Addition/////////////////

addition.addEventListener('click', () => {
   
    const input1 = +value1.value;
    const input2 = +value2.value;

    const result = input1 + input2;

    resultValue.innerHTML = result;

});


///////////Code for Substraction/////////////////

subtraction.addEventListener('click', () => {
   
    const input1 = +value1.value;
    const input2 = +value2.value;

    const result = input1 -  input2;

    resultValue.innerHTML = result;

});

///////////Code for Multiplication/////////////////

multiplication.addEventListener('click', () => {
   
    const input1 = +value1.value;
    const input2 = +value2.value;

    const result = input1 * input2;

    resultValue.innerHTML = result;

});


///////////Code for Dividation/////////////////

division.addEventListener('click', () => {
   
    const input1 = +value1.value;
    const input2 = +value2.value;

    const result = input1 / input2;

    resultValue.innerHTML = result;

});




///////code for clear the value/////

clearValue.addEventListener('click', () => {
    resultValue.innerHTML = "";
    value1.value = "";
    value2.value = "";
});
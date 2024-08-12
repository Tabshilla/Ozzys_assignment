const { Given, When, Then} = require('@cucumber/cucumber');
let num1, num2, result;
const assert = require('assert');


// GIVEN

Given("I have the number {int}", function (number) {
    num1 = number;
});

Given("I have the numbers {int} and {int}", function (number1, number2) {
    num1 = number1;
    num2 = number2;
});


Given("I have the values {word} and {word}", function (value1, value2) {
    num1 = value1 === "true";
    num2 = value2 === "true";
});

Given('the user is on the login page', function(){
    console.log ('Given code executed');
});
When('the user enters valid credentials', function(){
    console.log ('When code executed');
});
Then('the user is redirected to the dashboard', function(){
   console.log ('Then code executed');
});


let answer = 0;
Given('I start with {int}', function(input){
    answer = input;
});

When('I add {int}', function(input){
    answer += input;
});

Then('I end up with {int}', function(input){
    assert.equal(answer, input);
});

When('I multiply by {int}', function(input){
    answer *= input;
    
});

When ('I subtract {int}', function(input){
    answer -= input;
});
When ('I remove {int}', function(input){
    answer -= input;
});

When ('I divide by {int}', function(input){
    answer /= input;
});
When ('I split by {int}', function(input){
    answer /= input;
});

When ('I take modulus {int}', function(input){
    answer %= input;
});
When ('I calculate modulus {int}', function(input){
    answer %= input;
});

When ('I raise to the power of {int}', function(input){
    answer **= input;
});
When ('I exponentiate with {int}', function(input){
    answer **= input;
});


When ('I increment by {int}', function(input){
    answer += input;
});
When ('I increase by {int}', function(input){
    answer += input;
});

When ('I decrement by {int}', function(input){
    answer -= input;
});
When ('I decrease by {int}', function(input){
    answer -= input;
});


// When('I compare with {int}', function(input){
//     answer > input;
// });

// GIVEN
Given('I have numbers {int} and {int}', function (int1, int2) {
    num1 = int1;
    num2 = int2;
});

When("I compare that {int} is greater than {int}", function (x, y) {
    result = x > y;
});

// THEN

Then("the result should be true", function () {
    assert.equal(result, true);
});



When("I check if {int} is less than or equal to {int}", function (x, y) {
    result = x <= y;
});

// equal to
When("I check if they are equal", function () {
    result = num1 === num2;
});



// not equal to
When("I check if they are not equal", function () {
    result = num1 !== num2;
});
const loanAmount = document.getElementById("loan-amount");
const interestRate = document.getElementById("interest-rate");
const loanLength = document.getElementById("loan-length");
const calculateButton = document.getElementById("calculate-button");
const answerValue = document.getElementById("answer-value");

calculateButton.addEventListener('click', () => {
    console.log(loanAmount.value);
    console.log(interestRate.value);
    console.log(loanLength.value);
})
const loanAmount = document.getElementById("loan-amount");
const interestRate = document.getElementById("interest-rate");
const loanLength = document.getElementById("loan-length");
const calculateButton = document.getElementById("calculate-button");
const answerValue = document.getElementById("answer-value");

let getMonthlyPayment = (amount, rate, length) => 4444.00;

calculateButton.addEventListener('click', () => {
    const amount = parseFloat(loanAmount.value);
    const rate = parseFloat(interestRate.value);
    const length = parseFloat(loanLength.value);
    answerValue.innerText = getMonthlyPayment(amount, rate, length).toFixed(2);
})
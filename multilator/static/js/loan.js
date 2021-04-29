const loanAmount = document.getElementById("loan-amount");
const interestRate = document.getElementById("interest-rate");
const loanLength = document.getElementById("loan-length");
const calculateButton = document.getElementById("calculate-button");
const answerValue = document.getElementById("answer-value");

let getMonthlyPayment = (amount, rate, length) => {
    const numberOfMonths = length * 12;
    const monthlyRate = rate / 1200;
    // Divided by months (12) and then by (100) to change from percentage to decimal form.
    // 12 * 100 = 1200
    const annuityValue = (1 - ((1 + monthlyRate) ** -numberOfMonths)) / monthlyRate
    return amount / annuityValue;
};

calculateButton.addEventListener('click', () => {
    const amount = parseFloat(loanAmount.value);
    const rate = parseFloat(interestRate.value);
    const length = parseFloat(loanLength.value);
    if (isNaN(amount) || isNaN(rate) || isNaN(length)) {
        answerValue.innerText = "Not Enough Info";
    } else {
        answerValue.innerText = getMonthlyPayment(amount, rate, length).toFixed(2);
    }
})
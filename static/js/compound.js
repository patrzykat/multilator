const initialAmount = document.getElementById("initial-amount");
const interestRate = document.getElementById("interest-rate");
const compoundingTime = document.getElementById("compounding-time");
const calculateButton = document.getElementById("calculate-button");
const answerValue = document.getElementById("answer-value");

let getFinalValue = (amount, rate, length) => {};

calculateButton.addEventListener('click', () => {
    const amount = parseFloat(initialAmount.value);
    const rate = parseFloat(interestRate.value);
    const length = parseFloat(compoundingTime.value);
    answerValue.innerText = getFinalValue(amount, rate, length).toFixed(2);
})



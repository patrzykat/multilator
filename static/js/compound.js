const initialAmount = document.getElementById("initial-amount");
const yearlyInvestment = document.getElementById("yearly-investment");
const interestRate = document.getElementById("interest-rate");
const compoundingTime = document.getElementById("compounding-time");
const calculateButton = document.getElementById("calculate-button");
const answerValue = document.getElementById("answer-value");

let getFinalValue = (amount, rate, length, addition=null) => {
    const fractionRate = rate/100;
    const initialAmountInFuture = amount * ((1+(fractionRate)) ** length);
    if (addition) {
        const annuityFutureValue = addition * (((1+fractionRate) ** length) - 1) / fractionRate;
        return annuityFutureValue + initialAmountInFuture;
    } else {
        return initialAmountInFuture;
    }
};

calculateButton.addEventListener('click', () => {
    const amount = parseFloat(initialAmount.value);
    const rate = parseFloat(interestRate.value);
    const length = parseFloat(compoundingTime.value);
    const addition = parseFloat(yearlyInvestment.value);
    if (isNaN(amount) || isNaN(rate) || isNaN(length)) {
        answerValue.innerText = "Not Enough Info";
    } else if (isNaN(addition)) {
        answerValue.innerText = getFinalValue(amount, rate, length).toFixed(2);
    } else {
        answerValue.innerText = getFinalValue(amount, rate, length, addition).toFixed(2);
    }
})



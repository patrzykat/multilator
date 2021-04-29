const calculateButton = document.getElementById("calculate-button");
const answerValue = document.getElementById("answer-value");

// Functions
const getFinalValue = (interestRate, liabilityAmountArray, liabilityTimeArray) => {

    const discountRate = 1 / (1 + (interestRate / 100));
    const numberOfLiabilities = liabilityAmountArray.length;

    let bondPrice = 0;
    for (let i = 0; i < numberOfLiabilities; i++) {
        bondPrice += liabilityAmountArray[i] * (discountRate ** liabilityTimeArray[i]);
    }

    return bondPrice;
}

// Event Listeners
calculateButton.addEventListener('click', () => {
    const interestRate = parseFloat(document.getElementById("interest-rate").value);
    const faceValue = parseFloat(document.getElementById("face-value").value);
    const couponRate = parseFloat(document.getElementById("coupon-rate").value);
    const bondLength = parseInt(document.getElementById("bond-length").value);
    const liabilityAmountArray = [];
    const liabilityTimeArray = [];

    if (isNaN(interestRate) || isNaN(faceValue) || isNaN(couponRate) || isNaN(bondLength)) {
        answerValue.innerText = "Not Enough Info";
    } else {
        const couponValue = faceValue * (couponRate/100);
        const finalValue = faceValue + couponValue;

        for (let i=1; i<bondLength+1; i++) {
            liabilityTimeArray.push(i);
            if (i === bondLength) {
                liabilityAmountArray.push(finalValue);
            } else {
                liabilityAmountArray.push(couponValue);
            }
        }
        answerValue.innerText = getFinalValue(interestRate, liabilityAmountArray, liabilityTimeArray).toFixed(2);
    }
})
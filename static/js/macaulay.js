const calculateButton = document.getElementById("calculate-button");
const addLiabilityButton = document.getElementById("add-liability-button");
const otherLiabilitiesDiv = document.getElementById("other-liabilities");
const answerValue = document.getElementById("answer-value");

let nextLiability = 2;

// Functions
const verifyValues = (rate, lst1, lst2) => {
    for (let i = 0; i < lst1.length; i++) {
        if (isNaN(lst1[i])) {
            return false;
        }
    }

    for (let i = 0; i < lst2.length; i++) {
        if (isNaN(lst2[i])) {
            return false;
        }
    }

    return (!isNaN(rate));
}

const getFinalValue = (interestRate, liabilityAmountArray, liabilityTimeArray) => {

    const discountRate = 1 / (1 + (interestRate/100));
    const numberOfLiabilities = liabilityAmountArray.length;

    let durationNumerator = 0;
    for (let i=0; i<numberOfLiabilities; i++) {
        durationNumerator += liabilityAmountArray[i] * liabilityTimeArray[i] * (discountRate ** liabilityTimeArray[i]);
    }

    let durationDenominator = 0;
    for (let i=0; i<numberOfLiabilities; i++) {
        durationDenominator += liabilityAmountArray[i] * (discountRate ** liabilityTimeArray[i]);
    }

    console.log(durationNumerator);
    console.log(durationDenominator);

    return durationNumerator / durationDenominator;
}

// Event Listeners
addLiabilityButton.addEventListener('click', () => {

    const currentLiabilityAsString = nextLiability.toString();
    nextLiability += 1;

    const liabilityAmountID = "liability-amount-" + currentLiabilityAsString;
    const liabilityAmountLabel = document.createElement("label");
    liabilityAmountLabel.setAttribute("for", liabilityAmountID);
    liabilityAmountLabel.innerText = "Liability Amount ($)";
    const liabilityAmountInput = document.createElement("input");
    liabilityAmountInput.setAttribute("type", "number");
    liabilityAmountInput.setAttribute("id", liabilityAmountID);

    const liabilityTimeID = "liability-time-" + currentLiabilityAsString;
    const liabilityTimeLabel = document.createElement("label");
    liabilityTimeLabel.setAttribute("for", liabilityTimeID);
    liabilityTimeLabel.innerText = "Liability Time (years from now)";
    const liabilityTimeInput = document.createElement("input");
    liabilityTimeInput.setAttribute("type", "number");
    liabilityTimeInput.setAttribute("id", liabilityTimeID);

    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", "d-grid gap-2 my-2");
    newDiv.append(liabilityAmountLabel);
    newDiv.append(liabilityAmountInput);
    newDiv.append(liabilityTimeLabel);
    newDiv.append(liabilityTimeInput);

    otherLiabilitiesDiv.append(newDiv);
})

calculateButton.addEventListener('click', () => {
    const interestRate = parseFloat(document.getElementById("interest-rate").value);
    const liabilityAmountArray = [];
    const liabilityTimeArray = [];

    for (let i = 1; i < nextLiability; i++) {
        liabilityAmountArray.push(parseFloat(document.getElementById("liability-amount-" + i).value));
        liabilityTimeArray.push(parseFloat(document.getElementById("liability-time-" + i).value));
    }

    if (verifyValues(interestRate, liabilityAmountArray, liabilityTimeArray)) {
        answerValue.innerText = getFinalValue(interestRate, liabilityAmountArray, liabilityTimeArray).toFixed(2);
    } else {
        answerValue.innerText = "Not Enough Info";
    }
})


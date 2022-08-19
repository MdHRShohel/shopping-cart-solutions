function updateCaseNumber(isIncrease){
    const previousCaseNumberField = document.getElementById('case-number-field');
    const caseNumberString = previousCaseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);

    let newCaseNumber;
    if(isIncrease === true){
        newCaseNumber = previousCaseNumber+1;
    }
    else{
        newCaseNumber = previousCaseNumber-1;
    }

    previousCaseNumberField.value = newCaseNumber;

    return newCaseNumber;
}

function updateCaseTotalPrice(newCaseNumber){
const caseTotalPrice = newCaseNumber * 59;
const caseTotalElement = document.getElementById('case-total');
caseTotalElement.innerText = caseTotalPrice;
}
// -----------------------------------------------------
// -----------------------------------------------------
function updatePhoneNumber(isIncrease){
    const previousPhoneNumberField = document.getElementById('phone-number-field');
    const previousPhoneNumberString = previousPhoneNumberField.value;
    const previousPhoneNumber = parseInt(previousPhoneNumberString);

    let newPhoneNumber;
    if(isIncrease === true){
        newPhoneNumber = previousPhoneNumber + 1;
    }
    else{
        newPhoneNumber = previousPhoneNumber - 1;
    }
    previousPhoneNumberField.value = newPhoneNumber;
    return newPhoneNumber;
}

function updatePhoneTotalPrice(newPhoneNumber){  
    const phoneTotalPrice = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = phoneTotalPrice;
}

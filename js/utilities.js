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
////////////////////////////////////////////
function setTextElementById(elementId, value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function getTextElementValueByID(elementId){
     //calculate total 
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}

function calculateSubTotal(){
    const currentPhoneTotal = getTextElementValueByID('phone-total');
   const currentCaseTotal = getTextElementValueByID('case-total');
   const currentSubTotal = currentPhoneTotal + currentCaseTotal;

   setTextElementById('sub-total', currentSubTotal);
   //calculate Tax
   const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
   const taxAmount = parseFloat(taxAmountString);

   setTextElementById('tax-amount',taxAmount);

   const finalAmount = currentSubTotal + taxAmount;

   setTextElementById('final-total',finalAmount)

}
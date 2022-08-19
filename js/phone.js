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




document.getElementById('btn-phone-plus').addEventListener('click',function(){
   const newPhoneNumber = updatePhoneNumber(true);
   updatePhoneTotalPrice(newPhoneNumber);
})


document.getElementById('btn-phone-minus').addEventListener('click',function(){
    const newPhoneNumber = updatePhoneNumber(false);
   updatePhoneTotalPrice(newPhoneNumber);
})

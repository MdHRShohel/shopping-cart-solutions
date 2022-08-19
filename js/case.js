document.getElementById('btn-case-plus').addEventListener('click',function(){
    const newCaseNumber = updateCaseNumber(true);
    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();
})

document.getElementById('btn-case-minus').addEventListener('click',function(){
    const newCaseNumber = updateCaseNumber(false);
    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();
})

document.getElementById('btn-phone-plus').addEventListener('click',function(){
   const newPhoneNumber = updatePhoneNumber(true);
   updatePhoneTotalPrice(newPhoneNumber);
   //calculate subtotal 
   calculateSubTotal();

})


document.getElementById('btn-phone-minus').addEventListener('click',function(){
    const newPhoneNumber = updatePhoneNumber(false);
    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubTotal();
})

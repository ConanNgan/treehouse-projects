
// global fields
const nameField = document.getElementById('name');
nameField.focus();

const otherTextField = document.getElementById('other-job-role');
otherTextField.hidden = true;
const activitiesBox = document.getElementById('activities-box');


//validators
function isAcceptableEmail(email){
 return /^\S+@\S+\.\S+$/.test(email);
}

const jobSelector = document.getElementById('title');
jobSelector.addEventListener('change', e =>{
    if(e.target.value === 'other'){
        otherTextField.hidden = false;
    }
});

function isValidCreditCardNumber(input){
    return /^\d{13}\d?\d?\d?$/.test(input.value);
 }
 function isValidZip(input){
     return /^\d{5}$/.test(input.value);
  }
  function isValidCVV(input){
    console.log(/^\d{3}$/.test(input.value) + 'what? ' + input.value); 
    return /^\d{3}$/.test(input.value);

  }
 

const colorSelector = document.getElementById('color');
colorSelector.disabled = true;

const designSelector = document.getElementById('design');
designSelector.addEventListener('change', (e) => {
    colorSelector.disabled = false;
    if (e.target.value === 'js puns'){
        for ( let element of colorSelector.querySelectorAll('option[data-theme = "heart js"]')){
            element.hidden = true;    
        }
        for ( let element of colorSelector.querySelectorAll('option[data-theme = "js puns"]')){
            element.hidden = false;    
        }
    }else{
        for ( let element of colorSelector.querySelectorAll('option[data-theme = "heart js"]')){
            element.hidden = false;    
        }
        for ( let element of colorSelector.querySelectorAll('option[data-theme = "js puns"]')){
            element.hidden = true;    
        }
    }

});

let total = 0;
const activitiesChecklist = document.getElementById('activities');
activitiesChecklist.addEventListener('change', (e) =>{
    if (e.target.checked){
        console.log('ok' + total + 'datacost:' +e.target.dataset.cost);
        total +=  parseInt(e.target.dataset.cost,10);
    }else{total -= parseInt(e.target.dataset.cost,10);}
    const activitiesCost= document.getElementById('activities-cost');
    activitiesCost.textContent = `Total: $${total}`;
});

const PaymentSelect =document.getElementById('payment');
PaymentSelect.value = 'credit-card';

// paypal
// bitcoin
// credit-card
const paymentOptionPaypal = document.getElementById('paypal');
const paymentOptionBitcoin = document.getElementById('bitcoin');
const paymentOptionCreditCard = document.getElementById('credit-card');

        paymentOptionPaypal.hidden = true;
        paymentOptionCreditCard.hidden = false;
        paymentOptionBitcoin.hidden  = true;

PaymentSelect.addEventListener('change', e =>{
    if (e.target.value === 'bitcoin'){
        paymentOptionPaypal.hidden = true;
        paymentOptionCreditCard.hidden = true;
        paymentOptionBitcoin.hidden  = false
    } else  if (e.target.value === 'credit-card'){
        paymentOptionPaypal.hidden = true;
        paymentOptionCreditCard.hidden = false;
        paymentOptionBitcoin.hidden  = true;
    } else  if (e.target.value === 'paypal'){
        paymentOptionPaypal.hidden = false;
        paymentOptionCreditCard.hidden = true;
        paymentOptionBitcoin.hidden  = true;
    }
    else  if (e.target.value === 'select method'){
        paymentOptionPaypal.hidden = true;
        paymentOptionCreditCard.hidden = true;
        paymentOptionBitcoin.hidden  = true;
    }
});

function correctName(){
    if(nameField.value === '' || /\w*/.test(nameField.value)){

        console.log("name's ok");
        return true;
    } 
    return false;

}

const form = document.querySelector('form');


// submit


form.addEventListener('submit', (e)=>{
    console.log('asdf');
    //e.preventDefault();
    let submit = true;
 //correct name?   
    if(!correctName()) submit = false;
 //correct email?   
    if( !isAcceptableEmail(document.getElementById('email').value) ) submit = false;
//item Selected?   

    let itemSelected = false;

    for ( let element of activitiesBox.children) {
        if(element.children[0].checked){
            itemSelected = true;
        }
    }
    if (!itemSelected){
        activitiesBox.parentElement.className = 'activities not-valid';
     //   activitiesBox.parentElement.lastElementChild.className= 'activities-hint hintShow';
        submit = false;
        console.log('item is not ok');
    } else{
        activitiesBox.parentElement.className = 'activities valid';
        activitiesBox.parentElement.lastElementChild.className= 'activities-hint hint';

    }

//correct creditCardInformation?

    if(!paymentOptionCreditCard.hidden){
        const creditCardNumberInput = document.getElementById('cc-num');
       if(!isValidCreditCardNumber(creditCardNumberInput)){
        submit = false;
        console.log('ccn is not ok');
       }
       const zipCodeInput = document.getElementById('zip');
       if(!isValidZip(zipCodeInput)){
        submit = false;
        console.log('zip is not ok');
       }
       const CVVInput = document.getElementById('cvv');
       if(!isValidCVV(CVVInput)){
        submit = false;
        console.log('cvv is not ok');
       }
       
    }

if (submit === false){
    e.preventDefault();
}

});

//checkboxFocuslistener


const labelElementsofCheckbox= activitiesBox.children;
for(let i = 0; i < labelElementsofCheckbox.length ; i++){
    labelElementsofCheckbox[i].firstElementChild.addEventListener('focus', e =>{
        e.target.parentElement.className = 'focus';
    });
    labelElementsofCheckbox[i].firstElementChild.addEventListener('blur', e =>{
        e.target.parentElement.className = '';
    });

}



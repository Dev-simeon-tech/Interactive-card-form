// Output text
const cardNumber = document.querySelector(".card-number");
const cardName = document.querySelector(".name");
const cardMonth = document.querySelector(".month");
const cardYear = document.querySelector(".year");
const cardCvc = document.getElementById('cvc')

// Input form
const numberInp = document.getElementById('number');
const nameInp = document.getElementById('card-name');
const monthInp = document.getElementById('month');
const yearInp = document.getElementById('year');
const cvcInp = document.getElementById('cvc-no');

const card_2 = document.querySelector('.card-2')
const card_2Btn =document.querySelector('.card-2_btn')
const inputs = document.querySelectorAll('input')
const form = document.getElementById('form')

function format(s){
    return s.replace(/(\d{4})/g,"$1 ")
}
function formatNumber(a){ 
   return a = (a < 10) ? "0" + a : a
}
// monthInp.addEventListener('change', (e)=>{
//    cardMonth.innerHTML = formatNumber(monthInp.value)
// })
  
function setCardNumber(e){
    cardNumber.innerText = format(e.target.value);
}
function setCardName(e){
    cardName.innerHTML = e.target.value;
}
function setCardMonth(e){
    cardMonth.innerHTML = formatNumber(e.target.value);
}
function setCardYear(e){
    cardYear.innerHTML = formatNumber(e.target.value);
}
function setCardCvc(e){
    cardCvc.innerHTML = e.target.value;
}
// function formatNumber(n){
//     return format(n.target.value)
// }

numberInp.addEventListener('input',setCardNumber)
nameInp.addEventListener('input',setCardName)
monthInp.addEventListener('input',setCardMonth)
yearInp.addEventListener('input',setCardYear)
cvcInp.addEventListener('input',setCardCvc)

const errorMsg = document.querySelectorAll('.error-msg')

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    validate();
    if(validate()){
        onComplete();
    }
})

function setError(element,message){
    inputBox = element.parentElement;
    element.style.borderColor = 'hsl(0, 100%, 66%)';
    const msg = inputBox.querySelector('.error-msg')
    msg.innerHTML = message
    
}
function setPass(element){
    element.style.borderColor = null;
    inputBox = element.parentElement;
    const msg = inputBox.querySelector('.error-msg')
    msg.innerHTML = ''

}
const validate = function(){

    let isvalid = false ;
    // let letters = /[a-zA-Z]/;
    if(!nameInp.value ){
        setError(nameInp,"can't be blank")
        isvalid = false;
    }
    else{
        setPass(nameInp)
        isvalid = true;
    }
    if(!numberInp.value ){
        setError(numberInp,"can't be blank")
        isvalid = false;
    }
    else{
        setPass(numberInp)

    }
    if(!monthInp.value ){
        setError(monthInp,"can't be blank")
        isvalid = false;

    }
    else{
        setPass(monthInp)

    }
    if(!yearInp.value ){
        setError(yearInp,"can't be blank")
        isvalid = false;

    }
    else{
        setPass(yearInp)
    }
    if(!cvcInp.value ){
        setError(cvcInp,"can't be blank")
        isvalid = false;

    }
    else{
        setPass(cvcInp)
    }
    return isvalid
}
card_2Btn.addEventListener('click',onComplete)
function onComplete(){
    form.classList.toggle("hide")
    card_2.classList.toggle('show')
    inputs.forEach( input => {
        input.value = ''
    });
    defaultText();

}

function defaultText(){
    cardNumber.textContent = "0000 0000 0000 0000";
    cardName.textContent = "Jane Appleseed";
    cardMonth.textContent = "00";
    yearInp.textContent = "00";
    cardCvc.textContent = "000";
}
// console.log(inputs)
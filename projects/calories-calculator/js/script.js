let userAge = document.querySelector('#age');
let userHeight = document.querySelector('#height');
let userWeight = document.querySelector('#weight');
let userGender = document.querySelectorAll('.switcher input');
let userActivity = document.querySelectorAll('.radios-group input');
let userData = [userAge, userHeight, userWeight];

let submitBtn = document.querySelector('.form__submit-button');
let resetBtn = document.querySelector('.form__reset-button');

let form = document.querySelector('.counter__form');
let counterResult = document.querySelector('.counter__result');
let caloriesValue = Array.from(counterResult.querySelectorAll('li span'));


userData.forEach(element => {
    element.oninput = () => {
        enableResetButton(element);
        if(enableSubmitButton(userData)){
            submitBtn.removeAttribute('disabled')
        }
    } 
});

resetBtn.addEventListener('click', () => {
    submitBtn.setAttribute('disabled', 'disabled');
    counterResult.classList.add('counter__result--hidden');
    window.scrollTo(0, 0);
})

form.addEventListener('submit', (event) => {
    event.preventDefault();
    counterResult.classList.remove('counter__result--hidden');
    window.scrollTo(0, 1000);
}) 

submitBtn.addEventListener('click', () => {
    for(let value of caloriesValue){
        value.textContent = calculateFormula(userData);
    }
})

function enableResetButton(input){
    if(input.value.trim() !== ''){
        resetBtn.removeAttribute('disabled')
    }
}

function enableSubmitButton(inputArray) {
    for(let element of inputArray) {
        if(element.value.trim() === ''){
            return false;
        }
    };
    return true;
}

function calculateFormula(userData) {
    let calc = (10 * userData[2].value) + (6.25 * userData[1].value) - (5 * userData[0].value) - 161;
    return calc
}
/* N = (10 × вес в килограммах) + (6,25 × рост в сантиметрах) − (5 × возраст в
    годах) − 161 */
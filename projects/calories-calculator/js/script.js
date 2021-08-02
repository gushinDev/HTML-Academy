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
    
    let currentGender = userGender[0].checked ? userGender[0] : userGender[1]; 
    let usrAct = checkUserActivity(userActivity);
    
    let userCalories = calculateFormula(userData, currentGender.value, usrAct.value);
    caloriesValue[1].textContent = Math.trunc(userCalories);

    caloriesValue[0].textContent = Math.trunc(userCalories - (userCalories * 15 / 100));

    caloriesValue[2].textContent = Math.trunc(userCalories + (userCalories * 15 / 100));
    
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

function calculateFormula(userData, gender, activity) {
    
    let activityKoefficient = 0;
    switch (activity) {
        case 'min' : 
        activityKoefficient = 1.2;
        break;

        case 'low' : 
        activityKoefficient = 1.375;
        break;

        case 'medium' : 
        activityKoefficient = 1.55;
        break;

        case 'high' : 
        activityKoefficient = 1.725;
        break;

        case 'max' : 
        activityKoefficient = 1.9;
        break;
    }

    let genderKoefficient = gender === 'male' ? 5 : -161;
    let calc = (10 * userData[2].value) + (6.25 * userData[1].value) - (5 * userData[0].value) + genderKoefficient;
    
    
    return calc * activityKoefficient;
}

function checkUserActivity(userActivity){
    for(let active of userActivity) {
        if(active.checked){
            return active;
        } 
    }
}
/* N = (10 × вес в килограммах) + (6,25 × рост в сантиметрах) − (5 × возраст в
    годах) − 161 
    +5 form men*/
    /* Минимальная: 1.2.
Низкая: 1.375.
Средняя: 1.55.
Высокая: 1.725.
Очень высокая: 1.9. */
/* Набор веса: прибавляем 15% от нормы к этой норме.
Сброс веса: вычитаем 15% от нормы из этой нормы. */
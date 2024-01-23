const calculatorBtns = document.querySelector('.calculator__btns');
let calculatorValue = document.querySelector('.calculator__value');
const operatorBtns = document.querySelectorAll('.operator__btn');
const equalsBtn = document.querySelector('.equals__btn');
let calculatorArr = [];
const operatorBtnsValues = [];

operatorBtns.forEach((item) =>{
    operatorBtnsValues.push(item.value)
})

calculatorBtns.addEventListener('click', (event) => {

    if (event.target.value != undefined) {
        let elementValue = event.target.value;
        
        if (operatorBtnsValues.includes(elementValue)) {
             
            if (operatorBtnsValues.includes(calculatorArr[calculatorArr.length-1])) {
                calculatorArr[calculatorArr.length-1] = elementValue;
            } else {
                calculatorArr.push(elementValue);
            }

        } else {
            calculatorArr.push(elementValue);
        }
        calculatorValue.textContent = calculatorArr.join('');
    }

})

equalsBtn.addEventListener('click', ()=> {
    console.log(eval(calculatorArr.join('')))
    calculatorValue.textContent = eval(calculatorArr.join(''));
});
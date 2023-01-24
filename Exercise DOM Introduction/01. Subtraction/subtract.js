function subtract() {
    let firstNumber = document.getElementById('firstNumber');
    let secondNumber = document.getElementById('secondNumber');
    let resultElement = document.getElementById('result');

    let result = Number(firstNumber.value) - Number(secondNumber.value);

    resultElement.textContent = result;
}

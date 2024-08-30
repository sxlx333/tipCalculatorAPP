

document.addEventListener('DOMContentLoaded', () => {

const billInput = document.querySelector('.inputBill')
const rateSelect = document.getElementById('rates')
const button = document.querySelector('.btn');
const tipResult = document.querySelector('.tipResult');
const totalResult = document.querySelector('.totalResult')

button.addEventListener("click", calculateTip);
function calculateTip(){
    const billAmount = parseFloat(billInput.value);


    const percentageValue = rateSelect.value;
    const percentage = parseFloat(percentageValue) / 100;
    const tip = billAmount * percentage;
    const total = billAmount + tip;

    const formattedTip = tip.toFixed(2);
    const formattedTotal = total.toFixed(2);

    tipResult.innerHTML = `$ ${formattedTip}`;
    totalResult.innerHTML = `$ ${formattedTotal}`;
}

})























    //In JavaScript, when you retrieve values from input fields or other elements, they are usually in string format. Performing arithmetic operations on strings can lead to unexpected results, especially if you’re not converting these strings to numbers.

    //This event ensures that the script runs only after the entire DOM has been fully loaded and parsed. This is crucial because if your script tries to interact with DOM elements before they are available, it can lead to errors or unexpected behavior.
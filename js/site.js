// Get values from the UI
// Controller function
function getValues() {
    // get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    // We need to validate our input
    // parse into Integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        // call generateNumbers
        let numbers = generateNumbers(startValue, endValue);
        // call displayNumbers
        displayNumbers(numbers);
    } else {
        alert("You must enter integers");
    }
}

// Generate numbers from the startVaule to the endValue
// Logic function(s)
function generateNumbers(startValue, endValue) {

    let numbers = [];
    // We want to get all numbers from start to end, inclusive to both
    for(let i = startValue; i <= endValue; i++) {

        numbers.push(i);
    }
    return numbers;
}

// Display the numbers and mark the even numbers BOLD
// View function
function displayNumbers(numbers) {

    let templateRows = "";
    for (let i = 0; i < numbers.length; i++) {

        let className = "even:;"
        let number = numbers[i];

        if(number % 2 === 0) {
            className = "even";
        } else {
            className = "odd";
        }
        templateRows += `<tr><td class="${className}">${number}</td></tr>`;
    }
    document.getElementById("results").innerHTML = templateRows;    
}
function temperatureConverter() {
    var fahrenheit = parseFloat(prompt("Enter temperature in Fahrenheit:"));
    if (!isNaN(fahrenheit)) {
        var celsius = (fahrenheit - 32) * 5 / 9;
        alert(fahrenheit + "°F is equal to " + celsius.toFixed(2) + "°C.");
    } else {
        alert("Invalid input. Please enter a valid number.");
    }
}

function longestWord() {
    var word1 = prompt("Enter the first word:");
    var word2 = prompt("Enter the second word:");
    if (word1.length > word2.length) {
        alert('The longer word is: ' + word1);
    } else if (word2.length > word1.length) {
        alert('The longer word is: ' + word2);
    } else {
        alert('Both words are of equal length.');
    }
}

function knowBirthstone() {
    var month = prompt("Enter your birth month:").toLowerCase();
    var birthstones = {
        january: "Garnet",
        february: "Amethyst",
        march: "Aquamarine",
        april: "Diamond",
        may: "Emerald",
        june: "Pearl or Alexandrite",
        july: "Ruby",
        august: "Peridot",
        september: "Sapphire",
        october: "Opal or Tourmaline",
        november: "Topaz or Citrine",
        december: "Turquoise or Zircon"
    };
    if (birthstones[month]) {
        alert("Your birthstone is: " + birthstones[month]);
    } else {
        alert("Invalid month. Please enter a valid month.");
    }
}

function basicOperator() {
    var num1 = parseFloat(prompt("Enter the first number:"));
    var num2 = parseFloat(prompt("Enter the second number:"));

    if (isNaN(num1) || isNaN(num2)) {
        alert("Invalid input. Please enter valid numbers.");
        return;
    }

    var operator = prompt("Choose an operator (+, -, *, /, %):");
    var result;

    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "*") {
        result = num1 * num2;
    } else if (operator === "/") {
        if (num2 !== 0) {
            result = num1 / num2;
        } else {
            result = "Error: Division by zero!";
        }
    } else if (operator === "%") {
        if (num2 !== 0) {
            result = num1 % num2;
        } else {
            result = "Error: Division by zero!";
        }
    } else {
        result = "Invalid operator!";
    }

    alert("Result: " + result);
}

function acceleration() {
    var initialVelocity = parseFloat(prompt("Enter the initial velocity (m/s):"));
    var finalVelocity = parseFloat(prompt("Enter the final velocity (m/s):"));
    var time = parseFloat(prompt("Enter the time taken (seconds):"));

    if (isNaN(initialVelocity) || isNaN(finalVelocity) || isNaN(time) || time === 0) {
        alert("Invalid input or time cannot be zero.");
    } else {
        var acceleration = (finalVelocity - initialVelocity) / time;
        alert("The acceleration is: " + acceleration.toFixed(2) + " m/s²");
    }
}

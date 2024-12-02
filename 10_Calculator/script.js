const screenDisplay = document.querySelector(".screen");
const buttons = document.querySelectorAll("button");

let calculation = [];
let accumulativeCalculation = "";

// Function to handle button and keyboard input
function calculate(value) {
    if (value === "CLEAR") {
        calculation = [];
        accumulativeCalculation = "";
        screenDisplay.textContent = "0";
    } else if (value === "=") {
        try {
            screenDisplay.textContent = eval(accumulativeCalculation) || "0";
            calculation = [screenDisplay.textContent];
            accumulativeCalculation = screenDisplay.textContent;
        } catch (error) {
            screenDisplay.textContent = "Error";
            calculation = [];
            accumulativeCalculation = "";
        }
    } else {
        calculation.push(value);
        accumulativeCalculation = calculation.join("");
        screenDisplay.textContent = accumulativeCalculation;
    }
}

// Attach click event listeners to buttons
buttons.forEach(button =>
    button.addEventListener("click", () => calculate(button.textContent))
);

// Handle keyboard input
document.addEventListener("keydown", (event) => {
    const key = event.key;

    // Map keys to calculator functionality
    if (!isNaN(key) || ["+", "-", "*", "/", "."].includes(key)) {
        calculate(key); // Numbers and operators
    } else if (key === "Enter") {
        calculate("="); // Enter key for "="
        event.preventDefault(); // Prevent unintended behavior
    } else if (key === "Backspace") {
        // Remove last character
        calculation.pop();
        accumulativeCalculation = calculation.join("");
        screenDisplay.textContent = accumulativeCalculation || "0";
    } else if (key.toLowerCase() === "c") {
        calculate("CLEAR"); // "C" key for clearing
    }
});

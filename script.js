document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".buttons button");
    let currentInput = "";

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const buttonText = button.textContent;

            if (buttonText === "=") {
                try {
                    currentInput = eval(currentInput);
                    display.value = currentInput;
                } catch (error) {
                    display.value = "Error";
                }
            } else if (buttonText === "C") {
                currentInput = "";
                display.value = "";
            } else if (buttonText === "%") {
                currentInput += "*0.01*";
                display.value = currentInput;
            } else if (buttonText === "⌫"){
                currentInput = display.value.slice(0, -1);
                display.value = currentInput;
            } else if (buttonText === "^"){
                currentInput += "**";
                display.value = currentInput;}
            else {
                currentInput += buttonText;
                display.value = currentInput;
            }
        });
    });
});


const button = document.getElementById("submit1");
const radioButtons = document.querySelectorAll("input[name='choice']");

button.addEventListener("click", () => {
    const selectedRadio = Array.from(radioButtons).find(radio => radio.checked);
    if (selectedRadio) {
        document.getElementById("custom-div").innerHTML = "The choice you chose was: " + selectedRadio.value;
    } else {
        document.getElementById("custom-div").innerHTML = "No choice selected.";
    }
});

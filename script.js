const button = document.getElementById("submit1"); // Assuming your button has an id of 'submit-button'

button.addEventListener("click", () => {
const selectedRadio = Array.from(radioButtons).find(radio => radio.checked);
if (selectedRadio) {
    document.getElementById("custom-div").innerHTML = "The choice you chose was: " + selectedRadio.value + "\n";
} else {
    document.getElementById("custom-div").innerHTML = "No choice selected.";
}
});

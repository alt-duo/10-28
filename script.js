document.getElementById("submit1").addEventListener("click", function() {
    // Get the selected radio button
    const choices = document.getElementsByName("choice");
    let selectedChoice;
    
    for (const choice of choices) {
        if (choice.checked) {
            selectedChoice = choice.value;
            break;
        }
    }
    
    const customDiv = document.getElementById("custom-div");
    if (selectedChoice) {
        switch (selectedChoice) {
            case 'a':
                customDiv.innerHTML = "choice a";
                break;
            case 'b':
                customDiv.innerHTML = "choice b";
                break;
            case 'c':
                customDiv.innerHTML = "choice c";
                break;
            case 'd':
                customDiv.innerHTML = "choice d";
                break;
            default:
                customDiv.innerHTML = "<p>Please select an option.</p>";
        }
    } else {
        customDiv.innerHTML = "<p>Please select an option.</p>";
    }
});

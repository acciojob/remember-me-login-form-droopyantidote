// Check if there are saved details in local storage
const savedUsername = localStorage.getItem("username");
const savedPassword = localStorage.getItem("password");

// Display the existing user button if there are saved details
if (savedUsername && savedPassword) {
    const existingButton = document.createElement("button");
    existingButton.textContent = "Login as existing user";
    existingButton.id = "existing";
    document.body.appendChild(existingButton);

    existingButton.addEventListener("click", function() {
        alert("Logged in as " + savedUsername);
    });
}

// Submit button functionality
const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Retrieve input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const rememberCheckbox = document.getElementById("remember");

    // Save or remove details based on checkbox state
    if (rememberCheckbox.checked) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
    } else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
    }

    // Display alert
    alert("Logged in as " + username);
});

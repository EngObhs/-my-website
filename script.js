document.addEventListener('DOMContentLoaded', () => {
    
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (email === "" || password === "") {
            alert("Please fill in all fields");
            return;
        }

        console.log("Login Attempt:");
        console.log("Email:", email);
        console.log("Password:", password);

        alert("Data received successfully! (Next step: Connect to Database)");
    });

});
document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // ⚠️ ADMIN CREDENTIALS (Change these)
    // ==========================================
    const ADMIN_EMAIL = "admin@mywebsite.com";  
    const ADMIN_PASSWORD = "MySecret123";        
    // ==========================================

    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Check credentials
        if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
            
            // Hide login form
            document.querySelector('.login-container').style.display = 'none';
            
            // Show admin dashboard
            const adminPanel = document.createElement('div');
            adminPanel.style.textAlign = 'center';
            adminPanel.style.color = '#ffffff';
            adminPanel.style.padding = '40px';
            adminPanel.innerHTML = `
                <h1 style="font-size: 32px; margin-bottom: 15px;">Welcome, Admin 👑</h1>
                <p style="color: #aaaaaa; margin-bottom: 30px;">Logged in as: ${email}</p>
                <button onclick="location.reload()" style="background: #3b6ce6; color: white; border: none; padding: 12px 25px; border-radius: 5px; cursor: pointer; font-size: 16px;">Log Out</button>
            `;
            document.body.appendChild(adminPanel);
            
        } else {
            // Access denied
            alert("Access Denied: Incorrect email or password.");
            document.getElementById('password').value = '';
        }
    });

});

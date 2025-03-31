function handleRegistration(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Here you would typically send this data to a server
    // For now, we'll just store it in localStorage
    localStorage.setItem('userEmail', email);
    
    // Redirect to role selection page
    window.location.href = 'role-selection.html';
    
    return false;
}

// Handle login link click
document.getElementById('loginLink').addEventListener('click', function(e) {
    e.preventDefault();
    // You can implement login functionality here
    alert('Login functionality will be implemented here');
}); 
// login.js - Login functionality

const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

// Hardcoded credentials (in a real app, this would be server-side)
const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'admin';

if (loginForm) {
  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      localStorage.setItem('isLoggedIn', 'true');
      window.location.href = 'admin-dashboard.html';
    } else {
      errorMessage.textContent = 'Invalid username or password';
      errorMessage.style.display = 'block';
    }
  });
}
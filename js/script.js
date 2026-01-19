// script.js - General JavaScript for the portfolio website

// Light Mode Toggle (since dark is default)
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

function toggleDarkMode() {
  body.classList.toggle('light-mode');
  const isLightMode = body.classList.contains('light-mode');
  localStorage.setItem('lightMode', isLightMode);
  updateDarkModeIcon();
}

function updateDarkModeIcon() {
  const isLightMode = body.classList.contains('light-mode');
  darkModeToggle.textContent = isLightMode ? '🌙' : '☀️';
}

function loadDarkModePreference() {
  const lightMode = localStorage.getItem('lightMode');
  if (lightMode === 'true') {
    body.classList.add('light-mode');
  }
  updateDarkModeIcon();
}

if (darkModeToggle) {
  darkModeToggle.addEventListener('click', toggleDarkMode);
  loadDarkModePreference();
}

// Check Login Status
function checkLoginStatus() {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  if (isLoggedIn) {
    body.classList.add('logged-in');
    body.classList.remove('logged-out');
  } else {
    body.classList.add('logged-out');
    body.classList.remove('logged-in');
  }
}

checkLoginStatus();

// Logout Function
function logout() {
  localStorage.removeItem('isLoggedIn');
  window.location.href = 'index.html';
}

// Utility Functions
function getProjects() {
  return JSON.parse(localStorage.getItem('projects')) || [];
}

function saveProjects(projects) {
  localStorage.setItem('projects', JSON.stringify(projects));
}

function getComments(projectId) {
  return JSON.parse(localStorage.getItem(`comments_${projectId}`)) || [];
}

function saveComments(projectId, comments) {
  localStorage.setItem(`comments_${projectId}`, JSON.stringify(comments));
}
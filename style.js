// script.js

// JavaScript for Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// Check for saved dark mode preference in localStorage
const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

// Apply dark mode if previously enabled
if (isDarkMode) {
    body.classList.add('dark-mode');
    darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>'; // Change icon to sun
}

// Toggle dark mode on button click
darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDarkModeEnabled = body.classList.contains('dark-mode');

    // Save user preference in localStorage
    if (isDarkModeEnabled) {
        localStorage.setItem('darkMode', 'enabled');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>'; // Change icon to sun
    } else {
        localStorage.setItem('darkMode', 'disabled');
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>'; // Change icon to moon
    }
});
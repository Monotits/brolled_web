// Future JavaScript code will be added here.
// For example:
// - Smooth scrolling
// - Animations
// - Form validations
// - Dynamic content loading

console.log("script.js loaded for Brolled website.");

// Hamburger menü aç/kapa
const hamburger = document.getElementById('hamburger-menu');
const navLinks = document.getElementById('nav-links');
if (hamburger && navLinks) {
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('open');
    });
} 
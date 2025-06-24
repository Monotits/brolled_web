// Future JavaScript code will be added here.
// For example:
// - Smooth scrolling
// - Animations
// - Form validations
// - Dynamic content loading

console.log("script.js loaded for Brolled website.");

// Hamburger menü aç/kapa
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    const video = document.querySelector('.hero-video');
    const volumeBtn = document.getElementById('volume-btn');

    // Tarayıcılar genellikle kullanıcı etkileşimi olmadan sesli medyayı engeller.
    // Bu yüzden videoyu başlangıçta sessize alıp, butona basıldığında sesi açıyoruz.
    video.muted = true;
    volumeBtn.innerHTML = '🔇';


    volumeBtn.addEventListener('click', () => {
        if (video.muted) {
            video.muted = false;
            volumeBtn.innerHTML = '🔊';
        } else {
            video.muted = true;
            volumeBtn.innerHTML = '🔇';
        }
    });
}); 
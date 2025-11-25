const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.reveal-about').forEach(el => {
    observer.observe(el);
});

// ===== HAMBURGER MENU TOGGLE =====
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');   // turns into X
    navLinks.classList.toggle('active');    // shows menu
});

// ===== SEARCH ICON TOGGLE (mobile) =====
const searchIcon = document.querySelector('.search-icon');
const searchBox = document.querySelector('.search-box');

searchIcon.addEventListener('click', () => {
    searchBox.classList.toggle('active');
});

const aboutBox = document.querySelector('.about-content');
const missionBox = document.querySelector('.mission');

aboutBox.addEventListener('click', () => {
    aboutBox.classList.toggle('active');
});

missionBox.addEventListener('click', () => {
    missionBox.classList.toggle('active');
});
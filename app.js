const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');
const html = document.documentElement;
const links = navbar.querySelectorAll('a');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');

    // Prevent scrolling when the menu is opened.
    if (navbar.classList.contains('active')) {
        html.setAttribute('data-disallow-body-scroll', 'true');
        html.style.overflow = 'hidden';
    } else {
        html.setAttribute('data-disallow-body-scroll', 'false');
        html.style.overflow = 'auto';
    }
});

// Add a click event to each <a> tag.
links.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        html.setAttribute('data-disallow-body-scroll', 'false');
        html.style.overflow = 'auto';
    });
});
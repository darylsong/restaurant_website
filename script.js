const toggleBtn = document.querySelector('a.header-nav-toggle');
const navbar = document.querySelector('nav.header-nav');
toggleBtn.addEventListener('click', (event) => {
    navbar.classList.toggle('active');
});

const navBtns = document.querySelectorAll('nav.header-nav a');
navBtns.forEach(navBtn => {
    navBtn.addEventListener('click', (event) => {
        navbar.classList.remove('active');
    });
});

const submitBtn = document.querySelector('button.form-submit-btn');
submitBtn.addEventListener('click', (event) => event.preventDefault());

const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav_link');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
    navToggle.innerHTML = navMenu.classList.contains('show-menu')
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
});

// menyu band bosilganda yopish
navLinks.forEach(link =>
    link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
        navToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    })
);




const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('nav a[href*=' + sectionId + ']')

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
});

sr.reveal('.home-data, .about-img', {});
sr.reveal('.home-img, .about_subtitle, .about_text, .skills-img', { delay: 400 });
sr.reveal('.home_social-icon', { interval: 200 });
sr.reveal('.skill, .contact_input, .submit-btn', { interval: 200 }); 
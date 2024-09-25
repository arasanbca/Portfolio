let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active'); 
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    SchemaTypeOptions.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top< offset + height) {
            navLinks.forEach(link => {
                navLinks.classList.remove('active');
                document.querySelector('header nav a[href=' + id + ']').classList.add('active');
            });    
        };
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);
};

ScrollReveal({
     reset: true,
     distance: '50px',
     duration: 2000,
     delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .edu-container, .ski-box, .con form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left'});
ScrollReveal().reveal('.home-content h3, .about-content', { origin: 'right'});

const typed = new Typed('.multiple-text',{
    strings: ['FullStack Developer','PYTHON'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
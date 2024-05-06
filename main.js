let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

// scroll section
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navbar a'); // Updated selector

window.onscroll = () => {
    let fromTop = window.scrollY;

    sections.forEach(sec => {
        let sectionId = sec.getAttribute('id');
        let navLink = document.querySelector('.navbar a[href="#' + sectionId + '"]');

        if (sec.offsetTop - 150 <= fromTop && sec.offsetTop + sec.offsetHeight - 150 > fromTop) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLink.classList.add('active');
        } else {
            navLink.classList.remove('active');
        }
    });

    // Sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', fromTop > 100);

    // Close the navbar when scrolling
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

// -------scroll reveal ----------
ScrollReveal({ 
    distance:'80px',
    duration:2000,
    delay:200.
 });
 ScrollReveal().reveal('.home-content , heading',{origin:'top'});
 ScrollReveal().reveal('.home-img .services-container , .portfolio-box , .contact-form' ,{origin:'bottom'});
 ScrollReveal().reveal('.home-contact h1 ,.about-img ',{origin:'left'});
 ScrollReveal().reveal('.home-content p, .about-content', {origin:'right'});

//  typeed js

const typed = new Typed('.multiple-text', {
strings:['Data  Analyst' , 'Power BI Developler' ],
typeSpeed:70,
backSpeed:70,
backDelay:1000,
loop:true,
});
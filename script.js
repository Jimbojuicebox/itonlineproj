/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*==================== sticky navbar ====================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


/*==================== scroll reveal ====================*/
ScrollReveal({
    // reset: true,
    distance: '150px',
    duration: 1500,
    delay: 150
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .skills-container, .certifications-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1', { origin: 'left' });
ScrollReveal().reveal('.home-content p', { origin: 'right' });


/*==================== typed js ====================*/
const typed = new Typed('.multiple-text', {
    strings: ['Web Development', 'AWS', 'Javascript', 'Azure', 'Python', 'HTML/CSS'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


/*================== contact form submission ============*/
function submitForm() {
    // Get the form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();
  
    // Set up the request
    xhr.open('POST', 'contact-form.php');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  
    // Handle the AJAX response
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // Update the message container with the response text
            var messageContainer = document.getElementById('message-container');
            messageContainer.innerHTML = xhr.responseText;

            // Hide the contact form
            var contactForm = document.getElementById('contact-form');
            contactForm.style.display = 'none';
        }
    };
  
    // Send the request
    xhr.send('name=' + name + '&email=' + email + '&message=' + message);
  }